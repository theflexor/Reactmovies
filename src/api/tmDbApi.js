import axiosClient from "./axiosClient";


export const category = {
    movie: 'movie',
    tv: 'tv'
}
export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',

}
export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',

}


const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type]
        return axiosClient.get(url, params)
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type]
        return axiosClient.get(url, {language: 'ru', ...params})
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos'
        return axiosClient.get(url, {params: {language: 'ru'}})
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate]
        return axiosClient.get(url, {language: 'ru', ...params})
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id + 'credits'
        return axiosClient.get(url, {params: {language: 'ru'}})
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar'
        return axiosClient.get(url, {params: {language: 'ru'}})
    },
    credits: (cate, id) => {
        // eslint-disable-next-line no-useless-concat
        const url = category[cate] + '/' + id + '/' + 'credits'
        return axiosClient.get(url, {params: {language: 'ru'}})
    }
}

export default tmdbApi