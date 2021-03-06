;(function($){

  var btnMenu = $('.btn-menu'),
      menu = $('.menu'),
      containerProjects = $('.projects-container'),
      containerDifference = $('.difference-container'),
      tabsBenefits = $('.benefits-tabs'),
      benefitsContainer = $('.benefits-container');



  btnMenu.on('click', function(){

      menu.toggle();


  });

  $('<h1 class="txt-center">Other Projects</h1>').insertAfter('.project');


  // MENU HOVER FUNCTION (SUBMENU)

  menu.find(".parent").hoverIntent({
      over: function() {
            $(this).find(">.nav-child").slideDown(200 );
          },
      out:  function() {
            $(this).find(">.nav-child").slideUp(200);
          },
      timeout: 200

       });



   var resizeTimer = null;
   var resizeTimer2 = null;

   $(window).bind('load resize', function() {
     if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(portafolio_init('300',containerProjects), 100);
    
    if (resizeTimer2) clearTimeout(resizeTimer2);
        resizeTimer2 = setTimeout(portafolio_init('300',containerDifference), 100);
     
     //$('.main').height(getWindowHeight()-70-50-$('.header').height());

   });

   //containerDifference.find('.projects-item').removeClass('expanded');
   //containerDifference.find('.projects-item .projects-description').removeClass('expanded');
   containerDifference.find('.projects-item div.projects-link').on('click', function (e) {
      //console.log($(this).parent('.projects-item'));
      var self = $(this).parent('.projects-item');
      
      
      portafolio_click('300',containerDifference, self);
      
      containerDifference.find('.projects-item').removeClass('expanded');
      containerDifference.find('.projects-item .projects-description').removeClass('expanded');
      self.addClass('expanded').find('.projects-description').addClass('expanded');
      if($(window).width() < 480)
      {
          var newHeightMovil = self.find('.projects-description').height()+100;

          containerDifference.find('.projects-item').css('height', 'auto');
          containerDifference.find('.projects-item .projects-image').css('height','auto');

          if(newHeightMovil > 240)
          {  
              self.height(newHeightMovil);
              self.find('.projects-image').height(newHeightMovil);
          }
         
          
      }
      //containerDifference.isotope('updateSortData').isotope();
      //e.preventDefault();
     
   });


    containerProjects.find('.projects-item').css({opacity: 0});
    containerProjects.imagesLoaded( function(){
        containerProjects.find('.projects-item').css({opacity: 1});
        containerProjects.isotope({
          itemSelector : '.projects-item',
          layoutMode: 'masonry',
          sortBy: 'order',
          sortAscending: true,
          getSortData: {
            order: function($elem){
              var _order = $elem.hasClass('projects-item') ?
                $elem.attr('data-order'):
                $elem.find('.order').text();
              return parseInt(_order);
            }
          }
        });

        portafolio_init('300', containerProjects);
    });
    containerDifference.find('.projects-item').css({opacity: 0});
    containerDifference.imagesLoaded( function(){
        containerDifference.find('.projects-item').css({opacity: 1});
        containerDifference.isotope({
          itemSelector : '.projects-item',
          layoutMode: 'masonry',
          sortBy: 'order',
          sortAscending: true,
          getSortData: {
            order: function($elem){
              var _order = $elem.hasClass('projects-item') ?
                $elem.attr('data-order'):
                $elem.find('.order').text();
              return parseInt(_order);
            }
          }
        });

        portafolio_init('300', containerDifference);
    });

    function portafolio_init(defaultwidth, container){

      var contentWidth    = container.width();
      var columnWidth     = defaultwidth;
      var curColCount     = 0;
      var maxColCount     = 0;
      var newColCount     = 0;
      var newColWidth     = 0;
      var featureColWidth = 0;
      var featureColWidth3 = 0;
      var featureColWidth4 = 0;

      curColCount = Math.floor(contentWidth / columnWidth);

      maxColCount = curColCount + 1;
      if((maxColCount - (contentWidth / columnWidth)) > ((contentWidth / columnWidth) - curColCount)){
        newColCount     = curColCount;
      }
      else{
        newColCount = maxColCount;
      }

      newColWidth = contentWidth;
      featureColWidth = contentWidth;
      featureColWidth3 = contentWidth;
      featureColWidt4 = contentWidth;


      if(newColCount > 1){
        newColWidth =Math.floor(contentWidth / newColCount);
        featureColWidth = newColWidth * 2;
        featureColWidth3 = newColWidth * 3;
        featureColWidth4 = newColWidth * 4;
      }

      container.find('.projects-item').width(newColWidth);

      container.find('.featured').width(featureColWidth);
      container.find('.featured-3').width(featureColWidth3);
      container.find('.featured-4').width(featureColWidth4);

      container.imagesLoaded(function(){
        container.isotope({
          masonry:{
            columnWidth: newColWidth
          }
        });

      });

      //ResizeImageContainer($('.projects-item'));
      //ResizeImageContainer($('.product-image'));
    }
    function portafolio_click(defaultwidth, container, itemClicked){

      var contentWidth    = container.width();
      var columnWidth     = defaultwidth;
      var curColCount     = 0;
      var maxColCount     = 0;
      var newColCount     = 0;
      var newColWidth     = 0;
      var featureColWidth = 0;
      var featureColWidth3 = 0;
      var featureColWidth4 = 0;

      curColCount = Math.floor(contentWidth / columnWidth);

      maxColCount = curColCount + 1;
      if((maxColCount - (contentWidth / columnWidth)) > ((contentWidth / columnWidth) - curColCount)){
        newColCount     = curColCount;
      }
      else{
        newColCount = maxColCount;
      }

      newColWidth = contentWidth;
      featureColWidth = contentWidth;
      featureColWidth3 = contentWidth;
      featureColWidth4 = contentWidth;


      if(newColCount > 1){
        newColWidth =Math.floor(contentWidth / newColCount);
        featureColWidth = newColWidth * 2;
        featureColWidth2 = newColWidth * 3;
        featureColWidth3 = newColWidth * 3;
        featureColWidth4 = newColWidth * 4;
      }

      container.find('.projects-item').width(newColWidth);

      
      if(itemClicked.hasClass('featured2'))
        itemClicked.width(featureColWidth2);
      else
        itemClicked.width(featureColWidth);
    

      container.imagesLoaded(function(){
        container.isotope({
          masonry:{
            columnWidth: newColWidth,
            
          }
        });

      });

      //ResizeImageContainer($('.projects-item'));
      //ResizeImageContainer($('.product-image'));
    }


    

    //GALLERY PROJECT

    $('.project-gallery-item').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });


    $('.project-gallery').imagesLoaded(function(){
      //create thumbs and append them
       var thumbnails=$(".thumbnails");
       var wrapper_wt=thumbnails.find("img:first").width();
       var count = thumbnails.find("img").length;
       var width_thumbnails = count * wrapper_wt;
      
        if (thumbnails.length)
        {  
          thumbnails.css({width:width_thumbnails+ "px"});
          thumbnailsScroller($('.project-gallery').find('.thumbnails-wrapper'));
        }
    });




    var thumbnailsScroller = function(elem){

          var wrapper =	elem;

          var thumbnails	= wrapper.find('.thumbnails');
          var inactiveMargin = thumbnails.find("img:first").width();
          //wrapper.scrollLeft(thumbnails.outerWidth());
          wrapper.bind('mousemove',function(e){

                  var wrapperWidth = wrapper.width();
                  var menuWidth = thumbnails.outerWidth() + 2 * inactiveMargin;
                  var left = (e.pageX - wrapper.offset().left) * (menuWidth - wrapperWidth) / wrapperWidth - inactiveMargin;

                  wrapper.scrollLeft(left);
          });
    };


    benefitsContainer.find('[data-benefit]').first().addClass('is-visible');
    tabsBenefits.find('li').on('click', function (e) {
      var $this = $(this);
      tabsBenefits.find('li').removeClass('active');
      $this.toggleClass('active');

      benefitsContainer.find('[data-benefit]').removeClass('is-visible');

      benefitsContainer.find('[data-benefit='+ $this.data('benefit')+ ']' ).addClass('is-visible');
      
    });


// about team

  $('[data-teamtoggle]').on('click', function (e) {

     
         //$('[data-teamdescription]').removeClass('is-visible');
         $(this).toggleClass('is-visible').prev().toggleClass('is-visible');
      
     
        

      e.preventDefault();
    
  });

// eliminar el el primer label del contact form
$('.b2j_form').find('div label').first().css( "display", "none");









})(jQuery);
