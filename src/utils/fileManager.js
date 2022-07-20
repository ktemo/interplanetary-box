import * as web3storage from './web3Storage'


export const onFilePicked = (event) => {
  const files = event.target.files
  window.filelist = files
  let data = []
  console.dir(files)
  for (let i = 0; i < files.length; i++) {
    console.log("File", files[i])
    data.push(URL.createObjectURL(files[i]))
  }
  window.my_thumbs = data
}

export const onUploadFile = () => {
  window.cid = web3storage.default.storeWithProgress(window.filelist)
  window.my_thumbs = null
  window.filelist = null
}

export const cidLink = (cid) => {
  return 'https://' + cid + '.ipfs.dweb.link'
}

// export const onCopyLink = (textToCopy) => {
//   navigator.clipboard.writeText(textToCopy)
//   console.log(textToCopy)
//   console.log("copied!")
// }
