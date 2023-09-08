<template>
    <section class="mastercard-faq-section">
        <div class="head">سوالات متداول</div>
        <v-row class="ma-0" align="center">
            <v-col cols="12" md="6">
                <v-expansion-panels v-model="expand" flat>
                    <v-expansion-panel class="expand-body" v-for="(panel, i) in panels" :key="i">
                        <v-expansion-panel-header class="expand-header">{{ panel.header }}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div class="expand-text">
                                {{ panel.text }}
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="12" md="6">
                <img src="/assets/images/faq-master-card.svg" alt="" class="faq-mastercard">
            </v-col>
        </v-row>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                expand:null,
                panels:[
                    { header:'چگونه وارد متاورس شویم؟', text:' شما می‌توانید از طریق پلتفرم های مختلفی همچون دسنترالند، سند باکس یا آپلند وارد جهان متاورس شوید.' },
                    { header:'چگونه در متاورس سرمایه گذاری کنیم؟', text:'روش‌های مختلفی برای شروع سرمایه گذاری در متاورس وجود دارد که شامل خرید توکن های متاورس یا خرید زمین در متاورس می‌شود.' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>