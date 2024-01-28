const router = require('express').Router();
const userProfileRoutes = require('./userProfile-routes');

router.use('/userProfile', userProfileRoutes);

module.exports = router;