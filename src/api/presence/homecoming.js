import Absen from '../../db/schema.js';
import mongoose from 'mongoose';

const goHome = async () => {
	try {
		const siswa = await Absen.find();

		const masuk = [];
		const terlambat = [];
		const pulang = [];
		var json = JSON.parse(JSON.stringify(siswa));

		json.forEach(item => {
			item.data.forEach(data => {
				console.log(data);
				data.imageData = Buffer.from(data.imageData.data).toString(
					'base64'
				);
			});
		});

		json.forEach(entry => {
			if (entry.data && entry.data.length > 0) {
				entry.data.forEach(dataEntry => {
					if (dataEntry && dataEntry.time) {
						const jam = parseInt(dataEntry.time.split(':')[0]);

						if (jam < 8) {
							console.log();
						} else if (jam >= 8 && jam < 12) {
							console.log();
						} else {
							pulang.push(dataEntry);
						}
					}
				});
			}
		});

		const hasil = { pulang };
		return JSON.stringify(hasil);
	} catch (err) {
		// Handling errors by sending a JSON response with the error message
		return 'error' + err.message;
	}
};

export default goHome;
