const data = require('../../data.json');

module.exports = (req, res) => {
    const comics = data.comics;
    
    res.status(200).json({ comics });
}