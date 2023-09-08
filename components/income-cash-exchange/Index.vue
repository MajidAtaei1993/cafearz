<template>
    <section>
        <Banner />
        <Content />
        <FAQ />
        <SendAspect />
    </section>
</template>

<script>
import Banner from './Banner.vue'
import Content from './content.vue'
import FAQ from '../common/FAQ.vue'
import SendAspect from '../common/SendAspect.vue'
    export default {
        components: { Banner, Content, FAQ, SendAspect }
    }
</script>

<style lang="scss" scoped>

</style>