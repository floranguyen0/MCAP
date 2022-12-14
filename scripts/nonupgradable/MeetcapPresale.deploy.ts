import hre, { ethers } from 'hardhat';
import 'dotenv/config'


async function main() {
    const [deployer] = await ethers.getSigners();

    // Deploy MeetcapPresale
    const MeetcapPresale = await hre.ethers.getContractFactory('MeetcapPresale');
    // Change to the real meetcap address when deploying to mainnet
    const meetcapPresale = await MeetcapPresale.deploy(1500, process.env.MEETCAP_ADDRESS as string);
    await meetcapPresale.deployed();

    // transfer tokens from the deployer to Meetcap Presale
    const meetcap = await hre.ethers.getContractAt('Meetcap', process.env.MEETCAP_ADDRESS as string)
    await meetcap.transfer(meetcapPresale.address, (await meetcap.totalSupply()).div(100).mul(3));

    // Deployment data
    const networkName = hre.network.name;
    console.log('Deploying to the network:', networkName);
    console.log('Meetcap presale deployed to the address:', meetcapPresale.address);
    console.log("Deploying contracts by the account:", deployer.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


