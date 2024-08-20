let nomeNivelHeroi = [
  ["DRS", 11980],
  ["Aragorn", 930],
  ["Darktru", 1500],
  ["Drogon", 2500],
  ["GhostReborn", 6300],
  ["Trifeta", 7543],
  ["fritew", 8765],
  ["vertu", 9866],
  ["brino", 10500],
];

function obterNivelXP(xp) {
  if (xp <= 1000) {
    return "você está no Ferro!!";
  } else if (xp >= 1001 && xp <= 2000) {
    return "você está no Bronze!!";
  } else if (xp >= 2001 && xp <= 6000) {
    return "você está no Prata!!";
  } else if (xp >= 6001 && xp <= 7000) {
    return "você está no Ouro!!";
  } else if (xp >= 7001 && xp <= 8000) {
    return "você está no Platina!!";
  } else if (xp >= 8001 && xp <= 9000) {
    return "você está no Diamante!!";
  } else if (xp >= 9001 && xp <= 10000) {
    return "você está no Ascendente!!";
  } else if (xp >= 10001 && xp <= 11000) {
    return "você está no Imortal!!";
  } else if (xp >= 11001) {
    return "você está no Radiante!!";
  }
}
//O forEach percorre cada item de um array e executa uma função para cada elemento.
nomeNivelHeroi.forEach((hero) => {
  let nome = hero[0];
  let xp = hero[1];
  let nivel = obterNivelXP(xp);
  console.log(`${nome} ${nivel} com ${xp} de XP.`)
})
