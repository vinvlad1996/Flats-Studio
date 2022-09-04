<template>
  <section :class="b()">
    <h1 :class="b('title')">
      <div :class="b('wrapper')">
        <div :class="b('block')">
          <span :class="b('text', { large: true })">
            Работа с высоким доходом
          </span>

          <br>

          <span :class="b('text', { small: true })">
            и оплачиваемым личным жильем
          </span>

          <br>

          <span :class="b('text')">
            в лучших районах города
          </span>
        </div>
      </div>
    </h1>
  </section>
</template>

<script>
  export default {
    name: 'section-header'
  };
</script>

<style lang="scss" src="./component.scss">
