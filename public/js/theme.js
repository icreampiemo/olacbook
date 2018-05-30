/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
 !function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&void 0!==n.message?n.message:void 0;if(n=e.extend({},e.blockUI.defaults,n||{}),!n.ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=void 0===y?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,v={};e(t).data("blockUI.history",v),v.el=m,v.parent=m.parentNode,v.display=m.style.display,v.position=m.style.position,v.parent&&v.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var g,I,w,U,x=n.baseZ;g=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(t,"borderTopWidth"),T=d(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",2>e)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i=n.css&&n.css.top?parseInt(n.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+i+') + "px"';o.setExpression("top",s)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&g.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):a(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,a=e(t),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0===--s&&n(r,d,o,t)})):n(r,d,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(a,n,s):e(document).unbind(a,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),a.parents("div."+s.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[e===!0?b.length-1:0];t&&t.focus()}}function a(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-d(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-d(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function d(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode||0,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),void 0===n&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function($){$.fn.extend({slimScroll:function(options){var defaults={width:'auto',height:'250px',size:'7px',color:'#000',position:'right',distance:'1px',start:'top',opacity:.4,alwaysVisible:false,disableFadeOut:false,railVisible:false,railColor:'#333',railOpacity:.2,railDraggable:true,railClass:'slimScrollRail',barClass:'slimScrollBar',wrapperClass:'slimScrollDiv',allowPageScroll:false,wheelStep:20,touchScrollStep:200,borderRadius:'7px',railBorderRadius:'7px'};var o=$.extend(defaults,options);this.each(function(){var isOverPanel,isOverBar,isDragg,queueHide,touchDif,barHeight,percentScroll,lastScroll,divS='<div></div>',minBarHeight=30,releaseScroll=false;var me=$(this);if(me.parent().hasClass(o.wrapperClass))
{var offset=me.scrollTop();bar=me.siblings('.'+o.barClass);rail=me.siblings('.'+o.railClass);getBarHeight();if($.isPlainObject(options))
{if('height'in options&&options.height=='auto'){me.parent().css('height','auto');me.css('height','auto');var height=me.parent().parent().height();me.parent().css('height',height);me.css('height',height);}else if('height'in options){var h=options.height;me.parent().css('height',h);me.css('height',h);}
if('scrollTo'in options)
{offset=parseInt(o.scrollTo);}
else if('scrollBy'in options)
{offset+=parseInt(o.scrollBy);}
else if('destroy'in options)
{bar.remove();rail.remove();me.unwrap();return;}
scrollContent(offset,false,true);}
return;}
else if($.isPlainObject(options))
{if('destroy'in options)
{return;}}
o.height=(o.height=='auto')?me.parent().height():o.height;var wrapper=$(divS).addClass(o.wrapperClass).css({position:'relative',overflow:'hidden',width:o.width,height:o.height-20});me.css({overflow:'hidden',width:o.width,height:o.height-20});var rail=$(divS).addClass(o.railClass).css({width:o.size,height:'100%',position:'absolute',top:0,display:(o.alwaysVisible&&o.railVisible)?'block':'none','border-radius':o.railBorderRadius,background:o.railColor,opacity:o.railOpacity,zIndex:90});var bar=$(divS).addClass(o.barClass).css({background:o.color,width:o.size,position:'absolute',top:0,opacity:o.opacity,display:o.alwaysVisible?'block':'none','border-radius':o.borderRadius,BorderRadius:o.borderRadius,MozBorderRadius:o.borderRadius,WebkitBorderRadius:o.borderRadius,zIndex:99});var posCss=(o.position=='right')?{right:o.distance}:{left:o.distance};rail.css(posCss);bar.css(posCss);me.wrap(wrapper);me.parent().append(bar);me.parent().append(rail);if(o.railDraggable){bar.bind("mousedown",function(e){var $doc=$(document);isDragg=true;t=parseFloat(bar.css('top'));pageY=e.pageY;$doc.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY;bar.css('top',currTop);scrollContent(0,bar.position().top,false);});$doc.bind("mouseup.slimscroll",function(e){isDragg=false;hideBar();$doc.unbind('.slimscroll');});return false;}).bind("selectstart.slimscroll",function(e){e.stopPropagation();e.preventDefault();return false;});}
rail.hover(function(){showBar();},function(){hideBar();});bar.hover(function(){isOverBar=true;},function(){isOverBar=false;});me.hover(function(){isOverPanel=true;showBar();hideBar();},function(){isOverPanel=false;hideBar();});me.bind('touchstart',function(e,b){if(e.originalEvent.touches.length)
{touchDif=e.originalEvent.touches[0].pageY;}});me.bind('touchmove',function(e){if(!releaseScroll)
{e.originalEvent.preventDefault();}
if(e.originalEvent.touches.length)
{var diff=(touchDif-e.originalEvent.touches[0].pageY)/o.touchScrollStep;scrollContent(diff,true);touchDif=e.originalEvent.touches[0].pageY;}});getBarHeight();if(o.start==='bottom')
{bar.css({top:me.outerHeight()-bar.outerHeight()});scrollContent(0,true);}
else if(o.start!=='top')
{scrollContent($(o.start).position().top,null,true);if(!o.alwaysVisible){bar.hide();}}
attachWheel(this);function _onWheel(e)
{if(!isOverPanel){return;}
var e=e||window.event;var delta=0;if(e.wheelDelta){delta=-e.wheelDelta/120;}
if(e.detail){delta=e.detail/3;}
var target=e.target||e.srcTarget||e.srcElement;if($(target).closest('.'+o.wrapperClass).is(me.parent())){scrollContent(delta,true);}
if(e.preventDefault&&!releaseScroll){e.preventDefault();}
if(!releaseScroll){e.returnValue=false;}}
function scrollContent(y,isWheel,isJump)
{releaseScroll=false;var delta=y;var maxTop=me.outerHeight()-bar.outerHeight();if(isWheel)
{delta=parseInt(bar.css('top'))+y*parseInt(o.wheelStep)/100*bar.outerHeight();delta=Math.min(Math.max(delta,0),maxTop);delta=(y>0)?Math.ceil(delta):Math.floor(delta);bar.css({top:delta+'px'});}
percentScroll=parseInt(bar.css('top'))/(me.outerHeight()-bar.outerHeight());delta=percentScroll*(me[0].scrollHeight-me.outerHeight());if(isJump)
{delta=y;var offsetTop=delta/me[0].scrollHeight*me.outerHeight();offsetTop=Math.min(Math.max(offsetTop,0),maxTop);bar.css({top:offsetTop+'px'});}
me.scrollTop(delta);me.trigger('slimscrolling',~~delta);showBar();hideBar();}
function attachWheel(target)
{if(window.addEventListener)
{target.addEventListener('DOMMouseScroll',_onWheel,false);target.addEventListener('mousewheel',_onWheel,false);}
else
{document.attachEvent("onmousewheel",_onWheel)}}
function getBarHeight()
{barHeight=Math.max((me.outerHeight()/me[0].scrollHeight)*me.outerHeight(),minBarHeight);bar.css({height:barHeight+'px'});var display=barHeight==me.outerHeight()?'none':'block';bar.css({display:display});}
function showBar()
{getBarHeight();clearTimeout(queueHide);if(percentScroll==~~percentScroll)
{releaseScroll=o.allowPageScroll;if(lastScroll!=percentScroll)
{var msg=(~~percentScroll==0)?'top':'bottom';me.trigger('slimscroll',msg);}}
else
{releaseScroll=false;}
lastScroll=percentScroll;if(barHeight>=me.outerHeight()){releaseScroll=true;return;}
bar.stop(true,true).fadeIn('fast');if(o.railVisible){rail.stop(true,true).fadeIn('fast');}}
function hideBar()
{if(!o.alwaysVisible)
{queueHide=setTimeout(function(){if(!(o.disableFadeOut&&isOverPanel)&&!isOverBar&&!isDragg)
{bar.fadeOut('slow');rail.fadeOut('slow');}},1000);}}});return this;}});$.fn.extend({slimscroll:$.fn.slimScroll});})(jQuery);
/**
 *  Document   : app.js
 *  Author     : redstar
 *  Description: Core script to handle the entire theme and core functions
 *
 **/
