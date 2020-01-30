import React,{ Component } from "react";

/*Sacado de TablaComponentesSimple.js */
const TablaCabecera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre:</th>
                <th>Apellidos:</th>
            </tr>
        </thead>
    )
}

/*En este caso en el cuerpo de la tabla pasaremos parametros, asi se podra construir la tabla con los datos
pasados */
const TablaCuerpo = props => {
    const filasDeDatos = props.datosActoresActrices.map((fila, indice) => {
        return (
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td>{fila.apellidos}</td>
            </tr>
        )
    }
    )

    return (
        <tbody>
            {filasDeDatos}
        </tbody>
    )
}

class TablaComponentesSimplesProps extends Component {
    render() {
       /*  <TablaComponentesSimplesProps datosActoresActrices={actoresActrices} /> */
        const { datosActoresActrices } = this.props/*Utilizo props pasaos al componente desde la aplicacion*/

        return (
            <table>
                <TablaCabecera />
                <TablaCuerpo datosActoresActrices={datosActoresActrices} />
            </table>
        )
    }
}

export default TablaComponentesSimplesProps