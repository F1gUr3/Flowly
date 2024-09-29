import db from "../db/db";
import { DataTypes } from "sequelize";

const User = db.define(
    'User',
    {
        userName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        passwordHash:{
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }
)