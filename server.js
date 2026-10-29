const http = require("http");
const port = Number(process.env.PORT) || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!doctype html><title>Piloto ICARUS DOT</title>
<body style="font-family:sans-serif;background:#111;color:#f4c542;display:grid;place-items:center;height:90vh">
<div style="text-align:center"><h1>Hola desde la nube</h1><p style="color:#ddd">Piloto de ICARUS DOT corriendo en E2B - ${new Date().toISOString()}</p></div></body>`);
}).listen(port, "0.0.0.0", () => console.log("Escuchando en " + port));
