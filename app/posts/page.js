import Todo from "../components/todo"
import Link from "next/link";

export default async function postspage(){
    const response= await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        next: {
            revalidate: 120,
        },
    });
    const posts = await response.json()

    const postsJSX = posts.map((post)=>{
        return(
            <Link href={`/posts/${post.id}`} style={{width:"70%"}}>
            <div style={{
                        width:"100%",
                        background: "white",
                        paddng: "10px",
                        borderRadius:"10px",
                        color: "black",
                        marginTop: "20px",
                        }}>
                <h3>{post.title}</h3>
                <p> {post.body}</p>
            </div>
            </Link>
        )
    })
    console.log(posts)

    return (
        <div>
            <h1>Posts Page</h1>
            {/* Posts */}
            <div style={{
                    display:"flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    }}>
                {postsJSX}
            </div>
            {/* ==== Posts === */}
        </div>
    )
}