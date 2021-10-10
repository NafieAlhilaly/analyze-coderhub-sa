import { Row , Card, Table} from "react-bootstrap";


const Top10Table = ({langs, user_lang, user_language_points, handleLangChange}) => {
    return (
        
<Card className="shadow mb-1 shadow-lg rounded">
    <div className="list-group">
        <div href="#" className="list-group-item list-group-item-action active ">
            <Row>
                <h5>Top 10 users in </h5>
                
                <select className="form-select" onChange={handleLangChange}>
                    {langs.map((itm)=>(
                        <option value={itm}>{itm}</option>    
                    ))}
                </select>
                
            </Row>
        </div>
        <div>
        <Table bordered hover size="md">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{user_lang[0]}</td>
                    <td>{user_language_points[0]}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{user_lang[1]}</td>
                    <td>{user_language_points[1]}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{user_lang[2]}</td>
                    <td>{user_language_points[2]}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>{user_lang[3]}</td>
                    <td>{user_language_points[3]}</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>{user_lang[4]}</td>
                    <td>{user_language_points[4]}</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>{user_lang[5]}</td>
                    <td>{user_language_points[5]}</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>{user_lang[6]}</td>
                    <td>{user_language_points[6]}</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>{user_lang[7]}</td>
                    <td>{user_language_points[7]}</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>{user_lang[8]}</td>
                    <td>{user_language_points[8]}</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>{user_lang[9]}</td>
                    <td>{user_language_points[9]}</td>
                </tr>
            </tbody>
            </Table>
        </div>
    </div>
</Card>
    );
}

export default Top10Table;
