<template>
  <!-- /** 
    *!THIS IS THE FIRST SECTION*/ 
  -->
  <section id="section1">
    <!-- NavBar Commponent -->
    <div class="nav">
      <NavBar v-if="!mobileView" :isDark="false" :isLight="true"></NavBar>
      <MobileNavBar
        v-if="mobileView"
        :isDark="false"
        :isLight="true"
      ></MobileNavBar>
    </div>

    <!-- The landing text on the about page -->
    <div class="landingtextcontainer">
      <p class="supportingtext">Welcome to</p>
      <h1>Fashion De Afrik</h1>
      <p class="supportingtext">
        The African clothing line that is exquisite and sophisticated as well as
        practical and wearable. Let’s tell you our story...
      </p>
    </div>
  </section>

  <!-- /** 
    *!THE SECOND SECTION OF THE ABOUT PAGE */ 
  -->
  <section id="section2">
    <!-- The left section which contains the description of who we are -->
    <div class="descriptioncontainer">
      <h2>Who we are....</h2>
      <p class="descriptiontext">
        We are a passionate team of fashion enthusiasts dedicated to showcasing
        the beauty and diversity of African culture through our unique clothing
        designs. Our roots run deep, and our commitment to authenticity is
        unwavering.
      </p>
      <ul>
        <li>
          Product Line: We design and create a wide range of African-inspired
          clothing, from traditional attire to modern fusion styles. View our
          full line of collections on our
          <router-link :to="{ name: 'Collections' }"
            >collections page</router-link
          >
        </li>
        <li>
          Custom Tailoring: We offer bespoke tailoring services to bring your
          unique fashion ideas to life.
        </li>
        <li>
          Accessories: In addition to clothing, we also offer a selection of
          African-inspired accessories to complement your style.
        </li>
      </ul>
    </div>

    <!-- The right section which contains the swiperjs image sliders -->
    <div class="swiperjscontainer">
      <swiper
        class="swiper"
        style="height: 100%"
        :speed="1500"
        :spaceBetween="30"
        :autoplay="{
          delay: 3500,
          disableOnInteraction: true,
        }"
        :effect="'fade'"
        :navigation="false"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        :class="mySwiper"
      >
        <!-- I used a div, each with a class of .swiperimg#.They each have a background image to represent each image in each slide. -->
        <swiper-slide>
          <div class="swiperimg1"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiperimg2"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiperimg3"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiperimg4"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiperimg5"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiperimg6"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiperimg7"></div>
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <!-- /** 
    *!THE THIRD SECTION OF THE ABOUT PAGE */ 
  -->
  <section id="section3">
    <!-- The left section which contains the reviews -->
    <div class="reviewscontainer">
      <div class="individualreviewcontainer">
        <div class="userreviewandnamecontainer">
          <p class="userreview">
            Fashion De Afrik has been my number one wardrobe wear
            2018.Professionalism at its best.
          </p>
          <p class="username">Eric Kwadwo Asare</p>
        </div>
        <div class="userimagecontainer">
          <img
            class="userimage"
            src="@/assets/userimage1.jpg"
            alt="userimage1"
          />
        </div>
      </div>

      <div class="individualreviewcontainer">
        <div class="userreviewandnamecontainer">
          <p class="userreview">
            I only wear Kaftans from De Afrik and for my Brother's wedding it
            was only right we did #theAfrikway.Cheers!
          </p>
          <p class="username">Richard Nyong</p>
        </div>
        <div class="userimagecontainer">
          <img
            class="userimage"
            src="@/assets/userimage2.jpg"
            alt="userimage1"
          />
        </div>
      </div>

      <div class="individualreviewcontainer">
        <div class="userreviewandnamecontainer">
          <p class="userreview">
            Quality African wear for all occassions.Since being introduced to
            Fashion De Afrik, all my African Cloth are sown here. They have
            excellent customer service to the extent I can be in the UK and put
            in my order. On arival it's made to specification.
          </p>
          <p class="username">Francis Conteh</p>
        </div>
        <div class="userimagecontainer">
          <img
            class="userimage"
            src="@/assets/userimage3.jpg"
            alt="userimage1"
          />
        </div>
      </div>

      <a
        class="seeallreviews"
        href="https://www.google.com/maps/place/FASHION+DE+AFRIK+ANNEX/@5.6181763,-0.0890553,17z/data=!4m18!1m9!3m8!1s0xfdf8530f8c5c905:0x48d5951ebf69abb3!2sFASHION+DE+AFRIK+ANNEX!8m2!3d5.6181763!4d-0.0864804!9m1!1b1!16s%2Fg%2F11fhrd2qk6!3m7!1s0xfdf8530f8c5c905:0x48d5951ebf69abb3!8m2!3d5.6181763!4d-0.0864804!9m1!1b1!16s%2Fg%2F11fhrd2qk6?entry=ttu"
        target="_blank"
      >
        <p class="username">See all reviews</p>
      </a>
    </div>

    <!-- The right section which contains the description of why fashion de afrik -->
    <div class="descriptioncontainer">
      <h2>Why Fashion De Afrik?</h2>
      <ul>
        <li>
          Unmatched Quality: Our clothing is crafted with attention to detail,
          ensuring the highest quality and comfort.
        </li>
        <li>
          Cultural Authenticity: We source our fabrics and inspiration from
          various African regions, respecting and celebrating the rich
          traditions they represent.
        </li>
        <li>
          Customer-Centric Approach: Your satisfaction is our priority; we are
          committed to delivering an exceptional shopping experience
        </li>
      </ul>
      <p class="descriptiontext">
        Don’t just take it from us. See what our customers have to say...
      </p>
    </div>
  </section>

  <!-- /** 
    *!THE FOURTH SECTION OF THE ABOUT PAGE WHICH EXTENDS FROM THE VISIT OUR STORE PAGE TO THE END OF THE LAST STORE SECTION */ 
  -->
  <section id="section4">
    <!-- The landing text on the about page -->
    <div class="landingtextcontainer">
      <h1>Visit Our Stores</h1>
      <p class="supportingtext">
        Discover our physical locations and connect with us in person
      </p>
    </div>
  </section>

  <section id="stores">
    <section id="section2">
      <!-- The left section which contains the description of who we are -->
      <div class="descriptioncontainer">
        <h2>Fashion De Afrik Annex</h2>
        <p class="descriptiontext">
          Fashion de Afrik Annex welcomes you. Immerse yourself in a well chosen
          wardrobe that honors diversity in cultures. Discover a world where
          heritage and fashion collide by exploring the Annex.
        </p>
        <p class="descriptiontext">
          Store Hours: Monday to Saturday: 8:00 AM - 8:00 PM, Sunday: Closed
        </p>
        <p class="descriptiontext">Contact : (+233) 55 588 7722</p>

        <div class="containerwithborder">
          <a
            target="_blank"
            href="https://www.google.com/maps/dir//fashiondeafrik+ocation/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xfdf8530f8c5c905:0x48d5951ebf69abb3?sa=X&ved=2ahUKEwig4tyA9dKCAxWLVaQEHaUICsEQ9Rd6BAg9EAA"
            ><div class="googlemapslocationcontainer"></div
          ></a>
        </div>
      </div>

      <!-- The right section which contains the image of the location -->
      <div class="locationimagecontainer1"></div>
    </section>
    <section id="section2alt">
      <!-- The left section which contains the description of who we are -->
      <div class="descriptioncontainer">
        <h2>Fashion De Afrik, Greda Estate</h2>
        <p class="descriptiontext">
          Come celebrate African cultural variety with us at Greda Estate, where
          each ensemble has a distinct tale to tell.
        </p>
        <p class="descriptiontext">
          Store Hours: Monday to Saturday: 7:00 AM - 10:00 PM, Sunday: 12:00 PM
          - 10:00 PM
        </p>
        <p class="descriptiontext">Contact : (+233) 59 691 4667</p>

        <div class="containerwithborder">
          <a
            target="_blank"
            href="https://www.google.com/maps/dir//fashion+de+afrik+greda+estate/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xfdf8560f336050d:0x7c6028b60241029f?sa=X&ved=2ahUKEwiGm_6E5OaCAxUYAfsDHbkoCMYQ9Rd6BAgvEAA"
            ><div class="googlemapslocationcontainer"></div
          ></a>
        </div>
      </div>

      <!-- The right section which contains the image of the location -->
      <div class="locationimagecontainer2"></div>
    </section>
    <section id="section2">
      <!-- The left section which contains the description of who we are -->
      <div class="descriptioncontainer">
        <h2>Fashion De Afrik, Buade</h2>
        <p class="descriptiontext">
          Visit Fashion De Afrik Buade and embrace the elegant vibe. Our
          products showcase the diverse range of African culture, showcasing
          elaborate patterns and vivid hues. Discover a blend of style and trend
          when you visit our store; every item is a declaration of heritage and
          style.
        </p>
        <p class="descriptiontext">
          Store Hours: Monday to Saturday: 8:00 AM - 8:00 PM, Sunday: Closed
        </p>
        <p class="descriptiontext">Contact :(+233) 24 470 9646</p>

        <div class="containerwithborder">
          <a
            target="_blank"
            href="https://www.google.com/maps/dir//fashion+de+afrik+buade/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xfdf85933faeb41f:0x6554392e06500648?sa=X&ved=2ahUKEwjAyb_s4-aCAxWufKQEHWMaDpAQ9Rd6BAgvEAA"
            ><div class="googlemapslocationcontainer"></div
          ></a>
        </div>
      </div>

      <!-- The right section which contains the image of the location -->
      <div class="locationimagecontainer3"></div>
    </section>
  </section>

  <!-- /**
    *!THE FOOTER SECTION */ 
  -->
  <footer>
    <div class="footerctacontainer">
      <h3>Fashion De Afrik</h3>
      <p>
        Want to make an enquiry ? Whether you have questions, need assistance,
        or just want to explore our offerings in person, we're here to welcome
        you with a friendly smile. Our team is ready to assist you during our
        opening hours. See you soon! Get in touch with us and don’t forget to
        interact with our socials.
      </p>
    </div>

    <div class="footerlinkscontainer">
      <div class="footerlinks">
        <h4>Company</h4>
        <RouterLink :to="{ name: 'Collections' }"
          ><p class="links">Collections</p></RouterLink
        >
        <RouterLink :to="{ name: 'Gallery' }"
          ><p class="links">Gallery</p></RouterLink
        >
        <RouterLink :to="{ name: 'Store' }"
          ><p class="links">Store</p></RouterLink
        >
        <RouterLink :to="{ name: 'Contact' }"
          ><p class="links">Contact</p></RouterLink
        >
      </div>

      <div class="footerlinks">
        <h4>Contact</h4>
        <p>fashiondeafrikghana@gmail.com</p>
        <p>(+233) 244709646</p>
        <div class="socialicons">
          <div>
            <a
              href="https://www.facebook.com/godfred.adjaye.5?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              ><Icon class="icon" icon="akar-icons:facebook-fill"
            /></a>
          </div>
          <div>
            <a
              href="https://instagram.com/de_afrik_gh?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
              ><Icon class="icon" icon="dashicons:instagram"
            /></a>
          </div>

          <div>
            <a
              href=" https://pin.it/BRpXIxs"
              target="_blank"
              rel="noopener noreferrer"
              ><Icon class="icon" icon="mdi:pinterest"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// @ is an alias to /src

