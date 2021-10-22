import { Col, Row , Button} from "react-bootstrap";
import "../styles/navbar.css"
import { useState } from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
        <nav className = "navbar-1 shadow-lg mb-3 ">
            <div className="upper-line"></div>
            <Row>
                <Col xs={10} md={5} lg={5}><h1 className="p-2"><Link to="/">Analyse Coderhub</Link></h1></Col>

                <Col xs={2} md={7} lg={7}>
                    {/* hide on small screen */}
                    <div className="mt-3 links d-none d-md-block">
                        <Link to="/home" className="navbar-item"><i className="bi bi-house-door"></i> Home</Link>
                        <Link to="/userSearch" className="navbar-item"><i className="bi bi-search"></i> User Search</Link>
                        <Link to="/about" className="navbar-item"><i className="bi bi-info-circle"></i> About</Link>
                        <Link to="/downloads" className="navbar-item"><i className="bi bi-file-earmark-spreadsheet"></i> Downlaods</Link>
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
                <div id="menu" className="p-3 card border border-dark d-block d-md-none m-2">
                <Row>
                    <Link to="/home" className="navbar-item"><i className="bi bi-house-door-fill"></i> Home</Link>
                    <Link to="/userSearch" className="navbar-item"><i className="bi bi-search"></i> User Search</Link>
                    <Link to="/about" className="navbar-item"><i className="bi bi-info-circle"></i> About</Link>
                    <Link to="/downloads" className="navbar-item"><i className="bi bi-file-earmark-spreadsheet"></i> Downlaods</Link>
                </Row>
                </div>
            }
        </nav>
    );
}

export default Navbar;