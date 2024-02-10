// Import necessary modules
import Absen from '../../db/schema.js'; // Replace with your actual schema import
import mongoose from 'mongoose';

const getDataById = async () => {
	const id = process.env.MONGO_ID;
	// Menghubungkan mongoose dengan MongoDB Atlas
	//console.log('id :', id);
	try {
		// Connect to MongoDB
		// Find data by _id
		const result = await Absen.findById(id);

		// Check if data exists
		if (!result) {
			return 'Data not found';
		}

		// Extract base64 value from imageData
		var ejson = result.toObject({ getters: true, virtuals: true });

		// Tampilkan MongoDB Extended JSON di konsol
		var json = JSON.parse(JSON.stringify(result));
		json.data.forEach(item => {
			item.imageData = Buffer.from(item.imageData.data).toString(
				'base64'
			);
		});

		// Mengembalikan objek JSON yang berisi string base64
		const resultData = JSON.stringify(json, null, 2);
		// var data = json.data[0].imageData;
		//console.log(resultData)

		// Return the formatted result as JSON
		return resultData;
	} catch (error) {
		return `Error: ${error.message}`;
	}
};

// Usage example
// Replace with your actual _id
export default getDataById;
