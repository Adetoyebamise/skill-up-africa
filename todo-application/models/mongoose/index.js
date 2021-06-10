//connect to mongodb
mongoose
  .connect(configs.databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(PORT, () => {
      console.log(`Database connected: Server is lisening on port ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
  });
