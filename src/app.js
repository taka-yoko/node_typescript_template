"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverModule_1 = require("./serverModule");
class Main {
    constructor() {
        const serverAPI = new serverModule_1.ServerAPI();
        serverAPI.initServer();
    }
}
new Main();
//# sourceMappingURL=app.js.map