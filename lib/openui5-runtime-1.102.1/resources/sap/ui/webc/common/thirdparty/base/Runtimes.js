sap.ui.define(["exports","./generated/VersionInfo","./getSharedResource"],function(e,t,n){"use strict";let i;let r="";const s=new Map;const o=n("Runtimes",[]);const u=()=>{if(i===undefined){i=o.length;o.push({...t,alias:r,description:`Runtime ${i} - ver ${t.version}${r?` (${r})`:""}`})}};const c=()=>i;const a=(e,t)=>{const n=`${e},${t}`;if(s.has(n)){return s.get(n)}const i=o[e];const r=o[t];if(!i||!r){throw new Error("Invalid runtime index supplied")}if(i.isNext||r.isNext){return i.buildTime-r.buildTime}const u=i.major-r.major;if(u){return u}const c=i.minor-r.minor;if(c){return c}const a=i.patch-r.patch;if(a){return a}const f=new Intl.Collator(undefined,{numeric:true,sensitivity:"base"});const m=f.compare(i.suffix,r.suffix);s.set(n,m);return m};const f=e=>{r=e};const m=()=>o;e.compareRuntimes=a;e.getAllRuntimes=m;e.getCurrentRuntimeIndex=c;e.registerCurrentRuntime=u;e.setRuntimeAlias=f;Object.defineProperty(e,"__esModule",{value:true})});