const apiConfig = {
     baseUrl: 'https://api.themoviedb.org/3/',
     apiKey: '30321184b6129976d05590984fd8a8ea',
     originalImage: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
     w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig