//$("#s2id_autogen1").val("myfilter");
//$("#s2id_autogen1").trigger("focus");
var members = $(".group_member .cgray").map(function() {
                 return $(this).text();
              }).get();

var users = $('.select2-results .user-username');
$.each(users, function(index, user) {    
    if ( (jQuery.inArray(user.textContent,members) != -1) ) {
        console.log(user.textContent + ": user in group, removing.");
        $(user).parent().parent().css("display","none");
    }
});