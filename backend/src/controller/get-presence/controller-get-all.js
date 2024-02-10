// File controller "controller-delete.js"

import express from 'express';
import getPresecne from '../../api/get-data/get-all-presence.js';

// Membuat objek router dari modul express
const router = express.Router();

// Membuat fungsi controller untuk menghapus data siswa
const AllPresence = async (req, res) => {
	// Memanggil fungsi getDataById
	const result = await getPresecne();

	// Mengirimkan response dengan hasil
	res.send(result);
};

// Mengekspor fungsi controller
export default AllPresence;
