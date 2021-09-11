function DragEvent(event) {
    event
    .dataTransfer
    .setData(`text`, event.target.id);
    event
    .currentTarget
    .style
    .backgroundColor = `randomColor`;
}
function DragOver(event){
    event.preventDefault();
}
