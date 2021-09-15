import React from 'react'
import Layout from '../../Components/Layout'
import { Container, Card, CardGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Aboutus() {
    return (
        <div>
            <Layout>
                <div style={{
                    backgroundImage: "url(/img/aboutusbg.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    minHeight: '100vh'
                }}>
                    <div className="container" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit atque, quidem commodi aut consectetur odit est sapiente asperiores pariatur aliquam aperiam dicta, architecto itaque veniam obcaecati autem assumenda temporibus doloribus ratione nihil. Eius soluta laboriosam quo itaque magnam nemo quis, asperiores, at nobis illo quod quas perferendis rerum sunt.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam autem culpa quo est enim itaque magnam expedita maiores! Beatae possimus vero saepe deleniti sed veniam eius omnis tempore a sint reiciendis odit numquam debitis facere qui nostrum aliquid, repellendus corrupti quaerat aut atque error! Voluptates sit architecto ad culpa dicta obcaecati? Earum odit nobis neque similique cumque quis aliquid beatae sed numquam doloribus, harum, sint minus asperiores aut culpa. Debitis, temporibus? Quam quo, pariatur doloribus nam blanditiis veniam voluptas laboriosam temporibus sunt ut possimus in eaque repudiandae aut corporis aliquid tenetur ea omnis nesciunt illum hic consequuntur! Eaque iure illum facilis, est corporis beatae error sed ex iste, excepturi illo! Sequi animi, temporibus excepturi voluptates porro explicabo culpa suscipit eveniet saepe reprehenderit alias vitae fugiat quam. Error amet facilis nulla. Atque ab voluptates, nemo incidunt nisi ex quis fuga harum omnis adipisci eum aliquam officia dignissimos quisquam, sed voluptatibus animi aspernatur laboriosam distinctio cum sint possimus? Quo tempore totam iste iure pariatur, harum qui, placeat numquam ratione obcaecati suscipit nobis dolorum? Nihil ipsum minus porro architecto? Est, quos dicta? Molestiae quisquam itaque aliquam dolores eum eius architecto magnam laborum hic nemo veniam voluptate ad suscipit debitis nihil quasi distinctio, ab animi ratione. Eius atque velit adipisci. Ut dolore necessitatibus ullam excepturi dignissimos repudiandae culpa assumenda voluptates, optio, beatae iusto, exercitationem obcaecati veritatis totam tempora autem sapiente doloremque accusamus recusandae ducimus impedit iure suscipit error? Optio adipisci, recusandae ipsam qui corrupti magni dolorem accusamus maiores esse velit dicta! Reiciendis ducimus minus, pariatur, itaque placeat totam sit dolore facere hic inventore mollitia. Dolorem mollitia iure, vero quos soluta distinctio quam necessitatibus alias minus molestiae reiciendis in eaque nemo obcaecati maxime facilis architecto molestias provident inventore? Adipisci sit accusantium amet harum, excepturi, laboriosam animi fugiat nam rem inventore dolorem consequuntur debitis aliquid.
                    </div>

                    <div className="container aboutcard" >
                        <Row xs={1} md={3} className="g-4">
                            {Array.from({ length: 6 }).map((_, idx) => (
                                <Col>
                                    <Card className="aboutuscardclass">
                                        <Card.Img variant="top" src="img/emptyprofile.png" />
                                        
                                        <Card.ImgOverlay >
                                            <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                                <Card.Text>

                                                    This is a longer card with supporting text below as a natural
                                                    lead-in to additional content. This content is a little bit longer.
                                            </Card.Text>
                                            </Card.Body>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                </div>

                </div>

            </Layout>
        </div >
    )
}
