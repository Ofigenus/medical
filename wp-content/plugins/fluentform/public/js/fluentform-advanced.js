!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=837)}({837:function(e,t,n){e.exports=n(856)},856:function(e,t,n){"use strict";n.r(t);var a=function(e){var t=e(".jss-ff-el-net-promoter");t.length&&e.each(t,(function(t,n){e(n).on("click","label",(function(t){var n=e(this);n.addClass("active"),n.prevAll().removeClass("active"),n.nextAll().removeClass("active")}))}))},i=function(e){!function(e){e.on("click",".js-repeat .repeat-plus",(function(e){var t=jQuery(this),n=t.closest(".ff-el-repeat"),a=parseInt(n.data("max_repeat")),i=n.find(".ff-t-cell:first-child .ff-el-input--content > input").length;if(!(a&&a<=i)){a&&a-i==1&&n.find(".repeat-plus").hide();var r=t.closest("div"),o=r.index(),f=t.closest(".ff-el-input--content").find(".ff-t-cell").length;t.closest(".ff-el-input--content").find(".ff-t-cell").each((function(e,t){var n=jQuery(this).find(".ff-el-form-control:last-child"),a=n.attr("tabindex"),i=n.clone(),r={value:"",id:"ffrpt-"+(new Date).getTime()+e};a&&(r.tabIndex=parseInt(a)+f),i.prop(r),i.insertAfter(n)})),r.clone().insertAfter(r),t.closest(".ff-el-input--content").find(".ff-t-cell").eq(0).find("input:eq(".concat(o+1,")")).focus()}})),e.on("click",".js-repeat .repeat-minus",(function(e){var t=!1,n=jQuery(this),a=n.closest("div");n.closest(".ff-el-repeat").find(".repeat-plus").show(),n.closest(".ff-el-input--content").find(".ff-t-cell").each((function(){var e=a.index(),n=jQuery(this).find(".ff-el-form-control:eq("+e+")");a.siblings().length&&(t=n.remove().length)})),t&&a.remove()}))}(e),function(e){e.on("click",".js-repeater .repeat-plus",(function(e){var t=jQuery(this),n=t.closest("table"),a=t.closest("tr"),i=parseInt(n.attr("data-max_repeat")),r=n.find("tbody tr").length;if(i&&r==i)n.addClass("repeat-maxed");else{var o=a.clone();o.find("td").each((function(e,t){var n=jQuery(this).find(".ff-el-form-control:last-child"),a=(n.attr("tabindex"),"ffrpt-"+(new Date).getTime()+e),i=(n.data("name"),{value:"",id:a});n.prop(i)})),o.insertAfter(a);var f=n.attr("data-root_name"),l=0;n.find("tbody tr").each((function(e,t){jQuery(this).find(".ff-el-form-control").each((function(t,n){var a=jQuery(n);0==e&&(l=a.attr("tabindex")),a.prop({name:f+"["+e+"][]"}),a.attr("data-name",f+"_"+t+"_"+e),l&&a.attr("tabindex",l)}))})),o.find(".ff-el-form-control")[0].focus(),n.trigger("repeat_change"),i&&r+1==i&&n.addClass("repeat-maxed")}})),e.on("click",".js-repeater .repeat-minus",(function(e){var t=jQuery(this),n=t.closest("table");if(1!=n.find("tbody tr").length){t.closest("tr").remove(),n.removeClass("repeat-maxed");var a=n.attr("data-root_name");n.find("tbody tr").each((function(e,t){jQuery(this).find(".ff-el-form-control").each((function(t,n){jQuery(n).prop({name:a+"["+e+"][]"})}))})),n.trigger("repeat_change")}}))}(e)};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fields=t,this.formData=n,this.counter=0,this.field_statues={}}var t,n,a;return t=e,(n=[{key:"setFields",value:function(e){this.fields=e}},{key:"setFormData",value:function(e){this.formData=e}},{key:"getCalculatedStatuses",value:function(){for(var e=0,t=Object.keys(this.fields);e<t.length;e++){var n=t[e],a=this.fields[n];this.field_statues[n]=this.evaluate(a,n)}return this.field_statues}},{key:"evaluate",value:function(e,t){var n=this;this.counter++;var a=e.type,i=1;return"any"==a&&(i=0),e.conditions.forEach((function(e){var r=n.getItemEvaluateValue(e,n.formData[e.field]);r&&n.fields[e.field]&&e.field!=t&&(r=n.evaluate(n.fields[e.field],e.field)),"any"==a?r&&(i=1):!r&&i&&(i=!1)})),1==i}},{key:"getItemEvaluateValue",value:function(e,t){return"="==e.operator?"object"==r(t)?-1!=t.indexOf(e.value):t==e.value:"!="==e.operator?"object"==r(t)?-1==t.indexOf(e.value):t!=e.value:">"==e.operator?t&&t>Number(e.value):"<"==e.operator?t&&t<Number(e.value):">="==e.operator?t&&t>=Number(e.value):"<="==e.operator?t&&t<=Number(e.value):"startsWith"==e.operator?t.startsWith(e.value):"endsWith"==e.operator?t.endsWith(e.value):"contains"==e.operator?-1!=t.indexOf(e.value):"doNotContains"==e.operator&&-1==t.indexOf(e.value)}}])&&o(t.prototype,n),a&&o(t,a),e}(),l=function(e,t,n){var a,i,r,o,l,s="."+n.form_instance;(a={},i={},r=function(t){e.each(t,(function(e,t){var n=l(e).closest(".has-conditions");t?(setTimeout((function(){n.addClass("ff_cond_v")}),100),n.removeClass("ff_excluded").slideDown(200)):(setTimeout((function(){n.removeClass("ff_cond_v")}),100),n.addClass("ff_excluded").slideUp(200))}))},o=function(){var t={};return e.each(a,(function(n,a){var i=a.prop("type")||a.attr("data-type");if("radio"==i)t[n]="",a.each((function(a,i){e(i).is(":checked")&&(t[n]=e(i).val())}));else if("checkbox"==i)n=n.replace("[]",""),t[n]=[],a.each((function(a,i){e(i).is(":checked")&&t[n].push(e(i).val())}));else if("select-multiple"==i){n=n.replace("[]","");var r=a.val();t[n]=r||[]}else t[n]=a.val()})),t},l=function(t){var n=e(s),a=e("[data-name='"+t+"']",n);return(a=a.length?a:e("[name='"+t+"']",n)).length?a:e("[name='"+t+"[]']",n)},{init:function(){if(n.conditionals){e.each(n.conditionals,(function(t,n){t&&e.each(n.conditions,(function(e,t){var n=l(t.field);a[n.prop("name")]=n}))})),i=o();var t=new f(n.conditionals,i);e.each(a,(function(e,n){n.on("change",(function(){i=o(),t.setFormData(i),r(t.getCalculatedStatuses())}))})),r(t.getCalculatedStatuses())}}}).init()};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var d,p=function(e,t,n,a){var i=0;n.stepAnimationDuration=parseInt(n.stepAnimationDuration),n.enable_step_data_persistency=t.find(".ff-step-container").attr("data-enable_step_data_persistency"),"yes"==n.enable_step_data_persistency&&(n.enable_step_page_resume=t.find(".ff-step-container").attr("data-enable_step_page_resume"));var r=!!window.fluentFormVars.is_rtl,o=!1,f=function(t){var a=t.response,i=t.step_completed;jQuery.each(a,(function(t,a){if(a){var i=Object.prototype.toString.call(a);if("[object Object]"===i){var r=jQuery("[data-name=".concat(t,"]"));if(r.length&&"tabular-element"===r.attr("data-type"))jQuery.each(a,(function(n,a){var i=jQuery('[name="'.concat(t,"[").concat(n,']\\[\\]"]'));jQuery.each(i,(function(t,n){-1!=jQuery.inArray(e(n).val(),a)&&e(n).prop("checked",!0).change()}))}));else if("chained-select"===r.attr("data-type")){var o={meta_key:r.find("select:first").attr("data-meta_key"),form_id:r.closest("form").attr("data-form_id"),action:"fluentform_get_chained_select_options",filter_options:"all",keys:a};jQuery.getJSON(n.ajaxUrl,o).then((function(e){jQuery.each(e,(function(e,t){var n=r.find("select[data-key=".concat(e,"]"));0!=n.attr("data-index")&&jQuery.each(t,(function(e,t){n.append(jQuery("<option />",{value:t,text:t}))})),n.attr("disabled",!1).val(a[e])}))}))}else jQuery.each(a,(function(e,n){jQuery('[name="'.concat(t,"[").concat(e,']"]')).val(n).change()}))}else if("[object Array]"===i){var f=jQuery("[name=".concat(t,"]"));if((f=(f=f.length?f:jQuery("[data-name=".concat(t,"]"))).length?f:jQuery("[name=".concat(t,"\\[\\]]"))).prop("multiple"))f.val(a).change();else if("repeater_field"===f.attr("data-type")){var l=f.find("tbody"),s=f.attr("data-name");jQuery.each(a,(function(t,n){0!=t?l.find("tr:last").clone().appendTo(l).find(".ff-el-form-control").each((function(a,i){var r="ffrpt-"+(new Date).getTime()+a;e(i).attr({id:r,name:"".concat(s,"[").concat(t,"][]"),value:n[a]}).change()})):l.find("tr:first .ff-el-form-control").each((function(t,a){e(a).val(n[t]).change()}))}))}else f.each((function(t,n){-1!=jQuery.inArray(e(n).val(),a)&&e(n).prop("checked",!0).change()}))}else{var c=jQuery("[name=".concat(t,"]"));"radio"===c.prop("type")||"checkbox"===c.prop("type")?jQuery("[name=".concat(t,"][value=").concat(a,"]")).prop("checked",!0).change():c.val(a).change()}}})),o=!0,"yes"==n.enable_step_page_resume&&u(i,n.stepAnimationDuration,!0),o=!1},l=function(a){if(t.find(".ff-el-progress").length){var i=a.totalSteps,r=a.activeStep,o=100/i*(r+1),f=t.find(".ff-el-progress-title li"),l=t.find(".ff-step-header .ff-el-progress-bar"),s=l.find("span");l.css({width:o+"%"}),o?l.append(s.text(parseInt(o)+"%")):s.empty();var c=n.step_text,u=e(f[r]).text();c=c.replace("%activeStep%",r+1).replace("%totalStep%",i).replace("%stepTitle%",u),t.find(".ff-el-progress-status").html(c),f.css("display","none"),e(f[r]).css("display","inline")}},s=function(n){e(document).on("keydown",a+" .fluentform-step > .step-nav button",(function(t){9==t.which&&"next"==e(this).data("action")&&t.preventDefault()})),e(a).on("click",".fluentform-step  .step-nav button",(function(a){var r=e(this).data("action"),o="next",f=e(this).closest(".fluentform-step"),l=window.fluentFormApp(t);if("next"==r){try{var s=f.find(":input").not(":button").filter((function(t,n){return!e(n).closest(".has-conditions").hasClass("ff_excluded")}));s.length&&l.validate(s),i++}catch(a){if(!(a instanceof window.ffValidationError))throw a;return l.showErrorMessages(a.messages),void l.scrollToFirstError(350)}t.trigger("ff_to_next_page",i),jQuery(document).trigger("ff_to_next_page",{step:i,form:t}),p(i)}else i--,o="prev",t.trigger("ff_to_prev_page",i),jQuery(document).trigger("ff_to_prev_page",{step:i,form:t});var c="yes"!=t.find(".ff-step-container").attr("data-disable_auto_focus");u(i,n,c,o)}))},u=function(f,s){var u=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"next";e("div"+a+"_errors").empty(),i=f;var v=t.find(".ff-step-body"),m=t.find(".ff-step-titles li"),h=t.find(".fluentform-step"),g=h.length,y=t.offset().top-(e("#wpadminbar")?32:0)-20;h.removeClass("active"),e(h[i]).addClass("active"),m.removeClass("ff_active ff_completed"),e.each(c(Array(i).keys()),(function(t){e(e(m[t])).addClass("ff_completed")})),e(m[i]).addClass("ff_active");var _=function(){window.ff_disable_step_scroll||(window.ff_scroll_top_offset&&(y=window.ff_scroll_top_offset),e("html, body").delay(s).animate({scrollTop:y},s,(function(n){e(".fluentform-step.active",t).find(":input:visible:first").focus()})))},b={left:-100*i+"%"};if(r&&(b={right:-100*i+"%"}),v.animate(b,s,(function(){return u&&_()})),"yes"!=n.enable_step_data_persistency||o||d(t,i).then((function(e){console.log(e)})),l({activeStep:i,totalSteps:g}),h.last().hasClass("active"))t.find('button[type="submit"]').css("display","inline-block");else if(t.find('button[type="submit"]').css("display","none"),!window.ff_disable_auto_step){var x=t.find(".fluentform-step.active"),j=t.find(".fluentform-step.active > div").length-1,w=t.find(".fluentform-step.active > .ff_excluded").length;t.find(".fluentform-step.active > .ff-t-container").length&&(j-=t.find(".fluentform-step.active > .ff-t-container").length,j+=t.find(".fluentform-step.active > .ff-t-container > .ff-t-cell > div").length,w+=t.find(".fluentform-step.active > .ff-t-container > .ff-t-cell > .ff_excluded").length,t.find(".fluentform-step.active > .ff-t-container.ff_excluded").length&&(w-=t.find(".fluentform-step.active > .ff-t-container.ff_excluded").length,w-=t.find(".fluentform-step.active > .ff-t-container.ff_excluded > .ff-t-cell > .ff_excluded").length,w+=t.find(".fluentform-step.active > .ff-t-container.ff_excluded > .ff-t-cell > div").length)),j==w&&x.find(".step-nav button[data-action="+p+"]").click()}},d=function(t,a){var i=t.find(":input").filter((function(t,n){return!e(n).closest(".has-conditions").hasClass("ff_excluded")}));i.filter((function(t,n){var a=e(n);return a.parents().hasClass("ff_repeater_table")&&"select"==a.attr("type")&&!a.val()})).prepend("<option selected disabled />");var r={active_step:a,data:i.serialize(),form_id:t.data("form_id"),action:"fluentform_step_form_save_data"};return jQuery.post(n.ajaxUrl,r)},p=function(n){var a=t.find(".fluentform-step"),i=e(a[n]);jQuery.each(i.find(".ff_dynamic_value"),(function(n,a){var i=e(a).data("ref");if("payment_summary"!=i){var r=t.find('.ff-el-form-control[name="'+i+'"]'),o=" ";r.length||(r=t.find('.ff-field_container[data-name="'+i+'"]').find("input")),r.length||(r=t.find('*[name="'+i+'"]:checked')).length||(r=t.find('*[name="'+i+'[]"]:checked'),o=", ");var f=[];e.each(r,(function(){var t=e(this).val();t&&f.push(t)}));var l="";l=f.length?f.join(o):e(a).data("fallback"),e(this).html(l)}else t.trigger("calculate_payment_summary",{element:e(a)})}))};return{init:function(){var a,r,o,c;"no"!=n.enable_step_data_persistency&&jQuery(document).ready((function(e){jQuery.getJSON(n.ajaxUrl,{form_id:t.data("form_id"),action:"fluentform_step_form_get_data"}).then((function(e){e&&f(e)}))})),t.find(".fluentform-step:first").find('.step-nav [data-action="prev"]').remove(),a=t.find(".ff-step-body"),r=t.find(".fluentform-step"),o=r.length,c=t.find(".ff-step-titles li"),a.css({width:100*o+"%"}),r.css({width:100/o+"%"}),e(r[i]).addClass("active"),e(c[i]).addClass("active"),r.length&&!r.last().hasClass("active")&&t.find('button[type="submit"]').css("display","none"),l({activeStep:i,totalSteps:o}),s(n.stepAnimationDuration),function(){function n(e){var t=e.closest(".fluentform-step.active").find(".ff-el-group:not(.ff_excluded)").length,n=window.ffTransitionTimeOut||400;1==t&&setTimeout((function(){e.closest(".fluentform-step.active").find(".ff-btn-next").trigger("click")}),n)}"yes"==t.find(".ff-step-container").attr("data-enable_auto_slider")&&(t.find(".ff-el-form-check-radio,.ff-el-net-label, .ff-el-ratings label").on("click",(function(){n(e(this))})),t.find("select").on("change",(function(){n(e(this))})))}()},updateSlider:u}},v=function(e,t){var n=t.find(".ff_has_formula");if(n.length){var a={};mexp.addToken([{type:8,token:"round",show:"round",value:function(e,t){return t||0===t||(t=2),e=parseFloat(e).toFixed(t),parseFloat(e)}},{type:8,token:"max",show:"max",value:function(e,t){return e>t?e:t}}]);var i=function i(){jQuery.each(n,(function(n,o){var f=jQuery(o),l=f.data("calculation_formula"),s=function(e,t){for(var n,a=[],i=RegExp(e,"g");n=i.exec(t);)delete n.input,a.push(n);return a}(/{(.*?)}/g,l),c={};jQuery.each(s,(function(e,n){var o=n[0];if(-1!=o.indexOf("{input.")){var f=o.replace(/{input.|}/g,"");c[o]=t.find("input[name="+f+"]").val()||0}else if(-1!=o.indexOf("{select.")){var l=o.replace(/{select.|}/g,""),s=r("select[data-name="+l+"] option:selected");t.find("select[data-name="+l+"]").attr("data-calc_value",s),c[o]=s}else if(-1!=o.indexOf("{checkbox.")){var u=o.replace(/{checkbox.|}/g,"");c[o]=r("input[data-name="+u+"]:checked")}else if(-1!=o.indexOf("{radio.")){var d=o.replace(/{radio.|}/g,"");c[o]=t.find("input[name="+d+"]:checked").attr("data-calc_value")||0}else if(-1!=o.indexOf("{repeat.")){var p=o.replace(/{repeat.|}/g,""),v=t.find("table[data-root_name="+p+"]");a[p]||(a[p]=!0,v.on("repeat_change",(function(){i()}))),c[o]=v.find("tbody tr").length}})),jQuery.each(c,(function(e,t){t||(t=0),l=l.split(e).join(t)}));var u="";try{if(u=mexp.eval(l),isNaN(u)&&(u=""),"string"==typeof l&&0===l.indexOf("round")){var d=parseInt(l.substr(-2,1));d&&Number.isInteger(d)&&(u=parseFloat(u).toFixed(2))}}catch(e){console.log(e)}"text"==f[0].type?e(f).val(u).prop("defaultValue",u).trigger("change"):f.text(u)}))};t.find("input[type=number],input[data-calc_value],select[data-calc_value]").on("change keyup",i).trigger("change"),i()}function r(n){var a=0,i=t.find(n);return e.each(i,(function(t,n){var i=e(n).attr("data-calc_value");i&&!isNaN(i)&&(a+=Number(i))})),a}};jQuery(document).ready((function(){!function(e){a(e),function(e){var t=e(".fluentform .js-repeat");e.each(t,(function(t,n){var a=e(n);if(a.find(".ff-t-cell").length>1){var i=a.find(".ff-el-group").height()-a.find(".ff-el-group").find(".ff-el-input--content").height();a.find(".js-repeat-buttons").css("margin-top",i+"px")}var r=a.find(".ff-el-group").find(".ff-el-input--content .ff-el-form-control").outerHeight();a.find(".ff-el-repeat-buttons").height(r)}))}(e),function(e){var t=e(".jss-ff-el-ratings");t.length&&e.each(t,(function(t,n){var a=e(n);a.find("label.active").prevAll().addClass("active"),a.on("mouseenter","label",(function(t){var n=e(this),a="[data-id="+n.find("input").attr("id")+"]";n.addClass("active"),n.prevAll().addClass("active"),n.nextAll().removeClass("active"),n.closest(".ff-el-input--content").find(".ff-el-rating-text").css("display","none"),n.closest(".ff-el-input--content").find(a).css("display","inline-block")})).on("click","label",(function(t){var n=e(this).find(".jss-ff-svg");n.addClass("scale"),n.addClass("scalling"),setTimeout((function(e){n.removeClass("scalling"),n.removeClass("scale")}),150)})).on("mouseleave",(function(t){var n=e(this),a="[data-id="+n.find("input:checked").attr("id")+"]",i=n.find("input:checked").parent("label");i.length?(i.addClass("active"),i.prevAll().addClass("active"),i.nextAll().removeClass("active")):n.find("label").removeClass("active"),n.closest(".ff-el-input--content").find(".ff-el-rating-text").css("display","none"),n.closest(".ff-el-input--content").find(a).css("display","inline-block")}))}))}(e);var t=e(".frm-fluent-form");e.each(t,(function(t,n){var a=e(n),r=a.attr("data-form_instance"),o=window["fluent_form_"+r];if(o){o.form_id_selector;var f="."+o.form_instance,c=p(e,a,window.fluentFormVars,f);!function(e,t,n,a,i){var r=function(e){if(e.type.match("image"))return URL.createObjectURL(e);var t=document.createElement("canvas");t.width=60,t.height=60,t.style.zIndex=8,t.style.position="absolute",t.style.border="1px solid";var n=t.getContext("2d");return n.fillStyle="rgba(0, 0, 0, 0.2)",n.fillRect(0,0,60,60),n.font="13px Arial",n.fillStyle="white",n.textAlign="center",n.fillText(e.type.substr(e.type.indexOf("/")+1),30,30,60),t.toDataURL()},o=function(e){return e<1024?e+"bytes":e>=1024&&e<=1048576?(e/1024).toFixed(1)+"KB":e>1048576?(e/1048576).toFixed(1)+"MB":void 0},f=function(e,t){var n=[],a="",i="";if("allowed_file_types"in t?(a=t.allowed_file_types.value,i=t.allowed_file_types.message):"allowed_image_types"in t&&(a=t.allowed_image_types.value,i=t.allowed_image_types.message),a){var r=new RegExp("("+a.join("|")+")","i"),o=e.name.split(".").pop();o=o.toLowerCase(),r.test(o)||n.push(i)}return"max_file_size"in t&&e.size>t.max_file_size.value&&n.push(t.max_file_size.message),n};t.find('input[type="file"]').each((function(l,c){var u,d=e(this);u=e("<div/>",{class:"ff-uploaded-list",style:"font-size:12px; margin-top: 15px;"}),d.closest("div").append(u);var p=n.rules[d.prop("name")],v=p.max_file_count.value;"max_file_count"in p&&(p.max_file_count.remaining=Number(v));var m="";function h(e){var n=d.prop("name");t.trigger("show_element_error",{element:n,message:e})}function g(a,r){if(r&&r.files&&r.files.length){if(t.find(".ff-upload-preview-elem").remove(),"max_file_count"in p){e(i+"_errors").empty(),e(this).closest("div").find(".error").html("");var o=p.max_file_count.remaining;if(!o||r.files.length>o){var l="Maximum 1 file is allowed!";return l=v>1?"Maximum "+v+" files are allowed!":l,p.max_file_count&&p.max_file_count.message&&(l=p.max_file_count.message),h(l),!1}}var s=f(r.files[0],n.rules[d.prop("name")]);return!s.length||(h(s.join(", ")),!1)}}"allowed_file_types"in p?(m=p.allowed_file_types.value.join("|"),d.prop("accept","."+m.replace(/\|/g,",."))):(m=p.allowed_image_types.value.join("|"))?d.prop("accept","."+m.replace(/\|/g,",.")):d.prop("accept","image/*"),d.fileupload({dataType:"json",dropZone:d.closest(".ff-el-group"),url:a.ajaxUrl+"?action=fluentform_file_upload&formId="+n.id,change:g,add:function(t,n){if(g(0,n)){var i=e("<div/>",{class:"ff-upload-preview"});n.context=i;var f=e("<div/>",{class:"ff-upload-thumb"}),l=e("<div/>",{class:"ff-upload-details"}),s=e("<div/>",{class:"ff-upload-preview-img",style:"background-image: url('".concat(r(n.files[0]),"');")}),c=e("<div>",{class:"ff-upload-error",style:"color:red;"}),d=e("<span/>",{html:a.upload_start_txt,class:"ff-upload-progress-inline-text ff-inline-block"}),p=e('\n\t\t\t\t\t\t\t\t\t<div class="ff-upload-progress-inline ff-el-progress">\n\t\t\t\t\t\t\t\t\t\t<div class="ff-el-progress-bar"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t'),v=e("<div/>",{class:"ff-upload-filename",html:n.files[0].name}),m=e("<span/>",{"data-href":"#",html:"&times;",class:"ff-upload-remove"}),h=e("<div>",{class:"ff-upload-filesize ff-inline-block",html:o(n.files[0].size)});f.append(s),l.append(v,p,d,h,c,m),i.append(f,l),u.append(i),v.css({maxWidth:n.context.width()-91+"px"}),n.submit(),n.context.addClass("ff_uploading")}},progress:function(e,t){var n=parseInt(t.loaded/t.total*100,10);t.context.find(".ff-el-progress-bar").css("width",n+"%"),t.context.find(".ff-upload-progress-inline-text").text(a.uploading_txt)},done:function(e,t){if(t.context.removeClass("ff_uploading"),t.result&&"data"in t.result&&"files"in t.result.data)"error"in t.result.data.files[0]?(h("Upload Error: "+t.result.data.files[0].error),t.context.remove()):(t.context.find(".ff-upload-progress-inline-text").text(a.upload_completed_txt),p.max_file_count.remaining-=1,t.context.css("border","1px solid #6f757d"),t.context.attr("data-src",t.result.data.files[0].url),t.context.find(".ff-upload-remove").attr("data-href",t.result.data.files[0].file));else{var n="Sorry! The upload failed for some unknown reason.";if(t.messages){var i=Object.keys(t.messages);i.length&&(n=t.messages[i[0]])}h(n),t.context.remove()}},fail:function(t,n){var a=[];n.context.remove(),n.jqXHR.responseJSON&&n.jqXHR.responseJSON.errors?e.each(n.jqXHR.responseJSON.errors,(function(t,n){"object"==s(n)?e.each(n,(function(e,t){a.push(t)})):a.push(n)})):n.jqXHR.responseText?a.push(n.jqXHR.responseText):a.push("Something is wrong when uploading the file! Please try again"),h(a.join(", "))}})})),e(".ff-uploaded-list").on("click",".ff-upload-remove",(function(t){t.preventDefault();var i=e(this),r=i.closest(".ff-uploaded-list"),o=i.attr("data-href");"#"==o?(i.closest(".ff-upload-preview").remove(),r.find(".ff-upload-preview").length||r.siblings(".ff-upload-progress").addClass("ff-hidden")):e.post(a.ajaxUrl,{path:o,action:"fluentform_delete_uploaded_file"}).then((function(e){var t=i.closest(".ff-el-input--content").find("input");n.rules[t.prop("name")].max_file_count.remaining+=1,i.closest(".ff-upload-preview").remove(),r.find(".ff-upload-preview").length||r.siblings(".ff-upload-progress").addClass("ff-hidden")}))}))}(e,a,o,window.fluentFormVars,f),i(a),l(e,a,o,window.fluentFormVars),c.init(),v(e,a),a.on("update_slider",(function(e,t){c.updateSlider(t.goBackToStep,t.animDuration,t.isScrollTop,t.actionType)})),jQuery(document).on("reInitExtras",f,(function(){a=jQuery("form"+f),p(jQuery,a,window.fluentFormVars,f).init(),i(a),l(e,a,o),v(e,a)}))}else console.log("No Fluent form JS vars found!")}))}(jQuery)})),(d=String.prototype).startsWith||(d.startsWith=function(e){return!(!e||!this||this.lastIndexOf(e,0))}),d.endsWith||(d.endsWith=function(e){var t=e&&this?this.length-e.length:-1;return t>=0&&this.lastIndexOf(e,t)===t})}});