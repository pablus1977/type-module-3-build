

export const showAlert = (event, outputComponent) => {
    if (!outputComponent.value)
        outputComponent.value = `Hiciste ${event.type} en '${event.target.innerText}'`;
    else
        outputComponent.value = '';
}
