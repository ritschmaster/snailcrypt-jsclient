/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/URI"],function(U){"use strict";var A={formatBundleName:function(i,b){if(b.startsWith("/")){throw Error("Absolute paths are not supported");}var n=new U(i+"/"+b).normalize().path();return n.replace(/\//g,".").replace("..",".").replace(/.properties$/g,"");}};return A;});
