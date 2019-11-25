export default {
	plugins:[
		['umi-plugin-react', {
			antd: true
		}],
	],
	singular: true,
	routes: [
		{
	    	path: '/',
	    	component: './HelloWorld',
	  	},
	  	{
	  		path: '/shop',
	  		component: './shoppinglist',
	  	},
	  	{
	  		path: '/content',
	  		component: './content',
	  	},
	  	{
	  		path: '/square',
	  		component: './square',
	  	},
	  	{
	  		path: '/clock',
	  		component: './clock',
	  	},
	  	{
	  		path: '/card',
	  		component: './card',
	  	},
	  	{
	  		path: '/demo',
	  		component: './demo',
	  	},
  	],
};