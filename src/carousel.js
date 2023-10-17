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

            const newActiveCol = getComputedStyle(newActive).getPropertyValue("grid-column-start");
            const currentActiveCol = getComputedStyle(currentActive).getPropertyValue("grid-column-start");

            console.log({newActiveCol, currentActiveCol});  

            newActive.style.gridColumnStart = currentActiveCol;
            currentActive.style.gridColumnStart = newActiveCol;



            ui.items.forEach((item) => {
                item.classList.remove("active");
            });
            item.classList.add("active");
        })
    });

}

main();