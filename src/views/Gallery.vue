<template>
  <div class="container">
    <!-- NavBar Component -->
    <div class="navbar">
      <NavBar v-if="!mobileView" :isDark="true" :isLight="false"></NavBar>
      <MobileNavBar
        v-if="mobileView"
        :isDark="true"
        :isLight="false"
      ></MobileNavBar>
    </div>

    <!-- Gallery Container Section -->
    <div class="gallerycontainer">
      <div class="leftsection">
        <div>
          <h1>Gain inspiration from our gallery of exquisite peices</h1>
        </div>

        <div class="socialsinfocontainer">
          <h3>INTERACT WITH OUR SOCIALS</h3>
          <div class="line"></div>
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

      <div class="rightsection">
        <div
          class="imagecontainer"
          v-for="imageItem in imageList"
          :key="imageItem.id"
        >
          <img :src="imageItem.image" alt="Gallery Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MobileNavBar from "@/components/MobileNavBar.vue";

//Importing Iconify components
import { Icon } from "@iconify/vue";

export default {
  name: "Gallery",
  components: {
    NavBar,
    MobileNavBar,
    Icon,
  },
  data() {
    return {
      imageList: [
        { id: 1, link: "/galleryimg1" },
        { id: 2, link: "/galleryimg2" },
        { id: 3, link: "/galleryimg3" },
        { id: 4, link: "/galleryimg4" },
        { id: 5, link: "/galleryimg5" },
        { id: 6, link: "/galleryimg6" },
        { id: 7, link: "/galleryimg7" },
        { id: 8, link: "/galleryimg8" },
        { id: 9, link: "/galleryimg9" },
        { id: 10, link: "/galleryimg10" },
        { id: 11, link: "/galleryimg11" },
        { id: 12, link: "/galleryimg12" },
        { id: 13, link: "/galleryimg13" },
        { id: 14, link: "/galleryimg14" },
        { id: 15, link: "/galleryimg15" },
        { id: 16, link: "/galleryimg16" },
        { id: 17, link: "/galleryimg17" },
        { id: 18, link: "/galleryimg18" },
        { id: 19, link: "/galleryimg19" },
        { id: 20, link: "/galleryimg20" },
        { id: 21, link: "/galleryimg21" },
        { id: 22, link: "/galleryimg22" },
        { id: 23, link: "/galleryimg23" },
        { id: 24, link: "/galleryimg24" },
        { id: 25, link: "/galleryimg25" },
        { id: 26, link: "/galleryimg26" },
        { id: 27, link: "/galleryimg27" },
        { id: 28, link: "/galleryimg28" },
        { id: 29, link: "/galleryimg29" },
        { id: 30, link: "/galleryimg30" },
        { id: 31, link: "/galleryimg31" },
        { id: 32, link: "/galleryimg32" },
        { id: 33, link: "/galleryimg33" },
        { id: 34, link: "/galleryimg34" },
        { id: 35, link: "/galleryimg35" },
        { id: 36, link: "/galleryimg36" },
        { id: 37, link: "/galleryimg37" },
        { id: 38, link: "/galleryimg38" },
        { id: 39, link: "/galleryimg39" },
        { id: 40, link: "/galleryimg40" },
      ].map((image) => ({
        id: image.id,
        link: image.link,
        image: require(`@/assets/galleryimages/galleryimg${image.id}.jpg`),
      })),
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
.container {
  padding-top: 57px;
  background-image: url("@/assets/backgroundpatterns.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 95%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
}

.gallerycontainer {
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  height: 100%;
  width: 84%;
  overflow: visible;
}
.leftsection {
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 25%;
}

.leftsection h1 {
  width: 320px;
  color: #000;
  font-family: Barlow Condensed;
  font-size: 56px;
  font-weight: 700;
}

.leftsection .socialsinfocontainer {
  width: 390px;
  display: flex;
  align-items: flex-end;
  gap: 24px;
}

.leftsection .socialsinfocontainer h3 {
  color: #000;
  font-family: Barlow Condensed;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* width: 90%; */
}

.leftsection .socialsinfocontainer .line {
  width: 12%;
  height: 3px;
  background-color: black;
}

.leftsection .socialsinfocontainer .socialicons {
  display: flex;
  gap: 10px;
}

.icon {
  color: #000;
  width: 20px;
  height: 20px;
}

.icon:hover {
  color: #fff;
}

.rightsection {
  display: flex;
  gap: 40px 40px;
  flex-wrap: wrap;
  width: 100%;
  max-height: calc(100vh - 180px);
  overflow-y: auto;
  padding-right: 10px;
}

.rightsection::-webkit-scrollbar {
  width: 5px;
}

.rightsection::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 8px;
}

.rightsection::-webkit-scrollbar-thumb:hover {
  background-color: #e6e6e6;
}

.imagecontainer {
  border: 8px solid rgba(0, 0, 0, 0.2);
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    lightgray 50% / cover no-repeat;
  box-shadow: 21px 15px 40px -14px rgba(0, 0, 0, 0.25);
  width: 380px;
  height: 500px;
  overflow: hidden;
}

.imagecontainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* MEDIA QUERIES */
/* Extra Extra Large Devices (Large Desktops and Widescreens): */
@media (min-width: 1201px) and (max-width: 1380px) {
  .container {
    padding-top: 57px;
    background-image: url("@/assets/backgroundpatterns.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
  }

  .gallerycontainer {
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    height: 100%;
    width: 91.5%;
    overflow: visible;
  }
  .leftsection {
    height: 70%;
    /* width: 30%; */
    display: flex;
    flex-direction: column;
    gap: 35%;
  }

  .leftsection h1 {
    width: 280px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 48px;
    font-weight: 700;
  }

  .leftsection .socialsinfocontainer {
    width: 360px;
    display: flex;
    align-items: flex-end;
    gap: 24px;
  }

  .leftsection .socialsinfocontainer h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* width: 90%; */
  }

  .leftsection .socialsinfocontainer .line {
    width: 6%;
    height: 3px;
    background-color: black;
  }

  .leftsection .socialsinfocontainer .socialicons {
    display: flex;
    gap: 10px;
  }

  .icon {
    color: #000;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: #fff;
  }

  .rightsection {
    display: flex;
    gap: 30px 30px;
    flex-wrap: wrap;
    width: 100%;
    max-height: calc(100vh - 180px);
    overflow-y: auto;
    padding-right: 10px;
  }

  .imagecontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      lightgray 50% / cover no-repeat;
    box-shadow: 21px 15px 40px -14px rgba(0, 0, 0, 0.25);
    width: 300px;
    height: 450px;
    overflow: hidden;
  }

  .imagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1200px) {
  .container {
    padding-top: 57px;
    background-image: url("@/assets/backgroundpatterns.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
  }

  .gallerycontainer {
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    height: 100%;
    width: 91.5%;
    overflow: visible;
  }
  .leftsection {
    height: 80%;
    /* width: 30%; */
    display: flex;
    flex-direction: column;
    gap: 15%;
  }

  .leftsection h1 {
    width: 280px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 48px;
    font-weight: 700;
  }

  .leftsection .socialsinfocontainer {
    width: 360px;
    display: flex;
    align-items: flex-end;
    gap: 24px;
  }

  .leftsection .socialsinfocontainer h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* width: 90%; */
  }

  .leftsection .socialsinfocontainer .line {
    width: 6%;
    height: 3px;
    background-color: black;
  }

  .leftsection .socialsinfocontainer .socialicons {
    display: flex;
    gap: 10px;
  }

  .icon {
    color: #000;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: #fff;
  }

  .rightsection {
    display: flex;
    gap: 30px 30px;
    flex-wrap: wrap;
    width: 100%;
    max-height: calc(100vh - 160px);
    overflow-y: auto;
    padding-right: 10px;
  }

  .imagecontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      lightgray 50% / cover no-repeat;
    box-shadow: 21px 15px 40px -14px rgba(0, 0, 0, 0.25);
    width: 420px;
    height: 460px;
    overflow: hidden;
  }

  .imagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/*Large Devices (Desktops and Small Laptops): */
@media (min-width: 769px) and (max-width: 992px) {
  .container {
    padding-top: 57px;
    background-image: url("@/assets/backgroundpatterns.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
  }

  .gallerycontainer {
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    height: 100%;
    width: 89.5%;
    overflow: visible;
  }
  .leftsection {
    height: 50%;
    /* width: 30%; */
    display: flex;
    flex-direction: column;
    gap: 25%;
  }

  .leftsection h1 {
    width: 235px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-weight: 700;
  }

  .leftsection .socialsinfocontainer {
    width: 235px;
    display: flex;
    align-items: flex-end;
    gap: 24px;
  }

  .leftsection .socialsinfocontainer h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* width: 90%; */
  }

  .leftsection .socialsinfocontainer .line {
    width: 6%;
    height: 3px;
    background-color: black;
  }

  .leftsection .socialsinfocontainer .socialicons {
    display: flex;
    gap: 10px;
  }

  .icon {
    color: #000;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: #fff;
  }

  .rightsection {
    display: flex;
    gap: 30px 30px;
    flex-wrap: wrap;
    width: 100%;
    max-height: calc(100vh - 160px);
    overflow-y: auto;
    padding-right: 10px;
  }

  .imagecontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      lightgray 50% / cover no-repeat;
    box-shadow: 21px 15px 40px -14px rgba(0, 0, 0, 0.25);
    width: 420px;
    height: 460px;
    overflow: hidden;
  }

  .imagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/*Medium Devices (Tablets): */
@media (min-width: 577px) and (max-width: 768px) {
  .container {
    padding-top: 0px;
    background-image: url("@/assets/backgroundpatterns.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 180vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .navbar {
    position: absolute;
    top: 57px;
  }

  .gallerycontainer {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    height: 200vh;
    width: 89.5%;
    overflow: visible;
  }
  .leftsection {
    height: 100vh;
    width: 100%;
    display: flex;
    padding-top: 180px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
  }

  .leftsection h1 {
    width: 100%;
    text-align: center;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 48px;
    font-weight: 700;
  }

  .leftsection .socialsinfocontainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .leftsection .socialsinfocontainer h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* width: 90%; */
  }

  .leftsection .socialsinfocontainer .line {
    width: 6%;
    height: 3px;
    background-color: black;
  }

  .leftsection .socialsinfocontainer .socialicons {
    display: flex;
    gap: 10px;
  }

  .icon {
    color: #000;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: #fff;
  }

  .rightsection {
    display: flex;
    gap: 30px 30px;
    flex-wrap: wrap;
    width: 100%;
    max-height: calc(100vh - 20px);
    overflow-y: auto;
    padding-right: 10px;
  }

  .imagecontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      lightgray 50% / cover no-repeat;
    box-shadow: 21px 15px 40px -14px rgba(0, 0, 0, 0.25);
    width: 480px;
    height: 520px;
    overflow: hidden;
  }

  .imagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 480px) and (max-width: 576px) {
  .container {
    padding-top: 0px;
    background-image: url("@/assets/backgroundpatterns.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 180vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .navbar {
    position: absolute;
    top: 57px;
  }

  .gallerycontainer {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    height: 200vh;
    width: 89.5%;
    overflow: visible;
  }
  .leftsection {
    height: 100vh;
    width: 100%;
    padding-top: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
  }

  .leftsection h1 {
    width: 100%;
    text-align: center;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 48px;
    font-weight: 700;
  }

  .leftsection .socialsinfocontainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .leftsection .socialsinfocontainer h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* width: 90%; */
  }

  .leftsection .socialsinfocontainer .line {
    width: 6%;
    height: 3px;
    background-color: black;
  }

  .leftsection .socialsinfocontainer .socialicons {
    display: flex;
    gap: 10px;
  }

  .icon {
    color: #000;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: #fff;
  }

  .rightsection {
    display: flex;
    gap: 30px 30px;
    flex-wrap: wrap;
    width: 100%;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    padding-right: 10px;
  }

  .imagecontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      lightgray 50% / cover no-repeat;
    box-shadow: 21px 15px 40px -14px rgba(0, 0, 0, 0.25);
    width: 480px;
    height: 520px;
    overflow: hidden;
  }

  .imagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 400px) and (max-width: 479px) {
  .container {
    padding-top: 0px;
    background-image: url("@/assets/backgroundpatterns.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 180vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .navbar {
    position: absolute;
    top: 57px;
  }

  .gallerycontainer {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    height: 200vh;
    width: 89.5%;
    overflow: visible;
  }
  .leftsection {
    height: 100vh;
    width: 100%;
    padding-top: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
  }

  .leftsection h1 {
    width: 100%;
    text-align: center;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 48px;
    font-weight: 700;
  }

  .leftsection .socialsinfocontainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .leftsection .socialsinfocontainer h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* width: 90%; */
  }

  .leftsection .socialsinfocontainer .line {
    width: 6%;
    height: 3px;
    background-color: black;
  }

  .leftsection .socialsinfocontainer .socialicons {
    display: flex;
    gap: 10px;
  }

  .icon {
    color: #000;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: #fff;
  }

  .rightsection {
    display: flex;
    gap: 30px 30px;
    flex-wrap: wrap;
    width: 100%;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    padding-right: 10px;
  }

  .imagecontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      lightgray 50% / cover no-repeat;
    box-shadow: 21px 15px 40px -14px rgba(0, 0, 0, 0.25);
    width: 480px;
    height: 520px;
    overflow: hidden;
  }

  .imagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/*Extra Small Devices (Phones) */
