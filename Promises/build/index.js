"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
axios_1.default.put(`${baseUrl}/news`, {
    title: "Nova noticia",
    content: " ",
    date: 1589818936000
})
    .then((res) => {
    axios_1.default.get(`${baseUrl}/subscribers/all`)
        .then((res) => {
        const subscribers = res.data;
        for (const subscriber of subscribers) {
            axios_1.default.post(`${baseUrl}/notifications/send`, {
                subscriberId: subscriber.id,
                message: "Veja a nova noticia",
            })
                .catch((err) => {
                console.log(err.data);
            });
        }
    });
});
//# sourceMappingURL=index.js.map