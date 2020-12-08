// Base URL
const base_url = "https://api.rawg.io/api";

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth()+1;
    if (month<10){
        return `0${month}`;
    } else {
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day<10){
        return `0${day}`;
    } else {
        return day;
    }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrrentDay();
//Popular Games
const popular_games = "https://api.rawg.io/api/games?";

