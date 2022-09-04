<template>
  <section
    id="calculator"
    :class="b()"
  >
    <h2 :class="b('title')">
      Честный калькулятор дохода
    </h2>

    <p :class="b('description')">
      Всего два правила. Честность и самодисциплина – два аспекта,
      которые помогут с первых дней начать зарабатывать.
    </p>
  </section>
</template>

<script>
  export default {
    name: 'section-calculator'
  };
</script>

<style lang="scss" src="./component.scss" />
