-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: mtj
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `entries`
--

LOCK TABLES `entries` WRITE;
/*!40000 ALTER TABLE `entries` DISABLE KEYS */;
INSERT INTO `entries` VALUES (1,'2020-03-30 00:00:00','MySQL Login Issue',1,' I can\'t seem to get MySQL connected to AWS Server.  I can\'t seem to get MySQL connected to AWS Server.',' I tried changing the ports.  Making sure everything was setup correctly.  Opening up public ports.  Setting the ports to 3306.  I can\'t seem to get MySQL connected to AWS Server.  I can\'t seem to get MySQL connected to AWS Server.',' I needed to create a MySQL user that can be connected to any host not just local host.  I can\'t seem to get MySQL connected to AWS Server.  I can\'t seem to get MySQL connected to AWS Server.  I can\'t seem to get MySQL connected to AWS Server.',NULL,NULL,NULL),(2,'2020-03-29 00:00:00','Some Other Challenge Title',1,' Some other Challenge',' Some other actions taken.',' Some other lesson_learned',NULL,NULL,NULL),(5,'2021-03-31 08:49:49','Another Test for New Entries',1,'This one is to See if the Journal Entries will automatically update','Added code to blank out these fields','Will see if Journal Entries on the Side here update.',NULL,NULL,NULL),(6,'2021-03-31 08:52:30','Stephen Hyde Hacking Test',1,'Attempting to get the Journal Entries on the Right to update when I add a new entry','Added key as items  plus length of key','We will see',NULL,NULL,NULL),(10,'2021-03-31 11:23:15','Blarg',1,'Blarg','Blarg','Glarbg',NULL,NULL,NULL),(12,'2021-03-31 12:13:57','Change the Color of SVG',1,'I can\'t seem to change the color of SVG image.','Look at the web.  Found a bunch of different articles.  Found an article that converts Hex color to filter color.','Use SVG filter function.  ex: .svg {filter: invert(100%) sepia(92%) saturate(889%) hue-rotate(15deg) brightness(76%) contrast(100%);}',NULL,NULL,NULL),(19,'2021-03-31 20:41:09','Getting Search Bar on Same Line as Heading',1,'I can\'t seem to line up the search bar with the heading on this page right here.','Searched the web and found several articles.','Create a flex-box and some special css styling so each column can have display set to inline.',NULL,NULL,NULL),(22,'2021-04-01 10:19:08','Testing this Journal',1,'To make sure this works for my demo.','Writing this awesome code.','It Works!!',NULL,NULL,NULL),(23,'2021-04-15 20:40:43','Hallelujah',1,'Hallelujah','Hallelujah','Hallelujah','Chai','<pre class=\"ql-syntax\" spellcheck=\"false\">.modal:nth-of-type(even) {\n&nbsp; &nbsp; z-index: 1052 !important;\n}\n.modal-backdrop.show:nth-of-type(even) {\n&nbsp; &nbsp; z-index: 1051 !important;\n}\n</pre>',NULL),(29,'2021-04-15 20:52:27','Hopefully the Final Test',2,'Hopefully the Final Test','Hopefully the Final Test','Hopefully the Final Test','Android','<pre class=\"ql-syntax\" spellcheck=\"false\">.modal:nth-of-type(even) {\n&nbsp; &nbsp; z-index: 1052 !important;\n}\n.modal-backdrop.show:nth-of-type(even) {\n&nbsp; &nbsp; z-index: 1051 !important;\n}\n</pre>',NULL),(31,'2021-04-15 21:30:49','Testing with words and Code Block',2,'Testing with words and Code Block','Testing with words and Code Block','Testing with words and Code Block','Chai,FreeBSD','<p>Testing with Words and Code Block</p><pre class=\"ql-syntax\" spellcheck=\"false\">.modal:nth-<span class=\"hljs-keyword\">of</span>-<span class=\"hljs-function\"><span class=\"hljs-title\">type</span>(<span class=\"hljs-params\">even</span>)</span> {\n&nbsp; &nbsp; z-index: <span class=\"hljs-number\">1052</span> !important;\n}\n.modal-backdrop.show:nth-<span class=\"hljs-keyword\">of</span>-<span class=\"hljs-function\"><span class=\"hljs-title\">type</span>(<span class=\"hljs-params\">even</span>)</span> {\n&nbsp; &nbsp; z-index: <span class=\"hljs-number\">1051</span> !important;\n}\n&nbsp;&nbsp;\n</pre><p>We shall see how that goes</p><p><br></p><pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; array.length; i++) {\n  <span class=\"hljs-built_in\">console</span>.log(array[i]);\n}\n</pre>',NULL),(32,'2021-04-15 21:32:24','Testing with Just Code Block',2,'Testing with Just Code Block','Testing with Just Code Block','Testing with Just Code Block','Jest','<pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; array.length; i++) {\n  <span class=\"hljs-built_in\">console</span>.log(array[i]);\n}\n</pre>',NULL),(33,'2021-04-15 22:45:18','Lifting State to Pass Props to Parent',3,'Getting the Form Modal to pass input back to the parent.','Researched like crazy.','','CSS,Modal,React,State','<p>It\'s not easy to pass data from child to parent.  However, it is very easy to \"Lift State Up\"</p><p><strong class=\"ql-size-large\">First Things First</strong></p><ul><li><span class=\"ql-size-large\">Test the environment</span></li><li><span class=\"ql-size-large\">Test it well</span></li></ul><pre class=\"ql-syntax\" spellcheck=\"false\">class TemperatureInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleChange = this.handleChange.bind(this);\n  }\n\n  handleChange(e) {\n\n    this.props.onTemperatureChange(e.target.value);\n  }\n\n  render() {\n\n    const temperature = this.props.temperature;\n    const scale = this.props.scale;\n    return (\n      &lt;fieldset&gt;\n        &lt;legend&gt;Enter temperature in {scaleNames[scale]}:&lt;/legend&gt;\n        &lt;input value={temperature}\n               onChange={this.handleChange} /&gt;\n      &lt;/fieldset&gt;\n    );\n  }\n}\n</pre>',NULL),(34,'2021-04-15 22:49:04','Testing another code block',3,'','','','Chai','<pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; array.length; i++) {\n  <span class=\"hljs-built_in\">console</span>.log(array[i]);\n}\n</pre>',NULL),(35,'2021-04-15 22:51:34','One Last Test Before Bed',3,'','','','Chai','<pre class=\"ql-syntax\" spellcheck=\"false\">class TemperatureInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleChange = this.handleChange.bind(this);\n  }\n\n  handleChange(e) {\n\n    this.props.onTemperatureChange(e.target.value);\n  }\n\n  render() {\n\n    const temperature = this.props.temperature;\n    const scale = this.props.scale;\n    return (\n      &lt;fieldset&gt;\n        &lt;legend&gt;Enter temperature in {scaleNames[scale]}:&lt;/legend&gt;\n        &lt;input value={temperature}\n               onChange={this.handleChange} /&gt;\n      &lt;/fieldset&gt;\n    );\n  }\n}\n</pre>',NULL),(39,'2021-04-16 11:44:56','Testing to see about If this New Form Works',NULL,'','','','',NULL,NULL),(40,'2021-04-16 11:46:55','Testing Chai New Journal Entry Entry',NULL,'','','','',NULL,NULL),(41,'2021-04-16 11:48:16','Testing this New Update Function',NULL,'','','','',NULL,NULL),(42,'2021-04-16 12:17:00','Testing if Project Name Also Comes In',2,'Testing if Project Name Also Comes In for The Views','undefined','undefined','Chai',NULL,'Front End Capstone'),(43,'2021-04-16 12:56:34','Blaj',2,'Vlsdfnwpvb','undefined','undefined','Chai',NULL,'Front End Capstone'),(44,'2021-04-17 09:29:02','Testing to see if New Journal Entry Shows up after',5,'','undefined','undefined','FreeBSD,Javascript,Blarg',NULL,'Testing Projects'),(45,'2021-04-18 11:27:34','April 18th Test ',4,'See if comes through after and on search','undefined','undefined','Chai','<p>blarg</p>','Cow List');
/*!40000 ALTER TABLE `entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `errors`
--

LOCK TABLES `errors` WRITE;
/*!40000 ALTER TABLE `errors` DISABLE KEYS */;
INSERT INTO `errors` VALUES (1,'ERROR 1146 (42S02)','Table \'sometable\' doesn\'t exist','MySQL','<p>This is a new test</p><pre class=\"ql-syntax\" spellcheck=\"false\">mysql&gt; SELECT * FROM sometable;\nERROR <span class=\"hljs-number\">1146</span> (<span class=\"hljs-number\">42</span>S02): Table <span class=\"hljs-symbol\">\'sometable</span>\' doesn<span class=\"hljs-symbol\">\'t</span> exist\n</pre><p>the apostrophe\'s need to be escaped</p>','MySQL'),(2,'1064','You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ','MySQL','<p>This is an error message when there is something wrong with the code.  What is interesting here is that MySQL indicated there was something wrong with the JSON but actually it was that I didn\'t have quotes around the code.</p><p><br></p><p><strong>INCORRECT</strong></p><pre class=\"ql-syntax\" spellcheck=\"false\">VALUES\n    (\n      <span class=\"hljs-string\">\"${req.body.error_code}\"</span>,\n      <span class=\"hljs-variable\">${</span>req.body.error_text},\n      <span class=\"hljs-string\">\"${req.body.error_source}\"</span>,\n      <span class=\"hljs-variable\">${</span>JSON.stringify(req.body.notes)},\n      <span class=\"hljs-string\">\"${req.body.keywords}\"</span>\n      );<span class=\"hljs-string\">`\n</span></pre><p><br></p><p><strong>CORRECT</strong></p><pre class=\"ql-syntax\" spellcheck=\"false\">VALUES\n    (\n      \"${req.body.error_code}\",\n      \"${req.body.error_text}\",\n      \"${req.body.error_source}\",\n      ${JSON.stringify(req.body.notes)},\n      \"${req.body.keywords}\"\n      );`\n\n\n</pre>','MySQL,Table'),(3,'1111','This is a dummy text so delete','MySQL','<p>delete</p>','MySQL'),(4,'1234','Test Error Message to Test Links','MySQL',NULL,'MySQL'),(5,'9999','This should be it','MySQL',NULL,'MySQL'),(11,'88888','Checking to see if this gets entered before onClick','MySQL',NULL,'MySQL'),(12,'1450','lrkgheo herpbvn','Android',NULL,'Jest'),(13,'1164','Testing to See if Error Code Shows Up After','MySQL',NULL,'MySQL,Insert'),(14,'3333','Testing If Works','Chai','<p>Test</p>','Chai');
/*!40000 ALTER TABLE `errors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `keywords`
--

LOCK TABLES `keywords` WRITE;
/*!40000 ALTER TABLE `keywords` DISABLE KEYS */;
INSERT INTO `keywords` VALUES (1,'Chai',1),(2,'Jest',1),(3,'Mocha',1),(4,'Android',2),(5,'FreeBSD',2),(6,'IBM AIX',2),(7,'iOS',2),(8,'Linux',2),(9,'macOS',2),(10,'Microsoft Windows',2),(11,'OpenBSD',2),(12,'SmartOS',2),(13,'z/OS',2),(14,'Go',3),(15,'Java',3),(16,'Javascript',3),(17,'Kotlin',3),(18,'Python',3),(19,'Ruby',3),(20,'Swift',3),(21,'TypeScript',3),(22,'Acquia Cloud',4),(23,'Amazon AWS',4),(24,'Amazon Elastic Beanstalk',4),(25,'App42 PaaS',4),(26,'AppAgile',4),(27,'AppFog',4),(28,'AppHarbor',4),(29,'Google App Engine',4),(30,'Heroku',4),(31,'Mendix',4),(32,'Microsoft Azure',4),(33,'OpenShift',4),(34,'Fivetran',5),(35,'MariaDB',5),(36,'Microsoft SQL Server',5),(37,'MongoDB',5),(38,'MySQL',5),(39,'Oracle',5),(40,'PostgresSQL',5),(41,'Redis',5),(42,'Redshift',5),(43,'Snowflake',5),(44,'Splunk',5),(45,'Talend',5),(46,'.NET',6),(47,'Apache',6),(48,'AWS',6),(49,'Azure',6),(50,'C#',6),(51,'C++',6),(52,'CloudFlare',6),(53,'Django',6),(54,'Express.js',6),(55,'Fastly',6),(56,'Firebase.com',6),(57,'Google Cloud',6),(58,'Laravel',6),(59,'Less',6),(60,'Nginx',6),(61,'Node.js',6),(62,'Parse.com',6),(63,'PHP',6),(64,'REST',6),(65,'Ruby on Rails',6),(66,'Sass',6),(67,'Spring',6),(68,'Angular',7),(69,'Backbone.js',7),(70,'Bootstrap',7),(71,'CSS',7),(72,'Ember.js',7),(73,'ES5',7),(74,'GraphQL',7),(75,'Grunt',7),(76,'Gulp',7),(77,'HTML',7),(78,'JSON',7),(79,'Meteor.js',7),(80,'Next.js',7),(81,'React',7),(82,'Redux',7),(83,'Storybook',7),(84,'Vue',7),(85,'W3.CSS',7),(86,'XML',7),(87,'jQuery',8),(88,'Bluebird',8),(89,'Underscore.js',8),(90,'Lodash',8),(91,'MySQL Workbench',5),(92,'AJAX',6),(98,'Blarg',7),(99,'New Test',1),(100,'Jihang',2),(101,'Micah',NULL),(102,'Loren',NULL),(103,'Jodi',NULL),(104,'Rylee',NULL),(105,'Tootsie',NULL),(106,'Hershey',NULL),(113,'Casey',NULL),(114,'Curley',NULL),(115,'Wendy',NULL),(116,'Juan',NULL),(125,'Modal',NULL),(126,'State',NULL),(127,'Table',NULL),(128,'Quill.js',NULL),(129,'Editor',NULL),(130,'Text Editor',NULL),(131,'Tutorial',NULL),(132,'useState',NULL),(133,'Hooks',NULL),(134,'Janet',NULL),(135,'Bob',NULL),(136,'Bill',NULL),(137,'Insert',NULL),(138,'Flexbox',NULL),(139,'React-Select',NULL);
/*!40000 ALTER TABLE `keywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `links`
--

LOCK TABLES `links` WRITE;
/*!40000 ALTER TABLE `links` DISABLE KEYS */;
INSERT INTO `links` VALUES (1,'test','test','entries',1),(2,'TestUrl','https://www.mysqltutorial.org/mysql-index/mysql-composite-index/','entries',1),(3,'TestUrl','https://www.mysqltutorial.org/mysql-index/mysql-composite-index/','entries',1),(4,'TestUrl','https://www.mysqltutorial.org/mysql-index/mysql-composite-index/','entries',2),(5,'New Link','http://localhost:8080/?urlShort=test&urlLink=test','entries',2),(6,'Hex to CSS Filter Generator','https://tests.christianoliff.com/hex-to-css-filter-generator/','entries',12),(7,'Using CSS to Change SVG Colors','https://medium.com/@charlotte.pearce1984/using-css-filters-to-change-svg-colours-2b4887c1a5db','entries',12),(8,'H1 and H2 Tags on Same Line','https://css-tricks.com/forums/topic/h1-and-h2-tags-on-same-line/','entries',19),(9,'Open Modal from Another Modal','https://www.codeply.com/go/NiFzSCukVl/bootstrap-4-open-modal-from-another-modal','entries',23),(10,'Modal in a Modal','https://www.codeply.com/go/NiFzSCukVl/bootstrap-4-open-modal-from-another-modal','entries',23),(11,'React Forms','https://reactjs.org/docs/forms.html','entries',23),(12,'Modal in a Modal','https://www.codeply.com/go/NiFzSCukVl/bootstrap-4-open-modal-from-another-modal','entries',23),(13,'React Forms','https://reactjs.org/docs/forms.html','entries',23),(14,'Modal in a Modal','https://www.codeply.com/go/NiFzSCukVl/bootstrap-4-open-modal-from-another-modal','entries',23),(15,'React Forms','https://reactjs.org/docs/forms.html','entries',23),(16,'Lifting the State Up in React','https://reactjs.org/docs/lifting-state-up.html','entries',33),(17,'React Forms Basics','https://reactjs.org/docs/forms.html','entries',33),(18,'MySQL Error Reference','https://dev.mysql.com/doc/refman/8.0/en/error-message-elements.html','errors',36),(19,'MySQL Errors','https://dev.mysql.com/doc/refman/8.0/en/error-message-elements.html','errors',36),(20,'MySQL Test Link','https://dev.mysql.com/doc/refman/5.6/en/string-literals.html#character-escape-sequences','errors',36),(21,'Same Link Different Day','https://dev.mysql.com/doc/refman/5.6/en/string-literals.html#character-escape-sequences','errors',36),(22,'Test 1','https://dev.mysql.com/doc/refman/5.6/en/string-literals.html#character-escape-sequences','errors',36),(23,'Test 2','https://dev.mysql.com/doc/refman/5.6/en/string-literals.html#character-escape-sequences','errors',36),(24,'Test 3','https://dev.mysql.com/doc/refman/5.6/en/string-literals.html#character-escape-sequences','errors',5),(25,'Test 4','https://dev.mysql.com/doc/refman/5.6/en/string-literals.html#character-escape-sequences','errors',5);
/*!40000 ALTER TABLE `links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `modules`
--

LOCK TABLES `modules` WRITE;
/*!40000 ALTER TABLE `modules` DISABLE KEYS */;
INSERT INTO `modules` VALUES (1,'entries','Enter your challenges, actions, results and/or lessons learned.  Related modules include projects, errors, notes, links, videos and keywords.','posts','\'<i className=\"fas fa-book-open fa-3x\"></i>\''),(2,'projects','Record key information about your Projects including your tech stack. Related modules include keywords, entries, links, documents.','projects','\'<i className=\"fas fa-tasks fa-3x\"></i>\''),(3,'errors','Record and Look up errors by error code, source and description. Related modules include keywords.','errors','\'<i className=\"fas fa-exclamation-triangle fa-3x\"></i>\''),(4,'videos','Record and look up your favorite videos.  Related modules include keywords.','videos','\'<i className=\"fab fa-youtube fa-3x\"></i>\''),(5,'notes','Use full WYSIWYG editing to add notes to related records.','notes','\'<i className=\"fas fa-file-contract fa-3x\"></i>\''),(6,'tutorials','Create full tutorials with embedded images and videos','tutorials','\'<i className=\"fas fa-file-code fa-3x\"></i>\''),(7,'keywords','Add multiple keywords to projects, videos, notes, tutorials.  Used as basis for Search Bar.','keywords','\'<i class=\"fas fa-search\"></i>\''),(8,'links','Add web links to entries, notes, tutorials.','links','\'<i class=\"fas fa-link\"></i>\''),(9,'stackType','Add the different types of items in the tech stack.','techstacktypes','\'<i class=\"fas fa-layer-group\"></i>\n<i class=\"fas fa-layer-group\"></i>\n\'<i class=\"fas fa-layer-group\"></i>\'');
/*!40000 ALTER TABLE `modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (1,'Testing the Notes Form','Chai,IBM AIX,Janet,Bob,Bill','<p>Testing Testing 1,2,3</p><p>One day \'my prince will come\'</p><pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; array.length; i++) {\n  <span class=\"hljs-built_in\">console</span>.log(array[i]);\n}\n</pre><p>Today is the first day of the rest of your life.</p>'),(2,'Second Note Test','Chai,Jest','<p>Testing Testing 1-2-3</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;table&gt;\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">tr</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>Hello<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">td</span>&gt;</span>World<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">td</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">tr</span>&gt;</span>\n&lt;/table&gt;\n</pre><p>Second Test</p>'),(3,'Testing to See if 3rd Note Shows Up','Chai','<p>Testing, Testing, 1-2-3-4-5</p>'),(4,'Testing to See if Notes Show on Entry','Jest,iOS','<p>TEsting</p>'),(5,'Testing to Again Show on Entry','Chai,IBM AIX,iOS','<p>This is the note of notes</p>'),(6,'Testing to see if works after','Mocha','<p>Mocha</p>');
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (2,'Front End Capstone','Deliver a fully functional web application.','2021-02-15','2021-03-12',NULL,NULL,NULL,NULL,NULL),(3,'System Design Capstone','Create the Backend API for FEC','2021-03-15','2021-03-26',NULL,NULL,NULL,NULL,NULL),(4,'Cow List','Create a REACT Font End','2021-02-15','2021-02-16',NULL,NULL,NULL,NULL,NULL),(5,'Testing Projects','This is the project to test','2021-03-15','2021-04-18',50000.00,'Jest,Chai,iOS','FreeBSD,Linux','FreeBSD,OpenBSD,Ruby','https://github.com/nypeach/MyTechnicalJournal/'),(7,'Testing Project Entry','Testing Project Entry','2021-03-21','2021-04-15',10000.00,'Chai,FreeBSD,IBM AIX','Jest,iOS,macOS','Mocha,IBM AIX,Jest','https://github.com/nypeach/MyTechnicalJournal/'),(8,'Testing to See if Shows after Entry','Testing to See if Shows after Entry','2021-03-31','2021-03-31',50.00,'Chai','Chai','Chai','https://github.com/nypeach/MyTechnicalJournal/'),(9,'Testing Again to See if Project Gets Updated','Testing Again to See if Project Gets Updated','2021-03-21','2021-04-25',0.00,'Chai','Mocha','Android','https://github.com/nypeach/MyTechnicalJournal/'),(10,'Testing if Search works After','Testing if Search works After','2021-04-18','2021-04-18',50000.00,'Jest','Chai','Jest','https://github.com/JedWatson/react-select/issues/1537');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `source`
--

LOCK TABLES `source` WRITE;
/*!40000 ALTER TABLE `source` DISABLE KEYS */;
/*!40000 ALTER TABLE `source` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `stacktypes`
--

LOCK TABLES `stacktypes` WRITE;
/*!40000 ALTER TABLE `stacktypes` DISABLE KEYS */;
INSERT INTO `stacktypes` VALUES (1,'Testing'),(2,'Operating System'),(3,'Languages'),(4,'PaaS'),(5,'Database'),(6,'Server-Side'),(7,'Client-Side'),(8,'Library'),(9,'Related');
/*!40000 ALTER TABLE `stacktypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tech_stack_type`
--

LOCK TABLES `tech_stack_type` WRITE;
/*!40000 ALTER TABLE `tech_stack_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `tech_stack_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` VALUES (1,'ReactJS Higher Order Components (Part 1)','https://www.youtube.com/embed/B6aNv8nkUSw','React'),(2,'ReactJS Higher Order Components (Part 2)','https://www.youtube.com/embed/rsBQj6X7UK8','React'),(3,'ReactJS Higher Order Components (Part 3)','https://www.youtube.com/embed/l8V59zIdBXU','React'),(4,'React Text Editor Quill Tutorial','https://www.youtube.com/embed/AgreDlNaUn4','React,Quill.js,Editor,Text Editor'),(5,'React Learn useState in 15 Minutes','https://www.youtube.com/embed/O6P86uwfdR0','React,useState,State'),(6,'Practical React Hooks','https://www.youtube.com/embed/f687hBjwFcM','React,Hooks,useState'),(7,'Testing this Video to sEe if It will ','https://www.youtube.com/embed/6RhOzQciVwI','React'),(8,'Testing If Shows After Add','https://www.youtube.com/embed/Fn-lyNlqQag','Mocha'),(9,'Learning Mocha and Chai','https://www.youtube.com/embed/MLTRHc5dk6s','Mocha'),(10,'Flexbox in 20 Minutes','https://www.youtube.com/embed/JJSoEo8JSnc','CSS,Flexbox'),(11,'React-Select Introduction','https://www.youtube.com/embed/n02t9wvd6hs','React,React-Select'),(12,'Duplicate Delete React','https://www.youtube.com/embed/n02t9wvd6hs','React,React-Select'),(13,'Duplicate Again React','https://www.youtube.com/embed/n02t9wvd6hs','React,React-Select');
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-18 11:44:54
