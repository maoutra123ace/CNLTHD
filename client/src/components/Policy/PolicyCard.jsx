import React from 'react'
import PropTypes from 'prop-types'

const PolicyCard = props => {
  const {icon,color,size,name,description}=props
  return (
    <div className='policy-card'>
      <div className="policy-card__icon">
        <box-icon name={`${icon}`} color={`${color}`} size={`${size}`}> </box-icon>
      </div>
      <div className="policy-card__info">
        <div className="policy-card__info__name" >
         <p>{name}</p> 
        </div>
        <div className='policy-card__info__description'>
          {description}
        </div>
      </div>
    </div>
  )
}

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string

}

export default PolicyCard