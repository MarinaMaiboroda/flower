/**
 * Created by PC on 05.04.2016.
 */
// Can also be used with $(document).ready()
$(window).load(function() {

});

function fixed_width_of_occasion(){
    if ($(window).width() <= 1200) {
        $('.occasion-for-shop ul li').each(function (i, elem) {
            var width = $(this).width();
            var new_width = Math.ceil(width);
            $(this).width(new_width).children().width(new_width);
        });
    }
    else {
        $(this).width(auto).children().width(auto);
    }
};

$(document).ready(function() {
    $('.home-slider').flexslider({
        animation: "slide",
        directionNav: false
    });

    $('.main-menu > li').mouseover(function(){
        $('.main-menu > li').removeClass('active').removeClass('open').css('opacity', '0.5');
        $(this).addClass('active').addClass('open').css('opacity', '1');
        var logo_width = $('.logo').width();
        var link_attr = $(this).attr("data-target");
        var find_elem = $('.sub-menu-block').find('div'+link_attr).length;
        if (find_elem != 0) {
            if ($('.sub-menu-block').is(':visible')){
                $('.sub-menu-block').find('div').removeClass('show-menu');
                $('.sub-menu-block').find('div' + link_attr).addClass('show-menu').css('margin-left', logo_width);
            }
            else {
                $('.sub-menu-block').css('display', 'block').find('div' + link_attr).addClass('show-menu');
            }
        }
        else {
            $('.sub-menu-block').css('display', 'none');
        }
    });

    $('.main-menu > li').mouseleave(function(){
        if ($('.sub-menu-block').is(":hover")){
            console.log('focus');
        }
        else {
            $(this).removeClass('active').removeClass('open')
        }
    });

    $('.sub-menu-block').mouseleave(function(){
        $('.main-menu > li').removeClass('active').removeClass('open').css('opacity', '1');;
        $(this).css('display', 'none').find('div').removeClass('show-menu');
    });

    /*fixed_width_of_occasion();*/
    $("a[rel^='prettyPhoto']").prettyPhoto({
        theme: 'light_square',
        slideshow: 5000,
        autoplay_slideshow: false,
        hideflash: false,
        show_title: false,
        social_tools: '',
        markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"><a class="pp_close icon-circle-cross" href="#"></a></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<p class="pp_description"></p> \
											{pp_social} \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',

    });
    $('.main-img-wrap img').loupe({loupe: 'loupe'});
});

$(window).resize(function(){
    /*fixed_width_of_occasion();*/
});

$(window).scroll(function(){
    var distance = $(window).height() * 3;
    if ($(window).width() < 767) {
        if ($(window).scrollTop() >= distance) {
            $('#scroll-to-top').css('display', 'inline-block');
        }
        else {
            $('#scroll-to-top').css('display', 'none');
        }
    }
});

$('#scroll-to-top').click(function(){
    $('html, body').animate({
        scrollTop:0
    }, 1000	);
    return false;
});

/** Bootatrap modal in the center **/
function setModalMaxHeight(element) {
    this.$element     = $(element);
    this.$content     = this.$element.find('.modal-content');
    var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
    var dialogMargin  = $(window).width() < 768 ? 20 : 60;
    var contentHeight = $(window).height() - (dialogMargin + borderWidth);
    var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
    var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
    var maxHeight     = contentHeight - (headerHeight + footerHeight);

    this.$content.css({
        'overflow': 'hidden'
    });

    this.$element
        .find('.modal-body').css({
        'max-height': maxHeight,
        'overflow-y': 'auto'
    });
}

$('.modal').on('show.bs.modal', function() {
    $(this).show();
    setModalMaxHeight(this);
});

$(window).resize(function() {
    if ($('.modal.in').length != 0) {
        setModalMaxHeight($('.modal.in'));
    }
});
