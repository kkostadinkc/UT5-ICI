import React, {Component} from 'react'
import Tabla from './Tabla'
import TablaComponentesSimples from './TablaComponentesSimple'
import TablaComponentesSimplesProps from './TablaComponentesSimplesProps'
import TablaComponentesSimplesState from './TablaComponentesSimplesState'

class AplicacionPrincipal extends Component {
    /*Objeto para utilizar en state */
    state = {

        personajes :[
            {
                nombre: 'Payton Hobart'
            },
            {
                nombre: 'Wendy Carr'
            },
            {
                nombre: 'Mina'
            },
            {
                nombre: 'Jonathan Harken'
            },
            {
                nombre: 'Drácua'
            },
            {
                nombre: 'Once'
            },
            {
                nombre: 'Jim Hopper'
            }
        ]
    }
    
    /*Metodo para borrar personajes */
    borrarPersonaje = indice =>{

        const {personajes} = this.state

        this.setState(
            {
                personajes: personajes.filter((personaje,i) => {
                    return i !==indice; /*Devuelve todo los que no tiene que borrar. Es decir todos distintos del indice */

                }
                )
            }
        )

    }



    render(){
        /*Coleccion de objetos con nomenclatura JSON para utilizar con props */
        const actoresActrices = [
            {
                nombre: 'Joel',
                apellidos:'Edgerton'
            },
            {
                nombre: 'Carmen',
                apellidos:'Maura'
            },
            {
                nombre: 'Luis',
                apellidos:'Tosar'
            },
            {
                nombre: 'Chloe',
                apellidos:'Grace Moretz'
            }
        ]

        /*Inicializamos el objeto de personajes */
        const {personajes} = this.state;
        /*Sesion 33 -> 27 de Enero de 2020 */
        return (
            <div className="App">
                <h2>Tabla creada mediante componente de clase que no 
                    utiliza componentes simples
                </h2>
                <Tabla />
                <h2>Tabla creada mediante un componente de clase que 
                    utilzia componentes simples
                </h2>
                <TablaComponentesSimples/>
                <h2>Tabla creada mediante un componente de clase que utiliza paso de parámentros con props</h2>
                {/* Sesion 34 -> 30 de Enero de 2020 */}
                <TablaComponentesSimplesProps datosActoresActrices={actoresActrices}/>
                <h2>Tabla creado mediante un componente simple (con state y que permite eliminar elementos), que utiliza dos elementos simples</h2>
                <TablaComponentesSimplesState datosPersonaje={personajes} borrarPersonaje={this.borrarPersonaje}/>
            </div>
        )
    }
}

export default AplicacionPrincipal