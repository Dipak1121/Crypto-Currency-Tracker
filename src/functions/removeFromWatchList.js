export const removeFromWatchlist = (coinId)=>{
    let watchlist = JSON.parse(localStorage.getItem("watchlist"));
    let updatedWatchlist = watchlist.filter((item)=>{
        return (item !== coinId)
    });
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
}