import { DataTypes } from 'sequelize'; // Import DataTypes separately
import sequelize from '../config/database.js'; // Adjust path as needed

const Tarea = sequelize.define('Tarea', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completada: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

export default Tarea