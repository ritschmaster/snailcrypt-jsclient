/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element','sap/ui/mdc/mixin/PromiseMixin','sap/ui/base/ManagedObjectObserver','sap/ui/mdc/condition/Condition','sap/ui/mdc/condition/FilterOperatorUtil','sap/ui/mdc/condition/Operator','sap/ui/mdc/enum/ConditionValidated','sap/base/strings/formatMessage'],function(E,P,M,C,F,O,a,f){"use strict";var b=E.extend("sap.ui.mdc.valuehelp.base.Content",{metadata:{library:"sap.ui.mdc",properties:{title:{type:"string",group:"Appearance",defaultValue:""},shortTitle:{type:"string",group:"Appearance",defaultValue:""},conditions:{type:"object[]",defaultValue:[],byValue:true},filterValue:{type:"string",defaultValue:""},config:{type:"object",defaultValue:{}},visible:{type:"boolean",group:"Appearance",defaultValue:true}},aggregations:{displayContent:{type:"sap.ui.core.Control",multiple:false}},events:{select:{parameters:{type:{type:"sap.ui.mdc.enum.SelectType"},conditions:{type:"object[]"}}},confirm:{parameters:{close:{type:"boolean"}}},cancel:{},requestSwitchToDialog:{},navigated:{parameters:{leaveFocus:{type:"boolean"},condition:{type:"object"},itemId:{type:"string"}}}}}});b.prototype.init=function(){this._oObserver=new M(this._observeChanges.bind(this));this._oObserver.observe(this,{properties:["filterValue","conditions","config"]});this._oOperator=F.getEQOperator();};b.prototype.exit=function(){this._oObserver.disconnect();this._oObserver=undefined;};b.prototype.setProperty=function(p,v,s){if(p==="conditions"||p==="filterValue"||p==="config"){s=true;}return E.prototype.setProperty.apply(this,[p,v,s]);};b.prototype.getContent=function(){};b.prototype.getContainerConfig=function(){};b.prototype.onBeforeShow=function(){};b.prototype.onShow=function(){this._bVisible=true;this._handleConditionsUpdate();};b.prototype.onHide=function(){this._bVisible=false;};b.prototype.getItemForValue=function(o){};b.prototype.isValidationSupported=function(){return false;};b.prototype.getScrollDelegate=function(){var o=this.getParent();return o&&o.getScrollDelegate();};b.prototype._observeChanges=function(o){if(o.name==="conditions"){this._handleConditionsUpdate(o);}if(o.name==="filterValue"){this._handleFilterValueUpdate(o);}if(o.name==="config"){_.call(this,o.current);}};b.prototype._handleFilterValueUpdate=function(o){};b.prototype._handleConditionsUpdate=function(o){};b.prototype._createCondition=function(v,D,p){var o=d.call(this);var V=[v];if(o.valueTypes.length>1&&o.valueTypes[1]!==O.ValueType.Static&&D!==null&&D!==undefined){V.push(D);}return C.createCondition(o.name,V,undefined,undefined,a.Validated,p);};b.prototype.removeFocus=function(){};b.prototype.navigate=function(s){};b.prototype.getUIArea=function(){var o=this.getParent();if(o&&o._getUIAreaForContent){return o._getUIAreaForContent();}return E.prototype.getUIArea.apply(this,arguments);};b.prototype.isTypeahead=function(){var o=this.getParent();return o&&o.isTypeahead();};b.prototype.isSearchSupported=function(){return false;};b.prototype.provideScrolling=function(){var o=this.getParent();return!o||!o.providesScrolling();};b.prototype.isContainerOpen=function(){var o=this.getParent();return o&&o.isOpen();};b.prototype.isContainerOpening=function(){var o=this.getParent();return o&&o.isOpening();};b.prototype._getValueHelpDelegate=function(){var o=this.getParent();return o&&o.getValueHelpDelegate();};b.prototype._getValueHelpDelegatePayload=function(){var o=this.getParent();return o&&o.getValueHelpDelegatePayload();};b.prototype._awaitValueHelpDelegate=function(){var o=this.getParent();return o&&o.awaitValueHelpDelegate();};b.prototype._isValueHelpDelegateInitialized=function(){var o=this.getParent();return o&&o.isValueHelpDelegateInitialized();};b.prototype._getControl=function(){var o=this.getParent();return o&&o._getControl();};b.prototype.getCount=function(e){return 0;};b.prototype.getValueHelpIcon=function(){};b.prototype.getAriaAttributes=function(m){return{contentId:null,ariaHasPopup:"listbox",roleDescription:null};};b.prototype._isSingleSelect=function(e){return this._getMaxConditions()===1;};b.prototype.shouldOpenOnClick=function(){return false;};b.prototype.shouldOpenOnNavigate=function(){return!this._isSingleSelect();};b.prototype.isFocusInHelp=function(){return!this.isTypeahead();};b.prototype.isMultiSelect=function(){return!this._isSingleSelect();};b.prototype.isQuickSelectSupported=function(){return false;};b.prototype.getRequiresTokenizer=function(){return true;};function _(o){c.call(this,o.operators);}function c(o){this._oOperator=F.getEQOperator(o);}function d(){return this._oOperator;}b.prototype.getFormattedTitle=function(i){var t=this.getTitle();if(t){t=f(t,i?i:"");}return t;};b.prototype.getFormattedShortTitle=function(){return this.getShortTitle();};b.prototype._getMaxConditions=function(){var o=this.getConfig();return o&&o.maxConditions;};P.call(b.prototype);return b;});