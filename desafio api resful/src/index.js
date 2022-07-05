import express from "express";
import { productRouter } from "./routers/productRouter.js";

const app = express();                                            ///// declaro el servidor
const PORT = 8080;

app.use(express.json());                             ///// middleware express json para 
app.use(express.urlencoded({ extended: true }));     
app.use(express.static("public"));                     /////   expongo el html 
app.use("/api/productos", productRouter );             ///// declaro en la ruta base todas las subrutas que tengo en productRouter ///  productRouter declaro todas las subrutas

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));   /// inicio el servidor