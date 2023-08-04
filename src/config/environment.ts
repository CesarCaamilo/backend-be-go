import dotenv from 'dotenv';

const environment = dotenv.config(
    {
        path: './src/.env'
    }
);

if(process.env.NODE_ENV !== 'production'){
    if(environment.error){
        throw new Error('Please create .environment file');
    }
}
export default environment;