import {PRODUCT} from "@/store/mutation_type";


export default {
    state : {
        all : []
    },
    getters : {

    },
    actions : {
        getAllProducts({commit}) {
            commit(PRODUCT.SET_PRODUCTS,products)
        }
    }
}