const express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  cors = require("cors"),
  logger = require("morgan");

const indexRouter = require("./routes/index"),
  version1Router = require("./routes/version1"),
  usersRouter = require("./routes/users");

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept"
};

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(corsOptions));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/v1", version1Router);

module.exports = app;
