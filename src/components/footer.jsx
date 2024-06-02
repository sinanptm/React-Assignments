const footer = ()=>{
    try {
       const time = new Date() 
       return(
        <p>Copytight &copy; {time.getFullYear()}</p>
       )
    } catch (error) {
        console.log(error);
    }
}

export default footer