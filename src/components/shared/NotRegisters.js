import React from 'react'
import { MdCancel } from 'react-icons/md';
import { Col, Row, Container } from 'react-bootstrap';
import styles from '../../assets/css/components/NotRegister.module.css'
function NotRegisters({ icon, text }) {
    return (
        <Container>
            <Row>
                <Col xs={12} className="d-flex justify-content-center">
                    <Col>
                        {icon &&
                            (< Row >
                                <MdCancel
                                    className={styles.icon}
                                />
                            </Row>)
                        }
                        {text &&
                            <Row>
                                <h3 className={styles.text} >
                                    No se encontraron registros
                                </h3>
                            </Row>

                        }

                    </Col>
                </Col>
            </Row>
        </Container >
    )
}

export default NotRegisters