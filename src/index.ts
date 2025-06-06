import express, { Request, Response, NextFunction } from 'express';
import taskRoutes from './routes/tasks';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use('/tasks', taskRoutes); // Add this line to mount the Task API routes
app.use(bodyParser.json());

// Add this error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});