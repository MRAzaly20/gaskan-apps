import mongoose from 'mongoose';

// Membuat skema absen
const AbsenSchema = new mongoose.Schema({
	// Menyimpan data absen sebagai array
	data: [
		{
			// Menyimpan nama siswa sebagai string
			nama: {
				type: String,
				required: true
			},
			// Menyimpan kelas siswa sebagai string
			kelas: {
				type: String,
				required: true
			},
			// Menyimpan nomor induk siswa sebagai angka
			nis: {
				type: Number,
				required: true,
				unique: true
			},
			// Menyimpan waktu absen sebagai tanggal
			time: {
				type: String,
				required: true
			},
			imageData: {
				type: Buffer,
				required: true
			}
		}
	]
});

// Membuat model absen dari skema
const Absen = mongoose.model('Absen', AbsenSchema);

// Mengekspor model absen
export default Absen;
