function main() {
    const ui = {
        container: null,
        items: [],
    };

    ui.container = document.querySelector(".infinite-cards");
    ui.items = ui.container.querySelectorAll(".infinite-cards__item");

    ui.items.forEach((item) => {
        item.addEventListener("click", (event) => {
            const newActive = event.target;
            const currentActive = ui.container.querySelector(".active");

            const newActiveCol = newActive.dataset.cell;
            const currentActiveCol = currentActive.dataset.cell;

            console.log({newActiveCol, currentActiveCol});  

            ui.items.forEach((item) => {
                item.classList.remove("active");
                item.style.gridColumnStart = item.dataset.cell;
            });
            item.classList.add("active");

            newActive.style.gridColumnStart = currentActiveCol;
            currentActive.style.gridColumnStart = newActiveCol;

        })
    });

}

main();