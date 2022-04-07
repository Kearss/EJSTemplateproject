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
  const Info = require("./Civ.json");
  const infoFormat = Info.civilizations.id.map(info => (
    `<tr><td class="tohide">${info.id}</td><td>${info.name}</td><td>${info.expansion}</td><td class="tohide">${info.army_type}</td><td>${info.team_bonus}</td><td>${info.civilization_bonus}</td></tr>`
  ))
  .reduce((prevValue, curValue) => prevValue + curValue);

  return (`<table class="table"><thead class="thead-dark"><tr><th class="tohide">ID</td><th>Name</th><th>Expansion</th><th class="tohide">Army type</th><th>Team Bonus</th><th>Civ bonus</th></tr></thead><tbody>
  ${infoFormat}
  </tbody></table>`);
}


