const db = require("./db");

async function obtenerProductos() {
    try{
        const [resultados] = await db.query(
            'SELECT * FROM productos'
        );
        console.log(resultados);
    } catch (error) {
        console.error("Error:", error);
    }
}

console.log("hhh");

obtenerProductos();