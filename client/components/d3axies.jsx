import React, { useState, useEffect } from 'react'
import { select, axisBottom } from 'd3'
import { scaleLinear } from 'd3-scale'

const X_MARGIN = 20
const Y_MARGIN = 50
const DEF_WIDTH = 400
const DEF_HEIGHT = 400

const [minDomain, maxDomain] = [0, 1000]

const drawLine = ({ width }) => {
  const scaleX = scaleLinear()
    .domain([minDomain, maxDomain])
    .range([X_MARGIN, width - X_MARGIN * 2])

  // const scaleY = scaleLinear()
  //   .domain([minDomain, maxDomain])
  //   .range([Y_MARGIN, height - Y_MARGIN])
  const xAxis = axisBottom().scale(scaleX)
  // const yAxis = axisLeft().scale(scaleY)
  select('#chart')
    .append('g')
    .attr('transform', `translate(${X_MARGIN}, ${DEF_HEIGHT - Y_MARGIN})`)
    .call(xAxis)
}

const D3Axies = () => {
  const [width] = useState(DEF_WIDTH)
  const [height] = useState(DEF_HEIGHT)
  useEffect(() => {
    drawLine({ width, height })
  }, [])
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-900 flex flex-wrap content-around justify-center px-5 py-5">
        <div className="bg-indigo-600 text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
          <div className="flex items-end">
            <svg width={width} height={height} id="chart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default D3Axies
