let autos = require('./autos');
const concesionaria = {
   autos: autos,
      buscarAuto: function (patente) {
         for(let i = 0; i < this.autos.length; i++) {
            if (patente == this.autos[i].patente) {
               return this.autos[i];
            } 
         }  
         return null
         },
          venderAuto: function (patente) {
          let encontrado = this.buscarAuto(patente);
          this.autos[this.autos.indexOf(encontrado)].vendido = true;
         },
         autosParaLaVenta: function () {let lista = this.autos.filter(function (auto) {
        return auto.vendido == false;  
        })
        return lista;
         },
         autosNuevos: function() {
            let nuevo = this.autosParaLaVenta();
            return nuevo.filter(autos => autos.km<100)
    },
         listaDeVentas: function () {
            let contador = [];
            for( let i = 0; i< autos.length; i ++){
               if(autos[i].vendido ==! false) {
                  contador.push(autos[i].precio);
               }
            }
            return contador;
         }, 
         totalDeVentas: function() {
              return this.autos.reduce((total, elemento) => {
              return total + (elemento.vendido) ? elemento.precio: 0;
              }, 0)
              },
              puedeComprar: function(auto, persona) {
            if (persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio / auto. cuotas)) {
               return true;
            } else {
               return false;
            }
              },
              autosQuePuedeComprar: function(persona) {
             let autosParaVender = this.autosParaLaVenta();
               return autosParaVender.filter(auto => {
                 return this.puedeComprar(auto, persona)
                })

              }
}
