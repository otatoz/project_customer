<template>
  <div class="home">
    <!-- 轮播图片 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in newAllProduct" :key="index">
        <img v-lazy="item" />
      </van-swipe-item>
    </van-swipe>
    <!-- 所有栏目(分类) -->
    <van-grid :border="false" :column-num="3">
      <!-- 通过v-show和索引结合的方式，规定显示的个数 -->
      <van-grid-item v-for="(item,index) in allCategory" :key="item.id" v-show='index<5'>
        <van-image :src="item.icon" />
        <div>{{item.name}}</div>
      </van-grid-item>

      <van-grid-item>
        <van-grid-item icon="photo-o" text="加载更多" />
      </van-grid-item>
    </van-grid>

    <!-- 所有的产品 -->
    <van-grid :border="false" :column-num="1">
      <van-grid-item v-for="item in allProduct" :key="item.id">
        <van-image :src="item.photo" />
        <div>{{item.name}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState('home',['allProduct','allCategory']),
    ...mapGetters('home',['newAllProduct'])
  },
  created(){
    this.findAllProduct()
    this.findAllCategory()
  },
  methods:{
    ...mapActions('home',['findAllProduct','findAllCategory'])
  },
}
</script>
<style scoped>

</style>