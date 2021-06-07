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
            ><span style="font-size:40px; color:#02d767;"> Event</span></a-col
          >
        </a-row>

        <a-row class="rowcard" :gutter="[24, 24]" style="padding-bottom:100px">
          <a-col
            :span="6"
            v-for="(event, index) in events"
            :key="index"
          >
            <a-card
              class="card"
              @click="
                () => ((modal2Visible = true), (eventdata = event.feature_image))">
              <img
                class="cardpicture"
                slot="cover"
                alt="example"
                :src="event.feature_image"
              />
              <p style="color:white">{{ $moment(event.published_at).format("Do MMM YYYY")  }}</p>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
      <a-modal
        bodyStyle="height:600px;"
        v-model="modal2Visible"
        centered
        :footer="null"
        :width="600"
        class="modal"
      >
        <img :src="eventdata" class="full-img" alt="" />
      </a-modal>
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
    return { events: events ,modal2Visible: false };
  },
  methods: {
    to() {
      this.$router.go(-1);
    }
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
  width: 100%;
  border: #707070;
  box-shadow: 2px 10px 18px black;
  cursor: pointer;
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
.lefticon {
  background: transparent;
  border: transparent;
  font-size: 40px;
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
</style>
