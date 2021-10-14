import { Col, Container, Row , Button} from "react-bootstrap";
import "../styles/navbar.css"
import { useState } from 'react'


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
        <nav className = "navbar-1 shadow-lg mb-3 ">
            <div className="upper-line"></div>
            <Row>
                <Col xs={10} md={6} lg={8}><h1 className="p-2"><a href="/">Analyse Coderhub</a></h1></Col>

                <Col xs={2} md={5} lg={4}>
                    {/* hide on small screen */}
                    <div className="mt-3 links d-none d-md-block ">
                        <a href="/home" className="navbar-item"><i className="bi bi-house-door-fill"></i> Home</a>
                        <a href="/about" className="navbar-item"><i className="bi bi-info-circle"></i> About</a>
                        <a href="/downloads" className="navbar-item"><i className="bi bi-file-earmark-spreadsheet"></i> Downlaods</a>
                    </div>

                    {/*hide on medium and larger screens*/}
                    <div className="d-block d-md-none d-flex ">
                        <Button className="btn-light mt-1 btn btn-outline-dark" 
                                onClick={() => setVisible(!visible)}>{visible ? '' : ''}<i 
                                className="bi bi-list"></i></Button>
                    </div>
                </Col>
            </Row>
            {visible &&
                <div id="menu" className="card border border-dark d-block d-md-none">
                <Row>
                    <a href="/home" className="navbar-item"><i className="bi bi-house-door-fill"></i> Home</a>
                    <a href="/about" className="navbar-item"><i className="bi bi-info-circle"></i> About</a>
                    <a href="/downloads" className="navbar-item"><i className="bi bi-file-earmark-spreadsheet"></i> Downlaods</a>
                </Row>
                </div>
            }
        </nav>
    );
}

export default Navbar;