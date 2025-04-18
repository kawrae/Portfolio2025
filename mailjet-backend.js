
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mailjet = require('node-mailjet');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mailjetClient = mailjet.apiConnect(
  'bb6e3d198f47f8ff8e5cceb794f574ec',
  'c0bff2f8cc8be2701a44df6a29183b25' 
);

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const result = await mailjetClient.post("send", { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: "your_verified_sender@example.com",
            Name: "Portfolio Contact"
          },
          To: [
            {
              Email: "k4wrae@outlook.com",
              Name: "Corey"
            }
          ],
          Subject: "New message from your portfolio",
          HTMLPart: `
            <h3>New message via portfolio</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br/>${message}</p>
          `
        }
      ]
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
