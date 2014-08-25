$(document).ready(function(){

	$("#button").click (function(){

		if(!$.trim($('#comment-body').val())){
			$( "#basicModal-3" ).dialog({
	        modal: true,
	        title: "Shopping List Message",
	        height: 200,
	        width: 300
         });
		} 
		else {
			var add = $("#comment-body").val();
			$(".comments").append("<li><label>" + add +"</label></li>");
			$('ol li').not(':has(".checkbox")').prepend(
				'<input type="checkbox" class="checkbox" value="1" />');
			$('ol li').not(':has(".delete-button")').append(
				 '<button class="delete-button" type="button" name="delete" >delete</button'
				 );
			$('.comments li button').attr('id', function(i) {
	   			return 'btn'+(i+1);
			});
			$('.comments li').attr('id', function(i) {
	   			return 'li'+(i+1);
			});
			$("input[type=text]").val("");
			 var n = $( "li" ).length;
            $( ".total" ).text(n);
            $( "input[type=checkbox]" ).on( "click", countChecked );

		}
    });

    $(document).keypress(function(e){   
         
    	if(e.which == 13){     
	   		e.preventDefault();
	   		$("#button").click ();
	   };
    }); 

	// $(".comments").on("click", ".delete-button", function(e){
	// 	if (confirm("Are you sure you want to delete this item?")){
	// 		$(this).parent().remove()};
	// 	e.preventDefault();
		
	// });
   
   // $("#empty").click (function(){
   // 		if (confirm("Are you sure you want to delete all?")){
   		// $( "ol li" ).empty();
   		// $( "ol" ).empty();
   // 		};
   // 	 });

			  


   $(function() {
   	   $("ol.comments").sortable();
   	         if ($("onoffswitch-checkbox").hasClass("active")) {
			  	$("ol.comments").sortable("enable");		  	
			  } 
			  else {
			  	$("ol.comments").sortable("disable");	
			  }

			$(".onoffswitch").on("click", ".onoffswitch-checkbox", function  (e) {
			  if ($(this).hasClass("active")) {
			  	$(this).removeClass("active");
			  	$("ol.comments").sortable("disable");
			  	
			  } else {
			  	$(this).addClass("active");
			  	$("ol.comments").sortable("enable");
			  	
			  }
			});
			// $(".onoffswitch").on("click", ".onoffswitch-checkbox", function  (e) {
			//   var method = $(this).hasClass("active") ? "enable" : "disable"
			//   $(this).removeClass("active")
			//   $(e.delegateTarget).next().sortable(method)
			// })
   	});

   // show the dialog on click of a button
			$( "#empty").click(function(){
			 
			    /* select the div you want to be a dialog, in our case it is 'basicModal'
			    you can add parameters such as width, height, title, etc. */
			    $( "#basicModal" ).dialog({
			        modal: true,
			        title: "Are you sure?",
			        buttons: {
			            "YES": function() {
			                $( "ol li" ).empty();
   							$( "ol" ).empty();
   							$( this ).dialog( "close" );
   							var n = $( "li" ).length;
            				$( ".total" ).text(n);
			            },
			            "NO": function() {
			                $( this ).dialog( "close" );
			            }
			        }
			    });
			     
			});

			$(".comments").on("click", ".delete-button", function(e){
			 var obj = $(this).parent();
			    /* select the div you want to be a dialog, in our case it is 'basicModal'
			    you can add parameters such as width, height, title, etc. */
			    $( "#basicModal-2" ).dialog({
			        modal: true,
			        title: "Are you sure?",
			        buttons: {
			            "YES": function() {
						obj.remove();
						e.preventDefault();
						$( this ).dialog( "close" );
						var n = $( "li" ).length;
            			$( ".total" ).text(n);
			            },
			            "NO": function() {
			                $( this ).dialog( "close" );
			            }
			        }
			    });
			     
			});

	
    var n = $( "li" ).length;
    $( ".total" ).text(n);

    var count = $('.comments :checkbox:checked').length;
    $(".checked").text(count);

    var countChecked = function() {
	  // var n = $( "input:checked" ).length;
	  // $(".checked" ).text( n );
	      var count = $('.comments :checkbox:checked').length;
    　　　$(".checked").text(count);
	};
	countChecked();
	 
	$( "input[type=checkbox]" ).on( "click", countChecked );
    



});

