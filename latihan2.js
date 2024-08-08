// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pili hanya yang java script lanjuatan
let jsLanjut = videos.filter (video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil duration masing masing video
.map(item => item.dataset.duration )
// ubah duration menjadi int, ubah menit menjadi detik
.map(waktu => {
    // 10:30 ->[10,30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})
// jumlah semua nya
.reduce ((total,detik) => total + detik );

// ubah format jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;


// simpan di dom
const pDurasi =document.querySelector('.total-duration');
pDurasi.textContent = `${jam},jam ${menit},menit ${detik},detik`;
const jmVideo = videos.filter (video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pjmVideo = document.querySelector('.jumlah-video');
pjmVideo.textContent = `${jmVideo}, video`

console.log(pjmVideo);