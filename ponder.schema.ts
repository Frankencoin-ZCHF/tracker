import { createSchema } from '@ponder/core';

export default createSchema((p) => ({
	Mint: p.createTable({
		id: p.string(),
		from: p.string(),
		to: p.string(),
		value: p.bigint(),
		blockheight: p.bigint(),
		timestamp: p.bigint(),
	}),
	Burn: p.createTable({
		id: p.string(),
		from: p.string(),
		to: p.string(),
		value: p.bigint(),
		blockheight: p.bigint(),
		timestamp: p.bigint(),
	}),
}));
