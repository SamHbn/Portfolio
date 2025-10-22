/* eslint-disable no-undef */
import nodemailer from 'nodemailer';

// Fonction handler pour Vercel
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
    console.error("❌ Variables d'environnement manquantes !");
    return res
      .status(500)
      .json({ error: 'Configuration du serveur incomplète.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: EMAIL_TO,
      subject: `Nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\nMessage :\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    console.log('✅ Mail envoyé avec succès !');
    return res.status(200).json({ success: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error('❌ Erreur lors de l’envoi du mail :', error);
    return res
      .status(500)
      .json({ error: 'Erreur serveur, message non envoyé.' });
  }
}
