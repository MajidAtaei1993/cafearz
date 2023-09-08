<template>
    <section class="income-cash-exchange-content">
        <div class="content">
            <div class="text-section">
                <div class="head">کسب درآمد دلاری</div>
                <p>امروزه کسب درآمد از طریق اینترنت بسیار رواج پیدا کرده است. تریدر ها، فریلنسر ها و یا کسانی که از طریق اینترنت اقدام به فروش کالاهای خود می کنند درآمد ارزی بسیار خوبی کسب می کنند. با توجه به شرایط کشور ما بسیاری از هم میهنان جهت تبدیل در این درامد ها به ریال دچار مشکلات عدیده ای می شوند. این درآمد ها معمولا به صورت ارزهای دیجیتالی می باشد. پی پال، وب مانی، پرفکت مانی، اسکریل یا بیت کوین و سایر رمز ارزها بیش ترین سهم این بازار را به خود اختصاص داده اند.</p>
            </div>
            <div class="free-lancer-section">
                <div class="head">کسب درآمد فریلنسری</div>
                <p>اگر به دنبال ایجاد یک کسب و کار آنلاین جدید هستید، با تعدادی از سایت های فریلنسر اشنا شوید. شما نیز می‌توانید به صورت فریلنسری در این سایت‌ها به درآمد دلاری برسید.همچنین در بعضی از این سایت‌ها می‌توانید با فروش محصولات دیجیتال خود درآمد ارزی کسب کنید.</p>
                <v-row class="logos ma-0" justify="center">
                    <v-col cols="4" md="2" sm="4" class="logo" v-for="(logo, i) in logos" :key="i">
                        <img :src="logo.img" alt="" class="logo-img">
                    </v-col>
                </v-row>
                <div class="head">نقد درآمد ارزی شما توسط کافه ارز</div>
                <p>اگر شما برنامه نویس ، عکاس، تریدر، و یا حتی فروشگاه اینترنتی خارجی دارید، می توانید درآمد ارزی که خود را در سریع ترین زمان ممکن در کافه ارز به ریال تبدیل کنید. به شما قول میدهیم که با بهترین نرخ بازار و کمترین زمان درآمد شما را نقد کنیم.</p>
            </div>
            <div class="what-cash-exchange">
                <div class="head">در کافه ارز چه ارزهای نقد می شوند ؟</div>
                <v-row class="cryptos ma-0">
                    <v-col v-for="(crypto, i) in cryptos" :key="i" cols="auto">
                        <div class="crypto">
                            <img :src="crypto.logo" alt="" class="img">
                            <div class="name">{{ crypto.name }}</div>
                        </div>
                    </v-col>
                </v-row>
            </div>
            <Why />
        </div>
    </section>
</template>

<script>
import Why from '../common/Why.vue'
    export default {
        components:{Why},
        data(){
            return{
                logos:[
                    {img:'/assets/images/freelancer/1.png'},
                    {img:'/assets/images/freelancer/2.png'},
                    {img:'/assets/images/freelancer/3.png'},
                    {img:'/assets/images/freelancer/4.png'},
                    {img:'/assets/images/freelancer/5.png'},
                    {img:'/assets/images/freelancer/6.png'},
                    {img:'/assets/images/freelancer/1-1.png'},
                    {img:'/assets/images/freelancer/2-1.png'},
                    {img:'/assets/images/freelancer/3-1.png'},
                    {img:'/assets/images/freelancer/4-1.png'},
                    {img:'/assets/images/freelancer/5-1.png'},
                    {img:'/assets/images/freelancer/6-1.png'},
                ],
                cryptos:[
                    { logo:'/assets/images/payer.svg', name:'پایر'},
                    { logo:'/assets/images/paypal.svg', name:'پی پال'},
                    { logo:'/assets/images/webmoney.svg', name:'وی مانی'},
                    { logo:'/assets/images/perfectMoney.svg', name:'پرفکت مانی'},
                    { logo:'/assets/images/bitCoin.svg', name:'ارز های دیجیتال'}
                ],
            }
        }
    }
</script>