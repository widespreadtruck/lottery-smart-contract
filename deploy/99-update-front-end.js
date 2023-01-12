const { ethers, network } = require("hardhat")
const fs = require("fs")
const { getContractAddress } = require("ethers/lib/utils")
// it automates the process of updating the ABI and Contracts 

const FRONT_END_ADDRESSES_FILE =
  "./nextjs-lottery/constants/contractAddresses.json"
const FRONT_END_ABI_FILE = "./nextjs-lottery/constants/abi.json"

module.exports = async function () {
  if (process.env.UPDATE_FRONTEND) {
    console.log("Updating frontend...")
    updateContractAddresses()
    updateAbi()
  }
}

async function updateAbi() {
  const raffle = await ethers.getContract("Raffle")
  fs.writeFileSync(
    FRONT_END_ABI_FILE,
    raffle.interface.format(ethers.utils.FormatTypes.json)
  )
}

async function updateContractAddresses() {
  // get the contract address
  const raffle = await ethers.getContract("Raffle")
  const currentAddresses = JSON.parse(
    fs.readFileSync(FRONT_END_ADDRESSES_FILE, "utf8")
  )
  const chainId = network.config.chainId.toString()
  if (chainId in getContractAddress) {
    if (!currentAddresses[chainId].includes(raffle.address)) {
      currentAddresses[chainId].push(raffle.address)
    }
  }
  {
    currentAddresses[chainId] = [raffle.address]
  }
  fs.writeFileSync(FRONT_END_ADDRESSES_FILE, JSON.stringify(currentAddresses))
}

module.exports.tags = ["all", "frontend"]
