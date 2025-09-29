alert("Hallo selamat datang di formulir pendaftaran");
// pesan awal
alert("Selamat datang di webku!");

// jalankan setelah halaman siap
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // supaya tidak langsung reload
      alert("Terima kasih sudah mengirim!");
      form.reset(); // biar inputnya kosong lagi
    });
  }
});