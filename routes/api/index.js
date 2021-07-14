const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

//add prefic od /pizzas to routes created in 'pizza-routes.js'
router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);

module.exports = router;