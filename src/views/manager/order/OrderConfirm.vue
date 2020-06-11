<template>
    <div class="confirm">
        <briup-fulllayout title='订单确认'>
            <div class="wrapper" style='margin:1.5em'>
                <van-row @click='pickAddressHandler'>
                    <van-col span="4">
                        <van-icon size='26' class-prefix="iconfont icon-dizhi" name="extra" />
                    </van-col>
                    <van-col span="18">
                        <div>服务地址</div>
                        <div v-if='addresses.length !== 0'>{{addresses[0].province}} {{addresses[0].city}} {{addresses[0].area}} {{addresses[0].address}}</div>
                    </van-col>
                    <van-col span="2">
                        <van-icon size='26' class-prefix="iconfont icon-youjiantou" name="extra" />
                    </van-col>
                </van-row>

                <van-row>
                    <van-col span="4">
                        <van-icon size='26' class-prefix="iconfont icon-dingdan" name="extra" />
                    </van-col>
                    <van-col span="20">
                        <div>订单详情</div>
                        <div>订单详情</div>
                    </van-col>
                </van-row>

                <van-row>
                    <van-col span="4">
                        <van-icon size='26' class-prefix="iconfont icon-shijian" name="extra" />
                    </van-col>
                    <van-col span="18">
                        <div>服务时间</div>
                        <div>服务时间</div>
                    </van-col>
                    <van-col span="2">
                        <van-icon size='26' class-prefix="iconfont icon-youjiantou" name="extra" />
                    </van-col>
                </van-row>

                <van-row>
                    <van-col span="4">
                        <van-icon size='26' class-prefix="iconfont icon-zhifu" name="extra" />
                    </van-col>
                    <van-col span="18">
                        <div>支付方式</div>
                        <div>支付方式</div>
                    </van-col>
                    <van-col span="2">
                        <van-icon size='26' class-prefix="iconfont icon-youjiantou" name="extra" />
                    </van-col>
                </van-row>
            </div>
        </briup-fulllayout>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState('user',['info']),
        ...mapState('address',['addresses']),
    },
    created(){
        this.findAddressById(this.info.id)
    },
    mounted(){
        // console.log(JSON.stringify(this.$route.query) === '{}')
        // 如果路由携带参数为空对象时，说明从产品页面跳转至订单确认页面
        // 如果路由携带参数不为空对象时，说明从地址页面跳转至订单确认页面
        if(JSON.stringify(this.$route.query) !== '{}'){
            setTimeout(()=>{
                this.addresses[0].province = JSON.parse(this.$route.query.address).province
                this.addresses[0].city = JSON.parse(this.$route.query.address).city
                this.addresses[0].area = JSON.parse(this.$route.query.address).area
                this.addresses[0].address = JSON.parse(this.$route.query.address).address
            },300)
        }
    },
    methods:{
        ...mapActions('address',['findAddressById']),
        // 跳转至地址列表页面
        pickAddressHandler(){
            this.$router.push({
                path:'/manager/address'
            })
        }
    }
}
</script>

<style scoped>
    .wrapper .van-row {
        margin-bottom: 2em;
    }
</style>