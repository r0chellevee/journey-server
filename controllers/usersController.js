const knex = require('../knex.js');

module.exports = {
  getAllUsers: (req, res) => {
    return knex('users').select('*')
    .then((users) => {
      res.status(200).json({
        status: 'success',
        data: users
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  },
  getUserId: (req, res) => {
    let query = req.query.name
    return knex('users').where('name', query).select('id')
    .then((userId) => {
      res.status(200).send({
        status: 'success',
        user: userId[0]
      })
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  },
  addUser: (req, res) => {
    return knex('users').insert(req.body)
    .then(() => {
      res.json({
        status: 'success',
        data: 'User Added!'
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  },

};