function kirimdata() {
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const peminatan = document.querySelector('input[name="peminatan"]:checked');
    const angkatan = document.getElementById('angkatan').value;
    const tanggal = document.getElementById('tanggal').value;
    const alamat = document.getElementById('alamat').value;
  
    let alertMessage = '';
  
    if (!nama || !nim || !peminatan || !angkatan || !tanggal || !alamat) {
        alertMessage = 'kocak, Semuanya harus diisi!';
    } else {
        alertMessage = `
            Data diri\n
            Nama: ${nama}\n
            NIM: ${nim}\n
            Peminatan: ${peminatan.value}\n
            Angkatan: ${angkatan}\n
            Tanggal: ${tanggal}\n
            Alamat: ${alamat}
        `;
    }
  
    showAlert(alertMessage);
}
  
function showAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.innerText = message;
    alertBox.classList.add('show');
    
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 10000);
}
  
flatpickr("#tanggal", {
    dateFormat: "Y-m-d",
    defaultDate: new Date(),
});
