const Note = require('../../models/note');

module.exports = {
  create,
  index,
  delete: deleteNote,
}

async function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const note = await Note.create(req.body);
  res.json(note);
}

async function index(req, res) {
  const notes = await Note.find({});
  res.json(notes);
}

async function deleteNote(req, res) {
  const trash = await Note.findOneAndDelete({_id: req.body._id});
  res.json(trash);
}