
const imageComparison = function () {
  
    const dragCircles = document.querySelectorAll('.comparison-scrollCircle');
    const imageComparisonRoot = document.querySelector('.qubely-block-image-comparison');
    const imageComparisonimages = document.querySelectorAll('.qubely-block-image-comparison img');
  
    imageComparisonimages.forEach( function (eachImg) {
        eachImg.style.width = imageComparisonRoot.offsetWidth + 'px';
    });

    dragCircles.forEach( function (dragCircle) {
      
        const container = dragCircle.parentNode;
        const resizeElement = container.querySelector('.comparison-resize-img');
      
        dragCircle.addEventListener('mousedown', function mouseDownTrigger(event) {
            // prevent right click mousedown event
            if(event.which == 3 || event.which == 2) {
                dragCircle.removeEventListener('mousedown', mouseDownTrigger); return;
            }
            draging(dragCircle);
        });
      
        function moving() {
            let pageX = event.pageX ? event.pageX : event.touches[0].clientX,
                containerOffset = container.getBoundingClientRect().left,
                containerWidth = container.offsetWidth,
                movingValue = (pageX  - containerOffset) / (containerWidth / 100);
            if(movingValue < 5) movingValue = 5;
            else if(movingValue > 95) movingValue = 95;
            dragCircle.style.left = movingValue+'%';
            resizeElement.style.width = movingValue+'%';
        }

        function dragRevoveFunc() {
            container.removeEventListener('mousemove', moving);
        } 

        function draging(dragCircle) {
            container.addEventListener('mousemove', moving);
            container.addEventListener('mouseup', dragRevoveFunc);
            window.addEventListener('mouseup', dragRevoveFunc);
        }

        dragCircle.addEventListener('touchmove', moving);
      
    }); // end of dragcircle foreach
  
};


if (
    document.readyState === 'complete' ||
    (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
    imageComparison();
} else {
    document.addEventListener('DOMContentLoaded', imageComparison);
}





// width jqery
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