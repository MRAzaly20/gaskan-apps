// File controller "controller-delete.js"

import express from 'express';
import getDataById from '../../api/get-data/get-student.js';

// Membuat objek router dari modul express
const router = express.Router();

// Membuat fungsi controller untuk menghapus data siswa
const getData = async (req, res) => {
	// Memanggil fungsi getDataById
	const result = await getDataById();

	// Mengirimkan response dengan hasil
	res.send(result);
};

// Mengekspor fungsi controller
export default getData;
