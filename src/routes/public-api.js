// File routes untuk add siswa

// Mengimpor modul express dan fungsi controller
import express from 'express';
import addSiswa from '../controller/student-controller/controller-add.js';
import deleteSiswa from '../controller/student-controller/controller-del.js';
import getData from '../controller/student-controller/controller-get-data.js';
import PresentData from '../controller/get-presence/controller-present.js';
import LateData from '../controller/get-presence/controller-late.js';
import HomeData from '../controller/get-presence/controller-gohome.js';
import AllPresence from '../controller/get-presence/controller-get-all.js';

// Membuat objek router dari modul express
import Absen from '../db/schema.js';

const router = express.Router();

// Membuat route untuk add siswa dengan metode POST
router.post('/add-siswa', addSiswa);
router.delete('/delete-siswa', deleteSiswa);
router.get('/get-data', getData);
router.get('/get-present', PresentData);
router.get('/get-late', LateData);
router.get('/get-back', HomeData);
router.get('/student-presence', AllPresence);

// Mengekspor objek router
export default router;
