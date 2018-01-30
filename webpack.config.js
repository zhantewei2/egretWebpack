const path=require('path');
const webpackHtmlPlugin=require('html-webpack-plugin');
const join=(...args)=>path.resolve(__dirname,...args);


module.exports={
	entry:{
		'main':join('src','main.ts'),
		'polyfill':join('src','polyfill.ts')
	},
	output:{
		path:join('dist'),
		filename:'[name].bundle.js'
	},
	resolve:{
		extensions:['.ts','.js']
	},
	module:{
		rules:[
			{test:/\.tsx?$/,loader:'ts-loader'}
		]
	},
	devtool:'cheap-eval-source-map',
	devServer:{
		port:4200,
		historyApiFallback:true,
		contentBase:path.join('assets')
	},
	plugins:[
		new webpackHtmlPlugin({
			template:join('src','index.html')
		})
	]
}