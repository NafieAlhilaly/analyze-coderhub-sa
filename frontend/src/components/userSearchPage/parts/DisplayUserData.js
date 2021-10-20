import TotalPointsCard from '../cards/TotalPointsCard'
import TotalSolvedCard from '../cards/TotalSolvedCard'
import VizCard from "../cards/VizCard"
import DunCard from "../cards/DunCard"
import TableCard from "../cards/TableCard"
import LangCard from "../cards/LangCard"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@material-ui/core'

const DisplayUserData = ({languages, 
  easySolved,
  mediumSolved, 
  hardSolved,
  totalSolved, 
  totalPoints,
  enteredUserName
}) => {
    return (
        <>
    <Box
      sx={{
        minHeight: '100%',
        py: 1
      }}
    >
      <Container maxWidth={true}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            {(languages && totalSolved && totalPoints) &&
            (<TotalPointsCard totalPoints = {totalPoints}/>)}
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
          {(languages && totalSolved && totalPoints) &&
            (<TotalSolvedCard totalSolved = {totalSolved}/>)}
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            {(languages && totalSolved && totalPoints) &&
            (<LangCard 
                languages = {languages}
                totalSolved = {totalSolved}
            />)}
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            {/*<TotalProfit sx={{ height: '100%' }} />*/}
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            {(languages && totalSolved && totalPoints)&&(
            <VizCard 
                totalPoints = {totalPoints}
                totalSolved = {totalSolved}
                languages = {languages}    
            />)}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {(languages && totalSolved && totalPoints)&&(
            <DunCard
                languages = {languages}
                totalPoints = {totalPoints}
                totalSolved = {totalSolved}
            />
            )}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/*<LatestProducts sx={{ height: '100%' }} />*/}
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            {( languages, easySolved, mediumSolved,
              hardSolved, totalSolved, totalPoints)&&(
              <TableCard 
                languages= {languages}
                easySolved={easySolved}
                mediumSolved= {mediumSolved}
                hardSolved={hardSolved}
                totalSolved = {totalSolved}
                totalPoints = {totalPoints}
              />)}
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            {( languages, easySolved, mediumSolved,
              hardSolved, totalSolved, totalPoints, 
              enteredUserName)&&(
              <a href={"https://analyze-coderhub.herokuapp.com/user_file/"+enteredUserName}>get sheet file</a>)}
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
    );
}

export default DisplayUserData;