/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./TileRenderer','sap/ui/core/Renderer'],function(T,R){"use strict";var C=R.extend(T);C.apiVersion=2;C.render=function(r,c){var t,v;r.openStart("div",c).attr("tabindex","0");r.class("sapMCustomTile");if(c._invisible){r.style("visibility","hidden");}if(c.getParent()&&c.getParent().isA("sap.m.TileContainer")){t=c.getParent();v=t._getVisibleTiles();r.accessibilityState(c,{role:"option",posinset:t._indexOfVisibleTile(c,v)+1,setsize:v.length});}r.openEnd();r.openStart("div",c.getId()+"-remove").class("sapMTCRemove").openEnd().close("div");r.openStart("div").class("sapMCustomTileContent").openEnd();this._renderContent(r,c);r.close("div").close("div");};C._renderContent=function(r,t){r.renderControl(t.getContent());};return C;},true);
