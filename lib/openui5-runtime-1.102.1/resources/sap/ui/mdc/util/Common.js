/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var C={cleanup:function(t,f){f.forEach(function(F){var r=t[F];if(r){if(r.destroy&&!r.bIsDestroyed){r.destroy();}t[F]=null;}});}};return C;});