var App = function() {

    // IE mode
    var isIE8 = false;
    var isIE9 = false;
    var isIE10 = false;

    var resizeHandlers = [];

    var assetsPath = '';

    var globalImgPath = 'img/';

    var globalPluginsPath = 'global/plugins/';

    var globalCssPath = 'css/';

    /************* Setting for IE ****************/
    var handleInit = function() {


        isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
        isIE9 = !!navigator.userAgent.match(/MSIE 9.0/);
        isIE10 = !!navigator.userAgent.match(/MSIE 10.0/);

        if (isIE10) {
            $('html').addClass('ie10'); // detect IE10 version
        }

        if (isIE10 || isIE9 || isIE8) {
            $('html').addClass('ie'); // detect IE10 version
        }
    };
    
    /*************** Change theme color *************/
    var handleColorSetting = function() {

    	jQuery( ".control-sidebar-btn" ).click(function() {
    		
    		jQuery( ".quick-setting" ).toggle( "slide");
    		
    	});

    };

    /************* Handle theme layout ****************/
    var handleTheme = function() {

        var panel = $('.chatpane');

        if ($('body').hasClass('page-boxed') === false) {
            $('.layout-option', panel).val("fluid");
        }

        $('.sidebar-option', panel).val("default");
        $('.page-header-option', panel).val("fixed");
        $('.page-footer-option', panel).val("default");
        if ($('.sidebar-pos-option').attr("disabled") === false) {
            $('.sidebar-pos-option', panel).val('left');
        }
        var lastSelectedLayout = '';

        var setLayout = function() {

            var layoutOption = $('.layout-option', panel).val();
            var sidebarOption = $('.sidebar-option', panel).val();
            var headerOption = $('.page-header-option', panel).val();
            var footerOption = $('.page-footer-option', panel).val();
            var sidebarPosOption = $('.sidebar-pos-option', panel).val();
            var sidebarStyleOption = $('.sidebar-style-option', panel).val();
            var sidebarMenuOption = $('.sidebar-menu-option', panel).val();
            var headerTopDropdownStyle = $('.page-header-top-dropdown-style-option', panel).val();

            if (sidebarOption == "fixed" && headerOption == "default") {
                alert('Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.');
                $('.page-header-option', panel).val("fixed");
                $('.sidebar-option', panel).val("fixed");
                sidebarOption = 'fixed';
                headerOption = 'fixed';
            }

            resetLayout(); // reset layout to default state

            if (layoutOption === "boxed") {
                $("body").addClass("page-boxed");

                // set header
                $('.page-header > .page-header-inner').addClass("container");
                var cont = $('body > .clearfix').after('<div class="container"></div>');

                // set content
                $('.page-container').appendTo('body > .container');

                // set footer
                if (footerOption === 'fixed') {
                    $('.page-footer').html('<div class="container">' + $('.page-footer').html() + '</div>');
                } else {
                    $('.page-footer').appendTo('body > .container');
                }
            }

            if (lastSelectedLayout != layoutOption) {
                //layout changed, run responsive handler: 
                App.runResizeHandlers();
            }
            lastSelectedLayout = layoutOption;

            /************ header ******************/
            if (headerOption === 'fixed') {
                $("body").addClass("page-header-fixed");
                $(".page-header").removeClass("navbar-static-top").addClass("navbar-fixed-top");
            } else {
                $("body").removeClass("page-header-fixed");
                $(".page-header").removeClass("navbar-fixed-top").addClass("navbar-static-top");
            }

            /************ sidebar *****************/
            if ($('body').hasClass('page-full-width') === false) {
                if (sidebarOption === 'fixed') {
                    $("body").addClass("sidemenu-container-fixed");
                    $("sidemenu").addClass("sidemenu-fixed");
                    $("sidemenu").removeClass("page-sidebar-menu-default");
                    Layout.initFixedSidebarHoverEffect();
                } else {
                    $("body").removeClass("sidemenu-container-fixed");
                    $("page-sidebar-menu").addClass("page-sidebar-menu-default");
                    $("page-sidebar-menu").removeClass("sidemenu-default");
                    $('.sidemenu').unbind('mouseenter').unbind('mouseleave');
                }
            }

            /********* top dropdown style ************/
            if (headerTopDropdownStyle === 'dark') {
                $(".top-menu > .navbar-nav > li.dropdown").addClass("dropdown-dark");
            } else {
                $(".top-menu > .navbar-nav > li.dropdown").removeClass("dropdown-dark");
            }

            /************* footer ****************/ 
            if (footerOption === 'fixed') {
                $("body").addClass("page-footer-fixed");
            } else {
                $("body").removeClass("page-footer-fixed");
            }

            /*********** sidebar style ***************/
            if (sidebarStyleOption === 'light') {
                $(".page-sidebar-menu").addClass("page-sidebar-menu-light");
            } else {
                $(".page-sidebar-menu").removeClass("page-sidebar-menu-light");
            }

            /********* sidebar menu ***********************/ 
            if (sidebarMenuOption === 'hover') {
                if (sidebarOption == 'fixed') {
                    $('.sidebar-menu-option', panel).val("accordion");
                    alert("Hover Sidebar Menu is not compatible with Fixed Sidebar Mode. Select Default Sidebar Mode Instead.");
                } else {
                    $(".sidemenu").addClass("sidemenu-hover-submenu");
                }
            } else {
                $(".sidemenu").removeClass("sidemenu-hover-submenu");
            }

            /**************** sidebar left right position setting **************/
            if (sidebarPosOption === 'right') {
                $("body").addClass("sidemenu-container-reversed");
                $('#frontend-link').tooltip('destroy').tooltip({
                    placement: 'left'
                });
            } else {
                $("body").removeClass("sidemenu-container-reversed");
                $('#frontend-link').tooltip('destroy').tooltip({
                    placement: 'right'
                });
            }

            Layout.fixContentHeight(); // fix content height            
            Layout.initFixedSidebar(); // reinitialize fixed sidebar
        };

        $(document).on('click', '.toggler', panel, function() {
            $('.toggler').hide();
            $('.toggler-close').show();
            $('.chatpane > .theme-options').show();
        });

        $(document).on('click', '.toggler-close', panel, function() {
            $('.toggler').show();
            $('.toggler-close').hide();
            $('.chatpane > .theme-options').hide();
        });

        /*************** spinner  button ******************/
        $(document).on('click', '.spinner button', function() {
            var btn = $(this);
            var input = btn.closest('.spinner').find('input');
            var step = 1;
            if (input.attr('step') != undefined) {
                step = parseInt(input.attr('step'),10);
            }
            if (btn.attr('data-dir') == 'up') {
                if (input.attr('max') == undefined || parseInt(input.val(),10) < parseInt(input.attr('max'),10)) {
                    input.val(parseInt(input.val(), 10) + step);
                } else {
                    btn.next("disabled", true);
                }
            } else {
                if (input.attr('min') == undefined || parseInt(input.val(),10) > parseInt(input.attr('min'),10)) {
                    input.val(parseInt(input.val(), 10) - step);
                } else {
                    btn.prev("disabled", true);
                }
            }
        });

        /*************** TO DO **********************/
        $(document).on('click', '.todo-check label', function() {
            $(this).parents('li').children('.todo-title').toggleClass('line-through');
        });
        $(document).on('click', '.todo-remove', function() {
            $(this).closest("li").remove();
            return false;
        });

        $(document).on('click', '.panel .tools .fa-times', function() {
            $(this).parents(".panel").parent().remove();
        });
        $('.tooltips').tooltip();

        // clickable row for email
        $(document).on('click', '.clickable-row', function() {
            window.document.location = $(this).data("link");
        });


        /************* collapse button in panel***************8*/
        $(document).on('click', '.card .tools .t-collapse', function() {
            var el = $(this).parents(".card").children(".card-body");
            if ($(this).hasClass("fa-chevron-down")) {
                $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
                el.slideUp(200);
            } else {
                $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
                el.slideDown(200);
            }
        });

        /**************** close button in panel *****************/
        $(document).on('click', '.card .tools .t-close', function() {
            $(this).parents(".card").parent().remove();
        });

        /****************** refresh button in panel *****************/
        $('.box-refresh').on('click', function(br) {
            br.preventDefault();
            $("<div class='refresh-block'><span class='refresh-loader'><i class='fa fa-spinner fa-spin'></i></span></div>").appendTo($(this).parents('.tools').parents('.card-head').parents('.card'));
            setTimeout(function() {
                $('.refresh-block').remove();
            }, 1000);
        });

        /***************** set default theme options **************************/

        if ($("body").hasClass("page-boxed")) {
            $('.layout-option', panel).val("boxed");
        }

        if ($("body").hasClass("sidemenu-container-fixed")) {
            $('.sidebar-option', panel).val("fixed");
        }

        if ($("body").hasClass("page-header-fixed")) {
            $('.page-header-option', panel).val("fixed");
        }

        if ($("body").hasClass("page-footer-fixed")) {
            $('.page-footer-option', panel).val("fixed");
        }

        if ($("body").hasClass("sidemenu-container-reversed")) {
            $('.sidebar-pos-option', panel).val("right");
        }

        if ($(".page-sidebar-menu").hasClass("page-sidebar-menu-light")) {
            $('.sidebar-style-option', panel).val("light");
        }

        if ($(".page-sidebar-menu").hasClass("page-sidebar-menu-hover-submenu")) {
            $('.sidebar-menu-option', panel).val("hover");
        }

        var sidebarOption = $('.sidebar-option', panel).val();
        var headerOption = $('.page-header-option', panel).val();
        var footerOption = $('.page-footer-option', panel).val();
        var sidebarPosOption = $('.sidebar-pos-option', panel).val();
        var sidebarStyleOption = $('.sidebar-style-option', panel).val();
        var sidebarMenuOption = $('.sidebar-menu-option', panel).val();

        $('.layout-option, .page-header-option, .page-header-top-dropdown-style-option, .sidebar-option, .page-footer-option, .sidebar-pos-option, .sidebar-style-option, .sidebar-menu-option', panel).change(setLayout);
    };

    /************ Reset theme layout ********************/
    var resetLayout = function() {
        $("body").
        removeClass("page-boxed").
        removeClass("page-footer-fixed").
        removeClass("sidemenu-container-fixed").
        removeClass("page-header-fixed").
        removeClass("sidemenu-container-reversed");

        $('.page-header > .page-header-inner').removeClass("container");

        if ($('.page-container').parent(".container").length === 1) {
            $('.page-container').insertAfter('body > .clearfix');
        }

        if ($('.page-footer > .container').length === 1) {
            $('.page-footer').html($('.page-footer > .container').html());
        } else if ($('.page-footer').parent(".container").length === 1) {
            $('.page-footer').insertAfter('.page-container');
            $('.scroll-to-top').insertAfter('.page-footer');
        }

        $(".top-menu > .navbar-nav > li.dropdown").removeClass("dropdown-dark");

        $('body > .container').remove();
    };


    // runs callback functions set by App.addResponsiveHandler().
    var _runResizeHandlers = function() {
        // reinitialize other subscribed elements
        for (var i = 0; i < resizeHandlers.length; i++) {
            var each = resizeHandlers[i];
            each.call();
        }
    };

    /********** handle the layout reinitialization on window resize ***********/
    var handleOnResize = function() {
        var resize;
        if (isIE8) {
            var currheight;
            $(window).resize(function() {
                if (currheight == document.documentElement.clientHeight) {
                    return; //quite event since only body resized not window.
                }
                if (resize) {
                    clearTimeout(resize);
                }
                resize = setTimeout(function() {
                    _runResizeHandlers();
                }, 50); // wait 50ms until window resize finishes.                
                currheight = document.documentElement.clientHeight; // store last body client height
            });
        } else {
            $(window).resize(function() {
                if (resize) {
                    clearTimeout(resize);
                }
                resize = setTimeout(function() {
                    _runResizeHandlers();
                }, 50); // wait 50ms until window resize finishes.
            });
        }
    };

    /*************** Handles Bootstrap switches in setting panel  ********/
    var handleBootstrapSwitch = function() {
        if (!$().bootstrapSwitch) {
            return;
        }
        $('.make-switch').bootstrapSwitch();
    };

    /*************** Handles Bootstrap Tabs **********************/
    var handleTabs = function() {
        //activate tab if tab id provided in the URL
        if (encodeURI(location.hash)) {
            var tabid = encodeURI(location.hash.substr(1));
            $('a[href="#' + tabid + '"]').parents('.tab-pane:hidden').each(function() {
                var tabid = $(this).attr("id");
                $('a[href="#' + tabid + '"]').click();
            });
            $('a[href="#' + tabid + '"]').click();
        }

        if ($().tabdrop) {
            $('.tabbable-tabdrop .nav-pills, .tabbable-tabdrop .nav-tabs').tabdrop({
                text: '<i class="fa fa-ellipsis-v"></i>&nbsp;<i class="fa fa-angle-down"></i>'
            });
        }
    };

    /************* Handles Bootstrap Dropdowns  ********************/
    var handleDropdowns = function() {
        /*
          Hold dropdown on click  
        */
        $('body').on('click', '.dropdown-menu.hold-on-click', function(e) {
            e.stopPropagation();
        });
    };

    /************** Handles counterup plugin wrapper ****************/
    var handleCounterup = function() {
        if (!$().counterUp) {
            return;
        }

        $("[data-counter='counterup']").counterUp({
            delay: 10,
            time: 1000
        });
    };

    // Fix input placeholder issue for IE8 and IE9
    var handleFixInputPlaceholderForIE = function() {
        //fix html5 placeholder attribute for ie7 & ie8
        if (isIE8 || isIE9) { // ie8 & ie9
            // this is html5 placeholder fix for inputs, inputs with placeholder-no-fix class will be skipped(e.g: we need this for password fields)
            $('input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)').each(function() {
                var input = $(this);

                if (input.val() === '' && input.attr("placeholder") !== '') {
                    input.addClass("placeholder").val(input.attr('placeholder'));
                }

                input.focus(function() {
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });

                input.blur(function() {
                    if (input.val() === '' || input.val() == input.attr('placeholder')) {
                        input.val(input.attr('placeholder'));
                    }
                });
            });
        }
    };

    // Handle Select2 Dropdowns
    var handleSelect2 = function() {
        if ($().select2) {
            $.fn.select2.defaults.set("theme", "bootstrap");
            $('.select2me').select2({
                placeholder: "Select",
                width: 'auto',
                allowClear: true
            });
        }
    };

    // handle group element heights
    var handleHeight = function() {
        $('[data-auto-height]').each(function() {
            var parent = $(this);
            var items = $('[data-height]', parent);
            var height = 0;
            var mode = parent.attr('data-mode');
			var data_offset = parent.attr('data-offset') ? parent.attr('data-offset') : 0;
            var offset = parseInt(data_offset,10);

            items.each(function() {
                if ($(this).attr('data-height') == "height") {
                    $(this).css('height', '');
                } else {
                    $(this).css('min-height', '');
                }

                var height_ = (mode == 'base-height' ? $(this).outerHeight() : $(this).outerHeight(true));
                if (height_ > height) {
                    height = height_;
                }
            });

            height = height + offset;

            items.each(function() {
                if ($(this).attr('data-height') == "height") {
                    $(this).css('height', height);
                } else {
                    $(this).css('min-height', height);
                }
            });

            if (parent.attr('data-related')) {
                $(parent.attr('data-related')).css('height', parent.height());
            }
        });
    }

    // Handles quick sidebar toggler
    var handleQuickSidebarToggler = function() {
        // quick sidebar toggler
        $(document).on('click', '.dropdown-quick-sidebar-toggler a, .chat-sidebar-toggler, .quick-sidebar-toggler', function(e) {
            $('body').toggleClass('chat-sidebar-open');
        });
    };

    /******* Handle quick Chat sidebar ************/

    var handleQuickSidebarChat = function() {
        var wrapper = $('.chat-sidebar-container');
        var wrapperChat = wrapper.find('.chat-sidebar-chat');

        var initChatSlimScroll = function() {
            var chatUsers = wrapper.find('.chat-sidebar-chat-users');
            var chatUsersHeight;

            chatUsersHeight = wrapper.height() - wrapper.find('.nav-tabs').outerHeight(true);

            // chat user list 
            chatUsers.css("height", wrapper.height() + "px");
            chatUsers.css("overflow", "auto");
            chatUsers.attr("data-height", chatUsersHeight);

            var chatMessages = wrapperChat.find('.chat-sidebar-chat-user-messages');
            var chatMessagesHeight = chatUsersHeight - wrapperChat.find('.chat-sidebar-chat-user-form').outerHeight(true);
            chatMessagesHeight -= wrapperChat.find(".page-quick-sidemenu").outerHeight(true);
            // user chat messages 
            chatMessages.attr("data-height", chatMessagesHeight);
            chatMessages.css("height", chatMessagesHeight);
            chatMessages.css("overflow-y", "auto");
        };

        initChatSlimScroll();
        App.addResizeHandler(initChatSlimScroll); // reinitialize on window resize

        wrapper.find('.chat-sidebar-chat-users .media-list > .media').on('click', function() {
            wrapperChat.addClass("chat-sidebar-content-item-shown");
            $(".chat-sidebar-item").animate({
                scrollTop: $('.chat-sidebar-item').height()
            }, 1000);
        });


        wrapper.find('.chat-sidebar-chat-user .chat-sidebar-back-to-list').on('click', function() {
            wrapperChat.removeClass("chat-sidebar-content-item-shown");
        });


        /******* Manage Chat massage ************/

        var handleChatMessagePost = function(e) {
            e.preventDefault();

            var chatContainer = wrapperChat.find(".chat-sidebar-chat-user-messages");
            var input = wrapperChat.find('.chat-sidebar-chat-user-form .form-control');

            var text = input.val();
            if (text.length === 0) {
                return;
            }

            var preparePost = function(dir, time, name, avatar, message) {
                var tpl = '';
                tpl += '<div class="post ' + dir + '">';
                tpl += '<img class="avatar" alt="" src="' + Layout.getLayoutImgPath() + avatar + '.jpg"/>';
                tpl += '<div class="message">';
                tpl += '<span class="arrow"></span>';
                tpl += '<a href="#" class="name">' + name + '</a>&nbsp;';
                tpl += '<span class="datetime">' + time + '</span>';
                tpl += '<span class="body body-'+dir+'">';
                tpl += message;
                tpl += '</span>';
                tpl += '</div>';
                tpl += '</div>';
                $(".chat-sidebar-chat-user-messages").animate({
                    //scrollTop: $('.chat-sidebar-chat-user-messages').height()
                scrollTop: $(document).height()
                }, 1000);
                return tpl;
            };

            // handle post
            var time = new Date();
            var message = preparePost('out', (time.getHours() + ':' + time.getMinutes()), "Kiran Patel", '../assets/img/dp', text);
            message = $(message);
            chatContainer.append(message);


            input.val("");

            // simulate reply
            setTimeout(function() {
                var time = new Date();
                var message = preparePost('in', (time.getHours() + ':' + time.getMinutes()), "Jacob Ryan", '../assets/img/user/user5', 'Lorem ipsum doloriam nibh...');
                message = $(message);
                chatContainer.append(message);
            }, 2000);
        };

        wrapperChat.find('.chat-sidebar-chat-user-form .btn').on('click', handleChatMessagePost);
        wrapperChat.find('.chat-sidebar-chat-user-form .form-control').on('keypress', function(e) {
            if (e.which == 13) {
                handleChatMessagePost(e);
                return false;
            }
        });
    };

    /********Sidebar slim-menu*********/
    var handleslimscroll_menu = function() {
    	$(".slimscroll-style").slimscroll({
            height: $( window ).height() - 90,
            position: "right",
            size: "5px",
            color: "#9ea5ab",
            wheelStep: 5
        });
    	$(".small-slimscroll-style").slimscroll({
            height: "260px",
            position: "right",
            size: "5px",
            color: "#9ea5ab",
            wheelStep: 5
        });
    };
    
    handleChatScrollbar = function() {
        var t = $(".chat-sidebar-chat"),
            i = function() {
                var i, a = t.find(".chat-sidebar-item"),
                    e = $(".chat-sidebar-chat-users").attr("data-height");
                i = $(".chat-sidebar-chat-users").attr("data-height") - 80 - t.find(".nav-justified > .nav-tabs").outerHeight(), a.attr("data-height", i), a.css("height", e + "px"), a.css("overflow-y", "auto")
            };
        i(), App.addResizeHandler(i)
    };

    // Handles quick sidebar settings
    var handleQuickSidebarSettings = function() {
        var wrapper = $('.chat-sidebar-container');

        var initSettingsSlimScroll = function() {
            var settingsList = wrapper.find('.chat-sidebar-settings-list');
            var settingsListHeight;

            settingsListHeight = wrapper.height() - 80 - wrapper.find('.nav-justified > .nav-tabs').outerHeight();

            // alerts list 
            settingsList.attr("data-height", settingsListHeight);
            settingsList.css("height", wrapper.height() + "px");
            settingsList.css("overflow-y", "auto");
        };

        initSettingsSlimScroll();
        App.addResizeHandler(initSettingsSlimScroll); // reinitialize on window resize
    };



    //* END:CORE HANDLERS *//

    return {

        //main function to initiate the theme
        init: function() {

            //Core handlers
            handleInit(); // initialize core variables
            handleTheme();
            handleOnResize(); // set and handle responsive    
            handleColorSetting();
            
            //UI Component handlers     
            handleBootstrapSwitch(); // handle bootstrap switch plugin
            handleSelect2(); // handle custom Select2 dropdowns
            handleDropdowns(); // handle dropdowns
            handleTabs(); // handle tabs
            handleCounterup(); // handle counterup instances

            handleQuickSidebarToggler(); // handles quick sidebar's toggler
            handleQuickSidebarChat(); // handles quick sidebar's chats
            handleQuickSidebarSettings(); // handles quick sidebar's setting
            handleChatScrollbar();

            handleslimscroll_menu();
            
            //Handle group element heights
            this.addResizeHandler(handleHeight); // handle auto calculating height on window resize

            handleFixInputPlaceholderForIE(); //IE8 & IE9 input placeholder issue fix
        },

        //public function to add callback a function which will be called on window resize
        addResizeHandler: function(func) {
            resizeHandlers.push(func);
        },

        //public functon to call _runresizeHandlers
        runResizeHandlers: function() {
            _runResizeHandlers();
        },

        // wrApper function to scroll(focus) to an element
        scrollTo: function(el, offeset) {
            var pos = (el && el.length > 0) ? el.offset().top : 0;

            if (el) {
                if ($('body').hasClass('page-header-fixed')) {
                    pos = pos - $('.page-header').height();
                } else if ($('body').hasClass('page-header-top-fixed')) {
                    pos = pos - $('.page-header-top').height();
                } else if ($('body').hasClass('page-header-menu-fixed')) {
                    pos = pos - $('.page-header-menu').height();
                }
                pos = pos + (offeset ? offeset : -1 * el.height());
            }

            $('html,body').animate({
                scrollTop: pos
            }, 'slow');
        },
        // function to scroll to the top
        scrollTop: function() {
            App.scrollTo();
        },

        startPageLoading: function(options) {
            if (options && options.animate) {
                $('.page-spinner-bar').remove();
                $('body').append('<div class="page-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
            } else {
                $('.page-loading').remove();
                $('body').append('<div class="page-loading"><img src="' + this.getGlobalImgPath() + 'loading-spinner-grey.gif"/>&nbsp;&nbsp;<span>' + (options && options.message ? options.message : 'Loading...') + '</span></div>');
            }
        },

        stopPageLoading: function() {
            $('.page-loading, .page-spinner-bar').remove();
        },

        //public helper function to get actual input value(used in IE9 and IE8 due to placeholder attribute not supported)
        getActualVal: function(el) {
            el = $(el);
            if (el.val() === el.attr("placeholder")) {
                return "";
            }
            return el.val();
        },

        //public function to get a paremeter by name from URL
        getURLParameter: function(paramName) {
            var searchString = window.location.search.substring(1),
                i, val, params = searchString.split("&");

            for (i = 0; i < params.length; i++) {
                val = params[i].split("=");
                if (val[0] == paramName) {
                    return unescape(val[1]);
                }
            }
            return null;
        },

        getViewPort: function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        },

        getUniqueID: function(prefix) {
            return 'prefix_' + Math.floor(Math.random() * (new Date()).getTime());
        },

        // check IE8 mode
        isIE8: function() {
            return isIE8;
        },

        // check IE9 mode
        isIE9: function() {
            return isIE9;
        },

        getAssetsPath: function() {
            return assetsPath;
        },

        setAssetsPath: function(path) {
            assetsPath = path;
        },

        setGlobalImgPath: function(path) {
            globalImgPath = path;
        },

        getGlobalImgPath: function() {
            return assetsPath + globalImgPath;
        },

        getGlobalCssPath: function() {
            return assetsPath + globalCssPath;
        },

        getResponsiveBreakpoint: function(size) {
            // bootstrap responsive breakpoints
            var sizes = {
                'xs': 480, // extra small
                'sm': 768, // small
                'md': 992, // medium
                'lg': 1200 // large
            };

            return sizes[size] ? sizes[size] : 0;
        }
    };

}();

