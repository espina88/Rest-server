
import express from 'express';
import cors from 'cors';
import user from '../routes/usuarios.js';
import dbConnection from '../database/config.js';

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userRoute = '/api/usuarios';

        //Conectar a base de datos
        this.conectarDB();

        //Midlewares
        this.middlewares();
        

        //Rutas de mi aplicación
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        
        //CORS
        this.app.use( cors() );
        

        //Lectura y parseo del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );
        
    }

    routes(){
        
        this.app.use( this.userRoute, user );
        
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor funcionando en el puerto', this.port );
        });
    }
}

export default Server;