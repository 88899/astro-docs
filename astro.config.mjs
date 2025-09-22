// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AiEDU | DOCS',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/88899/astro-docs' }],
			sidebar: [
				{
					label: 'Aiedu',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About', slug: 'aiedu/about' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
