$(function() {

// animatecss
//waypoints official site http://imakewebthings.com/waypoints/
$("section h2").animated("zoomInUp") /*Используется в качестве примера*/
// -end  animatecss

// OwlCarousel
// documentation https://github.com/OwlCarousel2/OwlCarousel2
$('.owl-carousel').owlCarousel();
// -end OwlCarousel

// ajax form
// Обязательно присутствует вместе с "mail.php"
$("form.callback").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		alert("Thank you!");
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	});
	return false;
});
// -end ajax form

// validate form
// documentation https://jqueryvalidation.org/documentation
$("#commentForm").validate();
// -end validate form

});