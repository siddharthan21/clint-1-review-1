$(".card").hover(function () {
        // $("ul").addClass("dis");
        // console.log(this *"ul");
        // console.log($(this).children().eq(1));
        $(this).children().eq(1).addClass("dis");
        
    }, function () {
        // out
        // $("ul").removeClass("dis");
        $(this).children().eq(1).removeClass("dis");
    }
);