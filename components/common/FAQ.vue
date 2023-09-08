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
                    { header:'آیا کافه ارز درآمد های دلاری فریلنسر ها و تریدر را به ریال تبدیل می کند ؟', text:'بله، کافه ارز درآمد های دلاری شما که شامل ارزهای پی پال، وب مانی، پرکت مانی، ارزهای دیجیتال، اسکریل و .. است را به ریال تبدیل می کند' },
                    { header:'مدت زمان انجام تبدیل ارزها به ریال چقدر است ؟', text:'با توجه به نوع ارزها و وریفای بودن اکانت حساب کاربری شما حدودا بین 15 دقیقه تا 2 ساعت به طول می انجامد' },
                    { header:'چه نوع ارزهای را به ریال تبدیل می کنید ؟', text:'پی پال، وب مانی، پرفکت مانی،اسکریل، ویزا و مستر و ارزهای دیجیتال' },
                    { header:'برای تبدیل ارز به ریال نیاز به وریفای حساب می باشم ؟', text:'تنها باید نسبت به وریفای کردن حساب بانکی برای تسویه اقدام نمایید.' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>