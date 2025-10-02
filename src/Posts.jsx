import { use } from "react"
import Post from "./Post"

export default function Posts({ postsPromise }) {

    const posts = use(postsPromise)

    return (
        <div>
            <h2>All post are here {posts.length}</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}