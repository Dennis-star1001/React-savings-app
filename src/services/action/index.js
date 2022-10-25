import { BIO_DATA } from "./type";
export const BioDataAction = (params) =>{
    return {
        type: BIO_DATA,
        payload: params
    }
}