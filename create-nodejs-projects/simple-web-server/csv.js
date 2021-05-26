const http = require("http");
const host = "localhost";
const port = "3000";
// returning csv content
const requestListener = (request, response) => {
  response.setHeader("content-type", "text/csv");
  response.setHeader(
    "content-disposition",
    "attachment;filename=sklluppal.csv"
  );
  response.writeHead(200);
  response.end(`id,name,email \n1,akogwu emma,akoguemma@gmail.com`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server in running on ${host}:${port}`);
});
