import React from 'react'
import { useEffect, useState } from 'react';
import BarGraph from './BarGraph';
import Doughnut from './Doughnut';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Insights = () => {
    let [insights, setInsights] = useState([]);


    useEffect(() => {
        getData()
    }, [])

    let getData = async () => {
        let response = await fetch('/api/')
        let data = await response.json()
        setInsights(data)
    }

    return (
        <div className='container'>
            <div className="row g-3">
                <div className="col-12">
                    <BarGraph insights={insights} />
                </div>
                <div className="col-md-6 mt-5">
                    <PieChart insights={insights} />
                </div>
                <div className="col-md-6 mt-5">
                    <Doughnut insights={insights} />
                </div>
                <div className="col-12">
                    <LineChart insights={insights} />
                </div>
            </div>
        </div>
    )
}

export default Insights