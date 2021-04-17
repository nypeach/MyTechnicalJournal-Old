const connection = require('../../db/index.js');

const getAllProjects = (req, res) => {
  const sql = `SELECT id, title, project_description, DATE_FORMAT(project_start_date, "%Y-%m-%d") AS project_start_date, DATE_FORMAT(project_end_date, "%Y-%m-%d") AS project_end_date, FORMAT(project_budget,2,"en_US") AS project_budget , tech_front_end, tech_back_end, tech_related, github_url FROM mtj.projects;`

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};

const getMaxProjectId = (req, res) => {
  const sql = `SELECT max(id) AS max FROM projects`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};

const addProject = (req, res) => {
  console.log('PROJECTS POST REQ.BODY', req.body);
  const sql =
    `INSERT INTO mtj.projects
    (
      title,
      project_description,
      project_start_date,
      project_end_date,
      project_budget,
      tech_front_end,
      tech_back_end,
      tech_related,
      github_url)
  VALUES
    (
      "${req.body.title}",
      "${req.body.project_description}",
      "${req.body.project_start_date}",
      "${req.body.project_end_date}",
      ${req.body.project_budget},
      "${req.body.tech_front_end}",
      "${req.body.tech_back_end}",
      "${req.body.tech_related}",
      "${req.body.github_url}");`

  console.log('SQL STMT', sql);

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
}




module.exports = {
  getAllProjects,
  getMaxProjectId,
  addProject
};