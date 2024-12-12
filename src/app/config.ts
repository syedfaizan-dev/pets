import { 
    createConfig, 
    http, 
    cookieStorage,
    createStorage 
  } from 'wagmi'
  import { mainnet, sepolia } from 'wagmi/chains'
  import { injected, metaMask, walletConnect } from 'wagmi/connectors'

  const projectId = '<WALLETCONNECT_PROJECT_ID>'

  export function getConfig() {
    return createConfig({
      chains: [mainnet, sepolia],
      connectors: [
        injected(),
        walletConnect({ projectId }),
        metaMask(),
      ],
      ssr: true,
      storage: createStorage({
        storage: cookieStorage,
      }),
      transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
      },
    })
  }