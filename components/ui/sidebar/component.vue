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

    <div
      v-click-outside="hide"
      :class="b('hamburger-menu')"
    >
      <button
        :class="b('button', { active: isActive })"
        @click="toggle"
      >
        <span />
      </button>

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
