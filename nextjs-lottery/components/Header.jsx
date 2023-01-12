import { ConnectButton } from "web3uikit"

const Header = () => {
  return (
    <div className="p-5 border-b-2 flex flex-row">
      <div className='py-4 px-4 font-blog'>Decentralized Lottery</div>
      <ConnectButton moralisAuth={false} />
    </div>
  )
}

export default Header
