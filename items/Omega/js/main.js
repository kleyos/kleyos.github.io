function submitCall(event)
	{

		var target = $(event.target),
			form   = target.parents('form'),
			form_xy = $(form).offset(),
			validForm = true;

		$(form).find('input').each(function(i,item) 

			{	
				var formGroup = $(item).parents('.form-group');
					
				if (!item.checkValidity()) 
					
					{
						validForm = false;
						formGroup.addClass('has-error')
						setTimeout(function()
							{
								formGroup.removeClass('has-error')

							},5000);
					}
			});
				
				if  (validForm){
						var data_form = $(form).serialize();
							debugger
						$.ajax(
							{	
								type: "POST",
								url: event.data.name,
								data: data_form,
								success: function(msg)
									{	
										//$('#modal_window').modal('hide');
										$('.modal').modal('hide');
										$('#success-alert').removeClass('hidden').offset(
											{
												top:  form_xy.top,
												left: form_xy.left
											});
										setTimeout(function()
											{
												$('#success-alert').addClass('hidden')

											},3000);
										$(':input').val('');
									},
								error: function(msg)
									{
										$('#danger-alert').removeClass('hidden');
										setTimeout(function()
											{
												$('#danger-alert').addClass('hidden').offset(
											{
												top:  form_xy.top,
												left: form_xy.left
											});

											},3000);	
									}
							});
					}
				
	}

$(function() {

	var $owl 			= $("#owl"),
     	$nav 			= $('.nvgt'),
    	$next 			= $('#next'),
     	$prev 			= $('#prev'),
     	$tab 			= $('.menu--serv .menu__item'),
		$tabs 			= $('.tabs'),
		$video 			= $('#video'),
		$trustImg 		= $('.trust__img'),
		$btnShowModalPhone 	= $('.show-modal-phone'),
		$btnShowModalMail 	= $('.show-modal-mail'),
		$btnOffer		= $('.btn__offer'),
		$btnSendContact = $('.send-contact'),
		$btnSendEmail = $('.send-email'),
		$navHeight		= $('#navmenu').height(),
		$header			= $('#main'),
		$screenHeight	= $(window).height(),
		$blockLogo		= $('.logos'),
		$blockPhone		= $('.phone');


//Slider main window
$owl.owlCarousel(
	{
  		items :     1,
        singleItem:true,
  		loop:       true,
  		pagination: false,
        autoPlay: true,
        stopOnHover:true
  	});
  
  $next.on('click', function(){
	  	$owl.trigger('owl.next');
   	});
  
  $prev.on('click', function(){
  		$owl.trigger('owl.prev');
  	});

//get header Height
	$header.height($screenHeight-($navHeight+40));
	
	$blockLogo.css({
					'marginTop':($header.height()*0.02)+'px',
					'marginBottom':($header.height()*0.1)+'px'
					});
	

//Video Player 
	$video.YTPlayer();

//equalHeights
	$trustImg.equalHeights();

//Services tabs.js
	$tab.on('click', function(e){
	  
	    event.preventDefault();

	});

	$tabs.lightTabs(
	    {
	      selector: $tab,
	      paragraph: '.serv'
	    }
	  );
	
//Click button about job and information
	$btnShowModalPhone.on('click', function()
		{
			$('#modal_window_phone').modal();
		});
	$btnShowModalMail.on('click', function()
		{
			$('#modal_window_mail').modal();
		});

	
//sending form using Ajax
	$btnSendContact.on('click', {name:"backCallMail.php"}, submitCall);
	$btnSendEmail.on('click', {name:"sendPresentation.php"}, submitCall);


});