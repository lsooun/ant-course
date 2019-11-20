export default {
	plugins:[
		['umi-plugin-react', {

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
	  	}
  	],
};