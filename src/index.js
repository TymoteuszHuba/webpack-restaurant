import './style.css';
import logo from './logo.jpg';
import hands from './hands.jpeg';
import slice_pizza from './slice_pizza.jpg';

// main available for each function
let main;
// get the year for footer
const getYear = new Date().getFullYear();
// console.log(getYear);

// universal function responsible for add elements to website
const createElementWithClass = (
	parentType,
	elementName,
	count,
	childConfigs,
	setId = false
) => {
	const parentElement = document.createElement(parentType);
	parentElement.classList.add(elementName);

	for (let i = 0; i < count; i++) {
		const childConfig = childConfigs[i % childConfigs.length];
		const childElement = document.createElement(childConfig.type);
		childElement.classList.add(childConfig.className);
		parentElement.appendChild(childElement);

		if (setId && childConfig.id) {
			childElement.setAttribute('id', childConfig.id);
		}

		if (childConfig.innerChildren) {
			childConfig.innerChildren.forEach((innerChild) => {
				const innerElement = document.createElement(innerChild.type);
				innerElement.classList.add(innerChild.className);
				innerElement.textContent = innerChild.textContent;
				childElement.appendChild(innerElement);
			});
		}

		if (childConfig.imgSrc) {
			const imgElement = new Image();
			imgElement.src = childConfig.imgSrc;
			imgElement.classList.add('section-image');
			childElement.appendChild(imgElement);
		}

		if (childConfig.textContent) {
			childElement.textContent = childConfig.textContent;
		}
	}

	return parentElement;
};

// permament structure of website
const structureInit = () => {
	// initialize of permament website elements
	const navbar = createElementWithClass(
		'nav',
		'nav',
		3,
		[
			{type: 'a', className: 'nav-link', textContent: 'Home', id: 'link-home'},
			{type: 'a', className: 'nav-link', textContent: 'Menu', id: 'link-menu'},
			{
				type: 'a',
				className: 'nav-link',
				textContent: 'Contact',
				id: 'link-contact',
			},
		],
		true
	);
	const header = createElementWithClass('header', 'header');
	main = createElementWithClass('main', 'main');
	const footer = createElementWithClass('footer', 'footer', 1, [
		{
			type: 'p',
			className: 'footer-text',
			textContent: `All rights reserved © Created by TH ${getYear}`,
		},
	]);

	document.body.append(navbar, header, main, footer);

	// create logo as a Image and add it to the header (img is hidden to keep correct height)
	const myLogo = new Image();
	myLogo.src = logo;
	header.appendChild(myLogo);
};

// main for home
const homeInit = () => {
	const sectionTitle = createElementWithClass('section', 'section-header', 2, [
		{
			type: 'div',
			className: 'section-text-box',
			innerChildren: [
				{
					type: 'h1',
					className: 'section-title',
					textContent: 'Casa Della Napoletana',
				},
				{
					type: 'p',
					className: 'section-description',
					textContent:
						"Magnificent Italian pizza you haven't ever tasted, made with natural ingredients. From the love of pizza",
				},
			],
		},
		{
			type: 'div',
			className: 'img-wrapper',
			imgSrc: hands,
		},
	]);
	const sectionAbout = createElementWithClass('section', 'section-about', 2, [
		{
			type: 'div',
			className: 'section-text-box',
			innerChildren: [
				{
					type: 'h1',
					className: 'section-title',
					textContent: 'About Napoletana',
				},
				{
					type: 'p',
					className: 'section-description',
					textContent:
						' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ipsa recusandae adipisci neque ex ut ratione possimus voluptatum voluptatibus ipsum asperiores reiciendis praesentium voluptate accusamus, hic laborum nam placeat, blanditiis nostrum corrupti! Accusantium magni dignissimos dolorum minus rem cumque ipsa ex ducimus ea, repellendus molestias totam a soluta similique. Quis culpa, animi saepe delectus corrupti, nostrum inventore autem consectetur aperiam ea nisi in voluptatum provident, excepturi dolorem laboriosam ipsam quasi. Eum cum, error ipsa odit nam excepturi incidunt obcaecati deserunt optio ipsum velit consequatur voluptatibus, beatae inventore? Repellendus accusantium accusamus quas sit ipsam necessitatibus, ratione porro vitae. Omnis, repudiandae vero!',
				},
			],
		},
		{
			type: 'div',
			className: 'img-wrapper',
			imgSrc: slice_pizza,
		},
	]);

	// add elements do website

	main.append(sectionTitle, sectionAbout);
};

// main function which control elements for webiste
const website = () => {
	structureInit();
	homeInit();
	const navLinks = document.querySelectorAll('.nav-link');
	navLinks.forEach((navLink) => {
		navLink.addEventListener('click', (event) => {
			console.log(event.target.id);
			if (event.target.id === 'link-home') {
			}
		});
	});
};

// invoke website function
website();
