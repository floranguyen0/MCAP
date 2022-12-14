import { BigNumber } from 'ethers';
import hre, { ethers } from 'hardhat';
import { daysToSeconds, EthUtils } from '../../../utils/EthUtils';


async function main() {
    const [deployer] = await ethers.getSigners();

    const now = await EthUtils.latestBlockTimestamp();
    const marketingAllocation = BigNumber.
        from(800_000_000).mul(BigNumber.from(10).pow(18));
    const marketingLockDurations = Array(31).fill(daysToSeconds(180)).
        map((cliff, i) => cliff + daysToSeconds(30) * i);
    const marketingReleasePercents = [0].
        concat(Array(5).fill(5)).concat(Array(25).fill(3));

    // Deploy MarketingTimeLock
    const MarketingTimeLock = await hre.ethers.getContractFactory('MarketingTimeLock');
    const marketingTimeLock = await MarketingTimeLock.deploy(
        process.env.MARKETING_ADDRESS as string,
        process.env.MEETCAP_ADDRESS as string,
        marketingAllocation,
        marketingLockDurations,
        marketingReleasePercents,
        now
    );
    await marketingTimeLock.deployed();

    // transfer tokens from the deployer to TimeLock
    const meetcap = await hre.ethers.getContractAt('Meetcap', process.env.MEETCAP_ADDRESS as string)
    await meetcap.transfer(marketingTimeLock.address, marketingAllocation);

    // Deployment data
    const networkName = hre.network.name;
    console.log('Deploying to the network:', networkName);
    console.log('Meetcap timelock deployed to the address:', marketingTimeLock.address);
    console.log("Deploying contracts by the account:", deployer.address);
    console.log('Marketing start time:', now);
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


