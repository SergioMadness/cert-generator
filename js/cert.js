// GLOBALS
let defaultData = {},
  userData = {},
  loadedImg = {},
  scale = 1,
  resetData = {
    "name": {
      "positionTop": "50",
      "positionLeft": "50",
      "width": "500",
      "fontFamily": "Roboto",
      "fontSize": "20",
      "lineHeight": "1.25",
      "color": "#ff0000",
      "fontStyle": "Жирный",
      "textAlign": "По левому краю",
      "value": "Иванов Иван Иванович",
      "maxStr": "2"
    },
    "number": {
      "positionTop": "50",
      "positionLeft": "600",
      "width": "500",
      "fontFamily": "Roboto",
      "fontSize": "20",
      "lineHeight": "1.25",
      "color": "#0000ff",
      "fontStyle": "Жирный",
      "textAlign": "По левому краю",
      "value": "000-0000-000-01",
      "maxStr": "1"
    },
    "course": {
      "positionTop": "300",
      "positionLeft": "50",
      "width": "500",
      "fontFamily": "Roboto",
      "fontSize": "30",
      "lineHeight": "1.25",
      "color": "#00ff00",
      "fontStyle": "По умолчанию",
      "textAlign": "По левому краю",
      "value": "Технология блокчейн в сельском хозяйстве",
      "maxStr": "2"
    },
    "date": {
      "positionTop": "600",
      "positionLeft": "50",
      "width": "500",
      "fontFamily": "Roboto",
      "fontSize": "20",
      "lineHeight": "1.25",
      "color": "#ff0000",
      "fontStyle": "По умолчанию",
      "textAlign": "По левому краю",
      "value": "Дата окончания: 30.02.2007",
      "maxStr": "1"
    },
    "duration": {
      "positionTop": "700",
      "positionLeft": "50",
      "width": "500",
      "fontFamily": "Roboto",
      "fontSize": "20",
      "lineHeight": "1.25",
      "color": "#0000ff",
      "fontStyle": "По умолчанию",
      "textAlign": "По левому краю",
      "value": "Продолжительность: 2 часа",
      "maxStr": "1"
    },
    "background": {
      "image": "data:image/jpeg;base64,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Y3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAAAQAAAAEAAQABAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAABaOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAABOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgABOEJJTQQCAAAAAAAEAAAAADhCSU0EMAAAAAAAAgEBOEJJTQQtAAAAAAAGAAEAAAACOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0sAAAAGAAAAAAAAAAAAAAABAAAAAQAAAAsEEQQ1BDcAIAQ4BDwENQQ9BDgALQAxAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAAQAAAABSZ2h0bG9uZwAAAAEAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0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IiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA1LTI5VDE5OjA3OjIyKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wNS0yOVQxOTowNzoyMiswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NTY5NTUzMi1mOTZmLTFiNGUtODIwNi01YjU3OTM4MjgyZmQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxZGYxNDEzOC0xZjU1LTYwNDUtYWE0YS0wMmZmYWRhN2NhMTQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzQ1MzQ0NC0xOTZkLTdiNGMtYmViYi05ZWNlNzJkMmRkOTUiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+DQoJCQk8eG1wTU06SGlzdG9yeT4NCgkJCQk8cmRmOlNlcT4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzM0NTM0NDQtMTk2ZC03YjRjLWJlYmItOWVjZTcyZDJkZDk1IiBzdEV2dDp3aGVuPSIyMDE4LTA1LTI5VDE5OjA3OjIyKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NTY5NTUzMi1mOTZmLTFiNGUtODIwNi01YjU3OTM4MjgyZmQiIHN0RXZ0OndoZW49IjIwMTgtMDUtMjlUMTk6MDc6MjIrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4NCgkJCQk8L3JkZjpTZXE+DQoJCQk8L3htcE1NOkhpc3Rvcnk+DQoJCTwvcmRmOkRlc2NyaXB0aW9uPg0KCTwvcmRmOlJERj4NCjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9J3cnPz7/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKAP/2Q==",
      "positionTop": "0",
      "positionLeft": "0",
      "size": "По ширине"
    },
    "orientation": "landscape"
  };
