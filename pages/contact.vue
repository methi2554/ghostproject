<template>
  <a-row class="toprow">
    <a-col class="class" :span="4"></a-col>
    <a-col :span="16">
      <a-row>
        <a-col
          :span="24"
          style="text-align:left; color:#02d767; font-size:60px; padding-top:100px; padding-bottom:100px; margin-left:-100px;  "
          >Contact</a-col
        >
      </a-row>
      <a-row>
        <a-col
          :span="24"
          style="text-align:center; color:white; font-size:40px; padding-bottom:100px ; "
          >“The things that excite you are not random, they are connected to
          <br />
          your purpose. Follow them.”
          <p class="owner">Terrie Davoll Hudson</p>
        </a-col>
      </a-row>
      <a-row>
        <a-col
          :span="24"
          style="text-align:left; color:white; font-size:30px; padding-bottom:100px"
          >Let's get in touch!
          <p style="color:#02d767 ; padding-top:10px">
            <span style=" border-bottom:2px solid white ; padding-bottom:20px"
              >Email: topp@</span
            >toppjirayut.com
          </p></a-col
        >
      </a-row>
      <a-row>
        <a-col :span="24" style="padding-bottom:100px; text-align:center">
          <a-row type="flex" class="textfield" align="middle">
            <a-col
              :span="4"
              style="text-align:center; color:#02d767 ; font-size:25px"
              >Name</a-col
            >
            <a-col
              :span="2"
              style="text-align:left; color:#02d767 ; font-size:25px"
              >:</a-col
            >
            <a-col :span="18">
              <form>
                <input class="input" type="text" id="name" name="name" placeholder="Topp Jirayut Srupsrisopa" />
              </form>
            </a-col>
          </a-row>

          <a-row type="flex" class="textfield" align="middle">
            <a-col
              :span="4"
              style="text-align:center; color:#02d767 ; font-size:25px"
              >Email</a-col
            >
            <a-col
              :span="2"
              style="text-align:left; color:#02d767 ; font-size:25px"
              >:</a-col
            >
            <a-col :span="18">
              <form>
                <input class="input" type="text" id="email" name="email" placeholder="Topp Jirayut Srupsrisopa" />
              </form>
            </a-col>
          </a-row>

          <a-row type="flex" class="textfield" align="middle">
            <a-col
              :span="4"
              style="text-align:center; color:#02d767 ; font-size:25px"
              >Subject</a-col
            >
            <a-col
              :span="2"
              style="text-align:left; color:#02d767 ; font-size:25px"
              >:</a-col
            >
            <a-col :span="18">
              <form>
                <input class="input" type="text" id="subject" name="subject" placeholder="Topp Jirayut Srupsrisopa"/>
              </form>
            </a-col>
          </a-row>

          <a-row type="flex" class="textfield" align="middle">
            <a-col
              :span="4"
              style="text-align:center; color:#02d767 ; font-size:25px"
              >Message</a-col
            >
            <a-col
              :span="2"
              style="text-align:left; color:#02d767 ; font-size:25px"
              >:</a-col
            >
            <a-col :span="18">
              <form>
                <input class="input" type="text" id="message" name="message"  placeholder="Topp Jirayut Srupsrisopa"/>
              </form>
            </a-col>
          </a-row>
          <a-button class="showmorebtn">Send</a-button>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="4"></a-col>
  </a-row>
</template>

<script>
export default {
  layout: "Header"
};
</script>

<style scoped>
.owner {
  font-size: 20px;
  margin: 10px auto;
  color: #9f9f9f;
  text-align: right;
  position: relative;
  padding-top: 20px;
  padding-right: 40px;
}
.owner:before {
  position: absolute;
  content: "";
  display: block;
  width: 50px;
  height: 1px;
  background: #9f9f9f;
  left: 75%;
  top: 70%;
}
.toprow {
  background-image: url("../images/contactpage.jpg");
}
.textfield {
  width: 100%;
  background: rgba(73, 75, 75, 0.5);
  height: 100px;
  margin-bottom: 50px;
  border-radius: 10px;
}
.input {
  width: 100%;
  height: 100px;
  background: transparent;
  border: none;
  color: white;
  font-size: 25px;
}
.showmorebtn {
  border-radius: 20px 20px;
  border: 2px solid #02d767;
  color: #02d767;
  background: transparent;
  font-size: 25px;
  width: 200px;
  height: 50px;
}
</style>
