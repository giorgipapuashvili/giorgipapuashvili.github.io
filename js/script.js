$(document).ready(function() {
    // MENU
    $(".menuToggle").click(function() {
        $(this).toggleClass("active");
        $('body').toggleClass("hid");
        $('.menu').slideToggle(300, function(){
            if($(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });
    $(".item").click(function() {
        $('.menuToggle').removeClass("active");
        $('.menu').slideToggle(300, function(){
            $(this).removeAttr('style');
        });
        $('body').removeClass("hid");
    });
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    // END MENU
    $(".scroll").on("click", function (s) {
        s.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    // Modal
    $('.promo_btn').on("click", function () {
        $('.signPopup').addClass('active fadeInDown');
        $('.signPopup ').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.signPopup .close, .sigin-close').on("click", function () {
        $('.signPopup ').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.signPopup').removeClass('active');
        }, 500);
    });
    $('.signPopup .closeBtn').on("click", function () {
        $('.signPopup').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });

    $('.feedback_btn').on("click", function () {
        $('.feedbackPopup').addClass('active fadeInDown');
        $('.feedbackPopup').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.feedbackPopup .close, .feedback-close').on("click", function () {
        $('.feedbackPopup ').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.signPopup').removeClass('active');
        }, 500);
    });
    $('.feedbackPopup .closeBtn').on("click", function () {
        $('.feedbackPopup').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });
    // End Modal

    //Input focus
    $('.FcsInp').focus(function(){
        $(this).parent().addClass('active');
    });
    // End input focus

    //Circle
    // temp = parseInt($(".circle strong").text())
    // $('.circle').circleProgress({
    //     startAngle: -Math.PI / 4 * 2,
    //     fill: {gradient: [['#304586', .54], ['#2FB1BF', .35]], gradientAngle: Math.PI / 4},
    // }).on('circle-animation-progress', function(event, progress) {
    //     $(this).find('strong').html(parseInt(progress*temp));
    // });

    //End circle
    var target = $('.progress-bar');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function(){
        var winScrollTop = $(this).scrollTop();
        if(winScrollTop > scrollToElem){
            $('.indicator').addClass('fadeInLeft')
        }
    });

    // var postion = $('.product').offset().top,
    //     height = $('.product').height();
    // $(document).on('scroll', function (){
    //     var scroll = $(document).scrollTop();
    //     if(scroll  > postion && scroll < (postion + height) ) {
    //         $('.circle').circleProgress({
    //             startAngle: -Math.PI / 4 * 2,
    //             fill: {gradient: [['#304586', .54], ['#2FB1BF', .35]], gradientAngle: Math.PI / 4},
    //         });
    //     }
    // })


    function animateElements(e, init) {
        if(init){
            $('.progressbar').data('animate', false);
        }


        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');

            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                //$(this).data('animate', false); // Change this 'false -or- true' - Currently set to false so that each time a user clicks on 'Skill-set' link, animation occurs
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    thickness: 4, // Change this for thickness
                    fill: {gradient: [['#304586', .54], ['#2FB1BF', .35]], gradientAngle: Math.PI / 4},
                }).on('circle-animation-end', function(){
                    //$(this).parent().data('animate', false);
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('.percent').text((stepValue * 100).toFixed(0) + "%"); // NOTE: Change '.toFixed(0)' to '.toFixed(1)' to get 1 decimal place to the right...
                }).stop();
            }
        });

    }

    //animateElements();
    $(window).scroll(animateElements);
});
