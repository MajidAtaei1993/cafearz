<template>
    <section class="mastercard-banner">
        <img src="/assets/images/mastercard-bg.svg" alt="" class="banner">
        <v-row class="ma-0" align="center">
            <v-col cols="12" sm="6">
                <div class="column">
                    <div class="header">وب مانی (WebMoney)</div>
                    <div class="desc">
                        شاید برای شما هم پیش آمده باشد که بخواهید از یک سایت خارجی خرید کنید ولی به دلیل زندگی در ایران نتوانید <a href="https://cafearz.com/international-payments" class="link">پرداخت ارزی</a> را انجام دهید. سرویس وب مانی (WebMoney) یکی از بهترین راه‌ها را برای انجام پرداخت‌های اینترنتی پیش پای شما گذاشته است که می‌توانید به‌صورت ویژه از آن استفاده کنید. با استفاده از خدمات وب مانی کافه ارز می‌توانید نسبت به شارژ حساب وب مانی، خرید از سایت های خارجی با استفاده از وب مانی ، افتتاح حساب وب مانی و فروش وب مانی اقدام کنید.
                    </div>
                    <div class="sell-rate">
                        <div class="rate" v-for="(rate, i) in currencies" :key="i">
                            <div class="text">نرخ فروش {{ rate.text }}  وب مانی</div>
                            <div class="price">{{ rate.buy }} تومان</div>
                            <div class="date">{{ date }}</div>
                        </div>
                    </div>
                    <div class="action">
                        <v-btn class="btn" target="_blank" depressed href="https://app.cafearz.com/orders/services/items/1">ثبت سفارش خدمات وب مانی Money</v-btn>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="6">
                <div class="column">
                    <img src="/assets/images/webmoney/banner.svg" alt="" class="banner-income-cash-exchange">
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
                    { text:'نرخ فروش دلار پرفکت مانی ', price:'32.990 تومان', date: new Date().toLocaleDateString("fa-IR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>