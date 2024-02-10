// Mengimpor modul mongoose dan model absen
import mongoose from 'mongoose';
import Absen from '../../db/schema.js';

// Membuat fungsi untuk mencari index data absen
const FindIndex = async (nama, kelas, nis) => {
	// Mencoba untuk mencari index data absen
	try {
		// Mencari dokumen absen yang sesuai dengan parameter
		const absen = await Absen.findOne({
			'data.nama': nama,
			'data.kelas': kelas,
			'data.nis': nis
		});

		// Jika dokumen absen tidak ditemukan, mengembalikan pesan error
		if (!absen) {
			return 'Data absen tidak ditemukan di database MongoDB.';
		} else {
			return 'Data absen ditemukan di database MongoDB.';
		}

		// Mencari index data absen dari array berdasarkan parameter
		const index = absen.data.findIndex(
			data =>
				data.nama === nama && data.kelas === kelas && data.nis === nis
		);

		// Mengembalikan index data absen
		return index;
	} catch (error) {
		// Mengembalikan pesan error
		return (
			'Terjadi kesalahan saat mencari index data absen: ' + error.message
		);
	}
};

// Mengekspor fungsi FindIndex
export default FindIndex;
