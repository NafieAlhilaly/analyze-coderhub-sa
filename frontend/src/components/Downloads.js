import { Card, Container, Button, Col, Row } from "react-bootstrap";

const Downlaods = () => {
    return (
        <Container>
                <Card className="shadow p-2 shadow-lg rounded mt-5 w-75 m-auto">
                    <Row>
                        <Col xs={10} md={11}>
                            <h3>Top 10 users</h3>
                        </Col>
                        <Col >
                            <a href="https://analyze-coderhub.herokuapp.com/top10_file" className="w-25"><i className="bi bi-download"></i></a>
                        </Col>
                    </Row>
                    <hr></hr>
                    <p>A sheet file containing dataset of coderhub.sa <b>top 10 users</b> in the <a href="https://coderhub.sa/leaderboard">leaderboard</a> for every programming language available.</p>
                </Card>
                <Card className="shadow p-2 shadow-lg rounded mt-5 w-75 m-auto">
                    <Row>
                        <Col xs={10} md={11}>
                            <h3>Rank 1 users</h3>
                        </Col>
                        <Col >
                            <a href="https://analyze-coderhub.herokuapp.com/rank1_file" className="w-25"><i className="bi bi-download"></i></a>
                        </Col>
                    </Row>
                    <hr></hr>
                    <p>A sheet file containing dataset of coderhub.sa <b>rank 1 users</b> in the <a href="https://coderhub.sa/leaderboard">leaderboard</a> every programming language available.</p>
                </Card>
                <hr></hr>
                <footer>
                    <p >Interested in getting more data from <a href="https://coderhub.sa/home">Coderhub.sa</a> APIs ? check out my <a href="https://github.com/NafieAlhilaly/coderHub">repo</a> on Gethub</p>
                </footer>
        </Container>
    );
}

export default Downlaods;