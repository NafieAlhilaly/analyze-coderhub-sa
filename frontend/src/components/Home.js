import { Col, Container, Row, Card, Button} from "react-bootstrap";
import "../styles/home.css"
import DataPlot from "./plots/plot"
import { useEffect, useState } from 'react'
import { Bar, Line, Doughnut} from 'react-chartjs-2';
import Plot from "react-plotly.js";
import Top10Table from './tables/Top10Table'
import Top1Table from './tables/Top1Table'


const Home = () => {
    const [visibiliity, setVisibility] = useState(true)
    const [plotSize, setPlotSize] = useState(9)
    const [isLoading, setIsLoading] = useState(true)

    const handleVisibility = () => {
        setVisibility(!visibiliity)
        if(!visibiliity){
            setPlotSize(9)
        }else{
            setPlotSize(12)
        }
        
    } 

    const [top10Data, setTop10Data] = useState({"users":{"0":"ahmed0ksa","1":"alxd7my","2":"iX901","3":"ahmadajr1","4":"vdotup","5":"LulwahAlmisfer","6":"iam.that.1","7":"fayadh","8":"eengmaher","9":"f.babkoor","10":"TheAwiteb","11":"hamoud47","12":"dssaggaf","13":"fahad.alharthi","14":"maldum","15":"snap-aaa.saq","16":"thenajjar","17":"nnoaid","18":"asma94","19":"saud1983","20":"shuruqsaeed","21":"Ibrahim_Alrubayyi","22":"x7md","23":"ghadyana","24":"masha","25":"qabdull4h","26":"salehalibrahim","27":"aisha_j","28":"lum","29":"abdulrahmansbq","30":"sircaesar","31":"musaadtech","32":"abdullahmq","33":"haider_dev94","34":"alsenani","35":"alharbi","36":"jstsercuz","37":"arwa","38":"bandaralrooqi","39":"asma94","40":"salman","41":"shuruqsaeed","42":"amjad.a","43":"ib.subaie","44":"golag7","45":"reham721","46":"abdulrahmansbq","47":"TheAwiteb","48":"asma94","49":"dssaggaf","50":"salman","51":"abdulrahmansbq","52":"golag7","53":"reham721","54":"ahmadshahal","55":"amjad.a","56":"amira","57":"sal7one","58":"haider_dev94","59":"TheAwiteb"},"points":{"0":921.0,"1":911.0,"2":906.0,"3":906.0,"4":906.0,"5":906.0,"6":901.0,"7":891.0,"8":846.0,"9":820.0,"10":926.0,"11":926.0,"12":921.0,"13":916.0,"14":916.0,"15":911.0,"16":906.0,"17":906.0,"18":906.0,"19":906.0,"20":931.0,"21":931.0,"22":931.0,"23":926.0,"24":921.0,"25":916.0,"26":911.0,"27":911.0,"28":911.0,"29":906.0,"30":916.0,"31":916.0,"32":911.0,"33":911.0,"34":911.0,"35":911.0,"36":911.0,"37":911.0,"38":911.0,"39":906.0,"40":91.0,"41":91.0,"42":91.0,"43":91.0,"44":91.0,"45":91.0,"46":91.0,"47":91.0,"48":91.0,"49":91.0,"50":91.0,"51":91.0,"52":91.0,"53":91.0,"54":91.0,"55":91.0,"56":91.0,"57":91.0,"58":91.0,"59":91.0},"rank":{"0":1,"1":2,"2":3,"3":4,"4":5,"5":6,"6":7,"7":8,"8":9,"9":10,"10":1,"11":2,"12":3,"13":4,"14":5,"15":6,"16":7,"17":8,"18":9,"19":10,"20":1,"21":2,"22":3,"23":4,"24":5,"25":6,"26":7,"27":8,"28":9,"29":10,"30":1,"31":2,"32":3,"33":4,"34":5,"35":6,"36":7,"37":8,"38":9,"39":10,"40":1,"41":2,"42":3,"43":4,"44":5,"45":6,"46":7,"47":8,"48":9,"49":10,"50":1,"51":2,"52":3,"53":4,"54":5,"55":6,"56":7,"57":8,"58":9,"59":10},"language":{"0":"swift","1":"swift","2":"swift","3":"swift","4":"swift","5":"swift","6":"swift","7":"swift","8":"swift","9":"swift","10":"python","11":"python","12":"python","13":"python","14":"python","15":"python","16":"python","17":"python","18":"python","19":"python","20":"javascript","21":"javascript","22":"javascript","23":"javascript","24":"javascript","25":"javascript","26":"javascript","27":"javascript","28":"javascript","29":"javascript","30":"java","31":"java","32":"java","33":"java","34":"java","35":"java","36":"java","37":"java","38":"java","39":"java","40":"c#","41":"c#","42":"c#","43":"c#","44":"c#","45":"c#","46":"c#","47":"c#","48":"c#","49":"c#","50":"kotlin","51":"kotlin","52":"kotlin","53":"kotlin","54":"kotlin","55":"kotlin","56":"kotlin","57":"kotlin","58":"kotlin","59":"kotlin"},"total_challenges_solved":{"0":107,"1":106,"2":105,"3":105,"4":105,"5":105,"6":105,"7":103,"8":101,"9":100,"10":108,"11":108,"12":107,"13":107,"14":107,"15":106,"16":105,"17":"private","18":105,"19":"private","20":109,"21":109,"22":109,"23":108,"24":108,"25":106,"26":"private","27":106,"28":"private","29":105,"30":107,"31":107,"32":106,"33":106,"34":106,"35":106,"36":106,"37":106,"38":106,"39":105,"40":6,"41":6,"42":6,"43":"private","44":"private","45":"private","46":6,"47":6,"48":6,"49":6,"50":6,"51":6,"52":"private","53":"private","54":"private","55":6,"56":"private","57":6,"58":6,"59":6},"total_challenges_solved_all_languages":{"0":107,"1":114,"2":105,"3":105,"4":213,"5":107,"6":146,"7":103,"8":102,"9":100,"10":165,"11":129,"12":146,"13":113,"14":179,"15":110,"16":105,"17":"private","18":237,"19":"private","20":144,"21":120,"22":125,"23":114,"24":141,"25":191,"26":"private","27":108,"28":"private","29":135,"30":214,"31":113,"32":110,"33":118,"34":120,"35":233,"36":113,"37":205,"38":142,"39":237,"40":85,"41":144,"42":84,"43":"private","44":"private","45":"private","46":135,"47":165,"48":237,"49":146,"50":85,"51":135,"52":"private","53":"private","54":"private","55":84,"56":"private","57":6,"58":118,"59":165},"total_easy_solved":{"0":60,"1":64,"2":59,"3":59,"4":131,"5":60,"6":88,"7":57,"8":60,"9":58,"10":88,"11":82,"12":79,"13":66,"14":112,"15":63,"16":59,"17":"private","18":129,"19":"private","20":79,"21":68,"22":76,"23":67,"24":74,"25":116,"26":"private","27":61,"28":"private","29":69,"30":125,"31":67,"32":64,"33":64,"34":69,"35":134,"36":67,"37":117,"38":79,"39":129,"40":44,"41":79,"42":35,"43":"private","44":"private","45":"private","46":69,"47":88,"48":129,"49":79,"50":44,"51":69,"52":"private","53":"private","54":"private","55":35,"56":"private","57":2,"58":64,"59":88},"total_medium_solved":{"0":34,"1":35,"2":33,"3":33,"4":59,"5":34,"6":42,"7":33,"8":31,"9":31,"10":54,"11":34,"12":44,"13":34,"14":49,"15":34,"16":33,"17":"private","18":74,"19":"private","20":44,"21":36,"22":35,"23":34,"24":44,"25":51,"26":"private","27":34,"28":"private","29":43,"30":65,"31":33,"32":33,"33":37,"34":35,"35":74,"36":33,"37":64,"38":41,"39":74,"40":24,"41":44,"42":30,"43":"private","44":"private","45":"private","46":43,"47":54,"48":74,"49":44,"50":24,"51":43,"52":"private","53":"private","54":"private","55":30,"56":"private","57":2,"58":37,"59":54},"total_hard_solved":{"0":13,"1":15,"2":13,"3":13,"4":23,"5":13,"6":16,"7":13,"8":11,"9":11,"10":23,"11":13,"12":23,"13":13,"14":18,"15":13,"16":13,"17":"private","18":34,"19":"private","20":21,"21":16,"22":14,"23":13,"24":23,"25":24,"26":"private","27":13,"28":"private","29":23,"30":24,"31":13,"32":13,"33":17,"34":16,"35":25,"36":13,"37":24,"38":22,"39":34,"40":17,"41":21,"42":19,"43":"private","44":"private","45":"private","46":23,"47":23,"48":34,"49":23,"50":17,"51":23,"52":"private","53":"private","54":"private","55":19,"56":"private","57":2,"58":17,"59":23},"total_points_all_challenges":{"0":900,"1":970,"2":885,"3":885,"4":1705,"5":900,"6":1180,"7":875,"8":830,"9":820,"10":1440,"11":1010,"12":1295,"13":930,"14":1410,"15":915,"16":885,"17":"private","18":2065,"19":"private","20":1255,"21":1020,"22":1010,"23":935,"24":1270,"25":1570,"26":"private","27":905,"28":"private","29":1235,"30":1755,"31":925,"32":910,"33":1030,"34":1015,"35":1910,"36":925,"37":1705,"38":1245,"39":2065,"40":800,"41":1255,"42":855,"43":"private","44":"private","45":"private","46":1235,"47":1440,"48":2065,"49":1295,"50":800,"51":1235,"52":"private","53":"private","54":"private","55":855,"56":"private","57":70,"58":1030,"59":1440}}) 
    const [top1Data, setTop1Data] = useState({"users":{"0":"ahmed0ksa","10":"TheAwiteb","20":"shuruqsaeed","30":"sircaesar","40":"salman","50":"salman"},"points":{"0":921.0,"10":926.0,"20":931.0,"30":916.0,"40":91.0,"50":91.0},"rank":{"0":1,"10":1,"20":1,"30":1,"40":1,"50":1},"language":{"0":"swift","10":"python","20":"javascript","30":"java","40":"c#","50":"kotlin"},"total_challenges_solved":{"0":107,"10":108,"20":109,"30":107,"40":6,"50":6},"total_challenges_solved_all_languages":{"0":107,"10":165,"20":144,"30":214,"40":85,"50":85},"total_easy_solved":{"0":60,"10":88,"20":79,"30":125,"40":44,"50":44},"total_medium_solved":{"0":34,"10":54,"20":44,"30":65,"40":24,"50":24},"total_hard_solved":{"0":13,"10":23,"20":21,"30":24,"40":17,"50":17},"total_points_all_challenges":{"0":900,"10":1440,"20":1255,"30":1755,"40":800,"50":800}})
    const [challengesData, setChallengesData] = useState([50, 31, 11, 98])

    useEffect(() => {
        fetch("https://analyze-coderhub.herokuapp.com/challenges_data")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setChallengesData(
                [
                    data.easy_challenges, 
                    data.medium_challenges,
                    data.hard_challenges,
                    data.all_challenges,
                ])})
    }, [])
    
    useEffect(() => {
        fetch("https://analyze-coderhub.herokuapp.com/top1_users_data")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setTop1Data(data)})
    }, 
    [])

    useEffect(() => {
        fetch("https://analyze-coderhub.herokuapp.com/top10_users_data")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setTop10Data(data)
            setIsLoading(false)})
    }, 
    [])
    const langs = [...new Set(Object.values(top10Data.language))]

    const [selectedLang, setSelectedLang] = useState(langs[0])
    const [plot, setPlot] = useState(0)
    
    
    const qryUsersPerLang = [Object.values(top10Data.users), Object.values(top10Data.language)]
    const qryAllPoints = [Object.values(top10Data.total_points_all_challenges), Object.values(top10Data.language)]
    const qryPoints = [Object.values(top10Data.points), Object.values(top10Data.language)]
    const qryEasySolved = [Object.values(top10Data.total_easy_solved), Object.values(top10Data.language)]
    const qryMedSolved = [Object.values(top10Data.total_medium_solved), Object.values(top10Data.language)]
    const qryHardSolved = [Object.values(top10Data.total_hard_solved), Object.values(top10Data.language)]
    
    
    const user_lang = []
    const rank1PerLang = []
    const user_language_points = []
    const user_total_points = []

    const user_easy_solved_points = []
    const user_easy_solved_count = []

    const user_med_solved_points = []
    const user_med_solved_count = []

    const user_hard_solved_points = []
    const user_hard_solved_count = []

    const rank1Users = []

    for(let i = 0; i < langs.length; i++){
        let counter = 0
        qryUsersPerLang[1].forEach((itm, inx)=> {
            if(itm === langs[i] && counter < 1){
                rank1PerLang.push(qryUsersPerLang[0][inx])
                counter += 1
            }
        })
    }

    qryUsersPerLang[1].forEach((itm, inx)=> {
        if(itm === selectedLang){
            user_lang.push(qryUsersPerLang[0][inx])
        }
    })

    qryAllPoints[1].forEach((itm, inx)=> {
        if(itm === selectedLang){
            if(qryAllPoints[0][inx] != "private"){
                user_total_points.push(qryAllPoints[0][inx])
            }else{
                user_total_points.push(0)
            }
        }
    })

    qryPoints[1].forEach((itm, inx)=> {
        if(itm === selectedLang){
            user_language_points.push(qryPoints[0][inx])
        }
    })

    qryEasySolved[1].forEach((itm, inx)=> {
        if(itm === selectedLang){
            if(qryEasySolved[0][inx] != "private"){
                user_easy_solved_points.push((qryEasySolved[0][inx])*5)
                user_easy_solved_count.push(qryEasySolved[0][inx])
            }else{
                user_easy_solved_points.push(0)
                user_easy_solved_count.push(0)
            }
        }
    })

    qryMedSolved[1].forEach((itm, inx)=> {
        if(itm === selectedLang){
            if(qryMedSolved[0][inx] != "private"){
                user_med_solved_points.push((qryMedSolved[0][inx])*10)
                user_med_solved_count.push(qryMedSolved[0][inx])
            }else{
                user_med_solved_points.push(0)
                user_med_solved_count.push(0)
            }
        }
    })

    qryHardSolved[1].forEach((itm, inx)=> {
        if(itm === selectedLang){
            if(qryHardSolved[0][inx] != "private"){
                user_hard_solved_points.push((qryHardSolved[0][inx])*20)
                user_hard_solved_count.push(qryHardSolved[0][inx])
            }else{
                user_hard_solved_points.push(0)
                user_hard_solved_count.push(0)
            }
        }
    })


    const genPointsData = () => {
        return {
        labels: user_lang,
        datasets: [
            {
            label: 'Totel points for all challenges',
            backgroundColor: "#abb8c3",
            data: user_total_points,
            },
            {
            label: 'Totel points for easy challenges',
            backgroundColor: "#008b02",
            data: user_easy_solved_points,
            },
            {
            label: 'Totel points for medium challenges',
            backgroundColor: "#fcb900",
            data: user_med_solved_points,
            },
            {
            label: 'Totel points for hard challenges',
            backgroundColor: "#b80000",
            data: user_hard_solved_points,
            }
        ],
        };
    };

    const genChallengesData = () => {
        return {
        labels: user_lang,
        datasets: [
            {
            label: 'Totel solved easy challenges',
            backgroundColor: "#008b02",
            data: user_easy_solved_count,
            },
            {
            label: 'Totel solved medium challenges',
            backgroundColor: "#fcb900",
            data: user_med_solved_count,
            },
            {
            label: 'Totel solved hard challenges',
            backgroundColor: "#b80000",
            data: user_hard_solved_count,
            }
        ],
        };
    };

    const genPieData = () => {
        return {
        datasets: [
            {
            data: [
                challengesData[0],
                challengesData[1],
                challengesData[2]
            ],
            backgroundColor: ['#33bb35', '#fcb900', '#b80000'],
            label: 'Challenges',
            },
        ],
        labels: ['Easy', 'Medium', 'Hard'],
        };
    };

    const handleLangChange = (e)=> {
        setSelectedLang(e.target.value);
    }

    const bar_points = <Bar data={genPointsData()} options= {
        //Customize chart options
        {responsive: true,
        rotation:90,
        maxRotation: 90
        }
      }/>
    const bar_challenges = <Bar data={genChallengesData()} />

    const plots = [bar_points, bar_challenges]

    const handlePlotChange = (e) => {
        setPlot(e.target.value)
    }
    const tables = [<Top10Table id="top10-table" langs={langs} user_lang={user_lang} 
                                user_language_points={user_language_points}
                                handleLangChange={handleLangChange}
                                handlePlotChange={handlePlotChange} />,
                    <Top1Table langs={langs} users={top1Data.users} 
                                            rank1PerLang ={rank1PerLang}
                                            total_points = {Object.values(top1Data.total_points_all_challenges)} />]
    
    
    const [selectedTable, setSelectedTable] = useState(0)
    
    const vizOptionsLst = [<Card  className="slow-tran shadow p-2 shadow-lg rounded">
                        <Row>
                            <Col xs={1}>
                            <Button variant="btn d-none d-md-block" onClick={handleVisibility}><i class="bi bi-arrows-fullscreen"></i></Button>
                            </Col>
                            <Col md={11}>
                                <select className="form-select" onClick={handlePlotChange}>
                                    <option value={0}>Points</option>
                                    <option value={1}>Challenges</option>  
                                </select>
                            </Col>
                        </Row>
                        {plots[plot]}
                    </Card>,

                    <Card  className="shadow p-2 shadow-lg rounded">
                        <Button variant="btn d-none d-md-block expand-btn" onClick={handleVisibility}><i class="bi bi-arrows-fullscreen"></i></Button>
                        <DataPlot 
                            users={top1Data.users}
                            points={Object.values(top1Data.total_points_all_challenges)}
                        ></DataPlot>
                    </Card>]

    const [selectedViz, setSelectedViz] = useState(0)
    

    const handViewChang = (e) => {
        setSelectedTable(e.target.value)
        setSelectedViz(e.target.value)
    }
    return (
        <Container fluid>
            { isLoading && <p>updating data ...</p>}
            <Row >
                <Col xs={12} md={3}>
                    <Card className="h-75 shadow p-2 bg-success rounded  text-light d-none d-md-block">
                        <h2>{challengesData[0]}</h2>
                        <p>Easy challenges</p>
                    </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card className="h-75 shadow p-2 bg-warning rounded  text-light d-none d-md-block">
                        <h2>{challengesData[1]}</h2>
                        <p>Medium challenges</p>
                    </Card>
                </Col>

                <Col xs={12} md={3}>
                    <Card className="h-75 shadow p-2 pb-3 bg-danger rounded  text-light d-none d-md-block">
                        <h2>{challengesData[2]}</h2>
                        <p>Hard challenges</p>
                    </Card>
                </Col>

                <Col xs={12} md={3}>
                    <Card className="h-75 shadow p-2 rounded d-none d-md-block ">
                        <h2>{challengesData[3]}</h2>
                        <p>All challenges</p>
                    </Card>
                </Col>
                <Card className="d-block d-md-none d-flex ">
                    <h3 className="align-self-center">All challenges 98</h3>
                    <Doughnut data={genPieData()} />
                </Card>
                <Col lg={3} ml={1}>
                    <select className="form-select" onClick={handViewChang}>
                        <option value={0}>Top 10</option>
                        <option value={1}>Rank 1</option>  
                    </select>
                    { visibiliity && tables[selectedTable]}
                </Col>
                <Col lg={plotSize}>
                    {vizOptionsLst[selectedViz]}
                </Col>
            </Row>
        </Container>
    );
}

export default Home;