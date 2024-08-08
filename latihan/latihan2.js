// Fetch Data dari API

// async function fetchUserData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     return data;

// }

// fetchUserData().then(data => console.log(data));

// Penanganan Error

// async function fetchInvalidData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.log('Error:', err.message);
//     }
// }

// fetchInvalidData();

//  melakukan fect ke bayak api mrngunakan promise all
// async function fetchMultipleData() {
//     try {
//         const [postsResponse, commentsResponse] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/posts'),
//             fetch('https://jsonplaceholder.typicode.com/comments')
//         ]);

//         if (!postsResponse.ok || !commentsResponse.ok) {
//             throw new Error('Failed to fetch data');
//         }

//         const posts = await postsResponse.json();
//         const comments = await commentsResponse.json();

//         console.log('Posts:', posts);
//         console.log('Comments:', comments);
//     } catch (err) {
//         console.error('Error:', err.message);
//     }
// }

// fetchMultipleData();


// latihan 1
// async function fetchUserDataAndPosts() {
//     try{
//         const [userResponse, postResponse] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/users/1'),
//             fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//         ]);
//         if (!userResponse.ok || !postResponse.ok){
//             throw new Error('failet to fect data');
//         }
//         const user = await userResponse.json();
//         const post = await postResponse.json();
//         console.log(user);
//         console.log(post);
//     }catch (err) {
//         console.error('Error', err.message);
//     }
// }

// fetchUserDataAndPosts();


// LATIHAN 2
// async function fetchAlbumAndPhotos() {
//     try{
//         const [albumResponse,fotoResponse] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/albums/1'),
//             fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
//         ]);
//         if (!albumResponse.ok || !fotoResponse.ok ) {
//             throw new Error('filed to fect data');
//         }
//         const album = await albumResponse.json();
//         const foto = await fotoResponse.json();
//         console.log('album :', album );
//         console.log('foto :', foto);
//     }catch (err) {
//         console.error('Error', err.message);
//     }
// }

// fetchAlbumAndPhotos();

// LATIHAN 3
// async function fetchUserDataAndTodos() {
//     try{
//         const [dataResponse,todosResponse] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/users/2'),
//             fetch('https://jsonplaceholder.typicode.com/todos?userId=2')
//         ]);
//         if (!dataResponse.ok || !todosResponse.ok){
//             throw new Error('failet to fect data');
//         }
//         const data = await dataResponse.json();
//         const todos = await todosResponse.json();
//         console.log('data :', data);
//         console.log('todos :', todos);
//     }catch (err) {
//         console.error('Error',err.message );
//     }
// }
// fetchUserDataAndTodos();

// LATIHAN 4
// async function fetchPostAndComments() {
//     try{
//         const [postsResponse, commentsResponse] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/posts/1'),
//             fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//         ]);
//         if (!postsResponse.ok || !commentsResponse.ok){
//             throw new Error("Failed to fetch data")
//         }
//         const posts = await postsResponse.json();
//         const comments = await commentsResponse.json();
//         console.log('posts :', posts);
//         console.log('comments :', comments);
//     }catch (err) {
//         console.error('Error', err.message);
//     }
// }
// fetchPostAndComments();

// LATIHAN 5
// async function fetchUserAndAlbums() {
//     try{
//         const [userResponse, albumsResponse] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/users/3'),
//             fetch('https://jsonplaceholder.typicode.com/albums?userId=3')
//         ]);
//         if (!userResponse.ok || !albumsResponse.ok ) {
//             throw new Error("Failed to fetch data");
//         }
//         const user = await userResponse.json();
//         const albums = await albumsResponse.json();
//         console.log('user :', user);
//         console.log('albums :', albums);
//     }catch (err) {
//         console.error('Error', err.message);
//     }
// }
// fetchUserAndAlbums();