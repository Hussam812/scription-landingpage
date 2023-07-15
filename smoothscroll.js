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


$(window).on("load", function(){
    var allLinks = $("nav ul li a");
    var posts = $("section");
    var pageTop; 
    var pagePos;
    var counter = 0;
    var postTops = [];
    var prevCounter = 0;
    var doneResizing;

    resetPagePosition();
   
    
    $(window).scroll(function(){
        pageTop = $(window).scrollTop() + 210; 

        if (pageTop > postTops[counter+1]){
            counter++;
            //console.log(`scrolling down ${counter}`);

        }else if (counter > 0 && pageTop < postTops[counter]){
            counter--;
            //console.log(`scrolling up ${counter}`);

        }
        if (counter != prevCounter){
            $(allLinks).removeAttr("class");
            $("nav ul li a").eq(counter).addClass("selected");
            prevCounter = counter;
        }
        /*
        pagePos = $(posts[0]).offset().top;
        console.log(`${pageTop} and ${pagePos}`);*/
    });
    
    $(window).on("resize", function(){
        clearTimeout(doneResizing);
        doneResizing = setTimeout(function(){
            
            resetPagePosition();

        }, 500);
    });

    function resetPagePosition(){
        postTops = [];

        posts.each(function(){
            postTops.push(Math.floor($(this).offset().top));
        });
        var pagePostion = $(window).scrollTop()+210;
        counter = 0;

        for ( var i=0; i < postTops.length; i++){
            if(pagePostion > postTops[i]){counter++;}
        }
        counter--;

        $(allLinks).removeAttr("class");
        $("nav ul li a").eq(counter).addClass("selected")
    }
    
});