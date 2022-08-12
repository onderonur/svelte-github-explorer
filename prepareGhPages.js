import fs from 'fs/promises';

async function prepareGhPages() {
	console.log('GH Pages preparation is started.');
	await fs.copyFile('./build/index.html', './build/404.html');
	console.log('GH Pages preparation is finished.');
}

prepareGhPages();

export default prepareGhPages;
