const app = Vue.createApp({
    data () {
        return {
            name : 'Markus Togi Fedrian Rivaldi Sinaga',
            offsetX : 0,
            offsetY : 0,
            event: '-'
        };
    },
    methods:{
        handleEvent(e, data) {
            this.event = e.type;
            data && (this.name = data); 
        },
        handleMouseMove(e) {
            this.event = e.type;
            this.offsetX = e.offsetX;
            this.offsetY = e.offsetY;
        }
    }
});

app.mount("#app");