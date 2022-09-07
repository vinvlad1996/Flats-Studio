<template>
  <div :class="b()">
    <a
      id="ui-dialog"
      href="#x2"
      :class="b('overlay')"
    />

    <div :class="b('wrapper')">
      <div :class="b('content')">
        <p>
          Оставьте свои данные и мы вам перезвоним!
        </p>

        <div :class="b('form')">
          <input
            v-model="form.username"
            :class="b('input')"
            placeholder="Введите ваше имя"
          >

          <br>

          <input
            v-model="form.phone"
            :class="b('input')"
            placeholder="Номер телефона"
            maxlength="11"
          >

          <br>

          <input
            v-model="form.age"
            :class="b('input')"
            placeholder="Ваш возраст"
          >

          <br>

          <button
            :class="b('button-send')"
            :disabled="isDisabled"
            @click="send"
          >
            Отправить
          </button>
        </div>
      </div>

      <a
        :class="b('button-close')"
        title="Закрыть"
        href="#close"
      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'ui-dialog',
    data() {
      return {
        isLoading: false,
        form: {
          username: '',
          phone: '',
          age: ''
        }
      };
    },
    computed: {
      isDisabled() {
        return !this.form.username.length || !this.form.phone.length || !this.form.age.length || this.isLoading;
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
            phone: '',
            age: ''
          };
          window.location.href = '#close';
        }
      }
    }
  };
</script>

<style lang="scss" src="./component.scss" />
