// --- COLLABACKS ---

// Получить /posts и отсортировать по убыванию длины title
function getPostsWithCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.sort((a, b) => b.title.length - a.title.length);
            callback(posts);
        })
        .catch(err => console.error('Ошибка при получении постов:', err));
}

// Получить /comments и отсортировать по имени автора (name)
function getCommentsWithCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => {
            comments.sort((a, b) => a.name.localeCompare(b.name));
            callback(comments);
        })
        .catch(err => console.error('Ошибка при получении комментариев:', err));
}


// --- PROMISES ---

// Получить /users и оставить только поля id, name, username, email, phone
function getUsersWithPromises() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => users.map(({ id, name, username, email, phone }) => ({
            id, name, username, email, phone
        })))
        .catch(err => console.error('Ошибка при получении пользователей:', err));
}

// Получить /todos и отфильтровать по completed = falsy
function getTodosWithPromises() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => todos.filter(todo => !todo.completed))
        .catch(err => console.error('Ошибка при получении задач:', err));
}


// --- ASYNC/AWAIT ---

// async/await для /posts (сортировка по убыванию длины title)
async function getPostsAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        posts.sort((a, b) => b.title.length - a.title.length);
        return posts;
    } catch (err) {
        console.error('Ошибка при получении постов async:', err);
    }
}

// async/await для /comments (сортировка по имени автора)
async function getCommentsAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await response.json();
        comments.sort((a, b) => a.name.localeCompare(b.name));
        return comments;
    } catch (err) {
        console.error('Ошибка при получении комментариев async:', err);
    }
}
