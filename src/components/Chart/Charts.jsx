import React ,{useState,useEffect} from 'react';
import{fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2'
const  Charts = () => {
    const [dailyData, setDailyData] = useState([]);


    useEffect(()=>{
        const fetchAPI = async()=>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });
 


    const lineChart = (
        dailyData.length 
        ? (
            <Line
            data = {{
                label:dailyData(({date}) => date),
                datasets:[{
                    data: dailyData(({confirmed})=>confirmed),
                    label:"Infected",
                    borderColor:'#333ff',
                    fill:true,
                },{
                    data: dailyData(({deaths})=>deaths),
                    label:"Deaths",
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
                }],
            }}
            />): null
        )

    );
    return(


       <div className={styles.container}>
              {lineChart}
       </div>
    )
}

export default Charts;