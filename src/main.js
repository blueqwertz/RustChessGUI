const resize_fn = () => {
    document.getElementById("squares").style = ""
    let _size = Math.min(document.getElementById("field").offsetHeight, document.getElementById("field").offsetWidth)
    document.getElementById("squares").style.width = _size + "px"
    document.getElementById("squares").style.height = _size + "px"
    console.log(_size)
}

window.addEventListener("resize", resize_fn)

resize_fn()
