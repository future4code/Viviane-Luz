"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const fileName = 'users.json';
try {
    const data = fs.readFileSync(fileName);
    const treatedData = data.toString();
    const users = JSON.parse(treatedData);
    const usersInfo = users.map((user) => `${user.username} - ${user.email}`);
    console.log(usersInfo);
    console.log('Número total de usuários: ', users.length);
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=index.js.map