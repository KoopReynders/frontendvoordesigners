/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var startContent;
var startContentIndex;
var endContent;
var endContentIndex;

var url = window.location.href.split('/index.html');

document.querySelectorAll('main div').forEach(function (item) {
    //fires when user starts dragging an element
    item.addEventListener('dragstart', function () {
        //save all content of 'start'div in variable
        startContent = {
            img: this.querySelector('img').src.split(url[0])[1],
            h2: this.querySelector('h2').textContent,
            audio: this.querySelector('audio source').src.split(url[0])[1]
        };
        startContentIndex = this.id;

        this.classList.add('baseDnD');
    });

    //fires when dragged element enters a valid drop zone
    item.addEventListener('dragenter', function () {
        this.classList.add('endDnD');
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
        //save all content of 'end'div in variable
        endContent = {
            img: this.querySelector('img').src.split(url[0])[1],
            h2: this.querySelector('h2').textContent,
            audio: this.querySelector('audio source').src.split(url[0])[1]
        };
        endContentIndex = this.id;

        //switch the content objects of start-/endContent 
        endContent = [startContent, startContent = endContent][0];

        //assign the switched contents to the div's
        document.querySelector('div:nth-of-type(' + startContentIndex + ') img').src = startContent.img;
        document.querySelector('div:nth-of-type(' + startContentIndex + ') h2').textContent = startContent.h2;
        document.querySelector('div:nth-of-type(' + startContentIndex + ') audio').src = startContent.audio;

        document.querySelector('div:nth-of-type(' + endContentIndex + ') img').src = endContent.img;
        document.querySelector('div:nth-of-type(' + endContentIndex + ') h2').textContent = endContent.h2;
        document.querySelector('div:nth-of-type(' + endContentIndex + ') audio').src = endContent.audio;

        this.classList.remove('endDnD');
    });
});
//touchstart, touchenter, touchover, touchleave, touchend, touchmove

//touchstart = vastpakken
//touchend = loslaten
//touchmove = slepen
