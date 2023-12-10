<template>
  <nav
    :class="{
      'dark-text': isDark,
      'light-text': isLight,
      'contact-style': isContact,
    }"
  >
    <div class="logo">
      <p>Fashion De Afrik</p>
    </div>
    <div class="nav-item-container">
      <router-link :to="{ name: 'About' }"
        ><div class="nav-item">About</div></router-link
      >
      <router-link :to="{ name: 'Collections' }"
        ><div class="nav-item">Collections</div></router-link
      >
      <router-link :to="{ name: 'Gallery' }"
        ><div class="nav-item">Gallery</div></router-link
      >
      <router-link :to="{ name: 'Store' }"
        ><div class="nav-item">Store</div></router-link
      >
      <router-link :to="{ name: 'Contact' }"
        ><div class="nav-item">Contact</div></router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    isDark: false,
    isLight: true,
    isContact: false,
  },
};
</script>

<style scoped>
/**
*!NAVNAR WITH DARK TEXT STYLING
*/
nav.dark-text {
  display: flex;
  width: 1290px;
  margin: 0 auto;
  justify-content: space-between;
}
nav.dark-text .logo {
  color: #000;
  font-family: Barlow Condensed;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
nav.dark-text .nav-item-container {
  display: flex;
  justify-content: space-between;
  gap: 64px;
}

nav.dark-text .nav-item {
  color: #000;
  font-family: Barlow Condensed;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

nav.dark-text a {
  text-decoration: none;
  color: #000;
  font-size: 26px;
  font-weight: 500;
  cursor: pointer;
}

nav.dark-text .nav-item:hover {
  color: #fff;
  padding-bottom: 8px;
  border-bottom: 3px solid #fff;
}

nav.dark-text .active .nav-item {
  color: #fff;
  padding-bottom: 8px;
  border-bottom: 3px solid #fff;
}

/**
*!NAVNAR WITH LIGHT TEXT STYLING
*/
nav.light-text {
  display: flex;
  width: 1290px;
  margin: 0 auto;
  justify-content: space-between;
}
nav.light-text .logo {
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
nav.light-text .nav-item-container {
  display: flex;
  justify-content: space-between;
  gap: 64px;
}

nav.light-text .nav-item {
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

nav.light-text a {
  text-decoration: none;
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  cursor: pointer;
}

nav.light-text .nav-item:hover {
  color: yellow;
  padding-bottom: 8px;
  border-bottom: 3px solid yellow;
}

nav.light-text .active .nav-item {
  color: yellow;
  padding-bottom: 8px;
  border-bottom: 3px solid yellow;
}

/**
*!NAVNAR WITH CONTACT TEXT STYLING
*/
nav.contact-style {
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  padding-left: 2.5%;
}
nav.contact-style .logo {
  color: #000;
  font-family: Barlow Condensed;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
nav.contact-style .nav-item-container {
  display: flex;
  justify-content: space-between;
  gap: 64px;
}

nav.contact-style .nav-item {
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

nav.contact-style a {
  text-decoration: none;
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  cursor: pointer;
}

nav.contact-style .nav-item:hover {
  color: yellow;
  padding-bottom: 8px;
  border-bottom: 3px solid yellow;
}

nav.contact-style .active .nav-item {
  color: yellow;
  padding-bottom: 8px;
  border-bottom: 3px solid yellow;
}

/* MEDIA QUERIES */
/* Extra Extra Large Devices (Large Desktops and Widescreens): */
@media (min-width: 1201px) and (max-width: 1380px) {
  /**
*!NAVNAR WITH DARK TEXT STYLING
*/
  nav.dark-text {
    display: flex;
    width: 1100px;
    margin: 0 auto;
    justify-content: space-between;
  }

  /**
*!NAVNAR WITH LIGHT TEXT STYLING
*/
  nav.light-text {
    display: flex;
    width: 1160px;
    margin: 0 auto;
    justify-content: space-between;
  }

  /**
*!NAVNAR WITH CONTACT TEXT STYLING
*/
  nav.contact-style {
    display: flex;
    width: 93%;
    /* margin: 0 auto; */
    justify-content: space-between;
    padding-left: 2.5%;
  }

  nav.contact-style .nav-item-container {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
}

/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1200px) {
  /**
*!NAVNAR WITH DARK TEXT STYLING
*/
  nav.dark-text {
    display: flex;
    width: 890px;
    margin: 0 auto;
    justify-content: space-between;
  }
  nav.dark-text .logo {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  nav.dark-text .nav-item-container {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  nav.dark-text .nav-item {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  nav.dark-text a {
    text-decoration: none;
    color: #000;
    font-size: 26px;
    font-weight: 500;
    cursor: pointer;
  }

  nav.dark-text .nav-item:hover {
    color: #fff;
    padding-bottom: 8px;
    border-bottom: 3px solid #fff;
  }

  nav.dark-text .active .nav-item {
    color: #fff;
    padding-bottom: 8px;
    border-bottom: 3px solid #fff;
  }

  /**
*!NAVNAR WITH LIGHT TEXT STYLING
*/
  nav.light-text {
    display: flex;
    width: 890px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: flex-end;
  }

  nav.light-text .logo {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  nav.light-text .nav-item-container {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  nav.light-text .nav-item {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  nav.light-text a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }

  /**
*!NAVNAR WITH CONTACT TEXT STYLING
*/
  nav.contact-style {
    display: flex;
    width: 93%;
    /* margin: 0 auto; */
    justify-content: space-between;
    padding-left: 2.5%;
  }

  nav.contact-style .logo {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  nav.contact-style .nav-item-container {
    display: flex;
    justify-content: space-between;
    gap: 32px;
  }

  nav.contact-style .nav-item {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  nav.contact-style a {
    text-decoration: none;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    cursor: pointer;
  }
}

/*Large Devices (Desktops and Small Laptops): */
@media (min-width: 769px) and (max-width: 992px) {
  /**
*!NAVNAR WITH DARK TEXT STYLING
*/
  nav.dark-text {
    display: flex;
    width: 690px;
    margin: 0 auto;
    justify-content: space-between;
  }
  nav.dark-text .logo {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  nav.dark-text .nav-item-container {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  nav.dark-text .nav-item {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  nav.dark-text a {
    text-decoration: none;
    color: #000;
    font-size: 26px;
    font-weight: 500;
    cursor: pointer;
  }

  nav.dark-text .nav-item:hover {
    color: #fff;
    padding-bottom: 8px;
    border-bottom: 3px solid #fff;
  }

  nav.dark-text .active .nav-item {
    color: #fff;
    padding-bottom: 8px;
    border-bottom: 3px solid #fff;
  }

  /**
*!NAVNAR WITH LIGHT TEXT STYLING
*/
  nav.light-text {
    display: flex;
    width: 690px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: flex-end;
  }

  nav.light-text .logo {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  nav.light-text .nav-item-container {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  nav.light-text .nav-item {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  nav.light-text a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }

  /**
*!NAVNAR WITH CONTACT TEXT STYLING
*/
  nav.contact-style {
    display: flex;
    width: 93%;
    /* margin: 0 auto; */
    justify-content: space-between;
    padding-left: 1.4%;
  }

  nav.contact-style .logo {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  nav.contact-style .nav-item-container {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  nav.contact-style .nav-item {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  nav.contact-style a {
    text-decoration: none;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    cursor: pointer;
  }
}
</style>
