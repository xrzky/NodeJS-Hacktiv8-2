const router = require('express').Router();
const DataController = require('../controllers/dataController');
const authMiddleware = require('../middlewares/auth');

router.post('/login', DataController.signIn);
router.get('/articles', authMiddleware, DataController.getData);

module.exports = router;
