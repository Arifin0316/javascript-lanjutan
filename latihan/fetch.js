// async function createPost() {
//     const newPost = {
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     }
//     try{
//         // Mengirimkan request ke server
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
//             method:'POST', // Metode HTTP yang digunakan
//             headers: {
//                 'Content-Type': 'application/json' // Memberitahu server bahwa kita mengirim data dalam format JSON
//             },
//             body: JSON.stringify(newPost) // Mengubah objek JavaScript menjadi string JSON
//         });
//         if (!response.ok) {
//             throw new Error('network response wes not ok' + response.statusText);
//         }
//         const createdPost = await response.json();
//         console.log('post cried :', createdPost);
//     }catch (err) {
//         console.error('Error :', err.message);
//     }

// }
// createPost();


// latihan 1
// async function fetchWithErrorHandling() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
//         if(!response.ok){
//             throw new Error('Network response was not ok' + response.statusText);
//         }
//         const data = await response.json();
//         console.log(data);
//     }catch (err) {
//         console.error('Error', err.message)
//     }
// }

// fetchWithErrorHandling();

// LATIHAN 2 API CHANI
// async function fetchUserAndPosts() {
//     try {
//         // Mengambil data pengguna dengan ID 1
//         const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         if (!userResponse.ok) {
//             throw new Error('Network response was not ok: ' + userResponse.statusText);
//         }
//         const user = await userResponse.json();
//         console.log('User:', user);

//         // Mengambil data postingan untuk pengguna dengan ID 1
//         const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
//         if (!postResponse.ok) {
//             throw new Error('Network response was not ok: ' + postResponse.statusText);
//         }
//         const posts = await postResponse.json();
//         console.log('Posts:', posts);
//     } catch (err) {
//         console.error('Error:', err.message);
//     }
// }

// // Panggil fungsi fetchUserAndPosts
// fetchUserAndPosts();


// LATIHAN 3 MENAMPILKAN DATA
// async function fetchAndDisplayUser() {
//     try{
//         const responses = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         if(!responses.ok){
//             throw new Error('network responses was not ok' + responses.statusText);
//         }
//         const user = await responses.json();
//         document.querySelector('#user-info').innerHTML = `nama : ${user.name}`; 
//     }catch(err) {
//         console.error('Error', err.message);
//     }
// }
// fetchAndDisplayUser();

// latihan 4
// async function fetchAndDisplayPosts() {
//     try{
//         const responses = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if(!responses.ok){
//             throw new Error('network responses was not ok' + responses.statusText);
//         }
//         const posts = await responses.json();
//         let li = '';
//         posts.forEach(post => li += `<li>${post.title}</li>`)
//         document.querySelector('#post-list').innerHTML = li;
//     }catch(err) {
//         console.error('Error', err.message);
//     }
// }
// fetchAndDisplayPosts();

// LATIHAN 5
// document.querySelector('#comment-form').addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const name = document.querySelector('#name').value;
//     const body = document.querySelector('#body').value;

//     const newComment = {
//         name: name,
//         body: body,
//         postId: 1
//     };

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newComment)
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }

//         const result = await response.json();
//         document.querySelector('#comment-response').innerHTML = `Comment added: ${JSON.stringify(result)}`;
//     } catch (err) {
//         console.error('Error:', err.message);
//     }
// });

// latihan 5 

// async function fetchAndDisplayComments() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/comments');
//         if(!response.ok){
//             throw new Error('network response was not ok ' + response.statusText);
//         }
//         const comments = await response.json();
//         let li ='';
//         comments.forEach(comment => {
//             li += `<li><strong>${comment.name}:</strong>${comment.body}</li>`
//         });
//         document.querySelector('#comment-list').innerHTML = li;
//     }catch(err){
//         console.error('Error', err.message);
//     }
// }
// fetchAndDisplayComments();

// latihan 6
// let currentPage = 1;
// const usersPerPage = 5;

// async function fetchAndDisplayUsers(page, limit) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         const users = await response.json();
//         let li = '';
//         users.forEach(user => {
//             li += `<li>${user.name}</li>`;
//         });
//         document.querySelector('#user-list').innerHTML += li;
//     } catch (err) {
//         console.error('Error:', err.message);
//     }
// }

// document.querySelector('#load-more').addEventListener('click', () => {
//     currentPage++;
//     fetchAndDisplayUsers(currentPage, usersPerPage);
// });

// // Load initial users
// fetchAndDisplayUsers(currentPage, usersPerPage);

async function fetchAndDisplayUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error('nerwork was not ok' + response.statusText);
        }
        const users = await response.json();
        let li ='';
        users.forEach(user => {
            li += `<li><a href="#" data-id="${user.id}" >${user.name}</a></li>`
        });
        document.querySelector('#user-list').innerHTML = li;

         // Tambahkan event listener untuk setiap link nama pengguna
        document.querySelectorAll('#user-list a').forEach(link =>{
            link.addEventListener('click', async(event) => {
                event.preventDefault();
                const userID = event.target.getAttribute('data-id');
                await fetchAndDisplayUserDetails(userID);
            });
        });
    }catch(err){
        console.error('Error', err.message);
    }
}
async function fetchAndDisplayUserDetails(userID) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
        if(!response.ok){
            throw new Error('network was not ok' + response.statusText);
        }
        const user = await response.json();
        const details = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            `;
            document.querySelector('#user-details').innerHTML = details;
            // Tampilkan modal
            const modal = document.querySelector('#myModal');
            modal.style.display = 'block';

            // Tambahkan event listener untuk menutup modal
            document.querySelector('.close').onclick = () => {
                modal.style.display = 'none';
            };
            window.onclick = (event) => {
                if(event.target == modal ){
                    modal.style.display = 'none';
                };
            }
        
    }catch(err){
        console.error('Error', err.message);
    }
}

fetchAndDisplayUsers();