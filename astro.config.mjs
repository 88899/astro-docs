// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AiEDU | DOCS',
			head: [
				{
				tag: 'script',
				content: `
					// 页面加载前执行
					(() => {
					// 读取本地存储的主题偏好（默认不存在）
					const savedScheme = localStorage.getItem('starlight-theme');
					// 若没有保存的偏好，强制设为亮色
					if (!savedScheme) {
						localStorage.setItem('starlight-theme', 'light');
					}
					// 应用主题（移除暗色类）
					document.documentElement.classList.toggle(
						'dark',
						localStorage.getItem('starlight-theme') === 'dark'
					);
					})();
				`,
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/88899/astro-docs' },
				{ icon: 'twitter', label: 'Discord', href: 'https://x.com/home' },

			],
			favicon: '/favicon.svg',
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
				replacesTitle: true, // 如果设置为 true，则隐藏标题文本

			},
			customCss: ['./src/style/global.css','./src/style/theme.css'],
		}),
	],
});
