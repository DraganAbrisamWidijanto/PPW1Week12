function calculateYears(inputId, outputId) {
    const outputElement = document.getElementById(outputId);
    const inputElement = document.getElementById(inputId);

      // kode menghitung tahun
      const quantityPerDay = parseFloat(inputElement.value);
      let years = 0;

      if (quantityPerDay > 0) {
          switch (inputId) {
              case 'plastic-bottles':
                  years = quantityPerDay * 365;
                  break;
              case 'plastic-cups':
                  years = quantityPerDay * 365;
                  break;
              case 'straws':
                  years = quantityPerDay * 365;
                  break;
              case 'cotton-swabs':
                  years = quantityPerDay * 365;
                  break;
              case 'cigarette-butts':
                  years = quantityPerDay * 365;
                  break;
              case 'plastic-bags':
                  years = quantityPerDay * 365;
                  break;
              case 'cling-wrap':
                  years = quantityPerDay * 365;
                  break;
              case 'silverware':
                  years = quantityPerDay * 365;
                  break;
              case 'stirrers':
                  years = quantityPerDay * 365;
                  break;
              case 'food-containers':
                  years = quantityPerDay * 365;
                  break;
              default:
                  years = 0;
        }
    }

      // total
      outputElement.textContent = years.toFixed(0);
      calculateTotalYears();
}

  function calculateTotalYears() {
const inputIds = [
'plastic-bottles-year',
'plastic-cups-year',
'straws-year',
'cotton-swabs-year',
'cigarette-butts-year',
'plastic-bags-year',
'cling-wrap-year',
'silverware-year',
'stirrers-year',
'food-containers-year'
];
let totalYears = 0;

inputIds.forEach((inputId) => {
const outputElement = document.getElementById(inputId);
if (outputElement && outputElement.textContent !== '') {
  const years = parseFloat(outputElement.textContent);
  if (!isNaN(years)) {
    totalYears += years;
  }
}
});

const totalYearsElement = document.getElementById('totalYears');
if (totalYearsElement) {
totalYearsElement.textContent = totalYears.toFixed(0);
}
}