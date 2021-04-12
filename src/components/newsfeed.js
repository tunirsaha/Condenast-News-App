import { Get } from 'react-axios';
import NewsCard from './newsCard';
import NewsCard2 from './newsCard2';
import Loader from './loader';

const url = 'http://localhost:3001'
const urlMap = {
    business: url + '/news/category?category=business',
    sports: url + '/news/category?category=sports',
    technology: url + '/news/category?category=technology',
    entertainment: url + '/news/category?category=entertainment',
    all: url + '/news/all',
    headlines: url + '/news/headlines'
}
export default function NewsFeed(props) {

    return (
        <div>
            <Get url={urlMap[props.type]}>
                {(error, response, isLoading, makeRequest) => {
                    if (error) {
                        return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({})}>Retry</button></div>)
                    }
                    else if (isLoading) {
                        return (<Loader />)
                    }
                    else if (response !== null) {
                        return (
                            <>
                                <div>
                                    {
                                        response && response.data && response.data.data && response.data.data.length > 0
                                        && response.data.data.map((value, index) => {
                                            if (props.type == 'all' || props.type == 'headlines')
                                                return <NewsCard key={`news-${index}`} data={value}></NewsCard>
                                            else
                                                return <NewsCard2 key={`news-${index}`} data={value}></NewsCard2>
                                        })
                                    }
                                </div>
                            </>
                        )
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get>
        </div>
    );
}