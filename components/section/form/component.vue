<template>
  <section
    id="form"
    :class="b()"
  >
    <h2>
      Присоединяйся!
    </h2>

    <p :class="b('text')">
      Оставьте заявку и мы вам перезвоним!
    </p>

    <div :class="b('wrapper')">
      <input
        v-model="form.username"
        placeholder="Ваше имя"
        :class="b('input', { person: true })"
      >
      <input
        v-model="form.phone"
        placeholder="Телефон"
        :class="b('input', { phone: true })"
      >
    </div>

    <button
      :class="b('button', { disabled: isDisabled || isLoading })"
      :disabled="isDisabled"
      @click="send"
    >
      Оставить заявку
    </button>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'section-form',
    data() {
      return {
        form: {
          username: '',
          phone: ''
        },
        isLoading: false
      };
    },
    computed: {
      isDisabled() {
        return !this.form.username.length || !this.form.phone.length || this.isLoading;
      }
    },
    methods: {
      async send() {
        this.isLoading = true;

        try {
          await axios
            .post('https://flats-studio-backend.herokuapp.com/api/send', this.form)
            .then(() => {
              alert('Заявка успешно оставлена!'); // eslint-disable-line no-alert
            })
            .catch((error) => {
              throw error;
            });
        } catch (error) {
          alert('Произошла ошибка!'); // eslint-disable-line no-alert
        } finally {
          this.isLoading = false;
          this.form = {
            username: '',
            phone: ''
          };
        }
      }
    }
  };
</script>

<style lang="scss" src="./component.scss" >
