const media = [
{type:'image',src:"https://gdgoenkamodeltown.com/wp-content/gallery/orientation-day-2025/Orientation-Day-2025-IMG_0855.JPG",duration:10000},
{type:'image',src:"https://gdgoenkamodeltown.com/wp-content/uploads/2025/01/HOMEPAGE1-2.jpg",duration:10000},
{type:'image',src:"https://gdgoenkamodeltown.com/wp-content/gallery/investiture-ceremony-2026/IMG_7936.JPG?t=1785823441",duration:5000},
{type:'image',src:"https://gdgoenkamodeltown.com/wp-content/gallery/mun-2026/MUN-2026-IMG_8344.JPG?t=1784877572",duration:10000},
{type:'video',src:'Arushan2026.mp4',duration:50000},
{type:'image',src:'https://gdgoenkamodeltown.com/wp-content/gallery/rangmanch-annual-day-celebration-day-4/VVRA4701.JPG',duration:5000},
{type:'image',src:"https://gdgoenkamodeltown.com/wp-content/gallery/rangmanch-annual-day-celebration-day-4/VVRA3670.JPG",duration:5000},
{type:'image',src:"https://gdgoenkamodeltown.com/wp-content/gallery/the-invincible-voice-of-azaadi-annual-day-celebration-day-2/thumbs/thumbs-VVRA1555.JPG?t=1780483756",duration:5000},
{type:'image',src:"https://gdgoenkamodeltown.com/wp-content/gallery/robotic-science/Robotic-Science-05.jpeg",duration:5000},
{type:'image',src:"https://gdgoenkamodeltown.com/wp-content/gallery/robotic-science/Robotic-Science-02.jpeg",duration:5000},
{type:'video',src:"MUN2026.mp4",duration:20000},
{type:'image',src:"https://gdgoenkamodeltown.com/wp-content/uploads/2024/05/20240529103427471_0001-1-1024x864.jpg",duration:8000},
{type:'image',src:"https://gdgoenkamodeltown.com/wp-content/gallery/investiture-ceremony-2026/IMG_7901.JPG",duration:10000},
{type:'image',src:"https://gdgoenkamodeltown.com/wp-content/gallery/investiture-ceremony-2026/IMG_7876.JPG?t=1785823441",duration:3000},
{type:'image',src:'https://gdgoenkamodeltown.com/wp-content/uploads/2026/01/2-1.jpg',duration:5000},
{type:'video',src:"Sportsday.mp4",duration:50000}


];

const layers = document.querySelectorAll('.bg-layer');
let currentIndex = 0;
let activeLayer = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % media.length;
  const nextLayer = activeLayer === 0 ? 1 : 0;

  const incomingLayer = layers[nextLayer];
  const incomingVideo = incomingLayer.querySelector('video');
  const outgoingVideo = layers[activeLayer].querySelector('video');
  const item = media[currentIndex];

  if (item.type === 'video') {
    incomingLayer.style.backgroundImage = 'none';
    incomingVideo.src = item.src;
    incomingVideo.style.display = 'block';
    incomingVideo.play();
  } else {
    incomingVideo.pause();
    incomingVideo.style.display = 'none';
    incomingLayer.style.backgroundImage = `url("${item.src}")`;
  }

  // Crossfade layers
  incomingLayer.classList.add('active');
  layers[activeLayer].classList.remove('active');

  setTimeout(() => {
    outgoingVideo.pause();
  }, 1000);

  activeLayer = nextLayer;

  // Schedule the next slide using THIS item's custom duration
  setTimeout(showNextSlide, item.duration);
}

// Start the cycle after the first slide's duration
setTimeout(showNextSlide, media[0].duration);
