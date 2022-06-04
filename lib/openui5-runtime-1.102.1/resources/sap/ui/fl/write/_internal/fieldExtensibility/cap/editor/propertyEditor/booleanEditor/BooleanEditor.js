/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/propertyEditor/BasePropertyEditor"],function(B){"use strict";var a=B.extend("sap.ui.fl.write._internal.fieldExtensibility.cap.editor.propertyEditor.booleanEditor.BooleanEditor",{xmlFragment:"sap.ui.fl.write._internal.fieldExtensibility.cap.editor.propertyEditor.booleanEditor.BooleanEditor",metadata:{library:"sap.ui.fl"},renderer:B.getMetadata().getRenderer().render});a.prototype._onChange=function(e){var v=!!e.getParameter("selected");this.setValue(v);};return a;});
