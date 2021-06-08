<template>
  <body class="body">
    <a-row>
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="16">
          <a-row>
            <a-col
              :span="24"
              style="text-align:left; color:#02d767; font-size:60px ;padding:100px 0 ; margin-left:-100px; "
              >Latest</a-col
            >
          </a-row>
          <a-row>
            <a-col
              class="latestquote"
              style="text-align:center; color:white; font-size:40px; padding-bottom:100px"
            >
              "Die with memories, not dreams."
              <p class="owner">James C. Collins</p>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
      <a-row class="latestcard">
        <a-col :span="4"></a-col>
        <a-col :span="16">
          <a-row class="rowcard">
            <a-col :span="24">
              <div class="divcard">
                <a-row class="rowcard" :gutter="[0, 48]">
                  <a-col
                    class="colcard"
                    :span="8"
                    v-for="(latest, index) in latests"
                    :key="index"
                  >
                    <nuxt-link :to="{ path: latest.slug }">
                      <a-card class="card">
                        <img
                          class="cardpicture"
                          slot="cover"
                          alt="example"
                          :src="latest.feature_image"
                        />
                        <p style="color:white">{{ latest.title }}</p>
                      </a-card>
                    </nuxt-link>
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
    </a-row>
  </body>
</template>

<script>
import { getLatest } from "../api/posts";
export default {
  layout: "Header",
  async asyncData() {
    const latests = await getLatest();
    return { latests: latests };
  }
};
</script>

<style scoped>
.body {
  background-image: url("../images/Webbitkub.jpg");
}
.owner {
  font-size: 30px;
  margin: 10px auto;
  color: #9f9f9f;
  text-align: right;
  position: relative;
  max-width: 550px;
}
.owner:before {
  position: absolute;
  content: "";
  display: block;
  width: 50px;
  height: 1px;
  background: #9f9f9f;
  left: 50%;
  top: 50%;
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
