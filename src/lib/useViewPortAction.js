const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entrie => {
            let dispatchedEvent = entrie.isIntersecting ? 'enterViewPort' : 'exitViewPort';
            entrie.target.dispatchEvent(new CustomEvent(dispatchedEvent))
        })
    },{
        threshold: 0.3,
    })


const viewport = (el) => {
    observer.observe(el)
    return {
        destroy () {
            observer.unobserve(el);
        }
    }
}

export default viewport;