const express = require('express');
const router = express.Router();
const entries = require('./entries.js');
const errors = require('./errors.js');
const videos = require('./videos.js');
const projects = require('./projects.js');
const keywords = require('./keywords.js');
const stacktypes = require('./stacktypes.js');
const links = require('./links.js');
const modules = require('./modules.js');
const notes = require('./notes.js');


router.get('/entries', entries.getAllEntries);
router.get('/entries/max', entries.getMaxEntryId);
router.get('/entries/:linked_ref_id/links', links.getEntryLinks);
router.get('/entries/:note_ref_id/notes', notes.getEntryNotes);
router.put('/entries/:id/notes', entries.updateEntryNote);
router.post('/entries', entries.addEntry);
router.post('/entries/:linked_ref_id/links', links.addLinks);

router.get('/errors', errors.getAllErrors);
router.get('/errors/max', errors.getMaxErrorId);
router.get('/errors/:linked_ref_id/links', links.getErrorLinks);
router.post('/errors', errors.addError);
router.post('/errors/:linked_ref_id/links', links.addLinks);


router.get('/videos', videos.getAllVideos);
router.post('/videos', videos.addVideo);

router.get('/projects', projects.getAllProjects);
router.get('/projects/max', projects.getMaxProjectId);
router.post('/projects', projects.addProject)

router.get('/keywords', keywords.getAllKeywords);
router.post('/keywords/multiple', keywords.addMultipleKeywords);

router.post('/links/multiple', links.addMultipleLinks);


router.get('/notes', notes.getAllNotes);
router.post('/notes', notes.addNotes);


router.get('/stacktypes', stacktypes.getAllStackTypes);
// router.post('/stacktypes', keywords.addStackType)

router.get('/modules', modules.getAllModules);




module.exports = router;
