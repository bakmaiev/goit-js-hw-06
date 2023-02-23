const categoriesItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItemEl.length}`);
const categoriesElement = categoriesItemEl.forEach(el => {
    const category = el.firstElementChild.textContent;
    const elements = el.lastElementChild.children.length;
    console.log(`Category: ${category}\nElements: ${elements}`);
});