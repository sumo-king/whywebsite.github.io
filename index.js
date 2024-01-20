
$(document).ready(function() {

    let project = '';
    $.getJSON('projects.json', function (data) {
        $.each(data, function(key, value) {

            project ='<div class="">'+
                '<img src=""></img>'+
                '</div>'
        });
    });
});