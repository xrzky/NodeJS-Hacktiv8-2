const { articles, users } = require('../data/data.json')
const { sign } = require('../helpers/jwt')

class DataController {
    static signIn (req, res) {
        try {
            const { email, password } = req.body
            const user = users.find((data) => data.email === email);
            if (user && user.password === password ) { 
              const token = sign({ id: user.id, email: user.email})
              res.status(200).json({ token })
            } else {
              throw error
            }
          } catch (error) {
            res.status(400).json({message: "email / password wrong"})
        }
    }

    static getData (req, res) {
        try {
          const article = articles.map((data) => data)
          if (!article) throw { name : "ArticleNotFound"};
          res.status(200).json(article)
        } catch (error) {
          if (error.name === 'ArticleNotFound') {
            res.status(404).json({ message: 'article not found' });
          } else {
            res.status(500).json({ message: 'internal server error'});
          }
        }
      }
  }
  
  module.exports = DataController;