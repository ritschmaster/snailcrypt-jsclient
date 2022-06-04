/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/initial/_internal/connectors/Utils","sap/base/util/restricted/_pick"],function(I,_){"use strict";return{xsrfToken:undefined,settings:undefined,loadFlexData:function(p){var P=_(p,["version"]);if(this.isLanguageInfoRequired){I.addLanguageInfo(P);}var d=I.getUrl(this.ROUTES.DATA,p,P);return I.sendRequest(d,"GET",{xsrfToken:this.xsrfToken}).then(function(r){var R=r.response;if(r.xsrfToken){this.xsrfToken=r.xsrfToken;}if(r.etag){R.cacheKey=r.etag;}R.changes=R.changes.concat(R.compVariants||[]);if(R.settings){this.settings=R.settings;}return R;}.bind(this));}};});
