import environment from './environment';


if(process.env.NODE_ENV !== 'production'){
    const env = environment;
}
export const SECRET_KEY = process.env.TOKEN_SECRET || 'Be-Go-Secret-Key';