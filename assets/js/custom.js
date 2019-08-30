// JavaScript Document
$(function () {
  $(document).scroll(function () {
    var $nav = $("header.template-1");
    $nav.toggleClass('scroll bg-dark', $(this).scrollTop() > $nav.height());
  });
});

$( ".navbar-toggler" ).click(function() {
  $( "header" ).addClass('bg-dark');
});