const Url = require("./../models/url-model");

module.exports = {
    getUrl(req, res) {
        const code = req.code;
        Url.find({ownerCode: code})
        .then(listUrl => {
            res.json(listUrl);
        })
        .catch(err => {
            throw err;
        });
    },

    postUrl(req, res) {
        const code = req.code;
        const { url } = req.body;
        const newUrl = new Url({
            ownerCode: code,
            originUrl: url,
            shortenedUrlId: Date.now()
        });

        newUrl.save()
        .then(() => {
            res.status(201).json(newUrl);
        })
        .catch(err => {
            throw err;
        });
    },

    deleteUrl(req, res) {
        const { id } = req.params;
        const code = req.code;

        Url.deleteOne({_id: id, ownerCode: code})
        .then(() => {
            res.json({deleted: true});
        })
        .catch(err => {
            throw err;
        });
    },

    patchUrl(req, res) {
        const { id } = req.params;
        const { active } = req.body;
        const code = req.code;

        if (typeof active !== "boolean") {
            return res.status(400).json({msg: "bad request"});
        }

        Url.updateOne({_id: id, ownerCode: code}, {
            "$set": {
                active
            }
        })
        .then(() => {
            res.json({update: true});
        })
        .catch(err => {
            throw err;
        });
    }
}
