export function options() {

    const elems = document.getElementsByClassName('head-options');

    const hams = document.getElementsByClassName('hamburger');
    for (var i = 0; i < elems.length; i += 1) {
        const ele = elems[i] as HTMLElement;
        const ham = hams[i] as HTMLElement;
        ele.style.display = 'block';
        ele.style.animation = 'cssAnimation 6s forwards';
        ham.style.background = '#FFFFFF 0% 0% no-repeat padding-box';
    }
    setTimeout(() => {

        for (var i = 0; i < elems.length; i += 1) {
            const ele = elems[i] as HTMLElement;
            const ham = hams[i] as HTMLElement;
            ele.style.display = 'none';
            ham.style.background = 'none';
        }
    }, 6000);

}

export function start(): void {

    const elems = document.getElementsByClassName('notify');

    const ham = document.getElementsByClassName('notification_icon');

    const badge = document.getElementsByClassName('badge-icon');

    for (var i = 0; i < elems.length; i += 1) {
        const ele = elems[i] as HTMLElement;
        const ha = ham[i] as HTMLElement;
        const bad = badge[i] as HTMLElement;
        ele.style.display = 'block';
        ele.style.animation = 'cssAnimation 6s forwards';
        ha.style.background = '#FFFFFF 0% 0% no-repeat padding-box';
        bad.style.display = 'none';
    }
    setTimeout(() => {

        for (var i = 0; i < elems.length; i += 1) {
            const ele = elems[i] as HTMLElement;
            const ha = ham[i] as HTMLElement;
            const bad = badge[i] as HTMLElement;
            ele.style.display = 'none';
            ha.style.background = 'none';
            bad.style.display = 'block';
        }
    }, 6000);
}



export function bell() {
    console.log('Hitesh');
    const slides = document.getElementsByClassName('bell-icon');
    const hams = document.getElementsByClassName('notification');
    const badges = document.getElementsByClassName('badge-bell');
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;
        slide.style.display = "block";
        slide.style.animation = 'cssAnimation 6s forwards';
        const ham = hams[i] as HTMLElement;
        ham.style.background = '#FFFFFF 0% 0% no-repeat padding-box';
        const badge = badges[i] as HTMLElement;
        badge.style.display = 'none';
    }

    setTimeout(() => {
        console.log('leave');
        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i] as HTMLElement;
            slide.style.display = "none";
            const ham = hams[i] as HTMLElement;
            ham.style.background = 'none';
            const badge = badges[i] as HTMLElement;
            badge.style.display = 'block';
        }

    }, 6000);
}
