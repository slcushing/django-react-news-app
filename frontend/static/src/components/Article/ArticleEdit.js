import {withRouter} from 'react-router-dom';
import {useState} from 'react';
import Cookies from 'js-cookie';

function ArticleEdit(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [article, setArticle] = useState({
        ...props
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setArticle({...article, [name]:value})
    }

    const handleImage = event => {
        const file = event.target.files[0];
        setArticle({
            ...article,
            image: file,
        });

        const reader = new FileReader();
        reader.readAsDataURL(file);
    }

    function handleError(error) {
        console.warn(error);
    }    

    async function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        if(article.image instanceof File) {
            formData.append('image', article.image);
        }

        formData.append('title', article.title);
        formData.append('body', article.body);
        formData.append('category', article.category);
        formData.append('status', event.target.value)


        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: formData,
        };

        const response = await fetch(`/api_v1/articles/${props.id}/`, options).catch(handleError);
        if(!response) {
            console.log(response);
        } else {
            const data = await response.json();
            props.history.push('/');
        }
    }


    let html;
    if(isEditing) {
        html = 
        <form className='mt-3 col-12 article-form'>
            <div className='form-group text-left mb-3'>
                <label htmlFor='image'>Image</label>
                <input 
                    type='file' 
                    name='image' 
                    onChange={handleImage}
                    />

            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='title'>Title</label>
                <input 
                    type='text' 
                    name='title' 
                    value={article.title}
                    onChange={handleChange}
                    />
            </div>
            <div className='form-group text-left mb-4' id="article-text">
                <label htmlFor='body'>Body</label>
                <textarea 
                    type='text' 
                    name='body' 
                    value={article.body}
                    onChange={handleChange}
                    />
            </div>
            <select onChange={handleChange} name="category" value={article.category}>
                    <option>Open this select menu</option>
                    <option value="NEWS">News</option>
                    <option value="HLTH">Health</option>
                    <option value="SPRT">Sports</option>
                    <option value="TECH">Tech</option>
                    <option value="OPIN">Opinion</option>
            </select>
             <button type="submit" onClick={handleSubmit} value="DFT" id='edit-button'>Save as Draft</button>
             <button type="submit" onClick={handleSubmit} value="SUBM" id='edit-button'>Save and Submit for Review</button>
        </form>
    } else {
        
        html = (
            <div className='my-article'>
                <img className='fit-picture' src={article.image} alt=''/>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <p>Status: {article.status}</p>
                {article.status === 'DFT' && (
                    <>
                    <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
                    <button type="submit" onClick={handleSubmit}value="SUBM">Submit for Review</button>
                    </>
                )}
            </div>
        )
    }


    return(
        <>
            {html}
            
        </>
    );

}

export default withRouter(ArticleEdit)