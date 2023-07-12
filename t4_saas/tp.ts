export function options() {
    console.log('Hitesh');
    var elems =  Array.from(document.getElementsByClassName('head-options') as HTMLCollectionOf<HTMLElement>)
    // document.getElementsByClassName('head-options');
    var ham =  Array.from(document.getElementsByClassName('hamburger') as HTMLCollectionOf<HTMLElement>)
    // document.getElementsByClassName('hamburger');
    for (var i = 0; i < elems.length; i += 1) {
       
        elems[i].style.display = 'block';
        elems[i].style.animation = 'cssAnimation 6s forwards';
        ham[i].style.background = '#FFFFFF 0% 0% no-repeat padding-box';
    }
    setTimeout(() => {
        console.log('leave');
        // var elems = document.getElementsByClassName('head-options');


        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
            ham[i].style.background = 'none';
            // elems[i].style.animation = 'cssAnimation 5s forwards';
        }
    }, 6000);
    // document.getElementsByClassName('head-options').style. = "cssAnimation 2s forwards";
}

export function start() : void {
    console.log('Hitesh');
    var elems =  Array.from(document.getElementsByClassName('notify') as HTMLCollectionOf<HTMLElement>)
    // var elems = document.getElementsByClassName('notify');
    var ham =  Array.from(document.getElementsByClassName('notification_icon') as HTMLCollectionOf<HTMLElement>)
    // var ham = document.getElementsByClassName('notification_icon');
    var badge =  Array.from(document.getElementsByClassName('badge-icon') as HTMLCollectionOf<HTMLElement>)
    // var badge = document.getElementsByClassName('badge-icon');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'block';
        elems[i].style.animation = 'cssAnimation 6s forwards';
        ham[i].style.background = '#FFFFFF 0% 0% no-repeat padding-box';
        badge[i].style.display = 'none';
    }
    setTimeout(() => {
        console.log('leave');
        // var elems = document.getElementsByClassName('notify');


        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
            ham[i].style.background = 'none';
            badge[i].style.display = 'block';
            // elems[i].style.animation = 'cssAnimation 5s forwards';
        }
    }, 6000);
}


export function bell() {
    console.log('Hitesh');
    var elems =  Array.from(document.getElementsByClassName('bell-icon') as HTMLCollectionOf<HTMLElement>)
    // var elems = document.getElementsByClassName('bell-icon');
    var ham =  Array.from(document.getElementsByClassName('notification') as HTMLCollectionOf<HTMLElement>)
    // var ham = document.getElementsByClassName('notification');
    var badge =  Array.from(document.getElementsByClassName('badge-bell') as HTMLCollectionOf<HTMLElement>)
    // var badge = document.getElementsByClassName('badge-bell');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'block';
        elems[i].style.animation = 'cssAnimation 6s forwards';
        ham[i].style.background = '#FFFFFF 0% 0% no-repeat padding-box';
        badge[i].style.display = 'none';
    }
    setTimeout(() => {
        console.log('leave');
        // var elems = document.getElementsByClassName('badge-bell');


        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
            ham[i].style.background = 'none';
            badge[i].style.display = 'block';
            // elems[i].style.animation = 'cssAnimation 5s forwards';
        }
    }, 6000);
}

// const mouseTarget = document.getElementById("ham");


// mouseTarget.addEventListener("mouseenter", (e) => {
//   mouseTarget.style.border = "5px dotted orange";
// //   enterEventCount++;
// //   addListItem(`This is mouseenter event ${enterEventCount}.`);
// });

// $(document).ready(function() {
//     console.log('dis');
//     $(".head-options").hide();
//     $("#ham").click(function() {
//         $(".head-options").show();    // or .fadeIn() for transition
//     });
// });