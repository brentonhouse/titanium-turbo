var _ = require('lodash'),
	CU = require('../compilerUtils'),
	styler = require('../styler'),
	U = require('../../../utils');

exports.parse = function(node, state) {
	return require('./base').parse(node, state, parse);
};

function parse(node, state, args) {
	var code = '',
		groupState,
		children = [],
		actionStyle = node.getAttribute('style');

	if (actionStyle && actionStyle.indexOf('.UI.iOS.') === -1) {
		node.setAttribute('style', 'Ti.UI.iOS.PREVIEW_ACTION_STYLE_' + actionStyle.toUpperCase());
	}

	_.each(U.XML.getElementsFromNodes(node.childNodes), function(child) {
		var childArgs = CU.getParserArgs(child, state);

		const generated_code =  CU.generateNodeExtended(child, state, {
			parent: {},
			post: function(node, state, args) {
				children.push(state.parent.symbol);

			}
		});

		if(typeof generated_code === 'object'){
			code += generated_code.content;
		} else {
			code += generated_code;
		}
		
	});

	if (children) {
		state.extraStyle = styler.createVariableStyle([
			['actions', '[' + children.join(',') + ']']
		]);
	}

	groupState = require('./default').parse(node, state);
	code += groupState.code;

	return {
		parent: {},
		styles: state.styles,
		code: code
	};
}
