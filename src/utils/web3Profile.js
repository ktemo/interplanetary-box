import { Core } from '@self.id/core'
import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect'
import { SelfID, WebClient } from '@self.id/web'
import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver'
import { CeramicClient } from '@ceramicnetwork/http-client'
import { DID } from 'dids'

import * as dataManager from './dataManager'
import { web3Modal } from './providers'

const CERAMIC_URL = process.env.REACT_APP_CERAMIC_API || 'http://localhost:7007'

const threeIdConnect = new ThreeIdConnect('local')


export async function authenticate({
  ceramicNetwork = 'testnet-clay',
  connectNetwork = 'testnet-clay',
  address = '',
  provider = null,
  client = null
} = {}) {
  let ethereum = window.ethereum;

  if (!ethereum) return {
    error: 'No ethereum wallet detected'
  }

  if (!client) {
    client = new WebClient({
      ceramic: ceramicNetwork,
      connectNetwork
    })
  }

  if (!address) {
    [address] = await ethereum.request({ method: 'eth_requestAccounts' })
  }

  if (!provider) {
    provider = new EthereumAuthProvider(window.ethereum, address)
  }

  try {
    await client.authenticate(provider)

    const selfId = new SelfID({ client })
    const id = selfId.did._id
    console.log(">> id: ", id)
    console.log(">> address: ", address)

    dataManager.default.createUserDataStorage();

    return {
      client, id, selfId, error: null
    }
  } catch (err) {
    console.log('error authenticating...', err)
  }
}



