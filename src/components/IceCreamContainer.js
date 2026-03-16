import React from 'react'
import { buyIceCreams } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of IceCream</h2>
        <button onClick={props.buyIceCreams}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCreams: () => dispatch(buyIceCreams())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
