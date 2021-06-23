import React, {useState} from 'react'


const Button = (props) => (
    <button onClick = {props.click}>
    {props.text}
    </button>
)

const Stats = (props) => {

  return (
    <div>
      {props.text} {props.value}
    </div>

  )


}

const Statistics = (props) => {
  if(props.arr[0] > 0)
  return (
    <div>
    <table>
    <tr><Stats value = {props.arr[0]} text = 'good' /></tr>
    <tr><Stats value = {props.arr[1]} text = 'neutral'/></tr>
    <Stats value = {props.arr[2]} text = 'bad' />
    <Stats value = {props.arr[3]} text = 'all' />
    <Stats value = {(props.arr[0]*1 - props.arr[2]*1)/props.arr[3]} text = 'average' />
    <Stats value = {props.arr[0]/props.arr[3]} text = 'positive' />
    </table>
    </div>

  )
  return(
    <div>
      No feedback given
    </div>
  )


}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const arr = [good, neutral, bad, all]

  const handleGoodClick = () => {
    setGood(good+1)
  }



  return(
    <div>
    <h1> give feedback </h1>

    <Button click = {() => setGood(good+1)} text = 'good' />


    <button onClick = { () => setNeutral(neutral+1)}>neutral</button>
    <button onClick = { () => setBad(bad+1)}>bad</button>

    <Statistics arr = {arr} />

    </div>






  )
}

export default App
