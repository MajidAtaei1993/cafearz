<template>
    <section class="app-home-banner">
        <div class="box" />
        <div class="cont">
            <div class="app-container bg">
            <img src="/assets/images/home/left-banner.svg" alt="" class="right-banner">
            <!-- <VueSlickCarousel v-bind="settings"> -->
                <div>
                    <v-row class="mx-0 row" align="center">
                        <v-col cols="12" sm="6">
                            <img src="/assets/images/home/banner-right.webp" alt="" class="guy-width-laptop">
                        </v-col>
                        <v-col cols="12" sm="6" class="text-content">
                            <div class="head">برترین پلتفرم خدمات ارزی و پرداخت های بین المللی</div>
                            <p>
                                انجام پرداخت های بین المللی، خرید و فروش ارزهای الکترونیک ، صدور کارت های اعتباری گیفت و مجازی و خرید و فروش بیش از 600 ارز دیجیتال به صورت آنی همراه با ارزان ترین نرخ در بازار
                            </p>
                            <v-btn class="btn" depressed href="https://app.cafearz.com/">همین حالا شروع کنید</v-btn>
                        </v-col>
                    </v-row>
                </div>
            <!-- </VueSlickCarousel> -->
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                settings:{
                    "arrows": false,
                    "dots": false,
                    "infinite": true,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "autoplay": true,
                    "speed": 5000,
                    "autoplaySpeed": 500,
                    // "cssEase": "linear",
                    // "centerMode": true,
                    "vertical": true,
                    "verticalSwiping": true,
                    "fade": true,
                    "lazyLoad": "ondemand"
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>