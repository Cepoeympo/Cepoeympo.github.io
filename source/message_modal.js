/*
 $('#messageBody').on('input', function () {
 // почитать скпины про хайд-блок fadeIn, Show, animate...
 $('.g-recaptcha').fadeIn(1000);
 //$('.g-recaptcha').css('display', 'block');
 });


 function captchaIsRight() {
 $('#sendLetter').removeClass('disabled');
 }
 */
jQuery(function () {
	$('#phoneModal').mask('+7 (999) 999-99-99');
});

$('#message_modal').on('shown.bs.modal', function () {
	$('#inputName').focus();
});

$(document).ready(function() {
	$('#message_form').bootstrapValidator({
			framework: 'bootstrap',

			// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: {
				inputName: {
					validators: {
						regexp: {
							regexp: /^[А-Яа-яЁё\s]+$/,
							message: 'Только кириллица. Только хардкор.'
						},
						stringLength: {
							max: 90,
							message: 'Чуть-чуть покороче, будьте добры'
						},
						notEmpty: {
							message: 'Хорошо бы ввести здесь имя'
						}
					}
				},/*
				phoneModal: {
					validators: {
						notEmpty: {
							message: 'А здесь должен быть Ваш телефон'
						}
					}
				},*/
				messageBody: {
					validators: {
						stringLength: {
							min: 20,
							max: 500,
							message: 'Осталось ввести что-то больше 20, но меньше 500 символов'
						},
						notEmpty: {
							message: 'Не обделите и это поле своим вниманием'
						}
					}
				}
			}
		});
		/*
		.on('success.form.bv', function(e) {
			$('#success_message').slideDown({
				opacity: "show"
			}, "slow"); // Do something ...
			$('#contact_form').data('bootstrapValidator').resetForm();
			// Prevent form submission
			e.preventDefault();
			// Get the form instance
			var $form = $(e.target);
			// Get the BootstrapValidator instance
			var bv = $form.data('bootstrapValidator');
			// Use Ajax to submit form data
			$.post($form.attr('action'), $form.serialize(), function(result) {
				console.log(result);
			}, 'json');
		});
		*/
});