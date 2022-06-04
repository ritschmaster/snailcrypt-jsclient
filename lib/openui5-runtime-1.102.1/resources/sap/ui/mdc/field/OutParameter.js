/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/mdc/field/InParameter','sap/ui/mdc/enum/OutParameterMode'],function(I,O){"use strict";var a=I.extend("sap.ui.mdc.field.OutParameter",{metadata:{library:"sap.ui.mdc",properties:{fixedValue:{type:"any",defaultValue:null},mode:{type:"sap.ui.mdc.enum.OutParameterMode",defaultValue:O.Always}},defaultProperty:"value"}});return a;});
