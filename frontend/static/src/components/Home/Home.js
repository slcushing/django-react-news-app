import { useState,useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom'

function Home(props) {
    const [articles, setArticleList] = useState([]);

    useEffect(() => {
        const category = props.match.params.category;
        let url = '/api_v1/articles/';
        if(category) {
            url = `/api_v1/articles/?category=${category}`;
        }
        async function getArticles(){
            const response = await fetch(url);
            const data = await response.json();
            console.log("articles", data);
          
            setArticleList(data);
        }
        getArticles();
    }, []);

    // const articlesHTML = (
    //     <div className='article'>
    //         <h3>{props.title}</h3>
    //         <p>{props.author}</p>
    //         <p>{props.body}</p>
    //     </div>
    // )

    const ArticleListHTML = articles.map(article =>
        <div key={article.id} className='article'>
            <h3>{article.title}</h3>
            <p>{article.username}</p>
            <p>{article.body}</p>
        </div>
    );


    return(
        <>
        <header className='home-header'>Thoughtful Media Collective</header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <ul className='navbar-nav ml-auto'>
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
        <section className='article-section'>
            {ArticleListHTML}
        </section>
        </>
    )
}

export default withRouter(Home);