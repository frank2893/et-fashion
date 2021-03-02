import React, { Component } from "react";
import "../css/About.css";

export class About extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container custom-container">
          <div className="custom-block">
            <div className="block-image">
              <img src="https://img.freepik.com/vector-gratis/logotipo-moda_23-2148558723.jpg?size=626&ext=jpg&ga=GA1.2.1212857596.1613779200" />
            </div>
            <div className="block-text">
              <div className="block-title">
                <span>¿Quiénes somos?</span>
              </div>
              <div className="block-p">
                <p>
                  Somos una empresa de moda dedicada al diseño y producción de prendas
                  exclusivas. Creemos que vestir no es simplemente ponerse ropa que combine entre sí. Tu
                  ropa es como tu segunda piel, te representa, protege, abriga y dice en voz baja tu
                  sentido del gusto.
                </p>
              </div>
              <div className="block-p">
                <p>
                  Por eso diseñamos para hombres y mujeres prendas que los haga sentir
                  cómodos, seguros de sí y conectados con su estilo único, que marca la diferencia
                  y roba las miradas a donde quiera que vayan.
                </p>
              </div>
            </div>
          </div>
          <div className="custom-block">
            <div className="block-text">
              <div className="block-title">
                <span>Misión</span>
              </div>
              <div className="block-p">
                <p>
                  Vestir a nuestros clientes con prendas que cumplan los más altos estándares de
                  calidad, ofreciendo diseños acordes a las modas y tendencias que nacen cada
                  día. Nuestra misión es ayudarte a expresar tu estilo sin mucho esfuerzo y por medio de
                  prendas bellas, elegantes, modernas y con una excelente relación con su precio.
                </p>
              </div>
            </div>
            <div className="block-image">
              <img src="https://img.freepik.com/vector-gratis/logotipo-moda_23-2148558723.jpg?size=626&ext=jpg&ga=GA1.2.1212857596.1613779200" />
            </div>
          </div>
          <div className="custom-block">
            <div className="block-image">
              <img src="https://img.freepik.com/vector-gratis/logotipo-moda_23-2148558723.jpg?size=626&ext=jpg&ga=GA1.2.1212857596.1613779200" />
            </div>
            <div className="block-text">
              <div className="block-title">
                <span>Visión</span>
              </div>
              <div className="block-p">
                <p>
                  Posicionarnos como marca de referencia en el diseño y moda de ropa moderna y
                  juvenil. Deseamos ser un ícono en nuestra sociedad y que por medio de nuestras
                  prendas las personas encuentren una vestimenta que los identifique.
              </p>
              </div>
              <div className="block-p">
                <p>
                  Nuestra misión es ayudarte a expresar tu estilo sin mucho esfuerzo y por medio de
                  prendas bellas, elegantes, modernas y con una excelente relación con su precio.
              </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About