const elements = [{
    workspace: $(".cert-name"),
    control: $("#control-name"),
    data: "name"
  },
  {
    workspace: $(".cert-number"),
    control: $("#control-number"),
    data: "number"
  },
  {
    workspace: $(".cert-course"),
    control: $("#control-course"),
    data: "course"
  },
  {
    workspace: $(".cert-date"),
    control: $("#control-date"),
    data: "date"
  },
  {
    workspace: $(".cert-duration"),
    control: $("#control-duration"),
    data: "duration"
  }
];

// GETTING DATA
$.getJSON("json/data1.json")
  .done(function (json) {
    userData = json;
    defaultData = json;
    renderWorkspace(defaultData);
  })
  .fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
    userData = jQuery.extend(true, {}, resetData);
    defaultData = jQuery.extend(true, {}, resetData);
    renderWorkspace(defaultData);
  });

$(document).ready(function () {
  // default zoom by workspace width
  scale = $(".cert-wokrspace__content").width() / $(".cert-wokrspace").width();
  setWorkspaceZoom(scale);

  // bg picker
  $("#fileBg").on("change", function (e) {
    let fr = new FileReader();
    fr.readAsDataURL(this.files[0]);
    fr.onload = function () {
      let img = new Image();
      img.onload = function () {
        loadedImg = {
          width: img.width,
          height: img.height
        };
      };
      img.src = fr.result;
      $(".cert-wokrspace__content").css(
        "background-image",
        `url("${img.src}")`
      );
      userData.background.image = img.src;
    };

    setBgSize();
    setBgPosition(userData);
  });
  $("#control-bg")
    .find(".control-bg-size")
    .on("change", setBgSize);
  $("#control-bg")
    .find(".control-top")
    .on("input", changeBgPosition);
  $("#control-bg")
    .find(".control-left")
    .on("input", changeBgPosition);

  $.each(elements, function (key, elem) {
    // TOGGLE ACCORDITION
    elem.workspace[0].addEventListener("click", function () {
      $(".cert-controls .card-header a")[key + 1].click();
    });
    // ACCORDITION (PANEL) CONTROLS
    setBorder(
      elem.control[0].querySelector(".control-hidder"),
      elem.workspace[0]
    );
    setTop(
      elem.control[0].querySelector(".control-top"),
      elem.workspace[0],
      userData[elem.data]
    );
    setLeft(
      elem.control[0].querySelector(".control-left"),
      elem.workspace[0],
      userData[elem.data]
    );
    setWidth(
      elem.control[0].querySelector(".control-width"),
      elem.workspace[0],
      userData[elem.data]
    );
    setFontFamily(
      elem.control[0].querySelector(".control-font-family"),
      elem.workspace[0],
      userData[elem.data]
    );
    setFontSize(
      elem.control[0].querySelector(".control-font-size"),
      elem.workspace[0],
      userData[elem.data]
    );
    setLineHeight(
      elem.control[0].querySelector(".control-line-height"),
      elem.workspace[0],
      userData[elem.data]
    );
    setColor(
      elem.control[0].querySelector(".control-color"),
      elem.workspace[0],
      userData[elem.data]
    );
    setFontStyle(
      elem.control[0].querySelector(".control-font-style"),
      elem.workspace[0],
      userData[elem.data]
    );
    setTextAlign(
      elem.control[0].querySelector(".control-text-align"),
      elem.workspace[0],
      userData[elem.data]
    );
    // if (key == 0 || key == 1) {
    setValue(
      elem.control[0].querySelector(".control-value"),
      elem.workspace[0],
      userData[elem.data]
    );
    setMaxStr(
      elem.control[0].querySelector(".control-max-str"),
      elem.workspace[0],
      userData[elem.data]
    );
    // }
    // DRAG AND RESIZE
    setDragResize(
      $(elem.workspace[0]),
      $(elem.control[0]).find(".control-top"),
      $(elem.control[0]).find(".control-left"),
      $(elem.control[0]).find(".control-width"),
      userData[elem.data]
    );
  });
  $.each($(".cert-controls .card-header a"), function (key, elem) {
    elem.addEventListener("click", function () {
      $.each(elements, function (key1, elem1) {
        elem1.workspace[0].classList.remove("cert-active");
      });

      if (elem.getAttribute("aria-expanded") === "false" && key >= 1) {
        if (
          elements[key - 1].workspace[0].classList.contains("cert-bordered")
        ) {
          elements[key - 1].workspace[0].classList.add("cert-active");
        }
      }
    });
  });

  // Create PDF
  $("#preview").click(function () {
    createPreviewPdf();
  });

  $("#save").click(function () {
    console.log(userData);
  });

  $("#reset").click(function () {
    console.log(resetData);
    renderWorkspace(resetData);
  });
});
/*
 * CONTROLS EVENTS
 */

