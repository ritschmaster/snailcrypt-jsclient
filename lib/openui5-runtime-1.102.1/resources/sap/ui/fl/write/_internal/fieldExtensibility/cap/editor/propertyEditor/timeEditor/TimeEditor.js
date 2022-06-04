/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/propertyEditor/BasePropertyEditor","sap/ui/integration/designtime/baseEditor/propertyEditor/dateEditor/DateEditor","sap/ui/core/format/DateFormat"],function(B,D,a){"use strict";var T=D.extend("sap.ui.fl.write._internal.fieldExtensibility.cap.editor.propertyEditor.timeEditor.TimeEditor",{xmlFragment:"sap.ui.fl.write._internal.fieldExtensibility.cap.editor.propertyEditor.timeEditor.TimeEditor",metadata:{library:"sap.ui.fl"},renderer:B.getMetadata().getRenderer().render});T.configMetadata=Object.assign({},D.configMetadata,{pattern:{defaultValue:"HH:mm:ss"},utc:{defaultValue:false}});T.prototype.getDefaultValidators=function(){return Object.assign({},D.prototype.getDefaultValidators.call(this));};T.prototype.getFormatterInstance=function(o){return a.getTimeInstance(o||{pattern:"HH:mm:ss.SSSS"});};return T;});
