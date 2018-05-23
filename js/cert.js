// default params
const params = {
    name: {
        'value': 'Иванов Иван Иванович',
        'positionTop': '50',
        'positionLeft': '50',
        'fontSize': '20',
        'lineHeight': '1.25',
        'width': '500'
    }
};

let scale = 1;

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
        'max-width': `${params.name.width}px`,
        'font-size': `${params.name.fontSize}px`,
        'line-height': params.name.lineHeight,
    });
    // set name controls
    $('#name-number-top').val(params.name.positionTop);
    $('#name-number-left').val(params.name.positionLeft);
    $('#name-number-width').val(params.name.width);
    $('#name-number-font-size').val(params.name.fontSize);
    $('#name-number-line-height').val(params.name.lineHeight);
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
});

// set portrait
$('.cert-wokrspace__portrait').click(function () {
    $('.cert-wokrspace__content').css({
        'height': '1122.5px',
        'width': '793.7px'
    });
});


const setSizes = (scale) => {
    $('.cert-wokrspace__content').css({
        'zoom': 1 / scale,
        '-moz-transform': 1 / scale
    });
};

// bg picker
$('#file-0').on('change', function (e) {
    $('.cert-wokrspace__content').css('background-image', `url("${e.target.value}")`);
});

// name border block
$('#name-number-border').click(function (e) {
    $('.cert-name').toggleClass('cert-name--bordered');
});

// name position
$('#name-number-top').on('change', function (e) {
    $('.cert-name').css('top', e.target.value + 'px');
});
$('#name-number-left').on('change', function (e) {
    $('.cert-name').css('left', e.target.value + 'px');
});

// font width
$('#name-number-width').on('change', function (e) {
    $('.cert-name').css({
        'width': e.target.value + 'px',
        'max-width': e.target.value + 'px'
    });
});

// name font size
$('#name-number-font-size').on('change', function (e) {
    $('.cert-name').css('font-size', e.target.value + 'px');
});

// name line height
$('#name-number-line-height').on('change', function (e) {
    $('.cert-name').css('line-height', e.target.value);
});

// name color picker
$('#name-number-color').on('change', function (e) {
    $('.cert-name').css('color', e.target.value);
});

// name font style
$('#name-select-font-style').on('change', function (e) {
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
    $('.cert-name').css({
        'font-style': style,
        'font-weight': weight
    });
});