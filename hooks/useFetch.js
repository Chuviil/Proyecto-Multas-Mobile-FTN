import {useEffect, useState} from 'react';
import {URL} from '../constants';
import axios from 'axios';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        console.log("Fetching from", endpoint);

        setLoading(true);

        try {
            const options = {
                method: 'GET',
                url: `${URL}/api/${endpoint}`,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const response = await axios.request(options);
            setData(response.data);
        } catch (e) {
            console.log(e, endpoint);
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (endpoint) {
            fetchData();
        }
    }, [endpoint]);

    const refetch = () => {
        setLoading(true);
        fetchData();
    };

    return {data, loading, error, refetch};
};

export default useFetch;
