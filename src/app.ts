import { ServerAPI } from "./serverModule";

class Main {
  constructor() {
    const serverAPI = new ServerAPI();
    serverAPI.initServer();
  }
}

new Main();
