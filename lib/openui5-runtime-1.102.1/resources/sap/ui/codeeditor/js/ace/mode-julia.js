ace.define("ace/mode/julia_highlight_rules",[],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text_highlight_rules").TextHighlightRules;var J=function(){this.$rules={start:[{include:'#function_decl'},{include:'#function_call'},{include:'#type_decl'},{include:'#keyword'},{include:'#operator'},{include:'#number'},{include:'#string'},{include:'#comment'}],'#bracket':[{token:'keyword.bracket.julia',regex:'\\(|\\)|\\[|\\]|\\{|\\}|,'}],'#comment':[{token:['punctuation.definition.comment.julia','comment.line.number-sign.julia'],regex:'(#)(?!\\{)(.*$)'}],'#function_call':[{token:['support.function.julia','text'],regex:'([a-zA-Z0-9_]+!?)([\\w\\xff-\\u218e\\u2455-\\uffff]*\\()'}],'#function_decl':[{token:['keyword.other.julia','meta.function.julia','entity.name.function.julia','meta.function.julia','text'],regex:'(function|macro)(\\s*)([a-zA-Z0-9_\\{]+!?)([\\w\\xff-\\u218e\\u2455-\\uffff]*)([(\\\\{])'}],'#keyword':[{token:'keyword.other.julia',regex:'\\b(?:function|type|immutable|macro|quote|abstract|bitstype|typealias|module|baremodule|new)\\b'},{token:'keyword.control.julia',regex:'\\b(?:if|else|elseif|while|for|in|begin|let|end|do|try|catch|finally|return|break|continue)\\b'},{token:'storage.modifier.variable.julia',regex:'\\b(?:global|local|const|export|import|importall|using)\\b'},{token:'variable.macro.julia',regex:'@[\\w\\xff-\\u218e\\u2455-\\uffff]+\\b'}],'#number':[{token:'constant.numeric.julia',regex:'\\b0(?:x|X)[0-9a-fA-F]*|(?:\\b[0-9]+\\.?[0-9]*|\\.[0-9]+)(?:(?:e|E)(?:\\+|-)?[0-9]*)?(?:im)?|\\bInf(?:32)?\\b|\\bNaN(?:32)?\\b|\\btrue\\b|\\bfalse\\b'}],'#operator':[{token:'keyword.operator.update.julia',regex:'=|:=|\\+=|-=|\\*=|/=|//=|\\.//=|\\.\\*=|\\\\=|\\.\\\\=|^=|\\.^=|%=|\\|=|&=|\\$=|<<=|>>='},{token:'keyword.operator.ternary.julia',regex:'\\?|:'},{token:'keyword.operator.boolean.julia',regex:'\\|\\||&&|!'},{token:'keyword.operator.arrow.julia',regex:'->|<-|-->'},{token:'keyword.operator.relation.julia',regex:'>|<|>=|<=|==|!=|\\.>|\\.<|\\.>=|\\.>=|\\.==|\\.!=|\\.=|\\.!|<:|:>'},{token:'keyword.operator.range.julia',regex:':'},{token:'keyword.operator.shift.julia',regex:'<<|>>'},{token:'keyword.operator.bitwise.julia',regex:'\\||\\&|~'},{token:'keyword.operator.arithmetic.julia',regex:'\\+|-|\\*|\\.\\*|/|\\./|//|\\.//|%|\\.%|\\\\|\\.\\\\|\\^|\\.\\^'},{token:'keyword.operator.isa.julia',regex:'::'},{token:'keyword.operator.dots.julia',regex:'\\.(?=[a-zA-Z])|\\.\\.+'},{token:'keyword.operator.interpolation.julia',regex:'\\$#?(?=.)'},{token:['variable','keyword.operator.transposed-variable.julia'],regex:'([\\w\\xff-\\u218e\\u2455-\\uffff]+)((?:\'|\\.\')*\\.?\')'},{token:'text',regex:'\\[|\\('},{token:['text','keyword.operator.transposed-matrix.julia'],regex:"([\\]\\)])((?:'|\\.')*\\.?')"}],'#string':[{token:'punctuation.definition.string.begin.julia',regex:'\'',push:[{token:'punctuation.definition.string.end.julia',regex:'\'',next:'pop'},{include:'#string_escaped_char'},{defaultToken:'string.quoted.single.julia'}]},{token:'punctuation.definition.string.begin.julia',regex:'"',push:[{token:'punctuation.definition.string.end.julia',regex:'"',next:'pop'},{include:'#string_escaped_char'},{defaultToken:'string.quoted.double.julia'}]},{token:'punctuation.definition.string.begin.julia',regex:'\\b[\\w\\xff-\\u218e\\u2455-\\uffff]+"',push:[{token:'punctuation.definition.string.end.julia',regex:'"[\\w\\xff-\\u218e\\u2455-\\uffff]*',next:'pop'},{include:'#string_custom_escaped_char'},{defaultToken:'string.quoted.custom-double.julia'}]},{token:'punctuation.definition.string.begin.julia',regex:'`',push:[{token:'punctuation.definition.string.end.julia',regex:'`',next:'pop'},{include:'#string_escaped_char'},{defaultToken:'string.quoted.backtick.julia'}]}],'#string_custom_escaped_char':[{token:'constant.character.escape.julia',regex:'\\\\"'}],'#string_escaped_char':[{token:'constant.character.escape.julia',regex:'\\\\(?:\\\\|[0-3]\\d{,2}|[4-7]\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8}|.)'}],'#type_decl':[{token:['keyword.control.type.julia','meta.type.julia','entity.name.type.julia','entity.other.inherited-class.julia','punctuation.separator.inheritance.julia','entity.other.inherited-class.julia'],regex:'(type|immutable)(\\s+)([a-zA-Z0-9_]+)(?:(\\s*)(<:)(\\s*[.a-zA-Z0-9_:]+))?'},{token:['other.typed-variable.julia','support.type.julia'],regex:'([a-zA-Z0-9_]+)(::[a-zA-Z0-9_{}]+)'}]};this.normalizeRules();};J.metaData={fileTypes:['jl'],firstLineMatch:'^#!.*\\bjulia\\s*$',foldingStartMarker:'^\\s*(?:if|while|for|begin|function|macro|module|baremodule|type|immutable|let)\\b(?!.*\\bend\\b).*$',foldingStopMarker:'^\\s*(?:end)\\b.*$',name:'Julia',scopeName:'source.julia'};o.inherits(J,T);e.JuliaHighlightRules=J;});ace.define("ace/mode/folding/cstyle",[],function(r,e,a){"use strict";var o=r("../../lib/oop");var R=r("../../range").Range;var B=r("./fold_mode").FoldMode;var F=e.FoldMode=function(c){if(c){this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+c.start));this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+c.end));}};o.inherits(F,B);(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/;this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/;this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/;this._getFoldWidgetBase=this.getFoldWidget;this.getFoldWidget=function(s,f,b){var l=s.getLine(b);if(this.singleLineBlockCommentRe.test(l)){if(!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";}var c=this._getFoldWidgetBase(s,f,b);if(!c&&this.startRegionRe.test(l))return"start";return c;};this.getFoldWidgetRange=function(s,f,b,c){var l=s.getLine(b);if(this.startRegionRe.test(l))return this.getCommentRegionBlock(s,l,b);var m=l.match(this.foldingStartMarker);if(m){var i=m.index;if(m[1])return this.openingBracketBlock(s,m[1],b,i);var d=s.getCommentFoldRange(b,i+m[0].length,1);if(d&&!d.isMultiLine()){if(c){d=this.getSectionRange(s,b);}else if(f!="all")d=null;}return d;}if(f==="markbegin")return;var m=l.match(this.foldingStopMarker);if(m){var i=m.index+m[0].length;if(m[1])return this.closingBracketBlock(s,m[1],b,i);return s.getCommentFoldRange(b,i,-1);}};this.getSectionRange=function(s,b){var l=s.getLine(b);var c=l.search(/\S/);var d=b;var f=l.length;b=b+1;var g=b;var m=s.getLength();while(++b<m){l=s.getLine(b);var i=l.search(/\S/);if(i===-1)continue;if(c>i)break;var h=this.getFoldWidgetRange(s,"all",b);if(h){if(h.start.row<=d){break;}else if(h.isMultiLine()){b=h.end.row;}else if(c==i){break;}}g=b;}return new R(d,f,g,s.getLine(g).length);};this.getCommentRegionBlock=function(s,l,b){var c=l.search(/\s*$/);var d=s.getLength();var f=b;var g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;var h=1;while(++b<d){l=s.getLine(b);var m=g.exec(l);if(!m)continue;if(m[1])h--;else h++;if(!h)break;}var i=b;if(i>f){return new R(f,c,i,l.length);}};}).call(F.prototype);});ace.define("ace/mode/julia",[],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text").Mode;var J=r("./julia_highlight_rules").JuliaHighlightRules;var F=r("./folding/cstyle").FoldMode;var M=function(){this.HighlightRules=J;this.foldingRules=new F();this.$behaviour=this.$defaultBehaviour;};o.inherits(M,T);(function(){this.lineCommentStart="#";this.blockComment="";this.$id="ace/mode/julia";}).call(M.prototype);e.Mode=M;});(function(){ace.require(["ace/mode/julia"],function(m){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=m;}});})();