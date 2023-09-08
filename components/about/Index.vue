<template>
    <section class="about-section">
        <div class="head">درباره ما</div>
        <div class="subhead">اهداف ، سیاست ها ، خدمات</div>
        <div class="content">
            <div class="introduce">
                <div class="header">معرفی کافه ارز</div>
                <div class="desc">کافه ارز یک سیستم مالی بین المللیست که فعالیت خود را از ابتدای سال 98 شروع کرده است. از مهم ترین خدمات کافه ارز می توان به خدمات کلی پی پال، وب مانی ،ویزا و مسترکارت، پرفکت مانی، ارزهای دیجیتال، فروش انواع گیفت کارت ها و گیفت های ویزا مستر و پرداخت های بین المللی اشاره کرد. اما تفاوت کافه ارز با دیگر رقبا در نوع رسیدگی به خدمات و اتومات بودن بیش از 80 درصد از خدمات سایت است که گامی بلند در راستای جلب رضایت مشتری برداشته است.</div>
            </div>
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
        </div>
        <div class="carousel-section">
            <div class="header">از مشتریان بشنوید</div>
            <VueSlickCarousel v-bind="settings" v-if="comments.length">
                <div v-for="(comment, i) in comments" :key="i" class="comment">
                    <v-card class="card" flat>
                        <v-card-title>
                        <img src="/assets/images/double-quote.png" class="img" />
                        </v-card-title>
                        <v-card-text class="text-commnet">
                            <p>{{ comment.feedback }}</p>
                        </v-card-text>
                        <v-card-actions class="actions">
                            <img src="/assets/images/account-avatar.svg" alt="">
                            <div class="name">{{ comment.user }}</div>
                        </v-card-actions>
                    </v-card>
                </div>
            </VueSlickCarousel>
        </div>
    </section>
</template>

<script>
    export default {
        props:['comments'],
        data(){
            return{
                cards:[
                    { img:'/assets/images/support.svg', subject:'پشتیبانی سریع و حرفه ای', desc:'از طریق چت آنلاین، تیکت و تماس در کمترین زمان ممکن پاسخگوی شما هستیم' },
                    { img:'/assets/images/chart.svg', subject:'پایین ترین نرخ بازار', desc:'نرخ تمامی ارزها را با سایر رقبا مقایسه کنید و شاهد انصاف کافه ارز باشید' },
                    { img:'/assets/images/consulting.svg', subject:'مشاوره رایگان', desc:'تیم فروش و پشتیبانی ما به صورت رایگان پاسخگوی تمامی سوالات شما هستند' },
                    { img:'/assets/images/superService.svg', subject:'ارائه خدمات آنی', desc:'95 درصد خدمات کافه ارز به صورت آنی و اتوماتیک انجام میشود' }
                ],
                settings:{
                    "dots": false,
                    // "centerMode": true,
                    "infinite": true,
                    "speed": 500,
                    "slidesToShow": 3,
                    // "centerPadding": "60px",
                    "slidesToScroll": 1,
                    "pauseOnHover": true,
                    "pauseOnFocuse": true,
                    "autoplay": true,
                    "autoplaySpeed": 2000,
                    "responsive": [
                        {
                            "breakpoint": 1024,
                            "settings": {
                                "slidesToShow": 1,
                                "slidesToScroll": 1,
                                "infinite": true,
                                "dots": false,
                                "pauseOnHover": true,
                                "pauseOnFocuse": true,
                            }
                        },
                    ],
                },
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>