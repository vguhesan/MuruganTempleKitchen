var mySwiper;

function loadSlider() {
    mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        speed: 300,
        loop: true,

        autoplay: {
            delay: 9000,
        },

        autoHeight: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
}

var imgPrefixPath = '/slider-images/';

jQuery(document).ready(function() {
    // Fetch all slides from server /kitchentvimages/
    var imgFilesDirectory = imgPrefixPath;
    var str = '';

    // get auto-generated page 
    $.ajax({url: imgFilesDirectory}).then(function(html) {
        // create temporary DOM element
        var document = $(html);

        // find all links ending with .jpg 
        document.find('a[href$=".jpg"]').each(function() {
            var jpgName = $(this).text();
            var jpgUrl = $(this).attr('href');

            //console.log(jpgUrl);

            //$('#slidelist').prepend('<img id="' + jpgName + '" src="images/' + jpgUrl + '" />') 
            str += '<div class="swiper-slide"><img id="' + jpgName + '" src="' + imgPrefixPath + jpgUrl + '" width="100%"/></div>';

        });

        //console.log(str);
        $('#slidelist').prepend(str) ;

        loadSlider();
    });
});

