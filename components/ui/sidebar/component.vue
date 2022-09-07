<template>
  <div :class="b()">
    <div class="logo">
      <img
        :src="require('@/assets/img/logotip.png')"
        width="110"
        height="80"
        alt="#"
      >
    </div>

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

    <div
      v-click-outside="hide"
      :class="b('hamburger-menu')"
    >
      <div :class="b('block')">
        <a href="https://telegram.me/flatsstudio">
          <img
            :src="image"
            width="30"
            height="30"
            alt=""
          >
        </a>

        <button
          :class="b('button', { active: isActive })"
          @click="toggle"
        >
          <span />
        </button>
      </div>


      <ul :class="b('list', { active: isActive })">
        <li
          v-for="(item, index) in items"
          :key="index"
          :class="b('item')"
        >
          <a
            :class="b('link')"
            @click="goToLink(item.href)"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ClickOutside from 'vue-click-outside';

  export default {
    name: 'ui-sidebar',
    directives: {
      ClickOutside
    },
    data() {
      return {
        isActive: false,
        image: require('@/assets/icons/telegram.png'),
        items: [
          {
            href: '#about',
            title: 'О нас'
          },
          {
            href: '#benefits',
            title: 'Преимущества'
          },
          {
            href: '#map',
            title: 'Карта'
          },
          {
            href: '#flat-slider',
            title: 'Наши Квартиры'
          },
          {
            href: '#form',
            title: 'Анкета'
          },
          {
            href: '#calculator',
            title: 'Калькулятор'
          },
          {
            href: '#faq',
            title: 'FAQ'
          },
          {
            href: '#contacts',
            title: 'Контакты'
          }
        ],
        contacts: [
          {
            href: '89312040821',
            src: require('@/assets/icons/phone.png')
          },
          {
            href: 'flatswebstudio@gmail.com',
            src: require('@/assets/icons/email.png')
          },
          {
            href: 'https://vk.com/flatsstudio',
            src: require('@/assets/icons/vk.png')
          },
          {
            href: '@flatsstudio',
            src: require('@/assets/icons/telegram.png')
          }
        ]
      };
    },
    methods: {
      toggle() {
        this.isActive = !this.isActive;
      },

      hide() {
        this.isActive = false;
      },

      goToLink(href) {
        window.location.href = href;
        this.hide();
      }
    }
  };
</script>

<style lang="scss" src="./component.scss">
