let app = new Vue({
    el:'#app',
    data: {
        name: 'Diogo',
        age: 36
    },
    methods:{
         mostrar: (nome)=>{
             let txt = 'Olá, '+ nome;
             return txt;
         }
    }
});