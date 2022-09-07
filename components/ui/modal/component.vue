<template>
  <div :class="b()">
    <a
      id="ui-modal"
      href="#x"
      :class="b('overlay')"
    />

    <div :class="b('wrapper')">
      <div :class="b('content')">
        <p>
          Оставьте номер телефона и мы вам перезвоним!
        </p>

        <div :class="b('form')">
          <input
            v-model="form.phone"
            :class="b('input')"
            placeholder="Телефон"
            maxlength="11"
          >

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
    name: 'ui-modal',
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
        return !this.form.phone.length || this.isLoading;
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
