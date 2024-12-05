
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('FEBBY SEMANGAT YAA!').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

// document.addEventListener('DOMContentLoaded', function () {
//   const audio = document.getElementById('linkmp3');
//   document.body.addEventListener('click', function () {
//       audio.play();
//   }, { once: true }); // Memastikan hanya sekali interaksi dibutuhkan
// });

document.getElementById('playButton').addEventListener('click', function() {
  // Sembunyikan tombol setelah diklik
  this.style.display = 'none';

  // Mainkan audio
  const audio = document.getElementById('linkmp3');
  audio.play();

  // Menampilkan elemen bunga setelah audio mulai diputar
  setTimeout(function() {
    document.querySelector('.flowers').style.display = 'block';
  }, 1000); // Menunggu 1 detik setelah audio mulai diputar
});