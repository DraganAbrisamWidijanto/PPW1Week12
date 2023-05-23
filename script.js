function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultElement = document.getElementById("result");
  
    if (isNaN(num1) || isNaN(num2)) {
      resultElement.textContent = "Mohon masukkan angka pada kedua input";
    } else {
      var result;
  
      switch (operation) {
        case "tambah":
          result = num1 + num2;
          break;
        case "kurang":
          result = num1 - num2;
          break;
        case "bagi":
          result = num1 / num2;
          break;
        case "kali":
          result = num1 * num2;
          break;
        case "modulo":
          result = num1 % num2;
          break;
        case "akar":
          result = Math.sqrt(num1);
          break;
        default:
          result = "Operasi tidak valid";
      }
  
      resultElement.textContent = "Hasil: " + result;
    }
  }
  