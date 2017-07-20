$(function() {

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