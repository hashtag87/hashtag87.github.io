// react cdn
const reactcdn1 = document.createElement(`script`);
// react dom cdn
const reactcdn2 = document.createElement(`script`);

// Babel cdn (to compile JSX) -->
const babeltocompilejsx = document.createElement(`script`);

export default function reactnbabel() {
    reactcdn1.src = `https://unpkg.com/react@latest/umd/react.production.min.js`;
    reactcdn2.src = `https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js`;
    babeltocompilejsx.src = `https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js`;
    document.head.appendChild(reactcdn1);
    document.head.appendChild(reactcdn2);
    document.head.appendChild(babeltocompilejsx);
}