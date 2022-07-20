import { connect } from "@tableland/sdk";

export default {
  async createUserDataStorage() {
    // Connect to the Tableland testnet (defaults to Goerli testnet)
    // @return {Connection} Interface to access the Tableland network and target chain
    const tableland = await connect({ network: "testnet" });

    // we look for exisiting table to avoid re-create a new one
    // TODO: make the table id a config parameter``
    const hashRes = await tableland.hash('CREATE TABLE AssetTracker_5 (id INT, file_name TEXT, file_type TEXT, ipfs_cid TEXT, provider TEXT, ipfs_gateway TEXT, primary key (id));')
    const appTableStructure = hashRes.structureHash;

    const tables = await tableland.list(); // returns an Object with the Tables the connected address owns
    console.log(">> all tables: ", tables)
    const myMatchingTables = Object.values(tables).filter((table) => table.structure === appTableStructure) // filters `tables` for matching `structure`s
    console.log(">> myMatchingTables: ", myMatchingTables)

    // if there is no table created already we create a new one
    if (myMatchingTables.length == 0) {
      // Create a new table with a supplied SQL schema and optional `prefix`
      // @return {Connection} Connection object, including the table's `name`
      const { name } = await tableland.create(`id INT, file_name TEXT, file_type TEXT, ipfs_cid TEXT, provider TEXT, ipfs_gateway TEXT, primary key (id)`, 'AssetTracker');
      
      //const table = await tableland.create(`id INT, file_name TEXT, file_type TEXT, ipfs_cid TEXT, provider TEXT, ipfs_gateway TEXT, primary key (id)`, 'AssetTracker');
      //console.log(">> table: ", table)

      // The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
      //console.log("new table name: ", name);
      
      window.assetTrackerTable = name;
      window.tableland = tableland;
    }

    return tableland;
  },

  async linkUserFile(id, name) {
    // Insert a row into the table
    // @return {WriteQueryResult} On-chain transaction hash of the write query
    // TODO: complete with ipfs file metadata
    const writeRes = await window.tableland.write(`INSERT INTO ${window.assetTrackerTable}  VALUES (
        0,
        'filebase_robot.png',
        'PNG',
        ${id},
        'IFPS',
        'https://bafybeict7kegxaugjue5rcys65islddi2rnzmj2hh2wfq3wynf7t772hy4.ipfs.dweb.link'
    );`);

  }
}
