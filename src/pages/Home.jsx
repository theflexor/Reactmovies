import React from 'react'
import { Link } from 'react-router-dom'
import { category, movieType, tvType } from '../api/tmDbApi'
import { OutlineButton } from '../components/button/Button'
import HeroSilde from '../components/hero-slide/HeroSlide'
import MovieList from '../components/movie-list/MovieList'
const Home = () => {
  return (
    <>
      <HeroSilde />
      <div className="container">
        {/* popular */}
        <div className="section mb-3">
            <h2>Trending Movies</h2>
          <div className="section__header mb-2">
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        {/* rated */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        {/* tv */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Tranding TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  )
}

export default Home