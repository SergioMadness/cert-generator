"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},defaultData={},userData={},loadedImg={},scale=1,elements=[{workspace:$(".cert-name"),control:$("#control-name"),data:"name"},{workspace:$(".cert-number"),control:$("#control-number"),data:"number"},{workspace:$(".cert-course"),control:$("#control-course"),data:"course"},{workspace:$(".cert-date"),control:$("#control-date"),data:"date"},{workspace:$(".cert-duration"),control:$("#control-duration"),data:"duration"}];function renderWorkspace(t){var e=0;for(var o in t)"object"===_typeof(t[o])&&("background"!==o?(setElement(elements[e].workspace,t[o]),setControl(elements[e].control,t[o]),e++):$(".cert-wokrspace__content").css("background-image",'url("'+t.background.image+'")'))}function setBgSize(){var t=void 0;switch($("#control-bg").find(".control-bg-size").val()){case"По ширине":t="100% auto";break;case"По высоте":t="auto 100%"}$(".cert-wokrspace__content").css("background-size",t),userData.background.size=$("#control-bg").find(".control-bg-size").val()}function setBgPosition(t){var e=t.background.positionLeft,o=t.background.positionTop;$(".cert-wokrspace__content").css("background-position",e+"px "+o+"px"),$("#control-bg").find(".control-top").val(o),$("#control-bg").find(".control-left").val(e)}function changeBgPosition(){var t=$("#control-bg").find(".control-top").val(),e=$("#control-bg").find(".control-left").val();$(".cert-wokrspace__content").css("background-position",e+"px "+t+"px"),userData.background.positionTop=t,userData.background.positionLeft=e}function setElement(t,e){switch(t.css({top:e.positionTop+"px",left:e.positionLeft+"px",width:e.width+"px","font-family":e.fontFamily,"font-size":e.fontSize+"px","line-height":e.lineHeight,color:e.color,"text-align":e.textAlign}).text(e.value),e.fontStyle){case"По умолчанию":t.css({"font-style":"normal","font-weight":"normal"});break;case"Жирный":t.css({"font-style":"normal","font-weight":"bold"});break;case"Курсив":t.css({"font-style":"italic","font-weight":"normal"});break;case"Жирный + курсив":t.css({"font-style":"italic","font-weight":"bold"});break;default:t.css({"font-style":"normal","font-weight":"normal"})}switch(e.textAlign){case"По левому краю":t.css("text-align","left");break;case"По правому краю":t.css("text-align","right");break;case"По центру":t.css("text-align","center");break;case"По ширине":t.css("text-align","justify");break;default:t.css("text-align","left")}}function setControl(t,e){t.find(".control-top").val(e.positionTop),t.find(".control-left").val(e.positionLeft),t.find(".control-width").val(e.width),t.find(".control-font-family").val(e.fontFamily),t.find(".control-font-size").val(e.fontSize),t.find(".control-line-height").val(e.lineHeight),t.find(".control-color").val(e.color),t.find(".control-font-style").val(e.fontStyle),t.find(".control-text-align").val(e.textAlign),t.find(".control-value").val(e.value),t.find(".control-max-str").val(e.maxStr)}function setWorkspaceZoom(t){$(".cert-wokrspace__content").css({zoom:1/t,"-moz-transform":1/t})}function setBorder(t,e){t.addEventListener("click",function(t){e.classList.toggle("cert-bordered"),e.classList.toggle("cert-active")})}function setTop(t,e,o){t.addEventListener("input",function(t){e.style.top=t.target.value+"px",o.positionTop=t.target.value})}function setLeft(t,e,o){t.addEventListener("input",function(t){e.style.left=t.target.value+"px",o.positionLeft=t.target.value})}function setWidth(t,e,o){t.addEventListener("input",function(t){e.style.width=t.target.value+"px",o.width=t.target.value,calcViewFont(e,o.maxStr,o.fontSize)})}function setFontFamily(t,e,o){t.addEventListener("input",function(t){e.style.fontFamily=t.target.value,o.fontFamily=t.target.value})}function setFontSize(t,e,o){t.addEventListener("input",function(t){500<parseInt(t.target.value)&&(t.target.value=500),e.style.fontSize=t.target.value+"px",o.fontSize=t.target.value,calcViewFont(e,o.maxStr,o.fontSize)})}function setLineHeight(t,e,o){t.addEventListener("input",function(t){e.style.lineHeight=t.target.value,o.lineHeight=t.target.value})}function setColor(t,e,o){t.addEventListener("input",function(t){e.style.color=t.target.value,o.color=t.target.value})}function setFontStyle(t,n,a){t.addEventListener("input",function(t){var e="normal",o="normal";switch(t.target.value){case"По умолчанию":o=e="normal";break;case"Жирный":e="normal",o="bold";break;case"Курсив":e="italic",o="normal";break;case"Жирный + курсив":e="italic",o="bold";break;default:o=e="normal"}n.style.fontStyle=e,n.style.fontWeight=o,a.fontStyle=t.target.value})}function setTextAlign(t,o,n){t.addEventListener("input",function(t){var e="left";switch(t.target.value){case"По левому краю":e="left";break;case"По правому краю":e="right";break;case"По центру":e="center";break;case"По ширине":e="justify"}o.style.textAlign=e,n.textAlign=t.target.value})}function setValue(t,e,o){t.addEventListener("input",function(t){$(e).text(t.target.value),o.value=t.target.value,calcViewFont(e,o.maxStr,parseInt($(e).css("font-size"),10)),$(e).resizable({handles:"e, w",containment:"parent"})})}function setMaxStr(t,e,o){t.addEventListener("input",function(t){$(e).css("font-size",o.fontSize+"px"),calcViewFont(e,t.target.value,parseInt($(e).css("font-size"),10)),o.maxStr=t.target.value})}function setDragResize(n,a,r,c,i){n.draggable({containment:"parent",drag:function(t,e){var o=Math.ceil(e.position.top),n=Math.ceil(e.position.left);a.val(o),r.val(n),i.positionTop=""+o,i.positionLeft=""+n}}),n.resizable({handles:"e, w",containment:"parent",resize:function(t,e){var o=Math.ceil(e.size.width);t.target.style.maxWidth=o+"px",c.val(o),i.width=""+o,calcViewFont(n,i.maxStr,i.fontSize)}})}function readFile(t,e){var o=new FileReader;o.onload=e,o.readAsDataURL(t)}function createPreviewPdf(){var e=$(".cert-wokrspace__content").width(),o=$(".cert-wokrspace__content").height(),n="landscape"==userData.orientation?841.89:595.28,a="landscape"==userData.orientation?595.28:841.89;function t(t){return t.position().left/e*n}function r(t){return t.position().top/o*a}function c(t){return t.width()/e*n}function i(t){return t.css("font-family")}function s(t){return parseInt(t.css("font-size"),10)/e*n}function l(t){return 600<=t.css("font-weight")}function u(t){return"italic"===t.css("font-style")}function d(t){return parseInt(t.css("line-height"),10)/s(t)/e*n}function f(t){return function(t){if(-1==t.search("rgb"))return t;var e=function(t){return("0"+parseInt(t).toString(16)).slice(-2)};return"#"+e((t=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/))[1])+e(t[2])+e(t[3])}(t.css("color"))}function g(t){return t.css("text-align")}var p={info:{title:"certificate"},pageSize:"A4",pageOrientation:userData.orientation,background:[{image:userData.background.image,width:"По ширине"===userData.background.size?n:a*loadedImg.width/loadedImg.height,height:"По высоте"===userData.background.size?a:n*loadedImg.height/loadedImg.width,absolutePosition:{x:Number(userData.background.positionLeft),y:Number(userData.background.positionTop)}}],content:[{table:{widths:[c($(".cert-name"))],body:[[{fontSize:s($(".cert-name")),font:i($(".cert-name")),bold:l($(".cert-name")),italics:u($(".cert-name")),lineHeight:d($(".cert-name")),alignment:g($(".cert-name")),color:f($(".cert-name")),text:$(".cert-name").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:t($(".cert-name")),y:r($(".cert-name"))}},{table:{widths:[c($(".cert-number"))],body:[[{fontSize:s($(".cert-number")),font:i($(".cert-number")),bold:l($(".cert-number")),italics:u($(".cert-number")),lineHeight:d($(".cert-number")),alignment:g($(".cert-number")),color:f($(".cert-number")),text:$(".cert-number").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:t($(".cert-number")),y:r($(".cert-number"))}},{table:{widths:[c($(".cert-course"))],body:[[{fontSize:s($(".cert-course")),font:i($(".cert-course")),bold:l($(".cert-course")),italics:u($(".cert-course")),lineHeight:d($(".cert-course")),alignment:g($(".cert-course")),color:f($(".cert-course")),text:$(".cert-course").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:t($(".cert-course")),y:r($(".cert-course"))}},{table:{widths:[c($(".cert-date"))],body:[[{fontSize:s($(".cert-date")),font:i($(".cert-date")),bold:l($(".cert-date")),italics:u($(".cert-date")),lineHeight:d($(".cert-date")),alignment:g($(".cert-date")),color:f($(".cert-date")),text:$(".cert-date").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:t($(".cert-date")),y:r($(".cert-date"))}},{table:{widths:[c($(".cert-duration"))],body:[[{fontSize:s($(".cert-duration")),font:i($(".cert-duration")),bold:l($(".cert-duration")),italics:u($(".cert-duration")),lineHeight:d($(".cert-duration")),alignment:g($(".cert-duration")),color:f($(".cert-duration")),text:$(".cert-duration").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:t($(".cert-duration")),y:r($(".cert-duration"))}}]};pdfMake.fonts={Roboto:{normal:"Roboto-Regular.ttf",bold:"Roboto-Bold.ttf",italics:"Roboto-Italic.ttf",bolditalics:"Roboto-BoldItalic.ttf"},"Open Sans":{normal:"OpenSans-Regular.ttf",bold:"OpenSans-Bold.ttf",italics:"OpenSans-Italic.ttf",bolditalics:"OpenSans-BoldItalic.ttf"},Montserrat:{normal:"Montserrat-Regular.ttf",bold:"Montserrat-Bold.ttf",italics:"Montserrat-Italic.ttf",bolditalics:"Montserrat-BoldItalic.ttf"},Lora:{normal:"Lora-Regular.ttf",bold:"Lora-Bold.ttf",italics:"Lora-Italic.ttf",bolditalics:"Lora-BoldItalic.ttf"}},$("#previewFancyLink")[0].innerHTML='<a data-fancybox data-type="iframe" data-src="" href="javascript:;"></a>',pdfMake.createPdf(p).getBase64(function(t){$("#previewFancyLink a").attr("data-src","data:application/pdf;base64,"+t).click()})}function calcViewFont(t,e,o){$(t).css("font-size",o+"px");for(var n,a=0;n=$(t),$(n).height()/parseInt($(n).css("line-height"),10)>e;)a++,$(t).css("font-size",o-a+"px")}$.getJSON("json/data.json").done(function(t){userData=defaultData=t}).fail(function(t,e,o){var n=e+", "+o;console.log("Request Failed: "+n)}),$(document).ready(function(){renderWorkspace(defaultData),setWorkspaceZoom(scale=$(".cert-wokrspace__content").width()/$(".cert-wokrspace").width()),$("#fileBg").on("change",function(t){var e=new FileReader;e.readAsDataURL(this.files[0]),e.onload=function(){var t=new Image;t.onload=function(){loadedImg={width:t.width,height:t.height}},t.src=e.result,$(".cert-wokrspace__content").css("background-image",'url("'+t.src+'")'),userData.background.image=t.src},setBgSize(),setBgPosition(userData)}),$("#control-bg").find(".control-bg-size").on("change",setBgSize),$("#control-bg").find(".control-top").on("input",changeBgPosition),$("#control-bg").find(".control-left").on("input",changeBgPosition),$.each(elements,function(t,e){e.workspace[0].addEventListener("click",function(){$(".cert-controls .card-header a")[t+1].click()}),setBorder(e.control[0].querySelector(".control-hidder"),e.workspace[0]),setTop(e.control[0].querySelector(".control-top"),e.workspace[0],userData[e.data]),setLeft(e.control[0].querySelector(".control-left"),e.workspace[0],userData[e.data]),setWidth(e.control[0].querySelector(".control-width"),e.workspace[0],userData[e.data]),setFontFamily(e.control[0].querySelector(".control-font-family"),e.workspace[0],userData[e.data]),setFontSize(e.control[0].querySelector(".control-font-size"),e.workspace[0],userData[e.data]),setLineHeight(e.control[0].querySelector(".control-line-height"),e.workspace[0],userData[e.data]),setColor(e.control[0].querySelector(".control-color"),e.workspace[0],userData[e.data]),setFontStyle(e.control[0].querySelector(".control-font-style"),e.workspace[0],userData[e.data]),setTextAlign(e.control[0].querySelector(".control-text-align"),e.workspace[0],userData[e.data]),setValue(e.control[0].querySelector(".control-value"),e.workspace[0],userData[e.data]),setMaxStr(e.control[0].querySelector(".control-max-str"),e.workspace[0],userData[e.data]),setDragResize($(e.workspace[0]),$(e.control[0]).find(".control-top"),$(e.control[0]).find(".control-left"),$(e.control[0]).find(".control-width"),userData[e.data])}),$.each($(".cert-controls .card-header a"),function(t,e){e.addEventListener("click",function(){$.each(elements,function(t,e){e.workspace[0].classList.remove("cert-active")}),"false"===e.getAttribute("aria-expanded")&&1<=t&&elements[t-1].workspace[0].classList.contains("cert-bordered")&&elements[t-1].workspace[0].classList.add("cert-active")})}),$("#preview").click(function(){createPreviewPdf()}),$("#save").click(function(){console.log(userData)})}),$(".cert-wokrspace__zoom").click(function(){scale<=3&&setWorkspaceZoom(scale+=.5)}),$(".cert-wokrspace__reset").click(function(){setWorkspaceZoom(scale=$(".cert-wokrspace__content").width()/$(".cert-wokrspace").width())}),$(".cert-wokrspace__original").click(function(){setWorkspaceZoom(1),scale=1}),$(".cert-wokrspace__landscape").click(function(){$(".cert-wokrspace__content").css({height:"793.7px",width:"1122.5px"}),userData.orientation="landscape"}),$(".cert-wokrspace__portrait").click(function(){$(".cert-wokrspace__content").css({height:"1122.5px",width:"793.7px"}),userData.orientation="portrait"});
//# sourceMappingURL=maps/cert.js.map
