<template>
    <v-footer inset class="app-footer">
        <div class="footer-wrapper">
            <div class="lists" v-for="(ul, i) in ul" :key="i">
                <div class="header">{{ ul.header }}</div>
                <div v-for="(li, j) in ul.li" :key="j" class="list">
                    <nuxt-link v-if="li.route" :to="{ name: li.route}" class="li">{{ li.text }}</nuxt-link>
                    <a class="li" :href="li.link" v-if="li.link">{{ li.text }}</a>
                </div>
            </div>
            <div class="lists">
                <div class="header">آدرس و شماره تماس</div>
                <div class="list">
                    <v-icon>mdi-map-marker</v-icon>
                    <div class="text">
                        <div class="head">آدرس دفتر</div>
                        <div class="desc">شیراز خیابان برق،روبه روی کوچه 10، ساختمان ارشیا، طبقه 6 واحد 8</div>
                    </div>
                </div>
                <div class="list">
                    <v-icon>mdi-phone</v-icon>
                    <div class="text">
                        <div class="head">تلفن تماس</div>
                        <div class="desc">02191014920 - 07132320715</div>
                    </div>
                </div>
                <div class="list">
                    <div class="social-medias">
                        <v-btn x-small depressed class="btn" target="_blank" v-for="(item, i) in medias" :key="i" :href="item.href">
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
             © 2021 | کلیه حقوق محصولات و محتوای این سایت متعلق به کافه ارز می باشد. طراحی و پشتیبانی  <a class="azarColor--text" href="https://azarertebat.ir"> (آذر ارتباط) </a>
        </div>
    </v-footer>
</template>

<script>
    export default {
        props:['dark' ],
        data(){
            return{
                medias:[
                    { icon:'mdi-send', href:'https://t.me/cafearzz' },
                    { icon:'mdi-instagram', href:'https://www.instagram.com/cafearz_com' },
                    { icon:'mdi-linkedin', href:'https://linkedin.com/in/%DA%A9%D8%A7%D9%81%D9%87-%D8%A7%D8%B1%D8%B2' },
                    { icon:'mdi-twitter', href:'https://twitter.com/ArzCafe' },
                    { icon:'mdi-facebook', href:'https://fb.me/Cafearz' },
                ],
                ul:[
                    {
                        header:'لینک های مهم',
                        li:[
                            { text:'شرایط و قوانین', route:'terms' },
                            { text:'سوالات متداول', route:'faq' },
                            { text:'اخبار و مقالات', link:'https://cafearz.com/blog' },
                            { text:'تماس با ما', route:'contact' },
                            { text:'درباره ما', route:'about' }
                        ]
                    },
                    {
                        header:'خدمات ما',
                        li:[
                            { text:'پی پال', route:'sell-buy-create-paypal' },
                            { text:'وب مانی', route:'sell-buy-webmoney' },
                            { text:'پرفکت مانی', route:'buy-sell-perfectmoney-vouchers' },
                            { text:'ارز دیجیتال', link:'https://cafearz.com/%D8%AE%D8%B1%DB%8C%D8%AF-%D9%81%D8%B1%D9%88%D8%B4-%D8%A7%D8%AA%D9%88%D9%85%D8%A7%D8%AA%DB%8C%DA%A9-%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA%D9%88%DA%A9%D8%A7%D8%B1%D9%86%D8%B3%DB%8C' },
                            { text:'ویزا و مستر', route:'mastercard-visacard' },
                            { text:'نقد درآمد ارزی', route:'income-cash-exchange' }
                        ]
                    },
                    {
                        header:'ارز دیجیتال',
                        li:[
                            { text:'خرید بیت کوین', link:'https://cafearz.com/coin/btc' },
                            { text:'خرید اتریوم', link:'https://cafearz.com/coin/eth' },
                            { text:'خرید تتر', link:'https://cafearz.com/coin/usdt' },
                            { text:'خرید شیبا', link:'https://cafearz.com/coin/shib' },
                            { text:'خرید ریپل', link:'https://cafearz.com/coin/xrp' },
                            { text:'خرید سولانا', link:'https://cafearz.com/coin/sol' }
                        ]
                    },
                    {
                        header:'خرید انواع گیفت کارت',
                        li:[
                            { text:'گیفت مارت آمازون', link:'https://cafearz.com/amazoon-gift-card' },
                            { text:'گیفت مارت پلی استیشن', link:'https://cafearz.com/playstation-gift-card' },
                            { text:'گیفت کارت ایکس باکس', link:'https://cafearz.com/xbox-gift-card' },
                            { text:'گیفت کارت آیتونز', link:'https://cafearz.com/ituns-gift-card' },
                            { text:'گیفت کارت گوگل پلی', link:'https://cafearz.com/google-play-gift-card' },
                            { text:'گیفت کارت اسپاتیفای', link:'https://cafearz.com/spotify-gift-card' }
                        ]
                    },
                    {
                        header:'لینک های بازدید',
                        li:[
                            { text:'قیمت لحظه ای ارز دیجیتال', route:'prices' },
                            { text:' خرید و فروش ارز دیجیتال', route:'خرید-و-فروش-ارز-دیجیتال-slug' },
                            { text:'خرید گیفت کارت', route:'buy-gift-card' },
                            { text:'شارز حساب پی پال', link:'https://cafearz.com/charge-paypal-account' },
                            { text:'شارز حساب وب مانی', link:'https://cafearz.com/charge-webmoney-account' },
                            { text:'خرید ووچر پرفکت مانی', link:'https://cafearz.com/perfectmoney-voucher' }
                        ]
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>