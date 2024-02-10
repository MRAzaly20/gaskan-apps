// Mengimpor modul mongoose dan model absen
import mongoose from 'mongoose';
import Absen from '../../db/schema.js';

// Membuat fungsi untuk menambahkan index array baru pada array data atau membuat dokumen baru
const AddIndex = async (nama, kelas, nis, time, imageData) => {
	const id = process.env.MONGO_ID;
	// Mencoba untuk membuat dokumen baru atau mengubah dokumen absen berdasarkan id
	try {
		// Membuat objek data absen baru dari parameter
		const dataAbsenBaru = {
			nama: nama,
			kelas: kelas,
			nis: nis,
			time: time,
			imageData: imageData
		};

		// Memeriksa apakah dokumen absen dengan id yang diberikan ada atau tidak
		const isExist = await Absen.exists({ _id: id });

		// Jika dokumen tidak ada, membuat dokumen baru dengan data yang diberikan
		if (!isExist) {
			await Absen.create({ _id: id, data: [dataAbsenBaru] });
		}
		// Jika dokumen ada, mengubah dokumen yang ada dengan operator $push
		else {
			await Absen.updateOne(
				{ _id: id },
				{ $push: { data: dataAbsenBaru } }
			);
		}

		// Mengembalikan pesan sukses
		return 'Data absen berhasil ditambahkan ke array data atau dokumen baru.';
	} catch (error) {
		// Mengembalikan pesan error
		return 'Terjadi kesalahan: ' + error.message;
	}
};

// Mengekspor fungsi AddIndex
export default AddIndex;
