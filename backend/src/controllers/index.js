const { Note } = require('../models');

// Get all notes
const getAllNotes = async (req, res) => {
     try {
          const notes = await Note.findAll();
          return res.status(200).json({
               response: {
                    data: notes
               }
          });
     } catch (error) {
          console.error(error);
          return res.status(404).json({ message: "Data not found" });
     }
};

// Get a single note by ID
const getNote = async (req, res) => {
     const { id } = req.params;

     try {
          const note = await Note.findOne({ where: { id: id } });

          if (!note) {
               return res.status(404).json({ message: "Note not found" });
          }

          return res.status(200).json({
               response: {
                    data: note
               }
          });
     } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "An error occurred" });
     }
};

// Add a new note
const addNote = async (req, res) => {
     const { title, body } = req.body;

     if (!title) {
          return res.status(400).json({ error: "Please enter a title" });
     }

     try {
          const note = await Note.create({
               title: title,
               body: body
          });

          res.status(201).json(note);
     } catch (error) {
          res.status(400).json({ error: error.message });
     }
};

// Edit a note by ID
const editNote = async (req, res) => {
     const { id } = req.params;
     const { title, body } = req.body;

     try {
          const note = await Note.findOne({ where: { id: id } });

          if (!note) {
               return res.status(404).json({ message: "Note not found" });
          }

          if (!title) {
               return res.status(400).json({ error: "Please enter a title" });
          }

          note.title = title;
          note.body = body || note.body;

          await note.save();

          return res.status(200).json(note);
     } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "An error occurred" });
     }
};

// Delete a note by ID
const deleteNote = async (req, res) => {
     const { id } = req.params;

     try {
          const note = await Note.findOne({ where: { id: id } });

          if (!note) {
               return res.status(404).json({ message: "Note not found" });
          }

          await note.destroy();

          return res.status(200).json({ message: "Note deleted successfully" });
     } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "An error occurred" });
     }
};

module.exports = {
     getAllNotes,
     getNote,
     addNote,
     editNote,
     deleteNote
};
