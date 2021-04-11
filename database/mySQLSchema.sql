CREATE DATABASE mytj;

USE mytj;

CREATE TABLE modules(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  module varchar(10) NOT NULL,
  description TEXT,
  pathName varchar(20) NULL,
  icon TEXT
)
CREATE TABLE stackType(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type varchar(20) NOT NULL
)

CREATE TABLE keywords(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  keyword varchar(25) NOT NULL UNIQUE,
  stackTypeId INT NOT NULL,
  FOREIGN KEY (stackTypeId) REFERENCES stackType(id)
)



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
INSERT INTO stackType(type) VALUES ("Testing");
INSERT INTO stackType(type) VALUES ("Operating System");
INSERT INTO stackType(type) VALUES ("Languages");
INSERT INTO stackType(type) VALUES ("PaaS");
INSERT INTO stackType(type) VALUES ("Database");
INSERT INTO stackType(type) VALUES ("Server-Side");
INSERT INTO stackType(type) VALUES ("Client-Side");
INSERT INTO stackType(type) VALUES ("Library");
INSERT INTO stackType(type) VALUES ("Related");

-------------------------------------------------------------------------------------------------------------------------------
-- INSERT INTO KEYWORDS -----------------------------------------------------------------------------------------------------
INSERT INTO keywords(keyword, stackTypeId) VALUES("Chai", 1);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Jest", 1);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Mocha", 1);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Android", 2);
INSERT INTO keywords(keyword, stackTypeId) VALUES("FreeBSD", 2);
INSERT INTO keywords(keyword, stackTypeId) VALUES("IBM AIX", 2);
INSERT INTO keywords(keyword, stackTypeId) VALUES("iOS", 2);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Linux", 2);
INSERT INTO keywords(keyword, stackTypeId) VALUES("macOS", 2);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Microsoft Windows", 2);
INSERT INTO keywords(keyword, stackTypeId) VALUES("OpenBSD", 2);
INSERT INTO keywords(keyword, stackTypeId) VALUES("SmartOS", 2);
INSERT INTO keywords(keyword, stackTypeId) VALUES("z/OS", 2);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Go", 3);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Java", 3);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Javascript", 3);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Kotlin", 3);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Python", 3);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Ruby", 3);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Swift", 3);
INSERT INTO keywords(keyword, stackTypeId) VALUES("TypeScript", 3);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Acquia Cloud", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Amazon AWS", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Amazon Elastic Beanstalk", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("App42 PaaS", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("AppAgile", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("AppFog", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("AppHarbor", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Google App Engine", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Heroku", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Mendix", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Microsoft Azure", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("OpenShift", 4);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Fivetran", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES("MariaDB", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Microsoft SQL Server", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES("MongoDB", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES("MySQL", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Oracle", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES("PostgresSQL", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Redis", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Redshift", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Snowflake", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Splunk", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Talend", 5);
INSERT INTO keywords(keyword, stackTypeId) VALUES(".NET", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Apache", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("AWS", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Azure", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("C#", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("C++", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("CloudFlare", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Django", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Express.js", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Fastly", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Firebase.com", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Google Cloud", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Laravel", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Less", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Nginx", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Node.js", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Parse.com", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("PHP", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("REST", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Ruby on Rails", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Sass", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Spring", 6);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Angular", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Backbone.js", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Bootstrap", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("CSS", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Ember.js", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("ES5", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("GraphQL", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Grunt", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Gulp", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("HTML", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("JSON", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Meteor.js", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Next.js", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("React", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Redux", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Storybook", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("Vue", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("W3.CSS", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("XML", 7);
INSERT INTO keywords(keyword, stackTypeId) VALUES("jQuery", 8);