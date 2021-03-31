import React from 'react'
import {pathImg} from '../../api/ApiMovieDB'
import ModalRender from '../../containers/Modal/ModalRender'
import Cart from '../Cart/Cart'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import Header from '../Header/Header'
import NavBtn from '../NavBtn/NavBtn'
import NavMenu from '../NavMenu/NavMenu'
import SearchBox from '../SearchBox/SearchBox'
import {connect} from 'react-redux';

function MultiSearch(props) {

    const multiSearch = props.search.search
    
    console.log(multiSearch)

    return (
        <div className="userComponent">
            <Header>
                <div className="navbar">
                    <NavMenu/>
                    <div className="searchNavbar">
                        <SearchBox />
                    </div>
                    <div className="cartCounter">
                        <Cart/>
                    </div>
                    <NavBtn>
                        <DropDownMenu/>
                    </NavBtn> 
                </div>
            </Header>
            <div className="multiSearchComponent">

                {
                    multiSearch[0].known_for
                    ?
                    <>
                        <div className='searchByCast'>
                            <div className="cast">
                                <img className="castImg" alt='person' src={pathImg+multiSearch[0].profile_path}/>
                                <h4>{multiSearch[0].name}</h4>
                            </div>
                            <h4>Known for:</h4>
                            <div className='searchGrid'>
                                {
                                    multiSearch[0].known_for.map((film) =>{
                                        if(film.poster_path)
                                        return( 
                                            <div className='d' key={film.id}>
                                                <ModalRender title={film.title} id={film.id} originalLanguage={film.original_language}
                                                originalTitle={film.original_title} overview={film.overview} releaseDate={film.release_date} 
                                                voteAverage={film.vote_average} backdropPath={pathImg+film.backdrop_path} genres={film.genre_ids} imgFilm={pathImg+film.poster_path}
                                                >
                                                    <img className="filmPoster" alt={film.poster_path} src={pathImg+film.poster_path}/>
                                                </ModalRender>
                                            </div>
                                        )

                                    })
                                }{
                                    multiSearch.map((film) => {
                                        if(film.poster_path)
                                        return( 
                                            <div key={film.id}>
                                                <ModalRender title={film.title} id={film.id} originalLanguage={film.original_language}
                                                originalTitle={film.original_title} overview={film.overview} releaseDate={film.release_date} 
                                                voteAverage={film.vote_average} backdropPath={pathImg+film.backdrop_path} genres={film.genre_ids} imgFilm={pathImg+film.poster_path}
                                                >
                                                    <img className="filmPoster" alt={film.poster_path} src={pathImg+film.poster_path}/>
                                                </ModalRender>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='searchGrid'>
                            {   
                                multiSearch.map((film) =>{
                                    if(film.poster_path)
                                    return( 
                                        <div className='d' key={film.id}>
                                            <ModalRender title={film.title} id={film.id} originalLanguage={film.original_language}
                                            originalTitle={film.original_title} overview={film.overview} releaseDate={film.release_date} 
                                            voteAverage={film.vote_average} backdropPath={pathImg+film.backdrop_path} genres={film.genre_ids} imgFilm={pathImg+film.poster_path}
                                            >
                                                <img className="filmPoster" alt={film.poster_path} src={pathImg+film.poster_path}/>
                                            </ModalRender>
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </>
                }
                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        search: state.searchReducer
    }
};

export default connect(mapStateToProps)(MultiSearch);
