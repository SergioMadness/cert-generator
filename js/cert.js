// GLOBALS
let defaultData = {},
    userData = {},
    scale = 1;
const elements = [{
        workspace: $('.cert-name'),
        control: $('#control-name'),
    },
    {
        workspace: $('.cert-number'),
        control: $('#control-number'),
    },
    {
        workspace: $('.cert-course'),
        control: $('#control-course'),
    },
    {
        workspace: $('.cert-date'),
        control: $('#control-date'),
    },
    {
        workspace: $('.cert-duration'),
        control: $('#control-duration'),
    },
];

// GETTING DATA
$.getJSON("json/data.json")
    .done(function (json) {
        userData = defaultData = json;
    })
    .fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.log("Request Failed: " + err);
    });

$(document).ready(function () {
    renderWorkspace(defaultData);
    // default zoom by workspace width
    scale = ($('.cert-wokrspace__content').width() / $('.cert-wokrspace').width());
    setWorkspaceZoom(scale);

    // bg picker
    $('#fileBg').on('change', function (e) {
        readFile(this.files[0], function (e) {
            $('.cert-wokrspace__content').css('background-image', `url("${e.target.result}")`);
            userData.background.image = e.target.result;
        });
    });
    $('#bg-size').on('change', function (e) {
        let bgSize = 'cover';
        switch (e.target.value) {
            case 'Растянуть':
                bgSize = 'cover';
                break;
            case 'По ширине':
                bgSize = '100% auto';
                break;
            case 'По высоте':
                bgSize = 'auto 100%';
                break;
        }
        $('.cert-wokrspace__content').css('background-size', bgSize);
        userData.background.size = e.target.result;
    });

    $.each(elements, function (key, elem) {
        // TOGGLE ACCORDITION
        elem.workspace[0].addEventListener('click', function () {
            $('.cert-controls .card-header a')[key + 1].click();
        });
        // ACCORDITION (PANEL) CONTROLS
        setBorder(elem.control[0].querySelector('.control-hidder'), elem.workspace[0]);
        setTop(elem.control[0].querySelector('.control-top'), elem.workspace[0]);
        setLeft(elem.control[0].querySelector('.control-left'), elem.workspace[0]);
        setWidth(elem.control[0].querySelector('.control-width'), elem.workspace[0]);
        setFontFamily(elem.control[0].querySelector('.control-font-family'), elem.workspace[0]);
        setFontSize(elem.control[0].querySelector('.control-font-size'), elem.workspace[0]);
        setLineHeight(elem.control[0].querySelector('.control-line-height'), elem.workspace[0]);
        setColor(elem.control[0].querySelector('.control-color'), elem.workspace[0]);
        setFontStyle(elem.control[0].querySelector('.control-font-style'), elem.workspace[0]);
        setTextAlign(elem.control[0].querySelector('.control-text-align'), elem.workspace[0]);
        // DRAG AND RESIZE
        setDragResize($(elem.workspace[0]), $(elem.control[0]).find('.control-top'), $(elem.control[0]).find('.control-left'), $(elem.control[0]).find('.control-width'));
    });
    $.each($('.cert-controls .card-header a'), function (key, elem) {
        elem.addEventListener('click', function () {
            $.each(elements, function (key1, elem1) {
                elem1.workspace[0].classList.remove('cert-active');
            });

            if (elem.getAttribute('aria-expanded') === 'false' && key >= 1) {
                if (elements[key - 1].workspace[0].classList.contains('cert-bordered')) {
                    elements[key - 1].workspace[0].classList.add('cert-active');
                }
            }
        });
    });

    // Create PDF
    $('#preview').click(function () {
        createPreviewPdf()
    });
});

/*
 * CONTROLS EVENTS
 */

