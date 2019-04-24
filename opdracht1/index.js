/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var order = [];

//make all cover arts draggable
window.onload = function () {

    document.querySelectorAll('main img').forEach(function (item) {
        item.setAttribute("draggable", "true");
    });

    //get the order from localStorage
    order = (localStorage.getItem('order'));
    var coverArtSources = order.split(',');

    //give all images the correct src according to the order
    var allImages = [];
    document.querySelectorAll('main img').forEach(function (child) {
        allImages.push(child);

        var i;
        for (i = 0; i < allImages.length; i++) {
            child.src = coverArtSources[i];
        }
    });
};

//update & save the order of the cover arts in the local storage
function setOrder() {
    document.querySelectorAll('main img').forEach(function (item) {
        order.push(item.src);
    });
    var updatedOrder = order.toString();

    //save to localStorage
    localStorage.setItem('order', updatedOrder);
    order = localStorage.getItem('order');
}


var startCover;
var startCoverIndex;
var endCover;
var endCoverIndex;

document.querySelectorAll('main img').forEach(function (item) {
    //fires when user starts dragging an element
    item.addEventListener('dragstart', function () {
        startCover = this.src;
        startCoverIndex = this.id;

        this.classList.add('baseDnD');
    });

    //fires when dragged element enters a valid drop zone
    item.addEventListener('dragenter', function () {

        //styles the potential end iamge if it isn't the base
        if (this.src !== startCover) {
            this.classList.add('endDnD');
        }
    });

    //fires while the element is in a valid drop zone
    item.addEventListener('dragover', function () {
        //prevent the default browser action from cancelling the drop (2 ways for cross-browser)
        event.preventDefault();
        return false;
    });

    //fires when dragged element leaves a valid drop zone
    item.addEventListener('dragleave', function () {
        this.classList.remove('endDnD');
    });

    //fires when user relieves the mouse
    item.addEventListener('dragend', function () {
        this.classList.remove('baseDnD');
    });

    //fires when when the dragged element is being dropped in a valid drop zone
    item.addEventListener('drop', function () {
        endCover = this.src;
        endCoverIndex = this.id;

        //switch the values of start-/endCover
        endCover = [startCover, startCover = endCover][0];

        //assign the new src's to the images
        document.querySelector('main img:nth-of-type(' + startCoverIndex + ')').src = startCover;
        document.querySelector('main img:nth-of-type(' + endCoverIndex + ')').src = endCover;

        this.classList.remove('endDnD');

        //clear the current order and call the function to create a new order;
        order = [];
        setOrder();
    });
});
