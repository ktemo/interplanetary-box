import { EthereumAuthProvider } from '@3id/connect'
import { SelfID, WebClient } from '@self.id/web'

export async function ceramicAuthenticate({
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

    return {
      client, id, selfId, error: null
    }
  } catch (err) {
    console.log('error authenticating...', err)
  }

  return null;
}

