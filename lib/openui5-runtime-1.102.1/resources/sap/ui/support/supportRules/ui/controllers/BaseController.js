/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/support/supportRules/Storage","sap/ui/support/supportRules/Constants","sap/ui/support/supportRules/ui/models/SelectionUtils"],function(C,s,c,S){"use strict";return C.extend("sap.ui.support.supportRules.ui.controllers.BaseController",{persistExecutionScope:function(){var a={analyzeContext:this.model.getProperty("/analyzeContext"),subtreeExecutionContextId:this.model.getProperty("/subtreeExecutionContextId")},b=this.model.getProperty("/executionScopeComponents");s.setSelectedScopeComponents(b);s.setSelectedContext(a);},persistVisibleColumns:function(){var v=[],a=S.treeTable.getColumns();a.forEach(function(o){if(o.getVisible()){v.push(o.sId);}});s.setVisibleColumns(v);},deletePersistedData:function(){s.deletePersistenceCookie(c.COOKIE_NAME);this.getView().getModel().setProperty("/persistingSettings",false);s.removeAllData();}});});
