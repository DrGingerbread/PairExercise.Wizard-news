const data = [
	{
		id: 1,
		upvotes: 257,
		title: 'Solar-Powered Monorail Revolutionizes Urban Transportation',
		content:
			"The world's first solar-powered monorail system has been unveiled in Berlin, promising cleaner, faster, and more efficient public transport for its residents.",
		name: 'RubeusH',
		date: new Date(Date.now() - 15000000)
	},
	{
		id: 2,
		upvotes: 221,
		title: 'Animal Communication Breakthrough: The Chirp App',
		content:
			"Scientists have developed the Chirp App, enabling pet owners to communicate with their pets through translated vocalizations, revolutionizing human-animal relationships.",
		name: 'Baddock',
		date: new Date(Date.now() - 90000000)
	},
	{
		id: 3,
		upvotes: 198,
		title: 'Virtual Reality Farming: Feeding the World through Innovation',
		content:
			'A new virtual reality farming system has been introduced, allowing users to cultivate crops in a virtual environment, with real-world agricultural benefits.',
		name: 'Hetty',
		date: new Date(Date.now() - 900000)
	},
	{
		id: 4,
		upvotes: 171,
		title: 'The Sleep Revolution: Dream Inc.',
		content:
			' Dream Inc. has launched a groundbreaking wearable device that enhances the quality of sleep, promoting better physical and mental health for users.',
		name: 'Alphard',
		date: new Date(Date.now() - 5000)
	},
	{
		id: 5,
		upvotes: 166,
		title: 'Nano-Recyclers: Tackling Plastic Waste Crisis',
		content:
			"Scientists have engineered nano-recyclers that break down plastic waste into reusable materials, presenting a promising solution to the global plastic pollution crisis.",
		name: 'Baruffio',
		date: new Date(Date.now() - 10000000)
	},
	{
		id: 6,
		upvotes: 145,
		title: 'Food Printer 3000: The Future of Home Cooking',
		content:
			'The Food Printer 3000 allows users to print fully-cooked, customized meals at home, changing the way people prepare and consume food.',
		name: 'Hbeery',
		date: new Date(Date.now() - 5000000)
	},
	{
		id: 7,
		upvotes: 126,
		title: 'Project Oceanus: Rebuilding Coral Reefs with 3D Printing',
		content:
			'Scientists have successfully restored a damaged coral reef using 3D printed structures, offering new hope for marine conservation efforts worldwide.',
		name: 'Alatar',
		date: new Date(Date.now() - 600000)
	},
	{
		id: 8,
		upvotes: 114,
		title: 'Astronauts Discover New Bacterial Species in Space',
		content:
			'Astronauts aboard the International Space Station have discovered a new bacterial species with potential applications in biotechnology and medicine.',
		name: 'Falco',
		date: new Date(Date.now() - 60000000)
	},
	{
		id: 9,
		upvotes: 102,
		title: 'Robo-Taxis: The Rise of Autonomous Transportation',
		content:
			'Autonomous robo-taxis are now available in several major cities, offering a safer and more efficient transportation option for urban dwellers.',
		name: 'Otto',
		date: new Date(Date.now() - 3000000)
	},
	{
		id: 10,
		upvotes: 59,
		title: 'The Mindful Revolution: Brain-Computer Interfaces for Meditation',
		content:
			'New brain-computer interface technology allows users to improve their meditation practices, enhancing mental wellbeing and stress reduction.',
		name: 'Cuthbert',
		date: new Date(Date.now() - 6000000)
	},
	{
		id: 11,
		upvotes: 46,
		title: 'Eco-Fashion: Clothing Made from Algae',
		content: 'A startup company has introduced sustainable clothing made from algae fibers, reducing the environmental impact of the fashion industry.',
		name: 'Humphrey22',
		date: new Date(Date.now() - 50000)
	},
	{
		id: 12,
		upvotes: 30,
		title: 'The Language of Trees: Decoding Forest Communication',
		content:
			"Researchers have discovered complex communication networks among trees, revealing new insights into forest ecosystems and their responses to environmental changes.",
		name: 'Bellatrix1',
		date: new Date(Date.now() - 6000000)
	},
	{
		id: 13,
		upvotes: 21,
		title: 'A Cure for Baldness: Gene Therapy Breakthrough',
		content:
			'Scientists have developed a gene therapy treatment that regenerates hair follicles, offering a potential cure for baldness.',
		name: 'Dracod',
		date: new Date(Date.now() - 60000)
	},
	{
		id: 14,
		upvotes: 10,
		title: 'Worlds First Holographic Concert: A New Era of Live Music',
		content: 'A groundbreaking holographic concert has taken place in Tokyo, featuring realistic holographic musicians and revolutionizing the live music experience.',
		name: 'Lupin',
		date: new Date()
	}
];

const list = () => {
	return [ ...data ]; // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
};

const find = (id) => {
	const post = data.find((post) => post.id === +id);
	return { ...post }; // Again, we copy the post data before returning so the original information is safe.
};

module.exports = { list: list, find: find };
