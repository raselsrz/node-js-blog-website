const getPosts = async (req, res) => {
    const [rows] = await global.db.execute('SELECT * FROM posts');
    res.json(rows);
};

const createPost = async (req, res) => {
    const { title, content } = req.body;
    await global.db.execute('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content]);
    res.status(201).json({ message: 'Post created successfully' });
};

module.exports = { getPosts, createPost };
