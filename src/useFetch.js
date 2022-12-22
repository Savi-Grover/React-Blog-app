import { useState, useEffect} from 'react';
const useFetch = (url) => {

    const[data,setData]= useState(null);
    const[isLoading,setLoading]=useState(true);
    const[isError,setError]=useState(null);

    useEffect(()=> {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
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
            if(err.name==='AbortError'){
                console.log('Fetch aborted on new page');
        }
            else{
            setLoading(false);
            setError(err.message);
            }
        })
        }, 1000);
        //clean up function
        return () => abortCont.abort();
        }, [url]);



    return ({data, isLoading, isError}  );
}
 
export default useFetch;