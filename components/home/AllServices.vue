<template>
    <section class="all-sservice-section">
        <img src="/assets/images/home/bottom-banner.svg" alt="" class="bottom-banner">
        <div class="head">خدمات کافه ارز در یک نگاه</div>
        <div class="services">
            <div class="right">
                <nuxt-link class="list" v-for="(item, i) in items.slice(0, 5)" :key="i" :to="{ name: item.route }">
                    <div class="text">{{ item.text }}</div>
                    <img :src="item.logo" alt="" class="logo">
                </nuxt-link>
            </div>
            <div class="middle">
                <img src="/assets/images/home/home-mobile.webp" alt="" class="mob-img">
            </div>
            <div class="left">
                <a class="list" v-for="(item, i) in items.slice(5,6)" :key="i" :href="item.link">
                    <img :src="item.logo" alt="" class="logo">
                    <div class="text">{{ item.text }}</div>
                </a>
                <nuxt-link class="list" v-for="(item, i) in items.slice(6,7)" :key="i" :to="{ name: item.route }">
                    <img :src="item.logo" alt="" class="logo">
                    <div class="text">{{ item.text }}</div>
                </nuxt-link>
                <a class="list" v-for="(item, i) in items.slice(7,8)" :key="i" :href="item.link">
                    <img :src="item.logo" alt="" class="logo">
                    <div class="text">{{ item.text }}</div>
                </a>
                <nuxt-link class="list" v-for="(item, i) in items.slice(8)" :key="i" :to="{ name: item.route }">
                    <img :src="item.logo" alt="" class="logo">
                    <div class="text">{{ item.text }}</div>
                </nuxt-link>
            </div>
        </div>
        <div class="home-tablet-slider">
            <VueSlickCarousel v-bind="settings">
                <div v-for="(item, i) in items" :key="i" class="service-slide">
                    <v-card class="card" flat v-if="item.route" :to="{name: item.route }">
                        <v-card-title>
                        <img :src="item.logo" class="img" />
                        </v-card-title>
                        <v-card-text class="text">
                            <p>{{ item.text }}</p>
                        </v-card-text>
                    </v-card>
                    <v-card class="card" flat v-if="item.link" :href="item.link">
                        <v-card-title>
                        <img :src="item.logo" class="img" />
                        </v-card-title>
                        <v-card-text class="text">
                            <p>{{ item.text }}</p>
                        </v-card-text>
                    </v-card>
                </div>
            </VueSlickCarousel>
        </div>
        <div class="bottom-text" :class="dark ? 'white--text' :''">سادگی , امنیت , سرعت بالای انجام خدمات</div>
    </section>
</template>

<script>
    export default {
        props:[
            'dark'
        ],
        data(){
            return{
                items:[
                    { logo:'/assets/images/home/bitcoin.png', text:'ارزهای دیجیتال', route:'خرید-و-فروش-ارز-دیجیتال-slug' },
                    { logo:'/assets/images/home/perfectMoney.png', text:'پرفکت مانی', route:'buy-sell-perfectmoney-vouchers' },
                    { logo:'/assets/images/home/paypal.png', text:'پی پال', route:'sell-buy-create-paypal' },
                    { logo:'/assets/images/home/webmoney.png', text:'وب مانی', route:'sell-buy-webmoney' },
                    { logo:'/assets/images/home/vista-master.png', text:'ویزا و مسترکارت', route:'mastercard-visacard' },
                    { logo:'/assets/images/home/international-paid.png', text:'پرداخت بین المللی', link:'https://cafearz.com/international-payments' },
                    { logo:'/assets/images/home/gitf-card.png', text:'گیفت کارت', route:'buy-gift-card' },
                    { logo:'/assets/images/home/payer.png', text:'پایر', link:'https://cafearz.com/payeer' },
                    { logo:'/assets/images/home/meta-verse.png', text:'متاورس', route:'metaverse-services' },
                    { logo:'/assets/images/home/exchange.png', text:'نقد درآمدارزی', route:'income-cash-exchange' },
                ],
                settings:{
                    "dots": false,
                    "infinite": true,
                    "speed": 500,
                    "slidesToShow": 3,
                    "arrows": false,
                    "rows": 2,
                    "slidesToScroll": 1,
                    "pauseOnHover": true,
                    "pauseOnFocuse": true,
                    "autoplay": true,
                    "autoplaySpeed": 2000,
                    "responsive": [
                        {
                            "breakpoint": 1024,
                            "settings": {
                                "slidesToShow": 3,
                                "slidesToScroll": 1,
                                "infinite": true,
                                "dots": false,
                                "pauseOnHover": true,
                                "pauseOnFocuse": true,
                            }
                        },
                        {
                            "breakpoint": 767,
                            "settings": {
                                "slidesToShow": 2,
                                "slidesToScroll": 1,
                                "infinite": true,
                                "dots": false,
                                "pauseOnHover": true,
                                "pauseOnFocuse": true,
                            }
                        },
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>