function generatePackageList(containerId, list) {
    const container = document.getElementById(containerId);
    list.forEach(item => {
        const packageDiv = document.createElement('div');
        packageDiv.className = 'package';

        // Membuat elemen nama item
        const itemName = document.createElement('strong');
        itemName.textContent = item.name;
        packageDiv.appendChild(itemName);

        // Membuat elemen harga
        const itemPrice = document.createElement('span');
        itemPrice.textContent = `Rp${item.price.toLocaleString()}`;
        packageDiv.appendChild(itemPrice);

        // Menambahkan event onclick untuk memilih paket
        packageDiv.onclick = function () {
            selectPackage(item.name, item.price, this);
        };

        container.appendChild(packageDiv);
    });
}
// Pilih semua elemen dengan kelas 'package'
const packages = document.querySelectorAll('.package');

// Tambahkan event listener untuk setiap elemen package
packages.forEach(pkg => {
    pkg.addEventListener('click', function() {
        // Toggle kelas 'selected' pada elemen yang diklik
        this.classList.toggle('selected');
    });
});
function purchaseMobileLegends() {
    const userId = document.getElementById('user-id').value;
    const serverId = document.getElementById('server-id').value;
    if (userId && serverId && selectedPackage) {
        const message = `Pembelian Diamond Mobile Legends\nUser ID: ${userId}\nServer ID: ${serverId}\nPaket: ${selectedPackage}`;
        const waUrl = `https://wa.me/6285811440699?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    } else {
        alert('Mohon lengkapi semua data.');
    }
}
