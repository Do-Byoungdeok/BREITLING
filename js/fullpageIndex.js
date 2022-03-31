$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        menu:"#menu",
        anchors:["firstPage","secondPage","thirdPage","fourPage","fivePage"],
        
        
	});
    
    //logo클릭시 첫화면으로
    $('.logo').on('click', function(){
        $.fn.fullpage.moveTo(1);
    })

});

$(function(){



    let nowIndex = 0;
    let numSlide = 2;
    $(".bannerItem").eq(0).siblings().hide();

    function autoSlide(){
        if(nowIndex == numSlide){
            $(".bannerItem").eq(nowIndex).fadeOut(600);
            $(".bannerItem").eq(0).fadeIn(1000);
            nowIndex = 0;
        } else{
            $(".bannerItem").eq(nowIndex).fadeOut('slow');
            $(".bannerItem").eq(nowIndex+1).fadeIn(1000);
            nowIndex++
        }
    }
    setInterval(autoSlide, 5000);


    //자동 슬라이드랑 pager연결 방법 찾기

    //pager 
    $(".pager>li").on("click",function(){
        var selectIndex = $(this).index();

        $(this).addClass("active")
        .siblings().removeClass("active");

        $(".innerBox>.bannerItem").eq(selectIndex).fadeIn(2000)
        .siblings().fadeOut(1500);
    })
    


    //content1 아이템
    $(".gender .menSub").click(function(){
        $(".hoverItem>.menHover").toggleClass("active");
    })

    $(".gender .womenSub").click(function(){
        $(".hoverItem>.womenHover").toggleClass("active");
    })

    


    //메뉴
    $(".hamBtn").on("click", function(){
        if($(this).hasClass("active")){
            $("nav").css("right", "-300px");
        }
        else{
            $("nav").css("right",0);
        }
        $(this).toggleClass("active");
    })



})
