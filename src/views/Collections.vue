<template>
  <div class="container">
    <!-- NavBar component -->
    <div class="navbar">
      <NavBar v-if="!mobileView" :isDark="true" :isLight="false"></NavBar>
      <MobileNavBar
        v-if="mobileView"
        :isDark="true"
        :isLight="false"
      ></MobileNavBar>
    </div>

    <div class="collectionscontainer">
      <!-- first section -->
      <div class="collectionstemplate">
        <div class="leftsection">
          <h2>Welcome to Our Collections</h2>
          <p class="landingpageparagraph">
            Dive into the heart of our brand through a curated selection of
            meticulously crafted collections that embody the spirit of Fashion
            De Afrik. Each collection is a celebration of heritage, style, and
            innovation, reflecting the diverse influences that inspire our
            designs. Explore and discover the perfect blend of tradition and
            modernity, designed to elevate your wardrobe with a touch of
            cultural sophistication.
          </p>
        </div>
        <div class="gif-container">
          <img class="gif" src="@/assets/gif.gif" alt="gif" />
        </div>
      </div>

      <!-- Safari Suit Collection -->
      <CollectionsCard
        :images="safarisuitimages"
        image-container-class="custom-image-class"
        :title="'Safari Suits'"
        :description="`Introducing our exclusive 'Safari Suit' collection,
            a hallmark of bespoke tailoring with an authentic African touch. 
            .Each piece in this collection embodies a harmonious blend of traditional 
            craftsmanship and contemporary design. The 'Safari Suit' is not merely an ensemble; it's a testament 
            to the brand's commitment to delivering refined, individualized style .
                     Elevate your wardrobe with these exceptional suits, where every stitch tells a story of heritage,
                      precision, and a distinctive African identity.`"
      >
      </CollectionsCard>

      <!-- Kaftan Collection -->
      <CollectionsCard
        :images="kaftancollectionimages"
        image-container-class="custom-image-class"
        :title="'Kaftan Collection'"
        :description="` Dive into a world of vibrant style and cultural richness with
                  our 'Kaftan Collection' – a celebration of bespoke African print kaftans meticulously crafted to redefine your
                  fashion experience. Each kaftan in this collection is a unique masterpiece, blending traditional African prints
                  with modern tailoring. Whether you're attending festive gatherings or seeking everyday elegance, our tailor-made
                  kaftans offer the perfect fusion of comfort, versatility, and cultural expression. Elevate your wardrobe with
                  these distinctive pieces that speak to the heart of African heritage, encapsulating the spirit of Fashion De Afrik
                  in every stitch and pattern.`"
      >
      </CollectionsCard>

      <!-- Corporate Kaftan Collection -->
      <CollectionsCard
        :images="corporatekaftanimages"
        image-container-class="custom-image-class"
        :title="'Corporate Kaftan'"
        :description="`Introducing our 'Corporate Kaftan' Collection  a wardrobe tailored
                                    for the contemporary man. Carefully chosen corporate colors
                                    effortlessly transition from office to social scenes, ensuring
                                    you're impeccably dressed for every occasion. Embrace the fusion of
                                                    style and versatility, designed to elevate your daily presence with
                                                    ease.`"
      ></CollectionsCard>

      <!-- Tropical Collection -->
      <CollectionsCard
        :images="tropicalimages"
        image-container-class="custom-image-class"
        :title="'Tropical Collection'"
        :description="`Dive into the relaxed and stylish vibe of our 'Tropical Collection.' Tailored for the easy-going and charismatic, this collection is perfect for individuals who appreciate a casual yet refined look. The outfits in this collection feature comfortable cuts, playful patterns, and a touch of African flair, making them ideal for various occasions. From social gatherings to hosting events, the Tropical Collection effortlessly blends ease with sophistication, ensuring you stand out with charm. Embrace the carefree spirit of casual elegance with Fashion De Afrik's Tropical Collection.`"
      >
      </CollectionsCard>

      <!-- Smart Lean Shirt Collection -->
      <CollectionsCard
        :images="smartleanshirtimages"
        image-container-class="custom-image-class"
        :title="'Smart Lean Shirt Collection'"
        :description="`Discover our 'Smart Lean Shirt Collection'—tailor-made shirts for a sleek and stylish look. Perfect for the office or any social occasion, these shirts offer a modern fit that combines sophistication with comfort. Each shirt is crafted with precision, reflecting our dedication to quality and refined style. Elevate your wardrobe with Fashion De Afrik's bespoke shirts, where simple elegance meets everyday comfort.`"
      >
      </CollectionsCard>

      <!-- Three Piece Agbada/Dashiki Collection -->
      <CollectionsCard
        :images="threepieceagbadadashiki"
        image-container-class="custom-image-class"
        :title="'3 Piece Agbada/Dashiki'"
        :description="` Discover the perfect ensemble for your special moments with our 3 piece Agbada/Dashiki Collection. Tailored for traditional engagements, weddings, and name ceremonies, our outfits embrace a palette of elegant and vibrant colors including white, off-white, and light blue. Personalization is key, and we take pride in offering intricate embroidery on our Agbada and Dashiki designs. Whether it's digital or machine embroidery, the choice is yours, allowing you to express your unique style and cultural significance on your memorable occasions.`"
      >
      </CollectionsCard>

      <!-- De Afrik Black Collection -->
      <CollectionsCard
        :images="deafrikblack"
        image-container-class="custom-image-class"
        :title="'De Afrik Black'"
        :description="`Explore our De Afrik Black Collection, primarily designed for funerals yet versatile enough for official occasions. We prioritize the essence of solemnity and professionalism by offering high-quality black fabrics. Our pieces are crafted to seamlessly transition from moments of remembrance to formal settings, ensuring you convey dignity and style in every circumstance.`"
      >
      </CollectionsCard>

      <!-- Smart Casual Collection -->
      <CollectionsCard
        :images="smartcasual"
        image-container-class="custom-image-class"
        :title="'Smart Casual'"
        :description="`Step into effortless style with our Smart Casual Collection, featuring an array of fashion-forward pieces. From the sophistication of Kimonos and Cow Neck Kimonos to the laid-back charm of Shirt on Shorts and Vintage Shirts, our collection is designed to elevate your look for parties and all social gatherings. Embrace versatility with Casual Shirts that seamlessly blend comfort and trend, ensuring you make a statement at every event.`"
      >
      </CollectionsCard>

      <!-- Ladies Kimono Collection -->
      <CollectionsCard
        :images="ladieskimono"
        image-container-class="custom-image-class"
        :title="'Ladies Kimono & Kaftan'"
        :description="`Our ladies are not left out`"
      >
      </CollectionsCard>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MobileNavBar from "@/components/MobileNavBar.vue";
