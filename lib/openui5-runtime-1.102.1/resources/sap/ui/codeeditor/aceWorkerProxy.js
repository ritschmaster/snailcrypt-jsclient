/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
window.addEventListener("load",function(){"use strict";var A=new URL("./js/ace/",document.baseURI).href;var w=new Map();window.addEventListener("message",function(e){var m=e.data.message;var a=e.data.workerId;var s=e.origin;if(m.createWorker){var b=c(m.workerUrl,s,a);if(b){w.set(a,b);}}else if(m.terminateWorker){w.get(a).worker.terminate();w.delete(a);}else if(s===w.get(a).creatorOrigin){w.get(a).worker.postMessage(m);}});function c(u,o,a){if(!u||typeof u!=="string"){return null;}var b=new URL(u,document.baseURI).href;if(!b.startsWith(A)){return null;}var d=new Worker(b);d.addEventListener("message",function(e){e.data.workerId=a;window.parent.postMessage(e.data,o);});return{creatorOrigin:o,worker:d};}});
