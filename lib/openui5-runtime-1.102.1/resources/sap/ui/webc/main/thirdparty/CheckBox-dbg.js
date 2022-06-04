sap.ui.define(['sap/ui/webc/common/thirdparty/base/Device', 'sap/ui/webc/common/thirdparty/base/UI5Element', 'sap/ui/webc/common/thirdparty/base/renderer/LitRenderer', 'sap/ui/webc/common/thirdparty/base/i18nBundle', 'sap/ui/webc/common/thirdparty/base/types/ValueState', 'sap/ui/webc/common/thirdparty/base/FeaturesRegistry', 'sap/ui/webc/common/thirdparty/base/util/AriaLabelHelper', 'sap/ui/webc/common/thirdparty/base/Keys', 'sap/ui/webc/common/thirdparty/icons/accept', './Icon', './Label', './types/WrappingType', './generated/i18n/i18n-defaults', './generated/templates/CheckBoxTemplate.lit', './generated/themes/CheckBox.css'], function (Device, UI5Element, litRender, i18nBundle, ValueState, FeaturesRegistry, AriaLabelHelper, Keys, accept, Icon, Label, WrappingType, i18nDefaults, CheckBoxTemplate_lit, CheckBox_css) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var UI5Element__default = /*#__PURE__*/_interopDefaultLegacy(UI5Element);
	var litRender__default = /*#__PURE__*/_interopDefaultLegacy(litRender);
	var ValueState__default = /*#__PURE__*/_interopDefaultLegacy(ValueState);

	let isGlobalHandlerAttached = false;
	let activeCb = null;
	const metadata = {
		tag: "ui5-checkbox",
		languageAware: true,
		properties:  {
			accessibleNameRef: {
				type: String,
				defaultValue: "",
			},
			accessibleName: {
				type: String,
			},
			disabled: {
				type: Boolean,
			},
			readonly: {
				type: Boolean,
			},
			required: {
				type: Boolean,
			},
			indeterminate: {
				type: Boolean,
			},
			checked: {
				type: Boolean,
			},
			text: {
				type: String,
			},
			valueState: {
				type: ValueState__default,
				defaultValue: ValueState__default.None,
			},
			 wrappingType: {
				type: WrappingType,
				defaultValue: WrappingType.None,
			},
			name: {
				type: String,
			},
			active: {
				type: Boolean,
			},
		},
		events:  {
			change: {},
		},
		slots:  {
			formSupport: {
				type: HTMLElement,
			},
		},
	};
	class CheckBox extends UI5Element__default {
		static get metadata() {
			return metadata;
		}
		static get render() {
			return litRender__default;
		}
		static get template() {
			return CheckBoxTemplate_lit;
		}
		static get styles() {
			return CheckBox_css;
		}
		constructor() {
			super();
			this._deactivate = () => {
				if (activeCb) {
					activeCb.active = false;
				}
			};
			if (!isGlobalHandlerAttached) {
				document.addEventListener("mouseup", this._deactivate);
				isGlobalHandlerAttached = true;
			}
		}
		onBeforeRendering() {
			this._enableFormSupport();
		}
		_enableFormSupport() {
			const FormSupport = FeaturesRegistry.getFeature("FormSupport");
			if (FormSupport) {
				FormSupport.syncNativeHiddenInput(this, (element, nativeInput) => {
					nativeInput.disabled = element.disabled || !element.checked;
					nativeInput.value = element.checked ? "on" : "";
				});
			} else if (this.name) {
				console.warn(`In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`);
			}
		}
		_onclick() {
			this.toggle();
		}
		_onmousedown() {
			if (this.readonly || this.disabled) {
				return;
			}
			this.active = true;
			activeCb = this;
		}
		_onmouseup() {
			this.active = false;
		}
		_onfocusout() {
			this.active = false;
		}
		_onkeydown(event) {
			if (Keys.isSpace(event)) {
				event.preventDefault();
				this.active = true;
			}
			if (Keys.isEnter(event)) {
				this.toggle();
				this.active = true;
			}
		}
		_onkeyup(event) {
			if (Keys.isSpace(event)) {
				this.toggle();
			}
			this.active = false;
		}
		toggle() {
			if (this.canToggle()) {
				if (this.indeterminate) {
					this.indeterminate = false;
					this.checked = true;
				} else {
					this.checked = !this.checked;
				}
				this.fireEvent("change");
				this.fireEvent("value-changed");
			}
			return this;
		}
		canToggle() {
			return !(this.disabled || this.readonly);
		}
		valueStateTextMappings() {
			return {
				"Error": CheckBox.i18nBundle.getText(i18nDefaults.VALUE_STATE_ERROR),
				"Warning": CheckBox.i18nBundle.getText(i18nDefaults.VALUE_STATE_WARNING),
				"Success": CheckBox.i18nBundle.getText(i18nDefaults.VALUE_STATE_SUCCESS),
			};
		}
		get ariaLabelText() {
			return AriaLabelHelper.getEffectiveAriaLabelText(this);
		}
		get classes() {
			return {
				main: {
					"ui5-checkbox--hoverable": !this.disabled && !this.readonly && Device.isDesktop(),
				},
			};
		}
		get ariaReadonly() {
			return this.readonly ? "true" : undefined;
		}
		get ariaDisabled() {
			return this.disabled ? "true" : undefined;
		}
		get ariaChecked() {
			return this.indeterminate && this.checked ? "mixed" : this.checked;
		}
		get ariaLabelledBy() {
			if (!this.ariaLabelText) {
				return this.text ? `${this._id}-label` : undefined;
			}
			return undefined;
		}
		get ariaDescribedBy() {
			return this.hasValueState ? `${this._id}-descr` : undefined;
		}
		get hasValueState() {
			return this.valueState !== ValueState__default.None;
		}
		get valueStateText() {
			return this.valueStateTextMappings()[this.valueState];
		}
		get tabIndex() {
			const tabindex = this.getAttribute("tabindex");
			return this.disabled ? undefined : tabindex || "0";
		}
		get isCompletelyChecked() {
			return this.checked && !this.indeterminate;
		}
		static get dependencies() {
			return [
				Label,
				Icon,
			];
		}
		static async onDefine() {
			CheckBox.i18nBundle = await i18nBundle.getI18nBundle("@ui5/webcomponents");
		}
	}
	CheckBox.define();

	return CheckBox;

});
