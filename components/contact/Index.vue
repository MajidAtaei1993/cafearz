<template>
    <section class="contact-section">
        <div class="head">تماس با ما</div>
        <div class="subhead">اطلاعات تماس، آدرس و ارتباط با ایمیل</div>
        <div class="content">
            <v-row class="ma-0">
                <v-col cols="12" lg="6">
                    <div class="column">
                        <div class="head">ارتباط با ایمیل</div>
                        <div class="text">اطلاعات زیر از طریق ایمیل به ما ارسال خواهد شد</div>
                        <v-form class="form" ref="form">
                            <v-row class="ma-0">
                                <v-col cols="12" class="pr-0">
                                    <label for="userName" class="label">نام و نام خانوادگی</label>
                                    <v-text-field id="userName" dense solo flat background-color="white" hide-details="" placeholder="نام و نام خانوادگی" class="input" />
                                </v-col>
                                <v-col cols="12" class="pr-0">
                                    <label for="phone" class="label">شماره همراه / تلفن</label>
                                    <v-text-field id="phone" dense solo flat background-color="white" hide-details="" placeholder="تلفن" class="input" />
                                </v-col>
                                <v-col cols="12" class="pr-0">
                                    <label for="email" class="label">ایمیل / پست الکترونیک</label>
                                    <v-text-field id="email" dense solo flat background-color="white" hide-details="" placeholder="ایمیل" class="input" />
                                </v-col>
                                <v-col cols="12" class="pr-0">
                                    <label for="textarea" class="label">ایمیل / پست الکترونیک</label>
                                    <v-textarea no-resize rows="4" id="textarea" solo flat background-color="white" hide-details="" placeholder="متن پیام" class="textarea" />
                                </v-col>
                            </v-row>
                            <v-btn class="submit" depressed>ارسال پیام</v-btn>
                        </v-form>
                    </div>
                </v-col>
                <v-col cols="12" lg="6">
                    <div class="column">
                        <div class="head">پشتیبانی از ساعت 9 صبح الی 12 شب</div>
                        <div class="add-contact">
                            <div class="address">
                                <div class="head">آدرس دفتر</div>
                                <div class="text">شیراز خیابان برق، ساختمان ارشیا، طبقه 6 واحد 8</div>
                            </div>
                            <div class="contact">
                                <div class="head">تلفن تماس تهران</div>
                                <div class="text">021-91014920</div>
                            </div>
                            <div class="contact">
                                <div class="head">تلفن تماس شیراز</div>
                                <div class="text">071-32320715</div>
                            </div>
                        </div>
                        <div class="social-medias">
                            <v-btn x-small depressed class="btn" target="_blank" v-for="(item, i) in socialMedia" :key="i" :href="item.href">
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-btn>
                        </div>
                        <img src="/assets/images/contact.svg" alt="" class="banner">
                    </div>
                </v-col>
                <v-col cols="12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.351189749713!2d52.51821779156309!3d29.621814725015163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb2137cb98051e1%3A0xf4999e024746a948!2z2qnYp9mB2Ycg2KfYsdiy!5e0!3m2!1sen!2s!4v1636195194786!5m2!1sen!2s" height="350" style="border:0;" allowfullscreen="" width="100%" loading="lazy"></iframe>
                </v-col>
            </v-row>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                socialMedia:[
                    { icon:'mdi-send', href:'https://t.me/cafearzz' },
                    { icon:'mdi-instagram', href:'https://www.instagram.com/cafearz_com' },
                    { icon:'mdi-linkedin', href:'https://linkedin.com/in/%DA%A9%D8%A7%D9%81%D9%87-%D8%A7%D8%B1%D8%B2' },
                    { icon:'mdi-twitter', href:'https://twitter.com/ArzCafe' },
                    { icon:'mdi-facebook', href:'https://fb.me/Cafearz' },
                    { icon:'mdi-phone-in-talk-outline', text:'021-91014920', href:'tel:+9821-91014920' },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>