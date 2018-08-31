module.exports = (req, res) => {
    const comic = req.comic;

    res.status(200).json({ comic });
}