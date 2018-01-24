/*
 * Global
 */

// Mobile
$(".button-collapse").sideNav();

/*
 * 나의 브이로그 프로필 
 */

$(document).ready(function(){
  // Pie Chart
  (function() {
    $('.pie').find('.bar').each(function(i) {
      var bar, c, percent, r, t;
      r = $(this).attr('r');
      c = Math.PI * (r * 2);
      percent = $(this).parent().data('percent');
      bar = ((100 - percent) / 100) * c;
      t = percent * 25;
      $(this).css({
        'stroke-dashoffset': c,
        'stroke-dasharray': c
      });
      $(this).delay(500).animate({
        strokeDashoffset: bar
      }, t, 'linear');
    });
  }).call(this);

  // Autocomplete
  $('.chips').material_chip();
  $('.chips-autocomplete').material_chip({
    placeholder: '예: 뷰티',
    secondaryPlaceholder: '최대 4개 가능',
    autocompleteOptions: {
      data: {
        '뷰티': null,
        '음식탐방': null,
        '직장라이프': null,
        '학교생활': null,
        '패션': null,
        '메이커': null,
        '공부': null
      },
      limit: 4,
      minLength: 0
    }
  });
  
  $("#category .input").on( "keyup", function() {
    if ( $('.chip').length > 4 ) {
      $('.chip')[4].remove();
    }
  });
  
});

/*
 *
 */
  var options = [
    {selector: '.section', offset: 200, callback: function(el) {
      Materialize.fadeInImage($(el));
    }}
  ];
  Materialize.scrollFire(options);


