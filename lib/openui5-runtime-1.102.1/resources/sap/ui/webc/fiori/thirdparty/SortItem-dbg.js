sap.ui.define(['sap/ui/webc/common/thirdparty/base/UI5Element'], function (UI5Element) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var UI5Element__default = /*#__PURE__*/_interopDefaultLegacy(UI5Element);

	const metadata = {
		tag: "ui5-sort-item",
		properties:  {
			text: {
				type: String,
			},
			selected: {
				type: Boolean,
			},
		},
		slots:  {
		},
		events:  {
		},
	};
	class SortItem extends UI5Element__default {
		static get metadata() {
			return metadata;
		}
	}
	SortItem.define();

	return SortItem;

});
