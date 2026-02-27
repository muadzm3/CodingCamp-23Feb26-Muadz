document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("messageForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const tanggal = document.getElementById("tanggal").value;
        const pesan = document.getElementById("pesan").value;

        const genderInput = document.querySelector('input[name="gender"]:checked');
        const gender = genderInput ? genderInput.value : "-";

        const currentTime = new Date().toLocaleString();

        document.getElementById("result").innerHTML = `
            <strong>Current Time:</strong> ${currentTime} <br><br>
            <strong>Nama:</strong> ${nama} <br>
            <strong>Tanggal Lahir:</strong> ${tanggal} <br>
            <strong>Jenis Kelamin:</strong> ${gender} <br>
            <strong>Pesan:</strong> ${pesan}
        `;
    });

});