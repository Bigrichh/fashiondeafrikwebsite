<template>
  <Div class="container">
    <div class="navbar">
      <NavBar
        v-if="!mobileView"
        :isDark="false"
        :isLight="false"
        :isContact="true"
      ></NavBar>
      <MobileNavBar
        v-if="mobileView"
        :isDark="false"
        :isLight="false"
        :isContact="true"
      ></MobileNavBar>
    </div>

    <div class="sections">
      <div class="leftsection">
        <form
          class="form"
          ref="form"
          @submit.prevent="sendEmail"
          autocomplete="off"
        >
          <h1>Contact us</h1>
          <div class="firstname-phonenocontainer">
            <div class="flexcolumns">
              <div class="input-field">
                <label for="firstname">FIRST NAME</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  v-model="firstname"
                  data-lpignore="true"
                  autocomplete="off"
                />
              </div>
              <div class="input-field">
                <label for="EMAIL">EMAIL</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  v-model="email"
                  data-lpignore="true"
                  autocomplete="off"
                />
              </div>
            </div>

            <div class="flexcolumns">
              <div class="input-field">
                <label for="lastname">LAST NAME</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  v-model="lastname"
                  data-lpignore="true"
                  autocomplete="off"
                />
              </div>
              <div class="input-field">
                <label for="phonenumber">PHONE NUMBER</label>
                <!-- <input type="text" placeholder="Enter your phone number"> -->
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  inputmode="numeric"
                  id="phonenumber"
                  placeholder="Enter your phone number"
                  name="phoneNumber"
                  v-model="phoneNumber"
                  data-lpignore="true"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div class="messagecontainer">
            <label for="message">MESSAGE</label>
            <input
              type="text"
              placeholder="Enter your message"
              name="message"
              v-model="message"
            />
          </div>
          <button class="btn" type="submit" @click="sendEmail">SUBMIT</button>
        </form>

        <div class="socials">
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
        <h2>
          Have an enquiry or want to get in touch? Fill out the form to contact
          us
        </h2>
      </div>
    </div>
  </Div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MobileNavBar from "@/components/MobileNavBar.vue";
import { Icon } from "@iconify/vue";
import emailjs from "@emailjs/browser";

