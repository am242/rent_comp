const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;
app.use(cors());

const agendaDay = [{ houer: "09:00 - 10:00", name: "David", qty: 20 }, { houer: "13:00 - 14:00", name: "Issac", qty: 20 }, { houer: "11:00 - 12:00", name: "Israel", qty: 20 }];
app.get('/getDayAgenda', (req, res) => res.json(agendaDay))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))