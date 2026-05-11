
const inputTugas = document.getElementById("inputTugas");
const inputTanggal = document.getElementById("inputTanggal");
const btntambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btntambah.addEventListener("click",function() {
    let teksTugas = inputTugas.value;

    if(teksTugas === ""){
        alert("Data harus dimasukkan!");
        return;
    }

btnHapus.addEventListener("click",function() {
    let date = inputTanggal.Value;

    if(date === "") {
        alert("Tanggal harus dimasukkan!");
        return;
    }
    
    let listbaru = document.createElement("li");
    let spanbaru = document.createElement("span");
    spanbaru.innerHTML = teksTugas;
    let btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";

    listbaru.appendChild(spanbaru);
    daftarTugas.appendChild(listbaru);
    listbaru.appendChild(btnHapus);

    const warnabaru = document.querySelectorAll("li");
    warnabaru.forEach((item, index) => {
        if(index % 2 === 0) {
            item.style.color = "red";
        } else {
            item.style.color = "green";
        }
    });

    inputTugas.Value = "";
});