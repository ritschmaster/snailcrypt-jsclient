/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var d={};function a(){var b=document.createElement("div");b.innerHTML='<div dir="rtl"><div><span></span><span></span></div></div>';b.firstChild.style='width: 1px; height: 1px; position: fixed; top: 0px; left: 0px; overflow: hidden';b.firstChild.firstChild.style='width: 2px';b.firstChild.firstChild.firstChild.style='display: inline-block; width: 1px';b.firstChild.firstChild.lastChild.style='display: inline-block; width: 1px';document.documentElement.appendChild(b);var c=b.firstChild;d.initialZero=c.scrollLeft==0;document.documentElement.removeChild(b);}a();var _={initialScrollPositionIsZero:function(){return d.initialZero;}};return _;});
