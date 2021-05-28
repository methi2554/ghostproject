<template>
  <body class="hgpress">
    <a-row class="background">
      <a-col :span="4"></a-col>
      <a-col :span="16">
        <a-row>
          <a-col
            :span="24"
            style="text-align:left; color:#02d767; font-size:60px ;padding:100px 0 ; margin-left:-100px; "
            >Press</a-col
          >
        </a-row>
        <a-row
          class="quote"
          style="color:white; font-size:40px ; text-align:center ; padding-bottom:100px"
        >
          <a-col :span="2"></a-col>
          <a-col :span="20"
            >“Be the type of person that no matter where you go or where you
            are, you always add value to the lives of <br />
            those around you.”
            <p class="owner">James C. Collins</p></a-col
          >
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

        <a-row style="padding-bottom:100px">
          <a-col
            class="colcard"
            :span="24"
            v-for="(pres, index) in press"
            :key="index"
            style="margin-bottom:20px"
          >
            <a-row style="">
              <a-col :span="1"></a-col>
              <a-col :span="23" style=""
                >{{ pres.excerpt }}
                <p style="color:white">{{ pres.published_at }}</p>
              </a-col>
            </a-row>
          </a-col>
          <div >
          <a-pagination size="small" :total="50"  />
          </div>
        </a-row>
      </a-col>
    </a-row>
  </body>
</template>

<script>
import { getPress } from "../api/posts";
var moment = require("moment");
export default {
  layout: "Header",
  async asyncData() {
    const press = await getPress();
    return { press: press };
  }
};
</script>

<style scoped>
.hgpress {
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
  left: 78%;
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
.colcard {
  background: #1b1b1b;
  color: #02d767;
  font-size: 20px;
  text-align: left;
  height: 100px;
  border-radius: 10px;
  padding-top: 20px;
}
.pagination .ant-pagination-item.ant-pagination-item-1.ant-pagination-item-active {
  text-align: right;
  color: red;
}
.ant-pagination-item a{
  color: white  !important;
}

</style>
