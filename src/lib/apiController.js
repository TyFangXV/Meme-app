const fetchMemeFromApi = async(addMeme, memes, memeCount)=>{
    const abortController = new AbortController();
    const signal = abortController.signal;
    setTimeout(async() => {
        const rawData  = await fetch("https://meme-api.herokuapp.com/gimme", {signal : signal});
        const data = await rawData.json();
        const meme = JSON.parse(JSON.stringify(data))
        addMeme(memes.concat(meme))          
        memeCount++;        
    }, 1000);
      return function cleanUp (){
        abortController.abort()
      }
}


module.exports = {fetchMemeFromApi};