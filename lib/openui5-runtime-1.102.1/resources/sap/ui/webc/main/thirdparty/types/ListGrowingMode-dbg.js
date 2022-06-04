sap.ui.define(['sap/ui/webc/common/thirdparty/base/types/DataType'], function (DataType) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var DataType__default = /*#__PURE__*/_interopDefaultLegacy(DataType);

	const ListGrowingModes = {
		Button: "Button",
		Scroll: "Scroll",
		None: "None",
	};
	class ListGrowingMode extends DataType__default {
		static isValid(value) {
			return !!ListGrowingModes[value];
		}
	}
	ListGrowingMode.generateTypeAccessors(ListGrowingModes);

	return ListGrowingMode;

});
