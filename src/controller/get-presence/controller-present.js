// File controller "controller-delete.js"

import express from 'express';
import Present from '../../api/presence/present.js';

// Membuat objek router dari modul express
const router = express.Router();

// Membuat fungsi controller untuk menghapus data siswa
const PresentData = async (req, res) => {
	// Memanggil fungsi getDataById
	const result = await Present();

	// Mengirimkan response dengan hasil
	res.send(result);
};

// Mengekspor fungsi controller
export default PresentData;
