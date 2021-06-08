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
            fields:"title,published_at,html,slug,feature_image",
        })
        .catch(err => {
            console.error(err);
        })
  }

export async function getBlogs() {
    return await api.posts
        .browse({
            limit: "4",
            fields:"title,published_at ,html,slug,feature_image",
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
            fields:"title,published_at ,html,slug,feature_image",
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
            fields:"title,published_at ,html,slug,feature_image",
            filter:"tag:event"

        })
        .catch(err => {
            console.error(err);
        })
  }
  export async function getAllEvents() {
    return await api.posts

        .browse({
            limit: "all",
            fields:"title,published_at ,html,slug,feature_image",
            filter:"tag:event"

        })
        .catch(err => {
            console.error(err);
        })
  }

  export async function getPress() {
    return await api.posts
        .browse({
            limit: "all",
            fields:"title,published_at  , html,slug,feature_image",
            filter:"tag:press"
        })
        .catch(err => {
            console.error(err);
        })
  } 

  export async function getLatest() {
    return await api.posts

        .browse({
            limit: "all",
            fields:"title,published_at,html,slug,feature_image",
            filter:"tag:latest"
        })
        .catch(err => {
            console.error(err);
        })
  }
  
  export async function getTopVideo() {
    return await api.posts
        .browse({
            limit: "1",
            fields:"html",
            filter:"tag:topvideo"
            
        })
        .catch(err => {
            console.error(err);
        })
  }

  export async function getLeftSideVideo() {
    return await api.posts
        .browse({
            limit: "1",
            fields:"html",
            filter:"tag:leftvideo"
        })
        .catch(err => {
            console.error(err);
        })
  }

  export async function getRightSideVideo() {
    return await api.posts
        .browse({
            limit: "1",
            fields:"html",
            filter:"tag:rightvideo"
        })
        .catch(err => {
            console.error(err);
        })
  }

  export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug:postSlug,
        })
        .catch(err => {
            console.error(err);
        })
  }