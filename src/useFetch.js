import { useState, useEffect} from 'react';
const useFetch = (url) => {

    const[data,setData]= useState(null);
    const[isLoading,setLoading]=useState(true);
    const[isError,setError]=useState(null);

    useEffect(()=> {
        setTimeout(() => {
            fetch(url)
        .then(res => {
            console.log(res);
            if (!res.ok){
        throw Error('could not fetch the data from resource')
            }
            return res.json();
        })
        .then( data =>{
            console.log(data);
            setData(data);
            setLoading(false);
            setError(null);
        }).catch(err => {
            //console.log(err.message);
            setError(err.message);
        })
        }, 1);
        }, [url]);



    return ({data, isLoading, isError}  );
}
 
export default useFetch;