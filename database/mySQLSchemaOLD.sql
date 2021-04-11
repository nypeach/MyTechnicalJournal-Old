CREATE DATABASE mtj;

USE mtj;

CREATE TABLE keywords (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  keyword VARCHAR(25),
  keyword_ref VARCHAR(20),
  keyword_ref_id VARCHAR(20),
  tech_stack_type_id INT NOT NULL
);


ALTER TABLE journal ADD FOREIGN KEY (project_id) REFERENCES project(id);


CREATE TABLE tech_stack_type (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(60)
)

CREATE TABLE links (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url_short VARCHAR(60),
  url_link VARCHAR(256),
  linked_ref VARCHAR(20),
  linked_ref_id INT;
);

CREATE TABLE videos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  video_short VARCHAR(60),
  video_link VARCHAR(256),
  keywords TEXT
);

INSERT INTO videos (video_short, video_link, keywords)
VALUES ('ReactJS Higher Order Components (Part 1)', 'https://www.youtube.com/watch?v=B6aNv8nkUSw', 'React');

CREATE TABLE source (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  source VARCHAR(60)
);

CREATE TABLE errors (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  error_code VARCHAR(25),
  error_text VARCHAR(256),
  error_source_id INT,
  notes TEXT,
  keywords JSON,
  links JSON
);

ALTER TABLE errors ADD FOREIGN KEY (error_source_id) REFERENCES source(id);

CREATE TABLE project (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  project_name VARCHAR(60),
  project_description VARCHAR(120),
  project_start_date DATE,
  project_end_date DATE,
  keywords JSON,
  links JSON
);

CREATE TABLE journal (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  entry_date DATETIME NOT NULL,
  title VARCHAR(60),
  project_id INT NOT NULL,
  challenge TEXT,
  action_taken TEXT,
  lesson_learned TEXT,
  keywords JSON,
  links JSON
);

CREATE TABLE module (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  tableName VARCHAR(10),
  title VARCHAR(20),
  pathName VARCHAR(20),
  icon TEXT
);

ALTER TABLE journal ADD FOREIGN KEY (project_id) REFERENCES project(id);

LOAD DATA INFILE '/Users/jodisilverman/seip2101/test.csv'
INTO TABLE journal
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;


INSERT INTO module (tableName, title, pathName, icon)
VALUES ('tutorials', 'Tutorials', '/tutorials', '<i class="fas fa-file-code"></i>');



VALUES ('keywords', 'Journal Entries', '/journal', '<i class="fas fa-book-open"></i>');
VALUES ('links', 'Journal Entries', '/journal', '<i class="fas fa-book-open"></i>');

VALUES ('tutorials', 'Journal Entries', '/journal', '<i class="fas fa-book-open"></i>');
