var posts = $('.post');

$('#category ul li a, #second-category ul li a').click(function(){
    var getCat = $(this).data('filter');
    console.log(getCat);
    console.log(posts.length);

    posts.hide().filter(function(){
        return $(this).data('cat') === getCat;


    })

    .show();


})
// $('#category ul li a, #second-category ul li a').click(function(){
//     $
// })


// var options = {
//     valueNames: ['name']
// };

// var userList = new List('users', options);


// $(function(){
//     $.filtrify("link-id", "category");
// })