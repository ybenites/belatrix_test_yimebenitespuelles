<template lang="html">
<div class="bg-app-container">
  <div class="app-container">
    <div class="content-inputs-rates">
      <div class="gallery2">
        <div class="input-field content-usd-input">
          <bt-money name="usd-input" id="usd-input" :value="usdExchange" v-model="usdValue" currency="$" :precision="4" separator="," ></bt-money>
          <label for="usd-input">USD</label>
        </div>
      </div>

      <div class="gallery2">
        <div class="input-field content-eu-input">
          <bt-money ref="refInputEu" name="eu-input"  id="eu-input"  :value="euExchange" currency="€" :precision="4" separator=","  disabled></bt-money>
          <label for="eu-input">EU</label>
        </div>
      </div>
    </div>
    <div class="content-btn-calculate">
      <v-touch ref="btnCalculate" class="waves-effect waves-light btn" tag="a" v-on:tap="onTap">CALCULATE</v-touch>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex';

import $ from "jquery";
import 'libraries/waves';
import 'libraries/cash';
import "libraries/forms";

import VueNumeric from 'vue-numeric'

export default {
  components: {
    "bt-money": VueNumeric
  },
  computed: mapState(['euExchange', 'usdExchange']),
  data() {
    return {
      usdValue: ''
    }
  },
  watch: {
    usdValue(usdValue) {
      if (usdValue === 0) {
        this.cleanOrigin();
      } else {
        this.$refs.btnCalculate.enableAll();
        this.$refs.btnCalculate.$el.removeAttribute("disabled");
      }
      this.updateUsdExchange(usdValue);
    }
  },
  methods: {
    cleanOrigin() {
      this.$refs.btnCalculate.$el.setAttribute("disabled", "disabled");
      this.$refs.btnCalculate.disableAll();
      this.$refs.refInputEu.$el.classList.remove("eu-input-highligth");
      this.$store.commit('euExchange', 0);
    },
    onTap() {
      var _this = this;
      const dataStorage = this.$storage.get('exchangerates');
      if (!dataStorage) {
        this.$store.commit('loading', true);
        $.ajax({
          url: 'http://data.fixer.io/api/latest?access_key=87ff8a6aeebb7e49652d4c6b0b80b411&symbols=USD',
          dataType: "json",
          success: function(response) {
            _this.$store.commit('loading', false);
            // storeage exchange rates
            _this.$storage.set('exchangerates', {
              key: response.rates.USD
            }, {
              ttl: 10 * 60 * 1000
            });
            _this.calculate(response.rates.USD);
          },
          error: function() {
            _this.cleanOrigin();
          }
        });
      } else {
        this.calculate(dataStorage.key);
      }
    },
    calculate(rate) {
      this.$store.commit('euExchange', (this.usdExchange / rate).toFixed(4));
      this.$refs.refInputEu.$el.classList.add("eu-input-highligth");
    },
    updateUsdExchange(value) {
      this.$store.commit('usdExchange', value)
    }
  },
  mounted: function() {

  }
}
</script>

<style lang="scss" scoped>
.bg-app-container {
    background-color: #dadfe3;
}
.app-container {
    padding: 100px 15px 50px;
    text-align: center;
    @include container($d_normal);
}
.content-inputs-rates {
    .content-usd-input {
        // padding: 10px 0;
        margin-right: 15px;
        margin-left: 15px;
    }
    .content-eu-input {
        // padding: 10px 0;
        margin-right: 15px;
        margin-left: 15px;
        #eu-input {
            font-family: $Roboto;
            font-size: 18px;
        }
        .eu-input-highligth {
            color: #333;
            font-weight: 700;
        }
        #usd-input {
            font-family: $Roboto;
            font-weight: 300;
            font-size: 16px;
            // color: #333;
        }
    }
    @include breakpoint($d_small) {
        @include clearfix;
        padding-bottom: 30px;
        .gallery2 {
            @include gallery(8 of 16);
        }
    }
}
.content-btn-calculate {
    padding: 20px 0;
}
a:hover {
    color: #fff;
}
</style>
