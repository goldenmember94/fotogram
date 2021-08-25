import './TimeLine.css'

import ItemCard from '../../components/ItemCard/ItemCard'

function TimeLine(props) {

  return (
    <div className="TimeLine__wrapper">
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
    </div>
  )
} 

export default TimeLine