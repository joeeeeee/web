import Vue from 'vue'

const Store = function Store(options = {}) {
    const {state = {}, mutation = {}} = options

    this._vm = new Vue({
        data() {
            return {
                $$state: state
            }
        }
    })
    this._mutation = mutation
}

// 原型方法
Store.property.commit = function (type, payload) {
    if (this._mutation[type]) {
        return this._mutation(this.state, payload)
    }
}

// 定义属性,设置state属性，并重写get方法
Object.defineProperties(Store.property, {
    state: {
        get: function () {
            return this._vm._data.$$state
        }
    }
})


export default {Store}



