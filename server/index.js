const express = require("express");
const { Server } = require("socket.io");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
const authRouter = require("./routers/authRouter");

const server = require("http").createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hiiii");
});

io.on("connect", (socket) => {});

server.listen(4000, () => {
  console.log("server is ON at 4000");
});
