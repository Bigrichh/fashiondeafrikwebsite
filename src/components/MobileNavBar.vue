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

    <div class="navigation-icon" @click="toggleShowDropdown">
      <Icon
        class="icon"
        v-if="!showDropdown"
        icon="solar:hamburger-menu-linear"
      />
      <Icon class="icon" v-if="showDropdown" icon="mingcute:close-line" />
      <div class="dropdown" v-show="showDropdown">
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
      </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "MobileNavBar",
  components: {
    Icon,
  },
  props: {
    isDark: false,
    isLight: true,
    isContact: false,
  },

  data() {
    return {
      showDropdown: false,
    };
  },

  methods: {
    toggleShowDropdown() {
      this.showDropdown = !this.showDropdown;
    },
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
/*Medium Devices (Tablets): */
@media (min-width: 577px) and (max-width: 768px) {
  /**
  *!NAVNAR WITH DARK TEXT STYLING
  */
  nav.dark-text {
    display: flex;
    width: 490px;
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
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
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

  nav.dark-text .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  nav.dark-text .icon {
    width: 40px;
    height: 40px;
    color: #000;
  }

  nav.dark-text .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
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
    width: 490px;
    margin: 0 auto;
    justify-content: space-between;
  }

  nav.light-text .logo {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  nav.light-text .icon {
    width: 40px;
    height: 40px;
    color: #fff;
  }

  nav.light-text .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  nav.light-text .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
  }

  nav.light-text .nav-item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
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
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  nav.contact-style .nav-item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }

  nav.contact-style .nav-item {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  nav.contact-style .icon {
    width: 40px;
    height: 40px;
    color: #fff;
  }

  nav.contact-style .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  nav.contact-style .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
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
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 480px) and (max-width: 576px) {
  /**
  *!NAVNAR WITH DARK TEXT STYLING
  */
  nav.dark-text {
    display: flex;
    width: 400px;
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
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
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
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }

  nav.dark-text .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  nav.dark-text .icon {
    width: 32px;
    height: 32px;
    color: #000;
  }

  nav.dark-text .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
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
    width: 400px;
    margin: 0 auto;
    justify-content: space-between;
  }

  nav.light-text .logo {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .icon {
    width: 32px;
    height: 32px;
    color: #fff;
  }

  .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
  }

  nav.light-text .nav-item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
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
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  nav.contact-style .nav-item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }

  nav.contact-style .nav-item {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  nav.contact-style .icon {
    width: 32px;
    height: 32px;
    color: #fff;
  }

  nav.contact-style .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  nav.contact-style .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
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
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 400px) and (max-width: 479px) {
  /**
  *!NAVNAR WITH DARK TEXT STYLING
  */
  nav.dark-text {
    display: flex;
    width: 370px;
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
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
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
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }

  nav.dark-text .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  nav.dark-text .icon {
    width: 32px;
    height: 32px;
    color: #000;
  }

  nav.dark-text .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
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
    width: 370px;
    margin: 0 auto;
    justify-content: space-between;
  }

  nav.light-text .logo {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .icon {
    width: 32px;
    height: 32px;
    color: #fff;
  }

  .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
  }

  nav.light-text .nav-item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
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
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
    padding-left: 2.5%;
  }
  nav.contact-style .logo {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  nav.contact-style .nav-item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }

  nav.contact-style .nav-item {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  nav.contact-style .icon {
    width: 32px;
    height: 32px;
    color: #fff;
  }

  nav.contact-style .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  nav.contact-style .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
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
}

/*Extra Small Devices (Phones) */
@media (max-width: 399px) {
  /**
  *!NAVNAR WITH DARK TEXT STYLING
  */
  nav.dark-text {
    display: flex;
    width: 300px;
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
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
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
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }

  nav.dark-text .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  nav.dark-text .icon {
    width: 32px;
    height: 32px;
    color: #000;
  }

  nav.dark-text .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
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
    width: 290px;
    margin: 0 auto;
    justify-content: space-between;
  }

  nav.light-text .logo {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .icon {
    width: 32px;
    height: 32px;
    color: #fff;
  }

  .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
  }

  nav.light-text .nav-item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
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
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
    padding-left: 2.5%;
  }
  nav.contact-style .logo {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  nav.contact-style .nav-item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }

  nav.contact-style .nav-item {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  nav.contact-style .icon {
    width: 32px;
    height: 32px;
    color: #fff;
  }

  nav.contact-style .navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }

  nav.contact-style .dropdown {
    background-color: rgba(0, 0, 0, 0.3);
    width: 120px;
    height: fit-content;
    padding: 16px;
    border-radius: 4px;
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
}
</style>
