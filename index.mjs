import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import path from 'path';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), 'public')));

app.post('/intercept', async (req, res) => {
  const url = req.body.url;

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.json({ success: true, data });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
