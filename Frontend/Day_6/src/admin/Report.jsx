import React from 'react'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';
import Header from './Header';
import Sidebar from './Sidebar';
import '..//admin/admin.css'
import { Tooltip } from 'bootstrap';

export default function Report() {

// const data = [
//   {
//     subject: 'Math',
//     A: 120,
//     B: 110,
//     fullMark: 150,
//   },
//   {
//     subject: 'Chinese',
//     A: 98,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'English',
//     A: 86,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'Geography',
//     A: 99,
//     B: 100,
//     fullMark: 150,
//   },
//   {
//     subject: 'Physics',
//     A: 85,
//     B: 90,
//     fullMark: 150,
//   },
//   {
//     subject: 'History',
//     A: 65,
//     B: 85,
//     fullMark: 150,
//   },
// ];

const data = [
    {
      name: 'Wedding',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'artist',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'School/College',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Corporate',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Outdoor',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Concert',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  
  ];
  return (
<>
        <Header/>
        <Sidebar/>
       {/* <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>

    </ResponsiveContainer> */}
      <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

      <h2>Reports</h2>
    </div>
                </>
  )
}
