

import mongoose from "mongoose";

const dbConnection = async() =>{

    try {
        
        await mongoose.connect( process.env.MONGODB );

        console.log('Base de datos Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }

}

export default dbConnection;