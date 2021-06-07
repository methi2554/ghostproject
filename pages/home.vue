<template>
  <body class="background">
    <a-row>
      <a-row class="row">
        <a-col :span="4"> </a-col>
        <a-col :span="8" class="leftcol">
          <h1 class="h1" style="font-size: 70px; color:white">
            <span style="color: #02d767;">Topp</span> Jirayut <br />
            Srupsrisopa
          </h1>
          <h3 style="font-size : 25px ; color:white">
            All you need to know about Crypto
          </h3>
          <p style="font-size : 15px ; color:white">
            Soirée BBA ouverte à tousJeudi 10 juin à partir de 18h30 <br />
            <span class="underline"> Présentiel à Thee 51 Tasty </span> Moments
          </p>
        </a-col>
        <a-col :span="12" class="rightcol">
          <div id="slideshow">
            <div>
              <img class="toppic" src="../images/topedit.png" alt="" />
            </div>
            <div>
              <img class="toppic" src="../images/secslide.png" alt="" />
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row class="secondrow">
        <a-col :span="4"></a-col>
        <a-col :span="8">
          <div>
            <img class="aboutpicture" src="../images/aboutpic.png" alt="" />
          </div>
        </a-col>
        <a-col :span="12"
          ><div class="paragraph">
            <h1 style="font-size : 50px ; color:white">About Me</h1>
            <p
              style="  font-size: 20px; color: white;"
            >
              Topp is a speaker and one of Thailand’s leading bitcoin and open
              blockchain experts, who is the Founder and Group CEO of Bitkub.com
              — Thailand’s Leading Regulated Cryptocurrency Exchange. He
              previously co-founded coins.co.th— Thailand’s largest bitcoin
              wallet company. He is a board of Director at the Thai Fintech
              Association and a Subcommittee at Thailand’s Office of the Trade
              Competition Commission. <br />
              After accomplishing his MPhil in Economics at Oxford University,
              UK, Topp worked as an investment banker, a financial consultant
              and a central banker.
            </p>
            <div>
              <a-button
                style="border:2px solid #02d767 ; background:transparent ; border-radius:20px ; color:#02d767"
                type="primary"
              >
                <nuxt-link style="color:#02d767" to="/about">
                  More About Me</nuxt-link
                ><a-icon type="right" />
              </a-button>
            </div></div
        ></a-col>
      </a-row>
      <a-row class="logounder">
        <a-col :span="4"></a-col>
        <a-col :span="16" class="classlogo">
          <div class="divlogo">
            <span class="spanlogo"
              ><img class="bklogo" src="../images/bitkub-01.svg" alt=""
            /></span>
          </div>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
      <a-row class="quotetime">
        <a-col :span="8"></a-col>
        <a-col :span="8" class="quotecol">
          <div
            class="qtext"
            style="color:#02d767;   font-size: 38px; padding-bottom:20px"
          >
            “Be a clock builder, not a time teller.”
          </div>
          <div
            class="qowner"
            style="color:#9F9F9F;   font-size: 15px; text-align:right; padding-right:15px"
          >
            <span class="qownerspan"> James C. Collins</span>
          </div>
        </a-col>
        <a-col :span="8"></a-col>
      </a-row>
      <a-row class="event" style="padding-bottom:50px">
        <a-col :span="4"></a-col>
        <a-col :span="16" class="eventcol">
          <div
            class="qowner"
            style="color:#9F9F9F;   font-size: 15px; text-align:left; padding-right:15px"
          >
            <span class="eventspan" style="font-size:60px; color:white;"
              >Events</span
            >
          </div>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
      <a-row class="rowcard">
        <a-col :span="4"></a-col>
        <a-col :span="16">
          <div class="divcard">
            <a-row class="rowcard" :gutter="[0, 16]">
              <a-col
                class="colcard"
                :span="6"
                v-for="(event, index) in events"
                :key="index"
              >
                <a-card
                  class="card"
                  @click="
                    () => (
                      (modal2Visible = true),
                      (eventdataimage = event.feature_image)
                    )
                  "
                >
                  <img
                    class="cardpicture"
                    slot="cover"
                    alt="example"
                    :src="event.feature_image"
                  />
                  <p style="color:white">{{ $moment(event.published_at).format("Do MMM YYYY")  }}</p>
                </a-card>
              </a-col>
              <a-modal
                bodyStyle="height:600px;"
                v-model="modal2Visible"
                centered
                :footer="null"
                :width="600"
                class="modal"
              >
                <img :src="eventdataimage" class="full-img" alt="" />
              </a-modal>
            </a-row>
            <a-button class="showmorebtn"
              ><nuxt-link to="/event"> Show More</nuxt-link></a-button
            >
          </div>
        </a-col>
        <a-col :span="4"> </a-col>
      </a-row>
      <a-row class="lasttalk">
        <a-col :span="4"></a-col>
        <a-col :span="16">
          <a-row style="color:white; font-size:30px; padding-bottom:50px;"
            >Latest Talk</a-row
          >
          <a-row
            ><a-col :span="24">
              <iframe
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/xkSWg5XeyWw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> </a-col
          ></a-row>
          <a-row :gutter="[16, 16]">
            <a-col :span="12"
              ><iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/C-Edz_RXi8E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe
            ></a-col>
            <a-col :span="12"
              ><iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/nIWaYU36XHI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe
            ></a-col>
          </a-row>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>

      <a-row class="rowcard">
        <a-col :span="4"></a-col>
        <a-col :span="16">
          <div class="divcard" style="padding-bottom:100px">
            <a-row
              style="color:white; font-size:30px; padding-bottom:50px ; padding-top:200px ; text-align:left"
            >
              My Blogs
            </a-row>
            <a-row class="rowcard" :gutter="[0, 16]">
              <a-col
                class="colcard"
                :span="6"
                v-for="(blog, index) in blogs"
                :key="index"
              >
                <a-card class="card" @click="setBlogData(blog)">
                  <img
                    class="cardpicture"
                    slot="cover"
                    alt="example"
                    :src="blog.feature_image"
                  />
                  <p style="color:white">{{ blog.title }}</p>
                </a-card>
              </a-col>
            </a-row>
            <a-button class="showmorebtn"
              ><nuxt-link style="color:#02d767" to="/blog">
                Show More</nuxt-link
              ></a-button
            >
          </div>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
    </a-row>
  </body>
