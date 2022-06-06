const app = Vue.createApp({
    data () {
        return {
            showData: false,
            data : [
                {
                    name:'Bola Biru',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque doloremque excepturi natus dolorem magni sunt molestiae commodi, iusto sed quibusdam distinctio reiciendis rem temporibus necessitatibus accusamus beatae incidunt accusantium obcaecati. Porro, dicta temporibus nulla quaerat, illum molestiae atque eius, accusantium rerum corrupti impedit velit ab quos autem sunt quidem.',
                    price:12000,
                    image:'https://server-tubes-pam-app.herokuapp.com/images/BolaBiru.png',
                    count:0,
                    subtotal:0
                },
                {
                    name:'Bola Hijau',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque doloremque excepturi natus dolorem magni sunt molestiae commodi, iusto sed quibusdam distinctio reiciendis rem temporibus necessitatibus accusamus beatae incidunt accusantium obcaecati. Porro, dicta temporibus nulla quaerat, illum molestiae atque eius, accusantium rerum corrupti impedit velit ab quos autem sunt quidem.',
                    price:15000,
                    image:'https://server-tubes-pam-app.herokuapp.com/images/BolaHijau.png',
                    count:0,
                    subtotal:0
                },
                {
                    name:'Bola Merah',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque doloremque excepturi natus dolorem magni sunt molestiae commodi, iusto sed quibusdam distinctio reiciendis rem temporibus necessitatibus accusamus beatae incidunt accusantium obcaecati. Porro, dicta temporibus nulla quaerat, illum molestiae atque eius, accusantium rerum corrupti impedit velit ab quos autem sunt quidem.',
                    price:8000,
                    image:'https://server-tubes-pam-app.herokuapp.com/images/BolaMerah.png',
                    count:0,
                    subtotal:0
                },
                {
                    name:'Bola Kuning',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque doloremque excepturi natus dolorem magni sunt molestiae commodi, iusto sed quibusdam distinctio reiciendis rem temporibus necessitatibus accusamus beatae incidunt accusantium obcaecati. Porro, dicta temporibus nulla quaerat, illum molestiae atque eius, accusantium rerum corrupti impedit velit ab quos autem sunt quidem.',
                    price:10000,
                    image:'https://server-tubes-pam-app.herokuapp.com/images/BolaKuning.png',
                    count:0,
                    subtotal:0
                },
            ],
            total:0
        };
    },
    methods:{
        toggleShowData() {
            this.showData = !this.showData;
        },
        add(product) {
            product.count++;
            product.subtotal = product.count * product.price;
            this.total = this.setTotal();
        },
        sub(product) {
            product.count--;
            product.subtotal = product.count * product.price;
            this.total = this.setTotal();
        },
        setTotal(){
            let temp = 0;
            for(let i=0; i<4; i++) {
                temp+=this.data[i].subtotal;
            }
            return temp;
        }
    },
});

app.mount("#app");