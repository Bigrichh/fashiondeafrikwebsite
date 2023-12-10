<template>
  <div class="collectionstemplate">
    <div class="leftsection">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="swipercontainer">
      <swiper
        :cssMode="true"
        :navigation="true"
        :pagination="true"
        :mousewheel="true"
        :keyboard="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <div
            class="background"
            :class="imageContainerClass"
            :style="{
              backgroundImage: `linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ), url(${image})`,
            }"
          ></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default {
  name: "CollectionsCard",
  props: {
    images: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageContainerClass: {
      type: String,
      default: "default-image-container", // Default class if not provided
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>

<style scoped>
.collectionstemplate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1290px;
  margin: 100px auto 200px;
}

.leftsection {
  display: flex;
  width: 523px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
}

.leftsection h2 {
  color: #000;
  font-family: Barlow Condensed;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 800px;
}

.leftsection p {
  color: #000;
  font-family: Montserrat;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 650px;
}

.swipercontainer {
  border: 8px solid rgba(0, 0, 0, 0.2);
  width: 485px;
  height: 540px;
  overflow: hidden;
}

.background {
  width: 485px;
  height: 529px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}

/* MEDIA QUERIES */
/* Extra Extra Large Devices (Large Desktops and Widescreens): */
@media (min-width: 1201px) and (max-width: 1380px) {
  .collectionstemplate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1060px;
    margin: 100px auto 200px;
  }

  .leftsection {
    display: flex;
    width: 523px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
  }

  .leftsection h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 500px;
  }

  .leftsection p {
    color: #000;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 500px;
  }

  .swipercontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    width: 485px;
    height: 540px;
    overflow: hidden;
  }

  .background {
    width: 485px;
    height: 529px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
}

/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1200px) {
  .collectionstemplate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 870px;
    margin: 100px auto 200px;
  }

  .leftsection {
    display: flex;
    width: 523px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
  }

  .leftsection h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 400px;
  }

  .leftsection p {
    color: #000;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 400px;
  }

  .swipercontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    width: 485px;
    height: 540px;
    overflow: hidden;
  }

  .background {
    width: 485px;
    height: 529px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
}

/*Large Devices (Desktops and Small Laptops): */
@media (min-width: 769px) and (max-width: 992px) {
  .collectionstemplate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 650px;
    margin: 100px auto 200px;
  }

  .leftsection {
    display: flex;
    width: 323px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
  }

  .leftsection h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 300px;
  }

  .leftsection p {
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 250px;
  }

  .swipercontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    width: 385px;
    height: 540px;
    overflow: hidden;
  }

  .background {
    width: 485px;
    height: 529px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
}

/*Medium Devices (Tablets): */
@media (min-width: 577px) and (max-width: 768px) {
  .collectionstemplate {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    width: 100%;
    margin: 100px auto 100px;
  }

  .leftsection {
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  .leftsection h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 80%;
  }

  .leftsection p {
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 80%;
  }

  .swipercontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    width: 385px;
    height: 540px;
    overflow: hidden;
  }

  .background {
    width: 485px;
    height: 529px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 480px) and (max-width: 576px) {
  .collectionstemplate {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    width: 100%;
    margin: 100px auto 100px;
  }

  .leftsection {
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  .leftsection h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 80%;
  }

  .leftsection p {
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 80%;
  }

  .swipercontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    width: 385px;
    height: 540px;
    overflow: hidden;
  }

  .background {
    width: 485px;
    height: 529px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 400px) and (max-width: 479px) {
  .collectionstemplate {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    width: 100%;
    margin: 100px auto 100px;
  }

  .leftsection {
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  .leftsection h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 80%;
  }

  .leftsection p {
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 80%;
  }

  .swipercontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    width: 385px;
    height: 540px;
    overflow: hidden;
  }

  .background {
    width: 485px;
    height: 529px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
}

/*Extra Small Devices (Phones) */
@media (max-width: 399px) {
  .collectionstemplate {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    width: 100%;
    margin: 100px auto 100px;
  }

  .leftsection {
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  .leftsection h2 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 80%;
  }

  .leftsection p {
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 80%;
  }

  .swipercontainer {
    border: 8px solid rgba(0, 0, 0, 0.2);
    width: 300px;
    height: 540px;
    overflow: hidden;
  }

  .background {
    width: 485px;
    height: 529px;
    background-size: 80% 100%;
    background-repeat: no-repeat;
    background-position: -70px center;
  }
}
</style>
