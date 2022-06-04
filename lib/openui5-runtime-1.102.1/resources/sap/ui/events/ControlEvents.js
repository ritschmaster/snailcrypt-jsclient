/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery'],function(q){"use strict";var c={};c.events=["click","dblclick","contextmenu","focusin","focusout","keydown","keypress","keyup","mousedown","mouseout","mouseover","mouseup","select","selectstart","dragstart","dragenter","dragover","dragleave","dragend","drop","compositionstart","compositionend","paste","cut","input","change"];c.bindAnyEvent=function(C){if(C){q(document).on(c.events.join(" "),C);}};c.unbindAnyEvent=function u(C){if(C){q(document).off(c.events.join(" "),C);}};return c;});