</template>
<script>
import $ from "jquery";
import { getPosts, getEvents, getBlogs } from "../api/posts";
export default {
  layout: "Header",
  async asyncData() {
    const posts = await getPosts();
    const events = await getEvents();
    const blogs = await getBlogs();
    return { posts: posts, events: events, blogs: blogs, modal2Visible: false };
  },
  methods: {
    setBlogData(blog) {
      console.log(blog, "this is ");
      this.$store.commit("store/setBlog", blog);
      this.$router.push("/myblog");
    }
  },

  mounted() {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
      $("#slideshow > div:first")
        .fadeOut(5000)
        .next()
        .fadeIn(5000)
        .end()
        .appendTo("#slideshow");
    }, 10000);
  }
};
</script>

<style scoped>
@import "../assets/scss/antdv.scss";
.background {
  background-image: url("../images/homepage.jpg");
}
.row {
  height: 85vh;
}
.leftcol {
  text-align: left;
  padding: 100px 0 0 100px;
}
.underline {
  border-bottom: 2px solid white;
  padding-bottom: 100px;
}
.rightcol {
  display: flex;
  justify-content: flex-end;
}
.toppic {
  width: 100%;
  height: 100%;
  border-top-left-radius: 450px;
  border-bottom-left-radius: 50px;
}
.secondrow {
  padding-top: 200px;
}
.aboutpicture {
  width: 100%;
}
.paragraph {
  width: 35vw;
  padding-left: 100px;
  padding-top: 50px;
}
.more {
  color: #02d767;
  border: 2px solid #02d767;
  border-radius: 20px;
  padding: 10px 20px;
}
.logounder {
  padding: 50px 0;
  text-align: center;
}
.divlogo {
  width: 100%;
  padding: 30px 0;
  position: absolute;
}
.divlogo::before {
  content: "";
  display: block;
  width: 40%;
  height: 2px;
  background: white;
  position: absolute;
  left: 0%;
  top: 50%;
}
.divlogo::after {
  content: "";
  display: block;
  width: 40%;
  height: 2px;
  background: white;
  position: absolute;
  right: 0%;
  top: 50%;
}
.bklogo {
  width: 10%;
}
.classlogo {
  position: relative;
  padding-bottom: 150px;
}
.quotetime {
  text-align: center;
  color: white;
  padding-bottom: 50px;
}
.qownerspan:before {
  content: "";
  position: absolute;
  border: 1px solid #9f9f9f;
  width: 20px;
  top: 50%;
  right: 110%;
}
.qownerspan,
.eventspan {
  position: relative;
}
.eventspan::after {
  content: "";
  position: absolute;
  border: 1px solid white;
  width: 56vw;
  top: 60%;
  left: 110%;
}
.rowcard {
  padding-bottom: 50px;
  text-align: center;
}
.colcard {
  display: flex;
  justify-content: center;
}
.card {
  border-radius: 15px 15px 50px 15px;
  background: #707070;
  width: 90%;
  border: #707070;
  box-shadow: 2px 10px 18px black;
  cursor: pointer;
}
.cardpicture {
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0 0;
}
.showmorebtn {
  border-radius: 20px 20px;
  border: 2px solid #02d767;
  color: #02d767;
  background: transparent;
}
.lasttalk {
  display: flex;
  justify-content: right;
}
#slideshow {
  position: relative;
  width: 100vw;
  height: 85vh;
}

#slideshow > div {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 1px;
}
.full-img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  border-radius: 20px;
}
.ant-modal-content {
  background: red !important;
}
</style>
