// Mobile
$(".button-collapse").sideNav();

// 나의 브이로그 프로필 
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