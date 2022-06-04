/*
* ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["./ModificationHandler","sap/ui/mdc/p13n/FlexUtil","sap/ui/fl/apply/api/FlexRuntimeInfoAPI","sap/ui/mdc/enum/PersistenceMode"],function(M,F,a,m){"use strict";var f;var b=M.extend("sap.ui.mdc.p13n.modification.FlexModificationHandler");b.prototype.processChanges=function(c,o){var C=c&&c[0]?c[0].selectorElement:undefined;var i=o.mode;var I=i===m.Auto;if(I){i=o.hasVM?"Standard":m.Global;}var d=i===m.Global;var e=i===m.Transient;var h=F.handleChanges.call(this,c,d,e);return d?h.then(function(D){return F.saveChanges.call(this,C,D);}):h;};b.prototype.waitForChanges=function(p,o){return a.waitForChanges.apply(this,arguments);};b.prototype.reset=function(p,o){var P=o.mode;var i=P===m.Global;var I=!o.hasVM&&o.hasPP&&P===m.Auto;return(i||I)?F.reset.call(this,p):F.restore.call(this,p);};b.prototype.isModificationSupported=function(p,o){return a.isFlexSupported.apply(this,arguments);};b.getInstance=function(){if(!f){f=new b();}return f;};return b;});
