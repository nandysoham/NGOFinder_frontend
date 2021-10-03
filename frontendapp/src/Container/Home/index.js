import React from 'react'
import { Jumbotron, Carousel } from 'react-bootstrap'
import Layout from '../../Components/Layout'

export default function Home(props) {

    if(props.mode){
        document.body.style.backgroundColor = "#1c1c1c";
    }
    return (
        <div>
            <Layout mode={props.mode} Togglemode={props.Togglemode}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/1600x900/?nature"
                            alt="First slide"
                            height="700px"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/1600x900/?nature,water"
                            alt="Second slide"
                            height="700px"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/1600x900/?nature,mountains"
                            alt="Third slide"
                            height="700px"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </Layout>
        </div>
    )
}
