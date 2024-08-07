let observer;

const initObserver = () => {
    observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entrie => {
            let dispatchedEvent = entrie.isIntersecting ? 'enterViewPort' : 'exitViewPort';
            entrie.target.dispatchEvent(new CustomEvent(dispatchedEvent))
        })
    },{
        threshold: 0.2,
    })
} 

const viewport = (el) => {
    if(!observer) initObserver();
    observer.observe(el)
    return {
        destroy () {
            observer.unobserve(el);
        }
    }
}

export default viewport;