// WORKSPACE CONTROLS
// resize workspace
$('.cert-wokrspace__zoom').click(function () {
    if (scale <= 3) {
        scale += 0.5;
        setWorkspaceZoom(scale);
    }
});
// reset workspace
$('.cert-wokrspace__reset').click(function () {
    scale = ($('.cert-wokrspace__content').width() / $('.cert-wokrspace').width());
    setWorkspaceZoom(scale);
});
// reset original
$('.cert-wokrspace__original').click(function () {
    setWorkspaceZoom(1);
    scale = 1;
});
// set landscape
$('.cert-wokrspace__landscape').click(function () {
    $('.cert-wokrspace__content').css({
        'height': '793.7px',
        'width': '1122.5px'
    });
    userData.orientation = 'landscape';
});
// set portrait
$('.cert-wokrspace__portrait').click(function () {
    $('.cert-wokrspace__content').css({
        'height': '1122.5px',
        'width': '793.7px'
    });
    userData.orientation = 'portrait';
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
                $('.cert-wokrspace__content').css('background-image', `url("${data.background.image}")`);
            }
        }
    }
}

// set css and text
function setElement(elem, data) {
    elem.css({
        'top': `${data.positionTop}px`,
        'left': `${data.positionLeft}px`,
        'width': `${data.width}px`,
        'font-family': data.fontFamily,
        'font-size': `${data.fontSize}px`,
        'line-height': data.lineHeight,
        'color': data.color,
        'text-align': data.textAlign,
    }).text(data.value);
    // set font-style and font-weight
    switch (data.fontStyle) {
        case 'По умолчанию':
            elem.css({
                'font-style': 'normal',
                'font-weight': 'normal'
            });
            break;
        case 'Жирный':
            elem.css({
                'font-style': 'normal',
                'font-weight': 'bold'
            });
            break;
        case 'Курсив':
            elem.css({
                'font-style': 'italic',
                'font-weight': 'normal'
            });
            break;
        case 'Жирный + курсив':
            elem.css({
                'font-style': 'italic',
                'font-weight': 'bold'
            });
            break;
        default:
            elem.css({
                'font-style': 'normal',
                'font-weight': 'normal'
            });
    }
    // set alignment
    switch (data.textAlign) {
        case 'По левому краю':
            elem.css('text-align', 'left');
            break;
        case 'По правому краю':
            elem.css('text-align', 'right');
            break;
        case 'По центру':
            elem.css('text-align', 'center');
            break;
        case 'По ширине':
            elem.css('text-align', 'justify');
            break;
        default:
            elem.css('text-align', 'left');
            break;
    }
};
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
};
// set workspace zoom
function setWorkspaceZoom(scale) {
    $('.cert-wokrspace__content').css({
        'zoom': 1 / scale,
        '-moz-transform': 1 / scale
    });
};

// functions for control panel
// show border for workspace block
function setBorder(switcher, element) {
    switcher.addEventListener('click', function (e) {
        element.classList.toggle('cert-bordered');
        element.classList.toggle('cert-active');
    });
};
// top position
function setTop(switcher, element) {
    switcher.addEventListener('input', function (e) {
        element.style.top = e.target.value + 'px';
    });
};
// left position
function setLeft(switcher, element) {
    switcher.addEventListener('input', function (e) {
        element.style.left = e.target.value + 'px';
    });
};
// width
function setWidth(switcher, element) {
    switcher.addEventListener('input', function (e) {
        element.style.width = e.target.value + 'px';
    });
};
// font family
function setFontFamily(switcher, element) {
    switcher.addEventListener('input', function (e) {
        element.style.fontFamily = e.target.value;
    });
};
// font size
function setFontSize(switcher, element) {
    switcher.addEventListener('input', function (e) {
        element.style.fontSize = e.target.value + 'px';
    });
};
// line height
function setLineHeight(switcher, element) {
    switcher.addEventListener('input', function (e) {
        element.style.lineHeight = e.target.value;
    });
};
// color picker
function setColor(switcher, element) {
    switcher.addEventListener('input', function (e) {
        element.style.color = e.target.value;
    });
};
// font style
function setFontStyle(switcher, element) {
    switcher.addEventListener('input', function (e) {
        let style = 'normal',
            weight = 'normal';
        switch (e.target.value) {
            case 'По умолчанию':
                style = 'normal';
                weight = 'normal';
                break;
            case 'Жирный':
                style = 'normal';
                weight = 'bold';
                break;
            case 'Курсив':
                style = 'italic';
                weight = 'normal';
                break;
            case 'Жирный + курсив':
                style = 'italic';
                weight = 'bold';
                break;
            default:
                style = 'normal';
                weight = 'normal';
        }
        element.style.fontStyle = style;
        element.style.fontWeight = weight;
    });
};
// text align
function setTextAlign(switcher, element) {
    switcher.addEventListener('input', function (e) {
        let textAlign = 'left';
        switch (e.target.value) {
            case 'По левому краю':
                textAlign = 'left';
                break;
            case 'По правому краю':
                textAlign = 'right';
                break;
            case 'По центру':
                textAlign = 'center';
                break;
            case 'По ширине':
                textAlign = 'justify';
                break;
        }
        element.style.textAlign = textAlign;
    });
};

