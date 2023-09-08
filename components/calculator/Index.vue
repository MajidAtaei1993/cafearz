<template>
    <section class="calculator-section">
        <img src="/assets/images/calc/bg.svg" class="bg" />
        <!-- calculator -->
        <v-row class="calculator">
            <v-col cols="12" md="6">
                <div class="head">خرید و فروش ارز دیجیتال به صورت آنی (اتوماتیک)</div>
                <ul>
                    <li>پشتیبانی از شبکه های TRC20 , ERC20 ,BEP2 , BEP20 و ... در هنگام خرید فروش</li>
                    <li>خرید و فروش بیش از 270 ارز معتبر مارکت</li>
                    <li>انجام اتوماتیک سفارشات خرید و فروش</li>
                    <li>پایین ترین نرخ نسبت به همه رقبا</li>
                    <li>امنیت و سرعت در انجام سفارشات</li>
                </ul>
                <v-btn class="btn" depressed :to="{ name:'prices' }">قیمت لحظه ای ارزهای دیجیتال</v-btn>
            </v-col>
            <!-- calc main -->
            <v-col cols="12" md="6">
                <v-card class="calc-card" flat>
                    <div class="tabs">
                        <v-btn :class="tab == 0 ? 'tab-active' : 'tab'" depressed @click="tab = 0">خرید</v-btn>
                        <v-btn :class="tab == 1 ? 'tab-active' : 'tab'" depressed @click="tab = 1">فروش</v-btn>
                    </div>
                    <div class="calc-inputs">
                        <div class="toman-input">
                            <div class="toman-box">
                                <div class="toman">تومان</div>
                                <div class="symbol">IRT</div>
                            </div>
                            <div class="input-box">
                                <div class="text">میزان {{ toman }}</div>
                                <v-text-field hide-details="" flat solo dense type="text" class="amount" v-model="price.tomanUnit">{{ changeToman }}</v-text-field>
                            </div>
                        </div>
                        <div class="with-payment">
                            <div class="with">یا</div>
                            <div class="payment">تومان{{ tab == 0 && selectedCoin ? selectedCoin.buy : tab == 1 && selectedCoin ? selectedCoin.sell : '' }} ~ 1{{ selectedCoin ? selectedCoin.symbol : '' }} </div>
                        </div>
                        <div class="toman-input">
                            <div class="symbol-box" @click="coinDialog = true">
                                <img :src="selectedCoin ? selectedCoin.icon : ''" alt="" class="icon">
                                <div class="text">
                                    <div class="name">{{ selectedCoin ? selectedCoin.text : '...'}}</div>
                                    <div class="symbol">{{ selectedCoin ? selectedCoin.symbol : '...'}}</div>
                                </div>
                            </div>
                            <div class="input-box">
                                <div class="text">میزان {{ coin }}</div>
                                <v-text-field hide-details="" flat solo dense type="text" class="amount" v-model="price.coinUnit">{{ changeCoin == 0? 1 : changeCoin }}</v-text-field>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="network-rate-price">
                        <div class="head">انتخاب شبکه انتقال</div>
                        <div class="content">
                            <div :class="box == rate.value ? 'box-active' : 'box'" v-for="(rate, i) in localCurrencies.slice(0, 6)" :key="i" @click="box = rate.value, getRate(rate)">
                                <div class="name">{{ rate.text }}</div>
                                <div class="paid">{{ new Intl.NumberFormat().format(rate.usd) }}</div>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="network-paid" v-if="tab == 0">کارمزد شبکه انتقال : {{ networkPaid ? new Intl.NumberFormat().format(networkPaid.usd): '...' }}</div> -->
                    <!-- <div class="total-paid">خالص دریافتی {{ networkPaid ? networkPaid.usd*price.tomanUnit : '' }}</div> -->
                    <v-btn class="submit" depressed :href="tab == 0 && selectedCoin ? selectedCoin.buyUrl : tab == 1 && selectedCoin ? selectedCoin.sellUrl : ''">ثبت سفارش</v-btn>
                </v-card>
            </v-col>
        </v-row>
        <!-- end calculator -->
        <!-- top cards -->
        <div class="symbols-card">
            <v-row class="ma-0 cards">
                <v-col cols="12" md="4" sm="6" v-for="(card, i) in currencies.slice(0,6)" :key="i">
                    <v-card class="card" flat>
                        <div class="coin-details">
                            <div class="price-usd">{{ new Intl.NumberFormat().format(card.usd) }} $</div>
                            <div class="name">{{ card.text }}</div>
                            <img :src="card.icon" alt="" class="icon">
                        </div>
                        <div class="change-in-hour">
                            <div class="percent-text">
                                <!-- <div class="percent-down">2.61-</div> -->
                                <!-- <div class="text">تغییرات 24 ساعته</div> -->
                            </div>
                            <!-- <img src="/assets/images/calc/chart-simple.svg" alt="" class="chart"> -->
                            <div class="action">
                                <v-btn depressed class="btn" :href="card.buyUrl">خرید</v-btn>
                                <div class="text">کنید</div>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <!-- end top cards -->
        <!-- content data-table -->
        <div class="content">
            <div class="head">خرید و فروش ارز دیجیتال در کافه ارز</div>
            <p>
                کافه ارز با ایجاد سیستم اتوماتیک خرید و فروش ارزهای دیجیتال گوی سبقت را از رقبای خود پیش گرفته و با پشتیبانی از 250 ارز برتر مارکت تفاوت عظیمی با رقبای خود ایجاد کرده است، فقط کافیست با احراز هویت مدارک و ثبت کارت بانکی خود از خرید و فروش آنی ارزهای دیجیتال در کافه ارز لذت ببرید . کافه ارز از شبکه‌ی بلاک‌چین‌ مختلف برای رمزارزها جهت انجام عملیات واریز و برداشت پشتیبانی می نماید،به عنوان مثال فرقی ندارد کیف پول تتر شما از نوع #OMNI و #TRC20 یا #ERC20 باشد . انتقال به هر یک از این شبکه ها در سایت ما چه در زمان خرید یا چه در زمان فروش میسر است .
            </p>
            <v-row class="data-table">
                <div class="head">قیمت لحظه ای ارزهای دیجیتال</div>
                <div class="search-box">
                    <v-text-field filled rounded background-color="#f5f5f5" hide-details="" class="search-input" height="48.5" placeholder="نام نماد را وارد کنید" flat v-model="search" />
                </div>
                <v-data-table :headers="header" :items="localCurrencies" :search="search" :items-per-page="20" hide-default-footer @page-count="pageCount = $event" :page.sync="pageNumber" class="tbody">
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
            <div class="support-action" @click="$router.push({name: 'prices'})">
                 پشتیبانی از 250 ارز دیجیتال معتبر مارکت های دنیا 
            </div>
            <Why />
        </div>
        <!-- end content data-table -->
        <div class="start-from-now">
            <div class="head">از همین حالا شروع کنید</div>
            <v-btn class="btn" depressed href="https://app.cafearz.com/">برای ثبت سفارش جدید کلیک کنید</v-btn>
        </div>

        <!-- list coin dialog -->
        <v-dialog v-model="coinDialog" width="780" persistent>
            <div class="dialog-content">
                <div class="head">
                    <div class="text">ارز مورد نظر را انتخاب کنید</div>
                    <v-btn fab small depressed class="btn" @click="coinDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </div>
                <div class="tabs">
                    <v-btn depressed :class="dialogTab == 0 ? 'tab-active' : 'tab'" @click="dialogTab = 0">
                        <img src="/assets/images/calc/binance.svg" alt="">
                        ارزهای بایننس
                    </v-btn>
                    <!-- <v-btn depressed :class="dialogTab == 1 ? 'tab-active' : 'tab'" @click="dialogTab = 1">
                        <img src="/assets/images/calc/kucoin.svg" alt="">
                        ارزهای کوکوین
                    </v-btn> -->
                </div>
                <div class="search-box">
                    <v-text-field filled height="40px" v-model="search" rounded background-color="#fbfbfb" hide-details="" class="input" flat placeholder="جستجو" />
                </div>
                <div class="coin-list">
                    <div class="list" v-for="coin in dialogTab == 0 ? filterDataTable : ''" :key="coin.value" @click="getCoin(coin), coinDialog = false">
                        <img :src="coin.icon" alt="" class="icon">
                        <div class="text">
                            <div class="name">{{ coin.text }}</div>
                            <div class="symbol">{{ coin.symbol }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </v-dialog>
        <!-- end list coin dialog -->
    </section>
</template>

<script>
import Why from '../common/Why.vue'
    export default {
        props:[ 'currencies' ],
        components:{ Why },
        data(){
            return{
                tab:[0, 1],
                dialogTab:[0, 1],
                coinDialog:null,
                box:[0, 1, 2, 3, 4],
                toman:'تومانی',
                coin:'ارز',
                price:{
                    tomanUnit:null,
                    coinUnit:null
                },
                totalPaid:null,
                networkPaid:null,
                search:'',
                positive: 2.61,
                negative: -2.61,
                search:'',
                selectedCoin:null,
                localCurrencies:[],
                pageSize: 3,
                visiblePages: 10,
                pageNumber : 1,
                itemsShowed:[],
                offset:0,
                limit:0,
                numOfPages: 0,
                paginationSize: 0,
                pageCount:0,
                header:[
                    {text:'نام ارز', value:'name', sortable:false, align: 'start'},
                    {text:'آخرین قیمت (دلاری)', value:'usd', sortable:false, align: 'start'},
                    {text:'قیمت معامله', value:'price', sortable:false, align: 'start'},
                    {text:'', value:'action', sortable:false}
                ],
                value:[
                    this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt()
                ],
                networkRate:[
                    { active:0, name:'BNB Smart Chain (BEP20)', paid:'0.0000051' },
                    { active:1, name:'Bitcoin', paid:'0.0000051' },
                    { active:2, name:'BNB Beacon Chain (BEP2)', paid:'0.0000051' },
                    { active:3, name:'BTC(SegWit)', paid:'0.0000051' },
                    { active:4, name:'Ethereum (ERC20)', paid:'0.0000051' }
                ],
                cards:[
                    { img:'/assets/images/support.svg', subject:'پشتیبانی قوی و آنلاین', desc:'کافه ارز با پشتیبانی روزانه از 9 صبح تا 12 شب خیال شما را از همکاری با سایت راحت کرده است' },
                    { img:'/assets/images/chart.svg', subject:'قیمت منصفانه و رقابتی', desc:'نرخ خدمات کافه ارز از جمله وب مانی بسیار منصفانه و رقابتی است' },
                    { img:'/assets/images/consulting.svg', subject:'مشاوره رایگان', desc:'تیم فروش و پشتیبانی ما به صورت رایگان پاسخگوی تمامی سوالات شما هستند' },
                    { img:'/assets/images/superService.svg', subject:'شارژ اتوماتیک و 24 ساعته', desc:'سفارشات وب مانی در کافه ارز به صورت آنی و بدون معطلی انجام می شود' }
                ],
            }
        },
        mounted(){
            this.tab = 0
            this.dialogTab = 0
            this.getCurrencies()

        },
        methods:{
            getRate(i){
                this.networkPaid = i
            },
            randomInt(){
                return Math.floor(Math.random()*(50-5+1))+5
            },
            getCoin(i){
                this.selectedCoin = i
                console.log(this.selectedCoin)
            },
            getCurrencies(newList){
                let temp= []
                for(const key in newList){
                    if (Object.hasOwnProperty.call(newList, key)) {
                        const coin = newList[key]
                        let data = {
                            value : key,
                            text : coin.text,
                            buy : coin.buy,
                            sell: coin.sell,
                            icon: coin.icon,
                            usd: coin.usd,
                            sellUrl: coin.sellUrl,
                            buyUrl: coin.buyUrl,
                            symbol: coin.value
                        }
                        if (!this.selectedCoin) {
                            this.selectedCoin = data
                            this.price.coinUnit = 1
                        }
                        temp.push(data)
                        if (!this.networkPaid) {
                            this.networkPaid = data
                            this.box = this.networkPaid.value
                        }
                    }
                }
                this.localCurrencies = temp
                if (this.selectedCoin) {
                    for (let i = 0; i < temp.length; i++) {
                        const el = temp[i];
                        if (el.value == this.selectedCoin) {
                            this.selectedCoin = temp[i]
                        }
                    }
                }
            },
            setItems(){
                this.offset = (this.pageNumber - 1)* this.pageSize
                this.limit = this.offset + this.pageSize
                this.numOfPages = Math.ceil(this.localCurrencies.length / this.pageSize)
                if (this.offset > this.localCurrencies.length) {
                    this.pageNumber = this.numOfPages
                }
                this.itemsShowed = this.localCurrencies.slice(this.offset, this.pageSize + this.offset)
            },
            setPage(n){
                this.pageNumber = n
                this.setItems()
                return this.itemsShowed
            }
        },
        created(){
           this.setItems()
           this.paginationSize = Math.ceil(this.localCurrencies.length / this.pageSize)
        },
        watch:{
            currencies(N, O){
                this.getCurrencies(N)
            }
        },
        computed:{
            filterDataTable(){
                if (this.search) {
                    return this.localCurrencies.filter(coin=>{
                        return this.search.toLowerCase().split(" ").every(v=>coin.text.toLowerCase().includes(v))
                    })
                }
                else{
                    return this.localCurrencies
                }
            },
            changeToman(){
                if (this.selectedCoin) {
                    const toman = this.tab == 0 ? this.selectedCoin.buy.replaceAll(',', '') : this.selectedCoin.sell.replaceAll(',', '')
                    const coin = this.price.tomanUnit
                    let result = Number.parseFloat(coin/toman)
                    this.price.coinUnit = result                    
                    // this.price.coinUnit == 0 ? this.price.coinUnit = 1 : new Intl.NumberFormat().format(result)
                }
            },
            changeCoin(){
                if (this.selectedCoin) {
                    const toman = this.tab == 0  ? this.selectedCoin.buy.replaceAll(',', '') : this.selectedCoin.sell.replaceAll(',', '')
                    const coin = this.price.coinUnit
                    let result = Number.parseFloat(coin*toman)
                    this.price.tomanUnit = result.toFixed(0)
                    // this.price.tomanUnit = new Intl.NumberFormat().format(result.toFixed(0))
                }
            },
        }
    }
</script>