export default {
  name: "Contact",
  components: {
    NavBar,
    Icon,
    MobileNavBar,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_9dueaq8",
          "template_4m1o51c",
          this.$refs.form,
          "zuQERd3O06jUaUjRS"
        )
        .then((response) => {
          alert("Form has submitted sucessfully.");
          this.firstName = "";
          this.lastName = "";
          this.email = "";
          this.phoneNumber = "";
          this.message = "";
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
  background: #b99c00;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.navbar {
  position: absolute;
  margin-top: 57px;
  width: 100%;
}

.sections{
  display: flex;
  width: 100%;
}

.rightsection {
  width: 50%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("@/assets/storelocationimages/storelocationimg1.jpg"), lightgray;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 50px;
}

.rightsection h2 {
  color: #fff;
  width: 620px;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  text-align: center;
}

.leftsection {
  background-image: url("@/assets/Backgroundpatternshalf.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 95%;
  padding-top: 5%;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
}

.form {
  margin-top: 20px;
}

.firstname-phonenocontainer {
  width: 540px;
  height: 224px;
  display: flex;
  gap: 40px;
  padding-top: 24px;
}

.leftsection h1 {
  color: #000;
  font-family: Barlow Condensed;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.leftsection label {
  color: #000;
  font-family: Barlow Condensed;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.leftsection input {
  width: 250px;
  height: 32px;
  margin-top: 10px;
  color: #000;
  font-family: Barlow Condensed;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid rgba(0, 0, 0, 1);
  padding: 20px 0px;
}

.leftsection input::placeholder {
  color: #000;
  font-family: Barlow Condensed;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
}

.leftsection input:focus {
  outline: none;
}

.flexcolumns {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.messagecontainer {
  display: flex;
  flex-direction: column;
}

.messagecontainer input {
  width: 540px;
}

.btn {
  background-color: transparent;
  padding: 10px 30px;
  color: #000;
  font-family: Barlow Condensed;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 3px solid #000;
  margin-top: 32px;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

.btn:hover {
  background-color: #000;
  padding: 10px 30px;
  color: #b99c00;
  font-family: Barlow Condensed;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 3px solid #000;
  margin-top: 32px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

.socials {
  width: 70%;
  display: flex;
  align-items: flex-end;
  gap: 24px;
}

.socials h3 {
  color: #000;
  font-family: Barlow Condensed;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.socials .line {
  width: 15%;
  height: 3px;
  background-color: black;
}

.socials .socialicons {
  display: flex;
  gap: 32px;
}

.socials .icon {
  color: #000;
  width: 26px;
  height: 26px;
}

.socials .icon:hover {
  color: #fff;
}

/* MEDIA QUERIES */
/* Extra Extra Large Devices (Large Desktops and Widescreens): */
@media (min-width: 1201px) and (max-width: 1380px) {
  .rightsection h2 {
    color: #fff;
    width: 520px;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 550;
    line-height: normal;
    text-align: center;
  }

  .leftsection {
    background-image: url("@/assets/Backgroundpatternshalf.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    padding-top: 5%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10%;
  }

  .form {
    margin-top: 20px;
  }

  .firstname-phonenocontainer {
    width: 460px;
    height: 224px;
    display: flex;
    gap: 40px;
    padding-top: 24px;
  }

  .leftsection h1 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection label {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection input {
    width: 200px;
    height: 32px;
    margin-top: 10px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgba(0, 0, 0, 1);
    padding: 20px 0px;
  }

  .leftsection input::placeholder {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  .leftsection input:focus {
    outline: none;
  }

  .flexcolumns {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .messagecontainer {
    display: flex;
    flex-direction: column;
  }

  .messagecontainer input {
    width: 460px;
  }

  .socials {
    width: 75%;
    display: flex;
    align-items: flex-end;
    gap: 8px;
  }

  .socials .socialicons {
    display: flex;
    gap: 16px;
  }
}

/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1200px) {
  .rightsection h2 {
    color: #fff;
    width: 420px;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }

  .leftsection {
    background-image: url("@/assets/Backgroundpatternshalf.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    padding-top: 5%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 56px;
  }

  .form {
    margin-top: 32px;
  }

  .firstname-phonenocontainer {
    width: 380px;
    height: 184px;
    display: flex;
    gap: 40px;
    padding-top: 24px;
  }

  .leftsection h1 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection label {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection input {
    width: 170px;
    height: 32px;
    margin-top: 10px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgba(0, 0, 0, 1);
    padding: 10px 0px;
  }

  .leftsection input::placeholder {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  .leftsection input:focus {
    outline: none;
  }

  .flexcolumns {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .messagecontainer {
    display: flex;
    flex-direction: column;
  }

  .messagecontainer input {
    width: 380px;
  }

  .btn {
    background-color: transparent;
    padding: 3px 20px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 16px;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
  .btn:hover {
    background-color: #000;
    padding: 3px 20px;
    color: #b99c00;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 16px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .socials {
    width: 75%;
    display: flex;
    align-items: flex-end;
    gap: 32px;
  }

  .socials h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .socials .socialicons {
    display: flex;
    gap: 16px;
  }

  .socials .icon {
    color: #000;
    width: 18px;
    height: 18px;
  }
}

/*Large Devices (Desktops and Small Laptops): */
@media (min-width: 769px) and (max-width: 992px) {
  .rightsection h2 {
    color: #fff;
    width: 335px;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }

  .leftsection {
    background-image: url("@/assets/Backgroundpatternshalf.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 95%;
    padding-top: 5%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 56px;
  }

  .form {
    margin-top: 32px;
  }

  .firstname-phonenocontainer {
    width: 310px;
    height: 184px;
    display: flex;
    gap: 24px;
    padding-top: 24px;
  }

  .leftsection h1 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection label {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection input {
    width: 140px;
    height: 32px;
    margin-top: 10px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgba(0, 0, 0, 1);
    padding: 10px 0px;
  }

  .leftsection input::placeholder {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  .leftsection input:focus {
    outline: none;
  }

  .flexcolumns {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .messagecontainer {
    display: flex;
    flex-direction: column;
  }

  .messagecontainer input {
    width: 310px;
  }

  .btn {
    background-color: transparent;
    padding: 3px 20px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 16px;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
  .btn:hover {
    background-color: #000;
    padding: 3px 20px;
    color: #b99c00;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 16px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .socials {
    width: 80%;
    display: flex;
    align-items: flex-end;
    gap: 16px;
  }

  .socials h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .socials .socialicons {
    display: flex;
    gap: 16px;
  }

  .socials .icon {
    color: #000;
    width: 16px;
    height: 16px;
  }
}

/*Medium Devices (Tablets): */
@media (min-width: 577px) and (max-width: 768px) {
  .container {
    background: #b99c00;
    height: 200vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }

  .navbar {
    position: absolute;
    margin-top: 0px;
    top: 57px;
    width: 100%;
  }

  .sections {
    display: flex;
    flex-direction: column-reverse;
    height: fit-content;
  }

  .rightsection h2 {
    color: #fff;
    width: 520px;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }

  .rightsection {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg1.jpg"), lightgray;
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 50px;
  }

  .leftsection {
    background-image: url("@/assets/Backgroundpatternshalf.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 120%;
    padding-top: 5%;
    padding-bottom: 10%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 56px;
  }

  .form {
    margin-top: 32px;
  }

  .firstname-phonenocontainer {
    width: 520px;
    height: 204px;
    display: flex;
    gap: 80px;
    padding-top: 24px;
  }

  .leftsection h1 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection label {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection input {
    width: 220px;
    height: 32px;
    margin-top: 10px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgba(0, 0, 0, 1);
    padding: 10px 0px;
  }

  .leftsection input::placeholder {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  .leftsection input:focus {
    outline: none;
  }

  .flexcolumns {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .messagecontainer {
    display: flex;
    flex-direction: column;
  }

  .messagecontainer input {
    width: 520px;
  }

  .btn {
    background-color: transparent;
    padding: 5px 25px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 32px;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
  .btn:hover {
    background-color: #000;
    padding: 5px 25px;
    color: #b99c00;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 32px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .socials {
    width: 90%;
    display: flex;
    align-items: flex-end;
    gap: 48px;
  }

  .socials h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .socials .socialicons {
    display: flex;
    gap: 24px;
  }

  .socials .icon {
    color: #000;
    width: 26px;
    height: 26px;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 480px) and (max-width: 576px) {
  .container {
    background: #b99c00;
    height: 200vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }

  .navbar {
    position: absolute;
    margin-top: 0px;
    top: 57px;
    width: 100%;
  }

  .sections {
    display: flex;
    flex-direction: column-reverse;
    height: fit-content;
  }

  .rightsection h2 {
    color: #fff;
    width: 420px;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }

  .rightsection {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg1.jpg"), lightgray;
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 50px;
  }

  .leftsection {
    background-image: url("@/assets/Backgroundpatternshalf.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 120%;
    padding-top: 0%;
    padding-bottom: 2%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  .form {
    margin-top: 0px;
  }

  .firstname-phonenocontainer {
    width: 420px;
    height: 354px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 24px;
  }

  .leftsection h1 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection label {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection input {
    width: 100%;
    height: 32px;
    margin-top: 10px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgba(0, 0, 0, 1);
    padding: 10px 0px;
  }

  .leftsection input::placeholder {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  .leftsection input:focus {
    outline: none;
  }

  .flexcolumns {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .messagecontainer {
    display: flex;
    flex-direction: column;
  }

  .messagecontainer input {
    width: 100%;
  }

  .btn {
    background-color: transparent;
    padding: 5px 25px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 16px;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
  .btn:hover {
    background-color: #000;
    padding: 5px 25px;
    color: #b99c00;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 16px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .socials {
    width: 90%;
    display: flex;
    align-items: flex-end;
    gap: 32px;
  }

  .socials h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .socials .socialicons {
    display: flex;
    gap: 24px;
  }

  .socials .icon {
    color: #000;
    width: 22px;
    height: 22px;
  }
}

/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 400px) and (max-width: 479px) {
  .container {
    background: #b99c00;
    height: 200vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }

  .navbar {
    position: absolute;
    margin-top: 0px;
    top: 57px;
    width: 100%;
  }

  .sections {
    display: flex;
    flex-direction: column-reverse;
    height: fit-content;
  }

  .rightsection h2 {
    color: #fff;
    width: 374px;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }

  .rightsection {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg1.jpg"), lightgray;
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 50px;
  }

  .leftsection {
    background-image: url("@/assets/Backgroundpatternshalf.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 120% 110%;
    padding-top: 0%;
    padding-bottom: 2%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  .form {
    margin-top: 0px;
  }

  .firstname-phonenocontainer {
    width: 375px;
    height: 354px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 24px;
  }

  .leftsection h1 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection label {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection input {
    width: 100%;
    height: 32px;
    margin-top: 10px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgba(0, 0, 0, 1);
    padding: 10px 0px;
  }

  .leftsection input::placeholder {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  .leftsection input:focus {
    outline: none;
  }

  .flexcolumns {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .messagecontainer {
    display: flex;
    flex-direction: column;
  }

  .messagecontainer input {
    width: 100%;
  }

  .btn {
    background-color: transparent;
    padding: 5px 25px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 16px;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
  .btn:hover {
    background-color: #000;
    padding: 5px 25px;
    color: #b99c00;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 16px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .socials {
    width: 95%;
    display: flex;
    align-items: flex-end;
    gap: 24px;
  }

  .socials h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .socials .socialicons {
    display: flex;
    gap: 24px;
  }

  .socials .icon {
    color: #000;
    width: 18px;
    height: 18px;
  }
}

/*Extra Small Devices (Phones) */
@media (max-width: 399px) {
  .container {
    background: #b99c00;
    height: 200vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }

  .navbar {
    position: absolute;
    margin-top: 0px;
    top: 57px;
    width: 100%;
  }

  .sections {
    display: flex;
    flex-direction: column-reverse;
    height: fit-content;
  }

  .rightsection h2 {
    color: #fff;
    width: 310px;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }

  .rightsection {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url("@/assets/storelocationimages/storelocationimg1.jpg"), lightgray;
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 50px;
  }

  .leftsection {
    background-image: url("@/assets/Backgroundpatternshalf.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 120% 110%;
    padding-top: 0%;
    padding-bottom: 2%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  .form {
    margin-top: 0px;
  }

  .firstname-phonenocontainer {
    width: 280px;
    height: 354px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 24px;
  }

  .leftsection h1 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection label {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .leftsection input {
    width: 100%;
    height: 32px;
    margin-top: 10px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgba(0, 0, 0, 1);
    padding: 10px 0px;
  }

  .leftsection input::placeholder {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  .leftsection input:focus {
    outline: none;
  }

  .flexcolumns {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .messagecontainer {
    display: flex;
    flex-direction: column;
  }

  .messagecontainer input {
    width: 100%;
  }

  .btn {
    background-color: transparent;
    padding: 5px 25px;
    color: #000;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 16px;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
  .btn:hover {
    background-color: #000;
    padding: 5px 25px;
    color: #b99c00;
    font-family: Barlow Condensed;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 3px solid #000;
    margin-top: 16px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .socials {
    width: 90%;
    display: flex;
    align-items: flex-end;
    gap: 16px;
  }

  .socials h3 {
    color: #000;
    font-family: Barlow Condensed;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .socials .socialicons {
    display: flex;
    gap: 8px;
  }

  .socials .icon {
    color: #000;
    width: 16px;
    height: 16px;
  }
}
</style>
