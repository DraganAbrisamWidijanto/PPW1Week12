function cekKondisi() {
    // Mengambil nilai dari input
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);
  
    // Memeriksa kondisi kedua bilangan
    if (bilangan1 > bilangan2) {
      document.getElementById("hasil").textContent = "BILANGAN KE-1 LEBIH BESAR DARI BILANGAN KE-2";
    } else if (bilangan1 < bilangan2) {
      document.getElementById("hasil").textContent = "BILANGAN KE-1 LEBIH KECIL DARI BILANGAN KE-2";
    } else {
      document.getElementById("hasil").textContent = "BILANGAN KE-1 SAMA DENGAN BILANGAN KE-2";
    }
  }
  