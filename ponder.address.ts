import { Address, zeroAddress } from 'viem';
import { Chain, mainnet } from 'viem/chains';

export type AddressObject = { [chainId in Chain['id']]?: { [key: string]: Address } };

export const ADDRESS: AddressObject = {
	[mainnet.id]: {
		frankenCoin: '0xB58E61C3098d85632Df34EecfB899A1Ed80921cB',
		bridge: '0x7bbe8F18040aF0032f4C2435E7a76db6F1E346DF',
		xchf: '0xb4272071ecadd69d933adcd19ca99fe80664fc08',
		equity: '0x1bA26788dfDe592fec8bcB0Eaff472a42BE341B2',
		mintingHub: '0x7546762fdb1a6d9146b33960545C3f6394265219',
		wFPS: '0x5052D3Cc819f53116641e89b96Ff4cD1EE80B182',
	},
};
