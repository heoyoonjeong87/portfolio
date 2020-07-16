    $(window).scroll(function () {
        var height = $(document).scrollTop();
        if(height > 0){
            changeWhiteMenu();
        }else{
            changeDefaultMenu();
        }
    }); 

    function changeWhiteMenu(){
        $(".headlist").addClass("headlist_white");
        $(".logo").addClass("logo_black");
        $(".menuitem").addClass("blk_bd");
        $(".underline").addClass("blk_underline"); 
        $(".title_item").css("color","#000"); 
    }
    function changeDefaultMenu(){
        $(".headlist").removeClass("headlist_white");
        $(".logo").removeClass("logo_black");
        $(".menuitem").removeClass("blk_bd");
        $(".underline").removeClass("blk_underline");
        $(".title_item").css("color","#fff");
    }

    
    function checkMouseOverOnMenuItem(){
        $(".menuitem").mouseover(function(){
            changeWhiteMenu();
        });

        $(".menuitem").mouseleave(function(){
            var height = $(document).scrollTop();
            if (height == 0){
                changeDefaultMenu();
            }
        });
    }
    
    function initMenuEvent(){
        checkMouseOverOnMenuItem();
    }

   //화면내 앨리먼트 존재여부 리턴
   var isScrolledIntoView = function(elem) 
   {
       var result = false;
       var docViewTop = $(window).scrollTop(); //현재스크롤위치
       var docViewBottom = docViewTop + $(window).height(); //+ 브라우저에서보여지는높이

       var elemTop = $(elem).offset().top; //elm의 좌표값의 top
       var elemBottom = elemTop + $(elem).height(); //elm의 top에 elm의 높이더하면 elm의 bottom

       if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){ //elm이 화면안에 있는지 쳌
           result =  true;
       }
       return result;
   }
/*    function isScrolledIntoView(elem)
   {
       var result = false;
       var docViewTop = $(window).scrollTop(); //현재스크롤위치
       var docViewBottom = docViewTop + $(window).height(); //+ 브라우저에서보여지는높이

       var elemTop = $(elem).offset().top; //elm의 좌표값의 top
       var elemBottom = elemTop + $(elem).height(); //elm의 top에 elm의 높이더하면 elm의 bottom

       if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){ //elm이 화면안에 있는지 쳌
           result =  true;
       }
       return result;
   } */

    /* function toggleMenu(){
        $(".headlist").toggleClass("headlist_white");
        $(".logo").toggleClass("logo_black");
        $(".menuitem").toggleClass("blk_bd");
        $(".underline").toggleClass("blk_underline");
    } */

    
 