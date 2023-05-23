function showForm() {
    var radioForm = document.getElementById("radioForm");
    var inputForm = document.getElementById("inputForm");
    var result = document.getElementById("result");
    radioForm.style.display = "none";
    inputForm.style.display = "block";
    result.style.display = "none";
  }
  
  function showResult() {
    var radioForm = document.getElementById("radioForm");
    var inputForm = document.getElementById("inputForm");
    var result = document.getElementById("result");
    radioForm.style.display = "none";
    inputForm.style.display = "none";
    result.style.display = "block";
  }
  
  function submitData() {
    var nama = document.getElementById("namaInput").value;
    var nim = document.getElementById("nimInput").value;
    var angkatan = document.getElementById("angkatanInput").value;
  
    var hasilBody = document.getElementById("hasilBody");
    var newRow = hasilBody.insertRow();
    var namaCell = newRow.insertCell(0);
    var nimCell = newRow.insertCell(1);
    var angkatanCell = newRow.insertCell(2);
  
    namaCell.innerHTML = nama;
    nimCell.innerHTML = nim;
    angkatanCell.innerHTML = angkatan;
  
    var radioForm = document.getElementById("radioForm");
    var inputForm = document.getElementById("inputForm");
    var result = document.getElementById("result");
  
    radioForm.style.display = "none";
    inputForm.style.display = "none";
    result.style.display = "none";
    document.getElementById("hasil").style.display = "block";
  }
   