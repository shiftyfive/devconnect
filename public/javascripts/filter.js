function sortUsers (element) {
$('#location, #stack').removeClass('')
$('.pets, .boat, .people').addClass('product-hidden')
$('.sale').removeClass('product-hidden')
};

$('#location').on('click', sortUsers)
$('#stack').on('click', sortUsers)
