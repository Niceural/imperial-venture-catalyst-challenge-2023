import { developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS } from "../utils/const.ts"
import verify from "../utils/verify"
import {DeployFunction} from "hardhat-deploy/types"
import {HardhatRuntimeEnvironment} from "hardhat/types"

const deployDigitalAsset: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
  ) {
    const { deployments, getNamedAccounts, network, ethers } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS;

    const args: any[] = ["My fav sneakers", "MFS"];
    const digitalAsset = await deploy("DigitalAsset", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: waitBlockConfirmations,
    })

    // verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("verifying...")
        await verify(digitalAsset.address, args)
    }
    log("----------------------------------------------------")
}

export default deployDigitalAsset
deployDigitalAsset.tags = ["all", "digitalAsset"]
