<template>
    <section class="send-aspect-section">
        <div class="head">ارسال دیدگاه</div>
        <v-form ref="form" class="form">
            <v-text-field filled rounded background-color="#f5f8fd" hide-details="" class="input" placeholder="نام و نام خانوادگی" />
            <v-textarea filled rounded background-color="#f5f8fd" hide-details="" class="textarea" placeholder="لطفا دیدگاه خود را بنویسید ..." />
            <div class="d-flex align-center">
                <input type="text" class="security-code" placeholder="کد امنیتی">
                <img alt="captcha" class="refresh-captcha" src="https://cafearz.com/captcha/image/generator" height="65" style="border-radius: 5px;max-width: 100%;cursor: pointer">
            </div>
        </v-form>
        <v-btn class="submit" depressed>ثبت دیدگاه</v-btn> 
        <div class="comments">
            <div class="comment" v-for="(comment, i) in comments" :key="i">
                <div class="user-info">
                    <img src="/assets/images/account-avatar.svg" alt="" class="avatar">
                    <div class="text">
                        <div class="name">{{ comment.user }}</div>
                        <div class="active">{{ date }}</div>
                    </div>
                </div>
                <div class="text">{{ comment.feedback }}</div>
                <!-- <div class="text pr-8">{{ comment.answer }}</div> -->
            </div>
        </div>
    </section>
</template>

<script>
    export default {
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