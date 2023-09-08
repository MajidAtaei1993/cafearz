<template>
    <section class="news-section">
        <div class="news-journals">
            <div class="text">
                <div class="head">اخبار و مقالات</div>
                <p>آخرین اخبار و مقالات بازارهای مالی، ارزهای دیجیتال و تکنولوژی</p>
            </div>
            <v-row class="ma-0">
                <v-col cols="12" md="6" v-for="post in posts.slice(0,1)" :key="post.id">
                    <a class="column" :href="post.link">
                        <div class="mask"></div>
                        <img :src="post.featured_image_url" alt="">
                        <div class="text">{{ post.title.rendered }}</div>
                    </a>
                </v-col>
                <v-col cols="12" md="6" class="pa-0">
                    <v-row class="ma-0">
                        <v-col cols="12" sm="6" v-for="post in posts.slice(2,6)" :key="post.id">
                            <a class="column" :href="post.link">
                                <div class="mask"></div>
                                <img :src="post.featured_image_url" alt="">
                                <div class="text">{{ post.title.rendered }}</div>
                            </a>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
        <Why :cards="cards" />
    </section>
</template>

<script>
import Why from '../common/Why.vue'
    export default {
        components:{ Why },
        data(){
            return{
                cards:[
                    { img:'/assets/images/support.svg', subject:'پشتیبانی قوی و آنلاین', desc:'کافه ارز با پشتیبانی روزانه از 9 صبح تا 12 شب خیال شما را از همکاری با سایت راحت کرده است' },
                    { img:'/assets/images/chart.svg', subject:'قیمت منصفانه و رقابتی', desc:'نرخ خدمات کافه ارز از جمله وب مانی بسیار منصفانه و رقابتی است' },
                    { img:'/assets/images/consulting.svg', subject:'مشاوره رایگان', desc:'تیم فروش و پشتیبانی ما به صورت رایگان پاسخگوی تمامی سوالات شما هستند' },
                    { img:'/assets/images/superService.svg', subject:'شارژ اتوماتیک و 24 ساعته', desc:'سفارشات وب مانی در کافه ارز به صورت آنی و بدون معطلی انجام می شود' }
                ],
                posts:[]
            }
        },
        mounted(){
            this.getPosts()
        },
        methods:{
            getPosts(){
                this.$store.dispatch('getPosts')
                .then(resp=>{
                    this.posts = resp
                })
                .catch(err=>{
                    console.log('something went wrong')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>