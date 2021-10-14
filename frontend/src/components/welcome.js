import "../styles/welcome.css"
import { plot } from "plotly.js";
import { Card, Container, Button, Col, Row } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import home_img from "../statics/imgs/home_scrn.jpg"

const Welcome = () => {
    return (
        <section className="bg-image">
            <div className="welc-div">
                <Row>
                    <div className="p-2 ">
                        <Row>
                            <h1 className="large-text d-flex justify-content-center"><b>Get a wider angle</b></h1>
                            <h5 className=" d-flex justify-content-center">Explore coderhub.sa leaderboard data in a better way and gain more insights</h5>
                        </Row>
                    </div>
                    <div className="mt-2 d-flex justify-content-center mt-5 ">
                        <img className="image shadow-lg d-block d-sm-none" src={home_img} height={150} width={340}></img>
                        <img className="image shadow-lg d-none d-sx-none d-sm-block d-lg-none" src={home_img} height={200} width={400}></img>
                        <img className="image shadow-lg d-none d-lg-none " src={home_img} height={300} width={500}></img>
                        <img className="image shadow-lg d-none d-lg-block" src={home_img} height={500} width={900}></img>
                    </div>
                </Row>
            </div>
            <div className="mt-5">
                <Row>
                    <Col md={4}>
                    <article className="p-2">
                        <h3 className="d-flex justify-content-center"><b>Explore in-depth</b></h3>
                        <div className="d-flex justify-content-center">
                        <ul>
                            <li>Top 10 for any language</li>
                            <li>Rank 1 in all language</li>
                        </ul>
                        </div>
                    </article>
                    </Col>
                    <Col md={4}>
                    <article className="p-2">
                        <h3 className="d-flex justify-content-center"><b>Download files</b></h3>
                        <div className="d-flex justify-content-center">
                        <ul>
                            <li>Top 10 users dataset for all languages</li>
                            <li>Rank 1 users dataset for all languages</li>
                        </ul>
                        </div>
                    </article>
                    </Col>
                    <Col md={4}>
                    <article className="p-2">
                        <h3 className="d-flex justify-content-center"><b>Search by username</b></h3>
                        <div className="d-flex justify-content-center">
                        <p>Soon</p>
                        </div>
                    </article>
                    </Col>
                </Row>
            </div>
            <section className="mt-4 d-flex justify-content-center">
                <a href="/home" className ="start-btn">Get started</a>
            </section>
            <hr></hr>
            <footer className="mt-4 d-flex justify-content-center">
                <Row>
                <p className="d-flex justify-content-center">Devoleped by Nafie Alhelaly</p>
                <div className="d-flex justify-content-center">
                    <h1 className="m-1"><a className="link-white" href="https://www.linkedin.com/in/nafie-alhilaly/"><i class="bi bi-linkedin"></i></a></h1>
                    <h1 className="m-1"><a className="link-white" href="https://github.com/NafieAlhilaly"><i class="bi bi-github"></i></a></h1>
                </div>
                </Row>
            </footer>
        </section>
    );
}

export default Welcome;