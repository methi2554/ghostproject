<template>
  <body class="bg">
    <a-row>
      <a-col :span="4" style="text-align:right"
        ><a-button type="primary" class="lefticon" @click="to">
          <a-icon type="left"/></a-button
      ></a-col>
      <a-col :span="16">
        <a-row style="padding-bottom:50px">
          <a-col :span="24"
            ><span style="font-size:40px; color:#02d767;">{{
              blogData.title
            }}</span></a-col
          >
        </a-row>

        <a-row>
          <a-col :span="24" >
            <div class="html">
            <div v-html="blogData.html" class="picture" style="color:white ; " >
              {{blogData.html}}
            </div>
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="4"></a-col>
    </a-row>
  </body>
</template>
<script>
import { getAllEvents } from "../api/posts";
export default {
  layout: "Header",
  computed: {
    blogData: {
      get() {
        return this.$store.state.store.blogData;
      },
      set() {
        this.$store.commit("store/setBlog", value);
      }
    }
  },

  async asyncData() {
    const events = await getAllEvents();
    return { events: events, modal2Visible: false };
  },
  methods: {
    to() {
      this.$router.go(-1);
    }
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../images/blogpage.jpg");
}
.lefticon {
  background: transparent;
  border: transparent;
  font-size: 40px;
  cursor: pointer;
}
.html {
  min-width: 100%;
  padding-bottom: 100px;
}
img{
  border:2px solid red
}

</style>
