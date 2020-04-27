// $(document).ready(function() {
//     let dragCircles = $('.comparison-scrollCircle');
//     let imageComparisonRoot = $('.qubely-block-image-comparison');
//     let imageComparisonImages = $('.qubely-block-image-comparison img');
//     //console.log(imageComparisonImages);
//     dragCircles.each(function (dragCircle) {
//         let that = $(this);
//         let container = $(this).parent();
//         let resizeElement = container.find('.comparison-resize-img');
//         //resizeElement.css({"padding" : "10px"});
//         that.on('mousedown', function (event) {
//             // console.log(container[0].getBoundingClientRect().left);
//             draging();
//         });
//         that.on('touchmove', function () {
//             //console.log(container[0].getBoundingClientRect().left);
//             moving();
//         });
//         function moving() {
//             //console.log(event.pageX)
//             let pageX = event.pageX ? event.pageX : event.touches[0].clientX,
//                 containerOffset = container.get(0).getBoundingClientRect().left,
//                 containerWidth = container.outerWidth(),
//                 movingValue = (pageX - containerOffset) / (containerWidth / 100);
//             if(movingValue < 5) movingValue = 5;
//             else if(movingValue > 95) movingValue = 95;
//             that.css({"left" : movingValue+"%"});
//             resizeElement.css({"width" : movingValue+"%"});
//             //console.log(movingValue,event.touches[0].clientX+" s ", container.get(0).getBoundingClientRect().left);
//         }

//         function draging() {
//             container.on('mousemove', moving);
//             container.on('mouseup', dragRemove);
//             $(window).on('mouseup', dragRemove);
//         }

//         function dragRemove() {
//             container.unbind('mousemove');
//             console.log('mouse up');
//         }

//         // console.log(this);
//     })
// });


var imageComparison = function () {
    var dragCircles = document.querySelectorAll('.comparison-scrollCircle');
    var imageComparisonRoot = document.querySelector('.qubely-block-image-comparison');
    var imageComparisonimages = document.querySelectorAll('.qubely-block-image-comparison img');
    imageComparisonimages.forEach( function (eachImg) {
        eachImg.style.width = imageComparisonRoot.offsetWidth + 'px';
    });

    dragCircles.forEach( function (dragCircle) {
        var container = dragCircle.parentNode;
        var resizeElement = container.querySelector('.comparison-resize-img');
        dragCircle.addEventListener('mousedown', function mouseDownTrigger(event) {
            if(event.which == 3 || event.which == 2) {
                console.log("right click trigger!");
                dragCircle.removeEventListener('mousedown', mouseDownTrigger);
                return 0;
            }
            draging(dragCircle);
        });
        var body = document.body;
        dragCircle.addEventListener('touchstart', function () {
            body.style.background = 'yellow';
        });
        dragCircle.addEventListener('touchend', function () {
            body.style.background = 'green';
        });
        dragCircle.addEventListener('touchmove', function () {
            body.style.background = 'blue';
            moving();
        });
        function moving() {
            let pageX = event.pageX ? event.pageX : event.touches[0].clientX;
            var containerOffset = container.getBoundingClientRect().left - 40,
                containerWidth = container.offsetWidth,
                movingValue = ( ( pageX - 37 )  - containerOffset ) / (containerWidth / 100);
            if(movingValue < 5)
                movingValue = 5;
            else if(movingValue > 95)
                movingValue = 95;
            dragCircle.style.left = movingValue+'%';
            resizeElement.style.width = movingValue+'%';
        };
        var draging = (dragCircle) => {
            container.addEventListener('mousemove', moving);
            var dragRevoveFunc = function (event) {
                container.removeEventListener('mousemove', moving);
            };
            container.addEventListener('mouseup', dragRevoveFunc);
            window.addEventListener('mouseup', dragRevoveFunc);
        };
    });
};

if (
    document.readyState === 'complete' ||
    (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
    imageComparison();
} else {
    document.addEventListener('DOMContentLoaded', imageComparison);
}






// const dragCircle = document.querySelector('.comparison-scrollCircle');

// dragCircle.addEventListener('mousedown', (event) => {
//     console.log(event);
//     const container = event.target.parentNode;
//     const resizeElement = container.querySelector('.comparison-resize-img');
//     draging(container, dragCircle, resizeElement);
// });

// const draging = (container, dragCircle, resizeElement) => {

//     let moving = () => {
//         let containerOffset = container.offsetLeft,
//             containerWidth = container.offsetWidth,
//             movingValue = (event.pageX - containerOffset) / (containerWidth / 100);
//         console.log(movingValue);
//         if(movingValue < 10)
//             movingValue = 10;
//         else if(movingValue > 90)
//             movingValue = 90;
//         dragCircle.style.left = movingValue+'%';
//         resizeElement.style.width = movingValue+'%';
//     }

//     container.addEventListener('mousemove', moving);

//     let dragRevoveFunc = (event) => {
//         //console.log("drag remove");
//         container.removeEventListener('mousemove', moving);
//     }

//     container.addEventListener('mouseup',dragRevoveFunc);
//     window.addEventListener('mouseup',dragRevoveFunc);

// }