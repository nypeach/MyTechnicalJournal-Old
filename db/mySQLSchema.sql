DROP DATABASE mtj;

CREATE DATABASE mtj;

USE mtj;

CREATE TABLE modules(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  module varchar(10) NOT NULL,
  description TEXT,
  pathName varchar(20) NULL,
  icon TEXT
);

CREATE TABLE stacktypes(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type varchar(20) NOT NULL
);

CREATE TABLE keywords(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  keyword varchar(25) NOT NULL UNIQUE,
  stacktype_id INT NOT NULL,
  FOREIGN KEY (stacktype_id) REFERENCES stacktypes(id)
);

CREATE TABLE links (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url_short varchar(60) DEFAULT NULL,
  url_link varchar(256) DEFAULT NULL,
  linked_ref varchar(20) DEFAULT NULL,
  linked_ref_id int DEFAULT NULL,
  KEY link_from (linked_ref, linked_ref_id)
);

CREATE TABLE notes (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(50) DEFAULT NULL,
  keywords text,
  notes text
);

CREATE TABLE entries (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  entry_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  title varchar(50) DEFAULT NULL,
  project_id int DEFAULT NULL,
  challenge text,
  keywords text,
  notes text,
  project_name varchar(60) DEFAULT NULL,
  KEY project_id (project_id)
);

CREATE TABLE errors (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  error_code varchar(25) DEFAULT NULL,
  error_text varchar(256) DEFAULT NULL,
  error_source varchar(25) DEFAULT NULL,
  notes text,
  keywords text
);

CREATE TABLE videos (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  video_short varchar(50) DEFAULT NULL,
  video_link varchar(256) DEFAULT NULL,
  keywords text
);

CREATE TABLE projects (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(50) DEFAULT NULL,
  project_description varchar(256) DEFAULT NULL,
  project_start_date date DEFAULT NULL,
  project_end_date date DEFAULT NULL,
  project_budget decimal(10,2) DEFAULT NULL,
  tech_front_end text,
  tech_back_end text,
  tech_related text,
  github_url text
);

INSERT INTO modules(module, description, pathName, icon) VALUES ("entries", "Enter your challenges, actions, results and/or lessons learned.  Related modules include projects, errors, notes, links, videos and keywords.", "posts", "\"<i className=\"fas fa-book-open fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("errors", "Record and Look up errors by error code, source and description. Related modules include keywords.", "errors", "\"<i className=\"fas fa-exclamation-triangle fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("videos", "Record and look up your favorite videos.  Related modules include keywords.", "videos", "\"<i className=\"fab fa-youtube fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("projects", "Record key information about your Projects including your tech stack. Related modules include keywords, entries, links, documents.", "projects", "\"<i className=\"fas fa-tasks fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("notes", "Use full WYSIWYG editing to add notes to related records.", "notes", "\"<i className=\"fas fa-file-contract fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("tutorials", "Create full tutorials with embedded images and videos", "tutorials", "\"<i className=\"fas fa-file-code fa-3x\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("keywords", "Add multiple keywords to projects, videos, notes, tutorials.  Used as basis for Search Bar.", "keywords", "\"<i class=\"fas fa-search\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("links", "Add web links to entries, notes, tutorials.", "links", "\"<i class=\"fas fa-link\"></i>\"");
INSERT INTO modules(module, description, pathName, icon) VALUES ("stacktype", "Add the different types of items in the tech stack.", "techstacktypes", "\"<i class=\"fas fa-layer-group\"></i>\n<i class=\"fas fa-layer-group\"></i>\n\"<i class=\"fas fa-layer-group\"></i>\"");

INSERT INTO stacktypes(type) VALUES ("Testing");
INSERT INTO stacktypes(type) VALUES ("Operating System");
INSERT INTO stacktypes(type) VALUES ("Languages");
INSERT INTO stacktypes(type) VALUES ("PaaS");
INSERT INTO stacktypes(type) VALUES ("Database");
INSERT INTO stacktypes(type) VALUES ("Server-Side");
INSERT INTO stacktypes(type) VALUES ("Client-Side");
INSERT INTO stacktypes(type) VALUES ("Library");
INSERT INTO stacktypes(type) VALUES ("Related");

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

INSERT INTO projects VALUES(1,"My Technical Journal", "My Technical Journal is a single place to organize and keep all of your projects, notes, lessons learned, videos, and links.", "2021-03-29", "2021-04-18", 0.00, "React,HTML,CSS,React-Select,Javascript,ES6", "Node.js,Javascript,Express.js,MySQL,REST", "Quill.js,Underscore.js", "https://github.com/nypeach/MyTechnicalJournal/");

INSERT INTO entries VALUES (1,'2021-04-18 13:35:52','Welcome to My Technical Journal!',1,'This is where you would typically write your challenges.','Welcome,Journal,Error Messages,Videos,Projects,Notes','<p>This is where you would put your lessons learned and any notes.  Don\'t forget to add links too!!</p><pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; array.length; i++) {\n  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">\'Welcome to My Technical Journal\'</span>);\n}\n</pre><p>You can add code blocks too!</p>','My Technical Journal');

INSERT INTO links VALUES(1,"My Technical Journal","https://github.com/nypeach/MyTechnicalJournal/","entries",1);
INSERT INTO links VALUES(2,"React Binding Functions","https://reactjs.org/docs/faq-functions.html","errors",1);

