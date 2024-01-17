// Mengimpor modul express, mongoose, dan file public-api.js
import express from 'express';
import mongoose from 'mongoose';
import publicApi from './src/routes/public-api.js';
import dotenv from 'dotenv';
dotenv.config();
// kode Anda di sini

// Membuat objek app dari modul express
const app = express();

// Menyimpan string koneksi dari Atlas
const uri = process.env.MONGO_URI;

// Menghubungkan mongoose dengan MongoDB Atlas
mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connected to MongoDB Atlas');
	})
	.catch(error => {
		console.error('Failed to connect to MongoDB Atlas: ' + error.message);
	});

// Menggunakan middleware express.json untuk mengurai request body
app.use(express.json());

// Menggunakan file public-api.js untuk routing
app.use('/api', publicApi);

// Menyimpan port aplikasi
const port = 3000;

// Menjalankan aplikasi di port yang ditentukan
app.listen(port, () => {
	console.log('Server is running on port ' + port);
});
