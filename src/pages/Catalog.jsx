import React from 'react'
import { useParams } from 'react-router-dom'
import { category as cate } from '../api/tmDbApi'
import MovieGrid from '../components/movie-grid/MovieGrid';
import PageHeader from '../components/page-header/PageHeader';
const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : 'Tv Series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  )
}

export default Catalog