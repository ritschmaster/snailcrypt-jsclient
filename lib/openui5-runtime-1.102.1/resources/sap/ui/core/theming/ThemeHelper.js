/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/base/Log'],function(L){"use strict";var l={};var T={};T.reset=function(){l={};};T.getMetadata=function(s){if(!s){return null;}var a=s.replace("sap-ui-theme-","").replace(/\./g,"-");if(l[a]){return l[a];}var m=document.createElement("span");m.classList.add("sapThemeMetaData-UI5-"+a);document.documentElement.appendChild(m);var d=window.getComputedStyle(m).getPropertyValue("background-image");document.documentElement.removeChild(m);var D=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)/i.exec(d);if(!D||D.length<2){return null;}var M=D[1];if(M.charAt(0)!=="{"&&M.charAt(M.length-1)!=="}"){try{M=decodeURI(M);}catch(e){}}M=M.replace(/\\"/g,'"');var b=M.replace(/%20/g," ");var o;try{o=JSON.parse(b);l[a]=o;}catch(e){L.error("Could not parse theme metadata for library "+a+".");}return o;};return T;});
