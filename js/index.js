const title = document.querySelector('.title')
const text = 'Aku Punya Sesuatu'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 1; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});


document.getElementById('playButton').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah navigasi langsung ke 'flower.html'
  
  const audio = document.getElementById('linkmp3');
  audio.play();
  
  // Simpan status pemutaran audio ke sessionStorage
  sessionStorage.setItem('audioPlayed', 'true');
  
  // Redirect ke 'flower.html' setelah audio dimulai
  setTimeout(() => {
    window.location.href = 'flower.html';
  }, 500); // Tunggu sejenak sebelum berpindah halaman
});