console.log('welcome to handlebars', $.fn.jquery, Handlebars)
$(document).ready(function (){

//you cant have semi colons inside objects!!!

var template_str = $('#post_template').html();//Fetch the html
var template_f = Handlebars.compile(template_str);//turn it into a template function

var getPosts = function () {

$.ajax ({
  url: 'posts.json',
  datatype: 'JSON'

}).done(function (results) {
  $.each(results), function (i, post) {
    $posts.prepend(template_f(post));
    });
  };
});

getPosts();

Handlebars.registerHelper('fullname', function (first, last){
  return '<span class="first">'+first+'</span> <span class ="last">'+last+'</span>';
  });

Handlebars.registerHelper('priceWithGST', function (price)
{
  var GSTprice = price * 1.1;
  return GSTprice.toFixed(2);
});

var $window = $(window) // turns the method into a jquery object, making more efficient use of the cache/processor;

$window.scroll(function () {
  if ($window.height() + $window.scrollTop() >= $(document).height()) {
    console.log('GET MORE DATA');
  }
    )

console.log('the window scrolled');

}

  )
var $posts = $('#posts');

$.each(posts, function (i, e){
  $('#posts').prepend(template_f(e));
});

});