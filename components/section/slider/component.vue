<template>
  <section
    id="flat-slider"
    :class="b()"
  >
    <h2>
      Наши квартиры
    </h2>

    <swiper
      :options="options"
    >
      <swiper-slide
        v-for="(item, key) in items"
        :key="key"
      >
        <img
          :class="b('image')"
          :src="item.src"
          alt=""
        >
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: 'section-slider',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        options: {
          slidesPerView: 3,
          spaceBetween: 20,
          breakpoints: {
            320: {
              slidesPerView: 1
            },
            480: {
              slidesPerView: 2
            },
            640: {
              slidesPerView: 3
            }
          }
        },
        items: [
          {
            src: require('@/assets/img/flat-one.jpg')
          },
          {
            src: require('@/assets/img/flat-two.jpg')
          },
          {
            src: require('@/assets/img/flat-three.jpg')
          },
          {
            src: require('@/assets/img/flat-five.jpg')
          },
          {
            src: require('@/assets/img/flat-six.jpg')
          },
          {
            src: require('@/assets/img/flat-seven.jpg')
          }
        ]
      };
    }
  };
</script>

<style lang="scss" src="./component.scss">
