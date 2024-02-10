// File controller "controller-delete.js"

import express from 'express';
import Late from '../../api/presence/come-late.js';

// Membuat objek router dari modul express
const router = express.Router();

// Membuat fungsi controller untuk menghapus data siswa
const LateData = async (req, res) => {
	// Memanggil fungsi getDataById
	const result = await Late();

	// Mengirimkan response dengan hasil
	res.send(result);
};

// Mengekspor fungsi controller
export default LateData;
