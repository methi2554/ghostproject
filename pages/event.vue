<template>
  <body class="bg">
    <a-row>
      <a-col :span="4" style="text-align:right"><a-button type="primary" class="lefticon" @click="to" > <a-icon type="left" /></a-button></a-col>
      <a-col :span="16">
            <a-row style="padding-bottom:50px">
                <a-col :span="24"><span style="font-size:40px; color:#02d767;"> Event</span></a-col>
            </a-row>

            <a-row class="rowcard"  :gutter="[0, 16]">
              <a-col
                class="colcard"
                :span="6"
                v-for="(event, index) in events"
                :key="index"
              >
                <a-card class="card">
                  <img
                    class="cardpicture"
                    slot="cover"
                    alt="example"
                    :src="event.feature_image"
                  />
                  <p style="color:white">{{ event.published_at }}</p>
                </a-card>
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
  async asyncData() {
    const events = await getAllEvents();
    return { events: events };
  },
      methods: {
      to() {
        this.$router.go(-1);
      },
    }
};
</script>

<style scoped>
.bg {
  background-image: url("../images/blogpage.jpg");
}
.card {
  border-radius: 15px 15px 50px 15px;
  background: #707070;
  width: 90%;
  border: #707070;
}
.cardpicture {
  width: 100%;
  height: 250px;
  border-radius: 15px 15px 0 0;
}
.rowcard {
  padding-bottom: 50px;
  text-align: center;
}
.lefticon{
    background: transparent;
    border: transparent;
    font-size: 40px;
}
</style>
