var mini = anime({})
console.log(mini);
        var roundLogEl = document.querySelector('#circle-log');
        var roundLogEl1 = document.querySelector('#circle-log1');
        var roundLogEl2 = document.querySelector('#circle-log2');
        var roundLogEl3 = document.querySelector('#circle-log3');
        var roundLogEl4 = document.querySelector('#circle-log4');
        var roundLogEl5 = document.querySelector('#circle-log5');
        var roundLogEl6 = document.querySelector('#circle-log6');
        var roundLogEl7 = document.querySelector('#circle-log7');
        var roundLogEl8 = document.querySelector('#circle-log8');
        var card1 = document.querySelector('#card123');

        var animation =  anime({
        targets: roundLogEl,
        innerHTML: [0, 4],
        easing: 'easeInOutExpo',
        duration: 2000,
        round: 1 // Will round the animated value to 1 decimal
        });
        var animation1 = anime({
        targets: roundLogEl1,
        innerHTML: [0, '1,606'],
        easing: 'easeInOutExpo',
        duration: 2000,
        round: 1 // Will round the animated value to 1 decimal
        });
        var animation2= anime({
        targets: roundLogEl2,
        innerHTML: [0, '10,898'],
        easing: 'easeInOutExpo',
        duration: 2000,
        round: 1 // Will round the animated value to 1 decimal
        });
        var animation3 = anime({
        targets: roundLogEl3,
        innerHTML: [0, 18],
        easing: 'easeInOutExpo',
        duration: 2000,
        round: 1 // Will round the animated value to 1 decimal
        });
        var animation4 = anime({
        targets: roundLogEl4,
        innerHTML: [0, '1,755'],
        easing: 'easeInOutExpo',
        duration: 2000,
        round: 1 // Will round the animated value to 1 decimal
        });
        var animation5 = anime({
        targets: roundLogEl5,
        innerHTML: [0, '52,67,39,674'],
        easing: 'easeInOutExpo',
        duration: 2000,
        round: 1 // Will round the animated value to 1 decimal
        });
        var animation6 = anime({
        targets: roundLogEl6,
        innerHTML: [0, '15'],
        easing: 'easeInOutExpo',
        duration: 2000,
        round: 1 // Will round the animated value to 1 decimal
        });
        var animation7 = anime({
        targets: roundLogEl7,
        innerHTML: [0, '10,954'],
        easing: 'easeInOutExpo',
        duration: 2000,
        round: 1 // Will round the animated value to 1 decimal
        });
        var animation8= anime({
        id: 9,
        targets: roundLogEl8,
        innerHTML: [0, '38,26,16,561'],
        easing: 'easeInOutExpo',
        duration: 2000,
        round: 1 // Will round the animated value to 1 decimal
        });
        var animeslide = anime({
            targets: '.animate-slide',
            translateX: [-700, 0],
            direction: 'alternate',
            loop: false,
            duration: 2000,
            easing: 'spring',
        })

        anime({
            targets: '.openmodal',
            translateX: [500, 2],
            backgroundColor: '#22a2f8', 
            duration: 1000,
            easing: 'easeInOutQuad'
          });

        //   var headanime = anime({
        //     targets: '.calchover',
        //     translateX: [-20, 0],
        //     duration: 800,
        //     loop: false,
        //     delay: 300,
        //     easing: 'easeInOutQuad',
        //     autoplay: false,
        //   });

        animation.finished.then((val) => console.log('suii') ).catch((err) => console.log(err));
        window.addEventListener('DOMContentLoaded', () =>{
            const modal = document.querySelector('.modal')
            const openmodal = document.querySelector('.openmodal')
            const closeBtn = document.querySelector('.close-modal')
            const hoverbtn = document.querySelector('.calchover')

            const toggleModal = () => {
                if(modal.classList.contains('flex')){
                    modal.classList.toggle('hidden')
                    modal.classList.toggle('flex')
                    hoverbtn.classList.add('hidden')
                    hoverbtn.classList.remove('flex')
                    animeslide.restart()

                }
                else
                {
                    modal.classList.toggle('flex')
                    modal.classList.toggle('hidden')
                    hoverbtn.classList.add('flex')
                    hoverbtn.classList.remove('hidden')
                    animeslide.play()
                }
            }
           

            openmodal.addEventListener('click', toggleModal)
            closeBtn.addEventListener('click', toggleModal)
        })


        // counter animation on view port
        
        $.fn.isInViewport = function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
        
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
        
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };

        $(window).on('resize scroll', function() {
            if ($('#play').isInViewport()) {
                
                animation.play()
                animation1.play()
                animation2.play()
                animation3.play()
                animation4.play()
                animation5.play()
                animation6.play()
                animation7.play()
                animation8.play()


            } else {
                // do something else
            }
        });

    document.querySelector('#play').addEventListener('', function (e)  {
        e.preventDefault();
        animation.play()
        animation1.play()
        animation2.play()
        animation3.play()
        animation4.play()
        animation5.play()
        animation6.play()
        animation7.play()
        animation8.play()
    } ) 

    // var ent =  anime({
    //         targets: ".basic-staggering-demo",
    //         translateY: [800, 0],
    //         direction: 'alternate',
    //         loop: false,
    //         duration: 4000,
    //         easing: 'easeOutExpo',
    //         delay: anime.stagger(100),
    //     })
    //     // var ent2 = anime({
    //     //     targets:  ".basic-staggering-demo",
    //     //     translateX: [0, -5],
    //     //     translateY: [0, -],
    //     //     loop: false,
    //     //     easing: 'spring',
    //     // })
    
    //     document.querySelector('.basic-staggering-demo').addEventListener('scroll', function(e){
    //         e.preventDefault();
    //         if(window.pageYOffset > 8000){
    //         ent.play();
    //         }
    //         else{
    //             ent.pause()
    //         }
    //         // ent.play()
    //     })
