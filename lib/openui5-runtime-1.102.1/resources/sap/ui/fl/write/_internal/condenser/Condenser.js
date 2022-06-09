/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/each","sap/base/util/isPlainObject","sap/base/Log","sap/ui/core/util/reflection/JsControlTreeModifier","sap/ui/core/Core","sap/ui/fl/changeHandler/condenser/Classification","sap/ui/fl/apply/_internal/changes/Utils","sap/ui/fl/write/_internal/condenser/classifications/LastOneWins","sap/ui/fl/write/_internal/condenser/classifications/Reverse","sap/ui/fl/write/_internal/condenser/UIReconstruction","sap/ui/fl/write/_internal/condenser/Utils","sap/ui/fl/Change","sap/ui/fl/Utils","sap/ui/performance/Measurement"],function(e,i,L,J,C,c,d,f,R,U,g,h,F,M){"use strict";var j={};var k="unclassified";var N={lastOneWins:f,reverse:R};var P=["affectedControl","sourceContainer","targetContainer"];function l(S,a){var b=S[c.Move];return a.classification===c.Create&&b&&b[b.length-1].targetContainer===a.targetContainer;}function m(S,a){return a.classification===c.Move&&S[c.Destroy];}function n(a,b){return b.classification===c.Create&&a[c.Destroy];}function o(a,b,H,I){if(!m(a,H)&&!n(a,H)){var K=H.classification;if(!a[K]){H.change=I;I.condenserState="select";a[K]=[H];}else{I.condenserState="delete";}a[K][0].updateChange=I;}if(l(a,H)||n(a,H)){if(a[c.Move]){a[c.Move].forEach(function(H){H.change.condenserState="delete";});delete a[c.Move];}if(a[c.Destroy]){a[c.Destroy].forEach(function(H){H.change.condenserState="delete";});delete a[c.Destroy];}}return U.addChange(b,H);}function p(T,a,I,b,H){if(!T[b.type]){T[b.type]={};}var K=T[b.type];if(b.type===g.NOT_INDEX_RELEVANT){if(!K[b.classification]){K[b.classification]={};}var O=K[b.classification];N[b.classification].addToChangesMap(O,b.uniqueKey,H);return Promise.resolve();}I.push(H);return o(K,a,b,H);}function q(T,K,a){if(!T[K]){T[K]=[];}T[K].push(a);a.condenserState="select";}function r(a,b){var H=J.getControlIdBySelector(b.getSelector(),a);var I=C.byId(H);if(I){var K={modifier:J,appComponent:a,view:F.getViewForControl(I)};var O=d.getControlIfTemplateAffected(b,I,K);return Promise.resolve(d.getChangeHandler(b,O,K)).then(function(Q){if(Q&&typeof Q.getCondenserInfo==="function"){return Q.getCondenserInfo(b,K);}return undefined;}).then(function(Q){if(Q&&O.bTemplateAffected){s(Q,b);}return Q;}).catch(function(){return undefined;});}return Promise.resolve();}function s(a,b){var O=b.getOriginalSelector();var T=b.getSelector();P.forEach(function(H){if(a[H]&&a[H]===T){a[H]=O;}});}function t(a,b,H,I){var K=b!==undefined?b.affectedControl:J.getControlIdBySelector(H.getSelector(),I);if(!a[K]){a[K]={};}return a[K];}function u(a,b,H,I,K){return K.reduce(function(O,Q){return O.then(v.bind(this,a,b,H,I,Q));}.bind(this),Promise.resolve());}function v(a,b,H,I,K){return r(a,K).then(function(O){x(O,a);var T=t(b,O,K,a);if(O!==undefined){w(O);return p(T,H,I,O,K);}q(T,k,K);b[k]=true;return undefined;});}function w(a){if(N[a.classification]){a.type=g.NOT_INDEX_RELEVANT;}else{a.type=g.INDEX_RELEVANT;}}function x(a,b){P.forEach(function(H){if(a&&a[H]){a[H]=J.getControlIdBySelector(a[H],b);}});}function y(O,a){e(O,function(K,S){if(N[K]&&N[K].getChangesFromMap){N[K].getChangesFromMap(O,K).forEach(function(b){a.push(b);});}else if(i(S)){return y(S,a);}else if(Array.isArray(S)){S.forEach(function(b){if(b instanceof h){a.push(b);}else{a.push(b.change);}});}});return a;}function z(a){return y(a,[]);}function A(a,b){e(a,function(K,S){if(i(S)){A(S,b);}else if(Array.isArray(S)){S.forEach(function(O){if(!(O instanceof h)){b.push(O);}});}});return b;}function B(H,I){I.sort(function(a,b){return H.indexOf(a)-H.indexOf(b);});}function D(H,I){I.sort(function(a,b){return H.indexOf(a.change)-H.indexOf(b.change);});}function E(a,I){var b=a.map(function(H){return H.getId();});I.forEach(function(H){if(b.indexOf(H.getId())===-1){a.push(H);}});}function G(a,b){a.forEach(function(H){var I=H.updateChange;if(I&&I.getState()!==h.states.NEW){var K=H.change;if(I.getFileName()!==K.getFileName()){var O=K.getContent();I.setContent(O);K.condenserState="delete";b=b.map(function(Q){if(Q.getFileName()===K.getFileName()){return I;}return Q;});}else{I.setState(h.states.DIRTY);}I.condenserState="update";}});return b;}j.condense=function(a,b){M.start("Condenser_overall","Condenser overall - CondenserClass",["sap.ui.fl","Condenser"]);var H={};var I={};var K=[];var O=[];var Q=[];b.slice(0).reverse().forEach(function(S){if(S instanceof h&&S.isSuccessfullyApplied()){Q.push(S);}else{O.push(S);}});M.start("Condenser_defineMaps","defining of maps - CondenserClass",["sap.ui.fl","Condenser"]);return u(a,H,I,K,Q).then(function(){M.end("Condenser_defineMaps");var S=H[k];if(!S){U.compareAndUpdate(H,I);}var T=z(H);if(S){K.forEach(function(Z){Z.condenserState="select";});E(T,K);}T=T.concat(O);B(b,T);if(!S){M.start("Condenser_handleIndexRelatedChanges","handle index related changes - CondenserClass",["sap.ui.fl","Condenser"]);var V=true;var W=A(H,[]);D(b,W);var X;try{M.start("Condenser_sort","sort index related changes - CondenserClass",["sap.ui.fl","Condenser"]);X=U.sortIndexRelatedChanges(I,W);}catch(Y){L.error("Error during Condensing: "+Y.message,"No Condensing performed for index-relevant changes.");V=false;}M.end("Condenser_sort");if(V){U.swapChanges(X,T);T=G(W,T);}else{K.forEach(function(Z){Z.condenserState="select";});E(T,K);B(b,T);}M.end("Condenser_handleIndexRelatedChanges");}M.end("Condenser_overall");return T;});};return j;});