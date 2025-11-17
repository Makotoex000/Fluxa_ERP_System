// Em src/config.ts
import { config as MSSQLConfig } from 'mssql'; 

export const JWT_SECRET = 'SuaChaveSecretaMuitoSeguraAqui123!@#$'; 
export const SERVER_PORT = 3000;

const DB_USER = 'admin';     
const DB_PASSWORD = 'fluxa1234'; 

export const sqlConfig: MSSQLConfig = {

  server: 'fluxadb.cone4acici1h.us-east-1.rds.amazonaws.com', 
  database: 'FluxaDB',        
  port: 1433,                 

  user: DB_USER,
  password: DB_PASSWORD,

  options: {
    trustServerCertificate: true, 
  },

  pool: { 
    max: 10, 
    min: 0, 
    idleTimeoutMillis: 30000 
  }
};
