document.addEventListener("DOMContentLoaded", () => {
    const pemasokForm = document.getElementById("pemasok-form");
    const produkForm = document.getElementById("produk-form");
    const pesananForm = document.getElementById("pesanan-form");
    const gudangForm = document.getElementById("gudang-form");

    const pemasokList = document.getElementById("pemasok-list");
    const produkList = document.getElementById("produk-list");
    const pesananList = document.getElementById("pesanan-list");
    const gudangList = document.getElementById("gudang-list");

    // Menambahkan Pemasok
    pemasokForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const pemasokNama = document.getElementById("pemasok-nama").value;
        const li = document.createElement("li");
        li.textContent = pemasokNama;
        pemasokList.appendChild(li);
        pemasokForm.reset();
    });

    // Menambahkan Produk
    produkForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const produkNama = document.getElementById("produk-nama").value;
        const li = document.createElement("li");
        li.textContent = produkNama;
        produkList.appendChild(li);
        produkForm.reset();
    });

    // Menambahkan Pesanan
    pesananForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const pesananNama = document.getElementById("pesanan-nama").value;
        const li = document.createElement("li");
        li.textContent = pesananNama;
        pesananList.appendChild(li);
        pesananForm.reset();
    });

    // Menambahkan Gudang
    gudangForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const gudangNama = document.getElementById("gudang-nama").value;
        const li = document.createElement("li");
        li.textContent = gudangNama;
        gudangList.appendChild(li);
        gudangForm.reset();
    });
});