<template>
    <section class="mastercard-banner">
        <img src="/assets/images/mastercard-bg.svg" alt="" class="banner">
        <v-row class="ma-0" align="center">
            <v-col cols="12" sm="6">
                <div class="column">
                    <div class="header">پرفکت مانی (Perfectmoney)</div>
                    <div class="desc">
                        در دنیایی که ما در آن زندگی می‌کنیم، هر روزه معاملات بسیار زیادی به‌صورت آنلاین انجام می‌شود که در آن‌ها نیازی به حضور فیزیکی افراد نخواهد بود. در چنین شرایطی بهتر است که برای دادوستدهای مالی خود از سیستم‌های <a class="link" href="https://cafearz.com/international-payments">پرداخت دلاری</a> آنلاین استفاده کنید. پرفکت مانی یکی از این شرکت‌ها است که در دفتر اصلی آن در کشور پاناما واقع است. با توجه به مزایایی که در استفاده از سیستم پرفکتمانی وجود دارد، بسیاری از کاربران ایرانی نیز به سراغ آن رفته‌اند.
                    </div>
                    <div class="sell-rate">
                        <div class="rate" v-for="(rate, i) in currencies" :key="i">
                            <div class="text">نرخ فروش {{ rate.text }}  پرفکت مانی</div>
                            <div class="price">{{ rate.buy }} تومان</div>
                            <div class="date">{{ date }}</div>
                        </div>
                    </div>
                    <div class="action">
                        <v-btn class="btn" target="_blank" depressed href="https://app.cafearz.com/orders/services/items/1">ثبت سفارش خدمات Perfect Money</v-btn>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="6">
                <div class="column">
                    <img src="/assets/images/sell-buy-perfectmoney/banner.svg" alt="" class="banner-income-cash-exchange">
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