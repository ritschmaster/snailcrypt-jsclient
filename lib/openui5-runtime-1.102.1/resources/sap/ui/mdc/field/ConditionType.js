/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/model/SimpleType','sap/ui/model/FormatException','sap/ui/model/ParseException','sap/ui/model/ValidateException','sap/ui/model/type/String','sap/ui/mdc/enum/FieldDisplay','sap/ui/mdc/condition/FilterOperatorUtil','sap/ui/mdc/condition/Operator','sap/ui/mdc/condition/Condition','sap/ui/mdc/enum/BaseType','sap/ui/mdc/enum/ConditionValidated','sap/base/util/merge','sap/base/strings/whitespaceReplacer','sap/ui/base/SyncPromise'],function(S,F,P,V,a,b,c,O,C,B,d,m,w,e){"use strict";var f=S.extend("sap.ui.mdc.field.ConditionType",{constructor:function(i,L){S.apply(this,arguments);this.sName="Condition";this._oResourceBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");this._oCalls={active:0,last:0,condition:undefined,exception:undefined};}});f.prototype.destroy=function(){S.prototype.destroy.apply(this,arguments);if(this._oDefaultType){this._oDefaultType.destroy();delete this._oDefaultType;}this._bDestroyed=true;};f.prototype.formatValue=function(i,L){if(i==undefined||i==null||this._bDestroyed){return null;}if(typeof i!=="object"||!i.operator||!i.values||!Array.isArray(i.values)){throw new F("No valid condition provided");}if(!L){L="string";}var T=o.call(this);var M=x(T);var N=this.oFormatOptions.preventGetDescription;y.call(this,i,T);switch(this.getPrimitiveType(L)){case"string":case"any":var Q=n.call(this);var R=s.call(this);var U=c.getEQOperator(R);if(!this.oFormatOptions.maxConditions||this.oFormatOptions.maxConditions===1){this._oCalls.active++;this._oCalls.last++;}var W=this._oCalls.last;if(!N&&Q!==b.Value&&i.validated===d.Validated&&(M||(i.operator===U.name&&!i.values[1]))){var X=this.oFormatOptions.bindingContext;var Y=this.oFormatOptions.conditionModel;var Z=this.oFormatOptions.conditionModelName;var $=M?i.values[0][1]:i.values[0];return e.resolve().then(function(){return J.call(this,$,i,X,Y,Z);}.bind(this)).then(function(a1){if(a1){i=m({},i);if(M){T=p.call(this);i.operator=U.name;if(typeof a1!=="object"){a1={key:$,description:a1};}}if(typeof a1==="object"){i=A.call(this,i,a1);}else if(i.values.length===1){i.values.push(a1);}else{i.values[1]=a1;}}return g.call(this,i,undefined,W,true,T);}.bind(this)).catch(function(a1){var b1;if(!(a1 instanceof F)||!H.call(this)){b1=a1;}return g.call(this,i,b1,W,true,T);}.bind(this)).unwrap();}return g.call(this,i,undefined,W,true,T);default:if(T&&i.values.length>=1){return T.formatValue(i.values[0],L);}throw new F("Don't know how to format Condition to "+L);}};function _(i,T){var L=n.call(this);var M=x(T);if(M&&i.values.length>1&&i.values[0][1]===i.values[1][1]){i=m({},i);i.operator="EQ";i.values.splice(1);}var N=(this.oFormatOptions.hideOperator&&i.values.length===1)||M;var Q=c.getOperator(i.operator);var R=v.call(this);if(!Q){throw new F("No valid condition provided, Operator wrong.");}var U=Q.format(i,T,L,N,R);var W=this.oFormatOptions.convertWhitespaces;if(W&&(E.call(this,T)===B.String||L!==b.Value)){U=w(U);}return U;}function g(i,L,M,N,T){if(this._oCalls.active>0){this._oCalls.active--;}if(M<this._oCalls.last&&(this._oCalls.condition!==undefined||this._oCalls.exception!==undefined)){i=this._oCalls.condition;L=this._oCalls.exception;}if(M===this._oCalls.last&&this._oCalls.active>0){this._oCalls.condition=m({},i);this._oCalls.exception=L;}else if(this._oCalls.active===0&&this._oCalls.last>0){this._oCalls={active:0,last:0,condition:undefined,exception:undefined};}if(L){throw L;}var R;if(N){R=_.call(this,i,T);}else{R=h.call(this,i,T);}return R;}f.prototype.parseValue=function(i,L){if(this._bDestroyed){return null;}if(!L){L="string";}else if(L==="any"&&typeof i==="string"){L="string";}var N=this.oFormatOptions.navigateCondition;if(N){var M=this.formatValue(N,L);if(M===i){return m({},N);}}var Q=n.call(this);var R=G.call(this);var T=o.call(this);var U=q.call(this);var W=s.call(this);var X=x(T);var Y;if(i===null||i===undefined||(i===""&&!R)){if(!u.call(this,T)){return null;}}z.call(this,T);switch(this.getPrimitiveType(L)){case"string":var Z;var $=false;var a1=false;if(W.length===1){Z=c.getOperator(W[0]);a1=true;}else{var b1=c.getMatchingOperators(W,i);if(b1.length===0){Z=K.call(this,W,T);if(R&&!u.call(this,T)){var c1=c.getEQOperator(W);if(W.indexOf(c1.name)>=0){$=!!Z&&Z.name!==c1.name;Z=c1;}}a1=true;}else{var d1=b1.filter(function(Z){return Z.valueTypes.length===0;});if(d1.length>=1){Z=d1[0];}else{Z=b1[0];}}}if(Z){if(X&&Z!==c.getEQOperator(W)){throw new P("unsupported operator");}var e1;var f1=u.call(this,T);var g1=v.call(this);this._oCalls.active++;this._oCalls.last++;var h1=this._oCalls.last;if((!f1||X)&&Z.validateInput&&R){e1=j.call(this,Z,i,T,a1,$,W,Q,true);if(e1 instanceof Promise){return D.call(this,e1);}else{return e1;}}else{try{if(i===""&&f1&&a1){e1=C.createCondition(Z.name,[T.parseValue(i,"string",T._aCurrentValue)],undefined,undefined,d.NotValidated);}else{e1=Z.getCondition(i,T,Q,a1,g1);}}catch(i1){var j1=i1;if(j1 instanceof P&&U){try{U.parseValue(i,"string",U._aCurrentValue);}catch(k1){j1=k1;}}return g.call(this,undefined,j1,h1,false,T);}}if(e1){return g.call(this,e1,undefined,h1,false,T);}}throw new P("Cannot parse value "+i);default:if(T){if(W.length===1){Y=W[0];}else{Y=K.call(this,W,T).name;if(W.indexOf(Y)<0){Y=undefined;}}if(Y){return C.createCondition(Y,[T.parseValue(i,L)],undefined,undefined,d.NotValidated);}}throw new P("Don't know how to parse Condition from "+L);}};function h(i,T){var L=x(T);var M=u.call(this,T);if(i&&!L&&M){var N=q.call(this)||T;var Q=N.getMetadata().getName();var R=N.getFormatOptions();var U=N.getConstraints();var W=this.oFormatOptions.delegate;var X=this.oFormatOptions.payload;var Y=W&&W.getTypeUtil(X).getBaseType(Q,R,U);if((Y===B.Unit||Y===B.DateTime)&&!i.values[0][1]&&T._aCurrentValue){var Z=T._aCurrentValue[1]?T._aCurrentValue[1]:null;i.values[0][1]=Z;if(i.operator==="BT"){i.values[1][1]=Z;}}}y.call(this,i,T);return i;}function j(i,L,T,U,M,N,Q,R){var W;var X;var Y=true;var Z=true;var $=false;var a1;var b1;var c1=this.oFormatOptions.bindingContext;var d1=this.oFormatOptions.conditionModel;var e1=this.oFormatOptions.conditionModelName;var f1;if(L===""){f1=[];W=L;a1=L;}else{f1=i.getValues(L,Q,U);W=R?f1[0]:f1[1];X=R?f1[1]:f1[0];$=Q!==b.Value;Z=Q===b.Value||Q===b.ValueDescription;a1=Z?W||X:X||W;}var g1=function(k1){if(k1&&!(k1 instanceof P)&&!(k1 instanceof F)){throw k1;}if(!k1._bNotUnique){if(L===""){return null;}if(R&&f1[0]&&f1[1]){return j.call(this,i,L,T,U,M,N,Q,false);}if(M){return k.call(this,T,N,L,Q);}}if(H.call(this)){return l.call(this,T,N,L,Q);}throw new P(k1.message);};var h1=function(l1){if(l1){var f1=[l1.key];if(i.valueTypes.length>1&&i.valueTypes[1]!==O.ValueType.Static){f1.push(l1.description);}return C.createCondition(i.name,f1,l1.inParameters,l1.outParameters,d.Validated,l1.payload);}else if(L===""){return null;}else{return g1.call(this,new P(this._oResourceBundle.getText("valuehelp.VALUE_NOT_EXIST",[L])));}};var i1=this._oCalls.last;var j1=function(l1,m1){var n1;var o1;try{n1=m1.call(this,l1);if(x(T)){if(n1){if(n1.operator!=="EQ"){throw new P("unsupported operator");}var p1=T._aCurrentValue&&T._aCurrentValue[0]!==undefined?T._aCurrentValue[0]:null;var q1=n1.values[0];n1.values=[[p1,q1]];}else if(L===""){n1=C.createCondition(i.name,[T.parseValue(L,"string",T._aCurrentValue)],undefined,undefined,d.NotValidated);}}}catch(k1){o1=k1;}return g.call(this,n1,o1,i1,false,T);};try{if(x(T)){b1=T.parseValue(a1,"string",T._aCurrentValue);T.validateValue(b1);b1=b1[1];}else{b1=T.parseValue(a1,"string");T.validateValue(b1);}}catch(k1){if(k1&&!($&&(k1 instanceof P||k1 instanceof V))){throw k1;}Y=false;Z=false;b1=undefined;}return e.resolve().then(function(){return I.call(this,a1,b1,c1,Z,Y,$,d1,e1);}.bind(this)).then(function(l1){return j1.call(this,l1,h1);}.bind(this)).catch(function(k1){return j1.call(this,k1,g1);}.bind(this)).unwrap();}function k(T,i,L,M){var N=K.call(this,i,T);var Q;if(N&&i.indexOf(N.name)>=0){Q=N.getCondition(L,T,b.Value,true);Q.validated=d.NotValidated;}return Q;}function l(T,i,L,M){var N;if(x(T)){N=c.getEQOperator("EQ");}else if(i.length===1){N=c.getOperator(i[0]);}else{N=c.getEQOperator(i);if(i.indexOf(N.name)<0){N=undefined;}}if(!N){throw new P("Cannot parse value "+L);}var Q=N.getCondition(L,T,b.Value,true);if(Q){Q.validated=d.NotValidated;if(x(T)&&Array.isArray(Q.values[0])){Q.values[0]=Q.values[0][1];}}return Q;}f.prototype.validateValue=function(i){var T=o.call(this);var L=q.call(this);var M=s.call(this);var N=x(T);var Q=v.call(this);if(i===undefined||this._bDestroyed){return null;}else if(i===null){if(c.onlyEQ(M)){try{if(T.hasOwnProperty("_sParsedEmptyString")&&T._sParsedEmptyString!==null){T.validateValue(T._sParsedEmptyString);}else{T.validateValue(null);}}catch(R){if(R instanceof V){throw R;}else{return null;}}}return null;}if(typeof i!=="object"||!i.operator||!i.values||!Array.isArray(i.values)){throw new V(this._oResourceBundle.getText("field.VALUE_NOT_VALID"));}var U=c.getOperator(i.operator);if(N){U=c.getEQOperator();}if(!U||M.indexOf(U.name)===-1){throw new V("No valid condition provided, Operator wrong.");}try{U.validate(i.values,T,Q);}catch(W){if(W instanceof V&&L){U.validate(i.values,L,Q);}throw W;}};function n(){var i=this.oFormatOptions.display;if(!i){i=b.Value;}return i;}function o(){var T=this.oFormatOptions.valueType;if(!T){T=p.call(this);}return T;}function p(){if(!this._oDefaultType){this._oDefaultType=new a();}return this._oDefaultType;}function q(){return this.oFormatOptions.originalDateType;}function r(){return this.oFormatOptions.additionalType;}function s(){var i=this.oFormatOptions.operators;if(!i||i.length===0){i=c.getOperatorsForType(B.String);}return i;}function t(){var i=this.oFormatOptions.fieldHelpID;if(i){var L=sap.ui.getCore().byId(i);if(L&&L.isValidationSupported()){return L;}}return null;}function u(T){return T&&T.isA("sap.ui.model.CompositeType");}function v(){return this.oFormatOptions.compositeTypes;}function x(T){if(u(T)){var i=T.getFormatOptions();var L=!i||!i.hasOwnProperty("showMeasure")||i.showMeasure;var M=!i||!i.hasOwnProperty("showNumber")||i.showNumber;var N=!i||!i.hasOwnProperty("showTimezone")||i.showTimezone;var Q=!i||!i.hasOwnProperty("showDate")||i.showDate;var R=!i||!i.hasOwnProperty("showTime")||i.showTime;if((L&&!M)||(N&&!Q&&!R)){return true;}}return false;}function y(i,T){if(u.call(this,T)&&i&&i.values[0]){T._aCurrentValue=m([],i.values[0]);var L=r.call(this);if(u.call(this,L)){L._aCurrentValue=m([],i.values[0]);}var M=q.call(this);if(u.call(this,M)){M._aCurrentValue=m([],i.values[0]);}}}function z(T){if(u.call(this,T)){var i=r.call(this);if(u.call(this,i)){if(!i._aCurrentValue){i._aCurrentValue=[];}T._aCurrentValue=i._aCurrentValue;}}}function A(i,R){i.values=[R.key,R.description];if(R.inParameters){i.inParameters=R.inParameters;}if(R.outParameters){i.outParameters=R.outParameters;}return i;}function D(i){if(this.oFormatOptions.asyncParsing){this.oFormatOptions.asyncParsing(i);}return i;}function E(T){var i=T.getMetadata().getName();var L=T.getFormatOptions();var M=T.getConstraints();var N=this.oFormatOptions.delegate;var Q=this.oFormatOptions.payload;var R=N?N.getTypeUtil(Q).getBaseType(i,L,M):B.String;if(R===B.Unit){R=B.Numeric;}return R;}function G(){var i=t.call(this);var L=this.oFormatOptions.delegate;var M=this.oFormatOptions.payload;if(L){return L.isInputValidationEnabled(M,i);}else{return!!i;}}function H(){var i=t.call(this);var L=this.oFormatOptions.delegate;var M=this.oFormatOptions.payload;if(L){return L.isInvalidInputAllowed(M,i);}else if(i){return!i.getValidateInput();}else{return true;}}function I(i,L,M,N,Q,R,T,U){var W=t.call(this);var X=this.oFormatOptions.delegate;var Y=this.oFormatOptions.payload;var Z=this.oFormatOptions.control;var $={value:i,parsedValue:L,inParameters:undefined,outParameters:undefined,bindingContext:M,checkKeyFirst:N,checkKey:Q,checkDescription:R,conditionModel:T,conditionModelName:U,exception:P,control:Z};if(X){return X.getItemForValue(Y,W,$);}else if(W){return W.getItemForValue($);}}function J(i,L,M,N,Q){var R=t.call(this);var T=this.oFormatOptions.delegate;var U=this.oFormatOptions.payload;var W=this.oFormatOptions.control;if(T){return T.getDescription(U,R,i,L.inParameters,L.outParameters,M,N,Q,L.payload,W);}else if(R){if(R.isA("sap.ui.mdc.ValueHelp")){var X={value:i,parsedValue:i,context:{inParameters:L.inParameters,outParameters:L.outParameters,payload:L.payload},bindingContext:M,conditionModel:N,conditionModelName:Q,checkKey:true,checkDescription:false,caseSensitive:true,exception:F,control:W};return R.getItemForValue(X);}else{return R.getTextForKey(i,L.inParameters,L.outParameters,M,N,Q);}}}function K(L,T){var M=this.oFormatOptions.defaultOperatorName;var N;if(M){N=c.getOperator(M);}else{N=c.getDefaultOperator(E.call(this,T));}if(N&&L.indexOf(N.name)<0){for(var i=0;i<L.length;i++){N=c.getOperator(L[i]);if(N.exclude||!N.hasRequiredValues()){N=undefined;}else{break;}}}return N;}return f;});