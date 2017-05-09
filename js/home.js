jQuery.noConflict();
(function( $ ) {
/* Start of SVG Animation */
$(document).ready(function() {
  $('html, body').scrollTop(0);
  /* Start of Background Panning Effect */
  var screenHeight = $(window).height();
  var screenWidth = $(window).width();
  //4067 x 900
  //var imgWidth = $(".panning-bg .img-container img").width();
  //var imgHeight = $(".panning-bg .img-container img").height();
  var imgWidth = 4067;
  var imgHeight = 900;
  var containerWidth, containerHeight;
  containerHeight = screenHeight;
  containerWidth = (screenHeight / imgHeight) * imgWidth;
  
  var maxLeft = containerWidth - screenWidth;
  
  $(".panning-bg .img-container").width(containerWidth);
  $(".panning-bg .img-container").height(containerHeight);
  
   /* Start of Background Panning Effect */
  
  $('#logo path').each(function(){
    pathPrepare($(this));
  });
  $('#draw_path path').each(function(){
    pathPrepare($(this));
  });
  $('#logo').css('opacity', 1);
  var timelineLogo = new TimelineMax()
  .call(function(){
    $('html, body').scrollTop(0);$('body').addClass('hide-overflow');
  })
  .add([
    TweenMax.staggerTo('#logo path', 1, {delay:1,onStart:showThis, onStartParams:['#logo path'], strokeDashoffset: 0 , ease:Power1.easeInOut},0.2),
  ])
  .add([TweenMax.to("#logo path", .01, {fill: "#0d3d4a"})])
  .add([TweenMax.to("#logo path.tex, #logo rect, #logo polygon", .1, {fill: "#fff"})])
  .add([TweenMax.to("#logo path#omg", .4, {fill: "#00A099"})])
  .add([TweenMax.to("#logo path#ex", .2, {fill: "#00A099"})])
  .add([TweenMax.to("#logo path#cir", .1, {fill: "#F29100"})])
  .call(function(){$('body').addClass('loaded');$('body').removeClass('hide-overflow');})
  .call(function(){
    var $caption = $(".intro .caption"),
    mySplitText = new SplitText($caption, {type:"words"}),
    splitTextTimeline = new TimelineLite();
    mySplitText.split({type:"lines"}) 
    splitTextTimeline.staggerFrom(mySplitText.lines, 0.5, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -150"}, 0.1);
  });
  
  //Path Animation
  var controller = new ScrollMagic.Controller();
  var sectionBgPanning = new TimelineMax();
  sectionBgPanning
  .add([
    TweenMax.fromTo(".panning-bg .img-container", 1, {css: {left: 0}}, {css:{left: '-'+maxLeft}})
  ]);
  
  var sectionPathTween = new TimelineMax({delay:8});
    sectionPathTween
    .call(function(){$('body').addClass('story-started'); $('body').toggleClass('blue-bg');})
    .to('#draw_path path#p1', 8, {onStart:showThis, onStartParams:['path#p1'], strokeDashoffset: 0, ease:Linear.easeNone})
    .to('#draw_path path#p2', 5, {onStart:showThis, onStartParams:['path#p2'], strokeDashoffset: 0, ease:Linear.easeNone, delay:1.5})
    .to('#draw_path path#p2-arrow', .3, {onStart:showThis, onStartParams:['path#p2-arrow'], strokeDashoffset: 0, ease:Linear.easeNone})
    .call(function(){$('body').toggleClass('blue-bg');$('body').toggleClass('orange-bg');})
    .to('#draw_path path#p3', 6, { onStart:showThis, onStartParams:['path#p3'],strokeDashoffset: 0, ease:Linear.easeNone, delay:1.5})
    .to('#draw_path path#p3-arrow', .3, {onStart:showThis, onStartParams:['path#p2-arrow'], strokeDashoffset: 0, ease:Linear.easeNone})
    .to('#draw_path path#p4', 6, {onStart:showThis, onStartParams:['path#p4'], strokeDashoffset: 0, ease:Linear.easeNone, delay:1.5})
    .to('#draw_path path#p4-arrow', .3, {onStart:showThis, onStartParams:['path#p4-arrow'], strokeDashoffset: 0, ease:Linear.easeNone})
    .to('#draw_path path#p5', 5, {onStart:showThis, onStartParams:['path#p5'], strokeDashoffset: 0, ease:Linear.easeNone, delay:1.5})
    .to('#draw_path path#p5-arrow', .3, {onStart:showThis, onStartParams:['path#p5-arrow'], strokeDashoffset: 0, ease:Linear.easeNone})
    .call(function(){$('body').toggleClass('magenta');$('body').toggleClass('orange-bg');})
    .to('#draw_path path#p6', 5, {onStart:showThis, onStartParams:['path#p6'], strokeDashoffset: 0, ease:Linear.easeNone, delay:1.5})
    .to('#draw_path path#p6-arrow', .3, {onStart:showThis, onStartParams:['path#p6-arrow'], strokeDashoffset: 0, ease:Linear.easeNone})
    .to('#draw_path path#p7', 5, {onStart:showThis, onStartParams:['path#p7'], strokeDashoffset: 0, ease:Linear.easeNone, delay:1.5})
    .to('#draw_path path#p7-arrow', .3, {onStart:showThis, onStartParams:['path#p7-arrow'], strokeDashoffset: 0, ease:Linear.easeNone})
    .to('#draw_path path#p8', 14, {onStart:showThis, onStartParams:['path#p8'], strokeDashoffset: 0, ease:Linear.easeNone, delay:1.5})
    .call(function(){$('body').toggleClass('magenta');})
    .to('#draw_path path#p8-arrow', .3, {onStart:showThis, onStartParams:['path#p8-arrow'], strokeDashoffset: 0, ease:Linear.easeNone});
    
    var servicesTween = new TimelineMax({delay:6});
      servicesTween.add([
        TweenMax.fromTo('.who-we-are-img', 12, {x:-450,rotation: -80},{x:0,rotation:0, ease:Power1.easeInOut}),
        TweenMax.fromTo('.who-we-are .column-right', 12, {x:450},{x:0, ease:Power1.easeInOut})
      ])
      .add([
        TweenMax.fromTo('.section.services .section-title', 6, {x:-450},{x:0, ease:Power1.easeInOut}),
        TweenMax.fromTo('.service-item.marketing-consult', 6, {x:250,rotation: -60},{x:0,rotation:0, ease:Power1.easeInOut, delay: 1})
      ])
      .add([TweenMax.fromTo('.service-item.events', 8, {x:-250,rotation: -160},{x:0,rotation:0, ease:Power1.easeInOut, delay:1})])
      .add([TweenMax.fromTo('.service-item.creative-design', 5, {x:-250,rotation: -160},{x:0,rotation:0, ease:Power1.easeInOut, delay:1})])
      .add([TweenMax.fromTo('.service-item.digital-marketing', 6, {x:250,rotation: -160},{x:0,rotation:0, ease:Power1.easeInOut, delay:1})])
      .add([TweenMax.fromTo('.service-item.production', 5, {x:-250,rotation: -160},{x:0,rotation:0, ease:Power1.easeInOut, delay:1})])
      .add([TweenMax.fromTo('.service-item.pr', 5, {x:350,rotation: 60},{x:0,rotation:0, ease:Power1.easeInOut, delay:1})]);
    
    var sectionPath = new TimelineMax()
    .add([
      sectionPathTween,
      servicesTween
    ]);
    
    
    new ScrollMagic.Scene({
      triggerElement: ".storyboard",
      triggerHook: "onEnter",
      duration : "3350px"
    })
    .setTween(sectionPath)
    .addTo(controller);
    
    new ScrollMagic.Scene({
      triggerElement: ".panning-bg-trigger",
      triggerHook: "onEnter",
      duration : "3500px"
    })
    .setTween(sectionBgPanning)
    .addTo(controller);
    
    
  //Animate Exclamation Symbol
  $("body").bind("mousemove", function(event){
    MouseMove(event);
  });
  function MouseMove(e){
    var posY=e.pageY + 15;
    var posX=e.pageX + 10;
    $('#exclamation').stop().animate({top:posY ,left:posX}, 2000, "easeOutCirc");
    $('#exclamation2').stop().animate({top:posY ,left:posX}, 2400, "easeOutCirc");
    $('#exclamation3').stop().animate({top:posY ,left:posX}, 2700, "easeOutCirc");
  }
});

function showThis(div){
  $(document).find(div).css('visibility', 'visible');
}

function pathPrepare ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}
})(jQuery);
/* End of SVG Animation */

