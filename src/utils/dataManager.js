import { connect } from "@tableland/sdk";

export default {
  async createUserDataStorage() {
    // Connect to the Tableland testnet (defaults to Goerli testnet)
    // @return {Connection} Interface to access the Tableland network and target chain
    // TODO: move the connection params to config parameters
    const tableland = await connect({ network: "testnet", chain: "polygon-mumbai" });

    // we look for exisiting table to avoid re-create a new one
    // TODO: make the chain id a config parameter
    const hashRes = await tableland.hash('CREATE TABLE AssetTracker_80001 (id INT, file_name TEXT, file_type TEXT, ipfs_cid TEXT, provider TEXT, ipfs_gateway TEXT, primary key (id));')
    const appTableStructure = hashRes.structureHash;

    const tables = await tableland.list(); // returns an Object with the Tables the connected address owns
    console.log(">> all tables: ", tables)
    const existingTables = Object.values(tables).filter((table) => table.structure === appTableStructure) // filters `tables` for matching `structure`s
    console.log(">> existingTables: ", existingTables)

    // if there is no table created already we create a new one
    if (existingTables.length == 0) {
      // Create a new table with a supplied SQL schema and optional `prefix`
      // @return {Connection} Connection object, including the table's `name`
      const { name } = await tableland.create(`id INT, file_name TEXT, file_type TEXT, ipfs_cid TEXT, provider TEXT, ipfs_gateway TEXT, primary key (id)`, 'AssetTracker');
      
      // The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
      console.log("new table name: ", name);
      
      window.assetTrackerTable = name;
    } else {

      window.assetTrackerTable = existingTables[0].name;
    }

    console.log(">> window.assetTrackerTable: ", window.assetTrackerTable);
    window.tableland = tableland;
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