// WORKSPACE CONTROLS
// resize workspace
$(".cert-wokrspace__zoom").click(function () {
  if (scale <= 3) {
    scale += 0.5;
    setWorkspaceZoom(scale);
  }
});
// reset workspace
$(".cert-wokrspace__reset").click(function () {
  scale = $(".cert-wokrspace__content").width() / $(".cert-wokrspace").width();
  setWorkspaceZoom(scale);
});
// reset original
$(".cert-wokrspace__original").click(function () {
  setWorkspaceZoom(1);
  scale = 1;
});
// set landscape
$(".cert-wokrspace__landscape").click(function () {
  $(".cert-wokrspace__content").css({
    height: "793.7px",
    width: "1122.5px"
  });
  userData.orientation = "landscape";
});
// set portrait
$(".cert-wokrspace__portrait").click(function () {
  $(".cert-wokrspace__content").css({
    height: "1122.5px",
    width: "793.7px"
  });
  userData.orientation = "portrait";
});

/*
 * FUNCTIONS
 */
// SET DEFAULT DATA INTO WORKSPACE
function renderWorkspace(data) {
  let i = 0;
  for (let key in data) {
    if (typeof data[key] === "object") {
      // set workspace
      if (key !== "background") {
        setElement(elements[i].workspace, data[key]);
        setControl(elements[i].control, data[key]);
        i++;
      } else {
        $(".cert-wokrspace__content").css(
          "background-image",
          `url("${data.background.image}")`
        );
      }
    }
  }
}

// background
function setBgSize() {
  let bgSize;
  switch (
    $("#control-bg")
    .find(".control-bg-size")
    .val()
  ) {
    case "По ширине":
      bgSize = "100% auto";
      break;
    case "По высоте":
      bgSize = "auto 100%";
      break;
  }
  $(".cert-wokrspace__content").css("background-size", bgSize);
  userData.background.size = $("#control-bg")
    .find(".control-bg-size")
    .val();
}

function setBgPosition(data) {
  let bgX = data.background.positionLeft,
    bgY = data.background.positionTop;
  $(".cert-wokrspace__content").css("background-position", `${bgX}px ${bgY}px`);
  $("#control-bg")
    .find(".control-top")
    .val(bgY);
  $("#control-bg")
    .find(".control-left")
    .val(bgX);
}

function changeBgPosition() {
  let bgY = $("#control-bg")
    .find(".control-top")
    .val();
  let bgX = $("#control-bg")
    .find(".control-left")
    .val();
  $(".cert-wokrspace__content").css("background-position", `${bgX}px ${bgY}px`);
  userData.background.positionTop = bgY;
  userData.background.positionLeft = bgX;
}

// set css and text
function setElement(elem, data) {
  elem
    .css({
      top: `${data.positionTop}px`,
      left: `${data.positionLeft}px`,
      width: `${data.width}px`,
      "font-family": data.fontFamily,
      "font-size": `${data.fontSize}px`,
      "line-height": data.lineHeight,
      color: data.color,
      "text-align": data.textAlign
    })
    .text(data.value);
  // set font-style and font-weight
  switch (data.fontStyle) {
    case "По умолчанию":
      elem.css({
        "font-style": "normal",
        "font-weight": "normal"
      });
      break;
    case "Жирный":
      elem.css({
        "font-style": "normal",
        "font-weight": "bold"
      });
      break;
    case "Курсив":
      elem.css({
        "font-style": "italic",
        "font-weight": "normal"
      });
      break;
    case "Жирный + курсив":
      elem.css({
        "font-style": "italic",
        "font-weight": "bold"
      });
      break;
    default:
      elem.css({
        "font-style": "normal",
        "font-weight": "normal"
      });
  }
  // set alignment
  switch (data.textAlign) {
    case "По левому краю":
      elem.css("text-align", "left");
      break;
    case "По правому краю":
      elem.css("text-align", "right");
      break;
    case "По центру":
      elem.css("text-align", "center");
      break;
    case "По ширине":
      elem.css("text-align", "justify");
      break;
    default:
      elem.css("text-align", "left");
      break;
  }
}
// set controls values
function setControl(elem, data) {
  elem.find(".control-top").val(data.positionTop);
  elem.find(".control-left").val(data.positionLeft);
  elem.find(".control-width").val(data.width);
  elem.find(".control-font-family").val(data.fontFamily);
  elem.find(".control-font-size").val(data.fontSize);
  elem.find(".control-line-height").val(data.lineHeight);
  elem.find(".control-color").val(data.color);
  elem.find(".control-font-style").val(data.fontStyle);
  elem.find(".control-text-align").val(data.textAlign);
  elem.find(".control-value").val(data.value);
  elem.find(".control-max-str").val(data.maxStr);
}
// set workspace zoom
function setWorkspaceZoom(scale) {
  $(".cert-wokrspace__content").css({
    zoom: 1 / scale,
    "-moz-transform": 1 / scale
  });
}

