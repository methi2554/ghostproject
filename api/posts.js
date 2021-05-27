import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: '011b60c194843f8ad920e5609e',
    version: "v3"
  });

export async function getPosts() {
    return await api.posts

        .browse({
            limit: "all",
            include:"tags",
        })
        .catch(err => {
            console.error(err);
        })
  }

export async function getBlogs() {
    return await api.posts
        .browse({
            limit: "4",
            include:"tags",
            filter:"tag:blog"
        })
        .catch(err => {
            console.error(err);
        })
  }

  export async function getAllBlogs() {
    return await api.posts
        .browse({
            limit: "all",
            include:"tags",
            filter:"tag:blog"
        })
        .catch(err => {
            console.error(err);
        })
  }

export async function getEvents() {
    return await api.posts

        .browse({
            limit: "8",
            include:"tags",
            filter:"tag:event"

        })
        .catch(err => {
            console.error(err);
        })
  }