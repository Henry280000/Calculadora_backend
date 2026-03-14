    const express = require('express')
    const colors = require('colors')
    const dotenv = require('dotenv').config()
    const connectDB = require('./config/db')
    const port = process.env.PORT || 5001
    const { errorHander } = require('./middleware/errorMiddleware')
    const cors = require('cors')

    connectDB()

    const app = express()

    /*
    app.use(cors({
        origin: "http://localhost:3000",
    }));
    */

    app.use(cors());

    app.use(express.json());
    app.use("/api/movimientos", require('./routes/movimientosRoutes'));

    app.use(errorHander);

    app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))

    /* para el postman: http://localhost:5001/api/movimientos */
    