// functions for control panel
// show border for workspace block
function setBorder(switcher, element) {
  switcher.addEventListener("click", function (e) {
    element.classList.toggle("cert-bordered");
    element.classList.toggle("cert-active");
  });
}
// top position
function setTop(switcher, element, data) {
  switcher.addEventListener("input", function (e) {
    element.style.top = e.target.value + "px";
    data.positionTop = e.target.value;
  });
}
// left position
function setLeft(switcher, element, data) {
  switcher.addEventListener("input", function (e) {
    element.style.left = e.target.value + "px";
    data.positionLeft = e.target.value;
  });
}
// width
function setWidth(switcher, element, data) {
  switcher.addEventListener("input", function (e) {
    element.style.width = e.target.value + "px";
    data.width = e.target.value;
    // calc font
    calcViewFont(element, data.maxStr, data.fontSize);
  });
}
// font family
function setFontFamily(switcher, element, data) {
  switcher.addEventListener("input", function (e) {
    element.style.fontFamily = e.target.value;
    data.fontFamily = e.target.value;
  });
}
// font size
function setFontSize(switcher, element, data) {
  switcher.addEventListener("input", function (e) {
    if (parseInt(e.target.value) > 500) {
      e.target.value = 500;
    }
    element.style.fontSize = e.target.value + "px";
    data.fontSize = e.target.value;
    // calc font
    calcViewFont(element, data.maxStr, data.fontSize);
  });
}
// line height
function setLineHeight(switcher, element, data) {
  switcher.addEventListener("input", function (e) {
    element.style.lineHeight = e.target.value;
    data.lineHeight = e.target.value;
  });
}
// color picker
function setColor(switcher, element, data) {
  switcher.addEventListener("input", function (e) {
    element.style.color = e.target.value;
    data.color = e.target.value;
  });
}
// font style
function setFontStyle(switcher, element, data) {
  switcher.addEventListener("input", function (e) {
    let style = "normal",
      weight = "normal";
    switch (e.target.value) {
      case "По умолчанию":
        style = "normal";
        weight = "normal";
        break;
      case "Жирный":
        style = "normal";
        weight = "bold";
        break;
      case "Курсив":
        style = "italic";
        weight = "normal";
        break;
      case "Жирный + курсив":
        style = "italic";
        weight = "bold";
        break;
      default:
        style = "normal";
        weight = "normal";
    }
    element.style.fontStyle = style;
    element.style.fontWeight = weight;
    data.fontStyle = e.target.value;
  });
}
// text align
function setTextAlign(switcher, element, data) {
  switcher.addEventListener("input", function (e) {
    let textAlign = "left";
    switch (e.target.value) {
      case "По левому краю":
        textAlign = "left";
        break;
      case "По правому краю":
        textAlign = "right";
        break;
      case "По центру":
        textAlign = "center";
        break;
      case "По ширине":
        textAlign = "justify";
        break;
    }
    element.style.textAlign = textAlign;
    data.textAlign = e.target.value;
  });
}
// text value
function setValue(switcher, element, data) {
  switcher.addEventListener("input", function (e) {
    $(element).text(e.target.value);
    data.value = e.target.value;
    calcViewFont(
      element,
      data.maxStr,
      parseInt($(element).css("font-size"), 10)
    );
    $(element).resizable({
      handles: "e, w",
      containment: "parent"
    });
  });
}
// max number strings in block
function setMaxStr(switcher, element, data) {
  switcher.addEventListener("input", function (e) {
    $(element).css("font-size", `${data.fontSize}px`);
    calcViewFont(
      element,
      e.target.value,
      parseInt($(element).css("font-size"), 10)
    );
    data.maxStr = e.target.value;
  });
}

