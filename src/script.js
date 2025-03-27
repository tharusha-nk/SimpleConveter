const kgtog = document.getElementById("kgtog");
const gtokg = document.getElementById("gtokg");
const mtocm = document.getElementById("mtocm");
const cmtom = document.getElementById("cmtom");
const ctof = document.getElementById("ctof");
const ftoc = document.getElementById("ftoc");
const closebtn = document.getElementById("close");
let answeight = 0;
let anslength = 0;
let anstemp = 0;

kgtog.onclick = function () {
    weight = Number(document.getElementById("weight").value);

    const answeigth = weight * 1000;
    document.getElementById("answeight").textContent = answeigth + `g`;

}


gtokg.onclick = function () {
    weight = Number(document.getElementById("weight").value);

    const answeigth = weight / 1000;
    document.getElementById("answeight").textContent = answeigth + `kg`;

}

mtocm.onclick = function () {
    length = Number(document.getElementById("length").value);

    const anslength = length * 100;
    document.getElementById("anslength").textContent = anslength + `cm`;

}

cmtom.onclick = function () {
    length = Number(document.getElementById("length").value);

    const anslength = length / 100;
    document.getElementById("anslength").textContent = anslength + `m`;

}

ctof.onclick = function () {
    temperature = Number(document.getElementById("temperature").value);

    const anstemp = (temperature * 9 / 5) + 32;
    document.getElementById("anstemp").textContent = anstemp + `°F`;

}

ftoc.onclick = function () {
    temperature = Number(document.getElementById("temperature").value);

    const anstemp = (temperature - 32) * 5 / 9;
    document.getElementById("anstemp").textContent = anstemp + `°C`;

}

closebtn.onclick = function () {
    window.close();
}
