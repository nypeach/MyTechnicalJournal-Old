CREATE DATABASE mytj;

USE mytj;

CREATE TABLE modules(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  module varchar(10) NOT NULL,
  description TEXT,
  pathName varchar(20) NULL,
  icon TEXT
)
CREATE TABLE stacktypes(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type varchar(20) NOT NULL
)

CREATE TABLE keywords(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  keyword varchar(25) NOT NULL UNIQUE,
  stacktype_id INT NOT NULL,
  FOREIGN KEY (stacktype_id) REFERENCES stacktypes(id)
)

CREATE TABLE links (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url_short varchar(60) DEFAULT NULL,
  url_link varchar(256) DEFAULT NULL,
  linked_ref varchar(20) DEFAULT NULL,
  linked_ref_id int DEFAULT NULL,
  KEY `link_from` (`linked_ref`,`linked_ref_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE notes (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  note TEXT NOT NULL,
  note_ref varchar(20) DEFAULT NULL,
  note_ref_id int DEFAULT NULL,
  KEY `note_from` (`note_ref`,`note_ref_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;





-------------------------------------------------------------------------------------------------------------------------------
-- INSERT INTO MODULES --------------------------------------------------------------------------------------------------------
INSERT INTO modules(module, description, pathName, icon) VALUES ("entries", "Enter your challenges, actions, results and/or lessons learned.  Related modules include projects, errors, notes, links, videos and keywords.", "posts", "\"<i className=\"fas fa-book-open fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("projects", "Record key information about your Projects including your tech stack. Related modules include keywords, entries, links, documents.", "projects", "\"<i className=\"fas fa-tasks fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("errors", "Record and Look up errors by error code, source and description. Related modules include keywords.", "errors", "\"<i className=\"fas fa-exclamation-triangle fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("videos", "Record and look up your favorite videos.  Related modules include keywords.", "videos", "\"<i className=\"fab fa-youtube fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("notes", "Use full WYSIWYG editing to add notes to related records.", "notes", "\"<i className=\"fas fa-file-contract fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("tutorials", "Create full tutorials with embedded images and videos", "tutorials", "\"<i className=\"fas fa-file-code fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("keywords", "Add multiple keywords to projects, videos, notes, tutorials.  Used as basis for Search Bar.", "keywords", "\"<i class=\"fas fa-search\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("links", "Add web links to entries, notes, tutorials.", "links", "\"<i class=\"fas fa-link\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("stackType", "Add the different types of items in the tech stack.", "techstacktypes", "\"<i class=\"fas fa-layer-group\"></i>\n<i class=\"fas fa-layer-group\"></i>\n\"<i class=\"fas fa-layer-group\"></i>\""");

-------------------------------------------------------------------------------------------------------------------------------
-- INSERT INTO STACK TYPE -----------------------------------------------------------------------------------------------------
INSERT INTO stacktypes(type) VALUES ("Testing");
INSERT INTO stacktypes(type) VALUES ("Operating System");
INSERT INTO stacktypes(type) VALUES ("Languages");
INSERT INTO stacktypes(type) VALUES ("PaaS");
INSERT INTO stacktypes(type) VALUES ("Database");
INSERT INTO stacktypes(type) VALUES ("Server-Side");
INSERT INTO stacktypes(type) VALUES ("Client-Side");
INSERT INTO stacktypes(type) VALUES ("Library");
INSERT INTO stacktypes(type) VALUES ("Related");

-------------------------------------------------------------------------------------------------------------------------------
-- INSERT INTO KEYWORDS -----------------------------------------------------------------------------------------------------
INSERT INTO keywords(keyword, stacktype_id) VALUES("Chai", 1);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Jest", 1);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Mocha", 1);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Android", 2);
INSERT INTO keywords(keyword, stacktype_id) VALUES("FreeBSD", 2);
INSERT INTO keywords(keyword, stacktype_id) VALUES("IBM AIX", 2);
INSERT INTO keywords(keyword, stacktype_id) VALUES("iOS", 2);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Linux", 2);
INSERT INTO keywords(keyword, stacktype_id) VALUES("macOS", 2);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Microsoft Windows", 2);
INSERT INTO keywords(keyword, stacktype_id) VALUES("OpenBSD", 2);
INSERT INTO keywords(keyword, stacktype_id) VALUES("SmartOS", 2);
INSERT INTO keywords(keyword, stacktype_id) VALUES("z/OS", 2);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Go", 3);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Java", 3);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Javascript", 3);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Kotlin", 3);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Python", 3);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Ruby", 3);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Swift", 3);
INSERT INTO keywords(keyword, stacktype_id) VALUES("TypeScript", 3);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Acquia Cloud", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Amazon AWS", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Amazon Elastic Beanstalk", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("App42 PaaS", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("AppAgile", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("AppFog", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("AppHarbor", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Google App Engine", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Heroku", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Mendix", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Microsoft Azure", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("OpenShift", 4);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Fivetran", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES("MariaDB", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Microsoft SQL Server", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES("MongoDB", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES("MySQL", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Oracle", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES("PostgresSQL", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Redis", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Redshift", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Snowflake", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Splunk", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Talend", 5);
INSERT INTO keywords(keyword, stacktype_id) VALUES(".NET", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Apache", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("AWS", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Azure", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("C#", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("C++", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("CloudFlare", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Django", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Express.js", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Fastly", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Firebase.com", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Google Cloud", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Laravel", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Less", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Nginx", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Node.js", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Parse.com", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("PHP", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("REST", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Ruby on Rails", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Sass", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Spring", 6);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Angular", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Backbone.js", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Bootstrap", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("CSS", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Ember.js", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("ES5", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("GraphQL", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Grunt", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Gulp", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("HTML", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("JSON", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Meteor.js", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Next.js", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("React", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Redux", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Storybook", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("Vue", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("W3.CSS", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("XML", 7);
INSERT INTO keywords(keyword, stacktype_id) VALUES("jQuery", 8);