const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/menu', (_req, res) => {
  res.json([
    { id: 1, name: 'Classic Smash', description: '2x Patties, Käse, Sauce', price: 9.9 },
    { id: 2, name: 'BBQ Chicken Burger', description: 'Hähnchen, BBQ, Cole Slaw', price: 10.9 },
    { id: 3, name: 'Loaded Fries', description: 'Pommes, Käse, Zwiebeln', price: 6.9 },
  ]);
});


const port = 4000;
app.listen(port, () => console.log(`✅ Backend läuft auf http://localhost:${port}`));
