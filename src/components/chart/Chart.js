import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '一月',
    revenue: 4000,
  },
  {
    name: '二月',
    revenue: 3000,
  },
  {
    name: '三月',
    revenue: 2290,
  },
  {
    name: '四月',
    revenue: 2000,
  },
  {
    name: '五月',
    revenue: 4800,
  },
  {
    name: '六月',
    revenue: 3800
  },

];


const Chart = ({header,aspect}) => {
  return (
    <div className='chart'>
      <header className='header'>{header}</header>
      <ResponsiveContainer width="100%" aspect={aspect}>
      <AreaChart className='chart-container' data={data} >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#DF7861" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#DF7861" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis  />
        <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
        <Area type="monotone" dataKey="revenue" stroke="#DF7861" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart