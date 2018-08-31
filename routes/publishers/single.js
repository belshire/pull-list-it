module.exports = (req, res) => {
    const publisher = req.publisher;

    res.status(200).json({ publisher });
}