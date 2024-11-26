import { blog } from "./data.js";

const main = document.querySelector("main");

const createBlogPost = (post) => {
    const article = document.createElement("article");
    const heading = document.createElement("h2");
    const time = document.createElement("time");
    const head = document.createElement("div");
    head.classList.add("head");
    article.classList.add("blog-post");
    heading.textContent = post.title;
    time.textContent = post.normalDate;
    time.setAttribute("datetime", post.computedDate);
    const content = document.createElement("div");
    content.innerHTML = post.content;
    content.classList.add("content");
    head.append(heading, time);
    article.append(head, content);
    return article;
}

for (const post of blog) {
    const blogArticle = createBlogPost(post);
    main.append(blogArticle);
}