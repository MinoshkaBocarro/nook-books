const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
	// Setting Phase
	const isDev = phase === PHASE_DEVELOPMENT_SERVER;
	const isProd = phase === PHASE_PRODUCTION_BUILD;
	console.log(`isDev:${isDev}  isProd:${isProd}`);

	const reactStrictMode = true;

	const env = {
		SERVER_NAME: (() => {
			if (isDev) return "http://localhost:3000/";
			if (isProd) return "https://nookbooks.vercel.app/";
		})(),
		NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
	};

	const images = {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "covers.openlibrary.org",
			},
			{
				protocol: "https",
				hostname: "**.**",
			},
			{
				protocol: "https",
				hostname: "**.**.**",
			},
		],
	};

	// Next.config returns an object
	return {
		reactStrictMode,
		env,
		images,
	};
};
