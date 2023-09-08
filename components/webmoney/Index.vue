<template>
    <section>
        <Banner :currencies="currencies" />
        <Content />
        <FAQ />
    </section>
</template>

<script>
import Banner from './Banner.vue'
import Content from './Content.vue'
import FAQ from './FAQ.vue'
    export default {
        components:{
            Banner,
            Content,
            FAQ
        },
        data(){
            return{
                currencies:[],
            }
        },
        mounted(){
            this.getCurrencies()
        },
        methods:{
            getCurrencies(){
                let temp = []
                this.$store.dispatch('getCurrencies')
                .then(resp=>{
                    for (let i = 0; i < Object.entries(resp).length; i++) {
                        const coin = Object.entries(resp)[i];
                        temp.push({
                            value: coin[0],
                            text: coin[1].name,
                            usd: coin[1].usd,
                            icon: coin[1].icon,
                            sell: coin[1].sell,
                            buy: coin[1].buy,
                            sellUrl: coin[1].sellurl,
                            buyUrl: coin[1].buyurl
                        })
                  }
                this.currencies = temp.slice(0,1)
                setTimeout(() => {
                    this.getCurrencies()
                }, 3000);
            })
                .catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>