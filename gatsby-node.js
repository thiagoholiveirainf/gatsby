import fetch from "node-fetch";
import {RouteAnnouncerProps as post} from ".cache/route-announcer-props.js";

export async function sourceNodes({ actions, createNodeId, createContentDigest })
{
    const {createNode} = actions;

    // Buscar os dados da API
    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await usersResponse.json();

    users.forEach(user => {
        createNode({
            ...user,
            id: createNodeId(`User-${user.id}`),
            parent: null,
            children: [],
            internal: {
                type: "User",
                contentDigest: createContentDigest(user),
            }
        })
    })

    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await postsResponse.json();

    posts.forEach(posts => {
        createNode({
            ...posts,
            id: createNodeId(`Post-${post.id}`),
            parent: null,
            children: [],
            internal: {
                type: "Post",
                contentDigest: createContentDigest(post),
            }
        })
    })
};