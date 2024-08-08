// async function updateUserList() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//             throw new Error("Failed to fetch data");
//         }
//         const users = await response.json();
//         let li = '';
//         users.forEach(user => li += `<li>${user.name}</li>`);
//         const userListElement = document.querySelector('#user-list');
//         userListElement.innerHTML = li;
//     } catch (err) {
//         console.error('Error:', err.message);
//     }
// }

// updateUserList();

// LATIHAN 2
// async function updateAlbumList() {
//     try{
//         const [albumResponse, photoResponse] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/albums'),
//             fetch('https://jsonplaceholder.typicode.com/photos')
//         ]);
//         if(!albumResponse.ok || !photoResponse.ok){
//             throw new Error("Failed to fetch data");
//         }
//         const albums = await albumResponse.json();
//         const photos = await photoResponse.json();
//         let li = '';
//         albums.forEach(album => {
//             const albumPhotos = photos.filter(photo => photo.albumId === album.id);
//             li += `<li>${album.title}<br><img src="${albumPhotos[0]?.thumbnailUrl}" alt="${album.title}"></li>`});
//             const albumListElement = document.querySelector('#album-list');
//             albumListElement.innerHTML = li;
//     }catch (err) {
//         console.error('Error', err.message);
//     }
// }
// updateAlbumList();


// LATIHAN 3
async function updateUserAndPosts() {
    try{
        const [usersResponse, postsResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/posts')
        ]);
        if(!usersResponse.ok || !postsResponse.ok){
            throw new Error("Failed to fetch data");
        }
        const users = await usersResponse.json();
        const posts = await postsResponse.json();
        let li = '';
        users.forEach(user => {
            const userPosts = posts.filter(post => post.userId === user.id);
            li += `<li>${user.name}<ul>`;
            userPosts.forEach(post => {
                li += `<li>${post.title}</li>`;
            });
            li += `</ul></li>`;
        });
        const userPostsListElement = document.querySelector('#user-posts-list');
        userPostsListElement.innerHTML = li;

    }catch (err) {
        console.error('Error', err.message);
    }
}
updateUserAndPosts();


// async function updateUserAndPosts (){
//     try{
//         const [usersResponse, postsResponse] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/users'),
//             fetch('https://jsonplaceholder.typicode.com/posts')
//         ]);
//         if (!usersResponse.ok || !postsResponse.ok ){
//             throw new Error("failet to fecth data");
//         }
//         const users = await usersResponse.json();
//         const posts = await postsResponse.json();
//         let li = '';
//         users.forEach(user => {
//             const userPosts = posts.filter( post => post.userID === user.id);
//             li += `<li>${user.name}<ul>`;
//             userPosts.forEach(post => {
//             li += `<li>${post.title}</li>`;
//             });
//             li += `</ul></li>`;
//         });
        
//         const userPostLsit = document.querySelector('#user-posts-list');
//         userPostLsit.innerHTML = li;
        

//     }catch (err) {
//         console.error('Error', err.message);
//     }
// }
// updateUserAndPosts();