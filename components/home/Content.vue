<template>
    <section class="home-content">
        <div class="export-cards">
            <div class="text">
                <div class="head">صدور ویزا کارت و مستر کارت مجازی</div>
                <p>ویزا کارت آمریکن اکسپرس، ویزا و مستر مجازی، گیفت کارت ویزا و مستر</p>
            </div>
            <div class="cards">
                <a href="https://cafearz.com/visa-and-master-virtual-card" class="card">
                    <img src="/assets/images/home/v-card.png" alt="">
                </a>
                <a href="https://cafearz.com/visa-and-master-gift-cards" class="card">
                    <img src="/assets/images/home/gift-card.png" alt="">
                </a>
                <a href="https://cafearz.com/american-express-giftcard" class="card">
                    <img src="/assets/images/home/express-card.png" alt="">
                </a>
            </div>
        </div>
        <v-row class="data-table">
            <div class="head">قیمت لحظه ای ارزهای دیجیتال</div>
            <div class="search-box">
                <v-text-field filled rounded background-color="#f5f5f5" hide-details="" class="search-input" height="48.5" placeholder="نام نماد را وارد کنید" flat v-model="search" />
            </div>
            <v-data-table :headers="header" :items="currencies" :search="search" :items-per-page="20" hide-default-footer @page-count="pageCount = $event" :page.sync="pageNumber" class="tbody elevation-0">
                <template v-slot:item.name="{ item }">
                    <div class="tr pr-0">
                        <div class="td justify-start">
                            <img class="icon" :src="item.icon" alt="">
                            <div class="text">{{ item.text }}</div>
                            <div class="symbol">{{ item.symbol }}</div>
                        </div>
                    </div>
                </template>
                <template v-slot:item.usd="{ item }">
                    <div class="tr">
                        <div class="td">
                            <div class="text">{{ new Intl.NumberFormat().format(item.usd) }}</div>
                        </div>
                    </div>
                </template>
                <template v-slot:item.price="{ item }">
                    <div class="tr">
                        <div class="td">
                            <div class="text">{{ item.buy }}</div>
                        </div>
                    </div>
                </template>
                <template v-slot:item.action="{ item }">
                    <div class="tr">
                        <div class="td">
                            <div class="action">
                                <v-btn small class="btn" depressed :href="item.buyUrl">خرید</v-btn>
                                <v-btn small class="btn" depressed :href="item.sellUrl">فروش</v-btn>
                            </div>
                        </div>
                    </div>
                </template>
            </v-data-table>
            <!-- <div class="thead">
                <div class="tr">
                    <div class="th justify-start">
                        <div class="text">نام ارز</div>
                    </div>
                    <div class="th">
                        <div class="text">آخرین قیمت (دلاری)</div>
                    </div>
                    <div class="th">
                        <div class="text">معامله</div>
                    </div>
                    <div class="th">
                        <div class="text"></div>
                    </div>
                    <div class="th">
                        <div class="text">تغییرات</div>
                    </div>
                    <div class="th">
                        <div class="text">نمودار</div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="tbody">
                <div class="tr" v-for="currency in filterDataTable" :key="currency.value">
                    <div class="td justify-start">
                        <img :src="currency.icon" alt="" class="icon">
                        <div class="text">{{ currency.text }}</div>
                        <div class="symbol">{{ currency.symbol }}</div>
                    </div>
                    <div class="td">
                        <div class="text">{{ new Intl.NumberFormat().format(currency.usd) }}</div>
                    </div>
                    <div class="td">
                        <div class="text">{{ currency.buy }}</div>
                    </div>
                    <div class="td">
                        <div class="action">
                            <v-btn small class="btn" depressed :href="currency.buyUrl">خرید</v-btn>
                            <v-btn small class="btn" depressed :href="currency.sellUrl">فروش</v-btn>
                        </div>
                    </div>
                    <div class="td">
                            <div :class="negative > 0 ? 'change-positive' : 'change-negative'">{{ negative }}%</div>
                    </div>
                    <div class="td">
                        <v-card width="100" height="50" color="white" flat>
                            <v-sparkline color="primary" :value="value" radius="10" padding="4" smooth="12" auto-draw width="100" height="50" />
                        </v-card>
                    </div>
                </div>
            </div> -->
            <v-pagination dir="lrt" color="#f0b90b" v-model="pageNumber" :length="pageCount" class="mx-auto my-4" />
            <div class="text-per-page">صفحه {{ pageNumber }}  از {{ pageCount }}</div>
        </v-row>
        <div class="d-flex align-center justify-center mt-4" style="width:100%">
            <nuxt-link class="link" :to="{ name: 'prices' }"> مشاهده همه ارزهای دیجیتال موجود در کافه ارز </nuxt-link>
        </div>

    </section>
</template>

<script>
    export default {
        props:[ 'currencies' ],
        data(){
            return{
                positive: 2.61,
                negative: -2.61,
                search:'',
                pageNumber: 1,
                total:25,
                pageCount:0,
                header:[
                    {text:'نام ارز', value:'name', sortable:false, align: 'start'},
                    {text:'آخرین قیمت (دلاری)', value:'usd', sortable:false, align: 'start'},
                    {text:'قیمت معامله', value:'price', sortable:false, align: 'start'},
                    {text:'', value:'action', sortable:false}
                ],
                value:[
                    this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt()
                ]
            }
        },
        methods:{
            randomInt(){
                return Math.floor(Math.random()*(50-5+1))+5
            }
        },
        computed:{
            filterDataTable(){
                if (this.search) {
                    return this.currencies.filter(coin=>{
                        return this.search.toLowerCase().split(" ").every(v=>coin.text.toLowerCase().includes(v))
                    })
                }
                else{
                    return this.currencies
                }
            }
        }
    }
</script>