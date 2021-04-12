import {
    Grid
} from '@material-ui/core';
import { Get } from 'react-axios';
import NewsCard from './newsCard';

export default function Timeline() {

    return (
        <div>
            <Get url="http://localhost:3001/news/all">
                {(error, response, isLoading, makeRequest, axios) => {
                    if (error) {
                        return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({})}>Retry</button></div>)
                    }
                    else if (isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if (response !== null) {
                        return (
                            <>
                                <div>
                                    {
                                        response && response.data && response.data.data && response.data.data.length > 0
                                        && response.data.data.map((value, index) => {
                                            return (
                                                <NewsCard key={`news-${index}`} data={value}></NewsCard>
                                            )
                                        })
                                    }
                                    <button onClick={() => makeRequest({})}>Refresh</button>
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