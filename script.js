let priceToggler = document.querySelector('.toggler');
let currencyToggler = document.querySelector('.toggler1');
let currency = document.querySelectorAll('.currency');
let price = document.querySelectorAll('.pr');
let period = document.querySelectorAll('.period');

priceToggler.addEventListener('click', function () {
    this.classList.toggle('active');
    updateCurrency();
});

currencyToggler.addEventListener('click', function () {
    this.classList.toggle('active');
    updateCurrency();
});

function updateCurrency() {
    let currencySymbol = currencyToggler.classList.contains('active') ? '₹' : '$';
    let periodSymbol = priceToggler.classList.contains('active') ? 'Year' : 'month';

    currency.forEach(cur => {
        cur.innerText = currencySymbol;
    });
    period.forEach(per => {
        per.innerText = ` /${periodSymbol}`;
    });


    for(let i = 0; i < price.length; i++) {
        
        let basePrice = (i+1)*10;
        
        if (currencySymbol === '₹') {
            basePrice *= 75; 
        }
        if (periodSymbol === 'Year') {
            basePrice *= 12; 
        }
        price[i].innerText = basePrice;
    };

    // price.forEach((pr, index) => {
    //     let basePrice = index === 0 ? 10 : index === 1 ? 20 : 30; 
    //     if (currencySymbol === '₹') {
    //         basePrice *= 75; 
    //     }
    //     if (periodSymbol === 'Year') {
    //         basePrice *= 12; 
    //     }
    //     pr.innerText = basePrice;
    // });
}

updateCurrency();
