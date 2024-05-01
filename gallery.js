let images = {
    imgpath: [
      "images/galleryimg/1.jpg",
      "images/galleryimg/2.jpg",
      "images/galleryimg/3.jpg",
      "images/galleryimg/4.jpg",
      "images/galleryimg/5.jpg",
      "images/galleryimg/6.jpg",
      "images/galleryimg/7.jpg",
      "images/galleryimg/8.jpg",
      "images/galleryimg/9.jpg",
      "images/galleryimg/10.jpg",
      "images/galleryimg/11.jpg",
      "images/galleryimg/12.jpg",
      "images/galleryimg/13.jpg",
      "images/galleryimg/14.jpeg",
      "images/galleryimg/15.jpeg",
      "images/galleryimg/16.jpeg",
      "images/galleryimg/17.jpeg",
      "images/galleryimg/18.jpg",
      "images/galleryimg/19.jpeg",
      "images/galleryimg/20.jpg",
      "images/galleryimg/21.jpg",
      "images/galleryimg/22.jpg",
      "images/galleryimg/23.jpg",
      "images/galleryimg/24.jpg",
      "images/galleryimg/25.jpg",
      "images/galleryimg/26.jpg",
      "images/galleryimg/27.jpg",
      "images/galleryimg/28.jpg",
      "images/galleryimg/29.jpg",
      "images/galleryimg/30.jpg",
      "images/galleryimg/31.jpg",
      "images/galleryimg/32.jpg",
      "images/galleryimg/33.jpeg",
      "images/galleryimg/34.jpeg",
    ],
  };
  for (let i = 0; i <= images.imgpath.length - 1; i++) {
    document.getElementsByClassName("A")[i].src = images.imgpath[i];
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Get all images with the class `gallery-image`
    const images = document.querySelectorAll('.A');

    // Add click event listener to each image
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            // Create a new `img` element
            const fullScreenImage = document.createElement('img');
            fullScreenImage.src = this.src;
            fullScreenImage.alt = this.alt;
            fullScreenImage.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 90%;
                max-height: 90%;
                z-index: 9999;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
                transition:0.5s;
                cursor:pointer;
            `;

            // Append the new `img` element to the body
            document.body.appendChild(fullScreenImage);

            // Close the full-screen image when clicked
            fullScreenImage.addEventListener('click', function () {
                document.body.removeChild(this);
            });
        });
    });
});