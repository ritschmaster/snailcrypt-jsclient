sap.ui.define(function(){"use strict";const t=new WeakMap;class e{static get tasks(){return t}static enqueue(e,s){if(!t.has(e)){t.set(e,[])}t.get(e).push(s)}static run(s,n){if(!t.has(s)){t.set(s,[])}return n().then(()=>{const n=t.get(s);if(n.length>0){return e.run(s,n.shift())}t.delete(s)})}static push(s,n){const u=t.get(s);if(u){e.enqueue(s,n)}else{e.run(s,n)}}}return e});