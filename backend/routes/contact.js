import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// Vérification des variables d'environnement
const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
  console.warn("Variables d'environnement EMAIL_USER, EMAIL_PASS ou EMAIL_TO manquantes !");
}

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Vérification basique
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    console.log('EMAIL_USER =', EMAIL_USER);
    console.log('EMAIL_PASS =', EMAIL_PASS ? '****' : undefined);

    // Configuration du transporteur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Options du mail
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: EMAIL_TO,
      subject: `Nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\nMessage :\n${message}`,
    };

    // Envoi de l’e-mail
    await transporter.sendMail(mailOptions);

    console.log('Mail envoyé avec succès !');
    res.status(200).json({ success: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l’envoi du mail :', error);
    res.status(500).json({ error: 'Erreur serveur, message non envoyé.' });
  }
});

export default router;
