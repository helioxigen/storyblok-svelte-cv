import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import { isoImport } from 'vite-plugin-iso-import';

const config: UserConfig = {
	plugins: [sveltekit(), mkcert(), isoImport()],
	server: {
		https: true
	}
};

export default config;
