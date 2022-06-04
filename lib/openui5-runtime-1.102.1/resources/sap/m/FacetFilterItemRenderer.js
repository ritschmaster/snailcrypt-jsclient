/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ListItemBaseRenderer','sap/ui/core/Renderer'],function(L,R){"use strict";var F=R.extend(L);F.apiVersion=2;F.renderLIContent=function(r,c){r.openStart("div",c);if(c.getParent()&&c.getParent().getWordWrap()){r.class("sapMFFLITitleWrap");}else{r.class("sapMFFLITitle");}r.openEnd();r.text(c.getText());r.close("div");};return F;},true);
