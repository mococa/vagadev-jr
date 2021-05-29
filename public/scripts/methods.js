const currency = (c) => { // Converte float em Real
    var _num = new Number(c).toLocaleString("pt-BR");
    if (_num.includes(",")) {
        if (_num.split(",")[1].length > 1) {
            _num = _num.substring(0, _num.indexOf(",") + 3)
        } else {
            if (!_num.endsWith("0")) {
                _num += 0
            }
        }
    } else {
        _num += ",00"
    }
    return _num
}
const subfy = (x, size) => { // => Retorna HTML com CSS de dinheiro (centavos em cima)
    return x.split(',')[0] + `<sup style='font-size:${size}px'>,` + x.split(',')[1] + "</sup>"
}
const moneyfy = (x) => { // => Converte Real em float
    return parseFloat(x.split('$')[1].replace(',', '.'))
}

function toggleModal(show) {
    if (show === undefined) { $('.modal').toggleClass('active') } else if (show) {
        $('.modal').addClass('active')
    } else {
        $('.modal').removeClass('active')
    }

    if ($('.modal').hasClass('active')) {
        $('body').css('overflow-y', 'hidden')
    } else {
        $('body').css('overflow-y', 'unset')
    }
    $('.modal-order .top img').click(() => {
        toggleModal(false)
    })
}

function addToCart(game) {
    let cart = localStorage.getItem('cart')
    let cart_json = JSON.parse(cart)
    cart_json.length ?
        cart_json.push(game) &&
        localStorage.setItem('cart', JSON.stringify(cart_json)) :
        localStorage.setItem('cart', JSON.stringify([game]));
    // Lock scrolling
    $('html').addClass('lock');
}

function removeFromCart(game) {
    let cart = localStorage.getItem('cart')
    let cart_json = JSON.parse(cart)
    cart_json.splice(cart_json.findIndex(x => x.id == game.id))
    localStorage.setItem('cart', JSON.stringify(cart_json));
}

function closeModal() {
    // Unlock scrolling
    $('html').removeClass('lock');
}

function reslick(selector, opt = {}) {
    //ReSlicking with error suppressor
    try {
        $(selector).slick('unslick')
    } catch (err) {}
    $(selector).slick(opt)
}