/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/base/ManagedObject',"sap/base/security/encodeXML"],function(M,e){'use strict';var O=M.extend("sap.ui.core.support.controls.ObjectViewer",{metadata:{library:"sap.ui.core"},constructor:function(){M.apply(this,arguments);this._oRenderParent=null;this._oRootObject=null;}});var r={rowstart:"<div class=\"sapUiSupportObjectViewerMarginLeft {cssclass}\" collapsed=\"{collapsed}\" visible=\"{visible}\" idx=\"{idx}\" key=\"{key}\" sectionkey=\"{sectionkey}\" level=\"{level}\" raise=\"_select\" hover=\"_hover\" args=\"{sectionkey},{key}\">",namestart:"<span class=\"key\" title=\"{key}\">",keyinfo:"<span class=\"keyinfo {color}\" selected=\"{selected}\" sectionkey=\"{sectionkey}\" key=\"{key}\" raise=\"_keyInfoPress\" args=\"{sectionkey},{key},{infoidx}\"  title=\"{tooltip}\"></span>",nameend:"{key}</span>",separator:"<span class=\"colon\">:</span>",valuestart:"<span class=\"value\" title=\"{value}\"><input {readonly} class=\"valueInput\"value=\"{value}\" raise=\"_changeValue\" args=\"{sectionkey},{key}\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">",valueend:"{value}</span>",rowend:"</div>",headerrow:"<div sectionkey=\"{sectionkey}\" collapsed=\"{collapsed}\" class=\"header\" raise=\"_toggleSection\" args=\"{sectionkey}\"><span class=\"expand\"></span>{header} ({count})</span></div>"};var I=-1;function _(o,a){I++;for(var n in o){var c=a.initialExpandedSections===null||a.initialExpandedSections.indexOf(n)===-1;a.addWithParam(r.headerrow,{idx:I,sectionkey:n,header:n,level:0,collapsed:c,count:Object.keys(o[n]).length});var C=o[n];I++;for(var m in C){a.addWithParam(r.rowstart,{idx:I,sectionkey:n,key:m,level:C._level||0,cssclass:"",visible:!c,header:n,collapsed:c});a.addWithParam(r.namestart,{key:m});var b=a.fnObjectInfos(o,n,C,m);if(b){for(var i=0;i<b.length;i++){var d=b[i];a.addWithParam(r.keyinfo,{infoidx:i+"",sectionkey:n,key:m,selected:d.selected||false,color:d.color||"orange",tooltip:d.tooltip||""});}}a.addWithParam(r.nameend,{key:m});a.addWithParam(r.separator,{});a.addWithParam(r.valuestart,{value:e(String(C[m].value)),readonly:C[m].__change?"":"readonly",sectionkey:n,key:m});a.addWithParam(r.valueend,{value:e(String(C[m].value))});a.addWithParam(r.rowend,{});if("value2"in C[m]){a.addWithParam(r.rowstart,{idx:I,sectionkey:n,key:m,level:C._level||0,cssclass:"hiddenkey",visible:!c,header:n,collapsed:c});a.addWithParam(r.namestart,{key:m});var b=a.fnObjectInfos(o,n,C,m);if(b){for(var i=0;i<b.length;i++){var d=b[i];a.addWithParam(r.keyinfo,{infoidx:i+"",sectionkey:n,key:m,selected:d.selected||false,color:d.color||"orange",tooltip:e(String(d.tooltip)||"")});}}a.addWithParam(r.nameend,{key:m});a.addWithParam(r.separator,{});a.addWithParam(r.valuestart,{value:e(String(C[m].value2)),readonly:"readonly",sectionkey:n,key:m});a.addWithParam(r.valueend,{value:e(String(C[m].value2))});a.addWithParam(r.rowend,{});}}}}function R(){this._aBuffer=[];var t=this;this.add=function(){t._aBuffer.push.apply(t._aBuffer,arguments);};this.addWithParam=function(s,o){for(var n in o){var a=new RegExp("\{"+n+"\}","g");s=s.replace(a,o[n]);}t.add(s);};this.toString=function(){return t._aBuffer.join("");};}O.prototype.fnSelect=function(){};O.prototype.fnHover=function(){};O.prototype.initialExpandedSections=null;O.prototype.expandedSections=[];O.prototype.setRootObject=function(o){this._oRootObject=o;};O.prototype.attachSelect=function(f){this.fnSelect=f;};O.prototype.attachHover=function(f){this.fnHover=f;};O.prototype.attachObjectInfos=function(f){this.fnObjectInfos=f;};O.prototype.attachInfoPress=function(f){this.fnInfoPress=f;};O.prototype.setInfoSelected=function(s,k,i,S){var o=this._oRenderParent.firstChild.querySelector("[args='"+s+","+k+","+i+"']");if(o){o.setAttribute("selected",S+"");}};O.prototype._keyInfoPress=function(s,k,i){i=parseInt(i);this.fnInfoPress(s,k,i);return true;};O.prototype._changeValue=function(s,k,v,d){if(v===undefined){return;}var o=this._oRootObject[s][k].__change(v);if(o&&o.error){d.setAttribute("error","true");d.setAttribute("title",o.error);}else{d.removeAttribute("error");if("value"in o){if(v!==""+o.value){d.setAttribute("title",v+"->"+o.value);}else{d.setAttribute("title",o.value);}d.value=o.value;}}};O.prototype._toggleSection=function(s){var S=this._oRenderParent.firstChild.querySelectorAll("[sectionkey='"+s+"']");if(S[0].getAttribute("collapsed")==="true"){for(var i=1;i<S.length;i++){S[i].setAttribute("visible","true");}S[0].setAttribute("collapsed","false");if(this.expandedSections.indexOf(s)===-1){this.expandedSections.push(s);}}else{for(var i=1;i<S.length;i++){S[i].setAttribute("visible","false");}S[0].setAttribute("collapsed","true");if(this.expandedSections.indexOf(s)>-1){this.expandedSections.splice(this.expandedSections.indexOf(s),1);}}};O.prototype._select=function(s,k){this.fnSelect(this._oRootObject[s][k],s,k);};O.prototype._hover=function(s,k){this.fnHover(this._oRootObject[s][k],s,k);};O.prototype.update=function(d){if(!d&&!this._oRenderParent){return;}if(this._oRenderParent&&d){this._oRenderParent.innerHTML="";}this._oRenderParent=d||this._oRenderParent;if(this._oRootObject){var o=new R();o.initialExpandedSections=this.initialExpandedSections;o.fnObjectInfos=this.fnObjectInfos||function(){};I=-1;o.add("<div class=\"objectviewer\" id=\""+this.getId()+"\">");if(this._oRootObject){_(this._oRootObject,o);}o.add("</div>");this._oRenderParent.innerHTML=o.toString();var t=this;this._oRenderParent.firstChild.addEventListener("click",function(E){if(E.target.tagName==="INPUT"){return;}var d=E.target,b=false,a=[];while(!b){if(d.getAttribute("raise")){if(d.getAttribute("args")){var A=d.getAttribute("args").split(",");A=A.concat(a);b=t[d.getAttribute("raise")].apply(t,A);}else{var A=[d];A=A.concat(a);b=t[d.getAttribute("raise")].apply(t,A);}}else if(d.getAttribute("reason")){a.push(d.getAttribute("reason"));}d=d.parentNode;if(d===t._oRenderParent){break;}}});this._oRenderParent.firstChild.addEventListener("mouseover",function(E){var d=E.target,b=false,a=[];while(!b){if(d.getAttribute("hover")){if(d.getAttribute("args")){var A=d.getAttribute("args").split(",");A=A.concat(a);b=t[d.getAttribute("hover")].apply(t,A);}else{var A=[d];A=A.concat(a);b=t[d.getAttribute("hover")].apply(t,A);}}else if(d.getAttribute("reason")){a.push(d.getAttribute("reason"));}d=d.parentNode;if(d===t._oRenderParent){break;}}});this._oRenderParent.firstChild.addEventListener("change",function(E){var d=E.target,a=[],v=[d.value,d];if(d.getAttribute("raise")){if(d.getAttribute("args")){var A=d.getAttribute("args").split(",");A=A.concat(a,v);t[d.getAttribute("raise")].apply(t,A);}}});this._oRenderParent.firstChild.addEventListener("mouseout",function(E){var d=E.target,b=false,a=[];while(!b){if(d.getAttribute("hover")){if(d.getAttribute("args")){var A=d.getAttribute("args").split(",");A=A.concat(a);b=t[d.getAttribute("hover")].apply(t,A);}else{var A=[d];A=A.concat(a);b=t[d.getAttribute("hover")].apply(t,A);}}else if(d.getAttribute("reason")){a.push(d.getAttribute("reason"));}d=d.parentNode;if(d===t._oRenderParent){break;}}});}};return O;});