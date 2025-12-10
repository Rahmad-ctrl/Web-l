const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve file statis dari folder public
app.use(express.static('public'));

// Route utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/view/hal1.html'));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});// update dari HP Wed Dec 10 18:57:54 WIB 2025
