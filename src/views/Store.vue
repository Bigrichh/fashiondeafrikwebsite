<template>
  <div class="container">
    <div class="nav">
      <!-- NavBar Commponent -->
      <NavBar v-if="!mobileView" :isDark="false" :isLight="true"></NavBar>
      <MobileNavBar
        v-if="mobileView"
        :isDark="false"
        :isLight="true"
      ></MobileNavBar>
    </div>
    <div class="landingtextcontainer">
      <h1>Coming Soon</h1>
      <p class="supportingtext">
        We are working hard to create a unique online store experience for our
        customers.Type in your email to get notified when the store is active.
        To view our products or get a custom tailored soultion visit any of our
        stores or <router-link :to="{ name: 'Contact' }">contact us</router-link>  to make an enquiry.
      </p>
      <form ref="form" @submit.prevent="sendEmail">
        <input
          name="email"
          v-model="email"
          type="email"
          placeholder="Type your email"
        />
        <button>Notify Me</button>
      </form>
    </div>
  </div>
</template>

<script>
// Import NavBar components
import NavBar from "@/components/NavBar.vue";
import MobileNavBar from "@/components/MobileNavBar.vue";

import emailjs from "@emailjs/browser";

export default {
  name: "Store",
  components: {
    NavBar,
    MobileNavBar,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_1ltu6qv",
          "template_610cj1p",
          this.$refs.form,
          "zuQERd3O06jUaUjRS"
        )
        .then((response) => {
          alert("Form has submitted sucessfully.");
          this.email = "";
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email");
        });
    },

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
  padding: 57px 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.78) 0%,
      rgba(0, 0, 0, 0.78) 100%
    ),
    url("@/assets/storebg.jpg"), lightgray;
  background-size: 100% 110%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.landingtextcontainer {
  width: 1290px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.supportingtext {
  color: #fff;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
}

h1 {
  color: #fff;
  font-family: Montserrat;
  font-size: 56px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 8px;
}

form {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 50px;
}

input {
  display: flex;
  width: 1070px;
  padding-top: 31px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 18px;
  background-color: transparent;
  border: none;
  border-bottom: 3.5px solid rgba(256, 256, 256, 0.5);
  padding: 20px 10px;
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
}

button {
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 3.2px solid #fff;
  opacity: 0.5;
  background-color: transparent;
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

button:hover {
  display: flex;
  padding: 13.2px 23.2px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: none;
  opacity: 1;
  background-color: #b99c00;
  color: #000;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

}

a{
    color: white;
    font-weight: 500;
  }

a:hover{
    color: yellow;
  }

/* MEDIA QUERIES */
/* Extra Extra Large Devices (Large Desktops and Widescreens): */
@media (min-width: 1201px) and (max-width: 1380px) {
  .landingtextcontainer {
    width: 1160px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 24px;
  }

  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 8px;
  }

  input {
    display: flex;
    width: 944px;
    padding-top: 31px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 18px;
    background-color: transparent;
    border: none;
    border-bottom: 3.5px solid rgba(256, 256, 256, 0.5);
    padding: 20px 10px;
    color: #fff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 3.2px solid #fff;
    opacity: 0.5;
    background-color: transparent;
    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}

/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1200px) {
  .landingtextcontainer {
    width: 890px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 24px;
  }

  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 8px;
  }

  input {
    display: flex;
    width: 690px;
    padding-top: 31px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 18px;
    background-color: transparent;
    border: none;
    border-bottom: 3.5px solid rgba(256, 256, 256, 0.5);
    padding: 20px 10px;
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  button {
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 3.2px solid #fff;
    opacity: 0.5;
    background-color: transparent;
    color: #fff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  button:hover {
    display: flex;
    padding: 13.2px 23.2px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: none;
    opacity: 1;
    background-color: #b99c00;
    color: #000;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}

/*Large Devices (Desktops and Small Laptops): */
@media (min-width: 769px) and (max-width: 992px) {
  .landingtextcontainer {
    width: 690px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 16px;
  }

  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 8px;
  }

  input {
    display: flex;
    width: 500px;
    padding-top: 31px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 18px;
    background-color: transparent;
    border: none;
    border-bottom: 3.5px solid rgba(256, 256, 256, 0.5);
    padding: 20px 10px;
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  button {
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 3.2px solid #fff;
    opacity: 0.5;
    background-color: transparent;
    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  button:hover {
    display: flex;
    padding: 13.2px 23.2px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: none;
    opacity: 1;
    background-color: #b99c00;
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}

/*Medium Devices (Tablets): */
@media (min-width: 577px) and (max-width: 768px) {
  .landingtextcontainer {
    width: 490px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 16px;
  }

  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 8px;
  }

  form {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 24px;
  }

  input {
    display: flex;
    width: 350px;
    padding-top: 31px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 18px;
    background-color: transparent;
    border: none;
    border-bottom: 3.5px solid rgba(256, 256, 256, 0.5);
    padding: 20px 10px;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #fff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  button {
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 3.2px solid #fff;
    opacity: 0.5;
    background-color: transparent;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  button:hover {
    display: flex;
    padding: 7.2px 13.2px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: none;
    opacity: 1;
    background-color: #b99c00;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 480px) and (max-width: 576px) {
  .landingtextcontainer {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 16px;
  }

  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 24px;
  }

  input {
    display: flex;
    width: 400px;
    padding-top: 31px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 18px;
    background-color: transparent;
    border: none;
    border-bottom: 3.5px solid rgba(256, 256, 256, 0.5);
    padding: 20px 10px;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #fff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  button {
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 3.2px solid #fff;
    opacity: 0.5;
    background-color: transparent;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  button:hover {
    display: flex;
    padding: 7.2px 13.2px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: none;
    opacity: 1;
    background-color: #b99c00;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 400px) and (max-width: 479px) {
  .landingtextcontainer {
    width: 370px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 16px;
  }

  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 24px;
  }

  input {
    display: flex;
    width: 370px;
    padding-top: 31px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 18px;
    background-color: transparent;
    border: none;
    border-bottom: 3.5px solid rgba(256, 256, 256, 0.5);
    padding: 20px 10px;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  button {
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 3.2px solid #fff;
    opacity: 0.5;
    background-color: transparent;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  button:hover {
    display: flex;
    padding: 7.2px 13.2px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: none;
    opacity: 1;
    background-color: #b99c00;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}

/*Extra Small Devices (Phones) */
@media (max-width: 399px) {
  .landingtextcontainer {
    width: 290px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .supportingtext {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 16px;
  }

  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 24px;
  }

  input {
    display: flex;
    width: 290px;
    padding-top: 31px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 18px;
    background-color: transparent;
    border: none;
    border-bottom: 3.5px solid rgba(256, 256, 256, 0.5);
    padding: 20px 10px;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  button {
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 3.2px solid #fff;
    opacity: 0.5;
    background-color: transparent;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  button:hover {
    display: flex;
    padding: 7.2px 13.2px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: none;
    opacity: 1;
    background-color: #b99c00;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}
</style>
