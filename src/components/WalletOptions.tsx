import * as React from 'react'
import { Connector, useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => {
    return <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
})
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector
  onClick: () => void
}) {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return (
    <button disabled={!ready} onClick={onClick} className='text-white border-blue-600 border bg-blue-500 py-2 px-5 rounded-3xl cursor-pointer hover:bg-blue-600'>
      {connector.name}
    </button>
  )
}