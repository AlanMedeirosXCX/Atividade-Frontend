function verificarComida() {
    const input =
    document.getElementById("comida").value.toLowerCase().trim();

    const paragrafo = document.getElementById("resultado");

    if (input === "pão com ovo") {
        paragrafo.textContent = "isso é café da manhã";
    } else if (input === "feijão com arroz") {
        paragrafo.textContent = "isso é almoço"
    } else if (input === "") {
    paragrafo.textContent = "você não digitou nada, então é janta!"
    } else {
        paragrafo.textContent = "isso é janta"
    }
}