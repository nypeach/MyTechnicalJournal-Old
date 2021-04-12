const express = require('express');
const router = express.Router();
const entries = require('./entries.js');
const videos = require('./videos.js');
const projects = require('./projects.js');
const keywords = require('./keywords.js');
const stacktypes = require('./stacktypes.js');
const links = require('./links.js');


router.get('/entries', entries.getAllEntries);
router.get('/entries/:linked_ref_id/links', links.getEntryLinks);
// router.post('/entries', entries.addEntry);
// router.post('/entries/:linked_ref_id/links', links.postEntryLinks);


router.get('/videos', videos.getAllVideos);
// router.post('/videos', videos.addVideo)

router.get('/projects', projects.getAllProjects);
// router.post('/projects', projects.addProject)

router.get('/keywords', keywords.getAllKeywords);
router.post('/keywords', keywords.addKeyword);


router.post('/keywords', keywords.addKeyword);

router.get('/stacktypes', stacktypes.getAllStackTypes);
// router.post('/stacktypes', keywords.addStackType)




module.exports = router;