// Import NavBar component
import NavBar from "@/components/NavBar.vue";
import MobileNavBar from "@/components/MobileNavBar.vue";

//Importing Iconify components
import { Icon } from "@iconify/vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "About",
  components: {
    NavBar,
    MobileNavBar,
    Swiper,
    SwiperSlide,
    Icon,
  },
  setup() {
    return {
      modules: [Autoplay, EffectFade, Navigation, Pagination],
    };
  },
  methods: {
    handleMobileNav() {
      this.mobileView = window.innerWidth <= 768;
    },
  },
  created() {
    this.handleMobileNav();
  },
};
</script>

<style scoped>
/**
*!SECTION1 STYLING
*/
#section1 {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.73) 0%,
      rgba(0, 0, 0, 0.73) 100%
    ),
    url("@/assets/APS1backgroundimg.JPG"), lightgray;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  padding: 57px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.landingtextcontainer {
  width: 1290px;
  display: flex;
  flex-direction: column;
}

.landingtextcontainer h1 {
  color: #fff;
  font-family: Montserrat;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.landingtextcontainer .supportingtext {
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

/**
*!SECTION2 STYLING
*/
#section2 {
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
}

#section2alt {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

/* left container styling which contains the description of who we are */
.descriptioncontainer {
  background: #b99c00;
  display: flex;
  width: 50%;
  height: 100vh;
  padding: 54px 76px 54px 121px;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
}

.descriptioncontainer h2 {
  color: #000;
  font-family: Barlow Condensed;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.descriptioncontainer .descriptiontext,
li {
  color: #000;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.descriptioncontainer ul {
  padding-left: 50px;
}

/* swiperjs container and images styling */
.swiperjscontainer {
  width: 50%;
  height: 100vh;
}

.swiperimg1 {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("@/assets/swipertransition1.jpg"), lightgray;
  background-position: center center;
  background-size: 110% 100%;
  background-repeat: no-repeat;
}

.swiperimg2 {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("@/assets/swipertransition2.jpg"), lightgray;
  background-position: center center;
  background-size: 110% 100%;
  background-repeat: no-repeat;
}

.swiperimg3 {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("@/assets/APS1backgroundimg.JPG"), lightgray;
  background-position: center center;
  background-size: 120% 100%;
  background-repeat: no-repeat;
}

.swiperimg4 {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("@/assets/swipertransition4.jpg"), lightgray;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.swiperimg5 {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("@/assets/swipertransition5.jpg"), lightgray;
  background-position: center center;
  background-size: 120% 100%;
  background-repeat: no-repeat;
}

.swiperimg6 {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("@/assets/swipertransition6.jpg"), lightgray;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.swiperimg7 {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("@/assets/swipertransition7.jpg"), lightgray;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

/**
*!SECTION3 STYLING
*/
#section3 {
  display: flex;
  flex-direction: row-reverse;
}

.reviewscontainer {
  background: #18171f;
  display: flex;
  width: 50%;
  height: 100vh;
  padding: 93px 82px 94px 82px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 64px;
  color: #fff;
}

.individualreviewcontainer {
  display: flex;
  height: 150px;
  width: 604px;
  justify-content: center;
  align-items: center;
  gap: 34px;
  flex-shrink: 0;
  border-left: #fff 3px solid;
  padding-left: 34px;
}

.userreviewandnamecontainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 415px;
}

.userreview {
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  /* 122.222% */
}

.username {
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 22px;
  /* 122.222% */
}

.userimagecontainer {
  width: 111px;
  height: 163px;
  border-radius: 5px;
  border: 1.6px solid rgba(255, 255, 255, 0.4);
}

.userimage {
  height: 100%;
  width: 100%;
}

.seeallreviews {
  color: #fff;
}

.seeallreviews:hover {
  color: yellow;
}

/**
*!SECTION4 STYLING
*/
#section4 {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url("@/assets/galleryimages/galleryimg28.jpg"), lightgray;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  padding: 57px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.containerwithborder {
  border: 8px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.containerwithborder:hover {
  border: 8px solid rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

.googlemapslocationcontainer {
  overflow: hidden;
  width: 565px;
  height: 200px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    url("@/assets/googlemapslocation.jpg");
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  opacity: 0.9;
}

.googlemapslocationcontainer:hover {
  overflow: hidden;
  width: 565px;
  height: 200px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    url("@/assets/googlemapslocation.jpg");
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 1.2;
}

.locationimagecontainer1 {
  width: 50%;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("@/assets/storelocationimages/storelocationimg1.jpg"), lightgray;
  background-position: -180px center;
  background-size: 150% 100%;
  background-repeat: no-repeat;
}

.locationimagecontainer2 {
  width: 50%;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("@/assets/storelocationimages/storelocationimg2.jpg"), lightgray;
  background-position: -180px center;
  background-size: 150% 100%;
  background-repeat: no-repeat;
}

.locationimagecontainer3 {
  width: 50%;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("@/assets/storelocationimages/storelocationimg3.jpg"), lightgray;
  background-position: -180px center;
  background-size: 150% 100%;
  background-repeat: no-repeat;
}

/**
*!FOOTER STYLES
*/
footer {
  background: #000;
  display: flex;
  padding: 67px 104px;
  justify-content: center;
  align-items: start;
  gap: 200px;
  color: #fff;
}

.footerctacontainer {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.footerlinkscontainer {
  display: flex;
  gap: 100px;
  margin-top: 20px;
}

.footerlinks {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.links:hover {
  text-decoration: none;
  color: #b99c00 !important;
}

footer h3 {
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

footer h4 {
  color: #fff;
  font-family: Montserrat;
  font-size: 19.2px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

footer p {
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

footer a {
  text-decoration: none;
  color: white;
}

footer a:hover {
  color: black;
}

.socialicons {
  display: flex;
  gap: 32px;
}

.icon {
  color: #fff;
  width: 26px;
  height: 26px;
}

.icon:hover {
  color: yellow;
}

/* MEDIA QUERIES */
/* Extra Extra Large Devices (Large Desktops and Widescreens): */
@media (min-width: 1201px) and (max-width: 1380px) {
  /**
*!SECTION1 STYLING
*/

  .landingtextcontainer {
    width: 1160px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  /**
*!SECTION2 STYLING
*/

  /* left container styling which contains the description of who we are */
  .descriptioncontainer {
    background: #b99c00;
    display: flex;
    width: 50%;
    height: 100vh;
    padding: 54px 60px 54px 80px;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  .descriptioncontainer h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .descriptioncontainer .descriptiontext,
  li {
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  /**
*!SECTION3 STYLING
*/
  #section3 {
    display: flex;
    flex-direction: row-reverse;
  }

  .reviewscontainer {
    background: #18171f;
    display: flex;
    width: 50%;
    height: 100vh;
    padding: 93px 41px 94px 41px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 56px;
    color: #fff;
  }

  .individualreviewcontainer {
    display: flex;
    height: 170px;
    width: 504px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border-left: #fff 3px solid;
    padding-left: 34px;
  }

  .userreviewandnamecontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 315px;
  }

  /**
*!FOOTER STYLES
*/
  footer {
    background: #000;
    display: flex;
    padding: 67px 82px;
    justify-content: center;
    align-items: start;
    gap: 100px;
    color: #fff;
  }
}

/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1200px) {
  /**
*!SECTION1 STYLING
*/

  .landingtextcontainer {
    width: 890px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .landingtextcontainer h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .landingtextcontainer .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  /**
*!SECTION2 STYLING
*/

  /* left container styling which contains the description of who we are */
  .descriptioncontainer {
    background: #b99c00;
    display: flex;
    width: 50%;
    height: 100vh;
    padding: 54px 40px 54px 60px;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  .descriptioncontainer h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .descriptioncontainer .descriptiontext,
  li {
    color: #000;
    font-family: Montserrat;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  /**
*!SECTION3 STYLING
*/
  #section3 {
    display: flex;
    flex-direction: row-reverse;
  }

  .reviewscontainer {
    background: #18171f;
    display: flex;
    width: 50%;
    height: 100vh;
    padding: 93px 41px 94px 41px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    color: #fff;
  }

  .individualreviewcontainer {
    display: flex;
    height: 150px;
    width: 404px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-left: #fff 3px solid;
    padding-left: 34px;
  }

  .userreviewandnamecontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 315px;
  }

  .userreview {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* 122.222% */
  }

  .username {
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 22px;
    /* 122.222% */
  }

  .userimagecontainer {
    width: 91px;
    height: 143px;
    border-radius: 5px;
    border: 1.6px solid rgba(255, 255, 255, 0.4);
  }

  .userimage {
    height: 100%;
    width: 100%;
  }

  /**
*!FOOTER STYLES
*/
  footer {
    background: #000;
    display: flex;
    padding: 67px 52px;
    justify-content: center;
    align-items: start;
    gap: 100px;
    color: #fff;
  }

  .footerctacontainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footerlinkscontainer {
    display: flex;
    gap: 50px;
    margin-top: 20px;
  }

  .footerlinks {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .links:hover {
    text-decoration: none;
    color: #b99c00 !important;
  }

  footer h3 {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer h4 {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer p {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  footer a {
    text-decoration: none;
    color: white;
  }

  footer a:hover {
    color: black;
  }

  .socialicons {
    display: flex;
    gap: 32px;
  }

  .icon {
    color: #fff;
    width: 22px;
    height: 22px;
  }

  .icon:hover {
    color: yellow;
  }
}

/*Large Devices (Desktops and Small Laptops): */
@media (min-width: 769px) and (max-width: 992px) {
  /**
*!SECTION1 STYLING
*/

  .landingtextcontainer {
    width: 690px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .landingtextcontainer h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .landingtextcontainer .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  /**
*!SECTION2 STYLING
*/

  /* left container styling which contains the description of who we are */
  .descriptioncontainer {
    background: #b99c00;
    display: flex;
    width: 50%;
    height: 100vh;
    padding: 54px 30px 54px 50px;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  .descriptioncontainer h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .descriptioncontainer .descriptiontext,
  li {
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  /**
*!SECTION3 STYLING
*/
  #section3 {
    display: flex;
    flex-direction: row-reverse;
  }

  .reviewscontainer {
    background: #18171f;
    display: flex;
    width: 50%;
    height: 100vh;
    padding: 93px 41px 94px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    color: #fff;
  }

  .individualreviewcontainer {
    display: flex;
    height: 150px;
    width: 320px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-left: #fff 3px solid;
    padding-left: 24px;
  }

  .userreviewandnamecontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 315px;
  }

  .userreview {
    color: #fff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* 122.222% */
  }

  .username {
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 22px;
    /* 122.222% */
  }

  .userimagecontainer {
    width: 91px;
    height: 143px;
    border-radius: 5px;
    border: 1.6px solid rgba(255, 255, 255, 0.4);
  }

  .userimage {
    height: 100%;
    width: 100%;
  }

  /**
*!FOOTER STYLES
*/
  footer {
    background: #000;
    display: flex;
    padding: 67px 32px;
    justify-content: center;
    align-items: start;
    gap: 50px;
    color: #fff;
  }

  .footerctacontainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footerlinkscontainer {
    display: flex;
    gap: 32px;
    margin-top: 20px;
  }

  .footerlinks {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .links:hover {
    text-decoration: none;
    color: #b99c00 !important;
  }

  footer h3 {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer h4 {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer p {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  footer a {
    text-decoration: none;
    color: white;
  }

  footer a:hover {
    color: black;
  }

  .socialicons {
    display: flex;
    gap: 24px;
  }

  .icon {
    color: #fff;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: yellow;
  }
}

/*Medium Devices (Tablets): */
@media (min-width: 577px) and (max-width: 768px) {
  /**
*!SECTION1 STYLING
*/

  .landingtextcontainer {
    width: 490px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .landingtextcontainer h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .landingtextcontainer .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  /**
*!SECTION2 STYLING
*/
  #section2 {
    display: flex;
    width: 100vw;
    height: 200vh;
    flex-direction: column;
  }

  #section2alt {
    height: 200vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  /* left container styling which contains the description of who we are */
  .descriptioncontainer {
    background: #b99c00;
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 54px 30px 54px 50px;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  .descriptioncontainer h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .descriptioncontainer .descriptiontext,
  li {
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .swiperjscontainer {
    width: 100%;
    height: 100vh;
  }

  /**
*!SECTION3 STYLING
*/
  #section3 {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 200vh;
  }

  .reviewscontainer {
    background: #18171f;
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 93px 41px 94px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 56px;
    color: #fff;
  }

  .individualreviewcontainer {
    display: flex;
    height: 100px;
    width: 520px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-left: #fff 3px solid;
    padding-left: 24px;
  }

  .userreviewandnamecontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 315px;
  }

  .userreview {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* 122.222% */
  }

  .username {
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 22px;
    /* 122.222% */
  }

  .userimagecontainer {
    width: 71px;
    height: 123px;
    border-radius: 5px;
    border: 1.6px solid rgba(255, 255, 255, 0.4);
  }

  .userimage {
    height: 100%;
    width: 100%;
  }

  /**
*!SECTION4 STYLING
*/

  .containerwithborder {
    border: 8px solid rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  .containerwithborder:hover {
    border: 8px solid rgba(0, 0, 0, 0.6);
    overflow: hidden;
  }

  .googlemapslocationcontainer {
    overflow: hidden;
    width: 565px;
    height: 200px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      url("@/assets/googlemapslocation.jpg");
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out;
    opacity: 0.9;
  }

  .googlemapslocationcontainer:hover {
    overflow: hidden;
    width: 565px;
    height: 200px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      url("@/assets/googlemapslocation.jpg");
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 1.2;
  }

  .locationimagecontainer1 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg1.jpg"), lightgray;
    background-position: -180px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  .locationimagecontainer2 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg2.jpg"), lightgray;
    background-position: -180px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  .locationimagecontainer3 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg3.jpg"), lightgray;
    background-position: -180px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  /**
*!FOOTER STYLES
*/
  footer {
    background: #000;
    display: flex;
    flex-direction: column;
    padding: 32px 32px;
    justify-content: center;
    align-items: start;
    gap: 16px;
    color: #fff;
  }

  .footerctacontainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footerlinkscontainer {
    display: flex;
    gap: 50%;
    margin-top: 20px;
  }

  .footerlinks {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .links:hover {
    text-decoration: none;
    color: #b99c00 !important;
  }

  footer h3 {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer h4 {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer p {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  footer a {
    text-decoration: none;
    color: white;
  }

  footer a:hover {
    color: black;
  }

  .socialicons {
    display: flex;
    gap: 24px;
  }

  .icon {
    color: #fff;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: yellow;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 480px) and (max-width: 576px) {
  /**
*!SECTION1 STYLING
*/

  .landingtextcontainer {
    width: 400px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .landingtextcontainer h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .landingtextcontainer .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  /**
*!SECTION2 STYLING
*/
  #section2 {
    display: flex;
    width: 100vw;
    height: 200vh;
    flex-direction: column;
  }

  #section2alt {
    height: 200vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  /* left container styling which contains the description of who we are */
  .descriptioncontainer {
    background: #b99c00;
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 54px 30px 54px 50px;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  .descriptioncontainer h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .descriptioncontainer .descriptiontext,
  li {
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .swiperjscontainer {
    width: 100%;
    height: 100vh;
  }

  /**
*!SECTION3 STYLING
*/
  #section3 {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 200vh;
  }

  .reviewscontainer {
    background: #18171f;
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 93px 41px 94px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 56px;
    color: #fff;
  }

  .individualreviewcontainer {
    display: flex;
    height: 120px;
    width: 420px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-left: #fff 3px solid;
    padding-left: 24px;
  }

  .userreviewandnamecontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 315px;
  }

  .userreview {
    color: #fff;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* 122.222% */
  }

  .username {
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 800;
    line-height: 22px;
    /* 122.222% */
  }

  .userimagecontainer {
    width: 71px;
    height: 123px;
    border-radius: 5px;
    border: 1.6px solid rgba(255, 255, 255, 0.4);
  }

  .userimage {
    height: 100%;
    width: 100%;
  }

  /**
*!SECTION4 STYLING
*/

  .containerwithborder {
    border: 8px solid rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  .containerwithborder:hover {
    border: 8px solid rgba(0, 0, 0, 0.6);
    overflow: hidden;
  }

  .googlemapslocationcontainer {
    overflow: hidden;
    width: 565px;
    height: 200px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      url("@/assets/googlemapslocation.jpg");
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out;
    opacity: 0.9;
  }

  .googlemapslocationcontainer:hover {
    overflow: hidden;
    width: 565px;
    height: 200px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      url("@/assets/googlemapslocation.jpg");
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 1.2;
  }

  .locationimagecontainer1 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg1.jpg"), lightgray;
    background-position: -180px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  .locationimagecontainer2 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg2.jpg"), lightgray;
    background-position: -180px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  .locationimagecontainer3 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg3.jpg"), lightgray;
    background-position: -180px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  /**
*!FOOTER STYLES
*/
  footer {
    background: #000;
    display: flex;
    flex-direction: column;
    padding: 32px 32px;
    justify-content: center;
    align-items: start;
    gap: 16px;
    color: #fff;
  }

  .footerctacontainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footerlinkscontainer {
    display: flex;
    gap: 25%;
    margin-top: 20px;
  }

  .footerlinks {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .links:hover {
    text-decoration: none;
    color: #b99c00 !important;
  }

  footer h3 {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer h4 {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer p {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  footer a {
    text-decoration: none;
    color: white;
  }

  footer a:hover {
    color: black;
  }

  .socialicons {
    display: flex;
    gap: 24px;
  }

  .icon {
    color: #fff;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: yellow;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 400px) and (max-width: 479px) {
  /**
*!SECTION1 STYLING
*/

  .landingtextcontainer {
    width: 370px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
  }

  .landingtextcontainer h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .landingtextcontainer .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  /**
*!SECTION2 STYLING
*/
  #section2 {
    display: flex;
    width: 100vw;
    height: 200vh;
    flex-direction: column;
  }

  #section2alt {
    height: 200vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  /* left container styling which contains the description of who we are */
  .descriptioncontainer {
    background: #b99c00;
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 54px 30px 54px 50px;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  .descriptioncontainer h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .descriptioncontainer .descriptiontext,
  li {
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .swiperjscontainer {
    width: 100%;
    height: 100vh;
  }

  /**
*!SECTION3 STYLING
*/
  #section3 {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 200vh;
  }

  .reviewscontainer {
    background: #18171f;
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 93px 41px 94px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    color: #fff;
  }

  .individualreviewcontainer {
    display: flex;
    height: 140px;
    width: 340px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-left: #fff 3px solid;
    padding-left: 24px;
  }

  .userreviewandnamecontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 315px;
  }

  .userreview {
    color: #fff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* 122.222% */
  }

  .username {
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 22px;
    /* 122.222% */
  }

  .userimagecontainer {
    width: 71px;
    height: 123px;
    border-radius: 5px;
    border: 1.6px solid rgba(255, 255, 255, 0.4);
  }

  .userimage {
    height: 100%;
    width: 100%;
  }

  /**
*!SECTION4 STYLING
*/

  .containerwithborder {
    border: 8px solid rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  .containerwithborder:hover {
    border: 8px solid rgba(0, 0, 0, 0.6);
    overflow: hidden;
  }

  .googlemapslocationcontainer {
    overflow: hidden;
    width: 565px;
    height: 200px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      url("@/assets/googlemapslocation.jpg");
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out;
    opacity: 0.9;
  }

  .googlemapslocationcontainer:hover {
    overflow: hidden;
    width: 565px;
    height: 200px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      url("@/assets/googlemapslocation.jpg");
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 1.2;
  }

  .locationimagecontainer1 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg1.jpg"), lightgray;
    background-position: -180px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  .locationimagecontainer2 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg2.jpg"), lightgray;
    background-position: -180px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  .locationimagecontainer3 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg3.jpg"), lightgray;
    background-position: -180px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  /**
*!FOOTER STYLES
*/
  footer {
    background: #000;
    display: flex;
    flex-direction: column;
    padding: 32px 32px;
    justify-content: center;
    align-items: start;
    gap: 16px;
    color: #fff;
  }

  .footerctacontainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footerlinkscontainer {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 20px;
  }

  .footerlinks {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .links:hover {
    text-decoration: none;
    color: #b99c00 !important;
  }

  footer h3 {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer h4 {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer p {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  footer a {
    text-decoration: none;
    color: white;
  }

  footer a:hover {
    color: black;
  }

  .socialicons {
    display: flex;
    gap: 24px;
  }

  .icon {
    color: #fff;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: yellow;
  }
}

/*Extra Small Devices (Phones) */
@media (max-width: 399px) {
  /**
*!SECTION1 STYLING
*/

  .landingtextcontainer {
    width: 270px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
  }

  .landingtextcontainer h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .landingtextcontainer .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  /**
*!SECTION2 STYLING
*/
  #section2 {
    display: flex;
    width: 100vw;
    height: 200vh;
    flex-direction: column;
  }

  #section2alt {
    height: 200vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  /* left container styling which contains the description of who we are */
  .descriptioncontainer {
    background: #b99c00;
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 54px 30px 54px 50px;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }

  .descriptioncontainer h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .descriptioncontainer .descriptiontext,
  li {
    color: #000;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .swiperjscontainer {
    width: 100%;
    height: 100vh;
  }

  /**
*!SECTION3 STYLING
*/
  #section3 {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 220vh;
  }

  .reviewscontainer {
    background: #18171f;
    display: flex;
    width: 100%;
    height: 120vh;
    padding: 93px 21px 94px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 48px;
    color: #fff;
  }

  .individualreviewcontainer {
    display: flex;
    height: 160px;
    width: 330px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-left: #fff 3px solid;
    padding-left: 16px;
  }

  .userreviewandnamecontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 315px;
  }

  .userreview {
    color: #fff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* 122.222% */
  }

  .username {
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 22px;
    /* 122.222% */
  }

  .userimagecontainer {
    width: 91px;
    height: 123px;
    border-radius: 5px;
    border: 1.6px solid rgba(255, 255, 255, 0.4);
  }

  .userimage {
    height: 100%;
    width: 100%;
  }

  /**
*!SECTION4 STYLING
*/

  .containerwithborder {
    border: 8px solid rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  .containerwithborder:hover {
    border: 8px solid rgba(0, 0, 0, 0.6);
    overflow: hidden;
  }

  .googlemapslocationcontainer {
    overflow: hidden;
    width: 565px;
    height: 200px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      url("@/assets/googlemapslocation.jpg");
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out;
    opacity: 0.9;
  }

  .googlemapslocationcontainer:hover {
    overflow: hidden;
    width: 565px;
    height: 200px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      url("@/assets/googlemapslocation.jpg");
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 1.2;
  }

  .locationimagecontainer1 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg1.jpg"), lightgray;
    background-position: -130px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  .locationimagecontainer2 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg2.jpg"), lightgray;
    background-position: -130px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  .locationimagecontainer3 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg3.jpg"), lightgray;
    background-position: -130px center;
    background-size: 150% 100%;
    background-repeat: no-repeat;
  }

  /**
*!FOOTER STYLES
*/
  footer {
    background: #000;
    display: flex;
    flex-direction: column;
    padding: 32px 32px;
    justify-content: center;
    align-items: start;
    gap: 16px;
    color: #fff;
  }

  .footerctacontainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footerlinkscontainer {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 20px;
  }

  .footerlinks {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .links:hover {
    text-decoration: none;
    color: #b99c00 !important;
  }

  footer h3 {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer h4 {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  footer p {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  footer a {
    text-decoration: none;
    color: white;
  }

  footer a:hover {
    color: black;
  }

  .socialicons {
    display: flex;
    gap: 24px;
  }

  .icon {
    color: #fff;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: yellow;
  }
}
</style>
