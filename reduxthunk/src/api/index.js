import fetch from 'fetch'

const loadImages = async () => {
	const results = await fetch('https://api.unsplash.com/search/photos?client_id=172ab828ff61404421431f0ce988ce43f2e1625bac519b15815d29374abe6a37&query=cars&page=1').then(response => response.json())
	return results
}

export default loadImages

