// unmatched links
console.log([...document.querySelectorAll('a')].filter(a => !document.querySelector('#' + CSS.escape(a.attributes.href.value.substring(1)))));

// empty link tags
console.log([...document.querySelectorAll('a')].filter(a => !a.innerText));