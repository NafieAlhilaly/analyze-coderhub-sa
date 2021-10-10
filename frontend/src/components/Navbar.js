import { Col, Container, Row , Button, Modal} from "react-bootstrap";
import "../styles/navbar.css"
import { useState } from 'react'


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
        <Container fluid>
            <nav className = "navbar-1 mb-1">
                <Row>
                    <Col xs={10} md={6} lg={8}><h1>Analyse Coderhub</h1></Col>

                    <Col xs={2} md={5} lg={4}>
                        {/* hide on small screen */}
                        <div className="mt-2 links d-none d-md-block ">
                            <a href="/"><i className="bi bi-house-door-fill"></i> Home</a>
                            <a href="/"><i className="bi bi-info-circle"></i> About</a>
                            <a href="/"><i className="bi bi-file-earmark-spreadsheet"></i> Downlaods</a>
                        </div>

                        {/*hide on medium and larger screens*/}
                        <div className="d-block d-md-none d-flex justify-content-end">
                            <Button className="btn-light mt-1 btn btn-outline-dark" 
                                    onClick={() => setVisible(!visible)}>{visible ? '' : ''}<i 
                                    className="bi bi-list"></i></Button>
                        </div>
                    </Col>
                </Row>
                    {visible &&
                        <div id="menu" className="card border border-dark d-block d-md-none">
                        <Row>
                            <a href="/"><i className="bi bi-house-door-fill"></i> Home</a>
                            <a href="/"><i className="bi bi-info-circle"></i> About</a>
                            <a href="/"><i className="bi bi-file-earmark-spreadsheet"></i> Downlaods</a>
                        </Row>
                        </div>
                    }
                </nav>
        </Container>
    );
}

export default Navbar;