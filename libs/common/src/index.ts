// create the DB module and setup DB connection with mongo DB
// create the config module and set it up
// inject the config service in DB module
// create an env file at the root dir and then change the the DB service to use forRootAsync
// apply validation to the config module using JO

//*********************IMPORTANT Note***************** */
/// when we want to use somethign from the common library we need to xport it from this file

export * from './database';
export * from './logger';
