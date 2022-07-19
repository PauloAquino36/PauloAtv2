function criaElemento(cor, largura, altura) {
const eNovo = document.createElement("div");
eNovo.textContent = `${cor} ${largura} ${altura}`;
document.body.appendChild(eNovo);
}

criaElemento(
    document.apply.exm01.cor.value,
    document.apply.exm01.altura.value,
    document.apply.exm01.largura.value,
)