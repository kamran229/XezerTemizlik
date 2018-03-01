
//////////////////////////////////////////////////
var mainSlider;
$(document).ready(function(){
  mainSlider = $('.owl-carousel');
  var owl = $('.owl-carousel');
  $('.owl-carousel').owlCarousel({
      items:1,
      lazyLoad:true,
      loop:true,
      margin:10,
      mouseDrag:false,
      autoplay:true,
      autoplayTimeout:3000,
  });
  mainSlider.on('changed.owl.carousel', function(property) {
   var current = property.item.index;
   var prev = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('data-navipicture');
   var next = $(property.target).find(".owl-item").eq(current).next().find("img").attr('data-navipicture');

   $('.navPrev').find('img').attr('src', prev);
   $('.navNext').find('img').attr('src', next);
 });
 owl.on('changed.owl.carousel', function(event) {
       var item = event.item.index;
       $('.CarouselItem h1').removeClass('animated zoomIn').eq(item).addClass('animated zoomIn');
       $('.CarouselItem a').removeClass('animated fadeInUp').eq(item).addClass('animated fadeInUp');

   });


});
$('.navNext').on('click', function() {
  mainSlider.trigger('next.owl.carousel', [300]);
  return false;
});

$('.navPrev').on('click', function() {
  mainSlider.trigger('prev.owl.carousel', [300]);
  return false;
});

// ////////////////////////////////////////
$(document).ready(function(){
  $('.portfolioContainer').imagesLoaded(function () {
    $('.portfolioContainer').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  })
  $('.filters-by-category ul li').click(function(){
  $('.filters-by-category ul li').removeClass('active');
  $(this).addClass('active');

  var selector=$(this).attr('data-filter');
  $('.portfolioContainer').isotope({
    filter:selector
  });
  return false;
})
  })
});




//////////////////////////////////
//Progress
$('.countNum h4').countTo({
speed: 6000,
refreshInterval: 50,
formatter: function (value, options) {
return value.toFixed(options.decimals);
},
onUpdate: function (value) {
console.debug(this);
},
onComplete: function (value) {
console.debug(this);
}
});
/////////////////////////////////////////////
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



///////////////////////////////////////////////

$('#slid').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:3000,
  responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
});
$('.kamran').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:3000
});
/////////////////////////////
$('#slick').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay:3000,
  responsive: [{
          breakpoint: 991,
          settings: {
              slidesToShow: 2
          }
      }, {
          breakpoint: 767,
          settings: {
              slidesToShow: 2
          }
      }, {
          breakpoint: 480,
          settings: {
              slidesToShow: 1
          }
      }]
});
///////////////////////
$('#kkmm').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
   autoplay:3000,
  arrows: false
});
  //------------------------------------------------------//
  $(".NavMenuHeader").sticky({topSpacing:0});

  /*--------------------------*/
//   $(".fa-plus").click(function(){
// 	var value=$("input").val();
// 	if(value == ''){
// 		$("input").val(1);
// 	}
// 	else{
// 		value++;
// 		$("input").val(value);
// 	}
// });
// $(".fa-minus").click(function(){
// 	var value=$("input").val();
// 	if(value !=='' && value > 0){
// 		value--;
// 		$("input").val(value);
// 	}
// });
