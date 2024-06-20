 const API_KEY = 'AIzaSyCH4izDD72kvwK5q6QQ_gBHNlxBYJJpAtw';

 export const valueConverter = (val) => {

    if(val>=1000000){

        return Math.floor(val / 1000000) + 'M';
    }
    else if (val>=1000){

        return Math.floor(val / 1000) + 'k';
    } else  {

        return val;
    }


 }

 export default API_KEY
