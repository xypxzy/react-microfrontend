import { BuildMode, BuildPlatform, buildWebpack } from '@packages/build-config'
import path from 'path'
import webpack from 'webpack'
import packageJson from './package.json'

interface IEnvVariables {
	mode?: BuildMode
	port?: number
	analyzer?: boolean
	platform?: BuildPlatform
}

export default (env: IEnvVariables) => {
	const paths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		public: path.resolve(__dirname, 'public'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3001,
		mode: env.mode ?? 'development',
		paths,
		analyzer: env.analyzer,
		platform: env.platform ?? 'desktop',
	})

	config.plugins.push(
		new webpack.container.ModuleFederationPlugin({
			name: 'shop',
			filename: 'remoteEntry.js',
			exposes: {
				'./Router': './src/router/Router.tsx',
			},
			shared: {
				...packageJson.dependencies,
				react: {
					eager: true,
					requiredVersion: packageJson.dependencies['react'],
				},
				'react-router-dom': {
					eager: true,
					requiredVersion: packageJson.dependencies['react-router-dom'],
				},
				'react-dom': {
					eager: true,
					requiredVersion: packageJson.dependencies['react-dom'],
				},
			},
		})
	)

	return config
}
