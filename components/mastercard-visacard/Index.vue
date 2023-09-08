<template>
    <section>
        <Banner />
        <WhatIsVisaCard />
        <FAQ />
        <SendAspect />
    </section>
</template>

<script>
import Banner from './Banner.vue'
import WhatIsVisaCard from './WhatIsVisaCard.vue'
import FAQ from '../common/FAQ.vue'
import SendAspect from '../common/SendAspect.vue'
    export default {
        components:{ Banner, WhatIsVisaCard, FAQ , SendAspect}
    }
</script>

<style lang="scss" scoped>

</style>