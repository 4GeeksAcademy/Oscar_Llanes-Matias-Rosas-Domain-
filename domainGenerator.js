let marcas = ["tech", "sol", "group"];

let adj = ["fast", "smart", "secure"];

let dominioComercial = [".com", ".net", ".org"];

for (let marca of marcas) {
  for (let adjetivo of adj) {
    for (let dominio of dominioComercial) {
      console.log("www." + marca + adjetivo + dominio);
    }
  }
}
