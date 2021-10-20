import "../styles/UserSearch.css"
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DisplayUserData from "./DisplayUserData";

const UserSearch = () => {
  const [errMsg, setErrMsg] = useState('')
  
  const [languages, setLanguags] = useState()
  const [easySolved, setEasySolved] = useState()
  const [mediumSolved, setMediumSolved] = useState()
  const [hardSolved, setHardSolved] = useState()
  const [totalSolved, setTotalSolved] = useState()
  const [totalPoints, setTotalPoints] = useState()

  const [enteredUserName, setEnteredUserName] = useState()
  const [isBtnDisabled, setBtnDisabled] = useState('disabled')
  
  const handleDisableBtn = (e)=> {
    if(e.target.value){
      setErrMsg('')
      setEnteredUserName(e.target.value)
      setBtnDisabled('contained')
    }else{
      setBtnDisabled('disabled')
    }
  }

  const handleSubmit = (e) => {
    setBtnDisabled('disabled')
    e.preventDefault()
    
    
    fetch("https://analyze-coderhub.herokuapp.com/user_data/"+String(enteredUserName))
    .then(res => res.json())
    .then(data => {
      try{
        setLanguags([Object.values(data.language)])
        setEasySolved([Object.values(data.easy_solved)])
        setMediumSolved([Object.values(data.medium_solved)])
        setHardSolved([Object.values(data.hard_solved)])
        setTotalSolved([Object.values(data.total_solved)])
        setTotalPoints([Object.values(data.total_points)])
      }catch(e){
        setErrMsg('user not found or user profile is private')
      }
    })
    }
    return (
      <>
        <Box
          sx={{
            py: 3
          }}
          style={{textAlign: "center"}}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={2}
              justifyContent="center"
            >
              <Grid
                item
                lg={12}
                md={6}
                xs={12}
              >
              {(!(totalSolved, totalPoints, languages)) && <Typography 
                variant="h2"

              >
              search for a user by username.
              </Typography>}
              <Typography
                    variant="p"
                    color='error'
                  >
                  {errMsg}
                  </Typography>   
              </Grid>
              <Grid
                item
                xs={12}
              > 
                
                <form noValidate autoComplete="off" onSubmit={handleSubmit} >
                  <Grid>
                  <TextField 
                    id="outlined-basic" 
                    label="username" 
                    variant="outlined"
                    required
                    onChange= {(e) => handleDisableBtn(e)}
                  />
                  </Grid>
                  <Grid>
                  <Button
                      variant={isBtnDisabled}
                      type='submit'
                      color="primary"
                      sx={{mt:3}}
                  >
                  Search</Button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
            {(languages, easySolved, mediumSolved,
              hardSolved, totalSolved, totalPoints, enteredUserName) && 
            (<DisplayUserData
              languages = {languages}
              easySolved= {easySolved}
              mediumSolved= {mediumSolved}
              hardSolved= {hardSolved}
              totalSolved = {totalSolved}
              totalPoints = {totalPoints}
              enteredUserName = {enteredUserName}
            />)}
          </Container>
        </Box>
      </>
    );
}
export default UserSearch;



