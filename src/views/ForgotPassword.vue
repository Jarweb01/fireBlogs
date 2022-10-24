<template>
  <div class="resetPassword">
    <Modal v-if="modalActive" @close-modal="closeModal" />
    <Loading v-if="loading" />
    <div class="formWrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Forgout your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <email class="icon"></email>
          </div>
        </div>
        <button class="button">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  components: {
    email,
    Modal,
    Loading,
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.resetPassword {
  position: relative;
  .formWrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
