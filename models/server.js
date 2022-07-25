
import express from 'express';
import cors from 'cors';
import user from '../routes/usuarios.js';

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userRoute = '/api/usuarios';

        //Midlewares
        this.middlewares();
        

        //Rutas de mi aplicación
        this.routes();
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