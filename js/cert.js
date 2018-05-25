// default params
const params = {
    name: {
        'value': 'Иванов Иван Иванович',
        'positionTop': '50',
        'positionLeft': '50',
        'fontSize': '20',
        'lineHeight': '1.25',
        'width': '500'
    },
    number: {
        'value': '000-0000-000-01',
        'positionTop': '50',
        'positionLeft': '600',
        'fontSize': '20',
        'lineHeight': '1.25',
        'width': '500'
    },
    course: {
        'value': 'Технология блокчейн в сельском хозяйстве',
        'positionTop': '300',
        'positionLeft': '50',
        'fontSize': '24',
        'lineHeight': '1.25',
        'width': '500'
    },
    date: {
        'value': 'Дата окончания: 30.02.2007',
        'positionTop': '600',
        'positionLeft': '50',
        'fontSize': '20',
        'lineHeight': '1.25',
        'width': '500'
    },
    duration: {
        'value': 'Продолжительность: 1 час',
        'positionTop': '700',
        'positionLeft': '50',
        'fontSize': '20',
        'lineHeight': '1.25',
        'width': '500'
    },
};

let scale = 1,
    orientation = 'landscape',
    bgImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKAP/2Q==';


$(document).ready(function () {
    scale = ($('.cert-wokrspace__content').width() / $('.cert-wokrspace').width());
    setSizes(scale);

    // set name
    $('.cert-name').text(params.name.value);
    // set name style
    $('.cert-name').css({
        'top': `${params.name.positionTop}px`,
        'left': `${params.name.positionLeft}px`,
        'width': `${params.name.width}px`,
        'font-size': `${params.name.fontSize}px`,
        'line-height': params.name.lineHeight,
        'font-family': 'Open Sans',
    });
    // set name controls
    $('#name-number-top').val(params.name.positionTop);
    $('#name-number-left').val(params.name.positionLeft);
    $('#name-number-width').val(params.name.width);
    $('#name-number-font-size').val(params.name.fontSize);
    $('#name-number-line-height').val(params.name.lineHeight);


    // set number
    $('.cert-number').text(params.number.value);
    // set number style
    $('.cert-number').css({
        'top': `${params.number.positionTop}px`,
        'left': `${params.number.positionLeft}px`,
        'width': `${params.number.width}px`,
        'font-size': `${params.number.fontSize}px`,
        'line-height': params.number.lineHeight,
        'font-family': 'Open Sans',
    });
    // set number controls
    $('#number-number-top').val(params.number.positionTop);
    $('#number-number-left').val(params.number.positionLeft);
    $('#number-number-width').val(params.number.width);
    $('#number-number-font-size').val(params.number.fontSize);
    $('#number-number-line-height').val(params.number.lineHeight);


    // set course
    $('.cert-course').text(params.course.value);
    // set course style
    $('.cert-course').css({
        'top': `${params.course.positionTop}px`,
        'left': `${params.course.positionLeft}px`,
        'width': `${params.course.width}px`,
        'font-size': `${params.course.fontSize}px`,
        'line-height': params.course.lineHeight,
        'font-family': 'Open Sans',
    });
    // set course controls
    $('#course-number-top').val(params.course.positionTop);
    $('#course-number-left').val(params.course.positionLeft);
    $('#course-number-width').val(params.course.width);
    $('#course-number-font-size').val(params.course.fontSize);
    $('#course-number-line-height').val(params.course.lineHeight);


    // set date
    $('.cert-date').text(params.date.value);
    // set date style
    $('.cert-date').css({
        'top': `${params.date.positionTop}px`,
        'left': `${params.date.positionLeft}px`,
        'width': `${params.date.width}px`,
        'font-size': `${params.date.fontSize}px`,
        'line-height': params.date.lineHeight,
        'font-family': 'Open Sans',
    });
    // set date controls
    $('#date-number-top').val(params.date.positionTop);
    $('#date-number-left').val(params.date.positionLeft);
    $('#date-number-width').val(params.date.width);
    $('#date-number-font-size').val(params.date.fontSize);
    $('#date-number-line-height').val(params.date.lineHeight);


    // set duration
    $('.cert-duration').text(params.duration.value);
    // set date style
    $('.cert-duration').css({
        'top': `${params.duration.positionTop}px`,
        'left': `${params.duration.positionLeft}px`,
        'width': `${params.duration.width}px`,
        'font-size': `${params.duration.fontSize}px`,
        'line-height': params.duration.lineHeight,
        'font-family': 'Open Sans',
    });
    // set duration controls
    $('#duration-number-top').val(params.duration.positionTop);
    $('#duration-number-left').val(params.duration.positionLeft);
    $('#duration-number-width').val(params.duration.width);
    $('#duration-number-font-size').val(params.duration.fontSize);
    $('#duration-number-line-height').val(params.duration.lineHeight);


    /*
     * DRAG & RESIZE ELEMENTS
     */
    setDragResize($('.cert-name'), $('#name-number-top'), $('#name-number-left'), $('#name-number-width'));
    setDragResize($('.cert-number'), $('#number-number-top'), $('#number-number-left'), $('#number-number-width'));
    setDragResize($('.cert-course'), $('#course-number-top'), $('#course-number-left'), $('#course-number-width'));
    setDragResize($('.cert-date'), $('#date-number-top'), $('#date-number-left'), $('#date-number-width'));
    setDragResize($('.cert-duration'), $('#duration-number-top'), $('#duration-number-left'), $('#duration-number-width'));
    /*
     * ACTIVE ELEMENT
     */
    (() => {
        const elems = [$('.cert-name'), $('.cert-number'), $('.cert-course'), $('.cert-date'), $('.cert-duration')];
        $.each(elems, function (key, elem) {
            elem.click(function () {
                $('.cert-controls .card-header a')[key + 1].click();
            });
        });
        $.each($('.cert-controls .card-header a'), function (key, elem) {
            elem.addEventListener('click', function () {
                $.each(elems, function (key1, elem1) {
                    elem1.removeClass('cert-active');
                });
                if (elem.getAttribute('aria-expanded') === 'false' && key >= 1) {
                    if (elems[key - 1].hasClass('cert-bordered')) {
                        elems[key - 1].toggleClass('cert-active');
                    }
                }
            });
        });
    })();
});

