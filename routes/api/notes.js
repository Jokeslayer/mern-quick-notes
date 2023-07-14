const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const NoteCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', NoteCtrl.index);

router.post('/', NoteCtrl.create)

router.delete('/:id', ensureLoggedIn, NoteCtrl.delete);

module.exports = router;