/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ViewRenderer'],function(V){"use strict";var H={apiVersion:1};H.render=function(r,c){r.openStart("div",c);r.class("sapUiView");r.class("sapUiHTMLView");V.addDisplayClass(r,c);r.style("width",c.getWidth());r.style("height",c.getHeight());r.openEnd();if(c._oTemplate){var h=c._oTemplate.innerHTML;var a=c.getContent();var d=[];var b=function(c){var t=H._getHTML(r,c,h);if(t){h=t;}else{d.push(c);}};if(a){if(Array.isArray(a)){for(var i=0;i<a.length;i++){b(a[i]);}}else if(a){b(a);}}r.unsafeHtml(h);for(var k=0;k<d.length;k++){r.renderControl(d[k]);}}r.close("div");};H._getHTML=function(r,c,h){var i=c.getId();h=h.replace(/(<div)/gi,"\n$1");var a=new RegExp('<div.*?data-sap-ui-id="'+i+'".*?></div>',"gi");var m=a.exec(h);if(m){h=h.replace(m[0],r.getHTML(c));return h;}else{return"";}};return H;},true);
