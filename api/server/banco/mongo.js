const mongoose = require("mongoose");

const uri = "mongodb://admin:admin@localhost:27018/baseProjeto?authSource=baseProjeto";

mongoose.connect(uri, {});