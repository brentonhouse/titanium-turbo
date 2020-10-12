const _ = require('lodash');
const CU = require('../compilerUtils');

exports.parse = function(node, state) {
	state = _.extend(state, {
		itemContainerDefinition: {
			children: [
				{ name:'Alloy.Abstract.ButtonNames', property:'buttonNames' },
			],
			androidView: true,
			inViewHierarchy: false
		},
		extraOptions: {
			cancel: CU.generateUniqueId(),
			preferred: CU.generateUniqueId(),
			destructive: CU.generateUniqueId()
		}
	});

	const newState = require('./Alloy.Abstract._ItemContainer').parse(node, state);

	const newCode = _.map(state.extraOptions, (varName, name) => {
	
		const attr = _.find(node.attributes, ['nodeName', name]);
		if (attr === undefined) {
			return;
		}
		return `var ${varName} = ${attr && attr.nodeValue}`;
	}).join(';');

	newState.code = `${newCode};${newState.code}`;
	return newState;

};
