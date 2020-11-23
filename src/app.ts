import * as http from 'http';

class Main {
  constructor() {
    const server: http.Server = http.createServer(
      (request: http.IncomingMessage, response: http.ServerResponse) =>
        this.requestHandler(request, response)
    );
    server.listen("5000");

    console.log("http://localhost:5000 へアクセスしてください。");
  }

  private requestHandler(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ): void {
    response.end("Hello, node.js with TypeScript");
  }
}

new Main();

