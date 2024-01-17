// File routes untuk add siswa

// Mengimpor modul express dan fungsi controller
import express from 'express';
import addSiswa from '../controller/student-controller/controller-add.js';
import deleteSiswa from '../controller/student-controller/controller-del.js';
import getData from '../controller/student-controller/controller-get-data.js';
// Membuat objek router dari modul express
const router = express.Router();

// Membuat route untuk add siswa dengan metode POST
router.post('/add-siswa', addSiswa);
router.delete('/delete-siswa', deleteSiswa);
router.get('/get-data', getData);
// Mengekspor objek router
export default router;
