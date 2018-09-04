const publisher = require('../../controllers').publisher;

module.exports = (req, res) => {
    const publishers = data.publishers;

    res.status(200).json({ publishers });
};
