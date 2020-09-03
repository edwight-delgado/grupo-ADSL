$(".site-burger-menu").on("click", function(o) {
  o.preventDefault(), $("body").hasClass("show") ? ($(".site-burger-menu").removeClass("active"), $("body").removeClass("show")) : ($(".site-burger-menu").addClass("active"), $("body").addClass("show"))
}), $(window).width() > 766 ? ($("body").removeClass("site-mobile-menu-active"), $(".site-burger-menu").removeClass("active")) : $("body").addClass("site-mobile-menu-active"), $(window).resize(function() {
  $(window).width() > 766 ? ($("body").removeClass("site-mobile-menu-active"), $(".site-burger-menu").removeClass("active")) : $("body").addClass("site-mobile-menu-active")
}), $(document).click(function(o) {
  var e = $(".site-nav, .site-burger-menu");
  e.is(o.target) || 0 !== e.has(o.target).length || $("body").hasClass("show") && ($("body").removeClass("show"), $(".site-burger-menu").removeClass("active"))
})

$(function(){
  var itemcarrusel = $('.b1-slide').length;
  if (itemcarrusel > 1 ) {
    $('.b1').removeClass('carrusel-desktop');
    $('.b1-slider').addClass('owl-carousel');
    $('.b1-slider').addClass('b1-owlcarousel');

    $('.b1-owlcarousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      items: 1,
      smartSpeed: 1000,
      autoplay: true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      responsive: {
        0: {
          items: 1
        }
      }

    });
  }
});
window.addEventListener('load', function(){
  var pager_items = document.querySelectorAll('.b1 .owl-dot'),
      pager_items_cant = document.querySelectorAll('.b1 .owl-dot').length;
  for (var i = 0; i < pager_items.length; i++) {
    var elemento = document.createElement("span"),
        child = i + 1;
    if (pager_items_cant <= 9) {
      var cant = document.createTextNode("0" + child + "/0" + pager_items_cant);
      pager_items[i].appendChild(elemento);
      elemento.appendChild(cant)
    }
    else if (pager_items_cant >= 10) {
      var cant = document.createTextNode(child + "/" + pager_items_cant);

      pager_items[i].appendChild(elemento);
      elemento.appendChild(cant)
    }
    // console.log(pager_items[i])
  }
  // console.log(pager_items)
}, false )





// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

// Place your Sequence options here to override defaults
// See: http://sequencejs.com/documentation/#options
var options = {
  animateCanvas: false,
  phaseThreshold: false,
  preloader: true,
  reverseWhenNavigatingBackwards: true
}

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);



//chat 
$(function(){
  $('.fa-minus').click(function(){    
    $(this).closest('.chatbox').toggleClass('chatbox-min');
  });
  $('.fa-close').click(function(){
    $(this).closest('.chatbox').hide();
  });
});

/* modal */

//Go Back
function OpenProduct(id){
  $.getJSON( "https://jsonplaceholder.typicode.com/posts/"+id, function( data ) {
    $(".lightbox-blanket .product-title").html(data.title);
    $(".lightbox-blanket .product-description").html(data.body);
    $("#img-modal").attr("src",'img/pc-gamer'+id+'.jpeg');
    console.log(id);
  });
  var id = $('lightbox-blanket .product-image[item-data="'+id+'"] img');
  var lbi = $('.lightbox-blanket .product-image img');
  console.log($(id).attr("src"));
  $(lbi).attr("src", $(id).attr("src"));
 // var price =  $(i).attr("price-data");
 // var lbprice = $('.lightbox-blanket .product-info .product-price');
 // if(lbprice){
 //   price = price.split["."];
 //   $(lbprice).html("$" + price[0] + "<span class='product-price-cents'>"+price[1] +"</span>");
 //}
  
  $(".lightbox-blanket").toggle();
  
  
  $("#product-quantity-input").val("0");
  
}
function GoBack(){
  $(".lightbox-blanket").toggle();
}

/* end modal */