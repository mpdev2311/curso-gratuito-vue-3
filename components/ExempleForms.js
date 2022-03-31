const exempleForm = {
    template: `
    <form action="#" method="post" @submit.prevent="saveData">
       <label>
           Nome:
           <input v-model="name" type="text" name="name" placehoder="Nome" >

           <div v-if="errors.name">{{ errors.name }}</div>
       </label>
       <label>
       Sexo:
       <select name="sexo" v-model="sexo">
           <option value="">Escolha</option>
           <option value="M">Masculino</option>
           <option value="F">Femenino</option>
       </select>
      </label>
      <label>
          Descrição:
          <textarea v-model="description" name="descriptin" placeholder="Descrição"></textarea>
       </label>
       <label>
           <input v-model="agree" type="checkbox" name="agree">
           Concordo
       </label>
       <button type="submit">Enviar</button>
    </form>              
    `,

    data() {
        return {
           name: 'Marcos Paulo',
           sexo: '',
           description: '',
           agree: true, 

           errors: {
               name: ''
           }
        }
    },

    methods: {
        saveData () {
            this.reset()
             if (this.name === '') {
                 this.errors.name = 'Informe um valor para o nome'

                 return
             }

            console.log(this.name)  
            console.log(this.sexo)  
            console.log(this.descrção)  
            console.log(this.agree)  
        },

        reset () {
           this.errors = {
            name: ''
        } 
        }
    },
}

app.component('exemple-form', exempleForm)