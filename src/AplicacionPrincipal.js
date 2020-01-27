import React, {Component} from 'react'
import Tabla from './Tabla'
import TablaComponentesSimples from './TablaComponentesSimple'

class AplicacionPrincipal extends Component {
    render(){

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
            </div>
        )
    }
}

export default AplicacionPrincipal