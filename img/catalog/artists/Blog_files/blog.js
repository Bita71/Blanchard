
async function loadArticles() {
  const result = await fetch('https://gorest.co.in/public-api/posts');
  const posts = await result.json();
  createList(posts);
  createNav(posts);
}

function createList(posts) {
  let list = document.querySelector('#list');
  for (let article of posts.data) {
    let line = document.createElement('li');
    line.append(createLink(article));
    list.append(line);
  }
  console.log(posts)
}

function clearList() {
  let list = document.querySelector('#list').querySelectorAll('li');
  for (let item of list) {
    item.remove();
  }
}

function createLink(article) {
  let link = document.createElement('a');
  link.href = `?id=${article.id}`;
  link.textContent = article.title;
  return link;
}

function createNav(posts) {
  let list = document.querySelector('#nav');
  for (let index = 1; index <= posts.meta.pagination.pages; index++) {
    let line = document.createElement('li');
    line.append(createNavLink(index));
    list.append(line);
  }
}

function createNavLink(index) {
  let link = document.createElement('a');
  link.classList.add('pagination-item');
  link.classList.add('text-light');
  link.href = `?page=${index}`;
  link.textContent = index;
  link.addEventListener('click',() => {
    clearList();
    newPage(link.href);
  })
  return link;
}

async function newPage(href) {
  const result = await fetch(`https://gorest.co.in/public-api/posts${href}`);
  const newPage = await result.json();
  createList(posts);
}

window.addEventListener('DOMContentLoaded', () => {
  loadArticles();
})
