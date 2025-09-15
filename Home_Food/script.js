const swiper = new Swiper('.popular-scroll', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

// Modal functionality

document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.querySelector('.service .play-button');
  const serviceVideo = document.querySelector('.service-video');
  const videoUrl = 'https://www.youtube.com/embed/9sZzLVINWfU?autoplay=1';

  playButton.addEventListener('click', () => {
    // Replace image with iframe video
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.width = '100%';
    iframe.height = '360';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.borderRadius = '12px';

    // Remove existing image and play button
    while (serviceVideo.firstChild) {
      serviceVideo.removeChild(serviceVideo.firstChild);
    }

    // Append iframe
    serviceVideo.appendChild(iframe);
  });
});

const openRequestModalBtn = document.getElementById('openRequestModalBtn');
const requestDishModal = document.getElementById('requestDishModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const submitRequestBtn = document.getElementById('submitRequestBtn');
const dishDropdown = document.getElementById('dishDropdown');
const selectedDishImage = document.getElementById('selectedDishImage');
const quantityInput = document.getElementById('dishQuantityInput');
const instructionsTextarea = document.getElementById('specialInstructions');

const dishImageSources = {
  Pizza: 'images/pizza.jpg',
  Burger: "images/burger.jpg",
  Pasta: 'images/pasta.jpg',
  Salad: 'images/salad.jpg'
};

function openModal() {
  requestDishModal.style.display = 'flex';
  document.body.classList.add('modal-open');
}

function closeModal() {
  requestDishModal.style.display = 'none';
  document.body.classList.remove('modal-open');

  // Reset form fields
  dishDropdown.value = '';
  selectedDishImage.style.display = 'none';
  selectedDishImage.src = '';
  quantityInput.value = '';
  instructionsTextarea.value = '';
}

dishDropdown.addEventListener('change', () => {
  const selectedDish = dishDropdown.value;
  if (dishImageSources[selectedDish]) {
    selectedDishImage.src = dishImageSources[selectedDish];
    selectedDishImage.style.display = 'block';
  } else {
    selectedDishImage.style.display = 'none';
  }
});

openRequestModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
submitRequestBtn.addEventListener('click', closeModal);
