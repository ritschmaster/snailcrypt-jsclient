/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";document.documentElement.addEventListener("paste",function(e){var a=document.activeElement;if(e.isTrusted&&a instanceof HTMLElement&&!a.contains(e.target)){var n=new ClipboardEvent("paste",{bubbles:true,cancelable:true,clipboardData:e.clipboardData});a.dispatchEvent(n);e.stopImmediatePropagation();e.preventDefault();}},true);});
