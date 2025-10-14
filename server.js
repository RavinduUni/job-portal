import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node"
import { clerkWebHooks } from './controllers/webhooks.js'
import connectCloudinary from './config/cloudinary.js'
import companyRouter from './routes/companyRoutes.js'
import jobRouter from './routes/jobRoutes.js'
import userRouter from './routes/userRoutes.js'
import { clerkMiddleware } from '@clerk/express'

// Initialize server
const app = express();

// connect to database
await connectDB();
await connectCloudinary();

// Middlwares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Routes
app.get('/', (req, res)=>res.json({msg: "API is running..."}));
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhooks',clerkWebHooks);
app.use('/api/company', companyRouter);
app.use('/api/jobs', jobRouter);
app.use('/api/users', userRouter);


//Port
const PORT = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);

app.listen(PORT , ()=> {
    console.log(`Server is running on ${PORT}`);
})

