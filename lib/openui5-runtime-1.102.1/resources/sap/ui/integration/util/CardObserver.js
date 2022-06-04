/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/library","sap/ui/base/Object"],function(l,B){"use strict";var C=l.CardDataMode;var a=B.extend("sap.ui.integration.util.CardObserver",{constructor:function(c){B.call(this);this._oCard=c;}});a.prototype.destroy=function(){B.prototype.destroy.apply(this,arguments);this._oCard=null;if(this.oObserver){this.oObserver.disconnect();this.oObserver=null;}};a.prototype.createObserver=function(){if(!this.oObserver){this.oObserver=new window.IntersectionObserver(function(e){e.forEach(function(E){if(E.isIntersecting){this.loadManifest();}}.bind(this),{threshold:[0.1]});}.bind(this));}};a.prototype.loadManifest=function(){var c=this._oCard.getDomRef();this._oCard.setDataMode(C.Active);this.oObserver.unobserve(c);};return a;});
