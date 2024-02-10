// File controller "controller-delete.js"

import express from 'express';
import hapusDataSiswa from '../../api/student/delete-student.js';

// Membuat objek router dari modul express
const router = express.Router();

// Membuat fungsi controller untuk menghapus data siswa
const deleteSiswa = async (req, res) => {
	// Mendapatkan parameter dari request body
	const { nama, kelas, nis } = req.body;

	// Memanggil fungsi hapusDataSiswa dengan parameter
	const result = await hapusDataSiswa(nama, kelas, nis);

	// Mengirimkan response dengan hasil
	res.send(result);
};

// Mengekspor fungsi controller
export default deleteSiswa;
