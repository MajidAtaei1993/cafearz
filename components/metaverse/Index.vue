<template>
    <section class="metaverse-section">
        <Banner />
        <Content />
        <FAQ />
        <AspectSend />
    </section>
</template>

<script>
import Banner from './Banner.vue'
import Content from './Content'
import FAQ from '../webmoney/FAQ.vue'
import AspectSend from '@/components/common/SendAspect.vue'
    export default {
        components :{
            Banner,
            Content,
            FAQ,
            AspectSend
        }
    }
</script>