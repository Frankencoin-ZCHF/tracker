import { createConfig } from '@ponder/core';
import { Address, http } from 'viem';

import { Frankencoin } from './abis/Frankencoin';
import { ADDRESS } from './ponder.address';

export default createConfig({
	networks: {
		mainnet: {
			chainId: 1,
			transport: http(process.env.PONDER_RPC_URL_1),
		},
	},
	contracts: {
		Frankencoin: {
			network: 'mainnet',
			abi: Frankencoin,
			address: ADDRESS['1']!.frankenCoin as Address,
			startBlock: 18451518,
			filter: {
				event: 'Transfer',
			},
		},
	},
});
