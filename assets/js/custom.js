// JavaScript Document
$(function () {
  $(document).scroll(function () {
    var $nav = $("header");
    var $navTemplate1 = $("header.template-1");
    $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
    $navTemplate1.toggleClass('bg-dark', $(this).scrollTop() > $nav.height());
  });
});

$( ".navbar-toggler" ).click(function() {
  $( "header.template-1" ).addClass('bg-dark');
});



$('.user-editable-text').click(function(){
	// fill the modal box text area content with current text 
	var userContent = $(this).html();
	$('#modalUserEdit').find('.user-editable-text-current').val(userContent);
	// open the modal box
	$('#modalUserEdit').modal('show');
	
});