// resize workspace
$('.cert-wokrspace__zoom').click(function () {
    if (scale <= 3) {
        scale += 0.5;
        setSizes(scale);
    }
});

// reset workspace
$('.cert-wokrspace__reset').click(function () {
    scale = ($('.cert-wokrspace__content').width() / $('.cert-wokrspace').width());
    setSizes(scale);
});

// reset original
$('.cert-wokrspace__original').click(function () {
    setSizes(1);
    scale = 1;
});

// set landscape
$('.cert-wokrspace__landscape').click(function () {
    $('.cert-wokrspace__content').css({
        'height': '793.7px',
        'width': '1122.5px'
    });
    orientation = 'landscape';
});

// set portrait
$('.cert-wokrspace__portrait').click(function () {
    $('.cert-wokrspace__content').css({
        'height': '1122.5px',
        'width': '793.7px'
    });
    orientation = 'portrait';
});


const setSizes = (scale) => {
    $('.cert-wokrspace__content').css({
        'zoom': 1 / scale,
        '-moz-transform': 1 / scale
    });
};

/*
 * CONTROL PANEL
 */
// TAB-1
// bg picker
$('#file-0').on('change', function (e) {
    readFile(this.files[0], function (e) {
        bgImage = e.target.result;
        $('.cert-wokrspace__content').css('background-image', `url("${bgImage}")`);
    });
});
$('#bg-number-size').on('change', function (e) {
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
});

// TAB-2
setBorder($('#name-number-border'), $('.cert-name'));
setTop($('#name-number-top'), $('.cert-name'));
setLeft($('#name-number-left'), $('.cert-name'));
setWidth($('#name-number-width'), $('.cert-name'));
setFontSize($('#name-number-font-size'), $('.cert-name'));
setLineHeight($('#name-number-line-height'), $('.cert-name'));
setColor($('#name-number-color'), $('.cert-name'));
setFontFamily($('#name-select-font-family'), $('.cert-name'));
setFontStyle($('#name-select-font-style'), $('.cert-name'));
setTextAlign($('#name-select-text-align'), $('.cert-name'));

// TAB-3
setBorder($('#number-number-border'), $('.cert-number'));
setTop($('#number-number-top'), $('.cert-number'));
setLeft($('#number-number-left'), $('.cert-number'));
setWidth($('#number-number-width'), $('.cert-number'));
setFontSize($('#number-number-font-size'), $('.cert-number'));
setLineHeight($('#number-number-line-height'), $('.cert-number'));
setColor($('#number-number-color'), $('.cert-number'));
setFontFamily($('#number-select-font-family'), $('.cert-number'));
setFontStyle($('#number-select-font-style'), $('.cert-number'));
setTextAlign($('#number-select-text-align'), $('.cert-number'));

