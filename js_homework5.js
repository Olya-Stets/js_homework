var services = {
    prices: {
        "стрижка": "60 грн",
        "гоління": "80 грн",
        "Миття голови": "100 грн"
    },

    price: function () {
        let total = 0;
        for (let key in this.prices) { 
            total += parseFloat(this.prices[key]);
        }
        return "Загальна сума = " + total + " грн";
    },

    minPrice: function () {
        let min = Infinity;
        for (let key in this.prices) {
            let price = parseFloat(this.prices[key]);
            if (price < min) {
                min = price;
            }
        }
        return "Мінімальна ціна = " + min + " грн";
    },

    maxPrice: function () {
        let max = -Infinity;
        for (let key in this.prices) {
            let price = parseFloat(this.prices[key]);
            if (price > max) {
                max = price;
            }
        }
        return "Максимальна ціна = " + max + " грн";
    }
};

services.prices["New service"] = "99.99 грн";

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());
