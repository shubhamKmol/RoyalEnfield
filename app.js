document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.querySelector('#carouselExampleIndicators');
  
    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000,  
        pause: 'hover', 
        ride: 'carousel' 
      });
    }
  });
//   document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (email && password) {
//         alert('Login successful!');
//         // Here, you would typically send the credentials to the server for verification.
//     } else {
//         alert('Please fill in both fields.');
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav li a');
    const bikeImage = document.getElementById('bike-image');
  
    const bikeImages = {
      'hunter-350': 'images/royal/hunter-350.avif',
      'classic-650': 'images/royal/classic-650.avif',
      'scram-440': 'images/royal/scram-440.jpg',
      'goan-classic-350': 'images/royal/goan-classic-350.png',
      'bear-650': 'images/royal/bear-650.jpg',
    //   'classic-350': 'images/classic-350.jpg',
    //   'guerrilla-450': 'images/guerrilla-450.jpg',
    //   'shotgun-650': 'images/shotgun-650.jpg',
    //   'new-himalayan': 'images/new-himalayan.jpg',
    //   'bullet-350': 'images/bullet-350.jpg',
    //   'super-meteor-650': 'images/super-meteor-650.jpg',
    //   'meteor-350': 'images/meteor-350.jpg',
    //   'interceptor-650': 'images/interceptor-650.jpg',
    //   'continental-gt-650': 'images/continental-gt-650.jpg'
    };
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        const bike = this.getAttribute('data-bike');
        bikeImage.src = bikeImages[bike];
        bikeImage.alt = bike.replace('-', ' ').toUpperCase();
      });
    });
  });
  
  