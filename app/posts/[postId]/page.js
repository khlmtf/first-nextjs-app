import PostsDetails from "@/app/components/postDetails";
import { Suspense } from "react";
export default async function PostsDetailsPage({params}){
    const postId = params.postId;
    const loadJsx = (<div><h1>Loading...</h1></div>)
    return(
        <div style={{padding: "20px"}}>
            <h1> Post Details </h1>

            <Suspense fallback={loadJsx}>                
            <PostsDetails postId={postId} />
            </Suspense>
        </div>

    );
}