/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/propertyEditor/BasePropertyEditor","sap/ui/integration/designtime/baseEditor/propertyEditor/dateEditor/DateEditor","sap/ui/core/format/DateFormat"],function(B,D,a){"use strict";var b=D.extend("sap.ui.integration.designtime.baseEditor.propertyEditor.dateTimeEditor.DateTimeEditor",{xmlFragment:"sap.ui.integration.designtime.baseEditor.propertyEditor.dateTimeEditor.DateTimeEditor",metadata:{library:"sap.ui.integration"},renderer:B.getMetadata().getRenderer().render});b.prototype.getFormatterInstance=function(o){return a.getDateTimeInstance(o||{pattern:"YYYY-MM-dd'T'HH:mm:ss.SSSSZ"});};b.configMetadata=Object.assign({},D.configMetadata,{typeLabel:{defaultValue:"BASE_EDITOR.TYPES.DATETIME"},utc:{defaultValue:true}});return b;});