@media (max-width: 399px) {
  .container {
    padding-top: 0px;
    background-image: url("@/assets/backgroundpatterns.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 180vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .navbar {
    position: absolute;
    top: 57px;
  }

  .gallerycontainer {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
    height: 200vh;
    width: 89.5%;
    overflow: visible;
  }
  .leftsection {
    height: 100vh;
    width: 100%;
    padding-top: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
  }

  .leftsection h1 {
    width: 100%;
    text-align: center;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 48px;
    font-weight: 700;
  }

  .leftsection .socialsinfocontainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .leftsection .socialsinfocontainer h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* width: 90%; */
  }

  .leftsection .socialsinfocontainer .line {
    width: 6%;
    height: 3px;
    background-color: black;
  }

  .leftsection .socialsinfocontainer .socialicons {
    display: flex;
    gap: 10px;
  }

  .icon {
    color: #000;
    width: 20px;
    height: 20px;
  }

  .icon:hover {
    color: #fff;
  }

  .rightsection {
    display: flex;
    gap: 30px 30px;
    flex-wrap: wrap;
    width: 100%;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    padding-right: 10px;
    margin-top: 20px;
  }

  .imagecontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      lightgray 50% / cover no-repeat;
    box-shadow: 21px 15px 40px -14px rgba(0, 0, 0, 0.25);
    width: 380px;
    height: 480px;
    overflow: hidden;
  }

  .imagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
