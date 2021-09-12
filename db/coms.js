var oracledb = require('oracledb');
var dotenv = require('dotenv');
dotenv.config(); //LOAD CONFIG

async function selectSQL(sqlQuery) {
let connection = await oracledb.getConnection({
    user: process.env.COMS_DB_USER,
    password: process.env.COMS_DB_PASSWORD,
    connectString: process.env.COMS_DB_HOST + '/' + process.env.COMS_DATABASE
    });
  try {
    const sql = await connection.execute(sqlQuery);
    return (sql.rows);
  } catch (err) {
    console.log(err);
  }
  await connection.close();
}

async function deleteSQL(sqlQuery){
let connection = await oracledb.getConnection({
    user: process.env.COMS_DB_USER,
    password: process.env.COMS_DB_PASSWORD,
    connectString: process.env.COMS_DB_HOST + '/' + process.env.COMS_DATABASE
    });
    
    let del = req.params.cust_name;
    try {
        const query = await connection.execute(
            sqlQuery +
        `delete from customer 
        where cust_name = :del`,
        [del]
        );
        connection.commit();
        console.log("Deletion successful ", query.rowsAffected);
    } catch (err) {
        console.error(err);
    }
    await connection.close();
}

async function updateSQL() {
    let connection = await oracledb.getConnection({
        user: process.env.COMS_DB_USER,
        password: process.env.COMS_DB_PASSWORD,
        connectString: process.env.COMS_DB_HOST + '/' + process.env.COMS_DATABASE
    });
  const updated_name = req.body.updated_cust_name;
  const name = req.body.cust_name;
  console.log(" Updated name : ", updated_name);
  console.log("Previous name : ", name);
  try {
    const query = await connection.execute(
      `update customer 
    set cust_name =:updated_name
    where cust_name=:name`,
      [updated_name, name]
    );
    connection.commit();
    console.log("Update successful ", query.rowsAffected);
  } catch (err) {
    console.error("There are some error ");
  }
  await connection.close();
}
