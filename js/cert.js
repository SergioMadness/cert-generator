// GLOBALS
let defaultData = {},
  userData = {},
  loadedImg = {},
  scale = 1;
const elements = [
  {
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
$.getJSON("cert-generator/json/data.json")
  .done(function(json) {
    userData = defaultData = json;
  })
  .fail(function(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
  });

$(document).ready(function() {
  renderWorkspace(defaultData);
  // default zoom by workspace width
  scale = $(".cert-wokrspace__content").width() / $(".cert-wokrspace").width();
  setWorkspaceZoom(scale);

  // bg picker
  $("#fileBg").on("change", function(e) {
    let fr = new FileReader();
    fr.readAsDataURL(this.files[0]);
    fr.onload = function() {
      let img = new Image();
      img.onload = function() {
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

  $.each(elements, function(key, elem) {
    // TOGGLE ACCORDITION
    elem.workspace[0].addEventListener("click", function() {
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
    if (key == 0) {
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
    }
    // DRAG AND RESIZE
    setDragResize(
      $(elem.workspace[0]),
      $(elem.control[0]).find(".control-top"),
      $(elem.control[0]).find(".control-left"),
      $(elem.control[0]).find(".control-width"),
      userData[elem.data]
    );
  });
  $.each($(".cert-controls .card-header a"), function(key, elem) {
    elem.addEventListener("click", function() {
      $.each(elements, function(key1, elem1) {
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
  $("#preview").click(function() {
    createPreviewPdf();
  });

  $("#save").click(function() {
    console.log(userData);
  });
});

/*
 * CONTROLS EVENTS
 */

// WORKSPACE CONTROLS
// resize workspace
$(".cert-wokrspace__zoom").click(function() {
  if (scale <= 3) {
    scale += 0.5;
    setWorkspaceZoom(scale);
  }
});
// reset workspace
$(".cert-wokrspace__reset").click(function() {
  scale = $(".cert-wokrspace__content").width() / $(".cert-wokrspace").width();
  setWorkspaceZoom(scale);
});
// reset original
$(".cert-wokrspace__original").click(function() {
  setWorkspaceZoom(1);
  scale = 1;
});
// set landscape
$(".cert-wokrspace__landscape").click(function() {
  $(".cert-wokrspace__content").css({
    height: "793.7px",
    width: "1122.5px"
  });
  userData.orientation = "landscape";
});
// set portrait
$(".cert-wokrspace__portrait").click(function() {
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
  switcher.addEventListener("click", function(e) {
    element.classList.toggle("cert-bordered");
    element.classList.toggle("cert-active");
  });
}
// top position
function setTop(switcher, element, data) {
  switcher.addEventListener("input", function(e) {
    element.style.top = e.target.value + "px";
    data.positionTop = e.target.value;
  });
}
// left position
function setLeft(switcher, element, data) {
  switcher.addEventListener("input", function(e) {
    element.style.left = e.target.value + "px";
    data.positionLeft = e.target.value;
  });
}
// width
function setWidth(switcher, element, data) {
  switcher.addEventListener("input", function(e) {
    element.style.width = e.target.value + "px";
    data.width = e.target.value;
  });
}
// font family
function setFontFamily(switcher, element, data) {
  switcher.addEventListener("input", function(e) {
    element.style.fontFamily = e.target.value;
    data.fontFamily = e.target.value;
  });
}
// font size
function setFontSize(switcher, element, data) {
  switcher.addEventListener("input", function(e) {
    element.style.fontSize = e.target.value + "px";
    data.fontSize = e.target.value;
  });
}
// line height
function setLineHeight(switcher, element, data) {
  switcher.addEventListener("input", function(e) {
    element.style.lineHeight = e.target.value;
    data.lineHeight = e.target.value;
  });
}
// color picker
function setColor(switcher, element, data) {
  switcher.addEventListener("input", function(e) {
    element.style.color = e.target.value;
    data.color = e.target.value;
  });
}
// font style
function setFontStyle(switcher, element, data) {
  switcher.addEventListener("input", function(e) {
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
  switcher.addEventListener("input", function(e) {
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
  switcher.addEventListener("input", function(e) {
    $(element).text(e.target.value);
    data.value = e.target.value;
    calcViewFont(element, data.maxStr, parseInt($(element).css('font-size'), 10));
    $(element).resizable({
      handles: "e, w",
      containment: "parent",
    });
  });
}
// max number strings in block
function setMaxStr(switcher, element, data) {
  switcher.addEventListener("input", function(e) {
    $(element).css('font-size', `${data.fontSize}px`);
    calcViewFont(element, e.target.value, parseInt($(element).css('font-size'), 10));
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
    drag: function(event, ui) {
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
    resize: function(event, ui) {
      let w = Math.ceil(ui.size.width);
      event.target.style.maxWidth = `${w}px`;
      switcherWidth.val(w);
      data.width = `${w}`;
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
    return userData.background.size === "По ширине"
      ? paperW
      : paperH * loadedImg.width / loadedImg.height;
  }

  function getBgH() {
    return userData.background.size === "По высоте"
      ? paperH
      : paperW * loadedImg.height / loadedImg.width;
  }

  const docDefinition = {
    info: {
      title: "certificate"
    },
    pageSize: "A4",
    pageOrientation: userData.orientation,
    background: [
      {
        image: userData.background.image,
        width: getBgW(),
        height: getBgH(),
        absolutePosition: {
          x: Number(userData.background.positionLeft),
          y: Number(userData.background.positionTop)
        }
      }
    ],
    content: [
      {
        table: {
          widths: [getW($(".cert-name"))],
          body: [
            [
              {
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
              }
            ]
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
            [
              {
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
              }
            ]
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
            [
              {
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
              }
            ]
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
            [
              {
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
              }
            ]
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
            [
              {
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
              }
            ]
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
  let numStr = (elem) => {
    return $(elem).height() / parseInt($(elem).css('line-height'), 10);
  }
  let i = 0;
  while (numStr($(element)) > inputValue) {
    i++;
    $(element).css('font-size', `${fontSize - i}px`);
  }
}