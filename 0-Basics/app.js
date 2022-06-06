const app = Vue.createApp({
    data () {
        return {
            image: "https://server-tubes-pam-app.herokuapp.com/images/BolaBiru.png",
            name : 'Bol Biru',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita error autem possimus, inventore quis laboriosam rem magni odio dolor eum cum ullam quibusdam suscipit, officia ratione similique. Voluptate sit inventore repudiandae distinctio accusantium nam commodi recusandae exercitationem quasi! Placeat, tempora?',
            price : 399,
            orderCount: 0,
        };
    },
    methods:{
        add() {
            this.orderCount++;
        },
        sub() {
            this.orderCount--;
        },
        changeName(name) {
            this.name = name;
        }
    }
});

app.mount("#app");

