// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
  
// ambil isi navbar
var tujuan = $(this).attr('href');
// tangkap element yg bersangkutan
var elementTujuan = $(tujuan);
// pindahkan scroll 
$('html,body').animate({
      scrollTop: elementTujuan.offset().top-50

});

    e.preventDefault();
});