// TAB-4
setBorder($('#course-number-border'), $('.cert-course'));
setTop($('#course-number-top'), $('.cert-course'));
setLeft($('#course-number-left'), $('.cert-course'));
setWidth($('#course-number-width'), $('.cert-course'));
setFontSize($('#course-number-font-size'), $('.cert-course'));
setLineHeight($('#course-number-line-height'), $('.cert-course'));
setColor($('#course-number-color'), $('.cert-course'));
setFontFamily($('#course-select-font-family'), $('.cert-course'));
setFontStyle($('#course-select-font-style'), $('.cert-course'));
setTextAlign($('#course-select-text-align'), $('.cert-course'));

// TAB-5
setBorder($('#date-number-border'), $('.cert-date'));
setTop($('#date-number-top'), $('.cert-date'));
setLeft($('#date-number-left'), $('.cert-date'));
setWidth($('#date-number-width'), $('.cert-date'));
setFontSize($('#date-number-font-size'), $('.cert-date'));
setLineHeight($('#date-number-line-height'), $('.cert-date'));
setColor($('#date-number-color'), $('.cert-date'));
setFontFamily($('#date-select-font-family'), $('.cert-date'));
setFontStyle($('#date-select-font-style'), $('.cert-date'));
setTextAlign($('#date-select-text-align'), $('.cert-date'));

// TAB-5
setBorder($('#duration-number-border'), $('.cert-duration'));
setTop($('#duration-number-top'), $('.cert-duration'));
setLeft($('#duration-number-left'), $('.cert-duration'));
setWidth($('#duration-number-width'), $('.cert-duration'));
setFontSize($('#duration-number-font-size'), $('.cert-duration'));
setLineHeight($('#duration-number-line-height'), $('.cert-duration'));
setColor($('#duration-number-color'), $('.cert-duration'));
setFontFamily($('#duration-select-font-family'), $('.cert-duration'));
setFontStyle($('#duration-select-font-style'), $('.cert-duration'));
setTextAlign($('#duration-select-text-align'), $('.cert-duration'));


// Create PDF
$('#preview').click(function () {
    createPreviewPdf()
});




// FUNCTIONS
// name border block
function setBorder(switcher, element) {
    switcher.click(function (e) {
        element.toggleClass('cert-bordered');
        element.toggleClass('cert-active');
    });
};
// top position
function setTop(switcher, element) {
    switcher.on('change paste keyup', function (e) {
        element.css('top', e.target.value + 'px');
    });
};
// left position
function setLeft(switcher, element) {
    switcher.on('change paste keyup', function (e) {
        element.css('left', e.target.value + 'px');
    });
};
// width
function setWidth(switcher, element) {
    switcher.on('change paste keyup', function (e) {
        element.css({
            'width': e.target.value + 'px',
        });
    });
};
// name font size
function setFontSize(switcher, element) {
    switcher.on('change paste keyup', function (e) {
        element.css('font-size', e.target.value + 'px');
    });
};
// line height
function setLineHeight(switcher, element) {
    switcher.on('change paste keyup', function (e) {
        element.css('line-height', e.target.value);
    });
};
// color picker
function setColor(switcher, element) {
    switcher.on('change', function (e) {
        element.css('color', e.target.value);
    });
};
// font family
function setFontFamily(switcher, element) {
    switcher.on('change', function (e) {
        element.css('font-family', e.target.value);
    });
};
// font style
function setFontStyle(switcher, element) {
    switcher.on('change', function (e) {
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
        element.css({
            'font-style': style,
            'font-weight': weight
        });
    });
};
// text align
function setTextAlign(switcher, element) {
    switcher.on('change', function (e) {
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
        element.css('text-align', textAlign);
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
// read file
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
        paperW = (orientation == 'landscape') ? 841.89 : 595.28,
        paperH = (orientation == 'landscape') ? 595.28 : 841.89;

    function getX(elem) {
        return elem.position().left / w * paperW;
    };

    function getY(elem) {
        return elem.position().top / h * paperH;
    };

    function getW(elem) {
        return elem.width() / w * paperW;
    }
    const docDefinition = {
        info: {
            title: 'certificate',
        },
        pageSize: 'A4',
        pageOrientation: orientation,
        content: [{
                image: bgImage,
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