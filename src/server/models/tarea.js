import {DataTypes, Sequelize} from "sequelize";
import config from '../config/config.json' assert {type: 'json'};

const sequelize = new Sequelize(config['development']);



const Tarea = sequelize.define('Tarea', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completada: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

 export default Tarea;
