webpackJsonp([1],{"+bOk":function(e,t){},"+fg7":function(e,t){},"/WTv":function(e,t,n){"use strict";function i(e){n("G/iN")}var s=n("o4WV"),r=n("SGbI"),a=n("VU/8"),o=i,c=a(s.a,r.a,!1,o,null,null);t.a=c.exports},"08Qy":function(e,t){},"0CdP":function(e,t,n){"use strict";var i=n("mvHQ"),s=n.n(i),r=n("E0CL"),a=n("StWd"),o=n("f90G");n.n(o);n("VDic"),t.a={components:{codemirror:o.codemirror},props:{manifest:r.a.object.isRequired,setManifest:r.a.func.isRequired},data:function(){return{options:{mode:{name:"javascript",json:!0},theme:"eclipse",lineNumbers:!1,tabSize:2,lint:!0,gutters:["CodeMirror-lint-markers"]}}},computed:{code:{get:function(){return s()(this.manifest,null,"\t")},set:Object(a.a)(function(e){this.setManifest(e)},250)}}}},"0V+H":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticClass:"editor",attrs:{app:"",clipped:"",persistent:"",absolute:"",width:"450"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[n("fetch-manifest",{attrs:{setManifest:e.setManifest,url:e.url,setUrl:e.setUrl,isFetching:e.isFetching,setIsFetching:e.setIsFetching,setError:e.setError}}),e._v(" "),e.isFetching?n("div",{staticClass:"fetching"},[n("p",[e._v("Searching for manifest ... ")]),e._v(" "),n("v-progress-linear",{attrs:{indeterminate:!0}})],1):e._e(),e._v(" "),e.noManifestAfterSearch?n("div",{staticClass:"no-manifest"},[n("p",[e._v("No manifest found on the given url")]),e._v(" "),n("v-btn",{staticClass:"create-manifest",attrs:{color:"primary"},on:{click:e.setSkeleton}},[e._v("Create a manifest")]),e._v(" "),n("p",{staticClass:"error-message"},[e._v(e._s(e.error))])],1):e._e(),e._v(" "),e.manifestIsEmpty?e._e():[n("div",{staticClass:"sw-checkbox"},[n("v-checkbox",{attrs:{label:"Has a Service Worker"},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})],1),e._v(" "),n("manifest-editor",{attrs:{manifest:e.manifest,setManifest:e.setManifest}}),e._v(" "),n("manifest-errors")]],2)},s=[],r={render:i,staticRenderFns:s};t.a=r},"0tbE":function(e,t){},"1XTk":function(e,t){},"1vHh":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("v-app",[n("editor",{attrs:{isOpen:e.editorIsOpen,manifest:e.manifest,setManifest:e.setManifest,url:e.url,setUrl:e.setUrl,setHasSw:e.setHasSw}}),e._v(" "),n("app-header",{attrs:{toggleEditor:e.toggleEditor}}),e._v(" "),e.url?n("preview",{attrs:{manifest:e.manifest,url:e.url,hasSw:e.hasSw}}):e._e()],1)],1)},s=[],r={render:i,staticRenderFns:s};t.a=r},"2b9r":function(e,t){},"4/hK":function(e,t){},"41tG":function(e,t,n){"use strict";function i(e){n("GypT")}var s=n("0CdP"),r=n("Qudd"),a=n("VU/8"),o=i,c=a(s.a,r.a,!1,o,null,null);t.a=c.exports},"7hJO":function(e,t){},"7zck":function(e,t){},"8RIB":function(e,t,n){"use strict";var i=n("9k2X"),s=n("VU/8"),r=s(null,i.a,!1,null,null,null);t.a=r.exports},"8sUU":function(e,t){},"9k2X":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},s=[],r={render:i,staticRenderFns:s};t.a=r},"9ozf":function(e,t){},"9p2/":function(e,t){},Ajwh:function(e,t,n){"use strict";function i(e){try{var t=new URL(e);if("https:"===t.protocol)return!0;if("localhost"===t.hostname)return!0}catch(e){}return!1}t.a=function(e){var t=e.url,n=e.hasSw,s=e.manifest;return{"Served over HTTPS":i(t),"Has a Service Worker":n,"Has a <code>name</code>":Boolean(s.name),"Has a <code>short_name</code>":Boolean(s.short_name),"Has a <code>start_url</code> that loads":Boolean(s.start_url),"Has a PNG icon of 192x192 or larger":!0}}},BEen:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("BJxZ"),s=n("BoXz"),r=n("VU/8"),a=r(i.a,s.a,!1,null,null,null);t.default=a.exports},BJxZ:function(e,t,n){"use strict";var i=n("pFYg"),s=n.n(i);window.CodeMirror=n("8U58"),n("4/hK"),n("+fCR"),t.a={name:"codemirror",data:function(){return{content:""}},props:{code:String,value:String,events:Array,unseenLines:Array,marker:Function,loadtheme:{type:Boolean,default:function(){return!0}},debugger:{type:Boolean,default:function(){return!0}},options:{type:Object,required:!0}},created:function(){void 0===this.options.lineNumbers&&(this.options.lineNumbers=!0),void 0===this.options.lineWrapping&&(this.options.lineWrapping=!1),void 0===this.options.mode&&(this.options.mode="text/javascript");var e=this.options.theme,t=this.options.mode,i=this.debugger,r=this.loadtheme,a=!!CodeMirror.modes[t];if(e&&"solarized light"==e&&(e="solarized"),"string"==typeof t){var o=CodeMirror.findModeByMIME(t);t=o?o.mode:o}else if("object"==(void 0===t?"undefined":s()(t)))if(t.name){var o=CodeMirror.findModeByName(t.name);t=o?o.mode:null}else if(t.ext){var o=CodeMirror.findModeByExtension(t.ext);t=o?o.mode:null}else if(t.mime){var o=CodeMirror.findModeByMIME(t.mime);t=o?o.mode:null}else if(t.filename){var o=CodeMirror.findModeByFileName(t.filename);t=o?o.mode:null}t&&"null"!=t||!i||a||console.warn("CodeMirror language mode: "+t+" configuration error (CodeMirror语言模式配置错误，或者不支持此语言) See http://codemirror.net/mode/ for more details."),t&&"null"!==t&&n("ENpB")("./"+t+"/"+t+".js"),e&&r&&n("aHkt")("./"+e+".css")},mounted:function(){var e=this;this.editor=CodeMirror.fromTextArea(this.$el,this.options),this.editor.setValue(this.code||this.value||this.content),this.editor.on("change",function(t){e.content=t.getValue(),e.$emit&&(e.$emit("change",e.content),e.$emit("input",e.content))});var t=["scroll","changes","beforeChange","cursorActivity","keyHandled","inputRead","electricInput","beforeSelectionChange","viewportChange","swapDoc","gutterClick","gutterContextMenu","focus","blur","refresh","optionChange","scrollCursorIntoView","update"];this.events&&this.events.length&&(t=t.concat(this.events));for(var n=0;n<t.length;n++)t.indexOf(t[n])==n&&function(t){e.editor.on(t,function(n,i,s){e.$emit(t,n,i,s)})}(t[n]);this.$emit("ready",this.editor),this.unseenLineMarkers(),window.setTimeout(function(){e.editor.refresh()},0)},beforeDestroy:function(){var e=this.editor.doc.cm.getWrapperElement();e&&e.remove&&e.remove()},watch:{options:{deep:!0,handler:function(e,t){var n;for(n in e)this.editor.setOption(n,e[n])}},code:function(e,t){if(e!==this.editor.getValue()){var n=this.editor.getScrollInfo();this.editor.setValue(e),this.content=e,this.editor.scrollTo(n.left,n.top)}this.unseenLineMarkers()},value:function(e,t){if(e!==this.editor.getValue()){var n=this.editor.getScrollInfo();this.editor.setValue(e),this.content=e,this.editor.scrollTo(n.left,n.top)}this.unseenLineMarkers()}},methods:{refresh:function(){this.editor.refresh()},unseenLineMarkers:function(){var e=this;void 0!==e.unseenLines&&void 0!==e.marker&&e.unseenLines.forEach(function(t){var n=e.editor.lineInfo(t);e.editor.setGutterMarker(t,"breakpoints",n.gutterMarkers?null:e.marker())})}}}},BR0Y:function(e,t){},BoXz:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("textarea")},s=[],r={render:i,staticRenderFns:s};t.a=r},BySd:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{staticClass:"fetch-manifest",on:{submit:function(t){t.preventDefault(),e.handleSubmit(t)}},model:{value:e.urlValid,callback:function(t){e.urlValid=t},expression:"urlValid"}},[n("v-text-field",{attrs:{label:"URL",rules:e.urlErrors,required:""},model:{value:e.fetchUrl,callback:function(t){e.fetchUrl=t},expression:"fetchUrl"}}),e._v(" "),n("v-btn",{attrs:{disabled:e.disabled},on:{click:function(t){t.preventDefault(),e.handleSubmit(t)}}},[e.isFetching?[e._v("Fetching ... ")]:[e._v("Fetch manifest")]],2)],1)},s=[],r={render:i,staticRenderFns:s};t.a=r},C9fN:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview-device",class:"preview-device--"+e.device},[n("span",{staticClass:"preview-device-time"},[e._v(e._s(e.time))]),e._v(" "),n("div",{staticClass:"preview-device-content"},[e._t("default")],2)])},s=[],r={render:i,staticRenderFns:s};t.a=r},ENpB:function(e,t,n){function i(e){return n(s(e))}function s(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./apl/apl.js":"qxza","./asciiarmor/asciiarmor.js":"fKDv","./asn.1/asn.1.js":"P89j","./asterisk/asterisk.js":"5YCJ","./brainfuck/brainfuck.js":"77wO","./clike/clike.js":"6S2o","./clojure/clojure.js":"1J1+","./cmake/cmake.js":"3l40","./cobol/cobol.js":"SHcL","./coffeescript/coffeescript.js":"yI/k","./commonlisp/commonlisp.js":"+T+e","./crystal/crystal.js":"Id8r","./css/css.js":"puAj","./cypher/cypher.js":"To3j","./d/d.js":"zdi2","./dart/dart.js":"T43g","./diff/diff.js":"HDE3","./django/django.js":"B5Q8","./dockerfile/dockerfile.js":"bNms","./dtd/dtd.js":"Vcha","./dylan/dylan.js":"V3et","./ebnf/ebnf.js":"+yUg","./ecl/ecl.js":"yP40","./eiffel/eiffel.js":"kaWT","./elm/elm.js":"gO0v","./erlang/erlang.js":"KyD5","./factor/factor.js":"ZZxW","./fcl/fcl.js":"VmZn","./forth/forth.js":"OEOO","./fortran/fortran.js":"SUHZ","./gas/gas.js":"DVrE","./gfm/gfm.js":"bWRU","./gherkin/gherkin.js":"BGqB","./go/go.js":"CQVp","./groovy/groovy.js":"lYxz","./haml/haml.js":"kDpU","./handlebars/handlebars.js":"Qei9","./haskell-literate/haskell-literate.js":"TUpE","./haskell/haskell.js":"ao9a","./haxe/haxe.js":"T0xp","./htmlembedded/htmlembedded.js":"zA3a","./htmlmixed/htmlmixed.js":"8Nur","./http/http.js":"Ssj+","./idl/idl.js":"s5ks","./javascript/javascript.js":"5IAE","./jinja2/jinja2.js":"3h7H","./jsx/jsx.js":"KR8v","./julia/julia.js":"uRaj","./livescript/livescript.js":"SEST","./lua/lua.js":"SN96","./markdown/markdown.js":"f6fj","./mathematica/mathematica.js":"BPpj","./mbox/mbox.js":"g3M4","./meta.js":"+fCR","./mirc/mirc.js":"nngO","./mllike/mllike.js":"YJVH","./modelica/modelica.js":"tbda","./mscgen/mscgen.js":"O099","./mumps/mumps.js":"MIy+","./nginx/nginx.js":"fQr+","./nsis/nsis.js":"qp6r","./ntriples/ntriples.js":"Aju4","./octave/octave.js":"JPpr","./oz/oz.js":"/8wJ","./pascal/pascal.js":"MXNw","./pegjs/pegjs.js":"MJwH","./perl/perl.js":"rQCa","./php/php.js":"c6RA","./pig/pig.js":"AnxN","./powershell/powershell.js":"n04a","./properties/properties.js":"0nxQ","./protobuf/protobuf.js":"UHRe","./pug/pug.js":"PdD+","./puppet/puppet.js":"11SB","./python/python.js":"tWbI","./q/q.js":"LE4k","./r/r.js":"9BoL","./rpm/rpm.js":"QGGy","./rst/rst.js":"A2n/","./ruby/ruby.js":"uOPQ","./rust/rust.js":"9NDn","./sas/sas.js":"uQEz","./sass/sass.js":"7BQ2","./scheme/scheme.js":"l6KL","./shell/shell.js":"PG9i","./sieve/sieve.js":"T01z","./slim/slim.js":"M/P5","./smalltalk/smalltalk.js":"IQG/","./smarty/smarty.js":"qFPF","./solr/solr.js":"Gz0W","./soy/soy.js":"d4f2","./sparql/sparql.js":"0hjm","./spreadsheet/spreadsheet.js":"rHua","./sql/sql.js":"JGZi","./stex/stex.js":"1cvq","./stylus/stylus.js":"yKVp","./swift/swift.js":"uNyq","./tcl/tcl.js":"F9rU","./textile/textile.js":"NnLm","./tiddlywiki/tiddlywiki.js":"ATIm","./tiki/tiki.js":"HVZi","./toml/toml.js":"mcQ8","./tornado/tornado.js":"pjLr","./troff/troff.js":"MrOV","./ttcn-cfg/ttcn-cfg.js":"P/dt","./ttcn/ttcn.js":"su+d","./turtle/turtle.js":"hL2b","./twig/twig.js":"RfqI","./vb/vb.js":"DZXy","./vbscript/vbscript.js":"Vyxb","./velocity/velocity.js":"CdSB","./verilog/verilog.js":"BgqI","./vhdl/vhdl.js":"K/yg","./vue/vue.js":"/9hD","./webidl/webidl.js":"JfGf","./xml/xml.js":"ezqs","./xquery/xquery.js":"zGcu","./yacas/yacas.js":"KXeR","./yaml-frontmatter/yaml-frontmatter.js":"ybz3","./yaml/yaml.js":"uqUb","./z80/z80.js":"3Y8U"};i.keys=function(){return Object.keys(r)},i.resolve=s,e.exports=i,i.id="ENpB"},ESeZ:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{staticClass:"preview-controls white elevation-1"},[n("v-select",{staticClass:"preview-controls-select mr-4",attrs:{disabled:"",items:e.browsers},model:{value:e.browser,callback:function(t){e.browser=t},expression:"browser"}}),e._v(" "),n("v-slider",{staticClass:"preview-controls-slider mr-4",attrs:{disabled:"",min:e.zoomLevelMin,max:e.zoomLevelMax,step:e.zoomStep,snap:"",label:e.computedZoomLevel},model:{value:e.zoomLevel,callback:function(t){e.zoomLevel=t},expression:"zoomLevel"}}),e._v(" "),n("v-btn-toggle",{staticClass:"mr-4",attrs:{mandatory:""},model:{value:e.toggleView,callback:function(t){e.toggleView=t},expression:"toggleView"}},[n("v-btn",{attrs:{flat:"",disabled:""}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-view-column")]),e._v("\n      Side-by-side\n    ")],1),e._v(" "),n("v-btn",{attrs:{flat:"",disabled:""}},[e._v("\n      Flow\n      "),n("v-icon",{attrs:{right:""}},[e._v("mdi-view-array")])],1)],1),e._v(" "),n("v-btn-toggle",{staticClass:"mr-4",attrs:{mandatory:""},model:{value:e.orientation,callback:function(t){e.orientation=t},expression:"orientation"}},[n("v-btn",{attrs:{flat:"",disabled:""}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-cellphone")]),e._v("\n      Portrait\n    ")],1),e._v(" "),n("v-btn",{attrs:{flat:"",disabled:""}},[e._v("\n      Landscape\n      "),n("v-icon",{attrs:{right:""}},[e._v("mdi-tablet")])],1)],1)],1)},s=[],r={render:i,staticRenderFns:s};t.a=r},FVEr:function(e,t){e.exports={name:"",short_name:"",start_url:"",icons:[]}},FjCI:function(e,t,n){"use strict";var i=n("//Fk"),s=n.n(i),r=n("E0CL");t.a={props:{setManifest:r.a.func.isRequired,url:r.a.string.isRequired,setUrl:r.a.func.isRequired,isFetching:r.a.bool.isRequired,setIsFetching:r.a.func.isRequired,setError:r.a.func.isRequired},data:function(){return{fetchUrl:"",urlErrors:[function(e){try{return!!new URL(e)}catch(e){return"Invalid url"}}],urlValid:!1}},computed:{disabled:function(){return!this.urlValid||this.isFetching}},methods:{handleSubmit:function(){this.setUrl(this.fetchUrl),this.fetchManifest()},fetchManifest:function(){var e=this;this.setIsFetching(!0),this.setManifest({}),fetch("https://fetch-manifest.now.sh/?url="+this.fetchUrl).then(function(e){return e.json()}).then(function(e){return e.errors?s.a.reject(e.errors[0].message):e}).then(function(t){var n=t.manifest;e.setIsFetching(!1),e.setManifest(n)}).catch(function(t){e.setIsFetching(!1),e.setError(t)})}}}},"G/iN":function(e,t){},G97J:function(e,t,n){"use strict";var i=n("E0CL"),s=n("llsy");t.a={props:{device:i.a.string.isRequired},data:function(){return{time:Object(s.a)()}}}},GUiZ:function(e,t){},GggT:function(e,t){},GypT:function(e,t){},IYz5:function(e,t,n){"use strict";function i(e){n("fa9F")}var s=n("VmfE"),r=n("1vHh"),a=n("VU/8"),o=i,c=a(s.a,r.a,!1,o,null,null);t.a=c.exports},"Ijt+":function(e,t){},K00g:function(e,t){},LDKD:function(e,t){},MPNI:function(e,t){},"Mpj/":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s=n("3EgV"),r=n.n(s),a=n("IYz5");n("7zck"),n("7hJO"),i.a.config.productionTip=!1,i.a.use(r.a),new i.a({el:"#app",template:"<app/>",components:{App:a.a}})},NfLi:function(e,t,n){"use strict";function i(e){n("UySo")}var s=n("WaYt"),r=n("0V+H"),a=n("VU/8"),o=i,c=a(s.a,r.a,!1,o,null,null);t.a=c.exports},OlnX:function(e,t,n){"use strict";t.a={af:"Afrikaans","af-ZA":"Afrikaans (South Africa)",ar:"Arabic","ar-AE":"Arabic (U.A.E.)","ar-BH":"Arabic (Bahrain)","ar-DZ":"Arabic (Algeria)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-YE":"Arabic (Yemen)",az:"Azeri (Latin)","az-AZ":"Azeri (Latin) (Azerbaijan)","az-Cyrl-AZ":"Azeri (Cyrillic) (Azerbaijan)",be:"Belarusian","be-BY":"Belarusian (Belarus)",bg:"Bulgarian","bg-BG":"Bulgarian (Bulgaria)","bs-BA":"Bosnian (Bosnia and Herzegovina)",ca:"Catalan","ca-ES":"Catalan (Spain)",cs:"Czech","cs-CZ":"Czech (Czech Republic)",cy:"Welsh","cy-GB":"Welsh (United Kingdom)",da:"Danish","da-DK":"Danish (Denmark)",de:"German","de-AT":"German (Austria)","de-CH":"German (Switzerland)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)",dv:"Divehi","dv-MV":"Divehi (Maldives)",el:"Greek","el-GR":"Greek (Greece)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-CB":"English (Caribbean)","en-GB":"English (United Kingdom)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Republic of the Philippines)","en-TT":"English (Trinidad and Tobago)","en-US":"English (United States)","en-ZA":"English (South Africa)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-ES":"Spanish (Spain)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-PY":"Spanish (Paraguay)","es-SV":"Spanish (El Salvador)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",et:"Estonian","et-EE":"Estonian (Estonia)",eu:"Basque","eu-ES":"Basque (Spain)",fa:"Farsi","fa-IR":"Farsi (Iran)",fi:"Finnish","fi-FI":"Finnish (Finland)",fo:"Faroese","fo-FO":"Faroese (Faroe Islands)",fr:"French","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-CH":"French (Switzerland)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Principality of Monaco)",gl:"Galician","gl-ES":"Galician (Spain)",gu:"Gujarati","gu-IN":"Gujarati (India)",he:"Hebrew","he-IL":"Hebrew (Israel)",hi:"Hindi","hi-IN":"Hindi (India)",hr:"Croatian","hr-BA":"Croatian (Bosnia and Herzegovina)","hr-HR":"Croatian (Croatia)",hu:"Hungarian","hu-HU":"Hungarian (Hungary)",hy:"Armenian","hy-AM":"Armenian (Armenia)",id:"Indonesian","id-ID":"Indonesian (Indonesia)",is:"Icelandic","is-IS":"Icelandic (Iceland)",it:"Italian","it-CH":"Italian (Switzerland)","it-IT":"Italian (Italy)",ja:"Japanese","ja-JP":"Japanese (Japan)",ka:"Georgian","ka-GE":"Georgian (Georgia)",kk:"Kazakh","kk-KZ":"Kazakh (Kazakhstan)",kn:"Kannada","kn-IN":"Kannada (India)",ko:"Korean","ko-KR":"Korean (Korea)",kok:"Konkani","kok-IN":"Konkani (India)",ky:"Kyrgyz","ky-KG":"Kyrgyz (Kyrgyzstan)",lt:"Lithuanian","lt-LT":"Lithuanian (Lithuania)",lv:"Latvian","lv-LV":"Latvian (Latvia)",mi:"Maori","mi-NZ":"Maori (New Zealand)",mk:"FYRO Macedonian","mk-MK":"FYRO Macedonian (Former Yugoslav Republic of Macedonia)",mn:"Mongolian","mn-MN":"Mongolian (Mongolia)",mr:"Marathi","mr-IN":"Marathi (India)",ms:"Malay","ms-BN":"Malay (Brunei Darussalam)","ms-MY":"Malay (Malaysia)",mt:"Maltese","mt-MT":"Maltese (Malta)",nb:"Norwegian (Bokm?l)","nb-NO":"Norwegian (Bokm?l) (Norway)",nl:"Dutch","nl-BE":"Dutch (Belgium)","nl-NL":"Dutch (Netherlands)","nn-NO":"Norwegian (Nynorsk) (Norway)",ns:"Northern Sotho","ns-ZA":"Northern Sotho (South Africa)",pa:"Punjabi","pa-IN":"Punjabi (India)",pl:"Polish","pl-PL":"Polish (Poland)",ps:"Pashto","ps-AR":"Pashto (Afghanistan)",pt:"Portuguese","pt-BR":"Portuguese (Brazil)","pt-PT":"Portuguese (Portugal)",qu:"Quechua","qu-BO":"Quechua (Bolivia)","qu-EC":"Quechua (Ecuador)","qu-PE":"Quechua (Peru)",ro:"Romanian","ro-RO":"Romanian (Romania)",ru:"Russian","ru-RU":"Russian (Russia)",sa:"Sanskrit","sa-IN":"Sanskrit (India)",se:"Sami","se-FI":"Sami (Finland)","se-NO":"Sami (Norway)","se-SE":"Sami (Sweden)",sk:"Slovak","sk-SK":"Slovak (Slovakia)",sl:"Slovenian","sl-SI":"Slovenian (Slovenia)",sq:"Albanian","sq-AL":"Albanian (Albania)","sr-BA":"Serbian (Latin) (Bosnia and Herzegovina)","sr-Cyrl-BA":"Serbian (Cyrillic) (Bosnia and Herzegovina)","sr-SP":"Serbian (Latin) (Serbia and Montenegro)","sr-Cyrl-SP":"Serbian (Cyrillic) (Serbia and Montenegro)",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SE":"Swedish (Sweden)",sw:"Swahili","sw-KE":"Swahili (Kenya)",syr:"Syriac","syr-SY":"Syriac (Syria)",ta:"Tamil","ta-IN":"Tamil (India)",te:"Telugu","te-IN":"Telugu (India)",th:"Thai","th-TH":"Thai (Thailand)",tl:"Tagalog","tl-PH":"Tagalog (Philippines)",tn:"Tswana","tn-ZA":"Tswana (South Africa)",tr:"Turkish","tr-TR":"Turkish (Turkey)",tt:"Tatar","tt-RU":"Tatar (Russia)",ts:"Tsonga",uk:"Ukrainian","uk-UA":"Ukrainian (Ukraine)",ur:"Urdu","ur-PK":"Urdu (Islamic Republic of Pakistan)",uz:"Uzbek (Latin)","uz-UZ":"Uzbek (Latin) (Uzbekistan)","uz-Cyrl-UZ":"Uzbek (Cyrillic) (Uzbekistan)",vi:"Vietnamese","vi-VN":"Vietnamese (Viet Nam)",xh:"Xhosa","xh-ZA":"Xhosa (South Africa)",zh:"Chinese","zh-CN":"Chinese (S)","zh-HK":"Chinese (Hong Kong)","zh-MO":"Chinese (Macau)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (T)",zu:"Zulu","zu-ZA":"Zulu (South Africa)"}},Q6j7:function(e,t){},Qudd:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"manifest-editor"},[n("codemirror",{attrs:{options:e.options},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)},s=[],r={render:i,staticRenderFns:s};t.a=r},R3s6:function(e,t){},RcYb:function(e,t,n){"use strict";function i(e){n("XHok")}var s=n("G97J"),r=n("C9fN"),a=n("VU/8"),o=i,c=a(s.a,r.a,!1,o,null,null);t.a=c.exports},RjYt:function(e,t,n){"use strict";var i=n("E0CL"),s=n("j1G/"),r=n("/WTv"),a=n("8RIB"),o=n("iyoc"),c=n("RcYb"),l=n("e/gn");t.a={components:{BrowserViewport:s.a,ChromePrompt:r.a,ChromeNav:a.a,PreviewControls:o.a,PreviewDevice:c.a,PreviewCriteria:l.a},props:{manifest:i.a.object.isRequired,url:i.a.string.isRequired,hasSw:i.a.bool.isRequired}}},SGbI:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.meetsAllCriteria?n("div",{staticClass:"chrome-prompt",class:{"is-open":e.isOpen}},[n("div",{staticClass:"chrome-prompt-content"},[n("div",{staticClass:"chrome-prompt-image"},[n("img",{attrs:{src:e.imageUrl}})]),e._v(" "),n("div",{staticClass:"chrome-prompt-information"},[n("h2",{staticClass:"chrome-prompt-title"},[e._v(e._s(e.promptTitle))]),e._v(" "),n("p",{staticClass:"chrome-prompt-url"},[e._v(e._s(e.hostname))])]),e._v(" "),n("button",{staticClass:"chrome-prompt-close",attrs:{"aria-label":"Close push notification"},on:{click:e.close}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"14",viewBox:"0 0 14 14",width:"14"}},[n("path",{attrs:{d:"M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7 14 1.4z","fill-rule":"evenodd"}})])])]),e._v(" "),n("v-btn",{staticClass:"chrome-prompt-add",attrs:{type:"button",color:"primary",disabled:e.loading,ripple:""},on:{click:e.add}},[e._v("\n      "+e._s(e.buttonText)+"\n  ")])],1):e._e()},s=[],r={render:i,staticRenderFns:s};t.a=r},SRod:function(e,t){},StWd:function(e,t,n){"use strict";function i(e,t,n){var i=void 0;return function(){for(var s=this,r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];clearTimeout(i),i=setTimeout(function(){i=null,n||e.apply(s,a)},t),n&&!i&&e.apply(this,[].concat(a))}}t.a=i},U9tS:function(e,t){},UM8r:function(e,t){},UoAS:function(e,t){},UySo:function(e,t){},VBzT:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"preview"},[n("v-content",[n("preview-controls"),e._v(" "),n("div",{staticClass:"preview__column"},[n("preview-device",{attrs:{device:"nexus-5x"}},[n("chrome-nav"),e._v(" "),Object.keys(e.manifest).length?n("chrome-prompt",{attrs:{manifest:e.manifest,url:e.url,hasSw:e.hasSw}}):e._e(),e._v(" "),n("browser-viewport",{attrs:{url:e.url}})],1),e._v(" "),n("preview-criteria",{attrs:{manifest:e.manifest,url:e.url,hasSw:e.hasSw}})],1)],1)],1)},s=[],r={render:i,staticRenderFns:s};t.a=r},VDic:function(e,t,n){"use strict";function i(e,t){if("required"===e.name)return{from:a.CodeMirror.Pos(0,1),to:a.CodeMirror.Pos(0,1),message:r(e.stack)};var n=s(e,t);return{from:a.CodeMirror.Pos(n.from.line,n.from.char),to:a.CodeMirror.Pos(n.to.line,n.to.char),message:r(e.stack)}}function s(e,t){var n=e.property.substr("instance.".length),i=new RegExp('(\\s*"'+n+'"\\s*:\\s*)(.*)\\s*,\\s*$'),s=t.split("\n"),r=s.findIndex(function(e){return e.includes(n)}),a=s[r].replace("\t"," ".repeat(f)),o=a.match(i),c=o[1].length-1;return{from:{line:r,char:c},to:{line:r,char:c+o[2].length}}}function r(e){return e.replace(h,"")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("f90G"),o=(n.n(a),n("7HRn")),c=(n.n(o),n("d6Mc")),l=n("ZbcI"),u=n.n(l);n("5IAE"),n("ryyk"),n("GUiZ");var d=new o.Validator,f=2,h="instance.";a.CodeMirror.registerHelper("lint","json",function(e){var t=u()(e,{});if(t.error)return[{from:a.CodeMirror.Pos(t.line-1,t.character-1),to:a.CodeMirror.Pos(t.line-1,t.character),message:t.error}];var n=d.validate(JSON.parse(e),c.a),s=n.errors,r=[];return s?(s.forEach(function(t){r.push(i(t,e))}),r):[]})},VGzf:function(e,t,n){"use strict";t.a={computed:{computedZoomLevel:function(){return(this.zoomLevel/100).toFixed(1)}},data:function(){return{toggleView:0,browser:"Chrome",browsers:["Chrome","Samsung Internet","Safari","Firefox","Opera"],zoomLevel:100,zoomStep:10,zoomLevelMin:10,zoomLevelMax:200,orientation:0}}}},VgS4:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{"clipped-left":"",absolute:"",app:"",color:"primary"}},[n("v-toolbar-side-icon",{staticClass:"white--text",on:{click:function(t){t.stopPropagation(),e.toggleEditor(t)}}}),e._v(" "),n("v-toolbar-title",{staticClass:"white--text"},[e._v("Manifiesta")])],1)},s=[],r={render:i,staticRenderFns:s};t.a=r},VmfE:function(e,t,n){"use strict";var i=n("pFYg"),s=n.n(i),r=n("tA83"),a=n("NfLi"),o=n("pwpg");t.a={components:{AppHeader:r.a,Editor:a.a,Preview:o.a},data:function(){return{url:"",manifest:{},hasSw:!1,editorIsOpen:!0}},methods:{toggleEditor:function(){this.editorIsOpen=!this.editorIsOpen},setUrl:function(e){this.url=e},setManifest:function(e){if("object"===(void 0===e?"undefined":s()(e)))this.manifest=e;else try{this.manifest=JSON.parse(e)}catch(e){}},setHasSw:function(e){this.hasSw=e}}}},WaYt:function(e,t,n){"use strict";var i=n("fZjL"),s=n.n(i),r=n("E0CL"),a=n("FVEr"),o=n.n(a),c=n("bdmv"),l=n("41tG"),u=n("v7AC");t.a={components:{FetchManifest:c.a,ManifestEditor:l.a,ManifestErrors:u.a},props:{isOpen:r.a.bool.isRequired,manifest:r.a.object.isRequired,setManifest:r.a.func.isRequired,url:r.a.string.isRequired,setUrl:r.a.func.isRequired,setHasSw:r.a.func.isRequired},data:function(){return{firstFetch:!0,isFetching:!1,checkbox:!1,error:""}},computed:{manifestIsEmpty:function(){return!s()(this.manifest).length},noManifestAfterSearch:function(){var e=this.isFetching,t=this.firstFetch,n=this.manifestIsEmpty;return!e&&!t&&n}},watch:{checkbox:function(){this.setHasSw(this.checkbox)}},methods:{setIsFetching:function(e){this.isFetching=e,this.firstFetch=!1},setSkeleton:function(){this.setManifest(o.a)},setError:function(e){this.error=e}}}},X1Ds:function(e,t){},XHok:function(e,t){},XQDJ:function(e,t){},Xdwu:function(e,t){},Y0SK:function(e,t){},Y7A8:function(e,t){},ZrWO:function(e,t){},aHkt:function(e,t,n){function i(e){return n(s(e))}function s(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./3024-day.css":"tPrY","./3024-night.css":"UoAS","./abcdef.css":"9ozf","./ambiance-mobile.css":"ZrWO","./ambiance.css":"vX90","./base16-dark.css":"jGSh","./base16-light.css":"x15G","./bespin.css":"R3s6","./blackboard.css":"kSL7","./cobalt.css":"t9xi","./colorforth.css":"Q6j7","./dracula.css":"8sUU","./duotone-dark.css":"n+LN","./duotone-light.css":"GggT","./eclipse.css":"hD67","./elegant.css":"2b9r","./erlang-dark.css":"XQDJ","./hopscotch.css":"opVC","./icecoder.css":"scuT","./isotope.css":"u3n7","./lesser-dark.css":"LDKD","./liquibyte.css":"fXer","./material.css":"epNC","./mbo.css":"1XTk","./mdn-like.css":"vsRU","./midnight.css":"zLDg","./monokai.css":"UM8r","./neat.css":"Ijt+","./neo.css":"bF3y","./night.css":"ncdg","./panda-syntax.css":"mBIq","./paraiso-dark.css":"BR0Y","./paraiso-light.css":"Y0SK","./pastel-on-dark.css":"v/ec","./railscasts.css":"zUoc","./rubyblue.css":"0tbE","./seti.css":"jykA","./solarized.css":"Xdwu","./the-matrix.css":"K00g","./tomorrow-night-bright.css":"MPNI","./tomorrow-night-eighties.css":"+bOk","./ttcn.css":"+fg7","./twilight.css":"Y7A8","./vibrant-ink.css":"w/Cc","./xq-dark.css":"qyuG","./xq-light.css":"gSgD","./yeti.css":"X1Ds","./zenburn.css":"Mpj/"};i.keys=function(){return Object.keys(r)},i.resolve=s,e.exports=i,i.id="aHkt"},bF3y:function(e,t){},bdmv:function(e,t,n){"use strict";function i(e){n("v8gt")}var s=n("FjCI"),r=n("BySd"),a=n("VU/8"),o=i,c=a(s.a,r.a,!1,o,null,null);t.a=c.exports},cT6P:function(e,t,n){"use strict";var i=n("E0CL"),s=n("Ajwh");t.a={props:{url:i.a.string.isRequired,manifest:i.a.object.isRequired,hasSw:i.a.bool.isRequired},computed:{criteriaList:function(){return Object(s.a)({url:this.url,hasSw:this.hasSw,manifest:this.manifest})}}}},d1Sa:function(e,t,n){"use strict";var i=n("E0CL");t.a={props:{url:i.a.string.isRequired}}},d6Mc:function(e,t,n){"use strict";var i=n("fZjL"),s=n.n(i),r=n("OlnX");t.a={type:"object",properties:{name:{required:!0,type:"string"},short_name:{required:!0,type:"string"},start_url:{required:!0,type:"string"},icons:{required:!0,type:"array"},dir:{type:"string",enum:["auto","ltr","rtl"]},lang:{type:"string",enum:s()(r.a)},description:{type:"string"},scope:{type:"string"},display:{type:"string",enum:["fullscreen","standalone","minimal-ui","browser"]},orientation:{type:"string",enum:["any","natural","landscape","landscape-primary","landscape-secondary","portrait","portrait-primary","portrait-secondary"]},serviceworker:{type:"object"},theme_color:{type:"string"},related_applications:{type:"array"},prefer_related_applications:{type:"boolean"},background_color:{type:"string"},categories:{type:"array"},screenshots:{type:"array"},iarc_rating_id:{type:"object"}}}},"e/gn":function(e,t,n){"use strict";function i(e){n("U9tS")}var s=n("cT6P"),r=n("nzxI"),a=n("VU/8"),o=i,c=a(s.a,r.a,!1,o,null,null);t.a=c.exports},epNC:function(e,t){},fXer:function(e,t){},fa9F:function(e,t){},gSgD:function(e,t){},hD67:function(e,t){},iyoc:function(e,t,n){"use strict";function i(e){n("SRod")}var s=n("VGzf"),r=n("ESeZ"),a=n("VU/8"),o=i,c=a(s.a,r.a,!1,o,null,null);t.a=c.exports},"j1G/":function(e,t,n){"use strict";function i(e){n("9p2/")}var s=n("d1Sa"),r=n("tavo"),a=n("VU/8"),o=i,c=a(s.a,r.a,!1,o,null,null);t.a=c.exports},jGSh:function(e,t){},jykA:function(e,t){},kSL7:function(e,t){},llsy:function(e,t,n){"use strict";t.a=function(){var e=new Date,t=e.getHours(),n=e.getMinutes();return t<10&&(t="0"+t),n<10&&(n="0"+n),t+":"+n}},mBIq:function(e,t){},"n+LN":function(e,t){},ncdg:function(e,t){},nzxI:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"preview-criteria"},[n("h3",{staticClass:"preview-criteria__title"},[e._v("Criteria for the Chrome install prompt:")]),e._v(" "),n("ul",{staticClass:"preview-criteria__list"},e._l(e.criteriaList,function(t,i){return n("li",{key:i,staticClass:"preview-criteria__item",class:t?"preview-criteria__item--pass":"preview-criteria__item--fail"},[n("span",{domProps:{innerHTML:e._s(i)}}),e._v(" "),n("span",{staticClass:"a11y-only"},[e._v(e._s(t?"is met. ":"isn't met."))])])})),e._v(" "),n("a",{attrs:{href:"https://developers.google.com/web/fundamentals/app-install-banners/#what_are_the_criteria",target:"_blank",rel:"noopener"}},[e._v("Learn more")])])},s=[],r={render:i,staticRenderFns:s};t.a=r},o4WV:function(e,t,n){"use strict";var i=n("gRE1"),s=n.n(i),r=n("E0CL"),a=n("Ajwh");t.a={props:{manifest:r.a.object.isRequired,url:r.a.string.isRequired,hasSw:r.a.bool.isRequired},data:function(){return{isOpen:!1,isAdded:!1,loading:!1}},computed:{meetsAllCriteria:function(){var e=Object(a.a)({url:this.url,hasSw:this.hasSw,manifest:this.manifest});return!!s()(e).every(Boolean)||(this.reset(),!1)},hostname:function(){return new URL(this.url).hostname},promptTitle:function(){return this.manifest.short_name},imageUrl:function(){return this.url+this.manifest.icons[0].src},buttonText:function(){return this.isAdded?"Open":"Add"}},created:function(){this.start()},methods:{close:function(){this.isOpen=!1},add:function(){var e=this;if(!this.isAdded){var t=Math.round(3e3*Math.random())+500;this.loading=!0,setTimeout(function(){e.loading=!1,e.isAdded=!0},t)}},reset:function(){this.isOpen=!1,this.isAdded=!1,this.loading=!1,this.start()},start:function(){var e=this;setTimeout(function(){e.isOpen=!0},2e3)}}}},opVC:function(e,t){},pAhj:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},s=[],r={render:i,staticRenderFns:s};t.a=r},pwpg:function(e,t,n){"use strict";function i(e){n("08Qy")}var s=n("RjYt"),r=n("VBzT"),a=n("VU/8"),o=i,c=a(s.a,r.a,!1,o,null,null);t.a=c.exports},"q/eq":function(e,t,n){"use strict";var i=n("E0CL");t.a={props:{toggleEditor:i.a.func.isRequired}}},qyuG:function(e,t){},scuT:function(e,t){},t9xi:function(e,t){},tA83:function(e,t,n){"use strict";var i=n("q/eq"),s=n("VgS4"),r=n("VU/8"),a=r(i.a,s.a,!1,null,null,null);t.a=a.exports},tPrY:function(e,t){},tavo:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("iframe",{staticClass:"browser-viewport",attrs:{src:e.url}},[n("p",[e._v("Your browser does not support iframes.")])])},s=[],r={render:i,staticRenderFns:s};t.a=r},u3n7:function(e,t){},"v/ec":function(e,t){},v7AC:function(e,t,n){"use strict";var i=n("pAhj"),s=n("VU/8"),r=s(null,i.a,!1,null,null,null);t.a=r.exports},v8gt:function(e,t){},vX90:function(e,t){},vsRU:function(e,t){},"w/Cc":function(e,t){},x15G:function(e,t){},zLDg:function(e,t){},zUoc:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.94426c47cafd219367b4.js.map