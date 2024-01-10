async function r() {
    let h
    await $.get('/assets/html/test.html', (str) => {
        h = $(new DOMParser().parseFromString(str, 'text/html'))
    })
    console.log(h)
    $('body .l_body .l_main article').append(h.find('div'))

    const app = Vue.createApp({
        data() {
            return {
                name: '名称',
            }
        },
        methods: {
            test() {
                this.name = '修改后的名称'
            },
        },
    })
    const vm = app.mount('#app')
}

window.onload = r
