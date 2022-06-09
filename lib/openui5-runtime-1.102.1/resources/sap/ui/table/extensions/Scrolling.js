/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ExtensionBase","../utils/TableUtils","../library","sap/ui/Device","sap/ui/performance/trace/Interaction","sap/base/Log","sap/ui/thirdparty/jquery","sap/ui/dom/jquery/scrollLeftRTL"],function(E,T,l,D,I,L,q){"use strict";var S=l.SharedDomRef;var H=T.Hook.Keys;var c=T.createWeakMapFacade();var M=1000000;var V=2;var d={HORIZONAL:"HORIZONTAL",VERTICAL:"VERTICAL",BOTH:"BOTH"};function e(s,t){L.debug("sap.ui.table.extensions.Scrolling",s,t);}function P(a,p){var r=true;var C=false;var b=[];var o={cancel:function(){if(this.isCancelled()||!this.isRunning()){return;}C=true;for(var i=0;i<b.length;i++){b[i]();}e("Process cancelled: "+p.id);},isCancelled:function(){return C;},addCancelListener:function(i){b.push(i);},isRunning:function(){return r;},getInfo:function(){return p;},onPromiseCreated:function(i){}};var s;e("Process started: "+p.id);if(typeof a==="function"){s=new Promise(function(){a.apply(this,Array.prototype.slice.call(arguments).concat(o));});}else{s=Promise.resolve();}Object.assign(s,o);s.then(function(){if(o.isCancelled()){e("Process finished due to cancellation: "+p.id);}else{e("Process finished: "+p.id);}r=false;});o.onPromiseCreated(s);return s;}function f(){this.iIndex=0;this.nOffset=0;this.sOffsetType=f.OffsetType.Pixel;this.bIsInitial=true;}f.OffsetType={Pixel:"Pixel",Percentage:"Percentage",PercentageOfViewport:"PercentageOfViewport"};f.prototype.getIndex=function(){return this.iIndex;};f.prototype.getOffset=function(){return this.nOffset;};f.prototype.getOffsetType=function(){return this.sOffsetType;};f.prototype.isOffsetInPixel=function(){return this.sOffsetType===f.OffsetType.Pixel;};f.prototype.isInitial=function(){return this.bIsInitial;};f.prototype.setPosition=function(i,a,o){e("ScrollPosition#setPosition(index: "+i+", offset: "+a+", offsetType: "+o+")");if(!f._isPositiveNumber(i)){return;}if(!f._isPositiveNumber(a)){this.nOffset=0;}this.setIndex(i);this.setOffset(a,o);};f.prototype.setIndex=function(i){e("ScrollPosition#setIndex(index: "+i+")");if(!f._isPositiveNumber(i)){return;}this.bIsInitial=false;this.iIndex=i;};f.prototype.setOffset=function(a,o){e("ScrollPosition#setOffset(offset: "+a+", offsetType: "+o+")");if(!f._isPositiveNumber(a)){return;}this.bIsInitial=false;this.sOffsetType=o in f.OffsetType?o:f.OffsetType.Pixel;if(this.isOffsetInPixel()){this.nOffset=Math.round(a);}else{this.nOffset=Math.min(a,1);}};f.prototype.scrollRows=function(r){var N=this.getIndex()+r;var i=this.getOffset();if(!this.isOffsetInPixel()||N<0){i=0;}this.setPosition(Math.max(0,N),i);};f._isPositiveNumber=function(a){return typeof a==="number"&&!isNaN(a)&&a>=0;};var g={UpdateFromFirstVisibleRow:{id:"UpdateFromFirstVisibleRow",rank:6},UpdateFromScrollPosition:{id:"UpdateFromScrollPosition",rank:5},RestoreScrollPosition:{id:"RestoreScrollPosition",rank:4},AdjustToTotalRowCount:{id:"AdjustToTotalRowCount",rank:3},OnRowsUpdated:{id:"OnRowsUpdated",rank:3},UpdateFromScrollbar:{id:"UpdateFromScrollbar",rank:2},UpdateFromViewport:{id:"UpdateFromViewport",rank:1},canStart:function(t,p){var a=c(t).pVerticalScrollUpdateProcess;var C=a?a.getInfo():null;if(a&&a.isRunning()&&C.rank>p.rank){e("Cannot start update process "+p.id+" - A higher-ranked update process is currently running ("+C.id+")",t);return false;}return true;},start:function(t,p,a){if(!g.canStart(t,p)){return;}if(c(t).pVerticalScrollUpdateProcess){c(t).pVerticalScrollUpdateProcess.cancel();}c(t).pVerticalScrollUpdateProcess=new P(a,p);}};var h={onScrollbarScroll:function(o){var N=o.target.scrollLeft;var O=o.target._scrollLeft;I.notifyScrollEvent&&I.notifyScrollEvent(o);if(N!==O){var s=h.getScrollAreas(this);o.target._scrollLeft=N;for(var i=0;i<s.length;i++){var a=s[i];if(a!==o.target&&a.scrollLeft!==N){a.scrollLeft=N;a._scrollLeft=N;}}c(this).iHorizontalScrollPosition=N;}},restoreScrollPosition:function(t){var s=t._getScrollExtension();var o=s.getHorizontalScrollbar();if(o&&c(t).iHorizontalScrollPosition!==null){var a=h.getScrollAreas(t);for(var i=0;i<a.length;i++){var b=a[i];delete b._scrollLeft;}if(o.scrollLeft!==c(t).iHorizontalScrollPosition){o.scrollLeft=c(t).iHorizontalScrollPosition;}else{var p=q.Event("scroll");p.target=o;h.onScrollbarScroll.call(t,p);}}},updateScrollbar:function(t){var s=t._getScrollExtension();var o=s.getHorizontalScrollbar();if(!o){return;}var a=t._collectTableSizes();var $=t.$();var C=a.tableCtrlScrollWidth;if(D.browser.safari){C=Math.max(C,t._getColumnsWidth(t.getComputedFixedColumnCount()));}var b=C>a.tableCtrlScrWidth;if(b){if(!s.isHorizontalScrollbarVisible()){$.addClass("sapUiTableHScr");o.classList.remove("sapUiTableHidden");if(D.browser.safari){var i=$.find(".sapUiTableCtrlScroll, .sapUiTableColHdrScr > .sapUiTableColHdr");i.outerWidth(C);}}var p=a.tableCtrlFixedWidth;if($.find(".sapUiTableRowHdrScr").length>0){p+=a.tableRowHdrScrWidth;}if(t._bRtlMode){o.style.marginRight=p+"px";o.style.marginLeft="";}else{o.style.marginLeft=p+"px";o.style.marginRight="";}var r=t.getDomRef("hsb-content");if(r){r.style.width=C+"px";}}if(!b&&s.isHorizontalScrollbarVisible()){$.removeClass("sapUiTableHScr");o.classList.add("sapUiTableHidden");if(D.browser.safari){$.find(".sapUiTableCtrlScroll, .sapUiTableColHdr").css("width","");}}},onScrollbarMouseDown:function(o){this._getKeyboardExtension().setActionMode(false);},addEventListeners:function(t){var s=t._getScrollExtension();var o=s.getHorizontalScrollbar();var a=h.getScrollAreas(t);if(!s._onHorizontalScrollEventHandler){s._onHorizontalScrollEventHandler=h.onScrollbarScroll.bind(t);}for(var i=0;i<a.length;i++){a[i].addEventListener("scroll",s._onHorizontalScrollEventHandler);}if(o){if(!s._onHorizontalScrollbarMouseDownEventHandler){s._onHorizontalScrollbarMouseDownEventHandler=h.onScrollbarMouseDown.bind(t);}o.addEventListener("mousedown",s._onHorizontalScrollbarMouseDownEventHandler);}},removeEventListeners:function(t){var s=t._getScrollExtension();var o=s.getHorizontalScrollbar();var a=h.getScrollAreas(t);if(s._onHorizontalScrollEventHandler){for(var i=0;i<a.length;i++){a[i].removeEventListener("scroll",s._onHorizontalScrollEventHandler);delete a[i]._scrollLeft;}delete s._onHorizontalScrollEventHandler;}if(o&&s._onHorizontalScrollbarMouseDownEventHandler){o.removeEventListener("mousedown",s._onHorizontalScrollbarMouseDownEventHandler);delete s._onHorizontalScrollbarMouseDownEventHandler;}},getScrollAreas:function(t){var o=t.getDomRef();var s;if(o){s=Array.prototype.slice.call(t.getDomRef().querySelectorAll(".sapUiTableCtrlScr"));}var a=[t._getScrollExtension().getHorizontalScrollbar()].concat(s);return a.filter(function(b){return b!=null;});}};var j={performUpdateFromFirstVisibleRow:function(t,b){e("VerticalScrollingHelper.performUpdateFromFirstVisibleRow",t);g.start(t,g.UpdateFromFirstVisibleRow,function(r,a,p){T.Hook.call(t,H.Signal,"StartTableUpdate");p.onPromiseCreated=function(i){i.finally(function(){T.Hook.call(t,H.Signal,"EndTableUpdate");});};if(b===true){var o=function(){e("VerticalScrollingHelper.performUpdateFromFirstVisibleRow (async: rows update)",t);j._performUpdateFromFirstVisibleRow(t,p).then(r);return false;};j.addOnRowsUpdatedPreprocessor(t,o);p.addCancelListener(function(){var R=j.removeOnRowsUpdatedPreprocessor(t,o);if(R){r();}});}else{j._performUpdateFromFirstVisibleRow(t,p).then(r);}});},_performUpdateFromFirstVisibleRow:function(t,p){return j.adjustScrollPositionToFirstVisibleRow(t,p).then(function(){return j.fixTemporaryFirstVisibleRow(t,null,p);}).then(function(){return j.fixScrollPosition(t,p);}).then(function(){return Promise.all([j.scrollViewport(t,p),j.scrollScrollbar(t,p)]);});},performUpdateFromScrollPosition:function(t){e("VerticalScrollingHelper.performUpdateFromScrollPosition",t);g.start(t,g.UpdateFromScrollPosition,function(r,a,p){T.Hook.call(t,H.Signal,"StartTableUpdate");p.onPromiseCreated=function(o){o.finally(function(){T.Hook.call(t,H.Signal,"EndTableUpdate");});};j.adjustFirstVisibleRowToScrollPosition(t,null,p).then(function(){if(p.isCancelled()){return;}var s=c(t).oVerticalScrollPosition;e("VerticalScrollingHelper.performUpdateFromScrollPosition (async: firstVisibleRow update)",t);if(s.getIndex()>t.getFirstVisibleRow()){s.setIndex(t.getFirstVisibleRow());if(T.isVariableRowHeightEnabled(t)){s.setOffset(1,f.OffsetType.Percentage);}else{s.setOffset(0);}}}).then(function(){return j.fixScrollPosition(t,p);}).then(function(){return Promise.all([j.scrollViewport(t,p),j.scrollScrollbar(t,p)]);}).then(r);});},performUpdateFromScrollbar:function(t){e("VerticalScrollingHelper.performUpdateFromScrollbar",t);clearTimeout(c(t).mTimeouts.largeDataScrolling);delete c(t).mTimeouts.largeDataScrolling;g.start(t,g.UpdateFromScrollbar,function(r,a,p){T.Hook.call(t,H.Signal,"StartTableUpdate");p.onPromiseCreated=function(o){o.finally(function(){T.Hook.call(t,H.Signal,"EndTableUpdate");});};t._getKeyboardExtension().setActionMode(false);if(t._bLargeDataScrolling){c(t).mTimeouts.largeDataScrolling=setTimeout(function(){delete c(t).mTimeouts.largeDataScrolling;if(t._getScrollExtension().getVerticalScrollbar()!=null){e("VerticalScrollingHelper.performUpdateFromScrollbar (async: large data scrolling)",t);j._performUpdateFromScrollbar(t,p).then(r);}else{e("VerticalScrollingHelper.performUpdateFromScrollbar (async: large data scrolling): No scrollbar",t);}},300);p.addCancelListener(function(){if(c(t).mTimeouts.largeDataScrolling!=null){clearTimeout(c(t).mTimeouts.largeDataScrolling);delete c(t).mTimeouts.largeDataScrolling;r();}});}else{j._performUpdateFromScrollbar(t,p).then(r);}});},_performUpdateFromScrollbar:function(t,p){return j.adjustScrollPositionToScrollbar(t,p).then(function(){return j.adjustFirstVisibleRowToScrollPosition(t,null,p);}).then(function(){return j.fixScrollPosition(t,p);}).then(function(){return j.scrollViewport(t,p);});},performUpdateFromViewport:function(t){e("VerticalScrollingHelper.performUpdateFromViewport",t);g.start(t,g.UpdateFromViewport,function(r,a,p){T.Hook.call(t,H.Signal,"StartTableUpdate");p.onPromiseCreated=function(o){o.finally(function(){T.Hook.call(t,H.Signal,"EndTableUpdate");});};j.adjustScrollPositionToViewport(t,p).then(function(){return j.adjustFirstVisibleRowToScrollPosition(t,true,p);}).then(function(){return j.scrollScrollbar(t,p);}).then(r);});},onScrollbarScroll:function(o){I.notifyScrollEvent&&I.notifyScrollEvent(o);var a=o.target.scrollTop;var b=o.target._scrollTop;var s=a!==b;delete o.target._scrollTop;if(a===0&&!o.target.isConnected){e("VerticalScrollingHelper.onScrollbarScroll: Scrollbar is not connected with the DOM",this);}else if(s){e("VerticalScrollingHelper.onScrollbarScroll: Scroll position changed to "+a+" by interaction",this);j.performUpdateFromScrollbar(this);}else{e("VerticalScrollingHelper.onScrollbarScroll: Scroll position changed to "+a+" by API",this);}},onViewportScroll:function(o){if(!g.canStart(this,g.UpdateFromViewport)){return;}var a=o.target.scrollTop;var b=o.target._scrollTop;delete o.target._scrollTop;if(a!==b){e("VerticalScrollingHelper.onViewportScroll: Scroll position changed to "+a+" by interaction",this);j.performUpdateFromViewport(this);}else{e("VerticalScrollingHelper.onViewportScroll: Scroll position changed to "+a+" by API",this);}},adjustFirstVisibleRowToScrollPosition:function(t,s,p){if(p&&p.isCancelled()){return Promise.resolve();}s=s===true;var o=c(t).oVerticalScrollPosition;var O=o.getOffsetType()===f.OffsetType.PercentageOfViewport;var N=o.getIndex();var i=t.getFirstVisibleRow();var b=j.isIndexInBuffer(t,N);var a=b||O;e("VerticalScrollingHelper.adjustFirstVisibleRowToScrollPosition:"+" Set \"firstVisibleRow\" from "+i+" to "+N,t);var r=t._setFirstVisibleRowIndex(N,{onScroll:true,suppressEvent:a,suppressRendering:s});if(!r){if(a){return j.fixTemporaryFirstVisibleRow(t,true,p);}return Promise.resolve();}return new Promise(function(u){var v=function(w){e("VerticalScrollingHelper.adjustFirstVisibleRowToScrollPosition (async: rows updated):"+" Reason "+w.getParameters().reason,this);if(a){j.fixTemporaryFirstVisibleRow(t,true,p).then(u);}else{u();}return false;};j.addOnRowsUpdatedPreprocessor(t,v);if(p){p.addCancelListener(function(){var R=j.removeOnRowsUpdatedPreprocessor(t,v);if(R){u();}});}});},fixTemporaryFirstVisibleRow:function(t,F,p){if(p&&p.isCancelled()){return Promise.resolve();}F=F===true;var s=c(t).oVerticalScrollPosition;var o=s.getOffsetType()===f.OffsetType.PercentageOfViewport;var i=s.getIndex();var b=j.isIndexInBuffer(t,i);var a=b||o;if(!a){e("VerticalScrollingHelper.fixTemporaryFirstVisibleRow: Aborted - The index is already final",t);return Promise.resolve();}var N=i;var v=j.getScrollRangeOfViewport(t);var r=t._getMaxFirstRenderedRowIndex();var R=t._aRowHeights;var u;e("VerticalScrollingHelper.fixTemporaryFirstVisibleRow",t);if(o){var w=v*s.getOffset();if(b){N=r;}for(u=0;u<R.length;u++){var x=w-R[u];if(x>=0){w=x;N++;}else{break;}}}else if(b){var y=Math.max(0,Math.min(R.length-1,i-r));var z=0;for(u=0;u<y;u++){z+=R[u];if(z>v){N=r+u;break;}}}if(i!==N||F){e("VerticalScrollingHelper.fixTemporaryFirstVisibleRow: Set \"firstVisibleRow\" to "+N,t);t._setFirstVisibleRowIndex(N,{onScroll:true,forceEvent:F,suppressRendering:true});}return Promise.resolve();},adjustScrollPositionToFirstVisibleRow:function(t,p){if(p&&p.isCancelled()){return Promise.resolve();}e("VerticalScrollingHelper.adjustScrollPositionToFirstVisibleRow",t);c(t).oVerticalScrollPosition.setPosition(t.getFirstVisibleRow());return Promise.resolve();},adjustScrollPositionToScrollbar:function(t,p){if(p&&p.isCancelled()){return Promise.resolve();}var s=c(t).oVerticalScrollPosition;var a=j.getScrollPositionOfScrollbar(t);var i=j.getScrollRange(t);var b=j.getScrollRangeRowFraction(t);var N=0;var o=0;var r=f.OffsetType.Percentage;var u;e("VerticalScrollingHelper.adjustScrollPositionToScrollbar",t);if(T.isVariableRowHeightEnabled(t)){if(j.isScrollPositionOfScrollbarInBuffer(t)){var B=j.getScrollRangeBuffer(t);var v=i-B;var w=a-v;var x=w/B;N=t._getMaxFirstRenderedRowIndex();if(j.isIndexInBuffer(t,s.getIndex())){var y=j.getScrollRangeOfViewport(t);var z=y*x;var R=t._aRowHeights;for(var A=0;A<R.length;A++){var C=z-R[A];if(C>=0){z=C;N++;}else{o=Math.round(z);r=f.OffsetType.Pixel;break;}}}else{o=x;r=f.OffsetType.PercentageOfViewport;}}else{u=a/b;N=Math.floor(u);o=u-N;}}else{var F=i-a;var G=F<1;if(G){N=t._getMaxFirstVisibleRowIndex();o=0;r=f.OffsetType.Pixel;}else{u=a/b;N=Math.floor(u);o=u-N;}}s.setPosition(N,o,r);return Promise.resolve();},adjustScrollPositionToViewport:function(t,p){if(p&&p.isCancelled()){return Promise.resolve();}var s=c(t).oVerticalScrollPosition;var r=t._aRowHeights;var N=t._getFirstRenderedRowIndex();var i=0;var a=j.getScrollPositionOfViewport(t);e("VerticalScrollingHelper.adjustScrollPositionToViewport",t);for(var R=0;R<r.length;R++){var b=a-r[R];if(b>=0){a=b;N++;}else{i=Math.round(a);break;}}s.setPosition(N,i);return Promise.resolve();},fixScrollPosition:function(t,p){if(p&&p.isCancelled()){return Promise.resolve();}var s=c(t).oVerticalScrollPosition;var v=t.getDomRef("tableCCnt");var i=j.getScrollRangeOfViewport(t);var r=t._aRowHeights;if(!v||!t.getBinding()){e("VerticalScrollingHelper.fixScrollPosition: Aborted - Viewport or binding not available",t);return Promise.resolve();}e("VerticalScrollingHelper.fixScrollPosition",t);var N=s.getIndex();var a=s.getOffset();var b=0;var R;var F=t._getFirstRenderedRowIndex();switch(s.getOffsetType()){case f.OffsetType.Pixel:case f.OffsetType.Percentage:var o=s.getIndex();var u=0;var C=s.getOffsetType();if(j.isIndexInBuffer(t,o)){var w=0;b=Math.max(0,Math.min(r.length-1,o-F));for(R=0;R<b;R++){w+=r[R];if(w>i){N=F+R;a=i-u;C=f.OffsetType.Pixel;b=R;break;}else{u=w;}}}if(C===f.OffsetType.Pixel){a=Math.min(a,r[b]);}else{a=r[b]*a;}u+=a;if(u>i&&T.isVariableRowHeightEnabled(t)){a-=u-i;}break;case f.OffsetType.PercentageOfViewport:var x=i*s.getOffset();for(R=0;R<r.length;R++){var y=x-r[R];if(y>=0){x=y;b++;}else{N=F+b;a=Math.round(x);break;}}break;default:}s.setPosition(N,a);return Promise.resolve();},scrollViewport:function(t,p){if(p&&p.isCancelled()){return Promise.resolve();}if(!T.isVariableRowHeightEnabled(t)){e("VerticalScrollingHelper.scrollViewport: Aborted - Variable row height not enabled",t);return Promise.resolve();}var s=c(t).oVerticalScrollPosition;var v=t.getDomRef("tableCCnt");var i=j.getScrollRangeOfViewport(t);var r=t._aRowHeights;var a=0;if(i===0){e("VerticalScrollingHelper.scrollViewport: Aborted - No overflow in viewport",t);v.scrollTop=a;v._scrollTop=v.scrollTop;return Promise.resolve();}e("VerticalScrollingHelper.scrollViewport",t);switch(s.getOffsetType()){case f.OffsetType.Pixel:var b=s.getIndex();var o=Math.max(0,Math.min(r.length-1,b-t._getFirstRenderedRowIndex()));for(var R=0;R<o;R++){a+=r[R];}a+=s.getOffset();break;default:e("VerticalScrollingHelper.scrollViewport: The viewport can only be scrolled if the offset is in pixel",t);return Promise.resolve();}e("VerticalScrollingHelper.scrollViewport: Scroll from "+v.scrollTop+" to "+a,t);v.scrollTop=a;v._scrollTop=v.scrollTop;return Promise.resolve();},scrollScrollbar:function(t,p){if(p&&p.isCancelled()){return Promise.resolve();}var s=c(t).oVerticalScrollPosition;var i=s.getIndex();var b=j.getScrollRangeBuffer(t);var a=j.getScrollRange(t);var o=a-b;var r=0;var u=0;var v=j.getScrollRangeOfViewport(t);var R=t._aRowHeights;var w;e("VerticalScrollingHelper.scrollScrollbar",t);if(a===0||R.length===0){e("VerticalScrollingHelper.scrollScrollbar: No scrollable content",t);return Promise.resolve();}switch(s.getOffsetType()){case f.OffsetType.Pixel:if(j.isIndexInBuffer(t,i)){var x=0;w=Math.max(0,Math.min(R.length-1,i-t._getMaxFirstRenderedRowIndex()));for(var y=0;y<w;y++){x+=R[y];}x+=Math.min(R[w],s.getOffset());var z=Math.min(x/v,1);var A=b*z;r=o+A;}else{var B=j.getScrollRangeRowFraction(t);r=i*B;w=Math.max(0,Math.min(R.length-1,i-t._getFirstRenderedRowIndex()));r+=B*Math.min(s.getOffset()/R[w],1);}break;default:e("VerticalScrollingHelper.scrollViewport: The scrollbar can only be scrolled if the offset is in pixel",t);return Promise.resolve();}if(r>0&&r<0.5){u=1;}else if(r>=a-0.5&&r<a){u=a-1;}else{u=Math.round(r);}var C=t._getScrollExtension().getVerticalScrollbar();if(C){e("VerticalScrollingHelper.scrollScrollbar: Scroll from "+C.scrollTop+" to "+u,t);C.scrollTop=u;C._scrollTop=C.scrollTop;}else{e("VerticalScrollingHelper.scrollScrollbar: Not scrolled - No scrollbar available",t);}return Promise.resolve();},getScrollRange:function(t){var s=t._getScrollExtension();var v=s.getVerticalScrollHeight()-s.getVerticalScrollbarHeight();return Math.max(0,v);},getScrollRangeBuffer:function(t){if(!T.isVariableRowHeightEnabled(t)){return 0;}return V*t._getBaseRowHeight();},getScrollPositionOfScrollbar:function(t){var s=t._getScrollExtension();if(s.isVerticalScrollbarVisible()){return s.getVerticalScrollbar().scrollTop;}else{return 0;}},getScrollPositionOfViewport:function(t){var v=t?t.getDomRef("tableCCnt"):null;return v?v.scrollTop:0;},getScrollRangeRowFraction:function(t){var s=t._getScrollExtension();var v=t._getTotalRowCount()-t._getRowCounts()._fullsize;var i;if(T.isVariableRowHeightEnabled(t)){i=j.getScrollRange(t)-j.getScrollRangeBuffer(t);var b=s.getVerticalScrollHeight()===M;if(!b){i+=t._getBaseRowHeight();}}else{i=j.getScrollRange(t);}return i/Math.max(1,v);},isScrollPositionOfScrollbarInBuffer:function(t){if(!T.isVariableRowHeightEnabled(t)){return false;}var s=j.getScrollRange(t);var a=j.getScrollPositionOfScrollbar(t);var i=j.getScrollRangeBuffer(t);return s-a<=i;},isIndexInBuffer:function(t,i){if(!T.isVariableRowHeightEnabled(t)){return false;}return i>=t._getMaxFirstRenderedRowIndex();},getScrollRangeOfViewport:function(t){if(!t||!t._aRowHeights){return 0;}var r=t._aRowHeights;var v=t._getBaseRowHeight()*t._getRowCounts()._fullsize;if(t._getRowCounts()._fullsize>=t._getTotalRowCount()){r=r.slice(0,t._getTotalRowCount());}var i=r.reduce(function(a,b){return a+b;},0)-v;if(i>0){i=Math.ceil(i);}return Math.max(0,i);},addOnRowsUpdatedPreprocessor:function(t,p){c(t).aOnRowsUpdatedPreprocessors.push(p);},removeOnRowsUpdatedPreprocessor:function(t,p){if(!p){c(t).aOnRowsUpdatedPreprocessors=[];return false;}var i=c(t).aOnRowsUpdatedPreprocessors.indexOf(p);if(i>-1){c(t).aOnRowsUpdatedPreprocessors.splice(i,1);return true;}return false;},onRowsUpdated:function(o){e("VerticalScrollingHelper.onRowsUpdated: Reason "+o.getParameters().reason,this);j.updateScrollbarVisibility(this);if(c(this).aOnRowsUpdatedPreprocessors.length>0){e("VerticalScrollingHelper.onRowsUpdated (preprocessors)",this);var b=c(this).aOnRowsUpdatedPreprocessors.reduce(function(b,p){var _=p.call(this,o);return!(b&&!_);},true);j.removeOnRowsUpdatedPreprocessor(this);if(!b){e("VerticalScrollingHelper.onRowsUpdated (preprocessors): Default prevented",this);return;}}if(!T.isVariableRowHeightEnabled(this)){e("VerticalScrollingHelper.onRowsUpdated: Aborted - Variable row heights not enabled",this);return;}var t=this;g.start(this,g.OnRowsUpdated,function(r,a,p){T.Hook.call(t,H.Signal,"StartTableUpdate");p.onPromiseCreated=function(i){i.finally(function(){T.Hook.call(t,H.Signal,"EndTableUpdate");});};j.fixScrollPosition(t,p).then(function(){return Promise.all([j.adjustFirstVisibleRowToScrollPosition(t,true,p),j.scrollViewport(t,p),j.scrollScrollbar(t,p)]);}).then(r);});},restoreScrollPosition:function(t,b){e("VerticalScrollingHelper.restoreScrollPosition",t);g.start(t,g.RestoreScrollPosition,function(r,a,p){T.Hook.call(t,H.Signal,"StartTableUpdate");p.onPromiseCreated=function(i){i.then(function(){if(!p.isCancelled()){j._restoreScrollPosition(t);}}).finally(function(){T.Hook.call(t,H.Signal,"EndTableUpdate");});};if(b!==true){r();return;}var o=function(){e("VerticalScrollingHelper.restoreScrollPosition (async: rows updated)",t);r();return false;};j.addOnRowsUpdatedPreprocessor(t,o);p.addCancelListener(function(){var R=j.removeOnRowsUpdatedPreprocessor(t,o);if(R){r();}});});},_restoreScrollPosition:function(t){var s=c(t).oVerticalScrollPosition;var b=s.isInitial();e("VerticalScrollingHelper.restoreScrollPosition: "+"Scroll position is"+(b?" ":" not ")+"initial",t);if(b){j.performUpdateFromFirstVisibleRow(t);}else{j.performUpdateFromScrollPosition(t);}},onTotalRowCountChanged:function(){j.adjustToTotalRowCount(this);},adjustToTotalRowCount:function(t){var s=t._getScrollExtension();e("VerticalScrollingHelper.adjustToTotalRowCount",t);j.updateScrollbarVisibility(t);h.updateScrollbar(t);s.updateVerticalScrollHeight();g.start(t,g.AdjustToTotalRowCount,function(r,a,p){T.Hook.call(t,H.Signal,"StartTableUpdate");p.onPromiseCreated=function(b){b.then(function(){if(p.isCancelled()||c(t).oVerticalScrollPosition.isInitial()){return;}j.performUpdateFromScrollPosition(t);}).finally(function(){T.Hook.call(t,H.Signal,"EndTableUpdate");});};if(c(t).oVerticalScrollPosition.isInitial()){r();}else{var o=function(){e("VerticalScrollingHelper.adjustToTotalRowCount (async: rows updated)",t);r();return false;};j.addOnRowsUpdatedPreprocessor(t,o);p.addCancelListener(function(){var R=j.removeOnRowsUpdatedPreprocessor(t,o);if(R){r();}});}});},onUpdateTableSizes:function(r){j.updateScrollbarVisibility(this);h.updateScrollbar(this);},updateScrollbarVisibility:function(t){var s=t._getScrollExtension();var v=s.getVerticalScrollbar();var o=t?t.getDomRef():null;if(!v||!o){return;}var b=s.isVerticalScrollbarRequired();o.classList.toggle("sapUiTableVScr",b&&!s.isVerticalScrollbarExternal());v.parentElement.classList.toggle("sapUiTableHidden",!b);},addEventListeners:function(t){var s=t._getScrollExtension();var a=j.getScrollAreas(t);var v=t.getDomRef("tableCCnt");if(!s._onVerticalScrollEventHandler){s._onVerticalScrollEventHandler=j.onScrollbarScroll.bind(t);}for(var i=0;i<a.length;i++){a[i].addEventListener("scroll",s._onVerticalScrollEventHandler);}if(v){if(!s._onViewportScrollEventHandler){s._onViewportScrollEventHandler=j.onViewportScroll.bind(t);}v.addEventListener("scroll",s._onViewportScrollEventHandler);}t.attachRowsUpdated(j.onRowsUpdated);},removeEventListeners:function(t){var s=t._getScrollExtension();var a=j.getScrollAreas(t);var v=t.getDomRef("tableCCnt");if(s._onVerticalScrollEventHandler){for(var i=0;i<a.length;i++){a[i].removeEventListener("scroll",s._onVerticalScrollEventHandler);}delete s._onVerticalScrollEventHandler;}if(v&&s._onViewportScrollEventHandler){v.removeEventListener("scroll",s._onViewportScrollEventHandler);delete s._onViewportScrollEventHandler;}t.detachRowsUpdated(j.onRowsUpdated);},getScrollAreas:function(t){var s=[t._getScrollExtension().getVerticalScrollbar()];return s.filter(function(o){return o!=null;});}};var k={onMouseWheelScrolling:function(o,a){var s=this._getScrollExtension();var v=Math.abs(a.deltaY)>Math.abs(a.deltaX);var i=v?a.deltaY:a.deltaX;var b=v&&a.shiftKey||!v;var p=i>0;var r=false;if(i===0){return;}if(b&&(o.scrollDirection===d.HORIZONAL||o.scrollDirection===d.BOTH)){var t=s.getHorizontalScrollbar();if(a.deltaMode!==window.WheelEvent.DOM_DELTA_PIXEL){var u=T.Column.getMinColumnWidth();i=p?u:-u;}if(p){r=t.scrollLeft===t.scrollWidth-t.offsetWidth;}else{r=t.scrollLeft===0;}if(s.isHorizontalScrollbarVisible()&&!r){a.preventDefault();a.stopPropagation();this._getKeyboardExtension().setActionMode(false);t.scrollLeft=t.scrollLeft+i;}}else if(!b&&(o.scrollDirection===d.VERTICAL||o.scrollDirection===d.BOTH)){var w=s.getVerticalScrollbar();var x=c(this).oVerticalScrollPosition;if(p){r=w.scrollTop===w.scrollHeight-w.offsetHeight;}else{r=w.scrollTop===0;}if(!s.isVerticalScrollbarVisible()||r){return;}a.preventDefault();a.stopPropagation();if(a.deltaMode===window.WheelEvent.DOM_DELTA_PIXEL){var y=i/this._getDefaultRowHeight();if(y>=0){x.scrollRows(Math.max(1,Math.floor(y)));}else{x.scrollRows(Math.min(-1,Math.ceil(y)));}}else if(a.deltaMode===window.WheelEvent.DOM_DELTA_LINE){x.scrollRows(i);}else if(a.deltaMode===window.WheelEvent.DOM_DELTA_PAGE){x.scrollRows(i*this._getRowCounts()._scrollSize);}this._getKeyboardExtension().setActionMode(false);j.performUpdateFromScrollPosition(this);}},onTouchStart:function(o,a){if(a.type==="touchstart"||a.pointerType==="touch"){var s=this._getScrollExtension();var b=s.getHorizontalScrollbar();var v=s.getVerticalScrollbar();var t=a.touches?a.touches[0]:a;c(this).mTouchSessionData={initialPageX:t.pageX,initialPageY:t.pageY,initialScrollTop:v?v.scrollTop:0,initialScrollLeft:b?b.scrollLeft:0,initialScrolledToEnd:null,touchMoveDirection:null};}},onTouchMoveScrolling:function(o,a){if(a.type!=="touchmove"&&a.pointerType!=="touch"){return;}var s=this._getScrollExtension();var t=c(this).mTouchSessionData;if(!t){return;}var b=a.touches?a.touches[0]:a;var i=(b.pageX-t.initialPageX);var p=(b.pageY-t.initialPageY);var r=false;if(!t.touchMoveDirection){if(i===0&&p===0){return;}t.touchMoveDirection=Math.abs(i)>Math.abs(p)?"horizontal":"vertical";}switch(t.touchMoveDirection){case"horizontal":var u=s.getHorizontalScrollbar();if(u&&(o.scrollDirection===d.HORIZONAL||o.scrollDirection===d.BOTH)){this._getKeyboardExtension().setActionMode(false);if(t.initialScrolledToEnd==null){if(i<0){t.initialScrolledToEnd=u.scrollLeft===u.scrollWidth-u.offsetWidth;}else{t.initialScrolledToEnd=u.scrollLeft===0;}}if(!t.initialScrolledToEnd){u.scrollLeft=t.initialScrollLeft-i;r=true;}}break;case"vertical":var v=s.getVerticalScrollbar();if(v&&(o.scrollDirection===d.VERTICAL||o.scrollDirection===d.BOTH)){this._getKeyboardExtension().setActionMode(false);if(t.initialScrolledToEnd==null){if(p<0){t.initialScrolledToEnd=v.scrollTop===v.scrollHeight-v.offsetHeight;}else{t.initialScrolledToEnd=v.scrollTop===0;}}if(!t.initialScrolledToEnd){v.scrollTop=t.initialScrollTop-p;r=true;}}break;default:}if(r){a.preventDefault();}},addEventListeners:function(t){var s=t._getScrollExtension();var a=k.getEventListenerTargets(t);s._mMouseWheelEventListener=this.addMouseWheelEventListener(a,t,{scrollDirection:d.BOTH});s._mTouchEventListener=this.addTouchEventListener(a,t,{scrollDirection:d.BOTH});},addMouseWheelEventListener:function(a,t,o){var O=k.onMouseWheelScrolling.bind(t,o);for(var i=0;i<a.length;i++){a[i].addEventListener("wheel",O);}return{wheel:O};},addTouchEventListener:function(a,t,o){var O=k.onTouchStart.bind(t,o);var b=k.onTouchMoveScrolling.bind(t,o);var p={};for(var i=0;i<a.length;i++){if(D.support.pointer&&D.system.desktop){a[i].addEventListener("pointerdown",O);a[i].addEventListener("pointermove",b,D.browser.chrome?{passive:true}:false);}else if(D.support.touch){a[i].addEventListener("touchstart",O);a[i].addEventListener("touchmove",b);}}if(D.support.pointer&&D.system.desktop){p={pointerdown:O,pointermove:b};}else if(D.support.touch){p={touchstart:O,touchmove:b};}return p;},removeEventListeners:function(t){var s=t._getScrollExtension();var a=k.getEventListenerTargets(t);function r(o,b){for(var p in b){var u=b[p];if(u){o.removeEventListener(p,u);}}}for(var i=0;i<a.length;i++){r(a[i],s._mMouseWheelEventListener);r(a[i],s._mTouchEventListener);}delete s._mMouseWheelEventListener;delete s._mTouchEventListener;},getEventListenerTargets:function(t){var a=[t.getDomRef("tableCCnt")];return a.filter(function(o){return o!=null;});}};var m={onBeforeRendering:function(o){this._getScrollExtension()._clearCache();},onAfterRendering:function(o){var s=this._getScrollExtension();var r=o!=null&&o.isMarked("renderRows");if(r){s.updateVerticalScrollbarHeight();s.updateVerticalScrollHeight();}else{j.restoreScrollPosition(this,this.getBinding()!=null);}h.restoreScrollPosition(this);},onfocusin:function(o){var r;var C=T.getCellInfo(o.target);var a=this._getScrollExtension().getHorizontalScrollbar();if(C.isOfType(T.CELLTYPE.DATACELL)){r=this.getDomRef("sapUiTableCtrlScr");}else if(C.isOfType(T.CELLTYPE.COLUMNHEADER)){r=this.getDomRef("sapUiTableColHdrScr");}if(r&&a&&C.columnIndex>=this.getComputedFixedColumnCount()){var $=q(a);var b=C.cell[0];var i=this._bRtlMode?$.scrollLeftRTL():a.scrollLeft;var R=r.clientWidth;var p=b.offsetLeft;var s=p+b.offsetWidth;var O=p-i;var t=s-R-i;var N;if(O<0&&t<0){N=i+O;}else if(t>0&&O>0){N=i+t;}if(N!=null){if(this._bRtlMode){$.scrollLeftRTL(N);}else{a.scrollLeft=N;}}}var u=T.getParentCell(this,o.target);if(u){var v=this;var w=function(){var x=u.find(".sapUiTableCellInner");if(x.length>0){if(v._bRtlMode){x.scrollLeftRTL(x[0].scrollWidth-x[0].clientWidth);}else{x[0].scrollLeft=0;}x[0].scrollTop=0;}T.Hook.call(v,H.Signal,"EndFocusHandling");T.Hook.call(v,H.Signal,"EndTableUpdate");};T.Hook.call(this,H.Signal,"StartTableUpdate");T.Hook.call(this,H.Signal,"StartFocusHandling");Promise.resolve().then(function(){if(D.browser.safari){window.setTimeout(w,0);}else{w();}});}}};var n=E.extend("sap.ui.table.extensions.Scrolling",{_init:function(t,s,a){var _=c(t);_.oHorizontalScrollbar=null;_.iHorizontalScrollPosition=null;_.oVerticalScrollbar=null;_.oVerticalScrollPosition=new f(t);_.pVerticalScrollUpdateProcess=null;_.oExternalVerticalScrollbar=null;_.bIsVerticalScrollbarExternal=false;_.mTimeouts={};_.mAnimationFrames={};_.mTouchSessionData=null;_.aOnRowsUpdatedPreprocessors=[];T.addDelegate(t,m,t);return"ScrollExtension";},_attachEvents:function(){var t=this.getTable();h.addEventListeners(t);j.addEventListeners(t);k.addEventListeners(t);T.Hook.register(t,T.Hook.Keys.Table.TotalRowCountChanged,j.onTotalRowCountChanged,t);T.Hook.register(t,T.Hook.Keys.Table.UpdateSizes,j.onUpdateTableSizes,t);},_detachEvents:function(){var t=this.getTable();h.removeEventListeners(t);j.removeEventListeners(t);k.removeEventListeners(t);T.Hook.deregister(t,T.Hook.Keys.Table.TotalRowCountChanged,j.onTotalRowCountChanged,t);T.Hook.deregister(t,T.Hook.Keys.Table.UpdateSizes,j.onUpdateTableSizes,t);},destroy:function(){var t=this.getTable();this._clearCache();if(t){T.removeDelegate(t,m);if(c(t).pVerticalScrollUpdateProcess){c(t).pVerticalScrollUpdateProcess.cancel();c(t).pVerticalScrollUpdateProcess=null;}}E.prototype.destroy.apply(this,arguments);}});n.prototype.scrollVertically=function(b,p){var t=this.getTable();if(!t){return;}var r=t._getRowCounts();var F=t._getFirstRenderedRowIndex();var s=p===true?r.scrollable:1;if(b===true){c(t).oVerticalScrollPosition.setPosition(F+s,1,f.OffsetType.PercentageOfViewport);}else{c(t).oVerticalScrollPosition.setPosition(Math.max(0,F-s));}j.performUpdateFromScrollPosition(t);};n.prototype.scrollVerticallyMax=function(b){var t=this.getTable();if(!t){return;}if(b===true){c(t).oVerticalScrollPosition.setPosition(t._getMaxFirstRenderedRowIndex(),1,f.OffsetType.PercentageOfViewport);}else{c(t).oVerticalScrollPosition.setPosition(0);}j.performUpdateFromScrollPosition(t);};n.prototype.getHorizontalScrollbar=function(){var t=this.getTable();if(!t){return null;}if(!t._bInvalid&&!c(t).oHorizontalScrollbar){c(t).oHorizontalScrollbar=t.getDomRef(S.HorizontalScrollBar);}return c(t).oHorizontalScrollbar;};n.prototype.getVerticalScrollbar=function(){var t=this.getTable();var i=this.isVerticalScrollbarExternal();if(!t){return null;}if(!t._bInvalid&&!c(t).oVerticalScrollbar){c(t).oVerticalScrollbar=t.getDomRef(S.VerticalScrollBar);if(!c(t).oVerticalScrollbar&&i){c(t).oVerticalScrollbar=c(t).oExternalVerticalScrollbar;}}var s=c(t).oVerticalScrollbar;if(s&&!i&&!s.isConnected){return null;}return s;};n.prototype.isHorizontalScrollbarVisible=function(){var o=this.getHorizontalScrollbar();return o!=null&&!o.classList.contains("sapUiTableHidden");};n.prototype.isVerticalScrollbarVisible=function(){var v=this.getVerticalScrollbar();return v!=null&&!v.parentElement.classList.contains("sapUiTableHidden");};n.prototype.isVerticalScrollbarExternal=function(){var t=this.getTable();return t?c(t).bIsVerticalScrollbarExternal:false;};n.prototype.markVerticalScrollbarAsExternal=function(s){var t=this.getTable();if(t&&s){c(t).bIsVerticalScrollbarExternal=true;c(t).oExternalVerticalScrollbar=s;}};n.prototype.updateVerticalScrollbarHeight=function(){var t=this.getTable();var v=this.getVerticalScrollbar();if(!t||!v){return;}v.style.maxHeight=this.getVerticalScrollbarHeight()+"px";v._scrollTop=v.scrollTop;};n.prototype.getVerticalScrollbarHeight=function(){var t=this.getTable();if(!t){return 0;}return t._getRowCounts()._scrollSize*t._getBaseRowHeight();};n.prototype.updateVerticalScrollPosition=function(b){var t=this.getTable();if(!t){return;}b=b===true;if(b||t.getBinding()){j.performUpdateFromFirstVisibleRow(t,b);}else{j.adjustScrollPositionToFirstVisibleRow(t);}};n.prototype.restoreVerticalScrollPosition=function(){j.restoreScrollPosition(this.getTable());};n.prototype.updateVerticalScrollHeight=function(){var v=this.getVerticalScrollbar();var o=v?v.firstChild:null;if(!o){return;}o.style.height=this.getVerticalScrollHeight()+"px";v._scrollTop=v.scrollTop;};n.prototype.getVerticalScrollHeight=function(b){var t=this.getTable();if(!t){return 0;}var i=t._getTotalRowCount();var r=t._getRowCounts();var R=Math.max(i,r.count);var B=t._getBaseRowHeight();var s;if(T.isVariableRowHeightEnabled(t)){s=B*(R-1)+j.getScrollRangeBuffer(t);}else{s=B*R;}if(b===true){return s;}else{return Math.min(M,s);}};n.prototype.isVerticalScrollbarRequired=function(){var t=this.getTable();if(!t){return false;}return T.isVariableRowHeightEnabled(t)&&j.getScrollRangeOfViewport(t)>0||t._getTotalRowCount()>t._getRowCounts()._fullsize;};n.prototype.registerForMouseWheel=function(a,o){var t=this.getTable();if(E.isEnrichedWith(t,"sap.ui.table.extensions.Synchronization")){return k.addMouseWheelEventListener(a,t,o);}else{L.error("This method can only be used with synchronization enabled.",t,"sap.ui.table.extensions.Scrolling#registerForMouseWheel");return null;}};n.prototype.registerForTouch=function(a,o){var t=this.getTable();if(E.isEnrichedWith(t,"sap.ui.table.extensions.Synchronization")){return k.addTouchEventListener(a,t,o);}else{L.error("This method can only be used with synchronization enabled.",t,"sap.ui.table.extensions.Scrolling#registerForTouch");return null;}};n.prototype._clearCache=function(){var t=this.getTable();if(!t){return;}c(t).oVerticalScrollbar=null;c(t).oHorizontalScrollbar=null;};n.ScrollDirection=d;return n;});