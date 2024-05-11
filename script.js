const inputEncrypt = document.querySelector('.input-encrypt input');
const submitEncrypt = document.querySelector('.input-encrypt button');

const inputDecrypt = document.querySelector('.input-decrypt input');
const submitDecrypt = document.querySelector('.input-decrypt button');

const result = document.querySelector('input.result');

submitEncrypt.addEventListener('click', () => {
    const input = inputEncrypt.value;
    const encrypt = CryptoJS.AES.encrypt(input, "Secret Passphrase");
    result.value = encrypt;
});

submitDecrypt.addEventListener('click', () => {
    const input = inputDecrypt.value;
    const bytes = CryptoJS.AES.decrypt(input, "Secret Passphrase");
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    result.value = decrypted
});


function copyText() {
    // Memilih teks yang akan disalin
    var copyText = document.querySelector('.box-result input');

    // Membuat elemen textarea sementara untuk menempatkan teks
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    alert("Text telah disalin!");
}   