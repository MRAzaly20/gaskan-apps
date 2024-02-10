// File controller "controller-delete.js"

import express from 'express';
import goHome from '../../api/presence/homecoming.js';

// Membuat objek router dari modul express
const router = express.Router();

// Membuat fungsi controller untuk menghapus data siswa
const HomeData = async (req, res) => {
	// Memanggil fungsi getDataById
	const result = await goHome();

	// Mengirimkan response dengan hasil
	res.send(result);
};

// Mengekspor fungsi controller
export default HomeData;
