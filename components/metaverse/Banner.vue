<template>
    <section class="mastercard-banner">
        <img src="/assets/images/mastercard-bg.svg" alt="" class="banner">
        <v-row class="ma-0" align="center">
            <v-col cols="12" sm="6">
                <div class="column">
                    <nuxt-link class="meta-link" :to="{ name: 'metaverse-services'}">خدمات متاورس (Metaverse)</nuxt-link>
                    <div class="desc mt-4">
                        متاورس (Metaverse) ترکیبی از چندین عنصر فناوری از جمله واقعیت مجازی، واقعیت افزوده و ویدئو است که در آن کاربران در یک جهان دیجیتال زندگی می‌کنند. شاید این تنها تعریف ساده متاورس باشد. با استفاده از خدمات متاورس در سایت کافه ارز شما می‌توانید به آسانی نسبت به خرید زمین مجازی در متاورس و همچنین خرید توکن های متاورس اقدام کنید.
                    </div>
                </div>
            </v-col>
            <v-col cols="12" sm="6">
                <div class="column">
                    <img src="/assets/images/metaverse/banner.svg" alt="" class="banner-income-cash-exchange">
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