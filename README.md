# React Components
This is a library of reusable React-style TypeScript components originally made for projects by Bruno Veiga.

## Setup
Add this package to the `devDependencies` in your `package.json`:

NPM:
```
npm install @bveiga/react-components --save-dev
```

Yarn:
```
yarn add @bveiga/react-components --dev
```
## Usage
To use a component and its styling, simply import it into a TypeScript module like this:
```ts
import FeaturedImage from '@bveiga/react-components/src/TextBox/TextBox';
```

Here's an example page module using the component:
```ts
const AboutPage: FC<AboutPageProps> = ({}) => {
	const portraitImage = {
		src: 'https://via.placeholder.com/300x400',
		alt: 'Featured Image Placeholder'
	};

	return (
		<>
			<FeaturedStory image={portraitImage}>
				<TextBox posVertical={'center'}>
					<h1>Test Title</h1>
					<p>Test description</p>
				</TextBox>
			</FeaturedStory>
		</>
	);
}
```

## Components
1. ButtonLink
2. ContactForm
3. FeaturedImage
4. FeaturedStory
5. Footer
6. Header
7. Hero
8. Section
9. TextBox

## Version History
v2.0.0
- Converted repository to work with non-CRA apps
- Added jest for unit tests

v1.0.2
- Fixed issue where mobile nav stayed open when navigating to a new page
- Fixed `navbar-light` and `navbar-dark` class from Bootstrap
- Removed hardcoded API for contact forms

v1.0.1
- Fixed style inheritance issues
- Added a build script to test if Sass compiles within the repo
- Added more details on how to use the library

v1.0.0
- Public Release

v0.1.2
- Fixing package dependencies

v0.1.1
- Fixing paths to custom types

v0.1.0
- Original separation of components library

## License
MIT

See [LICENSE](LICENSE.txt) to see the full text.