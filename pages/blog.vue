<template>
<body class="hg">
  <a-row class="toprow">
    <a-col :span="4"></a-col>
    <a-col :span="16">
      <a-row>
        <a-col
          :span="24"
          style="text-align:left; color:#02d767; font-size:60px ;padding:100px 0 ; margin-left:-100px; "
          >Blogs</a-col
        >
      </a-row>
      <a-row style="padding-bottom:100px">
        <a-col :span="2"></a-col>
        <a-col :span="20">
          <p style="color:white ; text-align:center; font-size:30px">
            “Blockchain is an underlying protocol. When you use Facebook, you’re
            not thinking about TCP/IP, you’re thinking about sending messages to
            your friends. Same with other protocols - you’re not thinking about
            HTTP when you’re using a website, you will not think about SMTP when
            you send an email. So, I don’t think in the long run that people
            will be thinking they’re using bitcoin to send money to a friend.
            They’ll just be thinking of it as a faster way to get money across
            without losing money.”
          </p>
          <p class="owner">Topp Jirayut Srupsrisopa</p>
        </a-col>
        <a-col :span="2"></a-col>
      </a-row>

      <a-row style="padding-bottom:100px">
        <a-col :span="8">
          <form action="" class="search">
            <input
              class="searchbtn"
              type="text"
              name="search"
              placeholder="Search.."
            />
            <a-icon class="searchicon" type="search" />
          </form>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col :span="8">
          <form action="" class="search">
            <input
              class="searchbtn"
              type="text"
              name="search"
              placeholder="DD/MM/YY"
            />
            <a-icon class="searchicon" type="calendar" />
          </form>
        </a-col>
        <a-col :span="7"></a-col>
      </a-row>

      <a-row class="rowcard" :gutter="[0, 16]">

        <a-col
          class="colcard"
          :span="8"
          v-for="(blog, index) in blogs"
          :key="index">
        <nuxt-link :to="{ path: blog.slug }">
          <a-card class="card">
            <img
              class="cardpicture"
              slot="cover"
              alt="example"
              :src="blog.feature_image"
            />
            <p style="color:white">{{ blog.title }}</p>
          </a-card>        
          </nuxt-link>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
  </body>
</template>
<script>

import { getAllBlogs } from "../api/posts";
export default {
  layout: "Header",
    async asyncData() {
    const blogs = await getAllBlogs();
    return {blogs: blogs };
  }
};
</script>
<style scoped>
.hg {
  background-image: url("../images/blogpage.jpg");
}
.owner {
  font-size: 20px;
  margin: 10px auto;
  color: #9f9f9f;
  text-align: right;
  position: relative;
  max-width: 920px;
}
.owner:before {
  position: absolute;
  content: "";
  display: block;
  width: 50px;
  height: 1px;
  background: #9f9f9f;
  left: 70%;
  top: 50%;
}
.searchbtn {
  width: 100%;
  background: #3a3a3a;
  height: 60px;
  position: absolute;
  border-radius: 10px;
  border: transparent;
}
.searchicon {
  position: relative;
  color: #02d767;
  font-size: 40px;
  left: 80%;
  padding-top: 10px;
}
.card {
  border-radius: 15px 15px 50px 15px;
  background: #707070;
  width: 90%;
  border: #707070;
}
.cardpicture {
  width: 100%;
  height: 350px;
  border-radius: 15px 15px 0 0;
}
.rowcard {
  padding-bottom: 50px;
  text-align: center;
}
</style>
