const data = require('../../data.json');

module.exports = (req, res) => {
    const publishers = data.publishers;

    res.status(200).json({ publishers });
};
