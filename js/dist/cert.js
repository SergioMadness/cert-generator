"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},defaultData={},userData={},loadedImg={},scale=1,elements=[{workspace:$(".cert-name"),control:$("#control-name")},{workspace:$(".cert-number"),control:$("#control-number")},{workspace:$(".cert-course"),control:$("#control-course")},{workspace:$(".cert-date"),control:$("#control-date")},{workspace:$(".cert-duration"),control:$("#control-duration")}];function renderWorkspace(t){var e=0;for(var o in t)"object"===_typeof(t[o])&&("background"!==o?(setElement(elements[e].workspace,t[o]),setControl(elements[e].control,t[o]),e++):$(".cert-wokrspace__content").css("background-image",'url("'+t.background.image+'")'))}function setBgSize(){var t=void 0;switch($("#control-bg").find(".control-bg-size").val()){case"По ширине":t="100% auto";break;case"По высоте":t="auto 100%"}$(".cert-wokrspace__content").css("background-size",t),userData.background.size=$("#control-bg").find(".control-bg-size").val()}function setBgPosition(t){var e=t.background.positionLeft,o=t.background.positionTop;$(".cert-wokrspace__content").css("background-position",e+"px "+o+"px"),$("#control-bg").find(".control-top").val(o),$("#control-bg").find(".control-left").val(e)}function changeBgPosition(){var t=$("#control-bg").find(".control-top").val(),e=$("#control-bg").find(".control-left").val();$(".cert-wokrspace__content").css("background-position",e+"px "+t+"px"),userData.background.positionTop=t,userData.background.positionLeft=e}function setElement(t,e){switch(t.css({top:e.positionTop+"px",left:e.positionLeft+"px",width:e.width+"px","font-family":e.fontFamily,"font-size":e.fontSize+"px","line-height":e.lineHeight,color:e.color,"text-align":e.textAlign}).text(e.value),e.fontStyle){case"По умолчанию":t.css({"font-style":"normal","font-weight":"normal"});break;case"Жирный":t.css({"font-style":"normal","font-weight":"bold"});break;case"Курсив":t.css({"font-style":"italic","font-weight":"normal"});break;case"Жирный + курсив":t.css({"font-style":"italic","font-weight":"bold"});break;default:t.css({"font-style":"normal","font-weight":"normal"})}switch(e.textAlign){case"По левому краю":t.css("text-align","left");break;case"По правому краю":t.css("text-align","right");break;case"По центру":t.css("text-align","center");break;case"По ширине":t.css("text-align","justify");break;default:t.css("text-align","left")}}function setControl(t,e){t.find(".control-top").val(e.positionTop),t.find(".control-left").val(e.positionLeft),t.find(".control-width").val(e.width),t.find(".control-font-family").val(e.fontFamily),t.find(".control-font-size").val(e.fontSize),t.find(".control-line-height").val(e.lineHeight),t.find(".control-color").val(e.color),t.find(".control-font-style").val(e.fontStyle),t.find(".control-text-align").val(e.textAlign)}function setWorkspaceZoom(t){$(".cert-wokrspace__content").css({zoom:1/t,"-moz-transform":1/t})}function setBorder(t,e){t.addEventListener("click",function(t){e.classList.toggle("cert-bordered"),e.classList.toggle("cert-active")})}function setTop(t,e){t.addEventListener("input",function(t){e.style.top=t.target.value+"px"})}function setLeft(t,e){t.addEventListener("input",function(t){e.style.left=t.target.value+"px"})}function setWidth(t,e){t.addEventListener("input",function(t){e.style.width=t.target.value+"px"})}function setFontFamily(t,e){t.addEventListener("input",function(t){e.style.fontFamily=t.target.value})}function setFontSize(t,e){t.addEventListener("input",function(t){e.style.fontSize=t.target.value+"px"})}function setLineHeight(t,e){t.addEventListener("input",function(t){e.style.lineHeight=t.target.value})}function setColor(t,e){t.addEventListener("input",function(t){e.style.color=t.target.value})}function setFontStyle(t,n){t.addEventListener("input",function(t){var e="normal",o="normal";switch(t.target.value){case"По умолчанию":o=e="normal";break;case"Жирный":e="normal",o="bold";break;case"Курсив":e="italic",o="normal";break;case"Жирный + курсив":e="italic",o="bold";break;default:o=e="normal"}n.style.fontStyle=e,n.style.fontWeight=o})}function setTextAlign(t,o){t.addEventListener("input",function(t){var e="left";switch(t.target.value){case"По левому краю":e="left";break;case"По правому краю":e="right";break;case"По центру":e="center";break;case"По ширине":e="justify"}o.style.textAlign=e})}function setDragResize(t,o,n,r){t.draggable({containment:"parent",drag:function(t,e){o.val(Math.ceil(e.position.top)),n.val(Math.ceil(e.position.left))}}),t.resizable({handles:"e, w",containment:"parent",resize:function(t,e){t.target.style.maxWidth=Math.ceil(e.size.width)+"px",r.val(Math.ceil(e.size.width))}})}function readFile(t,e){var o=new FileReader;o.onload=e,o.readAsDataURL(t)}function createPreviewPdf(){var e=$(".cert-wokrspace__content").width(),o=$(".cert-wokrspace__content").height(),n="landscape"==userData.orientation?841.89:595.28,r="landscape"==userData.orientation?595.28:841.89;function t(t){return t.position().left/e*n}function c(t){return t.position().top/o*r}function a(t){return t.width()/e*n}function i(t){return t.css("font-family")}function s(t){return parseInt(t.css("font-size"),10)/e*n}function l(t){return"bold"===t.css("font-weight")}function d(t){return"italic"===t.css("font-style")}function u(t){return parseInt(t.css("line-height"),10)/s(t)/e*n}function f(t){return function(t){if(-1==t.search("rgb"))return t;var e=function(t){return("0"+parseInt(t).toString(16)).slice(-2)};return"#"+e((t=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/))[1])+e(t[2])+e(t[3])}(t.css("color"))}function g(t){return t.css("text-align")}var p={info:{title:"certificate"},pageSize:"A4",pageOrientation:userData.orientation,background:[{image:userData.background.image,width:"По ширине"===userData.background.size?n:r*loadedImg.width/loadedImg.height,height:"По высоте"===userData.background.size?r:n*loadedImg.height/loadedImg.width,absolutePosition:{x:Number(userData.background.positionLeft),y:Number(userData.background.positionTop)}}],content:[{table:{widths:[a($(".cert-name"))],body:[[{fontSize:s($(".cert-name")),font:i($(".cert-name")),bold:l($(".cert-name")),italics:d($(".cert-name")),lineHeight:u($(".cert-name")),alignment:g($(".cert-name")),color:f($(".cert-name")),text:$(".cert-name").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:t($(".cert-name")),y:c($(".cert-name"))}},{table:{widths:[a($(".cert-number"))],body:[[{fontSize:s($(".cert-number")),font:i($(".cert-number")),bold:l($(".cert-number")),italics:d($(".cert-number")),lineHeight:u($(".cert-number")),alignment:g($(".cert-number")),color:f($(".cert-number")),text:$(".cert-number").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:t($(".cert-number")),y:c($(".cert-number"))}},{table:{widths:[a($(".cert-course"))],body:[[{fontSize:s($(".cert-course")),font:i($(".cert-course")),bold:l($(".cert-course")),italics:d($(".cert-course")),lineHeight:u($(".cert-course")),alignment:g($(".cert-course")),color:f($(".cert-course")),text:$(".cert-course").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:t($(".cert-course")),y:c($(".cert-course"))}},{table:{widths:[a($(".cert-date"))],body:[[{fontSize:s($(".cert-date")),font:i($(".cert-date")),bold:l($(".cert-date")),italics:d($(".cert-date")),lineHeight:u($(".cert-date")),alignment:g($(".cert-date")),color:f($(".cert-date")),text:$(".cert-date").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:t($(".cert-date")),y:c($(".cert-date"))}},{table:{widths:[a($(".cert-duration"))],body:[[{fontSize:s($(".cert-duration")),font:i($(".cert-duration")),bold:l($(".cert-duration")),italics:d($(".cert-duration")),lineHeight:u($(".cert-duration")),alignment:g($(".cert-duration")),color:f($(".cert-duration")),text:$(".cert-duration").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:t($(".cert-duration")),y:c($(".cert-duration"))}}]};pdfMake.fonts={Roboto:{normal:"Roboto-Regular.ttf",bold:"Roboto-Bold.ttf",italics:"Roboto-Italic.ttf",bolditalics:"Roboto-BoldItalic.ttf"},"Open Sans":{normal:"OpenSans-Regular.ttf",bold:"OpenSans-Bold.ttf",italics:"OpenSans-Italic.ttf",bolditalics:"OpenSans-BoldItalic.ttf"},Montserrat:{normal:"Montserrat-Regular.ttf",bold:"Montserrat-Bold.ttf",italics:"Montserrat-Italic.ttf",bolditalics:"Montserrat-BoldItalic.ttf"},Lora:{normal:"Lora-Regular.ttf",bold:"Lora-Bold.ttf",italics:"Lora-Italic.ttf",bolditalics:"Lora-BoldItalic.ttf"}},$("#previewFancyLink")[0].innerHTML='<a data-fancybox data-type="iframe" data-src="" href="javascript:;"></a>',pdfMake.createPdf(p).getBase64(function(t){$("#previewFancyLink a").attr("data-src","data:application/pdf;base64,"+t).click()})}$.getJSON("/json/data.json").done(function(t){userData=defaultData=t}).fail(function(t,e,o){var n=e+", "+o;console.log("Request Failed: "+n)}),$(document).ready(function(){renderWorkspace(defaultData),setWorkspaceZoom(scale=$(".cert-wokrspace__content").width()/$(".cert-wokrspace").width()),$("#fileBg").on("change",function(t){var e=new FileReader;e.readAsDataURL(this.files[0]),e.onload=function(){var t=new Image;t.onload=function(){loadedImg={width:t.width,height:t.height}},t.src=e.result,$(".cert-wokrspace__content").css("background-image",'url("'+t.src+'")'),userData.background.image=t.src},setBgSize(),setBgPosition(userData)}),$("#control-bg").find(".control-bg-size").on("change",setBgSize),$("#control-bg").find(".control-top").on("input",changeBgPosition),$("#control-bg").find(".control-left").on("input",changeBgPosition),$.each(elements,function(t,e){e.workspace[0].addEventListener("click",function(){$(".cert-controls .card-header a")[t+1].click()}),setBorder(e.control[0].querySelector(".control-hidder"),e.workspace[0]),setTop(e.control[0].querySelector(".control-top"),e.workspace[0]),setLeft(e.control[0].querySelector(".control-left"),e.workspace[0]),setWidth(e.control[0].querySelector(".control-width"),e.workspace[0]),setFontFamily(e.control[0].querySelector(".control-font-family"),e.workspace[0]),setFontSize(e.control[0].querySelector(".control-font-size"),e.workspace[0]),setLineHeight(e.control[0].querySelector(".control-line-height"),e.workspace[0]),setColor(e.control[0].querySelector(".control-color"),e.workspace[0]),setFontStyle(e.control[0].querySelector(".control-font-style"),e.workspace[0]),setTextAlign(e.control[0].querySelector(".control-text-align"),e.workspace[0]),setDragResize($(e.workspace[0]),$(e.control[0]).find(".control-top"),$(e.control[0]).find(".control-left"),$(e.control[0]).find(".control-width"))}),$.each($(".cert-controls .card-header a"),function(t,e){e.addEventListener("click",function(){$.each(elements,function(t,e){e.workspace[0].classList.remove("cert-active")}),"false"===e.getAttribute("aria-expanded")&&1<=t&&elements[t-1].workspace[0].classList.contains("cert-bordered")&&elements[t-1].workspace[0].classList.add("cert-active")})}),$("#preview").click(function(){createPreviewPdf()})}),$(".cert-wokrspace__zoom").click(function(){scale<=3&&setWorkspaceZoom(scale+=.5)}),$(".cert-wokrspace__reset").click(function(){setWorkspaceZoom(scale=$(".cert-wokrspace__content").width()/$(".cert-wokrspace").width())}),$(".cert-wokrspace__original").click(function(){setWorkspaceZoom(1),scale=1}),$(".cert-wokrspace__landscape").click(function(){$(".cert-wokrspace__content").css({height:"793.7px",width:"1122.5px"}),userData.orientation="landscape"}),$(".cert-wokrspace__portrait").click(function(){$(".cert-wokrspace__content").css({height:"1122.5px",width:"793.7px"}),userData.orientation="portrait"});
//# sourceMappingURL=maps/cert.js.map
