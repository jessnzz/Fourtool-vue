const countAbout = {
    namespaced: true,
    actions: {
        PlusOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('PlusOdd', value)
            }
        },
        PlusWait(context, value) {
            setTimeout(() => {
                context.commit('PlusWait', value)
            }, 500);
        }
    },
    mutations: {
        Plus(state, value) {
            state.sum += value
        },
        Decrease(state, value) {
            state.sum -= value
        },
        PlusOdd(state, value) {
            state.sum += value
        },
        PlusWait(state, value) {
            state.sum += value
        },
    },
    state: {
        sum: 0,
        subject: 'software',
        school: 'WIT',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}
export default countAbout;