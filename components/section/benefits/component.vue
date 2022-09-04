<template>
  <section>
    <h2 :class="b('title')">
      Преимущества
    </h2>

    <ul :class="b('list')">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="b('item')"
      >
        <img
          :class="b('icon')"
          :src="item.src"
          alt=""
        >

        <h4 :class="b('text')">
          {{ item.title }}
        </h4>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'section-benefits',
    data() {
      return {
        items: [
          {
            title: 'Отдельное проживание',
            src: require('@/landing/icons/home.png')
          },
          {
            title: 'Бесплатное обучение',
            src: require('@/landing/icons/study.png')
          },
          {
            title: 'Строгая конфиденциальность',
            src: require('@/landing/icons/privacy.png')
          },
          {
            title: 'Поддержка 24/7',
            src: require('@/landing/icons/support.png')
          },
          {
            title: 'Комфортная атмосфера',
            src: require('@/landing/icons/comfortable.png')
          },
          {
            title: 'Без злого и строгого начальства',
            src: require('@/landing/icons/ceo.png')
          }
        ]
      };
    }
  };
</script>

<style lang="scss" src="./component.scss" />
