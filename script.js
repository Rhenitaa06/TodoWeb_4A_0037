
const inputTugas = document.getElementById("inputTugas");
const inputTanggal = document.getElementById("inputTanggal")
const btntambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btntambah.addEventListener("click",function() {

    let teksTugas = inputTugas.value;
    let tanggal = inputTanggal.value;

    if(teksTugas === ""){
        alert("Data harus dimasukkan!");
        return;
    }

    let listbaru = document.createElement("li");
    let spanbaru = document.createElement("span");
    let spanTanggal = document.createElement("span");

    spanbaru.innerHTML = teksTugas;
    spanTanggal.innerHTML = tanggal;

    listbaru.appendChild(spanbaru);
    daftarTugas.appendChild(listbaru);
    listbaru.appendChild(spanTanggal);

    const warnabaru = document.querySelectorAll("li");
    warnabaru.forEach((item, index) => {
        if(index % 2 === 0) {
            item.style.color = "red";
        } else {
            item.style.color = "green";
        }
    });

    inputTugas.Value = "";
    inputTanggal.Value = "";
});