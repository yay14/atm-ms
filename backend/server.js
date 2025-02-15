import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import transactionRoutes from './routes/transactionRoutes.js'

dotenv.config()

connectDB()

const app=express()

app.use(cors());
app.use(express.json())// allows to accept json data in body


app.get('/',(req,res)=> {
    res.send('API is running..')
} )

app.use('/api/users', userRoutes)
app.use('/api/transactions', transactionRoutes)


app.use(notFound)
app.use(errorHandler)


const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`Server started running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
