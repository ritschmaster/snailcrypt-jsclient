/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/wordStartsWithValue","sap/base/security/encodeXML"],function(w,e){"use strict";var _=function(i,I,W){var d,s,a,n,c,t=i?i.textContent:"",f="";if(!w(t,I)){return e(t);}I=I.toLowerCase();a=I.length;while(w(t,I)){d=t.toLowerCase();s=d.indexOf(I);s=(s>0)?d.indexOf(' '+I)+1:s;c=t.substring(0,s);t=t.substring(s);f+=e(c);c=t.substring(0,a);t=t.substring(a);f+='<span class="sapMInputHighlight">'+e(c)+'</span>';n=t.indexOf(" ");n=n===-1?t.length:n;c=t.substring(0,n);t=t.substring(n);f+=e(c);if(!W){break;}}if(t){f+=e(t);}return f;};var h=function(I,s,W,l){var i,a;l=l||200;if(!s||(!I&&!I.length)||I.length>l){return;}a=[];for(i=0;i<I.length;i++){a.push(_(I[i],s,W));}for(i=0;i<I.length;i++){I[i].innerHTML=a[i];}};return h;});
