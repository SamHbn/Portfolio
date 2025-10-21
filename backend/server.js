import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRouter from './routes/contact.js'; // chemin correct vers ton routeur

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // très important pour parser le JSON du POST

// Routes
app.use('/api/contact', contactRouter);

// Test serveur
app.get('/', (req, res) => {
  res.send('Serveur backend opérationnel');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
