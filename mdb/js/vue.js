/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var urlUsers = 'package.json';
new Vue({
    el: '#main',
    created: function () {
        this.getUsers();
    },
    data: {

        Almacen: [],
        AlmacenFoto: '',
        AlmacenNombre: '',
        AlmacenEdad: '',
        AlmacenFecha: '',
        AlmacenColegio: '',
        AlmacenCiudad: '',
        AlmacenDeporte: '',
        AlmacenPrograma: '',
        AlmacenValor: '',
        btpelicula: '1',
        bpelicula: '',
        AlmacenCaja: {
            id: '',
            foto: '',
            nombre: '',
            edad: '',
            fecha_nac: '',
            Colegio: '',
            Ciudad: '',
            Deporte: '',
            Programa: '',
            valor: ''
        }
    },
    methods: {
        getUsers: function () {
            this.$http.get(urlUsers).then(function (response) {
                this.Almacen = response.data.almacenes;
            });
        },
        CrearAlmacen: function () {
            var estu = {id: null, foto: this.AlmacenCaja.foto, nombre: this.AlmacenCaja.nombre, edad: this.AlmacenCaja.edad, fecha_nac: this.AlmacenCaja.fecha_nac, Colegio: this.AlmacenCaja.Colegio, Ciudad: this.AlmacenCaja.Ciudad, Deporte: this.Almacen.Deporte, Programa: this.AlmacenCaja.Programa, valor: this.AlmacenCaja.valor}
            this.Almacen.push(estu)
        },
        EliminarAlmacen: function (index) {
            this.Almacen.splice(index, 1)
        },
        EditarAlmacen: function (estu) {
            for (var i = 0; i < this.Almacen.length; i++) {
                if (this.Almacen[i].id == estu) {//Aca validamos que lo que venga de de la tabla sea igual al del objeto
                    this.AlmacenCaja.id = this.Almacen[i].id;
                    this.AlmacenCaja.nombre = this.Almacen[i].nombre;
                    this.AlmacenCaja.foto = this.Almacen[i].foto;
                    this.AlmacenCaja.edad = this.Almacen[i].edad;
                    this.AlmacenCaja.fecha_nac = this.Almacen[i].fecha_nac;
                    this.AlmacenCaja.Colegio = this.Almacen[i].Colegio;
                    this.AlmacenCaja.Ciudad = this.Almacen[i].Ciudad;
                    this.AlmacenCaja.Deporte = this.Almacen[i].Deporte;
                    this.AlmacenCaja.Programa = this.Almacen[i].Programa;
                    this.AlmacenCaja.valor = this.Almacen[i].valor;
                }
            }
        },
        ActualizarAlmacen: function (estu) {
            for (var i = 0; i < this.Almacen.length; i++) {
                if (this.Almacen[i].id == this.AlmacenCaja.id) {//Aca validamos que lo que venga de de la tabla sea igual al del objeto
                    this.Almacen[i].foto = this.AlmacenCaja.foto;
                    this.Almacen[i].nombre = this.AlmacenCaja.nombre;
                    this.Almacen[i].edad = this.AlmacenCaja.edad;
                    this.Almacen[i].fecha_nac = this.AlmacenCaja.fecha_nac;
                    this.Almacen[i].Colegio = this.AlmacenCaja.Colegio;
                    this.Almacen[i].Ciudad = this.AlmacenCaja.Ciudad;
                    this.Almacen[i].Deporte = this.AlmacenCaja.Deporte;
                    this.Almacen[i].Programa = this.AlmacenCaja.Programa;
                    this.Almacen[i].valor = this.AlmacenCaja.valor;

                    this.PeliculaCaja.nombre = '';
                    this.PeliculaCaja.foto = '';
                    this.PeliculaCaja.edad = '';
                    this.PeliculaCaja.fecha_nac = '';
                    this.PeliculaCaja.Colegio = '';
                    this.PeliculaCaja.Ciudad = '';
                    this.PeliculaCaja.Deporte = '';
                    this.PeliculaCaja.Programa = '';
                    this.PeliculaCaja.valor = '';

                }
            }
        }
    },
    computed: {
        Almacenfiltradas() {
            return this.Almacen.filter((objeto) => {
                if (this.btpelicula == 1) {
                    return objeto.nombre.toUpperCase().includes(this.bpelicula.toUpperCase())
                }
                if (this.btpelicula == 2) {
                    return objeto.edad.toUpperCase().includes(this.bpelicula.toUpperCase())
                }
                if (this.btpelicula == 3) {
                    return objeto.Programa.toUpperCase().includes(this.bpelicula.toUpperCase())
                }

            })
        }
    }
});