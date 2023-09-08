<template>
    <v-app>
        <section :class="dark ? 'dark' : ''">
            <v-app-bar class="app-bar" app flat height="122" elevation="0" floating :color="dark ? 'primary' : ''">
                <!-- top header -->
                <v-list class="nav-bar" :dark="dark ? dark : light" :color="dark ? 'primary': ''">
                    <div class="nav-links">
                        <div class="nav-link" v-for="(link, i) in navLinks" :key="i">
                            <nuxt-link class="link" :class="dark ? 'white--text' : ''" v-if="link.route" :to="{ name: link.route}">{{ link.name }}</nuxt-link>
                            <a :href="link.href" :class="dark ? 'white--text' : ''" class="link" v-if="link.href">{{ link.name }}</a>
                        </div>
                    </div>
                    <div class="social-medias">
                        <v-btn class="btn" icon x-small v-for="(item, i) in socialMedia.slice(0, 5)" :key="i" :href="item.href">
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-btn>
                        <a class="btn" v-for="(item, i) in socialMedia.slice(5)" :key="i" :href="item.href">
                            <span :class="dark ? 'white--text' : 'text'">{{ item.text }}</span>
                            <v-icon size="18">{{ item.icon }}</v-icon>
                        </a>
                    </div>
                </v-list>
                <!-- nav wrapper -->
                <v-list class="nav-wrapper" :dark="dark ? dark : light" :color="$route.name == 'index' || dark ? 'primary' : ''">
                    <nuxt-link class="logo" :to="{ name: 'index'}">
                        <img :src="dark || $route.name == 'index' ? '/assets/images/logo-dark.svg' : '/assets/images/logo.svg'" alt="">
                    </nuxt-link>
                    <v-btn icon depressed color="#39a2bd" @click="drawer =! drawer" class="mr-3 navigation-menu">
                        <v-icon large>mdi-menu</v-icon>
                    </v-btn>
                    <div class="mega-menu">
                        <!-- <vsm-menu :menu="menu" :base-width="380" :base-height="400" :screen-offset="10" ref="header">
                            <template #default="data">
                                <div>{{ data }}</div>
                            </template>
                        </vsm-menu> -->
                        <v-menu offset-y v-for="(menu, i) in megaMenu" open-delay="200" open-on-hover close-delay="1700" transition="scroll-y-transition" :key="i" content-class="mega-menu-content">
                            <template v-slot:activator="{on, attrs }">
                                <v-hover v-slot="{ hover }">
                                    <v-btn v-on="on" v-bind="attrs" text class="menu-title" :class="dark ? 'white--text' : ''" color="transparent">
                                        <span :class="$route.name == 'index' || dark ? 'white--text' : ''">
                                            {{ menu.header }}
                                        </span>
                                        <v-icon :color="hover ? '#f0b90b' : '#3d444e'">{{ hover ? 'mdi-menu-up' : 'mdi-menu-down'}}</v-icon>
                                    </v-btn>
                                </v-hover>
                            </template>
                            <v-list :color="dark ? 'primary' : 'white'" class="mega-menu-list" elevation="0">
                                <div class="right">
                                    <v-menu offset-x left offset-overflow open-on-hover :close-on-content-click="false" transition="scroll-x-reverse-transition" content-class="sub-menu-content" v-for="(subMenu, k) in menu.subMenu" :key="k" :dark="dark ? dark : ''">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn text class="cat" v-on="on" v-bind="attrs" v-if="subMenu.route" :to="{name: subMenu.route}">
                                                <img :src="subMenu.icon" alt="">
                                                {{ subMenu.title }}
                                            </v-btn>
                                            <v-btn text class="cat" v-on="on" v-bind="attrs" v-else-if="subMenu.link" target="_blank" :href="subMenu.link">
                                                <img :src="subMenu.icon" alt="">
                                                {{ subMenu.title }}
                                            </v-btn>
                                            <v-btn text class="cat" v-on="on" v-bind="attrs" v-else>
                                                <img :src="subMenu.icon" alt="">
                                                {{ subMenu.title }}
                                            </v-btn>
                                        </template>
                                        <v-list :color="dark ? 'primary' : 'white'" class="left" v-if="subMenu.subChild">
                                        <div class="links">
                                            <div class="link" :style="subChild.class" v-for="(subChild, l) in subMenu.subChild" :key="l">
                                                <a :href="subChild.link" v-if="subChild.link">
                                                        <span :class="dark ? 'white--text' : ''" class="text">{{ subChild.text }}</span>
                                                        <strong :class="dark ? 'white--text' : ''">{{ subChild.title }}</strong>
                                                </a>
                                                <nuxt-link :to="{ name: subChild.route}" v-if="subChild.route">
                                                        <span :class="dark ? 'white--text' : ''" class="text">{{ subChild.text }}</span>
                                                        <strong :class="dark ? 'white--text' : ''">{{ subChild.title }}</strong>
                                                </nuxt-link>
                                            </div>
                                        </div>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </v-list>
                        </v-menu>
                        <nuxt-link :to="{ name:'metaverse-services' }" class="new-menu" :class="$route.name == 'index' || dark ? 'white--text' : ''" >
                            متاورس
                            <span class="new">جدید</span>
                        </nuxt-link>
                    </div>
                    <div class="sigin-day-light">
                        <v-btn class="sigin-btn" depressed href="https://app.cafearz.com/">
                            ورود / ثبت نام
                        </v-btn>
                        <v-btn icon class="day-light" depressed @click="changeBody()">
                            <v-icon :color="dark ? '#f0b90b' : 'white'">{{ dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'}}</v-icon>
                        </v-btn>
                    </div>
                </v-list>
            </v-app-bar>
            <!-- navigation drawer -->
            <v-navigation-drawer v-model="drawer" fixed right class="navigation-drawer" floating>
                <v-list class="drawer-content" :color="dark ? 'primary' : ''" :dark="dark ? dark : light">
                    <div class="logo-content">
                        <img src="/assets/images/logo-empty.svg" alt="" class="logo">
                        <v-btn icon @click="changeBody()">
                            <v-icon :color="dark ? '#f0b90b' : '#555'">{{ dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'}}</v-icon>
                        </v-btn>
                        <v-btn icon @click="drawer = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </div>
                    <v-list-group v-for="(list, i) in megaMenu" :key="i" :color="dark ? 'white' : ''">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title :class="dark ? 'white--text' : ''">{{ list.header }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-group :color="dark ? 'white' : ''" sub-group v-for="(subList, j) in list.subMenu" :key="j">
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title :class="dark ? 'white--text' : ''">{{ subList.title }}</v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <v-list-item v-for="(subSubList , k) in subList.subChild" :key="k">
                                <v-list-item-content>
                                    <v-list-item-title>
                                        <a :href="subSubList.link" v-if="subSubList.link" :class="dark ? 'white--text' : ''">{{subSubList.text }} {{ subSubList.title }}</a>
                                        <nuxt-link :style="$route.name == subSubList.route ? 'color:#f0b90b' : ''" v-if="subSubList.route" :to="subSubList.route" :class="dark ? 'white--text' : ''">{{subSubList.text }} {{ subSubList.title }}</nuxt-link>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                    </v-list-group>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>
                                <nuxt-link :class="dark ? 'white--text' : ''" :to="{ name:'metaverse-services' }" class="new-menu font-16 font-weight-thin" >
                                    متاورس
                                    <span class="new">جدید</span>
                                </nuxt-link>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-for="(navLink, i) in navLinks.slice(1)" :key="i">
                        <v-list-item-content>
                            <v-list-item-title>
                                <a :class="dark ? 'white--text' : ''" class="font-16" :href="navLink.href" v-if="navLink.href">{{ navLink.name }}</a>
                                <nuxt-link :class="dark ? 'white--text' : ''" class="font-16" v-if="navLink.route" :to="{ name: navLink.route }">{{ navLink.name }}</nuxt-link>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <!-- end navigation drawer -->
        </section>
        <v-main>
            <!-- <Nuxt :class="dark ? 'main-body-dark' : 'main-body'" /> -->
            <Nuxt :class="dark ? 'dark' : 'main-body'" />
        </v-main>
        <AppFooter :dark="dark" />
    </v-app>
</template>

<script>
// import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
export default {
    head:{
        script:[
            {src:'../static/assets/js/script.js'}
        ]
    },
    components:{ AppFooter },
    data(){
        return{
            drawer:false,
            navLinks:[
                { name:'صفحه اصلی', route:'index' },
                { name:'سوالات متداول', route:'faq', href:'' },
                { name:'اخبار و مقالات', href:'https://cafearz.com/blog/' },
                { name:'قیمت لحظه ای ارز دیجیتال', route:'prices' },
                { name:'ماشین حساب ارز دیجیتال', route:'خرید-و-فروش-ارز-دیجیتال-slug' },
            ],
            socialMedia:[
                { icon:'mdi-send', href:'https://t.me/cafearzz' },
                { icon:'mdi-instagram', href:'https://www.instagram.com/cafearz_com' },
                { icon:'mdi-linkedin', href:'https://linkedin.com/in/%DA%A9%D8%A7%D9%81%D9%87-%D8%A7%D8%B1%D8%B2' },
                { icon:'mdi-twitter', href:'https://twitter.com/ArzCafe' },
                { icon:'mdi-facebook', href:'https://fb.me/Cafearz' },
                { icon:'mdi-phone-in-talk-outline', text:'021-91014920', href:'tel:+9821-91014920' },
            ],
            dark:null,
            light:null,
            logo:'/assets/images/logo.svg',
            menu:[
                { title:'title', dropdown:'news', attributes:{'data-big': 'yes'}}
            ],
            megaMenu:[
                {
                    header:'ارز دیجیتال',
                    subMenu:[
                        { icon:'/assets/icons/mega-menu/fire.svg', title:'محبوب ترین ها',
                            subChild:[
                                { text:'خرید و فروش', title:'بیت کوین', link:'https://cafearz.com/coin/btc' },
                                { text:'خرید و فروش', title:'اولنج', link:'https://cafearz.com/coin/avax' },
                                { text:'خرید و فروش', title:'زی کش', link:'https://cafearz.com/coin/zec' },
                                { text:'خرید و فروش', title:'اتریوم', link:'https://cafearz.com/coin/btc' },
                                { text:'خرید و فروش', title:'ترون', link:'https://cafearz.com/coin/trx' },
                                { text:'خرید و فروش', title:'تتا', link:'https://cafearz.com/coin/theta' },
                                { text:'خرید و فروش', title:'تتر', link:'https://cafearz.com/coin/usdt' },
                                { text:'خرید و فروش', title:'پالیگان', link:'https://cafearz.com/coin/matic' },
                                { text:'خرید و فروش', title:'مونرو', link:'https://cafearz.com/coin/btc' },
                                { text:'خرید و فروش', title:'بایننس کوین', link:'https://cafearz.com/coin/bnb' },
                                { text:'خرید و فروش', title:'شیبا', link:'https://cafearz.com/coin/shib' },
                                { text:'خرید و فروش', title:'یو اس دی کوین', link:'https://cafearz.com/coin/usdc' },
                                { text:'خرید و فروش', title:'آیوتا', link:'https://cafearz.com/coin/iota' },
                                { text:'خرید و فروش', title:'دای', link:'https://cafearz.com/coin/dai' },
                                { text:'خرید و فروش', title:'الروند', link:'https://cafearz.com/coin/egld' },
                                { text:'خرید و فروش', title:'کاردانو', link:'https://cafearz.com/coin/ada' },
                                { text:'خرید و فروش', title:'چین لینک', link:'https://cafearz.com/coin/link' },
                                { text:'خرید و فروش', title:'فانتوم', link:'https://cafearz.com/coin/ftm' },
                                { text:'خرید و فروش', title:'ریپل', link:'https://cafearz.com/coin/xrp' },
                                { text:'خرید و فروش', title:'کازموس', link:'https://cafearz.com/coin/atom' },
                                { text:'خرید و فروش', title:'بایننس یو اس دی', link:'https://cafearz.com/coin/busd' },
                                { text:'خرید و فروش', title:'دوج کوین', link:'https://cafearz.com/coin/doge' },
                                { text:'خرید و فروش', title:'الگورند', link:'https://cafearz.com/coin/algo' },
                                { text:'خرید و فروش', title:'آمپ', link:'https://cafearz.com/coin/btc' },
                                { text:'خرید و فروش', title:'پولکادات', link:'https://cafearz.com/coin/dot' },
                                { text:'خرید و فروش', title:'لایت کوین', link:'https://cafearz.com/coin/ltc' },
                                { title:'مشاهده همه', route:'prices' }
                            ]
                        },
                        { icon:'/assets/icons/mega-menu/metaverse.svg', title:'متاورس',
                            subChild:[
                                { text:'خرید و فروش', title:'دیسنترال لند', link:'https://cafearz.com/coin/mana' },
                                { text:'خرید و فروش', title:'کرومیا', link:'https://cafearz.com/coin/ilv' },
                                { text:'خرید و فروش', title:'آه گوجی', link:'https://cafearz.com/coin/ghst' },
                                { text:'خرید و فروش', title:'سند باکس', link:'https://cafearz.com/coin/sand' },
                                { text:'خرید و فروش', title:'ولکان فورجد', link:'https://cafearz.com/coin/pyr' },
                                { text:'خرید و فروش', title:'الین ورلدز', link:'https://cafearz.com/coin/tlm' },
                                { text:'خرید و فروش', title:'اکس اینفینیتی', link:'https://cafearz.com/coin/axs' },
                                { text:'خرید و فروش', title:'پلی دپ', link:'https://cafearz.com/coin/pla' },
                                { text:'خرید و فروش', title:'وراسیتی', link:'https://cafearz.com/coin/vra' },
                                { text:'خرید و فروش', title:'تتا', link:'https://cafearz.com/coin/theta' },
                                { text:'خرید و فروش', title:'یلد گلید گیمز', link:'https://cafearz.com/coin/ygg' },
                                { text:'خرید و فروش', title:'ترا ویرچوا کانکت', link:'https://cafearz.com/coin/tvk' },
                                { text:'خرید و فروش', title:'انجین کوین', link:'https://cafearz.com/coin/enj' },
                                { text:'خرید و فروش', title:'اولترا', link:'https://cafearz.com/coin/uos' },
                                { text:'خرید و فروش', title:'بیت کوین', link:'https://cafearz.com/coin/aury' },
                                { text:'خرید و فروش', title:'وکس', link:'https://cafearz.com/coin/waxp' },
                                { text:'خرید و فروش', title:'مای نیبر الیس', link:'https://cafearz.com/coin/alice' },
                                { text:'خرید و فروش', title:'اترنیتی چین', link:'https://cafearz.com/coin/ern' },
                                { text:'خرید و فروش', title:'سوشی سواپ', link:'https://cafearz.com/coin/sushi' },
                                { text:'خرید و فروش', title:'مو باکس', link:'https://cafearz.com/coin/mbox' },
                                { text:'خرید و فروش', title:'های استریت', link:'https://cafearz.com/coin/high' },
                                { text:'خرید و فروش', title:'اونتولوژی', link:'https://cafearz.com/coin/ont' },
                                { text:'خرید و فروش', title:'بلاک تو پیا', link:'https://cafearz.com/coin/blok' },
                                { text:'خرید و فروش', title:'تریاس', link:'https://cafearz.com/coin/trias' },
                                { text:'خرید و فروش', title:'ایلوویوم', link:'https://cafearz.com/coin/ilv' },
                                { text:'خرید و فروش', title:'آر ام آر کی', link:'https://cafearz.com/coin/rmrk' },
                                { title:'مشاهده همه', route:'prices' },
                            ]
                        },
                        { icon:'/assets/icons/mega-menu/difi.svg', title:'دیفای',
                            subChild:[
                                { text:'خرید و فروش', title:'لونا', link:'https://cafearz.com/coin/luna' },
                                { text:'خرید و فروش', title:'پنکیک سواپ', link:'https://cafearz.com/coin/cake' },
                                { text:'خرید و فروش', title:'یورن فایننس', link:'https://cafearz.com/coin/yfi' },
                                { text:'خرید و فروش', title:'بیت کوین', link:'https://cafearz.com/coin/avax' },
                                { text:'خرید و فروش', title:'گراف', link:'https://cafearz.com/coin/grt' },
                                { text:'خرید و فروش', title:'وان اینچ', link:'https://cafearz.com/coin/1inch' },
                                { text:'خرید و فروش', title:'دای', link:'https://cafearz.com/coin/dai' },
                                { text:'خرید و فروش', title:'صور چین', link:'https://cafearz.com/coin/rune' },
                                { text:'خرید و فروش', title:'آنکر', link:'https://cafearz.com/coin/ankr' },
                                { text:'خرید و فروش', title:'چین لینک', link:'https://cafearz.com/coin/link' },
                                { text:'خرید و فروش', title:'کرو دائو توکن', link:'https://cafearz.com/coin/crv' },
                                { text:'خرید و فروش', title:'سینتیکس نتورک توکن', link:'https://cafearz.com/coin/snx' },
                                { text:'خرید و فروش', title:'یونی سواپ', link:'https://cafearz.com/coin/uni' },
                                { text:'خرید و فروش', title:'بت', link:'https://cafearz.com/coin/bat' },
                                { text:'خرید و فروش', title:'بنکور', link:'https://cafearz.com/coin/bnt' },
                                { text:'خرید و فروش', title:'فانتوم', link:'https://cafearz.com/coin/ftm' },
                                { text:'خرید و فروش', title:'کانوکس فایننس', link:'https://cafearz.com/coin/cvx' },
                                { text:'خرید و فروش', title:'جنوسیس', link:'https://cafearz.com/coin/gno' },
                                { text:'خرید و فروش', title:'تزوس', link:'https://cafearz.com/coin/xtz' },
                                { text:'خرید و فروش', title:'بیت کوین', link:'https://cafearz.com/coin/lrc' },
                                { text:'خرید و فروش', title:'جاست', link:'https://cafearz.com/coin/jst' },
                                { text:'خرید و فروش', title:'آوه', link:'https://cafearz.com/coin/aave' },
                                { text:'خرید و فروش', title:'آسیس نتورک', link:'https://cafearz.com/coin/rose' },
                                { text:'خرید و فروش', title:'زیرو ایکس', link:'https://cafearz.com/coin/zrx' },
                                { text:'خرید و فروش', title:'میکرو', link:'https://cafearz.com/coin/mkr' },
                                { text:'خرید و فروش', title:'کامپاوند', link:'https://cafearz.com/coin/comp' },
                                { title:'مشاهده همه', route:'prices' },
                            ]
                        },
                        { icon:'/assets/icons/mega-menu/stable-coin.svg', title:'استیبل کوین',
                            subChild:[
                                { text:'خرید و فروش', title:'تتر', link:'https://cafearz.com/coin/usdt' },
                                { text:'خرید و فروش', title:'یو اس دی کوین', link:'https://cafearz.com/coin/btc' },
                                { text:'خرید و فروش', title:'بایننس یو اس دی', link:'https://cafearz.com/coin/busd' },
                                { text:'خرید و فروش', title:'ترا یو اس دی', link:'https://cafearz.com/coin/ust' },
                                { text:'خرید و فروش', title:'دای', link:'https://cafearz.com/coin/dai' },
                                { text:'خرید و فروش', title:'ترایب', link:'https://cafearz.com/coin/tribe' },
                                { text:'خرید و فروش', title:'رزرو رایتس', link:'https://cafearz.com/coin/rsr' },
                            ]
                        },
                        { icon:'/assets/icons/mega-menu/nft.svg', title:'ان اف تی',
                            subChild:[
                                { text:'خرید و فروش', title:'دستنترال لند', link:'https://cafearz.com/coin/mana' },
                                { text:'خرید و فروش', title:'آسیس نتورک', link:'https://cafearz.com/coin/rose' },
                                { text:'خرید و فروش', title:'ولکان فورجد', link:'https://cafearz.com/coin/pyr' },
                                { text:'خرید و فروش', title:'سیندباکس', link:'https://cafearz.com/coin/sand' },
                                { text:'خرید و فروش', title:'وکس', link:'https://cafearz.com/coin/waxp' },
                                { text:'خرید و فروش', title:'یلد گیلد گیمز', link:'https://cafearz.com/coin/ygg' },
                                { text:'خرید و فروش', title:'اکسی اینفینیتی', link:'https://cafearz.com/coin/axs' },
                                { text:'خرید و فروش', title:'ایمیو تیبل اکس', link:'https://cafearz.com/coin/imx' },
                                { text:'خرید و فروش', title:'اولترا', link:'https://cafearz.com/coin/uos' },
                                { text:'خرید و فروش', title:'تتا', link:'https://cafearz.com/coin/theta' },
                                { text:'خرید و فروش', title:'سوشی سواپ', link:'https://cafearz.com/coin/sushi' },
                                { text:'خرید و فروش', title:'سوپر فارم', link:'https://cafearz.com/coin/super' },
                                { text:'خرید و فروش', title:'تزوس', link:'https://cafearz.com/coin/xtz' },
                                { text:'خرید و فروش', title:'سیس کوین', link:'https://cafearz.com/coin/sys' },
                                { text:'خرید و فروش', title:'مای نیبر آلیس', link:'https://cafearz.com/coin/alice' },
                                { text:'خرید و فروش', title:'گالا', link:'https://cafearz.com/coin/gala' },
                                { text:'خرید و فروش', title:'نروس نتورک', link:'https://cafearz.com/coin/ckb' },
                                { text:'خرید و فروش', title:'فچ ای آی', link:'https://cafearz.com/coin/fet' },
                                { text:'خرید و فروش', title:'فلو', link:'https://cafearz.com/coin/flow' },
                                { text:'خرید و فروش', title:'ایلوویوم', link:'https://cafearz.com/coin/ilv' },
                                { text:'خرید و فروش', title:'اترنیتی چین', link:'https://cafearz.com/coin/ern' },
                                { text:'خرید و فروش', title:'انجین کوین', link:'https://cafearz.com/coin/enj' },
                                { text:'خرید و فروش', title:'کرومیا', link:'https://cafearz.com/coin/chr' },
                                { text:'خرید و فروش', title:'موباکس', link:'https://cafearz.com/coin/mbox' },
                                { text:'خرید و فروش', title:'چیلیز', link:'https://cafearz.com/coin/chz' },
                                { text:'خرید و فروش', title:'دیجی بایت', link:'https://cafearz.com/coin/dgb' },
                                { title:'مشاهده همه', route:'prices' },
                            ]
                        }
                    ],
                },
                {
                    header:'پرداخت بین المللی',
                    subMenu:[
                        { icon:'/assets/icons/mega-menu/arrow.svg', link:'https://cafearz.com/international-payments', title:'پرداخت های بین الملل'},
                        { icon:'/assets/icons/mega-menu/cloud.svg', title:'هاستینگ و دامنه',
                            subChild:[
                                { text:'سایت', title:'Hetzner', link:'https://cafearz.com/buy-hetzner-host' },
                                { text:'سایت', title:'Inmotion', link:'https://cafearz.com/buy-inmotion-host/' },
                                { text:'سایت', title:'GoDaDDy', link:'https://cafearz.com/buy-godaddy-host' },
                                { text:'سایت', title:'BlueHost', link:'https://cafearz.com/buy-bluehost-host' },
                                { text:'سایت', title:'Name.com', link:'https://cafearz.com/buy-name-com-host' },
                                { text:'سایت', title:'NameCheap', link:'https://cafearz.com/buy-namecheap-domain' },
                                { text:'سایت', title:'Domin.com', link:'https://cafearz.com/buy-domain-com' },
                                { text:'سایت', title:'OnliNIC', link:'https://cafearz.com/buy-host-onlinenic' },
                                { text:'سایت', title:'HostGator', link:'https://cafearz.com/buy-hostgator-host' }
                            ]
                            },
                        { icon:'/assets/icons/mega-menu/aducation.svg', title:'آزمون بین المللی',
                            subChild:[
                                { text:'آزمون', title:'Ilets', link:'https://cafearz.com/ilets-exam-payment' },
                                { text:'آزمون', title:'Toffel', link:'https://cafearz.com/toffel-exam-payment' },
                                { text:'آزمون', title:'PTE', link:'https://cafearz.com/pte-exam-payment' },
                                { text:'آزمون', title:'GRE', link:'https://cafearz.com/gre-exam-payment' },
                                { text:'سایت', title:'Mangoosh', link:'https://cafearz.com/magoosh-website' },
                                { text:'ارزیابی مدارک سایت', title:'WES', link:'https://cafearz.com/wes-payments' },
                                { text:'سایت', title:'Dolingo', link:'https://cafearz.com/duolingo-exam' }
                            ]
                            },
                        { icon:'/assets/icons/mega-menu/sefarat-visa.svg', title:'سفارت و یزا',
                            subChild:[
                                { text:'سویس فی آمریکا', link:'https://cafearz.com/sevisfee-payments' },
                                { text:'لاج آسترالیا', link:'#' },
                                { text:'هزینه سفارت آمریکا', link:'#' },
                                { text:'هزینه سفارت انگلیس', link:'#' }
                            ]
                            },
                        { icon:'/assets/icons/mega-menu/cart.svg', title:'خرید از سایت',
                            subChild:[
                                { text:'سایت', title:'Amazon', link:'#' },
                                { text:'سایت', title:'Terendiol', link:'#' },
                                { text:'سایت', title:'Bershka', link:'#' },
                                { text:'سایت', title:'Zara', link:'#' },
                                { text:'سایت', title:'Ebay', link:'#' }
                            ]
                            },
                        { icon:'/assets/icons/mega-menu/sharge.svg', title:'شارژ اکانت سایت',
                            subChild:[
                                { text:'خرید اکانت', title:'Spotify', link:'https://cafearz.com/buy-spotify-account' },
                                { text:'خرید اکانت', title:'Sound Cloud', link:'https://cafearz.com/soundcloud-premium' },
                                { text:'سایت', title:'Free Pik', link:'#' },
                                { text:'سایت', title:'Adobe Stock', link:'#' },
                                { text:'سایت', title:'Moz Pro', link:'#' },
                                { text:'سایت', title:'Code Canyon', link:'#' },
                                { text:'سایت', title:'Theme Forest', link:'#' },
                                { text:'سایت', title:'Shuter Stock', link:'#' },
                                { text:'سایت', title:'Graphic River', link:'#' }
                            ]
                            },
                    ]
                },
                {
                    header:'ارزهای الکترونیک',
                    subMenu:[
                        { icon:'/assets/icons/mega-menu/paypal.svg', title:'پی پال',
                            subChild:[
                                { text:'پی پال', route:'sell-buy-create-paypal' },
                                { text:'افتتاح حساب پی پال', link:'https://cafearz.com/open-paypal-account' },
                                { text:'شارژ حساب پی پال', link:'https://cafearz.com/charge-paypal-account' },
                                { text:'خرید با پی پال', link:'https://cafearz.com/buy-with-paypal' },
                                { text:'ویزا کارت مجازی پی پال', link:'https://cafearz.com/visacard-for-paypal' },
                                { text:'نقد کردن پی پال', link:'https://cafearz.com/paypal-exchange' }
                            ]
                        },
                        { icon:'/assets/icons/mega-menu/PM.svg', title:'پرفکت مانی',
                            subChild:[
                                { text:'پرفکت مانی', route:'buy-sell-perfectmoney-vouchers' },
                                { text:'افتتاح حساب پرفکت مانی', link:'https://cafearz.com/open-perfectmoney-account' },
                                { text:'شارژ حساب پرفکت مانی', link:'https://cafearz.com/charge-perfectmoney-account' },
                                { text:'خرید با پرفکت مانی', link:'https://cafearz.com/buy-with-perfectmoney' },
                                { text:'وچر پرفکت مانی', link:'https://cafearz.com/perfectmoney-voucher' }
                            ]
                        },
                        { icon:'/assets/icons/mega-menu/WB.svg', title:'وب مانی',
                            subChild:[
                                { text:'وب مانی', route:'sell-buy-webmoney' },
                                { text:'افتتاح حساب وب مانی', link:'https://cafearz.com/open-webmoney-account' },
                                { text:'شارژ حساب وب مانی', link:'https://cafearz.com/charge-webmoney-account' },
                                { text:'خرید با وب مانی', link:'https://cafearz.com/buy-with-webmoney' },
                                { text:'نقد کردن وب مانی', link:'https://cafearz.com/webmoney-exchange' }
                            ]
                        },
                        { icon:'/assets/icons/mega-menu/payer.svg', title:'پایر',
                            subChild:[
                                { class:'width:100% !important',text:'خرید با پایر | شارژ حساب پایر', link:'https://cafearz.com/payeer' },
                            ]
                        },
                        { icon:'/assets/icons/mega-menu/visa-master.svg', title:'ویزا مستر',
                            subChild:[
                                { text:'خرید با ویزا مستر کارت', link:'https://cafearz.com/visa-master-cart' },
                                { text:'گیفت کارت ویزا مستر', link:'https://cafearz.com/visa-and-master-gift-cards' },
                                { text:'صدور ویزا مستر کارت مجازی', link:'https://cafearz.com/visa-and-master-virtual-card' },
                                { text:'گیفت کارت American Express', link:'https://cafearz.com/american-express-giftcard' }
                            ]
                        }
                    ]
                },
                {
                    header:'گیفت کارت',
                    subMenu:[
                        { icon:'/assets/icons/mega-menu/joy-stick.svg', title:'گیفت کارت بازی',
                            subChild:[
                                { text:'گیفت کارت', title:'استیم', link:'https://cafearz.com/giftcard/22/steam-giftcard' },
                                { text:'گیفت کارت', title:'پابجی', link:'https://cafearz.com/giftcard/42/gift-uc-pubg' },
                                { text:'گیفت کارت', title:'ریزرگلد', link:'https://cafearz.com/giftcard/40/razor-giftcard' },
                                { text:'گیفت کارت', title:'ریوت اکسس', link:'https://cafearz.com/giftcard/294/riot-access' },
                                { text:'گیفت کارت', title:'نینتندو', link:'https://cafearz.com/giftcard/269/nintendo' },
                                { text:'گیفت کارت', title:'لیگ آف لجندز', link:'https://cafearz.com/giftcard/293/league-of-legends' },
                                { text:'گیفت کارت', title:'الماس فری فایر', link:'https://cafearz.com/giftcard/137/free-fire' },
                                { text:'گیفت کارت', title:'پلی استیشن', link:'https://cafearz.com/giftcard/21/playstation-gitcard' },
                                { text:'گیفت کارت', title:'آیتونز', link:'https://cafearz.com/giftcard/23/ituns-giftcard' },
                                { text:'گیفت کارت', title:'اکس باکس', link:'https://cafearz.com/giftcard/25/xbox-giftcard' }
                            ]
                        },
                        { icon:'/assets/icons/mega-menu/gift-card-app.svg', title:'گیفت کارت اپلیکیشن',
                            subChild:[
                                { text:'گیفت کارت', title:'آی تونز', link:'https://cafearz.com/giftcard/23/ituns-giftcard' },
                                { text:'گیفت کارت', title:'اسکایپ', link:'https://cafearz.com/giftcard/292/skype-giftcard' },
                                { text:'گیفت کارت', title:'آمازون', link:'https://cafearz.com/giftcard/20/amazoon-giftcard' },
                                { text:'گیفت کارت', title:'نتفلیکس', link:'https://cafearz.com/giftcard/322/netflix' },
                                { text:'گیفت کارت', title:'اسپاتیفای', link:'https://cafearz.com/giftcard/26/spotify-giftcards' },
                                { text:'گیفت کارت', title:'ای بی', link:'https://cafearz.com/giftcard/320/ebay-gift' },
                                { text:'گیفت کارت', title:'گوگل پلی', link:'https://cafearz.com/giftcard/24/google-play-giftcadr' }
                            ]
                        },
                        { icon:'/assets/icons/mega-menu/visa-master-cards.svg', title:'کارت های ویزا مستر',
                            subChild:[
                                { text:'گیفت کارت ویزا مستر', link:'https://app.cafearz.com/orders/s/new/138' },
                                { text:'صدور ویزا مستر مجازی', link:'https://app.cafearz.com/orders/s/new/242' },
                                { class:'min-width: max-content',text:'گیفت کارت American Express', link:'https://app.cafearz.com/orders/s/new/241' }
                            ]
                        }
                    ]
                },
                {
                    header:'نقد درآمد ارزی',
                    subMenu:[
                        { icon:'/assets/icons/mega-menu/paypal-1.svg', title:'نقد درآمد از پی پال' , route:'sell-buy-create-paypal'},
                        { icon:'/assets/icons/mega-menu/PM-1.svg', title:'فروش پرفکت مانی' , route:'buy-sell-perfectmoney-vouchers'},
                        { icon:'/assets/icons/mega-menu/WB-1.svg', title:'فروش وب مانی' , route:'sell-buy-webmoney'},
                        { icon:'/assets/icons/mega-menu/payer-1.svg', title:'فروش پایر' , link:'https://cafearz.com/payeer'},
                        { icon:'/assets/icons/mega-menu/bitcoin.svg', title:'فروش ارز دیجیتال', route:'خرید-و-فروش-ارز-دیجیتال-slug' }
                    ]
                },
            ],
        }
    },
    methods:{
        changeBody() {
            var element = document.getElementById('app');
            element.classList.toggle("dark-mode");
            this.dark =! this.dark
            // var content = document.getElementById('content')
            // content.classList.toggle('dark-content')
        }
    }
}
</script>