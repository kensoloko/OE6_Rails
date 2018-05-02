$(document).ready(function(){
  $(function() {
    var menu_ul = $('.menu_drop > li > ul'),
    menu_a  = $('.menu_drop > li > a');
    menu_ul.hide();
    menu_a.click(function(e) {
      e.preventDefault();
      if(!$(this).hasClass('active')) {
        menu_a.removeClass('active');
        menu_ul.filter(':visible').slideUp('normal');
        $(this).addClass('active').next().stop(true,true).slideDown('normal');
      } else {
        $(this).removeClass('active');
        $(this).next().stop(true,true).slideUp('normal');
      }
    });
  });


  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10);

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
    draw();
  });
  draw();
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var id = $(this).data('user');
    if(id){
      var onStar = parseInt($(this).data('value')); // The star currently selected
      var stars = $(this).parent().children('li.star');
      var product_id = parseInt($('#pid').html());

      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('selected');
      }

      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass('selected');
      }

      $.ajax({
        method: "GET",
        url: '/rate/' + product_id + '/' + onStar,
        data: {},
        dataType: 'html'
      }).done(function(html){
        if(html != "false")
        {
          html = parseFloat(Math.round(html * 100) / 100).toFixed(1);
          $('#averate').html(html);
        } else {
          swal("Alert!", "You have marked rating!", "error");
        }
      });
    } else {
      swal("Alert!", "Please login to rating!", "info");
    }
  });
});

function draw(){
  var averate = Math.round(parseFloat($('#averate').html()));
  for (i = 0; i < averate; i++)
  {
    $('li.star:eq('+i+')').addClass('hover');
  }
}
;