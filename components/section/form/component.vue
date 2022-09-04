<template>
  <section :class="b()">
    <h2 :class="b('title')">
      Присоединяйся!
    </h2>

    <p :class="b('text')">
      Оставьте заявку и мы вам перезвоним!
    </p>

    <form
      action=""
      method="POST"
    >
      <div :class="b('wrapper')">
        <input
          :class="b('input', { person: true })"
          type="text"
          name="username"
          placeholder="Ваше имя"
          required
        >
        <input
          :class="b('input', { phone: true })"
          type="text"
          name="phone"
          placeholder="Телефон"
          maxlength="11"
          required
        >
      </div>

      <button
        :class="b('button')"
        href="#"
      >
        Оставить заявку
      </button>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'section-form'
  };
</script>

<style lang="scss" src="./component.scss" >
