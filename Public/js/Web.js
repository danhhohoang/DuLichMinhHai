const images = document.querySelectorAll('.slideshow-image');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

// Thiết lập hiển thị ảnh đầu tiên
images[currentImageIndex].classList.add('active');

// Tự động chuyển ảnh sau mỗi 3 giây
setInterval(showNextImage, 3000);


                                                                        
window.addEventListener('resize', adjustColumnWidth);

function adjustColumnWidth() {
  var columns = document.getElementsByClassName('column');
  var containerWidth = document.getElementsByClassName('column-container')[0].offsetWidth;
  var columnWidth = containerWidth / columns.length;

  for (var i = 0; i < columns.length; i++) {
    columns[i].style.width = columnWidth + 'px';
  }
}

// Gọi hàm adjustColumnWidth khi trang được tải
adjustColumnWidth();


