sap.ui.define(["sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/animations/slideDown","sap/ui/webc/common/thirdparty/base/animations/slideUp","sap/ui/webc/common/thirdparty/base/Keys","sap/ui/webc/common/thirdparty/base/types/AnimationMode","sap/ui/webc/common/thirdparty/base/config/AnimationMode","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/icons/slim-arrow-right","./Button","./Icon","./types/TitleLevel","./types/PanelAccessibleRole","./generated/templates/PanelTemplate.lit","./generated/i18n/i18n-defaults","./generated/themes/Panel.css"],function(e,t,n,i,a,s,r,o,l,d,u,h,c,g,p,m){"use strict";function f(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var b=f(e);var y=f(t);var _=f(n);var x=f(i);var B=f(s);const A={tag:"ui5-panel",languageAware:true,managedSlots:true,fastNavigation:true,slots:{header:{type:HTMLElement},default:{type:HTMLElement}},properties:{headerText:{type:String},fixed:{type:Boolean},collapsed:{type:Boolean},noAnimation:{type:Boolean},accessibleRole:{type:c,defaultValue:c.Form},headerLevel:{type:h,defaultValue:h.H2},accessibleName:{type:String},useAccessibleNameForToggleButton:{type:Boolean},_hasHeader:{type:Boolean},_header:{type:Object},_contentExpanded:{type:Boolean,noAttribute:true},_animationRunning:{type:Boolean,noAttribute:true}},events:{toggle:{}}};class T extends b{static get metadata(){return A}static get render(){return y}static get template(){return g}static get styles(){return m}constructor(){super();this._header={}}onBeforeRendering(){if(!this._animationRunning){this._contentExpanded=!this.collapsed}this._hasHeader=!!this.header.length}shouldToggle(e){const t=this.header.length;if(t){return e.classList.contains("ui5-panel-header-button")}return true}shouldNotAnimate(){return this.noAnimation||r.getAnimationMode()===B.None}_headerClick(e){if(!this.shouldToggle(e.target)){return}this._toggleOpen()}_toggleButtonClick(e){if(e.x===0&&e.y===0){e.stopImmediatePropagation()}}_headerKeyDown(e){if(!this.shouldToggle(e.target)){return}if(a.isEnter(e)){this._toggleOpen()}if(a.isSpace(e)){e.preventDefault()}}_headerKeyUp(e){if(!this.shouldToggle(e.target)){return}if(a.isSpace(e)){this._toggleOpen()}}_toggleOpen(){if(this.fixed){return}this.collapsed=!this.collapsed;if(this.shouldNotAnimate()){this.fireEvent("toggle");return}this._animationRunning=true;const e=this.getDomRef().querySelectorAll(".ui5-panel-content");const t=[];[].forEach.call(e,e=>{if(this.collapsed){t.push(x({element:e}).promise())}else{t.push(_({element:e}).promise())}});Promise.all(t).then(e=>{this._animationRunning=false;this._contentExpanded=!this.collapsed;this.fireEvent("toggle")})}_headerOnTarget(e){return e.classList.contains("sapMPanelWrappingDiv")}get classes(){return{headerBtn:{"ui5-panel-header-button-animated":!this.shouldNotAnimate()}}}get toggleButtonTitle(){return T.i18nBundle.getText(p.PANEL_ICON)}get expanded(){return!this.collapsed}get accRole(){return this.accessibleRole.toLowerCase()}get effectiveAccessibleName(){return typeof this.accessibleName==="string"&&this.accessibleName.length?this.accessibleName:undefined}get accInfo(){return{button:{accessibilityAttributes:{expanded:this.expanded,controls:`${this._id}-content`},title:this.toggleButtonTitle,ariaLabelButton:!this.nonFocusableButton&&this.useAccessibleNameForToggleButton?this.effectiveAccessibleName:undefined},ariaExpanded:this.nonFixedInternalHeader?this.expanded:undefined,ariaControls:this.nonFixedInternalHeader?`${this._id}-content`:undefined,ariaLabelledby:this.nonFocusableButton?this.ariaLabelledbyReference:undefined,role:this.nonFixedInternalHeader?"button":undefined}}get ariaLabelledbyReference(){return this.nonFocusableButton&&this.headerText?`${this._id}-header-title`:undefined}get header(){return this.getDomRef().querySelector(`#${this._id}-header-title`)}get headerAriaLevel(){return this.headerLevel.slice(1)}get headerTabIndex(){return this.header.length||this.fixed?"-1":"0"}get nonFixedInternalHeader(){return!this._hasHeader&&!this.fixed}get nonFocusableButton(){return!this.header.length}get shouldRenderH1(){return!this.header.length&&(this.headerText||!this.fixed)}get styles(){return{content:{display:this._contentExpanded?"block":"none"}}}static get dependencies(){return[d,u]}static async onDefine(){T.i18nBundle=await o.getI18nBundle("@ui5/webcomponents")}}T.define();return T});