// drag and resize
function setDragResize(
  element,
  switcherTop,
  switcherLeft,
  switcherWidth,
  data
) {
  element.draggable({
    containment: "parent",
    drag: function (event, ui) {
      let top = Math.ceil(ui.position.top),
        left = Math.ceil(ui.position.left);
      switcherTop.val(top);
      switcherLeft.val(left);
      data.positionTop = `${top}`;
      data.positionLeft = `${left}`;
    }
  });
  element.resizable({
    handles: "e, w",
    containment: "parent",
    resize: function (event, ui) {
      let w = Math.ceil(ui.size.width);
      event.target.style.maxWidth = `${w}px`;
      switcherWidth.val(w);
      data.width = `${w}`;
      // calc font
      calcViewFont(element, data.maxStr, data.fontSize);
    }
  });
}

// read file (for set background)
function readFile(file, onLoadCallback) {
  var reader = new FileReader();
  reader.onload = onLoadCallback;
  reader.readAsDataURL(file);
}

// create pdf
function createPreviewPdf() {
  // page size A4: [595.28, 841.89],
  // https://github.com/bpampuch/pdfmake/blob/7b5675d5b9d5d7b815bd721e00504b16560a6382/src/standardPageSizes.js
  const w = $(".cert-wokrspace__content").width(),
    h = $(".cert-wokrspace__content").height(),
    paperW = userData.orientation == "landscape" ? 841.89 : 595.28,
    paperH = userData.orientation == "landscape" ? 595.28 : 841.89;

  function getX(elem) {
    return elem.position().left / w * paperW;
  }

  function getY(elem) {
    return elem.position().top / h * paperH;
  }

  function getW(elem) {
    return elem.width() / w * paperW;
  }

  function getFontFamily(elem) {
    return elem.css("font-family");
  }

  function getFontSize(elem) {
    return parseInt(elem.css("font-size"), 10) / w * paperW;
  }

  function getFontWeight(elem) {
    return elem.css("font-weight") >= 600;
  }

  function getFontStyle(elem) {
    return elem.css("font-style") === "italic";
  }

  function getLineHeight(elem) {
    return (
      parseInt(elem.css("line-height"), 10) / getFontSize(elem) / w * paperW
    );
  }

  function rgb2hex(rgb) {
    if (rgb.search("rgb") == -1) {
      return rgb;
    } else {
      rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);

      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
  }

  function getColor(elem) {
    return rgb2hex(elem.css("color"));
  }

  function getAlignment(elem) {
    return elem.css("text-align");
  }

  function getBgW() {
    return userData.background.size === "По ширине" ?
      paperW :
      paperH * loadedImg.width / loadedImg.height;
  }

  function getBgH() {
    return userData.background.size === "По высоте" ?
      paperH :
      paperW * loadedImg.height / loadedImg.width;
  }

  const docDefinition = {
    info: {
      title: "certificate"
    },
    pageSize: "A4",
    pageOrientation: userData.orientation,
    background: [{
      image: userData.background.image,
      width: getBgW(),
      height: getBgH(),
      absolutePosition: {
        x: Number(userData.background.positionLeft),
        y: Number(userData.background.positionTop)
      }
    }],
    content: [{
        table: {
          widths: [getW($(".cert-name"))],
          body: [
            [{
              fontSize: getFontSize($(".cert-name")),
              font: getFontFamily($(".cert-name")),
              bold: getFontWeight($(".cert-name")),
              italics: getFontStyle($(".cert-name")),
              lineHeight: getLineHeight($(".cert-name")),
              alignment: getAlignment($(".cert-name")),
              color: getColor($(".cert-name")),
              text: $(".cert-name").text(),
              border: [false, false, false, false],
              margin: [-5, -5, -5, -5]
            }]
          ]
        },
        absolutePosition: {
          x: getX($(".cert-name")),
          y: getY($(".cert-name"))
        }
      },
      {
        table: {
          widths: [getW($(".cert-number"))],
          body: [
            [{
              fontSize: getFontSize($(".cert-number")),
              font: getFontFamily($(".cert-number")),
              bold: getFontWeight($(".cert-number")),
              italics: getFontStyle($(".cert-number")),
              lineHeight: getLineHeight($(".cert-number")),
              alignment: getAlignment($(".cert-number")),
              color: getColor($(".cert-number")),
              text: $(".cert-number").text(),
              border: [false, false, false, false],
              margin: [-5, -5, -5, -5]
            }]
          ]
        },
        absolutePosition: {
          x: getX($(".cert-number")),
          y: getY($(".cert-number"))
        }
      },
      {
        table: {
          widths: [getW($(".cert-course"))],
          body: [
            [{
              fontSize: getFontSize($(".cert-course")),
              font: getFontFamily($(".cert-course")),
              bold: getFontWeight($(".cert-course")),
              italics: getFontStyle($(".cert-course")),
              lineHeight: getLineHeight($(".cert-course")),
              alignment: getAlignment($(".cert-course")),
              color: getColor($(".cert-course")),
              text: $(".cert-course").text(),
              border: [false, false, false, false],
              margin: [-5, -5, -5, -5]
            }]
          ]
        },
        absolutePosition: {
          x: getX($(".cert-course")),
          y: getY($(".cert-course"))
        }
      },
      {
        table: {
          widths: [getW($(".cert-date"))],
          body: [
            [{
              fontSize: getFontSize($(".cert-date")),
              font: getFontFamily($(".cert-date")),
              bold: getFontWeight($(".cert-date")),
              italics: getFontStyle($(".cert-date")),
              lineHeight: getLineHeight($(".cert-date")),
              alignment: getAlignment($(".cert-date")),
              color: getColor($(".cert-date")),
              text: $(".cert-date").text(),
              border: [false, false, false, false],
              margin: [-5, -5, -5, -5]
            }]
          ]
        },
        absolutePosition: {
          x: getX($(".cert-date")),
          y: getY($(".cert-date"))
        }
      },
      {
        table: {
          widths: [getW($(".cert-duration"))],
          body: [
            [{
              fontSize: getFontSize($(".cert-duration")),
              font: getFontFamily($(".cert-duration")),
              bold: getFontWeight($(".cert-duration")),
              italics: getFontStyle($(".cert-duration")),
              lineHeight: getLineHeight($(".cert-duration")),
              alignment: getAlignment($(".cert-duration")),
              color: getColor($(".cert-duration")),
              text: $(".cert-duration").text(),
              border: [false, false, false, false],
              margin: [-5, -5, -5, -5]
            }]
          ]
        },
        absolutePosition: {
          x: getX($(".cert-duration")),
          y: getY($(".cert-duration"))
        }
      }
    ]
  };

  pdfMake.fonts = {
    Roboto: {
      normal: "Roboto-Regular.ttf",
      bold: "Roboto-Bold.ttf",
      italics: "Roboto-Italic.ttf",
      bolditalics: "Roboto-BoldItalic.ttf"
    },
    "Open Sans": {
      normal: "OpenSans-Regular.ttf",
      bold: "OpenSans-Bold.ttf",
      italics: "OpenSans-Italic.ttf",
      bolditalics: "OpenSans-BoldItalic.ttf"
    },
    Montserrat: {
      normal: "Montserrat-Regular.ttf",
      bold: "Montserrat-Bold.ttf",
      italics: "Montserrat-Italic.ttf",
      bolditalics: "Montserrat-BoldItalic.ttf"
    },
    Lora: {
      normal: "Lora-Regular.ttf",
      bold: "Lora-Bold.ttf",
      italics: "Lora-Italic.ttf",
      bolditalics: "Lora-BoldItalic.ttf"
    }
  };

  $(
    "#previewFancyLink"
  )[0].innerHTML = `<a data-fancybox data-type="iframe" data-src="" href="javascript:;"></a>`;
  pdfMake.createPdf(docDefinition).getBase64(data => {
    $("#previewFancyLink a")
      .attr("data-src", `data:application/pdf;base64,${data}`)
      .click();
  });

  // pdfMake.createPdf(docDefinition).download('optionalName.pdf');
}

/* calculation font size with max strings number */
function calcViewFont(element, inputValue, fontSize) {
  $(element).css("font-size", `${fontSize}px`); // reset
  let numStr = elem => {
    return $(elem).height() / parseInt($(elem).css("line-height"), 10);
  };
  let i = 0;
  while (numStr($(element)) > inputValue) {
    i++;
    $(element).css("font-size", `${fontSize - i}px`);
  }
}