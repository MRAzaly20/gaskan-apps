// Mengimpor modul mongoose dan model absen
import mongoose from 'mongoose';
import Absen from '../../scheme/schema.js';

// Membuat fungsi untuk menghapus data di database MongoDB
const DelData = async (nama, kelas, nis, index) => {
	// Mencoba untuk menghapus data di database MongoDB
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
		}

		// Menghapus data absen dari array berdasarkan index
		absen.data.splice(index, 1);

		// Menyimpan perubahan dokumen absen ke database MongoDB
		await absen.save();

		// Mengembalikan pesan sukses
		return 'Data absen berhasil dihapus dari database MongoDB.';
	} catch (error) {
		// Mengembalikan pesan error
		return (
			'Terjadi kesalahan saat menghapus data absen dari database MongoDB: ' +
			error.message
		);
	}
};

// Mengekspor fungsi DelData
export default DelData;
