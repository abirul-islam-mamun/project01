//menu right (heart) Active 

$('.heart-icon i').on('click',function(){
    $(this).toggleClass('color-change')
})



//pagination active

$('.pagination-list a').on('click',function(){
    $('.pagination-list a').removeClass('active');
    $(this).addClass('active')
})

//links active
$('.blog-links li').on('click',function(){
    $('.blog-links li').removeClass('links-active');
    $(this).addClass('links-active')
})
