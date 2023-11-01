import axios from 'axios';

class ApiYuGi{
    static apiURL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

    static get(url){

        return axios.get(this.apiURL + url, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            }
        })
    }
}

export default ApiYuGi;

