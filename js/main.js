$(function () {
  console.log('test');
  $.ajax({
    url: '/camelize',
    data: {
     str: 'nudge-pad-sandbox-for-cat' 
    }
  }).done(function (data) {
    $('.starter-template h1').append('('+data.str+')');
  });
});