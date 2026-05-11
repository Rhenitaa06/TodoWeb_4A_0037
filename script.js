const inputTugas   = document.getElementById("inputTugas");
const inputTanggal = document.getElementById("inputTanggal");
const btntambah    = document.getElementById("btnTambah");
const daftarTugas  = document.getElementById("daftarTugas");

btntambah.addEventListener("click", function() {
    let teksTugas = inputTugas.value;
    let tanggal   = inputTanggal.value;

    if (teksTugas === "") {
        alert("Data harus dimasukkan!");
        return;
    }

    let listbaru    = document.createElement("li");
    let spanbaru    = document.createElement("span");
    let spanTanggal = document.createElement("span");
    let btnHapus = document.createElement("button"); 
    let btnProgress = document.createElement("button");

    spanbaru.innerHTML    = teksTugas;
    spanTanggal.innerHTML = tanggal ? " : " + tanggal : "";

    btnHapus.innerHTML = "Hapus"; 
    btnHapus.classList.add("hapus");
    btnHapus.addEventListener("click", function() {
        let konfir = confirm("Yakin ingin menghapus tugas ini?");
        if (konfir) {
            daftarTugas.removeChild(listbaru);
        }
    });

    btnProgress.innerHTML = " Progress";
    btnProgress.classList.add("btn-progress");
    btnProgress.addEventListener("click", function() {

    });

    listbaru.appendChild(spanbaru);
    listbaru.appendChild(spanTanggal);
    listbaru.appendChild(btnProgress);
    listbaru.appendChild(btnHapus);
    daftarTugas.appendChild(listbaru);

    const warnabaru = document.querySelectorAll("li");
    warnabaru.forEach((item, index) => {
        if (index % 2 === 0) {
            item.style.color = "red";
        } else {
            item.style.color = "green";
        }
    });

    inputTugas.value   = ""; 
    inputTanggal.value = ""; 
});