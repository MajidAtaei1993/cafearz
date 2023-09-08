<template>
    <div class="testimonial-section sbs-testimonial-section pd-top-105 pd-bottom-120">
    <div class="container">
        <div class="row justify-space-between flex-row-reverse">
        <div class="col-12 col-xl-4 col-lg-5 order-lg-12 align-self-center">
            <div class="section-title style-two mb-0 text-right">
                <h2 class="head">مشتریان ما چه می گویند؟</h2>
                <p>
                    تیم پشتیبانی ما از پیشنهادات مبتنی بر هوش مصنوعی کمک می‌گیرد
                    و رسیدگی به درخواست‌های پشتیبانی را سریع‌تر از همیشه می‌کند.
                </p>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="sbs-testimonial-slider">
            <div class="choose_slider">
                <div class="choose_slider_items">
                    <ul id="testimonial-slider">
                        <li class="current_item" v-for="(comment, i) in comments" :key="i">
                            <div class="media"> <img class="media-left" src="/icon.png" alt="client">
                                <div class="media-body">
                                <h6>{{ comment.user}}</h6>
                                <!-- <p class="designation">فول استک dev</p> -->
                                <!-- <span> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </span>  -->
                                </div>
                            </div>
                            <p>
                                {{ comment.feedback }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sbs-arrowleft">
                <v-btn icon>
                    <v-icon id="btn_next">mdi-chevron-left</v-icon>
                </v-btn>
            </div>
            <div class="sbs-arrowright">
                <v-btn icon>
                    <v-icon id="btn_prev">mdi-chevron-right</v-icon>
                </v-btn>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        head:{
            script:[
                {src:'../../assets/js/jquery-2.2.4.min.js'},
                {src:'../../assets/js/bootstrap.min.js'},
                {src:'../../assets/js/jquery.magnific-popup.js'},
                {src:'../../assets/js/wow.min.js'},
                {src:'../../assets/js/jquery.cssslider.min.js'},
                {src:'../../assets/js/main.js'},
            ],
            stylesheet:[
                {src:'../../assets/css/font-awesome.css'},
                {src:'../../assets/css/carousel/animated-slider.css'},
                {src:'../../assets/css/carousel/bootstrap.min.css'},
                {src:'../../assets/css/carousel/responsive.css'},
                {src:'../../assets/css/carousel/slick.css'},
                {src:'../../assets/css/carousel/style-slick.css'}
            ]
        },
        data(){
            return{
                comments:[],
                date: new Date().toLocaleDateString('fa-IR')
            }
        },
        mounted(){
            this.getComments()
        },
        methods:{
            getComments(){
                this.$store.dispatch('getComments')
                .then(resp=>{
                    this.comments = resp
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