import CollectionsCard from "@/components/CollectionsCard.vue";
import Footer from "@/components/Footer.vue";

//Importing Iconify components
import { Icon } from "@iconify/vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default {
  name: "Collections",
  components: {
    NavBar,
    MobileNavBar,
    Swiper,
    SwiperSlide,
    Icon,
    Footer,
    CollectionsCard,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
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

  data() {
    return {
      safarisuitimages: [
        require("@/assets/collectionimages/safarisuitsimages/safarisuit1.jpg"),
        require("@/assets/collectionimages/safarisuitsimages/safarisuit2.jpg"),
        require("@/assets/collectionimages/safarisuitsimages/safarisuit3.jpg"),
        require("@/assets/collectionimages/safarisuitsimages/safarisuit4.jpg"),
        require("@/assets/collectionimages/safarisuitsimages/safarisuit5.jpg"),
        require("@/assets/collectionimages/safarisuitsimages/safarisuit6.jpg"),
        require("@/assets/collectionimages/safarisuitsimages/safarisuit7.jpg"),
        // Add more images as needed
      ],
      kaftancollectionimages: [
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection1.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection2.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection3.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection4.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection5.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection6.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection7.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection8.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection9.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection10.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection11.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection12.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection13.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection14.jpg"),
        require("@/assets/collectionimages/kaftancollectionimages/kaftancollection15.jpg"),
        // Add more images as needed
      ],
      corporatekaftanimages: [
        require("@/assets/collectionimages/corporatekaftanimages/corporatekaftan1.jpg"),
        require("@/assets/collectionimages/corporatekaftanimages/corporatekaftan2.jpg"),
        require("@/assets/collectionimages/corporatekaftanimages/corporatekaftan3.jpg"),
        require("@/assets/collectionimages/corporatekaftanimages/corporatekaftan4.jpg"),
        require("@/assets/collectionimages/corporatekaftanimages/corporatekaftan5.jpg"),
        require("@/assets/collectionimages/corporatekaftanimages/corporatekaftan6.jpg"),
        // Add more images as needed
      ],
      tropicalimages: [
        require("@/assets/collectionimages/tropicalimages/tropicalimage1.jpg"),
        require("@/assets/collectionimages/tropicalimages/tropicalimage2.jpg"),
        require("@/assets/collectionimages/tropicalimages/tropicalimage3.jpg"),
        require("@/assets/collectionimages/tropicalimages/tropicalimage4.jpg"),
        // Add more images as needed
      ],
      smartleanshirtimages: [
        require("@/assets/collectionimages/smartleanshirtimages/smartleanshirt1.jpg"),
        // Add more images as needed
      ],
      threepieceagbadadashiki: [
        require("@/assets/collectionimages/threepieceagbadaimages/threepieceagbada2.jpg"),
        require("@/assets/collectionimages/threepieceagbadaimages/threepieceagbada1.jpg"),
        require("@/assets/collectionimages/threepieceagbadaimages/threepieceagbada3.jpg"),
        require("@/assets/collectionimages/threepieceagbadaimages/threepieceagbada4.jpg"),
        require("@/assets/collectionimages/threepieceagbadaimages/threepieceagbada5.jpg"),
        require("@/assets/collectionimages/threepieceagbadaimages/threepieceagbada6.jpg"),
        require("@/assets/collectionimages/threepieceagbadaimages/threepieceagbada7.jpg"),
        require("@/assets/collectionimages/threepieceagbadaimages/threepieceagbada8.jpg"),
        require("@/assets/collectionimages/threepieceagbadaimages/threepieceagbada9.jpg"),
        // Add more images as needed
      ],
      deafrikblack: [
        require("@/assets/collectionimages/deafrikblackimages/defrikblack1.jpg"),
        require("@/assets/collectionimages/deafrikblackimages/defrikblack2.jpg"),
        require("@/assets/collectionimages/deafrikblackimages/defrikblack3.jpg"),
        require("@/assets/collectionimages/deafrikblackimages/defrikblack4.jpg"),
        require("@/assets/collectionimages/deafrikblackimages/defrikblack5.jpg"),
        require("@/assets/collectionimages/deafrikblackimages/defrikblack6.jpg"),
        require("@/assets/collectionimages/deafrikblackimages/defrikblack7.jpg"),
        require("@/assets/collectionimages/deafrikblackimages/defrikblack8.jpg"),
        require("@/assets/collectionimages/deafrikblackimages/defrikblack9.jpg"),
        require("@/assets/collectionimages/deafrikblackimages/defrikblack10.jpg"),
        require("@/assets/collectionimages/deafrikblackimages/defrikblack11.jpg"),
        require("@/assets/collectionimages/deafrikblackimages/defrikblack12.jpg"),
        // Add more images as needed
      ],
      smartcasual: [
        require("@/assets/collectionimages/smartcasualimages/smartcasual1.jpg"),
        require("@/assets/collectionimages/smartcasualimages/smartcasual2.jpg"),
        require("@/assets/collectionimages/smartcasualimages/smartcasual3.jpg"),
        require("@/assets/collectionimages/smartcasualimages/smartcasual4.jpg"),
        require("@/assets/collectionimages/smartcasualimages/smartcasual5.jpg"),
        require("@/assets/collectionimages/smartcasualimages/smartcasual6.jpg"),
        require("@/assets/collectionimages/smartcasualimages/smartcasual7.jpg"),
        require("@/assets/collectionimages/smartcasualimages/smartcasual8.jpg"),
        require("@/assets/collectionimages/smartcasualimages/smartcasual9.jpg"),
        // Add more images as needed
      ],
      ladieskimono: [
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono1.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono2.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono3.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono4.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono5.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono6.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono7.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono8.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono9.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono10.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono11.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono12.jpg"),
        require("@/assets/collectionimages/ladieskimonoimages/ladieskimono13.jpg"),

        // Add more images as needed
      ],
    };
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
  overflow-y: scroll;
}

.container::-webkit-scrollbar {
  width: 8px;
}

.container::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 8px;
}

