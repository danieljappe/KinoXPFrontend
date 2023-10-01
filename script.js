const movies = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
    { id: 6, title: "Item 6" },
    { id: 7, title: "Item 7" },
    { id: 8, title: "Item 8" }
  ];

const flexboxContainer = document.querySelector('.flexbox-container');
const flexboxContent = document.querySelector('.flexbox-content');

movies.forEach(movie => {
  const divElement = document.createElement('div');
  divElement.className = `flexbox-item flexbox-item-${movie.id}`;
  divElement.textContent = movie.title;
  flexboxContent.appendChild(divElement);
});

document.addEventListener('DOMContentLoaded', function() {
    const flexboxItems = document.querySelectorAll('.flexbox-item');

    flexboxItems.forEach(flexboxItem => {
        const description = flexboxItem.querySelector('.description');

        flexboxItem.addEventListener("mouseover", function() {
            flexboxItem.style.backgroundColor = "#333";
            flexboxItem.style.transition = "background-color 0.6s ease";
            flexboxItem.style.cursor = "pointer";
            description.style.display = "block";
        });

        flexboxItem.addEventListener("mouseout", function() {
            // Original color
            flexboxItem.style.backgroundColor = "";
            flexboxItem.style.transition = "background-color 0.3s ease";
            description.style.display = "none";
        });
    });
});
