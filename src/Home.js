
const Home = () => {
const handleClick=()=> {
    console.log('hello all');
}

const handleClickAgain=(name)=> {
    console.log('hello' + name);
}

    return (  
<div className="home">
    {/*<h2>Homepage< a href="/" style={{color: "purple"}}>Content</a></h2>*/}
    <button onClick={handleClick}>Click me</button>
    <button onClick={
        ()=>{handleClickAgain('savi')}
        }>Click me again</button>
</div>
    );
}
 
export default Home;