jQuery(document).ready(function() {
    App.init(); // init core componets
    $(".chat-sidebar-chat-user-messages").animate({
        scrollTop: $(document).height()
    }, 1000);
});
/**
 *  Document   : layout.js
 *  Author     : redstar
 *  Description: Core script to handle the entire theme and core functions
 *
 **/
var Layout = function () {

    var layoutImgPath = 'img/';

    var layoutCssPath = 'css/';

    var resBreakpointMd = App.getResponsiveBreakpoint('md');

    var ajaxContentSuccessCallbacks = [];
    var ajaxContentErrorCallbacks = [];

    // this function handles responsive layout on screen size resize or mobile device rotate.
    // Set proper height for sidebar and content. The content and sidebar height must be synced always.
    var handleSidebarAndContentHeight = function () {
        var content = $('.page-content');
        var sidebar = $('.sidemenu-container');
        var body = $('body');
        var height;

        if (body.hasClass("page-footer-fixed") === true && body.hasClass("sidemenu-container-fixed") === false) {
            var available_height = App.getViewPort().height - $('.page-footer').outerHeight() - $('.page-header').outerHeight();
            var sidebar_height = sidebar.outerHeight();
            if (sidebar_height > available_height) {
                available_height = sidebar_height + $('.page-footer').outerHeight();
            }
            if (content.height() < available_height) {
                content.attr('style', 'min-height:' + available_height + 'px');
            }
        } else {
            if (body.hasClass('sidemenu-container-fixed')) {
                height = _calculateFixedSidebarViewportHeight();
                if (body.hasClass('page-footer-fixed') === false) {
                    height = height - $('.page-footer').outerHeight();
                }
            } else {
                var headerHeight = $('.page-header').outerHeight();
                var footerHeight = $('.page-footer').outerHeight();

                if (App.getViewPort().width < resBreakpointMd) {
                    height = App.getViewPort().height - headerHeight - footerHeight;
                } else {
                    height = sidebar.height() + 20;
                }

                if ((height + headerHeight + footerHeight) <= App.getViewPort().height) {
                    height = App.getViewPort().height - headerHeight - footerHeight;
                }
            }
            content.attr('style', 'min-height:' + height + 'px');
        }
    };

    // Handle sidebar menu links
    var handleSidebarMenuActiveLink = function(mode, el) {
        var url = location.hash.toLowerCase();    

        var menu = $('.sidemenu');

        if (mode === 'click' || mode === 'set') {
            el = $(el);
        } else if (mode === 'match') {
            menu.find("li > a").each(function() {
                var path = $(this).attr("href").toLowerCase();       
                // url match condition         
                if (path.length > 1 && url.substr(1, path.length - 1) == path.substr(1)) {
                    el = $(this);
                    return; 
                }
            });
        }

        if (!el || el.length == 0) {
            return;
        }

        if (el.attr('href').toLowerCase() === 'javascript:;' || el.attr('href').toLowerCase() === '#') {
            return;
        }        

        var slideSpeed = parseInt(menu.data("slide-speed"),10);
        var keepExpand = menu.data("keep-expanded");

        // begin: handle active state
        if (menu.hasClass('sidemenu-hover-submenu') === false) {
            menu.find('li.nav-item.open').each(function() {
                var match = false;
                $(this).find('li').each(function(){
                    if ($(this).find(' > a').attr('href') === el.attr('href')) {
                        match = true;
                        return;
                    }
                });

                if (match === true) {
                    return;
                }

                $(this).removeClass('open');
                $(this).find('> a > .arrow.open').removeClass('open');
                $(this).find('> .sub-menu').slideUp();
            });  
        } else {
             menu.find('li.open').removeClass('open');
        }

        menu.find('li.active').removeClass('active');
        menu.find('li > a > .selected').remove();
        // end: handle active state

        el.parents('li').each(function () {
            $(this).addClass('active');
            $(this).find('> a > span.arrow').addClass('open');

            if ($(this).parent('ul.sidemenu').length === 1) {
                $(this).find('> a').append('<span class="selected"></span>');
            }
            
            if ($(this).children('ul.sub-menu').length === 1) {
                $(this).addClass('open');
            }
        });

        if (mode === 'click') {
            if (App.getViewPort().width < resBreakpointMd && $('.sidemenu-container').hasClass("in")) { // close the menu on mobile view while laoding a page 
                $('.page-header .responsive-toggler').click();
            }
        }
    };

    // Handle sidebar menu
    var handleSidebarMenu = function () {
        // offcanvas mobile menu 
        
        // handle sidebar link click
        $('.sidemenu').on('click', 'li > a.nav-toggle, li > a > span.nav-toggle', function (e) {
            var that = $(this).closest('.nav-item').children('.nav-link');

            if (App.getViewPort().width >= resBreakpointMd && !$('.sidemenu').attr("data-initialized") && $('body').hasClass('sidemenu-closed') &&  that.parent('li').parent('.sidemenu').length === 1) {
                return;
            }

            var hasSubMenu = that.next().hasClass('sub-menu');

            if (App.getViewPort().width >= resBreakpointMd && that.parents('.sidemenu-hover-submenu').length === 1) { // exit of hover sidebar menu
                return;
            }

            if (hasSubMenu === false) {
                if (App.getViewPort().width < resBreakpointMd && $('.sidemenu-container').hasClass("in")) { // close the menu on mobile view while laoding a page 
                    $('.page-header .responsive-toggler').click();
                }
                return;
            }

            var parent =that.parent().parent();
            var the = that;
            var menu = $('.sidemenu');
            var sub = that.next();

            var autoScroll = menu.data("auto-scroll");
            var slideSpeed = parseInt(menu.data("slide-speed"),10);
            var keepExpand = menu.data("keep-expanded");
            
            if (!keepExpand) {
                parent.children('li.open').children('a').children('.arrow').removeClass('open');
                parent.children('li.open').children('.sub-menu:not(.always-open)').slideUp(slideSpeed);
                parent.children('li.open').removeClass('open');
            }

            var slideOffeset = -200;

            if (sub.is(":visible")) {
                $('.arrow', the).removeClass("open");
                the.parent().removeClass("open");
                sub.slideUp(slideSpeed, function () {
                    if (autoScroll === true && $('body').hasClass('sidemenu-closed') === false) {
                        if ($('body').hasClass('sidemenu-container-fixed')) {
                            menu.slimScroll({
                                'scrollTo': (the.position()).top
                            });
                        } else {
                            App.scrollTo(the, slideOffeset);
                        }
                    }
                    handleSidebarAndContentHeight();
                });
            } else if (hasSubMenu) {
                $('.arrow', the).addClass("open");
                the.parent().addClass("open");
                sub.slideDown(slideSpeed, function () {
                    if (autoScroll === true && $('body').hasClass('sidemenu-closed') === false) {
                        if ($('body').hasClass('sidemenu-container-fixed')) {
                            menu.slimScroll({
                                'scrollTo': (the.position()).top
                            });
                        } else {
                            App.scrollTo(the, slideOffeset);
                        }
                    }
                    handleSidebarAndContentHeight();
                });
            }

            e.preventDefault();
        });


        // handle scrolling to top on responsive menu toggler click when header is fixed for mobile view
        $(document).on('click', '.page-header-fixed-mobile .page-header .responsive-toggler', function(){
            App.scrollTop(); 
        });      
     
        // handle sidebar hover effect        
        handleFixedSidebarHoverEffect();

        // handle the search bar close
        $('.sidemenu-container').on('click', '.sidebar-search .remove', function (e) {
            e.preventDefault();
            $('.sidebar-search').removeClass("open");
        });

        // handle the search query submit on enter press
        $('.sidemenu-container .sidebar-search').on('keypress', 'input.form-control', function (e) {
            if (e.which == 13) {
                $('.sidebar-search').submit();
                return false; //<---- Add this line
            }
        });

        // handle the search submit(for sidebar search and responsive mode of the header search)
        $('.sidebar-search .submit').on('click', function (e) {
            e.preventDefault();
            if ($('body').hasClass("sidemenu-closed")) {
                if ($('.sidebar-search').hasClass('open') === false) {
                    if ($('.sidemenu-container-fixed').length === 1) {
                        $('.sidemenu-container .sidebar-toggler').click(); //trigger sidebar toggle button
                    }
                    $('.sidebar-search').addClass("open");
                } else {
                    $('.sidebar-search').submit();
                }
            } else {
                $('.sidebar-search').submit();
            }
        });

        // handle close on body click
        if ($('.sidebar-search').length !== 0) {
            $('.sidebar-search .input-group').on('click', function(e){
                e.stopPropagation();
            });

            $('body').on('click', function() {
                if ($('.sidebar-search').hasClass('open')) {
                    $('.sidebar-search').removeClass("open");
                }
            });
        }
    };

    // Helper function to calculate sidebar height for fixed sidebar layout.
    var _calculateFixedSidebarViewportHeight = function () {
        var sidebarHeight = App.getViewPort().height - $('.page-header').outerHeight(true);
        if ($('body').hasClass("page-footer-fixed")) {
            sidebarHeight = sidebarHeight - $('.page-footer').outerHeight();
        }

        return sidebarHeight;
    };

    // Handles fixed sidebar
    var handleFixedSidebar = function () {
        var menu = $('.sidemenu');

        handleSidebarAndContentHeight();

        if ($('.sidemenu-container-fixed').length === 0) {
            return;
        }

        if (App.getViewPort().width >= resBreakpointMd && !$('body').hasClass('sidemenu-not-fixed')) {
             menu.attr("data-height", _calculateFixedSidebarViewportHeight());
            App.destroySlimScroll(menu);
            App.initSlimScroll(menu);
            handleSidebarAndContentHeight();
        }
    };

    // Handles sidebar toggler to close/hide the sidebar.
    var handleFixedSidebarHoverEffect = function () {
        var body = $('body');
        if (body.hasClass('sidemenu-container-fixed')) {
            $('.sidemenu-container').on('mouseenter', function () {
                if (body.hasClass('sidemenu-closed')) {
                    $(this).find('.sidemenu').removeClass('sidemenu-closed');
                }
            }).on('mouseleave', function () {
                if (body.hasClass('sidemenu-closed')) {
                    $(this).find('.sidemenu').addClass('sidemenu-closed');
                }
            });
        }
    };

    // Hanles sidebar toggler
    var handleSidebarToggler = function () {
        var body = $('body');
        if ($.cookie && $.cookie('sidebar_closed') === '1' && App.getViewPort().width >= resBreakpointMd) {
            $('body').addClass('sidemenu-closed');
            $('.sidemenu').addClass('sidemenu-closed');
        }

        // handle sidebar show/hide
        $('body').on('click', '.sidebar-toggler', function (e) {
            var sidebar = $('.sidemenu-container');
            var sidebarMenu = $('.sidemenu');
            $(".sidebar-search", sidebar).removeClass("open");

            if (body.hasClass("sidemenu-closed")) {
                body.removeClass("sidemenu-closed");
                sidebarMenu.removeClass("sidemenu-closed");
                if ($.cookie) {
                    $.cookie('sidebar_closed', '0');
                }
            } else {
                body.addClass("sidemenu-closed");
                sidebarMenu.addClass("sidemenu-closed");
                if (body.hasClass("sidemenu-container-fixed")) {
                    sidebarMenu.trigger("mouseleave");
                }
                if ($.cookie) {
                    $.cookie('sidebar_closed', '1');
                }
            }

            $(window).trigger('resize');
        });
    };

    // Handles the horizontal menu
    var handleHorizontalMenu = function () {
        //handle tab click
        $('.page-header').on('click', '.hor-menu a[data-toggle="tab"]', function (e) {
            e.preventDefault();
            var nav = $(".hor-menu .nav");
            var active_link = nav.find('li.current');
            $('li.active', active_link).removeClass("active");
            $('.selected', active_link).remove();
            var new_link = $(this).parents('li').last();
            new_link.addClass("current");
            new_link.find("a:first").append('<span class="selected"></span>');
        });

        // handle search box expand/collapse        
        $('.page-header').on('click', '.search-form', function (e) {
            $(this).addClass("open");
            $(this).find('.form-control').focus();

            $('.page-header .search-form .form-control').on('blur', function (e) {
                $(this).closest('.search-form').removeClass("open");
                $(this).unbind("blur");
            });
        });

        // handle hor menu search form on enter press
        $('.page-header').on('keypress', '.hor-menu .search-form .form-control', function (e) {
            if (e.which == 13) {
                $(this).closest('.search-form').submit();
                return false;
            }
        });

        // handle header search button click
        $('.page-header').on('mousedown', '.search-form.open .submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).closest('.search-form').submit();
        });

        
        $(document).on('click', '.mega-menu-dropdown .dropdown-menu', function (e) {
            e.stopPropagation();
        });
    };

    // Handles Bootstrap Tabs.
    var handleTabs = function () {
        // fix content height on tab click
        $('body').on('shown.bs.tab', 'a[data-toggle="tab"]', function () {
            handleSidebarAndContentHeight();
        });
    };

    // Handles the go to top button at the footer
    var handleGoTop = function () {
        var offset = 300;
        var duration = 500;

        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {  // ios supported
            $(window).bind("touchend touchcancel touchleave", function(e){
               if ($(this).scrollTop() > offset) {
                    $('.scroll-to-top').fadeIn(duration);
                } else {
                    $('.scroll-to-top').fadeOut(duration);
                }
            });
        } else {  // general 
            $(window).scroll(function() {
                if ($(this).scrollTop() > offset) {
                    $('.scroll-to-top').fadeIn(duration);
                } else {
                    $('.scroll-to-top').fadeOut(duration);
                }
            });
        }
        
		$(document).on('click','.scroll-to-top',function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    };

    // Hanlde 100% height elements(block, portlet, etc)
    var handle100HeightContent = function () {

        $('.full-height-content').each(function(){
            var target = $(this);
            var height;

            height = App.getViewPort().height -
                $('.page-header').outerHeight(true) -
                $('.page-footer').outerHeight(true) -
                $('.page-title').outerHeight(true) -
                $('.page-bar').outerHeight(true);

            if (target.hasClass('portlet')) {
                var portletBody = target.find('.portlet-body');

                App.destroySlimScroll(portletBody.find('.full-height-content-body')); // destroy slimscroll 
                
                height = height -
                    target.find('.portlet-title').outerHeight(true) -
                    parseInt(target.find('.portlet-body').css('padding-top'),10) -
                    parseInt(target.find('.portlet-body').css('padding-bottom'),10) - 5;

                if (App.getViewPort().width >= resBreakpointMd && target.hasClass("full-height-content-scrollable")) {
                    height = height - 35;
                    portletBody.find('.full-height-content-body').css('height', height);
                    App.initSlimScroll(portletBody.find('.full-height-content-body'));
                } else {
                    portletBody.css('min-height', height);
                }
            } else {
               App.destroySlimScroll(target.find('.full-height-content-body')); // destroy slimscroll 

                if (App.getViewPort().width >= resBreakpointMd && target.hasClass("full-height-content-scrollable")) {
                    height = height - 35;
                    target.find('.full-height-content-body').css('height', height);
                    App.initSlimScroll(target.find('.full-height-content-body'));
                } else {
                    target.css('min-height', height);
                }
            }
        });        
    };

    return {
        // Main init methods to initialize the layout
        initHeader: function() {
            handleHorizontalMenu(); // handles horizontal menu    
        },

        setSidebarMenuActiveLink: function(mode, el) {
            handleSidebarMenuActiveLink(mode, el);
        },

        initSidebar: function() {
            //layout handlers
            handleFixedSidebar(); // handles fixed sidebar menu
            handleSidebarMenu(); // handles main menu
            handleSidebarToggler(); // handles sidebar hide/show


            App.addResizeHandler(handleFixedSidebar); // reinitialize fixed sidebar on window resize
        },

        initContent: function() {
            handle100HeightContent(); // handles 100% height elements(block, portlet, etc)
            handleTabs(); // handle bootstrah tabs

            App.addResizeHandler(handleSidebarAndContentHeight); // recalculate sidebar & content height on window resize
            App.addResizeHandler(handle100HeightContent); // reinitialize content height on window resize 
        },

        initFooter: function() {
            handleGoTop(); //handles scroll to top functionality in the footer
        },

        init: function () {            
            this.initHeader();
            this.initSidebar();
            this.initContent();
            this.initFooter();
        },

        loadAjaxContent: function(url, sidebarMenuLink) {
            var pageContent = $('.page-content .page-content-body');    

            App.startPageLoading({animate: true});
            
            $.ajax({
                type: "GET",
                cache: false,
                url: url,
                dataType: "html",
                success: function (res) {    
                    App.stopPageLoading();
                                    
                    for (var i = 0; i < ajaxContentSuccessCallbacks.length; i++) {
                        ajaxContentSuccessCallbacks[i].call(res);
                    }

                    if (sidebarMenuLink.length > 0 && sidebarMenuLink.parents('li.open').length === 0) {
                        $('.sidemenu > li.open > a').click();
                    }

                    pageContent.html(res);
                    Layout.fixContentHeight(); // fix content height
                    App.initAjax(); // initialize core stuff
                },
                error: function (res, ajaxOptions, thrownError) {
                    App.stopPageLoading();
                    pageContent.html('<h4>Could not load the requested content.</h4>');

                    for (var i = 0; i < ajaxContentErrorCallbacks.length; i++) {
                        ajaxContentSuccessCallbacks[i].call(res);
                    }                    
                }
            });
        },

        addAjaxContentSuccessCallback: function(callback) {
            ajaxContentSuccessCallbacks.push(callback);
        },

        addAjaxContentErrorCallback: function(callback) {
            ajaxContentErrorCallbacks.push(callback);
        },

        //public function to fix the sidebar and content height accordingly
        fixContentHeight: function () {
            handleSidebarAndContentHeight();
        },

        initFixedSidebarHoverEffect: function() {
            handleFixedSidebarHoverEffect();
        },

        initFixedSidebar: function() {
            handleFixedSidebar();
        },

        getLayoutImgPath: function () {
            return App.getAssetsPath() + layoutImgPath;
        },

        getLayoutCssPath: function () {
            return App.getAssetsPath() + layoutCssPath;
        }
    };

}();

    jQuery(document).ready(function() {    
    	 Layout.init(); // init core componets
    });

/**
 *  Document   : theme-color.js
 *  Author     : redstar
 *  Description: Core script to handle the entire theme and core functions
 *
 **/

jQuery(document).ready(function(){jQuery(document).on("click",".sidebar-theme a",function(){var sidebar_color=jQuery(this).attr('data-theme')+"-sidebar-color";jQuery("body").removeClass("white-sidebar-color dark-sidebar-color blue-sidebar-color indigo-sidebar-color green-sidebar-color red-sidebar-color cyan-sidebar-color");jQuery("body").addClass(sidebar_color);});jQuery(document).on("click",".logo-theme a",function(){var logo_color=jQuery(this).attr('data-theme');jQuery("body").removeClass("logo-white logo-dark logo-blue logo-indigo logo-red logo-cyan logo-green");jQuery("body").addClass(logo_color);});jQuery(document).on("click",".header-theme a",function(){var header_color=jQuery(this).attr('data-theme');jQuery("body").removeClass("header-white header-dark header-blue header-indigo header-red header-cyan header-green");jQuery("body").addClass(header_color);});});

$(function () {
    $('.js-animations').bind('change', function () {
        var animation = $(this).val();
        $('.js-animating-object').animateCss(animation);
    });
});

//Copied from https://github.com/daneden/animate.css
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});