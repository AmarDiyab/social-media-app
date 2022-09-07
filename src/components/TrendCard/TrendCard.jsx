import React from 'react'
import { TrendData } from '../Data/TrendData'
import './TrendCard.css'

function TrendCard() {
  return (
    <div className='TrendCard'>
        <h3>Trending</h3>
        {TrendData.map((trend) => {
            return (
                <div className="Trends">
                    <span>#{trend.name}</span>
                    <span>{trend.shares}k Shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard