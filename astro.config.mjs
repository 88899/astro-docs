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
					label: '指南',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About', slug: 'aiedu/about' },
					],
				},
				{
					label: '接口文档',
					autogenerate: { directory: 'reference' },
				},
			],
			logo: {
				light: './src/assets/light.png', // 亮色模式 Logo
				dark: './src/assets/dark.png', // 暗色模式 Logo
				alt: 'AiEDU|DOCS', // 替代文本

			},
			customCss: ['./src/style/global.css','./src/style/theme.css'],
		}),
	],
});
