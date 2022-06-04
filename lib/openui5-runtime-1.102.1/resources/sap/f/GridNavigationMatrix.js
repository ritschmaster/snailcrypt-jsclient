/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{EMPTY_CELL:false,create:function(g,i,l){var m=Array.from(new Array(l.rows.length),function(){return new Array(l.columns.length).fill(this.EMPTY_CELL);}.bind(this));i.forEach(function(I){var p=this._getPosition(g,I,l);this._addToMatrix(m,p,I);}.bind(this));return m;},_getPosition:function(g,i,l){var G=g.getBoundingClientRect(),I=i.getBoundingClientRect(),o=this._getGridRow(G,I,l),a=this._getGridCol(G,I,l);return{xFrom:o.start,xTo:o.end,yFrom:a.start,yTo:a.end};},_getGridRow:function(g,I,l){var s=-1,e=0,S=0,i,t=I.top-g.top,b=t+I.height;for(i=0;i<l.rows.length;i++){S+=parseFloat(l.rows[i]);if(s===-1&&t<S){s=i;}S+=l.gap;if(b<S){e=i+1;break;}}return{start:s,end:e};},_getGridCol:function(g,I,l){var s=-1,e=0,S=0,i,L=I.left-g.left,r=L+I.width;for(i=0;i<l.columns.length;i++){S+=parseFloat(l.columns[i]);if(s===-1&&L<S){s=i;}S+=l.gap;if(r<=S){e=i+1;break;}}return{start:s,end:e};},_addToMatrix:function(m,p,d){var r,c;for(r=p.xFrom;r<p.xTo;r++){for(c=p.yFrom;c<p.yTo;c++){m[r][c]=d;}}}};});
