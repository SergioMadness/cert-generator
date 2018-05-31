"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},defaultData={},userData={},scale=1,elements=[{workspace:$(".cert-name"),control:$("#control-name")},{workspace:$(".cert-number"),control:$("#control-number")},{workspace:$(".cert-course"),control:$("#control-course")},{workspace:$(".cert-date"),control:$("#control-date")},{workspace:$(".cert-duration"),control:$("#control-duration")}],request=new XMLHttpRequest;function renderWorkspace(t){var e=0;for(var o in t)"object"===_typeof(t[o])&&("background"!==o?(setElement(elements[e].workspace,t[o]),setControl(elements[e].control,t[o]),e++):$(".cert-wokrspace__content").css("background-image",'url("'+t.background.image+'")'))}function setBgSize(){var t=void 0;switch($("#control-bg").find(".control-bg-size").val()){case"По ширине":t="100% auto";break;case"По высоте":t="auto 100%"}$(".cert-wokrspace__content").css("background-size",t),userData.background.size=$("#control-bg").find(".control-bg-size").val()}function setBgPosition(){var t=void 0;switch($("#control-bg").find(".control-bg-position").val()){case"Верх / Лево":t="top left";break;case"Верх / Центр":t="top center";break;case"Верх / Право":t="top right";break;case"Право / Центр":t="center right";break;case"Право / Низ":t="bottom right";break;case"Низ / Центр":t="bottom center";break;case"Низ / Лево":t="bottom left";break;case"Лево / Центр":t="center left";break;case"Центр":t="center center"}$(".cert-wokrspace__content").css("background-position",t),userData.background.position=$("#control-bg").find(".control-bg-position").val()}function setElement(t,e){switch(t.css({top:e.positionTop+"px",left:e.positionLeft+"px",width:e.width+"px","font-family":e.fontFamily,"font-size":e.fontSize+"px","line-height":e.lineHeight,color:e.color,"text-align":e.textAlign}).text(e.value),e.fontStyle){case"По умолчанию":t.css({"font-style":"normal","font-weight":"normal"});break;case"Жирный":t.css({"font-style":"normal","font-weight":"bold"});break;case"Курсив":t.css({"font-style":"italic","font-weight":"normal"});break;case"Жирный + курсив":t.css({"font-style":"italic","font-weight":"bold"});break;default:t.css({"font-style":"normal","font-weight":"normal"})}switch(e.textAlign){case"По левому краю":t.css("text-align","left");break;case"По правому краю":t.css("text-align","right");break;case"По центру":t.css("text-align","center");break;case"По ширине":t.css("text-align","justify");break;default:t.css("text-align","left")}}function setControl(t,e){t.find(".control-top").val(e.positionTop),t.find(".control-left").val(e.positionLeft),t.find(".control-width").val(e.width),t.find(".control-font-family").val(e.fontFamily),t.find(".control-font-size").val(e.fontSize),t.find(".control-line-height").val(e.lineHeight),t.find(".control-color").val(e.color),t.find(".control-font-style").val(e.fontStyle),t.find(".control-text-align").val(e.textAlign)}function setWorkspaceZoom(t){$(".cert-wokrspace__content").css({zoom:1/t,"-moz-transform":1/t})}function setBorder(t,e){t.addEventListener("click",function(t){e.classList.toggle("cert-bordered"),e.classList.toggle("cert-active")})}function setTop(t,e){t.addEventListener("input",function(t){e.style.top=t.target.value+"px"})}function setLeft(t,e){t.addEventListener("input",function(t){e.style.left=t.target.value+"px"})}function setWidth(t,e){t.addEventListener("input",function(t){e.style.width=t.target.value+"px"})}function setFontFamily(t,e){t.addEventListener("input",function(t){e.style.fontFamily=t.target.value})}function setFontSize(t,e){t.addEventListener("input",function(t){e.style.fontSize=t.target.value+"px"})}function setLineHeight(t,e){t.addEventListener("input",function(t){e.style.lineHeight=t.target.value})}function setColor(t,e){t.addEventListener("input",function(t){e.style.color=t.target.value})}function setFontStyle(t,n){t.addEventListener("input",function(t){var e="normal",o="normal";switch(t.target.value){case"По умолчанию":o=e="normal";break;case"Жирный":e="normal",o="bold";break;case"Курсив":e="italic",o="normal";break;case"Жирный + курсив":e="italic",o="bold";break;default:o=e="normal"}n.style.fontStyle=e,n.style.fontWeight=o})}function setTextAlign(t,o){t.addEventListener("input",function(t){var e="left";switch(t.target.value){case"По левому краю":e="left";break;case"По правому краю":e="right";break;case"По центру":e="center";break;case"По ширине":e="justify"}o.style.textAlign=e})}function setDragResize(t,o,n,r){t.draggable({containment:"parent",drag:function(t,e){o.val(Math.ceil(e.position.top)),n.val(Math.ceil(e.position.left))}}),t.resizable({handles:"e, w",containment:"parent",resize:function(t,e){t.target.style.maxWidth=Math.ceil(e.size.width)+"px",r.val(Math.ceil(e.size.width))}})}function readFile(t,e){var o=new FileReader;o.onload=e,o.readAsDataURL(t)}function createPreviewPdf(){var e=$(".cert-wokrspace__content").width(),o=$(".cert-wokrspace__content").height(),n="landscape"==userData.orientation?841.89:595.28,r="landscape"==userData.orientation?595.28:841.89;function t(t){return t.position().left/e*n}function c(t){return t.position().top/o*r}var a,i={info:{title:"certificate"},pageSize:"A4",pageOrientation:userData.orientation,background:[{image:userData.background.image,width:"По ширине"===userData.background.size?n:"",height:"По высоте"===userData.background.size?r:""}],content:[{table:{widths:[(a=$(".cert-name"),a.width()/e*n)],body:[[{fontSize:24,text:$(".cert-name").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:t($(".cert-name")),y:c($(".cert-name"))}},{text:$(".cert-number").text(),absolutePosition:{x:t($(".cert-number")),y:c($(".cert-number"))}},{text:$(".cert-course").text(),absolutePosition:{x:t($(".cert-course")),y:c($(".cert-course"))}},{text:$(".cert-date").text(),absolutePosition:{x:t($(".cert-date")),y:c($(".cert-date"))}},{text:$(".cert-duration").text(),absolutePosition:{x:t($(".cert-duration")),y:c($(".cert-duration"))}}]};$("#previewFancyLink")[0].innerHTML='<a data-fancybox data-type="iframe" data-src="" href="javascript:;"></a>',pdfMake.createPdf(i).getBase64(function(t){$("#previewFancyLink a").attr("data-src","data:application/pdf;base64,"+t).click()})}request.open("GET","/cert-generator/json/data.json",!0),request.onload=function(){if(200<=request.status&&request.status<400){var t=JSON.parse(request.responseText);console.log(t)}else console.log("nothing")},request.onerror=function(){},$(document).ready(function(){renderWorkspace(defaultData),setWorkspaceZoom(scale=$(".cert-wokrspace__content").width()/$(".cert-wokrspace").width()),$("#fileBg").on("change",function(t){readFile(this.files[0],function(t){$(".cert-wokrspace__content").css("background-image",'url("'+t.target.result+'")'),userData.background.image=t.target.result}),setBgSize(),setBgPosition()}),$("#control-bg").find(".control-bg-size").on("change",setBgSize),$("#control-bg").find(".control-bg-position").on("change",setBgPosition),$.each(elements,function(t,e){e.workspace[0].addEventListener("click",function(){$(".cert-controls .card-header a")[t+1].click()}),setBorder(e.control[0].querySelector(".control-hidder"),e.workspace[0]),setTop(e.control[0].querySelector(".control-top"),e.workspace[0]),setLeft(e.control[0].querySelector(".control-left"),e.workspace[0]),setWidth(e.control[0].querySelector(".control-width"),e.workspace[0]),setFontFamily(e.control[0].querySelector(".control-font-family"),e.workspace[0]),setFontSize(e.control[0].querySelector(".control-font-size"),e.workspace[0]),setLineHeight(e.control[0].querySelector(".control-line-height"),e.workspace[0]),setColor(e.control[0].querySelector(".control-color"),e.workspace[0]),setFontStyle(e.control[0].querySelector(".control-font-style"),e.workspace[0]),setTextAlign(e.control[0].querySelector(".control-text-align"),e.workspace[0]),setDragResize($(e.workspace[0]),$(e.control[0]).find(".control-top"),$(e.control[0]).find(".control-left"),$(e.control[0]).find(".control-width"))}),$.each($(".cert-controls .card-header a"),function(t,e){e.addEventListener("click",function(){$.each(elements,function(t,e){e.workspace[0].classList.remove("cert-active")}),"false"===e.getAttribute("aria-expanded")&&1<=t&&elements[t-1].workspace[0].classList.contains("cert-bordered")&&elements[t-1].workspace[0].classList.add("cert-active")})}),$("#preview").click(function(){createPreviewPdf()})}),$(".cert-wokrspace__zoom").click(function(){scale<=3&&setWorkspaceZoom(scale+=.5)}),$(".cert-wokrspace__reset").click(function(){setWorkspaceZoom(scale=$(".cert-wokrspace__content").width()/$(".cert-wokrspace").width())}),$(".cert-wokrspace__original").click(function(){setWorkspaceZoom(1),scale=1}),$(".cert-wokrspace__landscape").click(function(){$(".cert-wokrspace__content").css({height:"793.7px",width:"1122.5px"}),userData.orientation="landscape"}),$(".cert-wokrspace__portrait").click(function(){$(".cert-wokrspace__content").css({height:"1122.5px",width:"793.7px"}),userData.orientation="portrait"});
//# sourceMappingURL=maps/cert.js.map
