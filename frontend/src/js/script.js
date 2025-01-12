const fetchPosts = async () => {
    const response = await fetch('http://localhost:5000/api/posts');
    const posts = await response.json();
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = posts.map(post => `<h2>${post.title}</h2><p>${post.content}</p>`).join('');
};

fetchPosts();
