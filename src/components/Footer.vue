<template>
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
        <RouterLink :to="{ name: 'About' }"
          ><p class="links">About</p></RouterLink
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
//Importing Iconify components
import { Icon } from "@iconify/vue";

export default {
  name: "Footer",
  components: {
    Icon,
  },
};
</script>

<style scoped>
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
  /* width: 400px; */
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
    /* width: 400px; */
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
}

/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1200px) {
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
