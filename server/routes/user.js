const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.json({ message: "Get User from LOCAL_ENVIRONMENT" });
});

app.post("/user", (req, res) => {
  let body = req.body;

  if (body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      message: "El nombre es necesario",
    });
  } else {
    res.json({
      persona: body,
    });
  }
});

app.put("/user/:id", (req, res) => {
  let id = req.params.id;

  res.json({
    id,
  });
});

app.delete("/user", (req, res) => {
  res.json({ message: "Delete User" });
});

module.exports = app;