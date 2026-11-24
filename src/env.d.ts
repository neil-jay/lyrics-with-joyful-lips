/// <reference types="astro/client" />

declare module 'virtual:starlight/user-config' {
	const config: {
		social?: { icon: any; label: string; href: string }[];
	};
	export default config;
}
