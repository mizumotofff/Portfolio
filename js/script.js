console.log("test")


$(function() {
    var top = $('.about');
    var portfolio = $('.portfolio');
    var contact = $('.contact');
    var skill = $('.skill');
    //クリックすると消える
    top.click(function () {
        top.addClass("fade");
    });

    $(window).scroll(function (){
            var position = $(top).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(top).addClass('fade');
            }
    });

    $(window).scroll(function (){
            var position = $(portfolio).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(portfolio).addClass('fade');
            }
    });

    $(window).scroll(function (){
            var position = $(contact).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(contact).addClass('fade');
            }
    });

    $(window).scroll(function (){
            var position = $(skill).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 500){
              $(skill).addClass('fade');
            }
    });
});
