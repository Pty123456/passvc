function get_ajax(ajax_url,ajax_param,callback){
	$.ajax({
	  	type: 'GET',
		url: ajax_url,
		async: false, 
		dataType: "json",
		contentType: "application/json",
        data: ajax_param,
		success: function (data) {
		    callback(data);
		}
				
	});
}

function post_ajax(ajax_url,ajax_param,callback){
	$.ajax({
	  	type: 'GET',
		url: post_ajax,
		async: false, 
		dataType: "json",
		contentType: "application/json",
        data: ajax_param,
		success: function (data) {
		    callback(data);
		}
	});
}

function submit_form_bind_event(){
	$("input[allowSubmit=true]").bind("click",function(){
		var submitType = $(this).attr("submitType");
		var url = $(this).attr("urlName");
		var formId =  $(this).attr("formId");
		if(submitType == 1){
			get_ajax(common_url[url],$("#"+formId).serializeArray(),function(data){alert(data);});
		}
		
	});
}

$(function(){
	submit_form_bind_event();
});
