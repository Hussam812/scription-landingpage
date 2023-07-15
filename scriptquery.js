$("nav ul li a").click(function(){
    var thisSection = $(this).attr("href");
    var thisLink = $(this)
    
    $("html, body").stop().animate({
        scrollTop: $(thisSection).offset().top -200
    }, 400, "easeOutCirc", function(){
        $("nav ul li a").removeAttr("class");
        thisLink.addClass("selected") ;
    });
});

$(window).on('load', function(){
    $(".flexslider").flexslider({
        animation:"slide",
        slideshowSpeed: 2000,
        direction: "vertical",
        reverse: true,
        pauseOnHover: true
    });
})



(function(){
    "use strict"
    $("#tabs > ul > li> a").click(function(){
        $("#tabs > ul > li > a").css({"background": "#C8D6AF", "color":"##061923"});
        $(this).css({"background": "#F7FFEA", "color":"##061923"});
        const thisTab = $(this).attr("href");
        $("#tabs > div:visible").fadeOut(200, function(){
            $(thisTab).fadeIn(200);
        });
    });
}())
