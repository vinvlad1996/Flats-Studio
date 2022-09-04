<template>
  <section
    id="map"
    :class="b()"
  >
    <h2>
      Выбери, где хочешь жить
    </h2>

    <div :class="b('wrapper')">
      <div :class="b('block')">
        <h3 :class="b('text')">
          Санкт-Петербург
        </h3>

        <iframe
          :class="b('iframe')"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A537122ca90fad8c904a8ecb9fcf6a9b0c84b0980f2a156dc920b6edbe6dfbfc3&amp;source=constructor"
          width="500"
          height="400"
          frameborder="0"
        />
      </div>

      <div :class="b('block')">
        <h3 :class="b('text')">
          Тамбов
        </h3>

        <iframe
          :class="b('iframe')"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a9665c5f801018f3bf0e6aff5de53338fe6d534a5f1ab1ab8a7b456579ae11a&amp;source=constructor"
          width="500"
          height="400"
          frameborder="0"
        />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'section-map'
  };
</script>

<style lang="scss" src="./component.scss" />
