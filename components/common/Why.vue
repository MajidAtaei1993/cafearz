<template>
    <div class="why">
        <div class="header">چرا باید به کافه ارز اعتماد کنیم؟</div>
        <v-row class="cards ma-0">                    
            <v-col cols="6" lg="3" v-for="(card, i) in cards" :key="i">
                <div class="card">
                    <img :src="card.img" alt="">
                    <div class="subject">{{ card.subject }}</div>
                    <div class="desc">{{ card.desc}}</div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        // props:[ 'cards' ],
        data(){
            return{
                cards:[
                    { img:'/assets/images/support.svg', subject:'پشتیبانی قوی و آنلاین', desc:'کافه ارز با پشتیبانی روزانه از 9 صبح تا 12 شب خیال شما را از همکاری با سایت راحت کرده است' },
                    { img:'/assets/images/chart.svg', subject:'قیمت منصفانه و رقابتی', desc:'نرخ خدمات کافه ارز از جمله وب مانی بسیار منصفانه و رقابتی است' },
                    { img:'/assets/images/consulting.svg', subject:'مشاوره رایگان', desc:'تیم فروش و پشتیبانی ما به صورت رایگان پاسخگوی تمامی سوالات شما هستند' },
                    { img:'/assets/images/superService.svg', subject:'شارژ اتوماتیک و 24 ساعته', desc:'سفارشات وب مانی در کافه ارز به صورت آنی و بدون معطلی انجام می شود' }
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>