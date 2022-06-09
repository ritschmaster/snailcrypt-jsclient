/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["../../TableDelegate","../../table/V4AnalyticsPropertyHelper","../../util/loadModules","../../library","sap/m/ColumnPopoverSelectListItem","sap/m/MessageBox","sap/ui/core/Item","sap/ui/core/Core","sap/ui/core/library","sap/ui/core/format/ListFormat","sap/ui/base/ManagedObjectObserver"],function(T,V,l,a,C,M,I,b,c,L,d){"use strict";var f=a.TableType;var P=a.TableP13nMode;var g=new window.WeakMap();var D=Object.assign({},T);D.getPropertyHelperClass=function(){return V;};D.fetchPropertyExtensions=function(e,B){return Promise.resolve(null);};D.fetchPropertiesForBinding=function(e){return this.fetchProperties(e);};D.fetchPropertyExtensionsForBinding=function(e,B){return this.fetchPropertyExtensions(e,B);};D.preInit=function(e){if(!g.has(e)){g.set(e,{});}return w(e).then(function(){s(e);});};D.validateState=function(e,S,K){var B=T.validateState.apply(this,arguments);var E;var R=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");if(K=="Sort"&&S.sorters){if(v(e)&&!t(e,S.items,S.sorters)){E={validation:c.MessageType.Information,message:R.getText("table.PERSONALIZATION_DIALOG_SORT_RESTRICTION")};}}else if(K=="Group"&&S.aggregations){var F=Object.keys(S.aggregations);var G=[];var H=L.getInstance();F.forEach(function(N){var O=e.getPropertyHelper().getProperty(N);if(O&&O.groupable){G.push(N);}});if(G.length){E={validation:c.MessageType.Information,message:R.getText("table.PERSONALIZATION_DIALOG_GROUP_RESTRICTION",[H.format(G)])};}}else if(K=="Column"){var J;var F=S.aggregations&&Object.keys(S.aggregations);if(!t(e,S.items,F)){J=R.getText("table.PERSONALIZATION_DIALOG_TOTAL_RESTRICTION");}if(v(e)&&!t(e,S.items,S.sorters)){J=J?J+"\n"+R.getText("table.PERSONALIZATION_DIALOG_SORT_RESTRICTION"):R.getText("table.PERSONALIZATION_DIALOG_SORT_RESTRICTION");}if(J){E={validation:c.MessageType.Information,message:J};}}return u(B,E);};D.updateBinding=function(B,E,F){if(!F||F.getPath()!=E.path){this.rebind(B,E);return;}var R=F.getRootBinding();var H=R&&!R.isSuspended();try{if(H){R.suspend();}s(B,E);F.changeParameters(E.parameters);F.filter(E.filters,"Application");F.sort(E.sorter);}catch(e){this.rebind(B,E);if(R==F){H=false;}}finally{if(H&&R.isSuspended()){R.resume();}}};D.rebind=function(e,B){s(e,B);T.rebind(e,B);};D.addColumnMenuItems=function(e,B){var E=e.getPropertyHelper();var F=E.getProperty(B.getDataProperty());var G=[];if(!F){return[];}if(e.isGroupingEnabled()){var H=F.getGroupableProperties();if(H.length>0){G.push(h(H,B));}}if(e.isAggregationEnabled()){var J=F.getAggregatableProperties();if(J.length>0){G.push(i(J,B));}}var K=e._oPopover;if(K){K.getItems().forEach(function(N,O,G){var Q=N.getLabel();var R=b.getLibraryResourceBundle("sap.ui.mdc");if(Q===R.getText("table.SETTINGS_GROUP")||Q===R.getText("table.SETTINGS_TOTALS")){G[O].destroy();}if(G.length==0){K.destroy();}});}return G;};D.getSupportedP13nModes=function(e){var S=T.getSupportedP13nModes(e);if(e._getStringType()===f.Table){if(!S.includes(P.Group)){S.push(P.Group);}if(!S.includes(P.Aggregate)){S.push(P.Aggregate);}}return S;};function h(G,e){var B=G.map(function(E){return new I({text:E.label,key:E.name});});if(B.length>0){return new C({items:B,label:b.getLibraryResourceBundle("sap.ui.mdc").getText("table.SETTINGS_GROUP"),icon:"sap-icon://group-2",action:[{sName:"Group",oMDCColumn:e},j,this]});}}function i(e,B){var E=e.map(function(F){return new I({text:F.label,key:F.name});});if(E.length>0){return new C({items:E,label:b.getLibraryResourceBundle("sap.ui.mdc").getText("table.SETTINGS_TOTALS"),icon:"sap-icon://sum",action:[{sName:"Aggregate",oMDCColumn:B},j,this]});}}function j(e,B){var N=B.sName,E=B.oMDCColumn.getParent(),G=E.getCurrentState().groupLevels||[],F=E.getCurrentState().aggregations||{},H=Object.keys(F),J=false,K=e.getParameter("property"),O=N==="Aggregate"?G:H,Q=O.filter(function(X){return N==="Aggregate"?X.name===K:X===K;}).length>0;if(Q){var R=b.getLibraryResourceBundle("sap.ui.mdc");var S;var U;var W;if(N==="Aggregate"){S=R.getText("table.SETTINGS_WARNING_TITLE_TOTALS");U=R.getText("table.SETTINGS_MESSAGE2");W=R.getText("table.SETTINGS_WARNING_BUTTON_TOTALS");}else{S=R.getText("table.SETTINGS_WARNING_TITLE_GROUPS");U=R.getText("table.SETTINGS_MESSAGE1");W=R.getText("table.SETTINGS_WARNING_BUTTON_GROUP");}J=true;M.warning(U,{id:E.getId()+"-messageBox",title:S,actions:[W,R.getText("table.SETTINGS_WARNING_BUTTON_CANCEL")],onClose:function(X){if(X===W){k(N,E,K);}}});}if(N==="Aggregate"&&!J){o(N,E,K);}else if(N==="Group"&&!J){o(N,E,K);}}function o(e,B,E){if(e==="Group"){B._onCustomGroup(E);}else{B._onCustomAggregate(E);}}function k(N,e,B){if(N==="Aggregate"){e._onCustomGroup(B);e._onCustomAggregate(B);}else if(N==="Group"){e._onCustomAggregate(B);e._onCustomGroup(B);}}function s(e,B){var E=g.get(e).plugin;if(!E||E.isDestroyed()){return;}var G=e._getGroupedProperties().map(function(J){return J.name;});var F=Object.keys(e._getAggregatedProperties());var S=B?B.parameters["$search"]:undefined;if(S){delete B.parameters["$search"];}var H={visible:m(e),groupLevels:G,grandTotal:F,subtotals:F,columnState:n(e,F),search:S};E.setAggregationInfo(H);}function m(e){var B=new Set();var E=g.get(e).oPropertyHelperForBinding;e.getColumns().forEach(function(F){var G=E.getProperty(F.getDataProperty());if(!G){return;}if(G.isComplex()){G.getReferencedProperties().forEach(function(G){B.add(G.name);});}else{B.add(G.name);}});return Array.from(B);}function n(e,B){var E={};e.getColumns().forEach(function(F){var G=F.getId()+"-innerColumn";var H=q(e,F,B);var J=H.length>0;if(G in E){E[G].subtotals=J||E[G].subtotals;E[G].grandTotal=J||E[G].grandTotal;return;}E[G]={subtotals:J,grandTotal:J};r(e,H).forEach(function(U){G=U.getId()+"-innerColumn";if(G in E){E[G].subtotals=J||E[G].subtotals;E[G].grandTotal=J||E[G].grandTotal;}else{E[G]={subtotals:J,grandTotal:J};}});});return E;}function p(e,B){var E=e.getPropertyHelper().getProperty(B.getDataProperty());if(!E){return[];}else if(E.isComplex()){return E.getReferencedProperties();}else{return[E];}}function q(e,B,E){return p(e,B).filter(function(F){return E.includes(F.name);});}function r(e,B){var U=[];B.forEach(function(E){if(E.unitProperty){U.push(E.unitProperty);}});return e.getColumns().filter(function(E){return p(e,E).some(function(F){return U.includes(F);});});}function t(e,B,S){var E,F=[];B&&B.forEach(function(G){E=e.getPropertyHelper().getProperty(G.name);if(!E.isComplex()){F.push(E.name);}else{E.getReferencedProperties().forEach(function(R){F.push(R.name);});}});var O=S?S.every(function(G){return F.find(function(H){return G.name?G.name===H:G===H;});}):true;return O;}function u(B,e){var S={Error:1,Warning:2,Information:3,None:4};if(!e||S[e.validation]-S[B.validation]>0){return B;}else{return e;}}function v(e){return(e.isGroupingEnabled()||e.isAggregationEnabled())&&e._isOfType(f.Table);}function w(e){if(e._isOfType(f.Table)){return(v(e)?x(e):y(e)).then(function(){return A(e);});}return Promise.resolve();}function x(e){var B=g.get(e);var E=B.plugin;if(E&&!E.isDestroyed()){E.activate();return Promise.resolve();}return Promise.all([e.awaitPropertyHelper(),l("sap/ui/table/plugins/V4Aggregation")]).then(function(R){var F=R[1][0];var G=e.getControlDelegate();E=new F({groupHeaderFormatter:function(H,J){return G.formatGroupHeader(e,H,J);}});e._oTable.addDependent(E);B.plugin=E;return z(e);}).then(function(F){E.setPropertyInfos(F.getProperties());});}function y(e){var B=g.get(e);if(B.plugin){B.plugin.deactivate();}return Promise.resolve();}function z(e){var B=g.get(e);if(B.oPropertyHelperForBinding){return Promise.resolve(B.oPropertyHelperForBinding);}var E=e.getControlDelegate();var F;var G;return E.fetchPropertiesForBinding(e).then(function(H){F=H;return E.fetchPropertyExtensionsForBinding(e,F);}).then(function(H){G=H;return E.getPropertyHelperClass();}).then(function(H){B.oPropertyHelperForBinding=new H(F,G,e);return B.oPropertyHelperForBinding;});}function A(e){var B=g.get(e);if(!B.observer){B.observer=new d(function(E){if(E.type==="destroy"){if(B.oPropertyHelperForBinding){B.oPropertyHelperForBinding.destroy();}}else{w(e);}});B.observer.observe(e,{properties:["p13nMode"],destroy:true});}}return D;});