<template>
  <section
    id="calculator"
    :class="b()"
  >
    <h2>
      Честный калькулятор дохода
    </h2>

    <p :class="b('description')">
      Всего два правила. Честность и самодисциплина – два аспекта,
      которые помогут с первых дней начать зарабатывать.
    </p>

    <div :class="b('wrapper')">
      <div :class="b('content')">
        <div :class="b('block')">
          <p :class="b('text')">
            Количество смен в неделю:
          </p>

          <ul :class="b('list')">
            <li
              v-for="(item, index) in shifts"
              :key="index"
            >
              <input
                :id="`shift #${index}`"
                v-model="form.shift"
                type="radio"
                :value="item.value"
              >
              <label :for="`shift #${index}`">
                {{ item.label }}
              </label>
            </li>
          </ul>
        </div>

        <div :class="b('block')">
          <p :class="b('text')">
            Знание английского языка:
          </p>

          <ul :class="b('list')">
            <li
              v-for="(item, index) in languages"
              :key="index"
            >
              <input
                :id="`language #${index}`"
                v-model="form.language"
                type="radio"
                :value="item.value"
              >
              <label :for="`language #${index}`">
                {{ item.label }}
              </label>
            </li>
          </ul>
        </div>

        <div :class="b('block')">
          <p :class="b('text')">
            Показать доход за:
          </p>

          <ul :class="b('list')">
            <li
              v-for="(item, index) in intervals"
              :key="index"
            >
              <input
                :id="`interval #${index}`"
                v-model="form.interval"
                type="radio"
                :value="item.value"
              >
              <label :for="`interval #${index}`">
                {{ item.label }}
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div :class="b('inner')">
        <h5 :class="b('title')">
          Средняя зарплата:
        </h5>

        <div :class="b('inner-block')">
          <h5 :class="b('amount')">
            {{ displayedAmount }}
          </h5>

          <p :class="b('currency')">
            руб.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { params } from './params';

  export default {
    name: 'section-calculator',
    data() {
      return {
        form: {
          shift: 0,
          language: 0,
          interval: 0
        },
        shifts: [
          {
            value: 0,
            label: '5 смен'
          },
          {
            value: 1,
            label: '6 смен'
          },
          {
            value: 2,
            label: '7 смен'
          }
        ],
        languages: [
          {
            value: 0,
            label: 'начальный'
          },
          {
            value: 1,
            label: 'средний'
          },
          {
            value: 2,
            label: 'разговорный'
          }
        ],
        intervals: [
          {
            value: 0,
            label: 'день'
          },
          {
            value: 1,
            label: 'неделя'
          },
          {
            value: 2,
            label: 'месяц'
          }
        ]
      };
    },
    computed: {
      displayedAmount() {
        const filteredParams = params
          .filter(item => item.shift === this.form.shift)
          .filter(item => item.language === this.form.language);

        const currentParam = filteredParams[0].interval.find(item => {
          return item.value === this.form.interval;
        });

        return currentParam.amount;
      }
    }
  };
</script>

<style lang="scss" src="./component.scss" />
