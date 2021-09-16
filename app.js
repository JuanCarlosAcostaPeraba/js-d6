const tirar = document.getElementById("tirar");
const salida = document.getElementById("salida");
const loader = document.getElementById("loader");

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const work = async () => {
    await sleep(1000);
    let num = Math.floor(Math.random() * 6 + 1);
    loader.setAttribute("hidden", null);
    salida.innerHTML = num;
};

tirar.onclick = () => {
    salida.innerHTML = "";
    loader.removeAttribute("hidden");
    work();
};
