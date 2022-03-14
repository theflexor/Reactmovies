import React from 'react'
import { category } from '../../api/tmDbApi'

import './movie-card.scss'

const MovieCard = props => {
     const item = props.item
     const link = '/' + category[props.poster_path] + '/' + item.id
     return (
          <div>

          </div>
     )
}

export default MovieCard