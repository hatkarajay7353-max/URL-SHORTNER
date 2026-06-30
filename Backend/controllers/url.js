const {nanoid}=require('nanoid')
const URL=require('../models/url')
async function handleGenerateNewShortURL(req,res) {
  
    const body=req.body;
  
    if(!body.url){
        return res.status(400).json({err:'URL is not Provided'});
    }
    const user=req.user;
   
    const shortId=nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectURL:body.url,
        visitHistory:[],
        user:user._id,
    })

    res.json({newURL:`http://localhost:8001/url/${shortId}`});
}
async function handleIncrement(req,res) {
    const shortId=req.params.shortId;
    const user=req.user;
    const entry=await URL.findOneAndUpdate({
        shortId:shortId,
        user:user._id
    },
    {
        $push:{
            visitHistory: {
                timestamp:Date.now()
            }
        }
    }
)
    if (!entry) {
        return res.status(404).json({
            error: "Short URL not found",
        });
    }
    res.redirect(entry.redirectURL);
}

async function handleAllURLS(req, res) {
    try {
        const body=req.body;
        const user=req.user;
        const allUrls = await URL.find({
            user:user._id
        });

        return res.status(200).json({
            allUrls,
        });
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
}
module.exports={handleGenerateNewShortURL,handleIncrement,handleAllURLS}