function loadingPost() {
    fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(res => res.json())
    .then(data => displyPost(data))  
    
}
function displyPost(posts) {
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        console.log(post);
        div.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5> Post-${post.title} : title</h5>
        <p>Post Paragrap</p>
        `;
        postContainer.appendChild(div) // তোমাকে এর দায়িত্ব নিতে হবে 

        



        
    }
}
loadingPost();

/*
কোনো Element Add করার জন্য ৪টি Step :
 1. কোথায় add করবো সেটা নিয়ে আসতে হবে। 
 2. Create Child Element
 3. Set innerText or innerHtml
 4. Append Child
*/

