import {
  Web3Storage
} from 'web3.storage/dist/bundle.esm.min.js'

export default {
  getAccessToken() {
    // Set the REACT_APP_WEB3STORAGE_TOKEN
    //environment variable before you run your code.
    return process.env.REACT_APP_WEB3STORAGE_TOKEN;
  },

  makeStorageClient() {
    return new Web3Storage({
      token: this.getAccessToken()
    })
  },

  async storeWithProgress(myFileList) {
    const files = [...myFileList]
    console.log(">> files: ", files)
    // TODO: Name the cab of files?
    // Now it is named based on date/time

    // show the root cid as soon as it's ready
    const onRootCidReady = cid => {
        console.log('uploading files with cid:', cid)
    }

    // when each chunk is stored, update the percentage complete and display
    const totalSize = files.map(f => f.size).reduce((a, b) => a + b, 0)
    let uploaded = 0

    const onStoredChunk = size => {
      uploaded += size
      const pct = totalSize / uploaded
      console.log(`Uploading... ${pct.toFixed(2)}% complete`)
      // TODO: let's get this to show in browser & update!
    }

    // makeStorageClient returns an authorized Web3.Storage client instance
    const client = this.makeStorageClient()

    // client.put will invoke our callbacks during the upload
    // and return the root cid when the upload completes
    return client.put(files, {
      onRootCidReady,
      onStoredChunk
    })
  }
}