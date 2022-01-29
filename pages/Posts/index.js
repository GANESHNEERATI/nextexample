

export async function getStaticProps(){
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts=await res.json();
    return{
        props:{
            posts
        }
    }
}

function Posts({posts}) {
    return (
        <div>
           {
               posts.map((post)=>
               <div>
                <h2>{post.id}</h2>
                <h2>{post.title}</h2>
                <h2>{post.body}</h2>
                </div>
               )
           }
           <h1>welcome</h1>

        </div>
    )
}

export default Posts;
