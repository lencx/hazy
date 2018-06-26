// https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript

declare global {
    interface Window {
        mozRequestAnimationFrame: any;
        msRequestAnimationFrame: any;
    }
}

export default (el: Element|Window|any, from = 0, to: number, duration = 500) => {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            // tslint:disable-next-line:only-arrow-functions
            function(callback) {
                return window.setTimeout(callback, 1000 / 60)
            }
        )
    }
    const difference = Math.abs(from - to)
    const step = Math.ceil(difference / duration * 50)

    // tslint:disable-next-line:no-shadowed-variable
    function scroll(start: number, end: number, step: number) {
        if (start === end) return

        let d = (start + step > end) ? end : start + step

        if (start > end) {
            d = (start - step < end) ? end : start - step
        }

        // tslint:disable-next-line:triple-equals
        if (el === window) {
            window.scrollTo(d, d)
        } else {
            el.scrollTop = d
        }
        window.requestAnimationFrame(() => scroll(d, end, step))
    }
    scroll(from, to, step)
}
