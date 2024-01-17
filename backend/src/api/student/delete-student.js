// Mengimpor modul mongoose, model absen, dan fungsi cariIndex dan hapusData
import mongoose from 'mongoose';
import Absen from '../../scheme/schema.js';
import FindIndex from './find-index.js';
import DelData from './delete-data.js';

// Membuat fungsi untuk menghapus data siswa berdasarkan index yang sudah ditemukan
const hapusDataSiswa = async (nama, kelas, nis) => {
	// Mencari index data siswa berdasarkan nama, kelas, dan nis
	const index = await FindIndex(nama, kelas, nis);

	// Jika index tidak valid, mengembalikan pesan error
	if (index < 0) {
		return 'Index data siswa tidak valid.';
	}

	// Menghapus data siswa berdasarkan index yang sudah ditemukan
	const result = await DelData(nama, kelas, nis, index);

	// Mengembalikan hasil
	return result;
};

// Mengekspor fungsi hapusDataSiswa
export default hapusDataSiswa;
