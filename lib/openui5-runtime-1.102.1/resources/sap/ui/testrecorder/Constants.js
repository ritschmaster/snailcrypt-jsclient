/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var I="sap-ui-test-recorder-frame";var a=1001;var R=a+1;var b=R+1;var c="3px";var F={BOTTOM:"50%",SIDE:"100%"};var d={BOTTOM:"100%",SIDE:"40%"};var e={LEFT_SIDE:"40%",RIGHT_SIDE:"60%"};return{HIGHLIGHTER_ID:"ui5-test-recorder-highlighter",CONTEXTMENU_ID:"ui5-test-recorder-contextmenu",IFRAME_ID:I,RESIZE_OVERLAY_ID:I+"resize-overlay",DOCK:{BOTTOM:"BOTTOM",RIGHT:"RIGHT",LEFT:"LEFT"},RESIZE_HANDLE:{BOTTOM:{id:I+"resizehandle-bottom",width:d.BOTTOM,height:c,left:"0",top:F.BOTTOM},RIGHT:{id:I+"resizehandle-right",width:c,height:F.SIDE,left:e.RIGHT_SIDE,top:"0"},LEFT:{id:I+"resizehandle-left",width:c,height:F.SIDE,left:e.LEFT_SIDE,top:"0"}},FRAME:{BOTTOM:{width:d.BOTTOM,height:F.BOTTOM,left:"0",top:"unset",bottom:"0"},RIGHT:{width:d.SIDE,height:F.SIDE,left:e.RIGHT_SIDE,top:"0"},LEFT:{width:d.SIDE,height:F.SIDE,left:"0",top:"0"},MINIMIZED:{width:"180px",height:"32px"}},IFRAME_ZINDEX:a,RESIZE_OVERLAY_ZINDEX:R,RESIZE_HANDLE_ZINDEX:b};},true);
