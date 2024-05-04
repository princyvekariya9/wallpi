$(document).ready(function(){
    $('#slider').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        navText:['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
        dots:false,
        })

        // testimonial slider
    $('#testimonial_slider').owlCarousel({
        items:4,
        loop:true,
        nav:true,
        dots:false,
        margin:30,
        })
 
        $('#blog_info').owlCarousel({
        items:3,
        loop:true,
        nav:false,
        dots:false,
        margin:30,
        })

        // scrolling
        
        $(window).scroll(function(){
            var sticky = $('.sticky'),
                scroll = $(window).scrollTop();
          
            if (scroll >= 100) sticky.addClass('fixed');
            else sticky.removeClass('fixed');
          });
          

        AOS.init();

        var owl = $('#slider');
              owl.owlCarousel();
              owl.on('changed.owl.carousel', function(event) {
                  new WOW().init();
              })

        wow = new WOW(
                {
                boxClass:     'wow',      
                animateClass: 'animated', 
                offset:       0,          
                mobile:       true,       
                live:         true        
              }
              )
              wow.init();



              
    });

    (function($) { "use strict";

    $(document).ready(function(){"use strict";
    
            //Scroll back to top
    
            var progressPath = document.querySelector('.progress-wrap path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            $(window).scroll(updateProgress);
            var offset = 50;
            var duration = 550;
            jQuery(window).on('scroll', function() {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.progress-wrap').addClass('active-progress');
                } else {
                    jQuery('.progress-wrap').removeClass('active-progress');
                }
            });
            jQuery('.progress-wrap').on('click', function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, duration);
                return false;
            })
    
    
        });
    
    })(jQuery);

    // loader js
    $(document).ready(function(){
        setTimeout(function(){
            $('.loader').fadeOut();
        },1000);
    })