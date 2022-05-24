
// state initial
const state = {
    item : [],
    checkoutStatus : null
}

// cart provide cart product
const getters = {
    cartProduct : (state, getters, rootState) => {
        return state.item.map(({id, quantity}) => {
            const product = rootState.product.all.find(product => product.id === id)
            return {
                title: product.title,
                price : product.price,
                quantity
            }
        })
    }
}


export default {
    namespace : true,
    state,
    actions,
    getters,
    mutations
}