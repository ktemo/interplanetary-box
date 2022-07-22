import * as web3storage from './web3Storage'
import * as dataManager from '../utils/dataManager'


export const onFilePicked = (event) => {
  if (!window.tableland) {
    console.log(">> sign in first!");
    return;
  }

  const files = event.target.files
  window.filelist = files
  let data = []
  console.dir(files)
  for (let i = 0; i < files.length; i += 1) {
    console.log("File", files[i])
    data.push(URL.createObjectURL(files[i]))
  }
  window.my_thumbs = data
}

export const onUploadFile = async () => {
  let { cid, fileNames } = await web3storage.default.storeWithProgress(window.filelist)
  console.log(">> file cid: ", cid);
  console.log(">> file names: ", fileNames);
  await dataManager.default.linkFileToUser(cid, fileNames[0]);

  window.my_thumbs = null
  window.filelist = null
}

export const getUserFiles = async () => {
  return dataManager.default.getUserFiles();
}

export const cidLink = (cid) => {
  return 'https://' + cid + '.ipfs.dweb.link'
}

// export const onCopyLink = (textToCopy) => {
//   navigator.clipboard.writeText(textToCopy)
//   console.log(textToCopy)
//   console.log("copied!")
// }
