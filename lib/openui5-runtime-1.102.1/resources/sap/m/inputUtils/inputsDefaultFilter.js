/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/wordStartsWithValue"],function(w){"use strict";var d=function(v,i,f){if(!i){return false;}if(i.isA("sap.ui.core.ListItem")&&f&&w(i.getAdditionalText(),v)){return true;}return w(i.getText(),v);};return d;});
