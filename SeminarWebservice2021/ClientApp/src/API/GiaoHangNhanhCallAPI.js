import axios from 'axios';
import * as Config from '../Config';

export default function GiaoHangNhanhCallAPI(enpoint, method='GET', paramObj){
    return axios({
        method : method,
        url : `${Config.API_URI}${enpoint}`,
        params : paramObj
    })
}
