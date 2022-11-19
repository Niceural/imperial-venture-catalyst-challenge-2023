import ethers from "ethers"
import digitalAssetDeployment from "../deployments/goerli/DigitalAsset.json";

export async function createDigitalAsset(to: string, uri: string): string {
    const provider = new ethers.provider.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner();
    const digitalAsset = new ethers.Contract(digitalAssetDeployments.address, digitalAssetDeployments.abi, signer);
    const tokenId = await digitalAsset.tokenCounter();
    const tx = await digitalAsset.mint(to, uri);
    const receipt = await tx.wait(1);
    return tokenId.toString();
}
