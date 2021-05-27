<template>
  <body class="body">
    <div class="layout">
      <div class="inside">
        <a-row>
          <a-row class="content">
            <a-col class="picture" :span="12"
              ><img class="pic" src="../images/aboutpic.png" alt="" />
            </a-col>
            <a-col :span="12" class="text">
              <h1 class="aboutme">About Me</h1>
              <p class="paragraph">
                Topp is a speaker and one of Thailand’s leading bitcoin and open
                blockchain experts, who is the Founder and Group CEO of
                Bitkub.com — Thailand’s Leading Regulated Cryptocurrency
                Exchange. He previously co-founded coins.co.th — Thailand’s
                largest bitcoin wallet company. He is a board of Director at the
                Thai Fintech Association and a Subcommittee at Thailand’s Office
                of the Trade Competition Commission. <br /><br />
                After accomplishing his MPhil in Economics at Oxford University,
                UK, Topp worked as an investment banker, a financial consultant
                and a central banker.
              </p>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <div class="quote">
                “Life is too short to not do what excites you, especially <br />
                in the age of the internet where anything is possible.”
              </div>
              <p class="owner">James C. Collins</p>
            </a-col>
          </a-row>
          <a-row class="textcol">
            <a-col class="leftcol" :span="12">
              <img class="book" src="../images/RESEARCHINTERESTS.svg" alt="" />
              <p class="research"><span>Research Interest</span></p>
              <p class="texttop">Blockchain Technology</p>
              <p>Cryptocurrencies & Distributed database</p>
              <p class="texttop">International Capital flows</p>
              <p>economics</p>
              <p class="texttop">Vector Error Correction Model</p>
              <p>Time-series Econometrics</p>
              <p class="texttop">Fintech</p>
              <p>Entrepreneurship & Startup</p>
            </a-col>
            <a-col class="rightcol" :span="12">
              <img class="education" src="../images/EDUCATION.svg" alt="" />
              <p class="research"><span>Education</span></p>
              <p class="texttop">St. Cross College, Oxford</p>
              <p>Master of Philosophy (MPhil)</p>
              <p>Economics Class of 2013</p>
              <p class="texttop">University of Oxford</p>
              <p>
                Master of Philosophy (M. Phil) <br />
                Economics <br />
                2011- 2013
              </p>
              <p class="texttop">
                University of Manchester Institute <br />
                of Science and Technology
              </p>
              <p>
                Economics <br />
                Class of 2011
              </p>
              <p class="texttop">Victoria University of Manchester</p>
              <p>
                Bachelor of Economic Science <br />
                Class of 2011
              </p>
              <p class="texttop">University of Manchester</p>
              <p>
                BSc Economics (Highest Distinction) <br />
                2008 - 2011
              </p>
              <p class="texttop">Wanganui Collegiate School</p>
              <p>Class of 2007</p>
              <p class="texttop">Marlborough Boys’ College</p>
              <p>Class of 2004</p>
            </a-col>
          </a-row>
        </a-row>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  layout: "Header"
};
</script>

<style scoped>
.body {
  background-image: url("../images/aboutpage.jpg");
}
.content {
  background-color: transparent !important;
}
.pic {
  width: 700px;
  height: 650px;
}
.aboutme {
  font-size: 50px;
  color: #02d767;
}
.paragraph {
  color: white;
  font-size: 25px;
}
.text {
  width: 45%;
  padding-left: 100px;
}
.layout {
  padding-inline: 15vh;
}
.inside {
  background-color: transparent;
}
.quote {
  padding-top: 150px;
  color: #02d767;
  font-size: 30px;
  text-align: center;
}
.owner {
  margin: 10px auto;
  color: #9f9f9f;
  text-align: right;
  position: relative;
  max-width: 680px;
}
.owner:before {
  position: absolute;
  content: "";
  display: block;
  width: 30px;
  height: 1px;
  background: #9f9f9f;
  left: 78%;
  top: 50%;
}
.research {
  color: white;
  font-size: 30px;
  padding-bottom: 2px;
}
.research span {
  border-bottom: 2px solid #02d767;
}
.textcol {
  font-size: 20px;
  text-align: center;
  color: white;
  font-weight: lighter;
  padding-bottom: 100px;
  padding-top: 50px;
}
.rightcol {
  border-left: 2px solid white;
}
.texttop {
  font-weight: bold;
  padding-top: 50px;
}
.book,
.education {
  width: 30%;
}
</style>
