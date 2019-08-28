const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;
app.use(cors());

const agendaDay = [{ "09:00 - 10:00": "David" }, { "10:00 - 11:00": "Israel" }, { "12:00 - 13:00": "David" }];
app.get('/getDayAgenda', (req, res) => res.json(agendaDay))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))