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
  var categoryLimit = 4,
      ageLimit = 3,
      ageOrder = [];
  
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
    if ( $('.chip').length > categoryLimit ) {
      $('.chip')[4].remove();
    }
  });
  
  $("input[name='age']").on('change', function(e) {
    // 3개까지만
    if ($("input[name='age']:checked").length > ageLimit) {
      this.checked = false;
    }
    // 순서저장
    if (this.checked) {
      ageOrder.push(this.id);
    }
    else {
      for (var i = 0; i < ageOrder.length; i++) {
        if (ageOrder[i] == this.id) {
            ageOrder.splice(i, 1);
        }
      }
    }
    // clear labels
    $("input[name='age']").siblings("label").each(function (i, elem) {
      elem.classList.remove("first", "second", "third");
    });
    // update labels
    for (var i = 0; i < ageOrder.length; i++) {
      console.log(ageOrder);
      if (i == 0) {
        $("#lb-"+ageOrder[i]).addClass("first");
      }
      if (i == 1) {
        $("#lb-"+ageOrder[i]).addClass("second");
      }
      if (i == 2) {
        $("#lb-"+ageOrder[i]).addClass("third");
      }
    }
    // 순서 저장 보내기 -> 서버사이드
  });
});

/*
 * scroll effect
 */
new WOW().init();


