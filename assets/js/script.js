$(document).ready(function(){
    
    // crousal
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            601:{
                items:4
            }
        }
    })

    // dropdown open on hover 
    $(".dropdown").mouseenter(function(){
        $(this).children(".dropdown-menu").addClass("show");
    });
    $(".dropdown").mouseleave(function(){
        $(this).children(".dropdown-menu").removeClass("show");
    });

    // Hides show address
    $("#address").on('change', function(){
        var dropDownValue = $("#address").val();
        $(".address").css('display','none');
        $("#"+dropDownValue).css('display','block');
    });
    $(".address").css('display','none');
    $("#1").css('display','block');

    // video
    // $("#myVideo").hide();
    // $("#thumbnail").show();
    // $("#overlayText").show();
    // $("#overlayPlay").show();
    // $("#overlayImage").show();

    // $("#overlayPlay").click(function(){
    //     $("#overlayText").hide();
    //     $("#overlayImage").hide();
    //     $("#thumbnail").hide();
    //     $("#myVideo").show();
    //     $("#myVideo").attr("autoplay",true);
    //     $("#overlayPlay").hide();
    // });
    

    $('.openModal').click(function(){
		$('#videoView').modal({
			backdrop: 'static'
		});
	});

    // ------------step-wizard-------------
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var target = $(e.target);
    
        if (target.parent().hasClass('disabled')) {
            return false;
        }
    });

    // $(".next-step").click(function (e) {

    //     var active = $('.wizard .nav-tabs li.active');
    //     active.next().removeClass('disabled');
    //     nextTab(active);

    // });
    $(".prev-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        prevTab(active);

    });
    
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


$('.nav-tabs').on('click', 'li', function() {
    $('.nav-tabs li.active').removeClass('active');
    $(this).addClass('active');
});

function playVideo(val){
    $("#myvideo"+val)[0].play();
}

function closeVideo(val) {
    $("#myvideo"+val)[0].pause();
}
  


