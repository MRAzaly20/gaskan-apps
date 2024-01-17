// File controller untuk add siswa

// Mengimpor modul express dan fungsi tambahData
import express from 'express';
import AddData from '../../api/student/add-student.js';

// Membuat objek router dari modul express
const router = express.Router();

// Membuat fungsi controller untuk add siswa
const addSiswa = async (req, res) => {
	// Mendapatkan parameter dari request body
	const { nama, kelas, nis, time, imageData } = req.body;

	// Memanggil fungsi tambahData dengan parameter
	const result = await AddData(nama, kelas, nis, time, imageData);

	// Mengirimkan response dengan hasil
	res.send(result);
};

// Mengekspor fungsi controller
export default addSiswa;
