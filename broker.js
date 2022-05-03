var mosca = require("mosca");

var settings = {
  port: 1883,
  http: {
    port: 1884,
    bundle: true,
    static: "./",
  },
};

var app = new mosca.Server(settings);
console.log("Mosca started");

app.on("published", function (packet, client) {
  console.log("Event: ", packet.payload.toString(), "on topic", packet.topic);
});

app.on("ready", function () {
  console.log("MQTT Server listening on port", process.env.NODE_PORT);
});
