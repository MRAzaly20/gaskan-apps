// Import necessary modules
import Absen from '../../db/schema.js'; // Replace with your actual schema import
import mongoose from 'mongoose';

const getPresecne = async () => {
	const id = process.env.MONGO_ID;
	// Menghubungkan mongoose dengan MongoDB Atlas
	//console.log('id :', id);
	try {
		const siswa = await Absen.find();

		const masuk = [];
		const terlambat = [];
		const pulang = [];
		var json = JSON.parse(JSON.stringify(siswa));

		json.forEach((item) => {
			item.data.forEach((data) => {
				console.log(data);
				data.imageData = Buffer.from(data.imageData.data).toString(
					'base64'
				);
			});
		});

		json.forEach((entry) => {
			if (entry.data && entry.data.length > 0) {
				entry.data.forEach((dataEntry) => {
					if (dataEntry && dataEntry.time) {
						const jam = parseInt(dataEntry.time.split(':')[0]);

						if (jam < 8) {
							masuk.push(dataEntry);
						} else if (jam >= 8 && jam < 12) {
							terlambat.push(dataEntry);
						} else {
							pulang.push(dataEntry);
						}
					}
				});
			}
		});

		const hasil = { masuk, terlambat, pulang };

		return JSON.stringify(hasil);
	} catch (err) {
		// Handling errors by sending a JSON response with the error message
		return err.message;
	}
};

// Usage example
// Replace with your actual _id
export default getPresecne;