.container::-webkit-scrollbar-thumb:hover {
  background-color: #e6e6e6;
}

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

.leftsection p.landingpageparagraph {
  width: 800px;
}

.gif {
  transform: scaleX(-1) rotate(240deg);
  opacity: 0.4;
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
    overflow-y: scroll;
  }

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

  .leftsection p.landingpageparagraph {
    width: 700px;
  }

  .gif {
    transform: scaleX(-1) rotate(240deg);
    opacity: 0.4;
    width: 350px;
    height: auto;
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
    overflow-y: scroll;
  }

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

  .leftsection p.landingpageparagraph {
    width: 500px;
  }

  .gif {
    transform: scaleX(-1) rotate(240deg);
    opacity: 0.4;
    width: 300px;
    height: auto;
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
    overflow-y: scroll;
  }

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

  .leftsection p.landingpageparagraph {
    width: 350px;
  }

  .gif {
    transform: scaleX(-1) rotate(240deg);
    opacity: 0.4;
    width: 300px;
    height: auto;
  }
}

/*Medium Devices (Tablets): */
@media (min-width: 577px) and (max-width: 768px) {
  .container {
    padding-top: 57px;
    background-image: url("@/assets/backgroundpatterns.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
  }

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

  .leftsection p.landingpageparagraph {
    width: 80%;
  }

  .gif {
    transform: scaleX(-1) rotate(240deg);
    opacity: 0.4;
    width: 300px;
    height: auto;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 480px) and (max-width: 576px) {
  .container {
    padding-top: 57px;
    background-image: url("@/assets/backgroundpatterns.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
  }

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

  .leftsection p.landingpageparagraph {
    width: 80%;
  }

  .gif {
    transform: scaleX(-1) rotate(240deg);
    opacity: 0.4;
    width: 300px;
    height: auto;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 400px) and (max-width: 479px) {
  .container {
    padding-top: 57px;
    background-image: url("@/assets/backgroundpatterns.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
  }

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

  .leftsection p.landingpageparagraph {
    width: 80%;
  }

  .gif {
    transform: scaleX(-1) rotate(240deg);
    opacity: 0.4;
    width: 200px;
    height: auto;
  }
}

/*Extra Small Devices (Phones) */
@media (max-width: 399px) {
  .container {
    padding-top: 57px;
    background-image: url("@/assets/backgroundpatterns.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
  }

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

  .leftsection p.landingpageparagraph {
    width: 80%;
  }

  .gif {
    transform: scaleX(-1) rotate(240deg);
    opacity: 0.4;
    width: 200px;
    height: auto;
  }
}
</style>
