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
      SectionContacts
    }
  };
</script>

<style lang="scss">
.index-page {
  //
}

body {
  padding: 0;
  margin: 0;
}
</style>
