$(document).ready(function () {
  $('#pie_progress01').asPieProgress({
    namespace: 'pie_progress',
    barcolor: '#85D100',
    trackcolor: '#fff',
    fillcolor: '#F9FFF4',
  });

  $('#pie_progress02').asPieProgress({
    namespace: 'pie_progress',
    barcolor: '#FFBD6A',
    trackcolor: '#fff',
    fillcolor: '#FDF9F4',
  });

  $('#pie_progress03').asPieProgress({
    namespace: 'pie_progress',
    barcolor: '#98A9BC',
    trackcolor: '#E8ECEF',
    fillcolor: '#FEFEFE',
  });
  $(".pie_progress").asPieProgress('start');
});
