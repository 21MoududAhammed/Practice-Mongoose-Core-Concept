import express ,{Request, Response} from 'express';
import cors from 'cors';

const app = express();

// middlewares 
app.use(express.json());
app.use(cors());


app.get('/', (req: Request, res: Response)=>{
    res.status(200).json('Hello Bangladesh.');
})

export default app;
