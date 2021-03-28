import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import axios from 'axios'

import Header from '../../components/Header/Header';
import Movie from '../../components/Movies/Movies';

// Endpoints API The movieDB
// eslint-disable-next-line
import {pathImg, baseUrl, search, multi, discover,
    // eslint-disable-next-line
    movie, series, popular, topRated, upcoming,
    // eslint-disable-next-line
    nowPlaying, apiKey, page, genres} from '../../api/ApiMovieDB'

function User(props) {

    // HOOKS
    const [films, setFilms] = useState({})

    const call = async (url) => {
        let res = await axios.get(url);
        
        if(res.data.results)
            return res.data.results;
        if(res.data.title)
            return res.data;
        else{
            return new Error("The URL was wrong!");
        }
    };


    const searchByGenre = async (value) => {
        let url = `${baseUrl}${discover}${movie}${apiKey}&with_genres=${value}`
        let movies = await call(url)
        return movies
    }

    const mapGenres = async (object) => {
        let filmCollection = {};
        for(let key in object) {
            let movies = await searchByGenre(object[key])
            filmCollection[key] = movies
        }
        return setFilms(filmCollection)
    }

    useEffect(()=>{
        mapGenres(genres)
    },[])



    return (
        <div className="userComponent">
          <Header>
            <div className="navbar">
                Aqui van todos los botones del header para navegar con justify-content space-between
            </div>
          </Header>
          <div className="carouselMovies">
                {
                    Object.keys(genres).map((genre, index) =>{
                        return(
                            <Movie key={index} title={genre} class={genre}>
                                {
                                    films[genre]?.map((film) =>{
                                        return( 
                                            <div className='movieCollection' key={film.id}>
                                                <img className="filmPoster" alt={film.poster_path} src={pathImg+film.poster_path}/>
                                            </div>
                                        )
                                    })
                                }
                            </Movie>
                        )
                    })
                }      
          </div>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        user : state.userReducer.user,
        token : state.userReducer.token,
    }
};

export default connect(mapStateToProps)(User);
