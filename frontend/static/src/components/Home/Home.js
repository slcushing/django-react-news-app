import { useState,useEffect } from 'react';
import { NavLink, withRouter, useLocation, Link} from 'react-router-dom'
import RegistrationForm from '../Registration/RegistrationForm';

function Home(props) {
    const [articles, setArticleList] = useState([]);
    const location = useLocation();

    const categories = {
        news: 'NEWS',
        health: 'HLTH',
        sports: 'SPRT',
        tech: 'TECH',
        opinion: 'OPIN',
    }

    useEffect(() => {
        const category_selection = props.match.params.category;
        let url = '/api_v1/articles/';
        if(category_selection) {
            url = `/api_v1/articles/?category=${categories[category_selection]}`;
        }
        async function getArticles(){
            const response = await fetch(url);
            const data = await response.json();
            console.log("articles", data);
          
            setArticleList(data);
        }
        getArticles();
    }, [location]);

    const ArticleListHTML = articles.map(article =>
        <div key={article.id} className='article'>
            <img className='fit-picture' src={article.image} alt=''/>
            <h3>{article.title}</h3>
            <p className='author'>written by: {article.username}</p>
            <p>{article.body}</p>
        </div>
    );


    return(
        <>
        <header className='home-header'>Thoughtful Media Co.</header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'id='secondary-full-bar'>
            <div className='container d-flex justify-content-center'>
                <ul className='navbar-nav' id='secondary-nav'>
                    <li className='nav-item'>
                        <NavLink to='/news'>News</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/health'>Health</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/sports'>Sports</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/tech'>Tech</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/opinion'>Opinion</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <div className='main-body'>
            <section className='article-section'>
                {ArticleListHTML} 
            </section>
            <aside className='home-aside'>
                <h4>Want to join our community?</h4>
                <div><Link to='/registration'>REGISTER HERE</Link></div>
                <h4>Thoughtful Media Co. Fueled By: </h4>
                <img src='media/IMG_4844.jpeg' alt='coffee'/>
                <div><a href='https://www.deathwishcoffee.com/' target="_blank" rel="noreferrer noopener" >Death Wish Coffee Co.</a></div>
                <img src='media/doggos.jpeg' alt='dogs'/>
                <div><a href="https://www.greenvillehumane.com/" target="_blank" rel="noreferrer noopener">Dogs</a></div>
                <img src='media/chicken-nuggets.jpeg' alt='Chicken Nuggets'/>
                <div><a href="https://www.mcdonalds.com/us/en-us/product/chicken-mcnuggets-4-piece.html" target="_blank" rel="noreferrer noopener">Chickie Nuggies</a></div>
                <img src='media/beer.jpeg' alt='Beer'/>
                <div><a href="https://www.gratefulbrewgvl.com/" target="_blank" rel="noreferrer noopener">Beer</a></div>
                <img src='media/TedLasso2.jpeg' alt='Ted Lasso'/>
                <div><a href="https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy" target="_blank" rel="noreferrer noopener">Ted Lasso</a></div>
            </aside>
        </div>
        <footer>© Carolina Code School - Cohort10</footer>
        </>
    )
}

export default withRouter(Home);