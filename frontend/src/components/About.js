import { Card, Container } from "react-bootstrap";

const About = () => {
    return (
        <Container>
            <Card>
                <p className="p-3">Developed with <i class="bi bi-heart-fill text-danger"></i> by <a href="https://github.com/NafieAlhilaly">Nafie Alhelaly</a>.</p>
            </Card>
        </Container>
    );
}

export default About;