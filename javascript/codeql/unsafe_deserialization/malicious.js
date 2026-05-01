const express = require("express");
const jsyaml = require("js-yaml");

const app = require("express")();

app.get("/load/:data", function load(req, res) {
  let data = jsyaml.load(req.params.data, { schema: jsyaml.DEFAULT_FULL_SCHEMA });
  res.json({ object: data });
});
