<template>
    <section class="mastercard-banner">
        <img src="/assets/images/mastercard-bg.svg" alt="" class="banner">
        <v-row class="ma-0" align="center">
            <v-col cols="12" sm="6">
                <div class="column">
                    <div class="header">پی پال PayPal</div>
                    <div class="desc">
                        <nuxt-link class="link" :to="{ name: 'sell-buy-create-paypal' }">پی پال</nuxt-link> (PayPal) مشهورترین سیستم پرداخت آنلاین، نقل و انتقال پول بین المللی (<a class="link" href="https://cafearz.com/international-payments">پرداخت ارزی</a>) است که با تسهیل ارائه خدمات مختلف، اعتبار بسیار بالایی به دست آورده است تا جایی که بیشتر سایت‌های خارجی درگاه پرداخت پی پال دارند. کافه ارز با سال‌ها تجربه در زمینه پرداخت های بین المللی متنوع‌ترین خدمات پی پل شامل افتتاح حساب پی پل، شارژ حساب پی پال، خرید با پی پال و همچنین نقد کردن پی پال و خرید و فروش پی پال را ارائه می‌دهد.
                    </div>
                    <div class="sell-rate">
                        <div class="rate" v-for="(rate, i) in currencies" :key="i">
                            <div class="text">نرخ فروش {{ rate.text }}  پی پال</div>
                            <div class="price">{{ rate.buy }} تومان</div>
                            <div class="date">{{ date }}</div>
                        </div>
                    </div>
                    <div class="action">
                        <v-btn class="btn" target="_blank" depressed href="https://app.cafearz.com/orders/services/items/1">ثبت سفارش خدمات PayPal</v-btn>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="6">
                <div class="column">
                    <img src="/assets/images/sell-buy-paypal/banner.svg" alt="" class="banner-income-cash-exchange">
                </div>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    export default {
        props:[ 'currencies' ],
        data(){
            return{
                date: new Date().toLocaleDateString("fa-IR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
                rates:[
                    { text:'نرخ فروش یورو پی پال', price:'32.990 تومان', date: new Date().toLocaleDateString("fa-IR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
                    { text:'نرخ فروش پوند پی پال', price:'32.990 تومان', date: new Date().toLocaleDateString("fa-IR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
                    { text:'نرخ فروش دلار پی پال', price:'32.990 تومان', date: new Date().toLocaleDateString("fa-IR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>