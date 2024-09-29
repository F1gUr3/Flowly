import db from "../db/db";
import { DataTypes } from "sequelize";

const Task = db.define(
    'task',
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        priority: {
            type: DataTypes.ENUM('low', 'medium', 'high'),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM("todo", "in progress", "done"),
            allowNull: false,
        }
    }
)