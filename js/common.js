$(function () {
    $('[data-toggle="menu"]').tooltip();
    $(document).click(function(){
        return event.srcElement.id == "popmenu" ? $("#menu").toggleClass("hide") : $("#menu").addClass("hide");
    });
     $(document).click(function(){
        return event.srcElement.id == "popmenu1" ? $("#menu1").toggleClass("hide") : $("#menu1").addClass("hide");
    });
    $(document).click(function(){
        return event.srcElement.id == "popmenu2" ? $("#menu2").toggleClass("hide") : $("#menu2").addClass("hide");
    });
    
}) 