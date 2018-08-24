import React from 'react';
import PropTypes from 'prop-types'; // 원래는 React에서 PropTypes를 제공해주었으나, 지금은 제공하지 않기 때문에 yarn을 통해 따로 설치
import './Movie.css';

// App 이라는 대빵 컴포넌트가 있고,
// 또 Movie 라는 컴포넌트 안에 MoviePoster라는 작은 컴포넌트가 있는 것이다.

// Component -> render -> return -> JSX
// 컴포넌트는 항상 render & return 해야한다.
// JSX의 명령을 실행시키기 위해서는 {}를 꼭 쳐야한다.
function Movie({title, poster, genre, synopsis}) {
    return(
        <div className="Movie">
            <div className="Movie__Columns">
            <MoviePoster poster={poster} alt={title}/>
            </div>

            <div className="Movie__Columns">

                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genre.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                    {genre.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>

                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>

        </div>
    )
}

// 큰 컴포넌트 안에 작은 컴포넌트를 집어넣는 방식으로 작업 진행
function MoviePoster({poster, alt}) {

    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )

}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

//props type을 확인하는 방법
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}


// app.js로 해당 컴포넌트를 내보낸다.
export default Movie;