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
    let btnProgress = document.createElement("button");
    let btnDone = document.createElement("button");
    let btnHapus = document.createElement("button"); 
   

    spanbaru.innerHTML    = teksTugas;
    spanTanggal.innerHTML = tanggal ? " : " + tanggal : "";

    btnHapus.innerHTML = "Hapus"; 
    btnHapus.classList.add("hapus");
    btnHapus.addEventListener("click", function() {
        let konfir = confirm("Yakin ingin menghapus tugas ini?");
        if (konfir) {
            listbaru.remove();
        }
    });

    btnProgress.innerHTML = " Progress";
    btnProgress.classList.add("btn-progress");
    btnProgress.addEventListener("click", function() {
        listbaru.className = "status-Progress";
    });

    btnDone.innerHTML = " Done";
    btnDone.classList.add("btn-done");
    btnDone.addEventListener("click", function() {
        listbaru.className = "status-Done";
    })

    listbaru.appendChild(spanbaru);
    listbaru.appendChild(spanTanggal);
    listbaru.appendChild(btnProgress);
    listbaru.appendChild(btnDone);
    listbaru.appendChild(btnHapus);
    daftarTugas.appendChild(listbaru);


    inputTugas.value   = ""; 
    inputTanggal.value = ""; 
});