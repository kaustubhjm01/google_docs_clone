import mongoose  from 'mongoose';

const Connection = async (username = 'root', password = '1234') => {
    

    const URL =`mongodb://${username}:${password}@ac-vrw0e8c-shard-00-00.1jdfq9i.mongodb.net:27017,ac-vrw0e8c-shard-00-01.1jdfq9i.mongodb.net:27017,ac-vrw0e8c-shard-00-02.1jdfq9i.mongodb.net:27017/?ssl=true&replicaSet=atlas-qahace-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;