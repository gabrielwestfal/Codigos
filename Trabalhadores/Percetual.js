const inJovens = document.getElementById('inJovens');
const inAdultos = document.getElementById('inAdultos');
const inIdosos = document.getElementById('inIdosos');
const btCalcular = document.getElementById('btCalcular');

btCalcular.addEventListener('click', calcular)
function calcular() {
    var jovens = Number(inJovens.value);
    var adultos = Number(inAdultos.value);
    var idosos = Number(inIdosos.value);
    var total = jovens + adultos + idosos;
    var percJovens = (jovens / total) * 100;
    var percAdultos = (adultos / total) * 100;
    var percIdosos = (idosos / total) * 100;

    outpercJovens.innerHTML = `Percentual de Jovens: ${percJovens.toFixed(2)}%`;
    outpercAdultos.innerHTML = `Percentual de Adultos: ${percAdultos.toFixed(2)}%`;
    outpercIdosos.innerHTML = `Percentual de Idosos: ${percIdosos.toFixed(2)}%`;

}
