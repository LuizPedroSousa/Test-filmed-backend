import app from "./app";

const port = process.env.PORT || 3333;

app.express.listen(port, () => {
  console.log(
    `-🚀 Server Started in ${process.env.ADDRESS || "http://localhost"}:${port}`
  );
});
