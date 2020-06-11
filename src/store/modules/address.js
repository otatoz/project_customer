import {get,post_json,post} from '@/http/axios'

export default {
  namespaced:true,
  state: {
    addresses:[]
  },
  
  mutations: {
    refreshAddress(state,addresses){
        state.addresses = addresses
    }
  },
  actions: {
    async findAddressById(context,id){
        let res = await get('/address/findByCustomerId',{id})
        context.commit('refreshAddress',res.data)
    }
  }
}