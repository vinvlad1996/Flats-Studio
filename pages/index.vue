<template>
  <div :class="b()">
    <section-header />
    <section-about />
    <section-benefits />
    <section-map />
    <section-slider />
    <section-form />
    <section-calculator />
    <section-faq />
    <section-contacts />
    <ui-modal />

    <a
      href="#ui-modal"
      :class="b('call-button')"
    >
      <img
        :src="require('@/assets/icons/callus.png')"
        width="40"
        height="40"
        alt=""
      >
    </a>
  </div>
</template>

<script>
  import SectionHeader from '~/components/section/header/component.vue';
  import SectionAbout from '~/components/section/about/component.vue';
  import SectionBenefits from '~/components/section/benefits/component.vue';
  import SectionMap from '~/components/section/map/component.vue';
  import SectionSlider from '~/components/section/slider/component.vue';
  import SectionForm from '~/components/section/form/component.vue';
  import SectionCalculator from '~/components/section/calculator/component.vue';
  import SectionFaq from '~/components/section/faq/component.vue';
  import SectionContacts from '~/components/section/contacts/component.vue';
  import UiModal from '~/components/ui/modal/component.vue';

  export default {
    name: 'index-page',
    components: {
      SectionHeader,
      SectionAbout,
      SectionBenefits,
      SectionMap,
      SectionSlider,
      SectionForm,
      SectionCalculator,
      SectionFaq,
      SectionContacts,
      UiModal
    }
  };
</script>

<style lang="scss">
.index-page {
  &__call-button {
    position: fixed;
    right: 40px;
    bottom: 40px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.5);
    }
  }
}

body {
  padding: 0;
  margin: 0;
  font-family: Quicksand, sans-serif;
  max-width: 1920px;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #907dfc;
    transition: 0.5s;
  }
}

ul {
  list-style: none;
}

h2 {
  margin-left: auto;
  margin-bottom: 150px;
  margin-top: 0;
  padding-top: 100px;
  text-align: center;
  font-weight: 600;
  font-size: 34px;
  text-transform: uppercase;
  letter-spacing: 5px;
  animation-name: floating;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &::after {
    content: "";
    width: 150px;
    position: relative;
    top: 70px;
    height: 4px;
    background: black;
    display: block;
    margin: 0 auto;
  }
}

@keyframes floating {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 15px);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
