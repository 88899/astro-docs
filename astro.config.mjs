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
		}),
	],
	shikiConfig: {
		theme: 'dracula',
	},
	theme: {
    	// 更换 Logo
		logo: {
		// 亮色模式 Logo（默认显示）
		light: 'assets/light.png',
		// 暗色模式 Logo（切换暗色主题时显示）
		dark: 'assets/dark.png',
		// Logo 图片的 alt 文本（必填，用于 accessibility）
		alt: 'AiEDU | DOCS',
	},
  },
});
