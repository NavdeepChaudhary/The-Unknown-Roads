let slideIndex = 0
let terrIndex = 0;

function nextSlide() {
  slideIndex = (slideIndex + 1) % $('.slide').length
  $('.slide').removeClass('active').eq(slideIndex).addClass('active');
}

function previousSlide() {
  slideIndex = (slideIndex - 1 + $('.slide').length) % $('.slide').length;
  $('.slide').removeClass('active').eq(slideIndex).addClass('active');
}

function nextTerr() {
  terrIndex = (terrIndex + 1) % $('.terr').length;
  $('.terr').removeClass('active').eq(terrIndex).addClass('active');
}

function previousTerr() {
  terrIndex = (terrIndex - 1 + $('.terr').length) % $('.terr').length;
  $('.terr').removeClass('active').eq(terrIndex).addClass('active');
}
