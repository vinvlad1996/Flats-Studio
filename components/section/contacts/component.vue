<template>
  <section :class="b()">
    <h2 :class="b('title')">
      Контакты
    </h2>

    <ul :class="b('list')">
      <li
        v-for="(item, index) in contacts"
        :key="index"
        :class="b('item')"
      >
        <a :href="item.href">
          <img
            :src="item.src"
            width="30"
            height="30"
            alt=""
          >
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'section-contacts',
    data() {
      return {
        contacts: [
          {
            href: '89312040821',
            src: require('@/landing/icons/phone.png')
          },
          {
            href: 'flatswebstudio@gmail.com',
            src: require('@/landing/icons/email.png')
          },
          {
            href: 'https://vk.com/flatsstudio',
            src: require('@/landing/icons/vk.png')
          },
          {
            href: '@flatsstudio',
            src: require('@/landing/icons/telegram.png')
          }
        ]
      };
    }
  };
</script>

<style lang="scss" src="./component.scss" />
