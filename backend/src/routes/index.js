require('dotenv').config();
const express = require('express');
const router = express.Router();
const BASE_PATH = process.env.BASE_PATH;
const { getAllNotes, getNote, addNote, editNote, deleteNote } = require('../controllers/index');

router.get(BASE_PATH, (_req, res) => {
     res.send("Hello World");
});

router.get(BASE_PATH + '/notes', getAllNotes);
router.get(BASE_PATH + '/notes/:id', getNote);
router.post(BASE_PATH + '/notes', addNote);
router.put(BASE_PATH + '/notes/:id', editNote);
router.delete(BASE_PATH + '/notes/:id', deleteNote);

module.exports = router;
