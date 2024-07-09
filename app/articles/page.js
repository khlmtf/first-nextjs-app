import Link from "next/link";

export default function articlePage(){
    return(
        <dvie>
            <h3> articles page</h3>

            <Link href="/posts">
                <button> Take me to the Posts page </button>            
            </Link>
        </dvie>
    );
}