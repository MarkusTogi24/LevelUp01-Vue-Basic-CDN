const app = Vue.createApp({
    data () {
        return {
            show : false,
            name : 'Markus Togi Fedrian Rivaldi Sinaga',
            command : 'Show My Name'
        };
    },
    methods:{
        toggle() {
            this.show = !this.show;
            this.show ? this.command = 'Hide My Name' : this.command = 'Show My Name';
        }
    }
});

app.mount("#app");