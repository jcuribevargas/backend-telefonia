import express from "express"; 
import cors from "cors"; 
import dotenv from "dotenv"; 
import productRoutes from "./routes/productRoutes.js"; 
import roleRoutes from "./routes/roleRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import saleRoutes from "./routes/saleRoutes.js";
import documentTypeRoutes from "./routes/documentTypeRoutes.js";
import { connect } from "./prismaClient.js"; 
dotenv.config();

const app = express(); 


app.use(cors()); // Permite peticiones desde otros orígenes (ej: frontend) 
app.use(express.json()); // Permite recibir JSON desde el frontend 

// 👇 Loguear cada petición que llega
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.originalUrl}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next();
});


app.use("/api", productRoutes); // Prefijo para nuestras rutas 
app.use("/api", roleRoutes); // Prefijo para nuestras rutas
app.use("/api", documentTypeRoutes); // Prefijo para nuestras rutas
app.use("/api", userRoutes); // Prefijo para nuestras rutas
app.use("/api", saleRoutes); // Prefijo para nuestras rutas


// conectarme a la base de datos 
connect(); 
const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => { 
console.log(` 
Servidor corriendo en http://localhost:${PORT}`);
}); 