// drag and resize
function setDragResize(element, switcherTop, switcherLeft, switcherWidth) {
    element.draggable({
        containment: 'parent',
        drag: function (event, ui) {
            switcherTop.val(Math.ceil(ui.position.top));
            switcherLeft.val(Math.ceil(ui.position.left));
        }
    });
    element.resizable({
        handles: 'e, w',
        containment: 'parent',
        resize: function (event, ui) {
            event.target.style.maxWidth = `${Math.ceil(ui.size.width)}px`;
            switcherWidth.val(Math.ceil(ui.size.width));
        }
    });
};

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
    const w = $('.cert-wokrspace__content').width(),
        h = $('.cert-wokrspace__content').height(),
        paperW = (userData.orientation == 'landscape') ? 841.89 : 595.28,
        paperH = (userData.orientation == 'landscape') ? 595.28 : 841.89;

    function getX(elem) {
        return elem.position().left / w * paperW;
    };

    function getY(elem) {
        return elem.position().top / h * paperH;
    };

    function getW(elem) {
        return elem.width() / w * paperW;
    }

    function getFont(elem) {
        return elem.css('')
    }

    // !!! НУЖНО ИСПРАВИТЬ РАЗМЕРЫ ФОНА
    const docDefinition = {
        info: {
            title: 'certificate',
        },
        pageSize: 'A4',
        pageOrientation: userData.orientation,
        content: [{
                image: userData.background.image,
                absolutePosition: {
                    x: 0,
                    y: 0
                },
                width: paperW,
                height: paperH,
            },
            {
                table: {
                    widths: [getW($('.cert-name'))],
                    body: [
                        [{
                            fontSize: 24,
                            text: $('.cert-name').text(),
                            border: [false, false, false, false],
                            margin: [-5, -5, -5, -5],

                        }]
                    ],
                },
                absolutePosition: {
                    x: getX($('.cert-name')),
                    y: getY($('.cert-name'))
                },
            },
            {
                text: $('.cert-number').text(),
                absolutePosition: {
                    x: getX($('.cert-number')),
                    y: getY($('.cert-number'))
                }
            },
            {
                text: $('.cert-course').text(),
                absolutePosition: {
                    x: getX($('.cert-course')),
                    y: getY($('.cert-course'))
                }
            },
            {
                text: $('.cert-date').text(),
                absolutePosition: {
                    x: getX($('.cert-date')),
                    y: getY($('.cert-date'))
                }
            },
            {
                text: $('.cert-duration').text(),
                absolutePosition: {
                    x: getX($('.cert-duration')),
                    y: getY($('.cert-duration'))
                }
            }
        ],
    };

    $('#previewFancyLink')[0].innerHTML = `<a data-fancybox data-type="iframe" data-src="" href="javascript:;"></a>`;
    pdfMake.createPdf(docDefinition).getBase64((data) => {
        $('#previewFancyLink a').attr('data-src', `data:application/pdf;base64,${data}`).click();
    });

    // pdfMake.createPdf(docDefinition).download('optionalName.pdf');
}