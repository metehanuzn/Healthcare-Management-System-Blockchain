const express = require('express');
const app = express();
const path = require('path');

// Web arayüzünüzün bulunduğu dizini belirtin
const publicDirectoryPath = path.join(__dirname, 'public', 'html');

// Sunucuya statik dosyaları (HTML, CSS, JS vb.) sunmak için Express Middleware'ini kullanın
app.use(express.static(publicDirectoryPath));

// Sunucuyu belirli bir bağlantı noktasında (örneğin, 3000) dinlemek için
const port = 3000;
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
