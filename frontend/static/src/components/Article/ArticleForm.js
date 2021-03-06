import {useState} from 'react';
import Cookies from 'js-cookie';
import {withRouter} from 'react-router-dom'

function ArticleForm(props) {
    const [article, setArticle] = useState({
        image: null,
        title: '',
        body:'',
        category: '',
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
        //MAP OVER ARTICLE WITH FOR...IN
        formData.append('image', article.image);
        formData.append('title', article.title);
        formData.append('body', article.body);
        formData.append('category', article.category);
        formData.append('status', event.target.value)

        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: formData
        };

        const response = await fetch('/api_v1/articles/', options).catch(handleError);
        if(!response) {
            console.log(response);
        } else {
            const data = await response.json();
            props.history.push('/api_v1/articles/');
        }
    }

    return(
        <form className='mt-3 col-4 offset-lg-4 article-form'>
            <div className='form-group text-left mb-3'>
                <label htmlFor='image'>Image</label>
                <input 
                    type='file' 
                    name='image' 
                    onChange={handleImage}/>

            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='title'>Title</label>
                <input 
                    type='text' 
                    name='title' 
                    value={article.title}
                    onChange={handleChange}/>
            </div>
            <div className='form-group text-left mb-4' id="article-text">
                <label htmlFor='body'>Body</label>
                <textarea 
                    type='text' 
                    name='body' 
                    value={article.body}
                    onChange={handleChange}/>
            </div>
            <select onChange={handleChange} name="category" value={article.category}>
                    <option>Open this select menu</option>
                    <option value="NEWS">News</option>
                    <option value="HLTH">Health</option>
                    <option value="SPRT">Sports</option>
                    <option value="TECH">Tech</option>
                    <option value="OPIN">Opinion</option>
            </select>
            <div className='form-group mt-2'>
                <button type='submit' value="DFT" id="draft-save"onClick={handleSubmit}>Save as Draft</button>
                <button type='submit' value="SUBM" id="submit-draft" onClick={handleSubmit}>Submit for Review</button>
            </div>
        </form>
    );
}

export default withRouter(ArticleForm)