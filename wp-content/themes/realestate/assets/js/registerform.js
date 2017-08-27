function getDistrict(province_id){
    $("#frontprofile-district_id").html("<option value=''>Quận/Huyện</option>");
    var defaultValue = $("#frontprofile-district_id").data("value");
	if(province_id!=""){
		$("#frontprofile-district_id").html("<option value=''>Loading...</option>").prop('disabled', true);
		$.ajax({
            'url':ajaxUrl+"/get-district",
            'type':'get',
            'data': {'province':province_id},
            success:function(data){
                if(data.status==1){
                	//console.log(data);
                    $("#frontprofile-district_id").html("<option value=''>Quận/Huyện</option>");
                    $.each(data.data, function(index, val) {
                        $("#frontprofile-district_id").append("<option value='"+val.id+"' "+(defaultValue==val.id?"selected":"")+">"+val.name+"</option>");
                    });
                    getWard($("#frontprofile-district_id").val());
                }
            },
            error:function(msg){
                $("#frontprofile-district_id").html("<option value=''>Quận/Huyện</option>");
            },
            complete:function(){
                $("#frontprofile-district_id").prop('disabled', false);
            }
        });
	}
}

function getWard(district_id){
    $("#frontprofile-ward_id").html("<option value=''>Phường/Xã</option>");
    var defaultValue = $("#frontprofile-ward_id").data("value");
    if(district_id!=""){
        $("#frontprofile-ward_id").html("<option value=''>Loading...</option>").prop('disabled', true);
        $.ajax({
            'url':ajaxUrl+"/get-ward",
            'type':'get',
            'data': {'district':district_id},
            success:function(data){
                if(data.status==1){
                    console.log(data);
                    $("#frontprofile-ward_id").html("<option value=''>Phường/Xã</option>");
                    $.each(data.data, function(index, val) {
                        $("#frontprofile-ward_id").append("<option value='"+val.id+"' "+(defaultValue==val.id?"selected":"")+">"+val.name+"</option>");
                    });
                }
            },
            error:function(msg){
                $("#frontprofile-ward_id").html("<option value=''>Phường/Xã</option>");
            },
            complete:function(){
                $("#frontprofile-ward_id").prop('disabled', false);
            }
        });
    }
}
jQuery(document).ready(function($){
	$("#frontprofile-province_id").change(function(event) {
		getDistrict($(this).val());
	});

    if($("#frontprofile-province_id").val() !="" ){
        getDistrict($("#frontprofile-province_id").val());
    }
    $("#frontprofile-district_id").change(function(event) {
        getWard($(this).val());
    });
    
});