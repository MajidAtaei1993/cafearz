<template>
    <section>
        <About :comments="comments" />
    </section>
</template>

<script>
import About from '@/components/about/Index.vue'
    export default {
        components:{ About },
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