import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { NavLink, withRouter, useLocation } from 'react-router-dom'


function AdminArticleList(props) {
    const [adminarticles, setAdminArticles] = useState([]);
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
            url = `/api_v1/articles/?status=${status[status_selection]}`
        }

        async function getAdminArticles() {
            const response = await fetch(url);
            const data = await response.json();

            setAdminArticles(data);
        }
        getAdminArticles();
    }, [location]);

    async function changeToPublished(event) {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                "X-CSRFToken": Cookies.get("csfrtoken"),
            },
            body: adminarticles.article,
        };
        const response = await fetch('/api_v1/articles/', options);
        if(!response) {
            console.log(response);
        } else {
            const data = await response.json();
        }
    } 

    async function changeToRejected(event) {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: adminarticles.article,
        };
        const response = await fetch('/api_v1/articles/', options);
        if(!response) {
            console.log(response);
        } else {
            const data = await response.json();
        }
    }

    // async function changeToArchived(event) {
    //     event.preventDefault();
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             "X-CSRFToken": Cookies.get("csrftoken"),
    //         },
    //         body: adminarticles.article,
    //     };
    //     const response = await fetch('/api_v1/articles/', options);
    //     if(!response) {
    //         console.log(response);
    //     } else {
    //         const data = await response.json();
    //     }
    // }

    
    const AdminArticleListHTML = adminarticles.map(article =>
        <div key={article.id} className='article'>
            <img className='fit-picture' src={article.image} alt=''/>
            <h3>{article.title}</h3>
            <p>{article.username}</p>
            <p>{article.body}</p>
            <p>{article.status}</p>
            <button type="button"
                    className="btn btn-primary mt-3"
                    name="SUBM"
                    value="PUBL"
                    onClick={changeToPublished}
            > Publish </button>
            <button type="button"
                    className="btn btn-primary mt-3"
                    name="SUBM"
                    value="REJ"
                    onClick={changeToRejected}
            > Reject </button>
        </div>
        );

    return (
        <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container d-flex justify-content-center'>
                <ul className='navbar-nav' id='secondary-nav'>
                    <li className='nav-item'>
                        <NavLink to='/articles/admin/'>ALL</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/articles/admin/submitted'>SUBMITTED</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/articles/admin/published'>PUBLISHED</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/articles/admin/rejected'>REJECTED</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <section className="admin-article-section">
            {AdminArticleListHTML}
        </section>
        </>
    )
}

export default withRouter(AdminArticleList)