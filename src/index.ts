import { ponder } from '@/generated';
import { zeroAddress } from 'viem';
import { writeFileSync } from 'fs';

writeFileSync('./exports/mint.csv', 'blockheight,timestamp,address,amount\n', { flag: 'w' });
writeFileSync('./exports/burn.csv', 'blockheight,timestamp,address,amount\n', { flag: 'w' });

ponder.on('Frankencoin:Transfer', async ({ event, context }) => {
	const { Mint, Burn } = context.db;

	// emit Transfer(address(0), recipient, amount);
	if (event.args.from === zeroAddress) {
		const date = new Date(parseInt(event.block.timestamp.toString()) * 1000).toISOString();
		const data: string = `${event.block.number}, ${date}, ${event.args.to}, ${parseInt(event.args.value.toString()) / 10 ** 18}`;

		writeFileSync('./exports/mint.csv', `${data}\n`, { flag: 'a+' });

		await Mint.create({
			id: `${event.args.to}-mint-${event.block.number}`,
			data: {
				from: zeroAddress,
				to: event.args.to,
				value: event.args.value,
				blockheight: event.block.number,
				timestamp: event.block.timestamp,
			},
		});
	}

	// emit Transfer(account, address(0), amount);
	if (event.args.to === zeroAddress) {
		const date = new Date(parseInt(event.block.timestamp.toString()) * 1000).toISOString();
		const data: string = `${event.block.number}, ${date}, ${event.args.from}, ${parseInt(event.args.value.toString()) / 10 ** 18}`;

		writeFileSync('./exports/burn.csv', `${data}\n`, { flag: 'a+' });

		await Burn.create({
			id: `${event.args.to}-burn-${event.block.number}`,
			data: {
				from: event.args.from,
				to: zeroAddress,
				value: event.args.value,
				blockheight: event.block.number,
				timestamp: event.block.timestamp,
			},
		});
	}
});
