const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    discover: '/discover',
    movie: '/movie',
    movies:'/movies',
    genre: '/genre',
    list: '/list',
    search:'/search',
    videos:'/videos',
    watchlist:'/watchlist',
    favorite:'/favorite'
}

const token =`'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWMzNjljYTdiZTk2NThiYmE2NTE5ZTkyYTIyM2UyMiIsInN1YiI6IjYzZWU2YzE0ODEzY2I2MDA4ZWM2MzQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0iqoQvbYk6qcCJ88BkIyrHvVznZK_WKXCrkLF4NSB3I`

export {
    baseURL,
    urls,
    token
}