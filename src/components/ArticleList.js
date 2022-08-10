import React from 'react'
import Article from "./Article"

function ArticleList({posts}) {

    const article = posts.map((post) => {
        return (
            <Article key={post.id} preview={post.preview} date={post.date} title={post.title} />
        )
    })

    return (
        <main>{article}</main>
    )
}

export default ArticleList
