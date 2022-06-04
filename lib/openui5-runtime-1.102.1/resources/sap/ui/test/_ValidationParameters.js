/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/test/matchers/matchers"],function(q,m){"use strict";var O={errorMessage:"string",timeout:"numeric",debugTimeout:"numeric",pollingInterval:"numeric",_stackDropCount:"numeric",asyncPolling:"bool"};var a=q.extend({error:"func",check:"func",success:"func"},O);var b=q.extend({visible:"bool",enabled:"bool",editable:"bool",viewNamespace:"string",viewName:"string",viewId:"string",fragmentId:"string",autoWait:"any"},O);var c=q.extend({_stack:"string",matchers:"any",actions:"any",id:"any",controlType:"any",searchOpenDialogs:"bool"},b,a);var d=q.extend({},c,_());var e=q.extend({sOriginalControlType:"string",interaction:"any"},c);function _(){return Object.keys(sap.ui.test.matchers).reduce(function(r,M){M=M.charAt(0).toLowerCase()+M.substr(1);r[M]="any";return r;},{});}return{OPA_WAITFOR_CONFIG:O,OPA_WAITFOR:a,OPA5_WAITFOR_CONFIG:b,OPA5_WAITFOR:d,OPA5_WAITFOR_DECORATED:e};});
