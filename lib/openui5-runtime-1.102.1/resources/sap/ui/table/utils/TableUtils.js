/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_GroupingUtils","./_ColumnUtils","./_MenuUtils","./_BindingUtils","./_HookUtils","../library","sap/ui/base/Object","sap/ui/core/ResizeHandler","sap/ui/core/library","sap/ui/core/theming/Parameters","sap/ui/model/ChangeReason","sap/ui/thirdparty/jquery","sap/base/util/restricted/_throttle"],function(G,C,M,B,H,l,a,R,c,T,b,q,t){"use strict";var S=l.SelectionBehavior;var d=l.SelectionMode;var e=c.MessageType;var r;var f=null;var g={DATACELL:1<<1,COLUMNHEADER:1<<2,ROWHEADER:1<<3,ROWACTION:1<<4,COLUMNROWHEADER:1<<5,PSEUDO:1<<6};g.ANYCONTENTCELL=g.ROWHEADER|g.DATACELL|g.ROWACTION;g.ANYCOLUMNHEADER=g.COLUMNHEADER|g.COLUMNROWHEADER;g.ANYROWHEADER=g.ROWHEADER|g.COLUMNROWHEADER;g.ANY=g.ANYCONTENTCELL|g.ANYCOLUMNHEADER;var m={sapUiSizeCozy:48,sapUiSizeCompact:32,sapUiSizeCondensed:24,undefined:32};var h=1;var j=1;var D={sapUiSizeCozy:m.sapUiSizeCozy+j,sapUiSizeCompact:m.sapUiSizeCompact+j,sapUiSizeCondensed:m.sapUiSizeCondensed+j,undefined:m.undefined+j};var k={navigationIcon:"navigation-right-arrow",deleteIcon:"sys-cancel",clearSelectionIcon:"clear-all",navIndicatorWidth:3};var n={Render:"Render",VerticalScroll:"VerticalScroll",FirstVisibleRowChange:"FirstVisibleRowChange",Unbind:"Unbind",Animation:"Animation",Resize:"Resize",Zoom:"Zoom",Unknown:"Unknown"};for(var p in b){n[p]=b[p];}var I=":sapTabbable, .sapUiTableTreeIcon:not(.sapUiTableTreeIconLeaf)";var o={Grouping:G,Column:C,Menu:M,Binding:B,Hook:H,CELLTYPE:g,BaseSize:m,BaseBorderWidth:h,RowHorizontalFrameSize:j,DefaultRowHeight:D,RowsUpdateReason:n,INTERACTIVE_ELEMENT_SELECTORS:I,ThemeParameters:k,hasRowHeader:function(i){return(i.getSelectionMode()!==d.None&&i.getSelectionBehavior()!==S.RowOnly)||G.isInGroupMode(i);},hasSelectAll:function(i){var s=i?i.getSelectionMode():d.None;return s===d.MultiToggle&&i.getEnableSelectAll();},hasRowHighlights:function(i){if(!i){return false;}var s=i.getRowSettingsTemplate();if(!s){return false;}var u=s.getHighlight();return s.isBound("highlight")||(u!=null&&u!==e.None);},hasRowNavigationIndicators:function(i){if(!i){return false;}var s=i.getRowSettingsTemplate();if(!s){return false;}var N=s.getNavigated();return s.isBound("navigated")||N;},hasRowActions:function(i){var s=i?i.getRowActionTemplate():null;return s!=null&&(s.isBound("visible")||s.getVisible())&&i.getRowActionCount()>0;},isRowSelectionAllowed:function(i){return i.getSelectionMode()!==d.None&&(i.getSelectionBehavior()===S.Row||i.getSelectionBehavior()===S.RowOnly);},isRowSelectorSelectionAllowed:function(i){return i.getSelectionMode()!==d.None&&o.hasRowHeader(i);},areAllRowsSelected:function(i){if(!i){return false;}var s=i._getSelectionPlugin();var u=s.getSelectableCount();var v=s.getSelectedCount();return u>0&&u===v;},isNoDataVisible:function(i){return i.getShowNoData()&&!i._getRowMode().isNoDataDisabled()&&!o.hasData(i)||o.getVisibleColumnCount(i)===0;},hasData:function(i){var s=i.getBinding();var u=i._getTotalRowCount();var v=u>0;if(s&&s.providesGrandTotal){var w=s.providesGrandTotal()&&s.hasTotaledMeasures();v=(w&&u>1)||(!w&&u>0);}return v;},isBusyIndicatorVisible:function(i){if(!i||!i.getDomRef()){return false;}return i.getDomRef().querySelector("#"+i.getId()+"-sapUiTableGridCnt > .sapUiLocalBusyIndicator")!=null;},isA:function(O,v){return a.isA(O,v);},toggleRowSelection:function(i,v,s,u){if(!i||!i.getBinding()||i.getSelectionMode()===d.None||v==null){return false;}var w=i._getSelectionPlugin();function x(A){if(!w.isIndexSelectable(A)){return false;}i._iSourceRowIndex=A;var E=false;if(u){E=u(A,s);}else if(w.isIndexSelected(A)){if(s!==true){E=true;w.removeSelectionInterval(A,A);}}else if(s!==false){E=true;w.addSelectionInterval(A,A);}delete i._iSourceRowIndex;return E;}if(typeof v==="number"){if(v<0||v>=i._getTotalRowCount()){return false;}return x(v);}else{var $=q(v);var y=o.getCellInfo($[0]);var z=o.isRowSelectionAllowed(i);if(!o.Grouping.isInGroupHeaderRow($[0])&&((y.isOfType(o.CELLTYPE.DATACELL|o.CELLTYPE.ROWACTION)&&z)||(y.isOfType(o.CELLTYPE.ROWHEADER)&&o.isRowSelectorSelectionAllowed(i)))){var A=i.getRows()[y.rowIndex].getIndex();return x(A);}return false;}},getNoContentMessage:function(i){if(i._getVisibleColumns().length>0){return i.getNoData();}else{return i.getAggregation("_noColumnsMessage");}},getNoDataText:function(i){var N=i.getNoData();if(o.getVisibleColumnCount(i)===0&&!o.isA(N,"sap.m.IllustratedMessage")){return o.getResourceText("TBL_NO_COLUMNS");}if(o.isA(N,"sap.ui.core.Control")){return null;}else if(typeof N==="string"){return N;}else{return o.getResourceText("TBL_NO_DATA");}},getVisibleColumnCount:function(i){return i._getVisibleColumns().length;},getHeaderRowCount:function(s){if(s._iHeaderRowCount===undefined){if(!s.getColumnHeaderVisible()){s._iHeaderRowCount=0;}else{var u=1;var v=s.getColumns();for(var i=0;i<v.length;i++){if(v[i].shouldRender()){u=Math.max(u,v[i].getMultiLabels().length);}}s._iHeaderRowCount=u;}}return s._iHeaderRowCount;},isVariableRowHeightEnabled:function(i){var s=i._getRowCounts();return i&&i._bVariableRowHeightEnabled&&!s.fixedTop&&!s.fixedBottom;},getNonEmptyRowCount:function(i){return Math.min(i._getRowCounts().count,i._getTotalRowCount());},getFocusedItemInfo:function(i){var s=i._getItemNavigation();if(!s){return null;}return{cell:s.getFocusedIndex(),columnCount:s.iColumns,cellInRow:s.getFocusedIndex()%s.iColumns,row:Math.floor(s.getFocusedIndex()/s.iColumns),cellCount:s.getItemDomRefs().length,domRef:s.getFocusedDomRef()};},getRowIndexOfFocusedCell:function(i){var s=o.getFocusedItemInfo(i);return s.row-o.getHeaderRowCount(i);},isFixedColumn:function(i,s){return s<i.getComputedFixedColumnCount();},hasFixedColumns:function(i){return i.getComputedFixedColumnCount()>0;},focusItem:function(i,s,E){var u=i._getItemNavigation();if(u){u.focusItem(s,E);}},getCellInfo:function(i){var s;var $=q(i);var u;var v;var w;var x;var y;s={type:0,cell:null,rowIndex:null,columnIndex:null,columnSpan:null};if($.hasClass("sapUiTableDataCell")){u=$.attr("data-sap-ui-colid");v=sap.ui.getCore().byId(u);s.type=o.CELLTYPE.DATACELL;s.rowIndex=parseInt($.parent().attr("data-sap-ui-rowindex"));s.columnIndex=v.getIndex();s.columnSpan=1;}else if($.hasClass("sapUiTableHeaderDataCell")){w=/_([\d]+)/;u=$.attr("id");x=w.exec(u);y=x&&x[1]!=null?parseInt(x[1]):0;s.type=o.CELLTYPE.COLUMNHEADER;s.rowIndex=y;s.columnIndex=parseInt($.attr("data-sap-ui-colindex"));s.columnSpan=parseInt($.attr("colspan")||1);}else if($.hasClass("sapUiTableRowSelectionCell")){s.type=o.CELLTYPE.ROWHEADER;s.rowIndex=parseInt($.parent().attr("data-sap-ui-rowindex"));s.columnIndex=-1;s.columnSpan=1;}else if($.hasClass("sapUiTableRowActionCell")){s.type=o.CELLTYPE.ROWACTION;s.rowIndex=parseInt($.parent().attr("data-sap-ui-rowindex"));s.columnIndex=-2;s.columnSpan=1;}else if($.hasClass("sapUiTableRowSelectionHeaderCell")){s.type=o.CELLTYPE.COLUMNROWHEADER;s.columnIndex=-1;s.columnSpan=1;}else if($.hasClass("sapUiTablePseudoCell")){u=$.attr("data-sap-ui-colid");v=sap.ui.getCore().byId(u);s.type=o.CELLTYPE.PSEUDO;s.rowIndex=-1;s.columnIndex=v?v.getIndex():-1;s.columnSpan=1;}if(s.type!==0){s.cell=$;}s.isOfType=function(z){if(z==null){return false;}return(this.type&z)>0;};return s;},getRowColCell:function(i,s,u,v){var w=i.getRows()[s]||null;var x=v?i.getColumns():i._getVisibleColumns();var y=x[u]||null;var z;var A=null;if(w&&y){if(!z){var E=y.getMetadata();while(E.getName()!=="sap.ui.table.Column"){E=E.getParent();}z=E.getClass();}A=w.getCells().find(function(A){return y===z.ofCell(A);})||null;}return{row:w,column:y,cell:A};},getCell:function(i,E,s){s=s===true;if(!i||!E){return null;}var $=q(E);var u=i.getDomRef();var v=".sapUiTableCell";if(!s){v+=":not(.sapUiTablePseudoCell)";}var w=$.closest(v,u);if(w.length>0){return w;}return null;},getParentCell:function(i,E,s){s=s===true;var $=q(E);var u=o.getCell(i,E,s);if(!u||u[0]===$[0]){return null;}else{return u;}},registerResizeHandler:function(i,s,u,v,w){v=v==null?"":v;w=w===true;if(!i||typeof s!=="string"||typeof u!=="function"){return undefined;}var x=i.getDomRef(v);o.deregisterResizeHandler(i,s);if(!i._mResizeHandlerIds){i._mResizeHandlerIds={};}if(w&&x){x=x.parentNode;}if(x){i._mResizeHandlerIds[s]=R.register(x,u);}return i._mResizeHandlerIds[s];},deregisterResizeHandler:function(s,v){var u=[];if(!s._mResizeHandlerIds){return;}if(typeof v==="string"){u.push(v);}else if(v===undefined){for(var K in s._mResizeHandlerIds){if(typeof K=="string"&&s._mResizeHandlerIds.hasOwnProperty(K)){u.push(K);}}}else if(Array.isArray(v)){u=v;}for(var i=0;i<u.length;i++){var w=u[i];if(s._mResizeHandlerIds[w]){R.deregister(s._mResizeHandlerIds[w]);s._mResizeHandlerIds[w]=undefined;}}},isFirstScrollableRow:function(i,s){if(isNaN(s)){var $=q(s);s=parseInt($.add($.parent()).filter("[data-sap-ui-rowindex]").attr("data-sap-ui-rowindex"));}return s==i._getRowCounts().fixedTop;},isLastScrollableRow:function(i,s){if(isNaN(s)){var $=q(s);s=parseInt($.add($.parent()).filter("[data-sap-ui-rowindex]").attr("data-sap-ui-rowindex"));}var u=i._getRowCounts();return s==u.count-u.fixedBottom-1;},getContentDensity:function(s){var u;var v=["sapUiSizeCondensed","sapUiSizeCompact","sapUiSizeCozy"];var w=function(F,O){if(!O[F]){return;}for(var i=0;i<v.length;i++){if(O[F](v[i])){return v[i];}}};var $=s.$();if($.length>0){u=w("hasClass",$);}else{u=w("hasStyleClass",s);}if(u){return u;}var P=null;var x=s.getParent();if(x){do{u=w("hasStyleClass",x);if(u){return u;}if(x.getDomRef){P=x.getDomRef();}else if(x.getRootNode){P=x.getRootNode();}if(!P&&x.getParent){x=x.getParent();}else{x=null;}}while(x&&!P);}$=q(P||document.body);u=w("hasClass",$.closest("."+v.join(",.")));return u;},isVariableWidth:function(w){return!w||w=="auto"||w.toString().match(/%$/);},getFirstFixedBottomRowIndex:function(i){var s=i._getRowCounts();if(!i.getBinding()||s.fixedBottom===0){return-1;}var F=-1;var u=i.getFirstVisibleRow();var v=i._getTotalRowCount();if(v>=s.count){F=s.count-s.fixedBottom;}else{var w=v-s.fixedBottom-u;if(w>=0&&(u+w)<v){F=w;}}return F;},getResourceBundle:function(O){O=q.extend({async:false,reload:false},O);if(r&&O.reload!==true){if(O.async===true){return Promise.resolve(r);}else{return r;}}var v=sap.ui.getCore().getLibraryResourceBundle("sap.ui.table",O.async===true);if(v instanceof Promise){v=v.then(function(i){r=i;return r;});}else{r=v;}return v;},getResourceText:function(K,v){return r?r.getText(K,v):"";},dynamicCall:function(O,v,i){var s=typeof O==="function"?O():O;if(!s||!v){return undefined;}i=i||s;if(typeof v==="function"){v.call(i,s);return undefined;}else{var P;var u=[];for(var F in v){if(typeof s[F]==="function"){P=v[F];u.push(s[F].apply(i,P));}else{u.push(undefined);}}if(u.length===1){return u[0];}else{return u;}}},throttle:function(i,w,O){O=Object.assign({leading:true,asyncLeading:false,trailing:true},O);var s;var u=false;var L={};var _;var v;if(O.leading&&O.asyncLeading){_=function(){if(u){var P=Promise.resolve().then(function(){if(!P.canceled){i.apply(L.context,L.args);}s=null;});P.cancel=function(){P.canceled=true;};s=P;}else{i.apply(this,arguments);}};}else{_=i;}var x=t(_,w,{leading:O.leading,trailing:O.trailing});if(O.leading&&O.asyncLeading){var y=x.cancel;x.cancel=function(){if(s){s.cancel();}y();};v=Object.assign(function(){L={context:this,args:arguments};u=true;x.apply(this,arguments);u=false;},x);}else{v=x;}return v;},throttleFrameWise:function(i){var A=null;var s=function(){s.cancel();A=window.requestAnimationFrame(function(u){i.apply(this,u);}.bind(this,arguments));};s.cancel=function(){window.cancelAnimationFrame(A);A=null;};return s;},getInteractiveElements:function(i){if(!i){return null;}var $=q(i);var s=o.getCellInfo($);if(s.isOfType(g.ANY|g.PSEUDO)){var u=$.find(I);if(u.length>0){return u;}}return null;},getFirstInteractiveElement:function(s,u){if(!s){return null;}var v=s.getTable();var w=s.getCells();if(u===true&&this.hasRowActions(v)){w.push(s.getRowAction());}for(var i=0;i<w.length;i++){var x=w[i].getDomRef();var $=this.getCell(v,x,true);var y=o.getInteractiveElements($);if(y){return y[0];}}return null;},convertCSSSizeToPixel:function(s,w){var P;if(typeof s!=="string"){return null;}if(s.endsWith("px")){P=parseFloat(s);}else if(s.endsWith("em")||s.endsWith("rem")){P=parseFloat(s)*o.getBaseFontSize();}else{return null;}if(w){return P+"px";}else{return P;}},getBaseFontSize:function(){if(f==null){var i=document.documentElement;if(i){f=parseInt(window.getComputedStyle(i).fontSize);}}return f==null?16:f;},readThemeParameters:function(){var P=T.get({name:["_sap_ui_table_BaseSize","_sap_ui_table_BaseSizeCozy","_sap_ui_table_BaseSizeCompact","_sap_ui_table_BaseSizeCondensed","_sap_ui_table_BaseBorderWidth","_sap_ui_table_NavigationIcon","_sap_ui_table_DeleteIcon","_sap_ui_table_ClearSelectionIcon","_sap_ui_table_NavIndicatorWidth"]});function i(s){return o.convertCSSSizeToPixel(P[s]);}m.undefined=i("_sap_ui_table_BaseSize");m.sapUiSizeCozy=i("_sap_ui_table_BaseSizeCozy");m.sapUiSizeCompact=i("_sap_ui_table_BaseSizeCompact");m.sapUiSizeCondensed=i("_sap_ui_table_BaseSizeCondensed");h=i("_sap_ui_table_BaseBorderWidth");j=h;D.undefined=m.undefined+j;D.sapUiSizeCozy=m.sapUiSizeCozy+j;D.sapUiSizeCompact=m.sapUiSizeCompact+j;D.sapUiSizeCondensed=m.sapUiSizeCondensed+j;k.navigationIcon=P["_sap_ui_table_NavigationIcon"];k.deleteIcon=P["_sap_ui_table_DeleteIcon"];k.clearSelectionIcon=P["_sap_ui_table_ClearSelectionIcon"];k.navIndicatorWidth=i("_sap_ui_table_NavIndicatorWidth");},addDelegate:function(E,i,s){if(E&&i){E.addDelegate(i,false,s?s:i,false);}},removeDelegate:function(E,i){if(E&&i){E.removeDelegate(i);}},createWeakMapFacade:function(){var w=new window.WeakMap();return function(K){if(!K||!(typeof K==="object")){return null;}if(!w.has(K)){w.set(K,{});}return w.get(K);};}};G.TableUtils=o;C.TableUtils=o;M.TableUtils=o;B.TableUtils=o;H.TableUtils=o;return o;},true);