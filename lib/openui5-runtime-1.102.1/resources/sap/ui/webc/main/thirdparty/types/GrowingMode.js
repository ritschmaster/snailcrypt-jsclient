sap.ui.define(["sap/ui/webc/common/thirdparty/base/types/DataType"],function(t){"use strict";function e(t){return t&&typeof t==="object"&&"default"in t?t["default"]:t}var n=e(t);const s={Button:"Button",Scroll:"Scroll",None:"None"};class o extends n{static isValid(t){return!!s[t]}}o.generateTypeAccessors(s);return o});