/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/mdc/odata/TypeUtil','sap/ui/mdc/enum/BaseType','sap/base/util/merge'],function(O,B,m){"use strict";var a=Object.assign({},O);a.getBaseType=function(t,f,c){switch(t){case"sap.ui.model.odata.type.Date":return B.Date;case"sap.ui.model.odata.type.TimeOfDay":return B.Time;case"sap.ui.model.odata.type.Unit":case"sap.ui.model.odata.type.Currency":if(!f||((!f.hasOwnProperty("showMeasure")||f.showMeasure)&&(!f.hasOwnProperty("showNumber")||f.showNumber))){return B.Unit;}else if(!f.hasOwnProperty("showNumber")||f.showNumber){return B.Numeric;}else{return B.String;}default:return O.getBaseType(t,f,c);}};a.getDataTypeClassName=function(t){var e={"Edm.Date":"sap.ui.model.odata.type.Date","Edm.TimeOfDay":"sap.ui.model.odata.type.TimeOfDay"};if(e[t]){t=e[t];}else{t=O.getDataTypeClassName(t);}return t;};a.getDataTypeInstance=function(d,f,c){switch(d){case"sap.ui.model.odata.type.DateTimeOffset":case"Edm.DateTimeOffset":c=m({},c);c.V4=true;break;default:}var T=this.getDataTypeClass(d);return new T(f,c);};return a;});
