export const addToWatchlist = (coinID)=>{
    let watchlist = JSON.parse(localStorage.getItem("watchlist"));
    if(!Array.isArray(watchlist)){
        watchlist = [];
    }
    watchlist = [...watchlist, coinID];
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
}