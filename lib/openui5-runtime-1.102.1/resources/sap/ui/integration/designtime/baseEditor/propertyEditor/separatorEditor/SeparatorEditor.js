/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/propertyEditor/BasePropertyEditor","sap/base/util/restricted/_isNil","sap/base/util/isPlainObject"],function(B,_,i){"use strict";var S=B.extend("sap.ui.integration.designtime.baseEditor.propertyEditor.separatorEditor.SeparatorEditor",{xmlFragment:"sap.ui.integration.designtime.baseEditor.propertyEditor.separatorEditor.SeparatorEditor",metadata:{library:"sap.ui.integration"},renderer:B.getMetadata().getRenderer().render});S.configMetadata=Object.assign({},B.configMetadata,{allowBindings:{defaultValue:true,mergeStrategy:"mostRestrictiveWins"},typeLabel:{defaultValue:"BASE_EDITOR.TYPES.SEPARATOR"}});S.prototype.getDefaultValidators=function(){var c=this.getConfig();return Object.assign({},B.prototype.getDefaultValidators.call(this),{isValidBinding:{type:"isValidBinding",isEnabled:c.allowBindings},notABinding:{type:"notABinding",isEnabled:!c.allowBindings},maxLength:{type:"maxLength",isEnabled:typeof c.maxLength==="number",config:{maxLength:c.maxLength}}});};return S;});
