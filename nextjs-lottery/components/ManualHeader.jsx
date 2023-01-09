import react, { useState } from "react"
import { useMoralis } from "react-moralis"

const ManualHeader = () => {
  const { enableWeb3, account } = useMoralis()

  const [connected, setConnected] = useState()

  return (
    <div>
      {account ? (
        <div>Connected to {account.slice(0,6)}...{account.slice(-4)}</div>
      ) : (
        <button onClick={async () => await enableWeb3()}>Connect</button>
      )}
    </div>
  )
}

export default ManualHeader
