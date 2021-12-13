import axios from 'axios'
import { nanoid } from 'nanoid'
const personAbout = {
    namespaced: true,
    actions: {
        addPerson(context, value) {
            if (value.name !== '') {
                context.commit('ADD_PERSON', value)
            } else alert('姓名不能为空')
        },
        addPersonZhang(context, value) {
            if (value.name.indexOf('张') === 0) {
                context.commit('ADD_PERSON', value)
            } else alert('添加的人必须姓张')
        },
        addPersonServe(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                },
            )
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            state.personList.unshift(personObj)
        }
    },
    state: { personList: [{ id: '001', name: 'Jessn' }] },
    getters: {
        getFirstPerson(state) {
            return state.personList[0].name
        }
    },
}
export default personAbout