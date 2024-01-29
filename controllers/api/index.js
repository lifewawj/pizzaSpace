const router = require('express').Router();
const user_route = require('./routes/user-routes');
const userProfile_route = require('./routes/userProfile-routes');
const post_route = require('./routes/post-routes');


router.use('/user', user_route);
router.use('/userProfile', userProfile_route);
router.use('/post', post_route);

module.exports = router;