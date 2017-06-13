'use strict';

$(function () {
    $('.banner__list').flickity({
        prevNextButtons: false
    });
});
'use strict';

$(function () {
    ymaps.ready(init);
    var myMap, myPlacemark;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [53.388930, 83.745505],
            zoom: 17
        });

        myPlacemark = new ymaps.Placemark([53.388930, 83.745505], {
            hintContent: 'Типография Impress',
            balloonContent: '<b>Типография Impress</b><br>656037, г. Барнаул проспект Калинина, 116/44'
        });

        myMap.geoObjects.add(myPlacemark);
    }
});
'use strict';

$(function () {
    $('.feauture').addClass('feauture_hide');

    function feautureShow() {
        if ($(window).scrollTop() > $('#about')[0].offsetTop - 200) {
            $('.feauture').each(function (i, f) {
                setTimeout(function () {
                    $(f).removeClass('feauture_hide');
                }, ++i + '00');
            });
        }
    }

    feautureShow();
    $(window).on('scroll', feautureShow);
});
'use strict';

$(function () {
    $(document).on('click', 'a[href^="#"]', function (e) {

        var id = $(this).attr('href');

        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        var pos = $id.offset().top;
        console.log(id);

        if (id === '#about') {
            $('body, html').animate({ scrollTop: pos }, 1000);
        } else {
            $('body, html').animate({ scrollTop: pos }, 2500);
        }
    });
});
'use strict';

$(function () {
    var materials = $('.materials__item');
    $(materials).addClass('materials__item_hide');

    function materialsShow() {
        $(materials).each(function (i, mat) {
            if ($(window).scrollTop() > $(mat)[0].offsetTop + 600) {
                $(mat).removeClass('materials__item_hide');
            } else {
                $(mat).addClass('materials__item_hide');
            }
        });
    }

    materialsShow();
    $(window).on('scroll', materialsShow);
});
'use strict';

$(function () {
    var height = $('.order__basket').css('height').split('px')[0];
    $('.order__basket').css('height', +height + 'px');

    $('[data-action="add"]').on('click', function () {
        var btn = $(this);
        $(btn).addClass('disabled');

        var height = $('.order__basket').css('height').split('px')[0];

        $('.table__row_item').first().clone().appendTo('.order .table').addClass('hidden');
        $('.table__row_last').appendTo('.order .table');
        $('.order__basket').css('height', +height + 65 + 'px');
        setTimeout(function () {
            $('.table__row_item.hidden').fadeIn();
            $('.table__row_item.hidden').removeClass('hidden');
            $(btn).removeClass('disabled');
        }, 500);
    });
});
'use strict';

$(function () {
    $('.count__controls').on('click', function (e) {
        var field = $(this).parent().find('input');
        var currentVal = $(field).val();

        switch ($(e.target).hasClass('count__up')) {
            case true:
                $(field).val(++currentVal);
                break;
            case false:
                $(field).val(--currentVal);
                break;
        }
    });
});