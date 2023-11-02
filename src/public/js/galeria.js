document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const closeButton = document.querySelector('.close-button');
  const buttonRight = document.querySelector('.arrowRight')
  const buttonLeft = document.querySelector('.arrowLeft')
  const gridItems = document.querySelectorAll('.grid-item');
  const description = document.querySelector('.description');
  const location = document.querySelector('.location');

  gridItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      lightbox.style.display = 'block';
      lightboxImage.src = this.src; 
      lightboxImage.setAttribute('data-index', index);
      location.textContent = this.getAttribute('alt');
      description.textContent = this.getAttribute('contextmenu');
      

      
      closeButton.addEventListener('click', function () {
        lightbox.style.display = 'none';
      });

      
      window.addEventListener('click', function (event) {
        if (event.target === lightbox) {
          lightbox.style.display = 'none';
        }
      });

        lightboxImage.addEventListener('click', function () {
        const currentIndex = parseInt(this.getAttribute('data-index'));
        const nextIndex = (currentIndex + 1) ;
        lightboxImage.src = gridItems[nextIndex].src;
        lightboxImage.setAttribute('data-index', nextIndex);
        description.textContent = gridItems[nextIndex].getAttribute('contextmenu');
        location.textContent = gridItems[nextIndex].getAttribute('alt');
      }); 

      buttonRight.addEventListener('click', function(){
        const currentIndex = parseInt(lightboxImage.getAttribute('data-index'));
        const nextIndex = currentIndex + 1;
        if (nextIndex < gridItems.length) {
          lightboxImage.src = gridItems[nextIndex].src;
          lightboxImage.setAttribute('data-index', nextIndex);
          description.textContent = gridItems[nextIndex].getAttribute('contextmenu');
          location.textContent = gridItems[nextIndex].getAttribute('alt');
        }
      })

      buttonLeft.addEventListener('click', function(){
        const currentIndex = parseInt(lightboxImage.getAttribute('data-index'));
        const preIndex = currentIndex - 1;
        if (preIndex < gridItems.length) {
          lightboxImage.src = gridItems[preIndex].src;
          lightboxImage.setAttribute('data-index', preIndex);
          description.textContent = gridItems[preIndex].getAttribute('contextmenu');
          location.textContent = gridItems[preIndex].getAttribute('alt');
        }
      })
    });
  });

})