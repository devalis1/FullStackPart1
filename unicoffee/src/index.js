import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text,  handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)
const Statistics = ({good, neutral, bad}) => {
  const total = bad+good+neutral
  const average = ((good*1)+(neutral*0)+(bad*-1))/total
  const positive = good*100 / total
  
  return (total === 0)
    ? (
      <div>
          <h1>statistics</h1>
          <p>no feedback given</p>
      </div>
  ) 
  :(
  <div>
    <h1>statistics</h1>
      <Statistic text= "good" value={good}/>
      <Statistic text= "neutral" value={neutral}/>
      <Statistic text= "bad" value={bad}/>
      <Statistic text= "all" value={total}/>
      <Statistic text= "average" value={average}/>
      <Statistic text= "positive" value={positive+'%'}/>  
  </div>
  )
}
const Statistic = ({text, value}) => (
  <tr>
    <td>{text}:</td>
    {value}
  </tr>
)
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <>
    <div>
          <h1>give feedback</h1>
          <Button text= "good" handleClick={() => setGood(good + 1)}/>{''}
          <Button text= "neutral" handleClick={() => setNeutral(neutral + 1)}/>{''}
          <Button text= "bad" handleClick={() => setBad(bad + 1)}/>
    </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))