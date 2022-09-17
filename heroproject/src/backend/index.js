const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// Route to get all posts
app.get("/api/heroes", (req, res) => {
  db.query("SELECT * FROM heroes", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//route to update post
app.put("/api/update", (req, res) => {
  const id = req.body.id;
  const intelligence = req.body.intelligence;
  const strength = req.body.strength;
  const speed = req.body.speed;
  const durability = req.body.durability;
  const power = req.body.power;
  const combat = req.body.combat;
  console.log(`New intelligence value: ${intelligence}`);
  console.log(`New strength value: ${strength}`);
  console.log(`New speed value: ${speed}`);
  if (intelligence) {
    db.query(
      "UPDATE heroes SET intelligence = ? WHERE id = ?",
      [intelligence, id],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  } else if (strength) {
    db.query(
      "UPDATE heroes SET strength = ? WHERE id = ?",
      [strength, id],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  } else if (speed) {
    db.query(
      "UPDATE heroes SET speed = ? WHERE id = ?",
      [speed, id],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  } else if (durability) {
    db.query(
      "UPDATE heroes SET durability = ? WHERE id = ?",
      [durability, id],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  } else if (power) {
    db.query(
      "UPDATE heroes SET power = ? WHERE id = ?",
      [power, id],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  } else if (combat) {
    db.query(
      "UPDATE heroes SET combat = ? WHERE id = ?",
      [combat, id],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  }
});

// Route to get one post
app.get("/api/getFromId/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM heroes WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Route for creating the post
app.post("/api/create", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const intelligence = req.body.intelligence;
  const strength = req.body.strength;
  const speed = req.body.speed;
  const durability = req.body.durability;
  const power = req.body.power;
  const combat = req.body.combat;

  db.query(
    "INSERT INTO heroes (name, image, intelligence, strength, speed, durability, power, combat) VALUES (?,?,?,?,?,?,?,?)",
    [name, image, intelligence, strength, speed, durability, power, combat],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send("values inserted");
    }
  );
});

// Route to delete a post
app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM heroes WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on: ${PORT}`);
});
