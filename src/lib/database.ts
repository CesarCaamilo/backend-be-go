import mongoose from 'mongoose';

const Database = async () => {
    try {
        const mongoConnection = process.env.DATABASE || 'mongodb://localhost:27017/bego';
        const client = await mongoose.connect(mongoConnection);
        const db = client.connection;
        console.log(`DATABASE: ${db.host}:${db.port}/${db.name}`);
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error);
        process.exit(1);
    }
}
export default Database;
