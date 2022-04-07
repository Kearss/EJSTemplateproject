const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
  const table = makeTable;
  res.render("pages/page", {table: table});
});

app.listen(PORT, () =>{
    console.log("Server is running!")
});

function makeTable() {
  const guests = require("./Civ.json");
  const guestsFormat = guests.civilizations.map(guest => (
    `<tr><td class="tohide">${guest.id}</td><td>${guest.name}</td><td>${guest.expansion}</td><td class="tohide">${guest.army_type}</td><td>${guest.team_bonus}</td><td>${guest.civilization_bonus}</td></tr>`
  ))
  .reduce((prevValue, curValue) => prevValue + curValue);

  return (`<table class="table"><thead class="thead-dark"><tr><th class="tohide">ID</td><th>Name</th><th>Expansion</th><th class="tohide">Army type</th><th>Team Bonus</th><th>Civ bonus</th></tr></thead><tbody>
  ${guestsFormat}
  </tbody></table>`);
}


