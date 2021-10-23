import { useState, useEffect } from 'react'
import { NavLink, withRouter, useLocation } from 'react-router-dom'


function MyArticleList(props) {
    const [myarticles, setMyArticleList] = useState([]);
    const location = useLocation();
    const status = {
        draft: 'DFT',
        submitted: 'SUBM',
        published: 'PUBL',
        rejected: 'REJ',
    }

    useEffect(() => {
        const status_selection = props.match.params.status;
        let url = '/api_v1/articles/?status=ALL';
        if (status_selection) {
            url = `/api_v1/articles/?status=${status[status_selection]}`;
        }

        async function getMyArticleList() {
            const response = await fetch(url);
            const data = await response.json();

            setMyArticleList(data);
        }
        getMyArticleList();
    }, [location]);

    const MyArticleListHTML = myarticles.map(article =>
        <div key={article.id} className='article'>
            <img className='fit-picture' src={article.image} alt=''/>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <p>{article.status}</p>
        </div>
    );

    return (
        <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container d-flex justify-content-center'>
                <ul className='navbar-nav' id='secondary-nav'>
                    <li className='nav-item'>
                        <NavLink to='/articles/myarticles/'>ALL</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/articles/myarticles/draft'>DRAFT</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/articles/myarticles/submitted'>SUBMITTED</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/articles/myarticles/published'>PUBLISHED</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/articles/myarticles/rejected'>REJECTED</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <section className='my-article-section'>
            {MyArticleListHTML}
        </section>
        </>
    )
} 

export default withRouter(MyArticleList)