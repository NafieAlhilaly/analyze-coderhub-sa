import { Row , Card, Table} from "react-bootstrap";


const Top1Table = ({langs, rank1PerLang, user_language_points, total_points}) => {
    return (
        <Card className="shadow mb-1 shadow-lg rounded">
            <div className="list-group">
                <div href="#" className="list-group-item list-group-item-action active ">
                    <Row>
                        <h5>Rank 1 per language</h5>
                    </Row>
                </div>
                <div>
                <Table bordered hover size="md">
                    <thead>
                        <tr>
                            <th>Language</th>
                            <th>Username</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {langs.map((lang, inx)=>(
                        <tr>
                            <td>{lang}</td>
                            <td>{rank1PerLang[inx]}</td>
                            <td>{total_points[inx]}</td>
                        </tr>
                        ))}
                    </tbody>
                    </Table>
                </div>
            </div>
        </Card>
    );
}

export default Top1Table;
