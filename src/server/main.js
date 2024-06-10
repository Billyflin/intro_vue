import express from 'express';
import cors from 'cors';
import Tarea from './models/tarea.js';
import {Sequelize} from "sequelize";
import config from './config/config.json' assert {type: 'json'};

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect // <-- Explicitly set dialect here
});

const app = express();

(async () => {
    try {
        await sequelize.authenticate(); // Prueba la conexión
        console.log('Conexión a la base de datos establecida correctamente.');

        await Tarea.sync(); // Crea la tabla si no existe
        console.log('La tabla Tarea ha sido sincronizada.');
    } catch (error) {
        console.error('Error al conectar a la base de datos o sincronizar la tabla:', error);
    }
})();


app.use(cors('http://localhost:5173'));

app.use(express.json());

app.get("/tareas", async (req, res) => {
    try {
        const tareas = await Tarea.findAll(); // Consulta todas las tareas
        res.json(tareas);
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.post("/tareas", async (req, res) => {
    try {
        const { nombre } = req.body;

        const nuevaTarea = await Tarea.create({ nombre, completada: false }); // Crear la tarea

        res.status(201).json(nuevaTarea); // Enviar la nueva tarea con código 201 (Created)
    } catch (error) {
        console.error('Error al crear tarea:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.post("/tareas/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { completada } = req.body;

        console.log('id:', id);
        console.log('completada:', completada);

        const tarea = await Tarea.findByPk(id); // Buscar la tarea por su ID

        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }

        tarea.completada = completada;
        await tarea.save(); // Guardar los cambios en la base de datos

        res.json(tarea); // Enviar la tarea actualizada como respuesta
    } catch (error) {
        console.error('Error al actualizar tarea:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.delete("/tareas/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const tarea = await Tarea.findByPk(id);
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }

        await tarea.destroy(); // Eliminar la tarea de la base de datos

        res.json({ message: 'Tarea eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar tarea:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.get("/hello", (req, res) => {
  res.send("Hello Vite + Vue!");
});

app.post("/sum", (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a + b });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});