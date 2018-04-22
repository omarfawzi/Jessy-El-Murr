var router = require('express')();
require('express-reverse')(router);
var ControllerFactory = require('../factories/ControllerFactory');

router.get('biography_api','/biography/get',(res,req) => {
    new ControllerFactory().getController('Biography').getFakeData(res,req);
}) ;
router.get('videos_api','/videos/get',(res,req) => {
    new ControllerFactory().getController('Videos').getFakeData(res,req);
}) ;
router.get('guests_api','/guests/get',(res,req) => {
    new ControllerFactory().getController('Guests').getFakeData(res,req);
}) ;
router.get('banner_api','/banner/get',(res,req) => {
    new ControllerFactory().getController('Banner').getFakeData(res,req);
}) ;
router.get('daily_tweets_api','/dailyTweets/get',(res,req) => {
    new ControllerFactory().getController('DailyTweets').getFakeData(res,req);
}) ;

module.exports = router;
