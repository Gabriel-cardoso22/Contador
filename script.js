// Contador
const dataInicial = new Date(2023, 4, 21, 17, 30, 0); // 21/05/2023 17:30

function atualizarContador() {
  const agora = new Date();
  let anos = agora.getFullYear() - dataInicial.getFullYear();
  let meses = agora.getMonth() - dataInicial.getMonth();
  let dias = agora.getDate() - dataInicial.getDate();
  let horas = agora.getHours() - dataInicial.getHours();
  let minutos = agora.getMinutes() - dataInicial.getMinutes();
  let segundos = agora.getSeconds() - dataInicial.getSeconds();

  if (segundos < 0) { segundos += 60; minutos--; }
  if (minutos < 0) { minutos += 60; horas--; }
  if (horas < 0) { horas += 24; dias--; }
  if (dias < 0) {
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
    meses--;
  }
  if (meses < 0) { meses += 12; anos--; }

  document.getElementById('contador').textContent =
    `Namorando à: ${anos} ano${anos !== 1 ? 's' : ''}, ${meses} mese${meses !== 1 ? 's' : ''}, ${dias} dia${dias !== 1 ? 's' : ''}, ${horas} hora${horas !== 1 ? 's' : ''}, ${minutos} minuto${minutos !== 1 ? 's' : ''} e ${segundos} segundo${segundos !== 1 ? 's' : ''}`;
}


setInterval(atualizarContador, 1000);
atualizarContador();
