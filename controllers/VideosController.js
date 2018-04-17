var VideosFaker = require('../fakers/VideosFaker');

class VideosController {
    constructor(){
    }

    getFakeVideos(req,res){
        VideosFaker.prototype.generateSchema();
        VideosFaker.prototype.printSchema().then(res.send.bind(res)).catch(console.error);
    }
}

module.exports = VideosController;