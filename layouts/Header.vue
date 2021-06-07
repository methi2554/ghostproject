<template>
  <div class="bg">
    <a-row class="header" id ="header">
      <a-col class="logo" :span="4">
        <img class="logoimage" src="../images/topleftlogo.svg" alt="" />
      </a-col>
      <a-col class="link" :span="10">
        <nuxt-link class="home" to="/home">Home</nuxt-link>
        <nuxt-link class="about" to="/about">About</nuxt-link>
        <nuxt-link class="latest" to="/latest">Latest</nuxt-link>
        <nuxt-link class="press" to="/press">Press</nuxt-link>
        <nuxt-link class="blog" to="/blog">Blog</nuxt-link>
        <nuxt-link class="contact" to="/contact">Contact</nuxt-link>
      </a-col>
      <a-col :span="10"> </a-col>
    </a-row>
    <div>
      <Nuxt />
    </div>
    <div class="footerlayout">
      <a-row>
        <a-col class="footer" :span="24">
          <div class="firstfooter">
            <a-back-top id="button" class="circle"> 
              <div class="arrow1"></div>
              <div class="arrow2"></div>
            </a-back-top>
          </div>
          <div class="connect">Connect With Us</div>
        </a-col>
      </a-row>
    </div>
    <div class="footerlogo">
      <a-row>
        <a-col :span="7"></a-col>
        <a-col :span="2"><img src="../images/logo-02.svg" alt=""></a-col>
        <a-col :span="2"><img src="../images/logo-03.svg" alt=""></a-col>
        <a-col :span="2"><img src="../images/logo-04.svg" alt=""></a-col>
        <a-col :span="2"><img src="../images/logo-05.svg" alt=""></a-col>
        <a-col :span="2"><img src="../images/logo-06.svg" alt=""></a-col>
        <a-col :span="7"></a-col>
      </a-row>
    </div>
    <div class="botreserve">
      <a-row>
        <a-col :span="24">
          <div class="footertext">
            <p class="ftext">© 2022 toppjirayut.com. All rights reserved.</p>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.logo {
  display: flex;
  justify-content: center;
}
.bg{
  background-color: transparent;
}
.logoimage {
  height: 140px;
}
.header {
  height: 20%;
}
.link {
  display: flex;
  justify-content: space-between;
  padding: 60px 0 0 100px;
  font-size: 20px;
}
.home,
.about,
.latest,
.press,
.blog,
.contact {
  color: white;
}
.footer {
  display: inline;
  background-color: #171717;
  width: 100vw;
}
.footerlayout {
  display: flex;
  justify-content: center;
  text-align: center;
}
.footertext {

  display: flex;
  justify-content: center;
  background: #1c1c1c;
  color: white;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
}

.connect {
  color: white;
  text-align: center;
  position: relative;
  font-size: 20px;
}
.connect:before {
  content: "";
  display: block;
  position: absolute;
  width: 42%;
  height: 1px;
  background: white;
  left: 0%;
  top: 50%;
}
.connect:after {
  content: "";
  display: block;
  position: absolute;
  width: 42%;
  height: 1px;
  background: white;
  right: 0%;
  top: 50%;
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 50px;
  display: flex;
  justify-content: center;
  background: #171717;
  border: none;
}
.arrow1,
.arrow2 {
  border: solid #02d767;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  width: 20px;
  height: 20px;
  position: absolute;
  margin-top: 30px;
}
.arrow2 {
  margin-top: 50px;
}
.firstfooter {
  display: flex;
  justify-content: center;
  margin-top: -50px;
  padding-bottom: 50px;
}
.ftext {
  padding: 30px;
}
.footerlogo {
    background-color: #171717;
}
.flogo {
  width: 100px;
  height: 100px;
}
a:hover{
  color: #02d767;
}
a:focus{
  border-bottom:2px solid #02d767 ;
}
.circle:hover{
  background: #171717;
  border: none;
}
.circle:focus{
  background: #171717;
}
.ant-back-top {
    position: relative;
    cursor: pointer;
}
.firstfooter{
  padding-top: 50px;
  padding-left: 200px;
}
</style>
