import { useState,useEffect } from 'react';
import { NavLink, withRouter, useLocation } from 'react-router-dom'

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
            <aside className='home-aside'>This is an aside.</aside>
        </div>
        </>
    )
}

export default withRouter(Home);