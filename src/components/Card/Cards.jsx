import React  from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames'
import styles from './Cards.module.css';
const  Cards = ({data: {confirmed,recovered,deaths,lastUpdate} }) => {
    console.log(lastUpdate)
    if(!confirmed){
        return 'Loading...';
    }

    return(
     <div className={styles.container}>
         <Grid container spacing={3} justify="center">
             <Grid item component = {Card} xs ={12} md={3} className={cx(styles.card,styles.infected)}>
                 <CardContent>
                     <Typography color ="textSecondary" gutterbottom>Infected</Typography>
                     <Typography varaint ="h5">
                         <CountUp
                          start={0}
                          end={confirmed.value}
                          duration = {2.5}
                          separator = ","/>
                        </Typography>
                     <Typography color ="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography varaint ="h5" >no of infected cases</Typography>
                 </CardContent>
             </Grid>
             <Grid item component = {Card}xs ={12} md={3} className={cx(styles.card,styles.recovered)}>
                 <CardContent>
                     <Typography color ="textSecondary" gutterbottom>Recovered</Typography>
                     <Typography varaint ="h5">
                         <CountUp
                          start={0}
                          end={recovered.value}
                          duration = {2.5}
                          separator = ","/>
                        </Typography>
                     <Typography color ="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                     
                     <Typography varaint ="h5" >no of Recovered cases</Typography>
                 </CardContent>
              </Grid>
              <Grid item component = {Card} xs ={12} md={3} className={cx(styles.card,styles.deaths)}>
                 <CardContent>
                     <Typography color ="textSecondary" gutterbottom>Deaths</Typography>
                     <Typography varaint ="h5">
                         <CountUp
                          start={0}
                          end={deaths.value}
                          duration = {2.5}
                          separator = ","/>
                        </Typography>
                     <Typography color ="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography varaint ="h5" >no of deaths</Typography>
                 </CardContent>
              </Grid>
         </Grid>



    </div>   
    )
}

export default Cards;


