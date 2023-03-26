import { app } from "./app.js";

app.get("/", (req, res) => {
  res.send("<h1>Working Fine</h1>");
});

app.get("/user", (req, res) => {
  res.status(200).json({
    users: [],
    success: false,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port ${process.env.PORT}`);
});
