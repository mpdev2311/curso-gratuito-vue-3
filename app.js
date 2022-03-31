const myApp = {
data () {
    return {
        title: 'Curso de Vue',
        name: 'Maria',
        lastName: 'Lopes - EpecializaTi',       
        products: [
            {
                title: 'venu.jpg',
                description: 'filme muito legal',
                image: './img/venu.jpg',
                stars: 3,
            },
            {
                title: 'venu.2.jpg',
                description: 'filme muito legal (2)',
                image: './img/venu.2.jpg',
                stars: 0
            }
        ],
        cart: [], 
        // textColor: '#000',
        // bgColor: '#fff',
        styles: {
            backgroundColor: '#000',
            color: '#fff',
        },
        themeBlack: true 
    }
  },

  computed: {
      fullName () {
        return this.name + ' ' + this.lastName 
      }
  },

  methods: {
      addCart (product) {
        this.cart.push(product);
      },

      inCart (product) {
        return  this.cart.indexOf(product) != -1
      },

      removeCart (product) {
     this.cart = this.cart.filter((prod, index) =>  product != prod)       
      },

     toogleTheme (value) {
         this.themeBlack = !this.themeBlack

        if ( this.themeBlack ) {
           this.styles.backgroundColor = '#000'
           this.styles.color = '#fff'            
        } else {
            this.styles.backgroundColor = '#fff'
           this.styles.color = '#000'  
        } 
     } 
  },
}



const app = Vue.createApp(myApp)

