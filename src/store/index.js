import cart from './modules/cart'
import product from './modules/product'
import {createStore} from "vuex"

export default createStore({
    state() {
        return {
            email : "xxxx@qq.com"
        }
    },
    modules: {
        cart,
        product
    }
})