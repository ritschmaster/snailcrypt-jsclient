sap.ui.define(['exports', './asset-registries/i18n', './util/formatMessage'], function (exports, i18n, formatMessage) { 'use strict';

	const I18nBundleInstances = new Map();
	let customGetI18nBundle;
	class I18nBundle {
		constructor(packageName) {
			this.packageName = packageName;
		}
		getText(textObj, ...params) {
			if (typeof textObj === "string") {
				textObj = { key: textObj, defaultText: textObj };
			}
			if (!textObj || !textObj.key) {
				return "";
			}
			const bundle = i18n.getI18nBundleData(this.packageName);
			if (bundle && !bundle[textObj.key]) {
				console.warn(`Key ${textObj.key} not found in the i18n bundle, the default text will be used`);
			}
			const messageText = bundle && bundle[textObj.key] ? bundle[textObj.key] : (textObj.defaultText || textObj.key);
			return formatMessage(messageText, params);
		}
	}
	const getI18nBundleSync = packageName => {
		if (I18nBundleInstances.has(packageName)) {
			return I18nBundleInstances.get(packageName);
		}
		const i18nBundle = new I18nBundle(packageName);
		I18nBundleInstances.set(packageName, i18nBundle);
		return i18nBundle;
	};
	const registerCustomI18nBundleGetter = customGet => {
		customGetI18nBundle = customGet;
	};
	const getI18nBundle = async packageName => {
		if (customGetI18nBundle) {
			return customGetI18nBundle(packageName);
		}
		await i18n.fetchI18nBundle(packageName);
		return getI18nBundleSync(packageName);
	};

	exports.registerI18nLoader = i18n.registerI18nLoader;
	exports.getI18nBundle = getI18nBundle;
	exports.registerCustomI18nBundleGetter = registerCustomI18nBundleGetter;

	Object.defineProperty(exports, '__esModule', { value: true });

});
