var _ = require('lodash'),
	styler = require('../styler'),
	CU = require('../compilerUtils'),
	U = require('../../../utils');

exports.parse = function(node, state) {
	return require('./base').parse(node, state, parse);
};

function parse(node, state, args) {
	var attributedStringsymbol,
		attributedStringObj = {},
		code = '';

	_.each(U.XML.getElementsFromNodes(node.childNodes), function(child) {
		if (CU.validateNodeName(child, 'Ti.UI.AttributedString')) {
			const generated_code = CU.generateNodeExtended(child, state, {
				parent: {},
				post: function(node, state, args) {
					attributedStringsymbol = state.parent.symbol;
				}
			});

			if(typeof generated_code === 'object'){
				code += generated_code.content;
			} else {
				code += generated_code;
			}
			

			node.removeChild(child);
		}
	});

	if (attributedStringsymbol) {
		attributedStringObj = styler.createVariableStyle('attributedString', attributedStringsymbol);
	}

	// Get label text from node text, if present
	var nodeText = U.XML.getNodeText(node),
		textObj = {};
	if (nodeText && nodeText.trim() !== '') {
		if (U.isLocaleAlias(nodeText)) {
			textObj = {'text': styler.STYLE_EXPR_PREFIX + nodeText};
		} else {
			textObj = styler.createVariableStyle('text', U.possibleMultilineString(U.trim(nodeText.replace(/'/g, "\\'"))));
		}

		if (nodeText.match(/\{([^}]+)\}/) !== null) {
			textObj['text'] = nodeText;
		}
	}

	if ( node.getAttribute('verticalAlign') === 'center' ) {
		node.setAttribute('verticalAlign', 'Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER');
	}
	if ( node.hasAttribute('value')) {
		node.setAttribute('text', node.getAttribute('value'));
	}

	state.extraStyle = _.extend(attributedStringObj, textObj);

	var nodeState = require('./default').parse(node, state);
	code += nodeState.code;

	// Generate runtime code using default
	return _.extend(nodeState, {
		code: code
	});
}
