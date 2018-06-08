"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},defaultData={},userData={},loadedImg={},scale=1,resetData={name:{positionTop:"50",positionLeft:"50",width:"500",fontFamily:"Roboto",fontSize:"20",lineHeight:"1.25",color:"#000000",fontStyle:"bold",textAlign:"left",value:"Иванов Иван Иванович",maxStr:"2"},number:{positionTop:"50",positionLeft:"600",width:"500",fontFamily:"Roboto",fontSize:"20",lineHeight:"1.25",color:"#000000",fontStyle:"bold",textAlign:"left",value:"000-0000-000-01",maxStr:"1"},course:{positionTop:"300",positionLeft:"50",width:"500",fontFamily:"Roboto",fontSize:"30",lineHeight:"1.25",color:"#000000",fontStyle:"normal",textAlign:"left",value:"Технология блокчейн в сельском хозяйстве",maxStr:"2"},date:{positionTop:"600",positionLeft:"50",width:"500",fontFamily:"Roboto",fontSize:"20",lineHeight:"1.25",color:"#000000",fontStyle:"normal",textAlign:"left",value:"Дата окончания: 30.02.2007",maxStr:"1"},duration:{positionTop:"700",positionLeft:"50",width:"500",fontFamily:"Roboto",fontSize:"20",lineHeight:"1.25",color:"#000000",fontStyle:"normal",textAlign:"left",value:"Продолжительность: 2 часа",maxStr:"1"},background:{image:"data:image/jpeg;base64,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Y3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAAAQAAAAEAAQABAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAABaOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAABOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgABOEJJTQQCAAAAAAAEAAAAADhCSU0EMAAAAAAAAgEBOEJJTQQtAAAAAAAGAAEAAAACOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0sAAAAGAAAAAAAAAAAAAAABAAAAAQAAAAsEEQQ1BDcAIAQ4BDwENQQ9BDgALQAxAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAAQAAAABSZ2h0bG9uZwAAAAEAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0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IiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA1LTI5VDE5OjA3OjIyKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wNS0yOVQxOTowNzoyMiswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NTY5NTUzMi1mOTZmLTFiNGUtODIwNi01YjU3OTM4MjgyZmQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxZGYxNDEzOC0xZjU1LTYwNDUtYWE0YS0wMmZmYWRhN2NhMTQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzQ1MzQ0NC0xOTZkLTdiNGMtYmViYi05ZWNlNzJkMmRkOTUiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+DQoJCQk8eG1wTU06SGlzdG9yeT4NCgkJCQk8cmRmOlNlcT4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzM0NTM0NDQtMTk2ZC03YjRjLWJlYmItOWVjZTcyZDJkZDk1IiBzdEV2dDp3aGVuPSIyMDE4LTA1LTI5VDE5OjA3OjIyKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NTY5NTUzMi1mOTZmLTFiNGUtODIwNi01YjU3OTM4MjgyZmQiIHN0RXZ0OndoZW49IjIwMTgtMDUtMjlUMTk6MDc6MjIrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4NCgkJCQk8L3JkZjpTZXE+DQoJCQk8L3htcE1NOkhpc3Rvcnk+DQoJCTwvcmRmOkRlc2NyaXB0aW9uPg0KCTwvcmRmOlJERj4NCjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9J3cnPz7/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKAP/2Q==",positionTop:"0",positionLeft:"0",size:"width"},orientation:"landscape"},elements=[{workspace:$(".cert-name"),control:$("#control-name"),data:"name"},{workspace:$(".cert-number"),control:$("#control-number"),data:"number"},{workspace:$(".cert-course"),control:$("#control-course"),data:"course"},{workspace:$(".cert-date"),control:$("#control-date"),data:"date"},{workspace:$(".cert-duration"),control:$("#control-duration"),data:"duration"}];function renderWorkspace(A){var t=0;for(var e in A)"object"===_typeof(A[e])&&("background"!==e?(setElement(elements[t].workspace,A[e]),setControl(elements[t].control,A[e]),setDragResize($(elements[t].workspace[0]),$(elements[t].control[0]).find(".control-top"),$(elements[t].control[0]).find(".control-left"),$(elements[t].control[0]).find(".control-width"),userData[elements[t].data]),t++):$(".cert-wokrspace__content").css("background-image",'url("'+A.background.image+'")'))}function setBgSize(){var A=void 0;switch($("#control-bg").find(".control-bg-size").val()){case"width":A="100% auto";break;case"height":A="auto 100%"}$(".cert-wokrspace__content").css("background-size",A),userData.background.size=$("#control-bg").find(".control-bg-size").val()}function setBgPosition(A){var t=A.background.positionLeft,e=A.background.positionTop;$(".cert-wokrspace__content").css("background-position",t+"px "+e+"px"),$("#control-bg").find(".control-top").val(e),$("#control-bg").find(".control-left").val(t)}function changeBgPosition(){var A=$("#control-bg").find(".control-top").val(),t=$("#control-bg").find(".control-left").val();$(".cert-wokrspace__content").css("background-position",t+"px "+A+"px"),userData.background.positionTop=A,userData.background.positionLeft=t}function setElement(A,t){switch(A.css({top:t.positionTop+"px",left:t.positionLeft+"px",width:t.width+"px","font-family":t.fontFamily,"font-size":t.fontSize+"px","line-height":t.lineHeight,color:t.color,"text-align":t.textAlign}).text(t.value),t.fontStyle){case"normal":A.css({"font-style":"normal","font-weight":"normal"});break;case"bold":A.css({"font-style":"normal","font-weight":"bold"});break;case"italic":A.css({"font-style":"italic","font-weight":"normal"});break;case"boldItalic":A.css({"font-style":"italic","font-weight":"bold"});break;default:A.css({"font-style":"normal","font-weight":"normal"})}switch(t.textAlign){case"left":A.css("text-align","left");break;case"right":A.css("text-align","right");break;case"center":A.css("text-align","center");break;case"justify":A.css("text-align","justify");break;default:A.css("text-align","left")}}function setControl(A,t){switch(A.find(".control-top").val(t.positionTop),A.find(".control-left").val(t.positionLeft),A.find(".control-width").val(t.width),A.find(".control-font-family").val(t.fontFamily),A.find(".control-font-size").val(t.fontSize),A.find(".control-line-height").val(t.lineHeight),A.find(".control-color").val(t.color),A.find(".control-value").val(t.value),A.find(".control-max-str").val(t.maxStr),t.fontStyle){case"normal":A.find(".control-font-style").val("По умолчанию");break;case"bold":A.find(".control-font-style").val("Жирный");break;case"italic":A.find(".control-font-style").val("Курсив");break;case"boldItalic":A.find(".control-font-style").val("Жирный + курсив");break;default:A.find(".control-font-style").val("По умолчанию")}switch(t.textAlign){case"left":A.find(".control-text-align").val("По левому краю");break;case"right":A.find(".control-text-align").val("По правому краю");break;case"center":A.find(".control-text-align").val("По центру");break;case"justify":A.find(".control-text-align").val("По ширине");break;default:A.find(".control-text-align").val("По левому краю")}}function setWorkspaceZoom(A){$(".cert-wokrspace__content").css({zoom:1/A,"-moz-transform":1/A})}function setBorder(A,t){A.addEventListener("click",function(A){t.classList.toggle("cert-bordered"),t.classList.toggle("cert-active")})}function setTop(A,t,e){A.addEventListener("input",function(A){t.style.top=A.target.value+"px",e.positionTop=A.target.value})}function setLeft(A,t,e){A.addEventListener("input",function(A){t.style.left=A.target.value+"px",e.positionLeft=A.target.value})}function setWidth(A,t,e){A.addEventListener("input",function(A){t.style.width=A.target.value+"px",e.width=A.target.value,calcViewFont(t,e.maxStr,e.fontSize)})}function setFontFamily(A,t,e){A.addEventListener("input",function(A){t.style.fontFamily=A.target.value,e.fontFamily=A.target.value})}function setFontSize(A,t,e){A.addEventListener("input",function(A){500<parseInt(A.target.value)&&(A.target.value=500),t.style.fontSize=A.target.value+"px",e.fontSize=A.target.value,calcViewFont(t,e.maxStr,e.fontSize)})}function setLineHeight(A,t,e){A.addEventListener("input",function(A){t.style.lineHeight=A.target.value,e.lineHeight=A.target.value})}function setColor(A,t,e){A.addEventListener("input",function(A){t.style.color=A.target.value,e.color=A.target.value})}function setFontStyle(A,g,o){A.addEventListener("input",function(A){var t="normal",e="normal";switch(A.target.value){case"По умолчанию":e=t="normal";break;case"Жирный":t="normal",e="bold";break;case"Курсив":t="italic",e="normal";break;case"Жирный + курсив":t="italic",e="bold";break;default:e=t="normal"}g.style.fontStyle=t,g.style.fontWeight=e,o.fontStyle=A.target.value})}function setTextAlign(A,e,g){A.addEventListener("input",function(A){var t="left";switch(A.target.value){case"По левому краю":t="left";break;case"По правому краю":t="right";break;case"По центру":t="center";break;case"По ширине":t="justify"}e.style.textAlign=t,g.textAlign=A.target.value})}function setValue(A,t,e){A.addEventListener("input",function(A){$(t).text(A.target.value),e.value=A.target.value,calcViewFont(t,e.maxStr,parseInt($(t).css("font-size"),10)),$(t).resizable({handles:"e, w",containment:"parent"})})}function setMaxStr(A,t,e){A.addEventListener("input",function(A){$(t).css("font-size",e.fontSize+"px"),calcViewFont(t,A.target.value,parseInt($(t).css("font-size"),10)),e.maxStr=A.target.value})}function setDragResize(g,o,I,n,a){g.draggable({containment:"parent",drag:function(A,t){var e=Math.ceil(t.position.top),g=Math.ceil(t.position.left);o.val(e),I.val(g),a.positionTop=""+e,a.positionLeft=""+g}}),g.resizable({handles:"e, w",containment:"parent",resize:function(A,t){var e=Math.ceil(t.size.width);A.target.style.maxWidth=e+"px",n.val(e),a.width=""+e,calcViewFont(g,a.maxStr,a.fontSize)}})}function readFile(A,t){var e=new FileReader;e.onload=t,e.readAsDataURL(A)}function createPreviewPdf(){var t=$(".cert-wokrspace__content").width(),e=$(".cert-wokrspace__content").height(),g="landscape"==userData.orientation?841.89:595.28,o="landscape"==userData.orientation?595.28:841.89;function A(A){return A.position().left/t*g}function I(A){return A.position().top/e*o}function n(A){return A.width()/t*g}function a(A){return A.css("font-family")}function C(A){return parseInt(A.css("font-size"),10)/t*g}function c(A){return 600<=A.css("font-weight")}function r(A){return"italic"===A.css("font-style")}function i(A){return parseInt(A.css("line-height"),10)/C(A)/t*g}function l(A){return function(A){if(-1==A.search("rgb"))return A;var t=function(A){return("0"+parseInt(A).toString(16)).slice(-2)};return"#"+t((A=A.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/))[1])+t(A[2])+t(A[3])}(A.css("color"))}function s(A){return A.css("text-align")}var d={info:{title:"certificate"},pageSize:"A4",pageOrientation:userData.orientation,background:[{image:userData.background.image,width:"width"===userData.background.size?g:o*loadedImg.width/loadedImg.height,height:"height"===userData.background.size?o:g*loadedImg.height/loadedImg.width,absolutePosition:{x:Number(userData.background.positionLeft),y:Number(userData.background.positionTop)}}],content:[{table:{widths:[n($(".cert-name"))],body:[[{fontSize:C($(".cert-name")),font:a($(".cert-name")),bold:c($(".cert-name")),italics:r($(".cert-name")),lineHeight:i($(".cert-name")),alignment:s($(".cert-name")),color:l($(".cert-name")),text:$(".cert-name").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:A($(".cert-name")),y:I($(".cert-name"))}},{table:{widths:[n($(".cert-number"))],body:[[{fontSize:C($(".cert-number")),font:a($(".cert-number")),bold:c($(".cert-number")),italics:r($(".cert-number")),lineHeight:i($(".cert-number")),alignment:s($(".cert-number")),color:l($(".cert-number")),text:$(".cert-number").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:A($(".cert-number")),y:I($(".cert-number"))}},{table:{widths:[n($(".cert-course"))],body:[[{fontSize:C($(".cert-course")),font:a($(".cert-course")),bold:c($(".cert-course")),italics:r($(".cert-course")),lineHeight:i($(".cert-course")),alignment:s($(".cert-course")),color:l($(".cert-course")),text:$(".cert-course").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:A($(".cert-course")),y:I($(".cert-course"))}},{table:{widths:[n($(".cert-date"))],body:[[{fontSize:C($(".cert-date")),font:a($(".cert-date")),bold:c($(".cert-date")),italics:r($(".cert-date")),lineHeight:i($(".cert-date")),alignment:s($(".cert-date")),color:l($(".cert-date")),text:$(".cert-date").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:A($(".cert-date")),y:I($(".cert-date"))}},{table:{widths:[n($(".cert-duration"))],body:[[{fontSize:C($(".cert-duration")),font:a($(".cert-duration")),bold:c($(".cert-duration")),italics:r($(".cert-duration")),lineHeight:i($(".cert-duration")),alignment:s($(".cert-duration")),color:l($(".cert-duration")),text:$(".cert-duration").text(),border:[!1,!1,!1,!1],margin:[-5,-5,-5,-5]}]]},absolutePosition:{x:A($(".cert-duration")),y:I($(".cert-duration"))}}]};pdfMake.fonts={Roboto:{normal:"Roboto-Regular.ttf",bold:"Roboto-Bold.ttf",italics:"Roboto-Italic.ttf",bolditalics:"Roboto-BoldItalic.ttf"},"Open Sans":{normal:"OpenSans-Regular.ttf",bold:"OpenSans-Bold.ttf",italics:"OpenSans-Italic.ttf",bolditalics:"OpenSans-BoldItalic.ttf"},Montserrat:{normal:"Montserrat-Regular.ttf",bold:"Montserrat-Bold.ttf",italics:"Montserrat-Italic.ttf",bolditalics:"Montserrat-BoldItalic.ttf"},Lora:{normal:"Lora-Regular.ttf",bold:"Lora-Bold.ttf",italics:"Lora-Italic.ttf",bolditalics:"Lora-BoldItalic.ttf"}},$("#previewFancyLink")[0].innerHTML='<a data-fancybox data-type="iframe" data-src="" href="javascript:;"></a>',pdfMake.createPdf(d).getBase64(function(A){$("#previewFancyLink a").attr("data-src","data:application/pdf;base64,"+A).click()})}function calcViewFont(A,t,e){$(A).css("font-size",e+"px");for(var g,o=0;g=$(A),$(g).height()/parseInt($(g).css("line-height"),10)>t;)o++,$(A).css("font-size",e-o+"px")}$.getJSON("json/data.json").done(function(A){renderWorkspace(defaultData=userData=A)}).fail(function(A,t,e){var g=t+", "+e;console.log("Request Failed: "+g),userData=jQuery.extend(!0,{},resetData),renderWorkspace(defaultData=jQuery.extend(!0,{},resetData))}),$(document).ready(function(){setWorkspaceZoom(scale=$(".cert-wokrspace__content").width()/$(".cert-wokrspace").width()),$("#fileBg").on("change",function(A){var t=new FileReader;t.readAsDataURL(this.files[0]),t.onload=function(){var A=new Image;A.onload=function(){loadedImg={width:A.width,height:A.height}},A.src=t.result,$(".cert-wokrspace__content").css("background-image",'url("'+A.src+'")'),userData.background.image=A.src},setBgSize(),setBgPosition(userData)}),$("#control-bg").find(".control-bg-size").on("change",setBgSize),$("#control-bg").find(".control-top").on("input",changeBgPosition),$("#control-bg").find(".control-left").on("input",changeBgPosition),$.each(elements,function(A,t){t.workspace[0].addEventListener("click",function(){$(".cert-controls .card-header a")[A+1].click()}),setBorder(t.control[0].querySelector(".control-hidder"),t.workspace[0]),setTop(t.control[0].querySelector(".control-top"),t.workspace[0],userData[t.data]),setLeft(t.control[0].querySelector(".control-left"),t.workspace[0],userData[t.data]),setWidth(t.control[0].querySelector(".control-width"),t.workspace[0],userData[t.data]),setFontFamily(t.control[0].querySelector(".control-font-family"),t.workspace[0],userData[t.data]),setFontSize(t.control[0].querySelector(".control-font-size"),t.workspace[0],userData[t.data]),setLineHeight(t.control[0].querySelector(".control-line-height"),t.workspace[0],userData[t.data]),setColor(t.control[0].querySelector(".control-color"),t.workspace[0],userData[t.data]),setFontStyle(t.control[0].querySelector(".control-font-style"),t.workspace[0],userData[t.data]),setTextAlign(t.control[0].querySelector(".control-text-align"),t.workspace[0],userData[t.data]),setValue(t.control[0].querySelector(".control-value"),t.workspace[0],userData[t.data]),setMaxStr(t.control[0].querySelector(".control-max-str"),t.workspace[0],userData[t.data])}),$.each($(".cert-controls .card-header a"),function(A,t){t.addEventListener("click",function(){$.each(elements,function(A,t){t.workspace[0].classList.remove("cert-active")}),"false"===t.getAttribute("aria-expanded")&&1<=A&&elements[A-1].workspace[0].classList.contains("cert-bordered")&&elements[A-1].workspace[0].classList.add("cert-active")})}),$("#preview").click(function(){createPreviewPdf()}),$("#save").click(function(){console.log(userData)}),$("#reset").click(function(){userData=jQuery.extend(!0,{},resetData),defaultData=jQuery.extend(!0,{},resetData),renderWorkspace(resetData)})}),$(".cert-wokrspace__zoom").click(function(){scale<=3&&setWorkspaceZoom(scale+=.5)}),$(".cert-wokrspace__reset").click(function(){setWorkspaceZoom(scale=$(".cert-wokrspace__content").width()/$(".cert-wokrspace").width())}),$(".cert-wokrspace__original").click(function(){setWorkspaceZoom(1),scale=1}),$(".cert-wokrspace__landscape").click(function(){$(".cert-wokrspace__content").css({height:"793.7px",width:"1122.5px"}),userData.orientation="landscape"}),$(".cert-wokrspace__portrait").click(function(){$(".cert-wokrspace__content").css({height:"1122.5px",width:"793.7px"}),userData.orientation="portrait"});
//# sourceMappingURL=maps/cert.js.map
