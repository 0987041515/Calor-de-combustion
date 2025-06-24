const entalpias = {
  metano: -890.3,
  etano: -1560,
  propano: -2220,
  butano: -2878,
  tolueno: -3910
};

const masasMolares = {
  metano: 16.04,
  etano: 30.07,
  propano: 44.10,
  butano: 58.12,
  tolueno: 92.14
};

function calcular() {
  const compuesto = document.getElementById("compuesto").value;
  const masa = parseFloat(document.getElementById("masa").value);
  const masaMolar = masasMolares[compuesto];

  const moles = masa / masaMolar;
  const q = moles * entalpias[compuesto];

  document.getElementById("resultado").innerText =
    `Energía liberada: ${Math.abs(q).toFixed(2)} kJ/mol`;

  simularBomba(q);
}

function simularBomba(q) {
  const ctx = document.getElementById("grafico").getContext("2d");
  ctx.clearRect(0, 0, 400, 300);

  ctx.fillStyle = "#b3e0ff";
  ctx.fillRect(100, 50, 200, 200);

  ctx.fillStyle = "#999";
  ctx.fillRect(170, 130, 60, 80);

  let altura = 0;
  const llama = setInterval(() => {
    ctx.clearRect(175, 100, 50, 30);
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(200, 130 - altura);
    ctx.lineTo(190, 130);
    ctx.lineTo(210, 130);
    ctx.fill();
    altura += 2;

    if (altura > Math.min(30, Math.abs(q) / 100)) clearInterval(llama);
  }, 100);
}