INSERT INTO errors VALUES (1,'Uncaught TypeError','Uncaught TypeError: Cannot read property \'setState\' of undefined','React','<p>This is a message that frequently comes up when you forget to bind your functions in a React Stateful Component.</p><pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">Foo</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Component</span> </span>{\n  <span class=\"hljs-function\"><span class=\"hljs-title\">constructor</span>(<span class=\"hljs-params\">props</span>)</span> {\n    <span class=\"hljs-built_in\">super</span>(props);\n    <span class=\"hljs-built_in\">this</span>.handleClick = <span class=\"hljs-built_in\">this</span>.handleClick.bind(<span class=\"hljs-built_in\">this</span>);\n  }\n  <span class=\"hljs-function\"><span class=\"hljs-title\">handleClick</span>()</span> {\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">\'Click happened\'</span>);\n  }\n  <span class=\"hljs-function\"><span class=\"hljs-title\">render</span>()</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> <span class=\"hljs-attr\">onClick</span>=<span class=\"hljs-string\">{this.handleClick}</span>&gt;</span>Click Me<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>;\n  }\n}\n</pre><p>make sure to add this to your Class Constructor</p>','React,State,SetState');

INSERT INTO notes VALUES (1,'This is a Full-Text Editor!!','Welcome,Journal,Start Here','<p>Normal Plain Text, <strong>Bold, </strong><em>Italic</em><strong><em>, </em></strong><u>Underline</u>, <s>Strikethrough</s></p><pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; array.length; i++) { <br>  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">\'Welcome to My Technical Journal\'</span>); <br>} </pre><ol class=\"ql-size-medium\"><li>Numbered List</li><li>Numbered List</li></ol><ul class=\"ql-size-medium\"><li>Bulleted List</li><li>Bulleted List</li></ul><p>X<sub>2</sub> subscript, X<sup>2 </sup>superscript</p><p>some regular text</p><p class=\"ql-indent-1\">indented</p><p>back to normal</p><p><span class=\"ql-size-small\">small, </span>Normal, <span class=\"ql-size-large\">Large, </span><span class=\"ql-size-huge\">Huge</span></p><p><span style=\"color: rgb(230, 0, 0);\">You can change the color of the text, </span><span style=\"background-color: rgb(255, 255, 0);\">You can also highlight text</span></p><p>This is Sans Serif, <span class=\"ql-font-serif\">This is Serif, </span><span class=\"ql-font-monospace\">This is monospace</span></p><p>Left Justified</p><p class=\"ql-align-center\">Center Justified</p><p class=\"ql-align-right\">Right Justified</p><p><a href=\"https://github.com/nypeach/MyTechnicalJournal/\" rel=\"noopener noreferrer\" target=\"_blank\">Hyperlink to My Technical Journal</a>       <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAppJREFUWIXtl11IU2Ecxn/Hc/aRLpezLW1SYFGUJBgWEZl0pxEFBUGJdRN4k5UUeicRXURJCCEEYdgHVAR9XFREUFGQURdCaUg0kmiZm86p06b7ON3oaLzbPGdO7MLn8nn/73N+8H79j9RbVqOywMpaaAAAJZEpmYwsKV0LkkTI7SXk9qQVLikyxmInisNGZNBPsLdPG4Rp3SqK2ppQ8q0xL/C2i1+NV1AnpzQDmNavxnm5AUPh8pg38aGHnydaUKdCcbXCcthqd8cBAFgqyihoPqYZQLZacLacigMAyN5aQs62TUK9AKHY8xIG51Zvx7p3pyaIgnN1GJz2hGPKCtvsEKlkbziMnJebssayqxxLRVnyAkm0dEHIVgv2+oNJx7PMRhyna/RE6ocAsO6rJLt8Q8Kx/Lr9GFYmXoaMQiBJOJqOIilynG1aU0ReTbXuuPQgYh+sigdrPCKAzSsEQH7dgdgJsO7ZQfaWjelGaYMIfvlO9M9k/ESzEceZWuTcHOwnDwlzQm5vZiHCA0P42h8LvqVyM0VtTcg28dgOXOjILASA79ZTpvr6Bd9cUix4o8/eMd75KfMQaiiM5+KNWeuigQm8rXc0A+iCABh/383Yy48pa7ytdwl7h+cPAsBz6bawSWcU7Hbhf/RKb6R+iPDAEL7r4iZVIxF+n2+HqP5GLa17wndT3KS+jidMfv2RTlx6EGooTH/zVcKeYYiqjD3vZOjag7QAIEl7p0XBbheuqnqyzEaiQe0dVyLNudGdK0BGIDKhRYgZLULMSICIjI4LRZGRgP5kFaJjE2KWX8ySjxeWnv3XCH7+hrxsKZJBITI8SuBNF4Nt95O+F6kU7HGhTPcaIbcX/70XjDx8DWr81S4t/pVP67+A+Asjh8fpgkKyQwAAAABJRU5ErkJggg==\"> insert an image</p><p>Even embed a video</p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/n02t9wvd6hs?showinfo=0\"></iframe><p><br></p><p><br></p>');

INSERT INTO videos VALUES (1,'ReactJS Higher Order Components (Part 1)','https://www.youtube.com/embed/B6aNv8nkUSw','React,Higher Order Components');