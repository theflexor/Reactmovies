import React, { useEffect, useState, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../api/tmDbApi';
import { OutlineButton } from '../button/Button';
import Input from '../input/Input';
import MovieCard from '../movie-card/MovieCard'

import './movie-grid.scss'
const MovieGrid = (props) => {
     const [items, setItems] = useState([])
     const [page, setPage] = useState(1)
     const [totalPage, setTotalPage] = useState(0);
     const { keyword } = useParams()

     useEffect(() => {
          const getList = async () => {
               let params = {}
               let response = null
               if (keyword === undefined) {
                    switch (props.category) {
                         case category.movie:
                              response = await tmdbApi.getMoviesList(movieType.upcoming, { params })
                              break;

                         default:
                              response = await tmdbApi.getTvList(tvType.popular, { params })
                              break;
                    }
               } else {
                    const params = {
                         query: keyword
                    }
                    response = await tmdbApi.search(props.category, { params })
               }
               setItems(response.results)
               setTotalPage(response.total_pages)
          }
          getList()
     }, [keyword, props.category])

     let loadMore = async () => {
          let params = {
               page: page + 1
          }
          let response = null
          if (keyword === undefined) {
               switch (props.category) {
                    case category.movie:
                         response = await tmdbApi.getMoviesList(movieType.upcoming, { params })
                         break;

                    default:
                         response = await tmdbApi.getTvList(tvType.popular, { params })
                         break;
               }
          } else {
               const params = {
                    query: keyword,
                    page: page + 1
               }
               response = await tmdbApi.search(props.category, { params })
          }
          setItems([...items, ...response.results])
          setPage(page + 1)
     }
     return (
          <>
               <div className="section mb-3">
                    <MovieSearch category={props.category} keyword={keyword} />
               </div>
               <div className='movie-grid'>
                    {
                         items.map((item, i) => <MovieCard category={props.category} item={item} key={i} />)
                    }
               </div>
               {
                    page < totalPage ? (
                         <div className="movie-grid__loadmore">
                              <OutlineButton onClick={loadMore}>Load More</OutlineButton>
                         </div>
                    ) : null
               }
          </>
     )
}


const MovieSearch = props => {
     const history = useHistory()
     const [keyword, setKeyWord] = useState(props.keyword ? props.keyword : '')

     const goToSearch = useCallback(
          () => {
               if (keyword.trim().length > 0) {
                    history.replace(`${category[props.category]}/search/${keyword}`)
                    console.log(history);
               }
          },
          [history, keyword, props.category]
     )
     useEffect(() => {
          const enterEvent = (e) => {
               e.preventDefault()
               if (e.keyCode === 13) {
                    goToSearch()
               }
          }
          document.addEventListener('keyup', enterEvent)
          return () => {
               document.removeEventListener('keyup', enterEvent)
          }
     }, [goToSearch, keyword])
     return (
          <div className="movie-search" >
               <Input
                    type='text'
                    placeholder='Enter keyword'
                    value={keyword}
                    onChange={(e) => setKeyWord(e.target.value)}
               />
          </div >
     )
}

export default MovieGrid