(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"10f3":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:!e.electronOnly||e.isElectron,expression:"electronOnly ? isElectron : true"}],staticClass:"setting-block row q-pt-sm q-pb-md"},[a("div",{staticClass:"setting-label col-xs-12 col-sm-4 q-pt-sm"},[a("span",{staticClass:"q-mr-md"},[e._v(e._s(e.label))])]),a("div",{staticClass:"setting-content col row"},[e._t("default")],2)])},i=[],s=a("d310"),o={props:{label:String,electronOnly:Boolean},data(){return{isElectron:Object(s["isElectron"])()}}},l=o,r=(a("8a02"),a("2b5f")),c=Object(r["a"])(l,n,i,!1,null,"00cd607c",null);t["a"]=c.exports},"17c7":function(e,t,a){},"1ad3":function(e,t,a){"use strict";a("17c7")},"1b02":function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e["system"]="system",e["light"]="light",e["dark"]="dark"}(n||(n={}))},"1b14":function(e,t,a){},"427d":function(e,t,a){"use strict";a("634e")},4584:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-select",{staticClass:"setting-select",class:{caption:e.caption},attrs:{value:e.displayLabel,options:e.options,label:e.label,outlined:"",dense:"","emit-value":"","data-cy":"select-direct"},on:{input:e.emitChange},scopedSlots:e._u([e.caption?{key:"option",fn:function(t){return[a("q-item",e._g(e._b({},"q-item",t.itemProps,!1),t.itemEvents),[a("q-item-section",[a("q-item-label",{domProps:{innerHTML:e._s(t.opt.label)}}),t.opt.caption?a("q-tooltip",e._l(t.opt.caption.split("\n"),(function(t,n){return a("span",{key:n,staticClass:"tooltip"},[e._v(e._s(t))])})),0):e._e()],1)],1)]}}:null],null,!0)})},i=[],s=(a("de6c"),{model:{prop:"value",event:"change"},props:{value:String,options:Array,label:String,caption:Boolean},computed:{displayLabel(){for(const e of this.options)if(e.value===this.value)return e.label;return this.value}},methods:{emitChange(e){this.$emit("change",e)}}}),o=s,l=(a("8dcf"),a("2b5f")),r=a("a4ac"),c=a("b329"),u=a("25fb"),h=a("79e0"),d=a("cf25"),g=a("09a4"),m=a.n(g),p=Object(l["a"])(o,n,i,!1,null,"58d8362a",null);t["a"]=p.exports;m()(p,"components",{QSelect:r["a"],QItem:c["a"],QItemSection:u["a"],QItemLabel:h["a"],QTooltip:d["a"]})},6065:function(e,t,a){"use strict";a("fef1")},"634e":function(e,t,a){},"6af0":function(e,t,a){},"6dc2":function(e,t,a){},"8a02":function(e,t,a){"use strict";a("6dc2")},"8dcf":function(e,t,a){"use strict";a("1b14")},9270:function(e,t,a){"use strict";a("6af0")},9980:function(e,t,a){"use strict";a("de2f")},"9d67":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.dense?"col-4":"col-12"},[a("q-checkbox",{staticClass:"q-mt-sm",attrs:{value:e.value,label:e.label,dense:""},on:{input:e.onChange}},[e.tooltip?a("q-tooltip",[e._v(e._s(e.tooltip))]):e._e()],1)],1)},i=[],s={props:{value:{required:!0},label:String,keyName:String,dense:Boolean,tooltip:{type:String,required:!1}},methods:{onChange(e){this.$emit("change",this.keyName,e)}}},o=s,l=a("2b5f"),r=a("7498"),c=a("cf25"),u=a("09a4"),h=a.n(u),d=Object(l["a"])(o,n,i,!1,null,null,null);t["a"]=d.exports;h()(d,"components",{QCheckbox:r["a"],QTooltip:c["a"]})},"9ff7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"settings-container"},[a("q-page",{staticClass:"basic-settings",class:{changed:e.changed,large:e.isElectron},staticStyle:{"min-height":"unset"},attrs:{padding:"",id:"basic-settings"}},[a("SettingBlock",{attrs:{label:e.t("language")}},[a("SettingSelect",{attrs:{options:e.languages},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}})],1),a("SettingBlock",{attrs:{label:e.t("appearance")}},[a("SettingSelect",{attrs:{options:e.darkmodeOptions},model:{value:e.darkMode,callback:function(t){e.darkMode=t},expression:"darkMode"}})],1),a("SettingBlock",{attrs:{label:e.t("default_video_player"),electronOnly:""}},[a("SettingSelect",{attrs:{options:e.videoPlayerOptions},model:{value:e.defaultVideoPlayer,callback:function(t){e.defaultVideoPlayer=t},expression:"defaultVideoPlayer"}})],1),a("SettingBlock",{attrs:{label:e.t("video_cache_time"),electronOnly:""}},[a("SettingSlider",{attrs:{value:e.settings.videoCacheTime,max:10,step:1,unit:"m",label_unit:e.t("minutes"),rate:1,keyName:"videoCacheTime"},on:{change:e.storeChange}})],1),a("SettingBlock",{attrs:{label:e.t("library")}},[a("SettingSelect",{attrs:{label:e.t("library_film_rate"),options:e.libraryRateOptions,caption:""},model:{value:e.libraryRate,callback:function(t){e.libraryRate=t},expression:"libraryRate"}}),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.libraryShowExplore,!1))],1),a("SettingBlock",{attrs:{label:e.t("start"),electronOnly:""}},[a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.autoStart,!1)),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.autoStartUnfinished,!1))],1),a("SettingBlock",{attrs:{id:"download-directory",label:e.t("download_directory"),electronOnly:""}},[a("SettingDirectory",{attrs:{value:e.settings.downloadDirectory,keyName:"downloadDirectory"},on:{change:e.storeChange}})],1),a("SettingBlock",{attrs:{label:e.t("upload_directory"),electronOnly:""}},[a("SettingDirectory",{attrs:{value:e.settings.uploadDirectory,keyName:"uploadDirectory"},on:{change:e.storeChange}}),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.autoUpload,!1)),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.unlimitUpload,!1))],1),a("SettingBlock",{attrs:{label:e.t("transport_setting")}},[a("SettingSpeed",{attrs:{value:e.settings.downloadSpeed,keyName:"downloadSpeed",label:e.t("download_limit")},on:{change:e.storeChange}}),a("SettingSpeed",{attrs:{value:e.settings.uploadSpeed,keyName:"uploadSpeed",label:e.t("upload_limit")},on:{change:e.storeChange}}),e.isCapacitor?a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.downloadWithCellular,!1)):e._e()],1),a("SettingBlock",{attrs:{label:e.t("payed_user_share_rate"),electronOnly:""}},[a("SettingSlider",{attrs:{value:e.settings.payedUserShareRate,min:50,unit:"%",keyName:"payedUserShareRate"},on:{change:e.storeChange}})],1),a("SettingBlock",{attrs:{label:e.t("BT_setting"),electronOnly:""}},[a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.saveMetadata,!1)),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.defaultDeleteFiles,!1))],1),a("SettingBlock",{attrs:{label:e.t("task_manage"),electronOnly:""}},[a("SettingNumber",e._b({on:{change:e.storeChange}},"SettingNumber",e.taskManage.maxDownloadNum,!1)),a("SettingNumber",e._b({on:{change:e.storeChange}},"SettingNumber",e.taskManage.maxConns,!1)),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.jumpToDownload,!1)),a("SettingCheckbox",e._b({on:{change:e.storeChange}},"SettingCheckbox",e.checkboxes.notification,!1))],1),a("SettingBlock",{attrs:{label:e.t("disk_usage"),electronOnly:""}},[a("SettingNumber",e._b({on:{change:e.onMinDiskSpaceChange}},"SettingNumber",e.minDiskSpace,!1))],1)],1),a("SettingFooter",{attrs:{disable:!e.changed,loading:e.loading},on:{submit:e.onSubmit,discard:e.onDiscard,reset:e.onReset}})],1)},i=[],s=a("93ec"),o=a("b6d0"),l=a("908d"),r=a("1b02"),c=a("3d18"),u=a("10f3"),h=a("edc32"),d=a("4584"),g=a("9d67"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12"},[a("q-input",{staticClass:"setting-directory",attrs:{value:e.value,outlined:"",dense:""},on:{input:e.onChange,blur:e.onBlur},nativeOn:{paste:function(e){e.stopPropagation()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"folder"},on:{click:e.selectDirectory}})]},proxy:!0}])})],1)},p=[];a("de6c");const b=l["b"].is.electron,f=b?a("a3fc"):null,y=e=>{if(!f)return null;try{let t=f.dirname(e[0]);for(let a=1;a<e.length;a++)while(!e[a].includes(t)&&t.length>1)t=f.dirname(t);return t}catch(t){return null}};var v={props:{value:String,keyName:String},methods:{onChange(e){this.$emit("change",this.keyName,e)},onBlur(){this.$emit("blur")},selectDirectory(){if(!b)return;const e=a("b052").ipcRenderer;e.once("select_directory",((e,t)=>{if(t&&!t.canceled&&t.filePaths&&t.filePaths.length)return console.log("select",t.filePaths[0]),this.$emit("change",this.keyName,t.filePaths[0]);console.log("skip select",t)})),e.send("select_directory")},onSelect(e){const t=[...e.target.files].map((e=>e.path||e.webkitRelativePath));this.onChange(y(t)||"")}}},k=v,S=(a("9270"),a("2b5f")),_=a("0e45"),C=a("f106"),x=a("09a4"),N=a.n(x),w=Object(S["a"])(k,m,p,!1,null,"480ace8c",null),O=w.exports;N()(w,"components",{QInput:_["a"],QIcon:C["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 row q-mb-sm"},[a("q-checkbox",{staticClass:"q-mb-md q-mr-sm",attrs:{dense:""},model:{value:e.showCheckbox,callback:function(t){e.showCheckbox=t},expression:"showCheckbox"}}),a("q-input",{staticClass:"input",attrs:{type:"number",outlined:"",dense:"","bottom-slots":"",disable:!e.showCheckbox,label:e.label,rules:[e.positiveNumber]},on:{blur:e.onBlur},nativeOn:{paste:function(e){e.stopPropagation()}},scopedSlots:e._u([{key:"hint",fn:function(){return[a("div",{staticClass:"text-right"},[e._v("KB/s")])]},proxy:!0}]),model:{value:e.speed,callback:function(t){e.speed=e._n(t)},expression:"speed"}})],1)},q=[],P={props:{label:String,value:Number,keyName:String},data(){return{enable:!1,defaultSpeed:1e5}},computed:{showCheckbox:{get(){return this.value>=0},set(e){e?this.onChange(this.defaultSpeed):this.onChange(-1)}},speed:{get(){const e=Math.floor(this.value/1e3);return e<0?0:e},set(e){this.onChange(1e3*e)}}},methods:{positiveNumber(e){const t=this.$t("limit_input_error");return isNaN(e)?t:e>0||t},onChange(e){if(""===e)return this.$emit("change",this.keyName,this.defaultSpeed);this.$emit("change",this.keyName,e)},onBlur(){!0!==this.positiveNumber(this.value)&&this.$emit("change",this.keyName,this.defaultSpeed)}}},$=P,B=a("7498"),M=Object(S["a"])($,D,q,!1,null,null,null),R=M.exports;N()(M,"components",{QCheckbox:B["a"],QInput:_["a"]});var V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("q-slider",{staticClass:"setting-slider",attrs:{min:e.min,max:e.max,step:e.step,"track-size":"0.6rem","thumb-color":"primary","track-color":"page","selection-color":"primary",markers:"","marker-labels":"",label:"","label-value":e.label},scopedSlots:e._u([{key:"marker-label-group",fn:function(t){var n=t.markerList;return e._l(n,(function(t){return a("div",{key:t.index,staticClass:"cursor-pointer",class:t.classes,style:t.style,on:{click:function(a){return e.setValue(t.value)}}},[e._v(e._s(t.value)+e._s(e.unit))])}))}}]),model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}})],1)},j=[],E={props:{value:Number,min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:5},keyName:String,unit:{type:String,default:"%"},rate:{type:Number,default:100},label_unit:{type:String,default:"%"}},computed:{slide:{get(){return Math.floor(this.value*this.rate)},set(e){this.setValue(e)}},label(){return this.slide+this.label_unit}},methods:{setValue(e){this.$emit("change",this.keyName,e/this.rate)}}},L=E,Q=(a("9980"),a("f9b5")),U=Object(S["a"])(L,V,j,!1,null,"1e1f95ec",null),T=U.exports;N()(U,"components",{QSlider:Q["a"]});var A=a("f0e6"),I=a("5584"),F=a("d710"),H=a.n(F),W=a("d558"),J=function(e,t,a,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,a,o):i(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o},z=function(e,t,a,n){function i(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,s){function o(e){try{r(n.next(e))}catch(t){s(t)}}function l(e){try{r(n["throw"](e))}catch(t){s(t)}}function r(e){e.done?a(e.value):i(e.value).then(o,l)}r((n=n.apply(e,t||[])).next())}))};const G=a("d310").isElectron(),K=H.a.fileName;let X=class extends o["a"]{constructor(){super(...arguments),this.isWindows=!!l["b"].is.win,this.isElectron=G,this.isCapacitor=Object(W["a"])(),this.playerlist=[]}mounted(){G&&(setTimeout((()=>{this.updatePlayerOptions()}),1e3),console.log(this.$route)),this.$route.fullPath.includes("highlight")&&setTimeout((()=>{const e=this.$route.query.highlight;if(!e||"string"!==typeof e)return;const t=document.getElementById(e);console.log("high light target",e,t),t&&(t.scrollIntoView({behavior:"smooth",block:"center"}),t.classList.add("highlight"),setTimeout((()=>{t.classList.remove("highlight")}),2500))}),500)}get darkmodeOptions(){return[{label:this.t("darkModeSystem"),value:r["a"].system},{label:this.t("darkModeLight"),value:r["a"].light},{label:this.t("darkModeDark"),value:r["a"].dark}]}get videoPlayerOptions(){if(this.playerlist)for(let e=0;e<this.playerlist.length;++e)"VLC Player"===this.playerlist[e].value&&(this.playerlist[e].label="VLC "+this.t("player")),"Media Player"===this.playerlist[e].value&&(this.playerlist[e].label=this.t("media_player"));return[{label:K,value:K},{label:this.t("system_default"),value:"System Default"},...this.playerlist]}get libraryRateOptions(){return[{label:this.t("rate_g"),value:"G",caption:this.t("rate_g_desc")},{label:this.t("rate_pg"),value:"PG",caption:this.t("rate_pg_desc")},{label:this.t("rate_pg_13"),value:"PG-13",caption:this.t("rate_pg_13_desc")},{label:this.t("rate_r"),value:"R",caption:this.t("rate_r_desc")},{label:this.t("rate_nc_17"),value:"NC-17",caption:this.t("rate_nc_17_desc")}]}get libraryRate(){return this.settings.libraryRate}set libraryRate(e){this.storeChange("libraryRate",e)}get defaultVideoPlayer(){if("System Default"===this.settings.defaultVideoPlayer)return this.t("system_default");if("VLC Player"===this.settings.defaultVideoPlayer)return"VLC "+this.t("player");if("Media Player"===this.settings.defaultVideoPlayer)return this.t("media_player");if(this.settings.defaultVideoPlayer===H.a.name){if(I["a"].dispatch("updateSettings",{defaultVideoPlayer:K}),G){const{ipcRenderer:e}=a("b052");e.send("set_settings",{defaultVideoPlayer:K})}return K}return this.settings.defaultVideoPlayer}set defaultVideoPlayer(e){this.storeChange("defaultVideoPlayer",e)}updatePlayerOptions(){return z(this,void 0,void 0,(function*(){const e=yield Object(c["a"])();e&&(this.playerlist=e,console.log("updatePlayerOptions()",e))}))}get checkboxes(){return{autoStart:{label:this.t("autoStart"),value:this.settings.autoLaunch,keyName:"autoLaunch"},autoStartUnfinished:{label:this.t("autoStartUnfinished"),value:this.settings.autoStartUnfinished,keyName:"autoStartUnfinished"},downloadWithCellular:{label:this.t("download_with_cellular"),value:this.settings.downloadWithCellular,keyName:"downloadWithCellular"},autoUpload:{label:this.t("enable_auto_upload"),value:this.settings.autoUpload,keyName:"autoUpload"},unlimitUpload:{label:this.t("unlimit_upload_amount"),value:this.settings.unlimitUploadAmount,keyName:"unlimitUploadAmount",tooltip:this.t("unlimit_upload_warning")},saveMetadata:{label:this.t("saveLinkSeed"),value:this.settings.saveLinkSeed,keyName:"saveLinkSeed"},defaultDeleteFiles:{label:this.t("default_delete_files"),value:this.settings.defaultDeleteFiles,keyName:"defaultDeleteFiles"},jumpToDownload:{label:this.t("automaticSkip"),value:this.settings.autoJumpToDownload,keyName:"autoJumpToDownload"},notification:{label:this.t("afterNotification"),value:this.settings.notifyAfterDownloaded,keyName:"notifyAfterDownloaded"},libraryShowExplore:{label:this.$t("library_show_explore"),value:(()=>{const e=this.settings.libraryShowExplore;return"remote"===e?this.d$cfg.library.show_explore:e})(),keyName:"libraryShowExplore"}}}get minDiskSpace(){return{label:this.t("pause_if_less_space"),value:Math.floor(this.settings.minDiskSpace/1e6),keyName:"minDiskSpace",rules:[e=>!(isNaN(e)||e<10||e>1e6)||this.t("range_error",["10MB","1TB"])],min:10}}onMinDiskSpaceChange(e,t){return this.storeChange("minDiskSpace",1e6*t)}get taskManage(){const e=e=>!(isNaN(e)||e<=0||e>20)||this.t("range_error",[1,20]);return{maxDownloadNum:{label:this.t("maximumDownloadNum"),value:this.settings.maximumDownloadNum,keyName:"maximumDownloadNum",rules:[e]},maxConns:{label:this.t("maximumConnectionsNum"),value:this.settings.maximumConnectionsNum,keyName:"maximumConnectionsNum",rules:[e]}}}get payedUserShareRate(){return this.settings.payedUserShareRate}set payedUserShareRate(e){this.storeChange("payedUserShareRate",e)}};X=J([Object(s["a"])({components:{SettingBlock:u["a"],SettingSelect:d["a"],SettingCheckbox:g["a"],SettingDirectory:O,SettingSpeed:R,SettingSlider:T,SettingNumber:A["a"],SettingFooter:h["a"]}})],X);var Y=X,Z=Y,ee=(a("1ad3"),a("9b72")),te=a("4101"),ae=Object(S["a"])(Z,n,i,!1,null,"12e707cd",null);t["default"]=ae.exports;N()(ae,"components",{QPage:ee["a"],QColor:te["a"]})},b6d0:function(e,t,a){"use strict";var n=a("93ec"),i=a("ff9b"),s=a("5584"),o=a("07e8"),l=a("908d"),r=a("f680"),c=a("8750"),u=a("1926"),h=a("d7df"),d=a("d310"),g=a("3387"),m=a("d884"),p=a("1b02"),b=function(e,t,a,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,a,o):i(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o},f=function(e,t,a,n){function i(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,s){function o(e){try{r(n.next(e))}catch(t){s(t)}}function l(e){try{r(n["throw"](e))}catch(t){s(t)}}function r(e){e.done?a(e.value):i(e.value).then(o,l)}r((n=n.apply(e,t||[])).next())}))};const y=!!l["b"].is.electron;let v;y&&(v=a("b052").ipcRenderer);const k={data(){return{removeOnAuthStateChangedListener:null}},created(){console.log("SignOutHandlerMixinSignOutHandlerMixin"),this.removeOnAuthStateChangedListener=this.$amplify.addOnAuthStateChangedListener((e=>{"signedOut"===e&&this.onDiscard()}))},beforeDestroy(){this.removeOnAuthStateChangedListener&&this.removeOnAuthStateChangedListener()}};let S=class extends i["a"]{constructor(){super(...arguments),this.loading=!1,this.changes=new Map,this.settings={},this.languages=m["b"],this.changed=!1,this.onSignOutHandler=()=>{}}get language(){return this.settings.language}set language(e){u["b"].locale=e,y&&v.send("change-app-i18n",e),this.storeChange("language",e)}get darkMode(){return this.settings.darkMode}set darkMode(e){o["a"].set(e===p["a"].system?"auto":e===p["a"].dark),this.storeChange("darkMode",e)}t(e,...t){return u["b"].t(e,...t)}requestSaveBeforeSignout(){return f(this,void 0,void 0,(function*(){this.changes.size?c["a"].create({title:this.t("change_not_save"),message:this.t("account_request_save_settings"),ok:{textColor:"primary",color:"primary",flat:!0,label:this.t("submit")},cancel:{textColor:"unset",color:"unset",flat:!0,label:this.t("account_cancel")}}).onOk((()=>{this.onSubmit().then((()=>{d["Bus"].$emit("settings-saved",!0)}))})).onCancel((()=>{d["Bus"].$emit("settings-saved",!1)})):d["Bus"].$emit("settings-saved",!0)}))}resetChange(){this.changes.clear(),this.changed=!1,this.loading=!1}storeChange(e,t){console.tag("Setting",e).log(t),this.changes.set(e,t),this.$set(this.settings,e,t),this.changed=!0}notify(e){r["a"].create({message:e,position:"bottom-right",type:"positive",timeout:2e3})}syncSetting(){return f(this,void 0,void 0,(function*(){const e=yield s["a"].dispatch("fetchSettings"),t=this.language;this.settings=Object(g["cloneDeep"])(e);const a=e.darkMode===p["a"].system;return o["a"].set(a?"auto":e.darkMode===p["a"].dark),t!==e.language&&(this.language=e.language),e}))}onSubmit(){return f(this,void 0,void 0,(function*(){if(!this.changes.size)return this.resetChange();this.loading=!0;const e=Object.fromEntries(this.changes);e.maximumDownloadNum&&h["a"].emit("update_torrent_settings",{maximumDownloadNum:e.maximumDownloadNum}),yield s["a"].dispatch("set",e),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_set_successfully"))}))}onDiscard(){return f(this,void 0,void 0,(function*(){this.changed&&(yield this.syncSetting(),this.resetChange())}))}onReset(){return f(this,void 0,void 0,(function*(){c["a"].create({title:this.t("reset"),message:this.t("reset_all_settings"),ok:{textColor:"red",color:"unset",flat:!0,label:this.t("reset")},cancel:{textColor:"unset",color:"unset",flat:!0,label:this.t("not_now")}}).onOk((()=>f(this,void 0,void 0,(function*(){this.loading=!0,yield s["a"].dispatch("resetSettings"),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_resetted"))}))))}))}created(){this.settings=Object(g["cloneDeep"])(s["a"].getters.settings),this.onSignOutHandler=this.requestSaveBeforeSignout.bind(this),d["Bus"].$on("request-save-settings",this.onSignOutHandler)}beforeDestroy(){return d["Bus"].$off("request-save-settings",this.onSignOutHandler),this.onDiscard()}beforeRouteLeave(e,t,a){if(!this.changed)return a();c["a"].create({title:this.t("change_not_save"),message:this.t("discard_all_changes"),ok:this.t("stay_in_page"),cancel:this.t("discard"),persistent:!0}).onOk((()=>a(!1))).onCancel((()=>a()))}};S=b([Object(n["a"])({mixins:[k]})],S),t["a"]=S},de2f:function(e,t,a){},edc32:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-footer",{attrs:{bordered:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.disable,expression:"!disable"}],staticClass:"row q-pa-sm setting-footer"},[a("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"primary",color:"primary",label:e.$t("submit")},on:{click:e.submit}}),a("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"general",color:"general",label:e.$t("discard")},on:{click:e.discard}}),a("q-space"),a("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"negative",color:"negative",label:e.$t("reset")},on:{click:e.reset}})],1)])},i=[],s={props:{disable:Boolean,loading:Boolean},methods:{submit(){this.$emit("submit")},discard(){this.$emit("discard")},reset(){this.$emit("reset")}}},o=s,l=(a("427d"),a("2b5f")),r=a("0daf"),c=a("1043"),u=a("990e"),h=a("09a4"),d=a.n(h),g=Object(l["a"])(o,n,i,!1,null,"faac6c86",null);t["a"]=g.exports;d()(g,"components",{QFooter:r["a"],QBtn:c["a"],QSpace:u["a"]})},f0e6:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 row"},[a("q-input",{staticClass:"q-mt-sm setting-number-input",attrs:{type:"number",dense:"",outlined:"",hint:e.label,rules:e.rules},on:{blur:e.onBlur},nativeOn:{paste:function(e){e.stopPropagation()}},scopedSlots:e._u([e.dice?{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"casino"},on:{click:e.setRandom}},[a("q-tooltip",[e._v(e._s(e.$t("random")))])],1)]},proxy:!0}:null],null,!0),model:{value:e.number,callback:function(t){e.number=e._n(t)},expression:"number"}})],1)},i=[],s=(a("de6c"),{props:{value:Number,keyName:String,label:String,dice:{type:Array,required:!1},rules:{type:Array,default:()=>[]},min:{type:Number,default:1}},computed:{number:{get(){return this.value},set(e){this.onChange(e)}},minValue(){return Array.isArray(this.dice)?this.dice[0]:this.min}},methods:{isValid(e){for(const t of this.rules)if("function"===typeof t){const a=t(e);if(!0!==a)return!1}return!0},onChange(e){if(""===e)return this.$emit("change",this.keyName,this.minValue);this.$emit("change",this.keyName,e)},onBlur(){this.isValid(this.value)||this.$emit("change",this.keyName,this.minValue)},setRandom(){if(!this.dice||!this.dice.length)return;const[e,t]=this.dice;return this.onChange(Math.floor(Math.random()*(t-e)+e))}}}),o=s,l=(a("6065"),a("2b5f")),r=a("0e45"),c=a("f106"),u=a("cf25"),h=a("09a4"),d=a.n(h),g=Object(l["a"])(o,n,i,!1,null,"67993ab0",null);t["a"]=g.exports;d()(g,"components",{QInput:r["a"],QIcon:c["a"],QTooltip:u["a"]})},fef1:function(e,t,a){}}]);