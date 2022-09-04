<template>
  <section :class="b()">
    <h2 :class="b('title')">
      Наши квартиры
    </h2>

    <ul :class="b('list')">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="b('item')"
      >
        <img
          :src="item.src"
          alt=""
        >
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'section-slider',
    data() {
      return {
        items: [
          {
            src: require('@/landing/img/flat-one.jpg')
          }
          // {
          //   src: require('@/landing/img/flat-two.jpg')
          // },
          // {
          //   src: require('@/landing/img/flat-three.jpg')
          // },
          // {
          //   src: require('@/landing/img/flat-five.jpg')
          // },
          // {
          //   src: require('@/landing/img/flat-six.jpg')
          // },
          // {
          //   src: require('@/landing/img/flat-seven.jpg')
          // }
        ]
      };
    }
  };
</script>

<style lang="scss" src="./component.scss">
