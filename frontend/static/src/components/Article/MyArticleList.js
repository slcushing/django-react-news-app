//pull down articles based on user that's signed in
//ability to edit those articles
//ability to see "status"/"phase"

import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const status = {
    draft: 'DFT',
    submitted: 'SUBM',
    publisted: 'PUBL',
    rejected: 'REJ',
}

function MyArticleList(props) {
    const [myarticles, setMyArticleList] = useState([]);


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
    }, []);

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
        {MyArticleListHTML}
        </>
    )
} 

export default withRouter(MyArticleList)