var _a;
var RationShop = /** @class */ (function () {
    function RationShop(shopName, location) {
        this.shopName = shopName;
        this.location = location;
        this.availableItems = new Map();
    }
    RationShop.prototype.addItem = function (itemName, quantity) {
        if (this.availableItems.has(itemName)) {
            this.availableItems.set(itemName, this.availableItems.get(itemName) + quantity);
        }
        else {
            this.availableItems.set(itemName, quantity);
        }
        console.log("".concat(quantity, " ").concat(itemName, "(s) added to ").concat(this.shopName, "'s inventory."));
    };
    RationShop.prototype.removeItem = function (itemName, quantity) {
        if (this.availableItems.has(itemName)) {
            var currentQuantity = this.availableItems.get(itemName);
            if (currentQuantity >= quantity) {
                this.availableItems.set(itemName, currentQuantity - quantity);
                console.log("".concat(quantity, " ").concat(itemName, "(s) removed from ").concat(this.shopName, "'s inventory."));
            }
            else {
                console.log("Insufficient quantity of ".concat(itemName, " in ").concat(this.shopName, "'s inventory."));
            }
        }
        else {
            console.log("".concat(itemName, " not found in ").concat(this.shopName, "'s inventory."));
        }
    };
    RationShop.prototype.displayAvailableItems = function () {
        var outputDiv = document.getElementById('output');
        if (outputDiv) {
            outputDiv.innerHTML = "<p>Available items in ".concat(this.shopName, ":</p>");
            var itemList_1 = document.createElement('ul');
            this.availableItems.forEach(function (quantity, itemName) {
                var item = document.createElement('li');
                item.textContent = "".concat(itemName, ": ").concat(quantity);
                itemList_1.appendChild(item);
            });
            outputDiv.appendChild(itemList_1);
        }
    };
    return RationShop;
}());
(_a = document.getElementById('submitButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var shopNameInput = document.getElementById('shopName');
    var locationInput = document.getElementById('location');
    var addItemNameInput = document.getElementById('addItemName');
    var addItemQuantityInput = document.getElementById('addItemQuantity');
    var removeItemNameInput = document.getElementById('removeItemName');
    var removeItemQuantityInput = document.getElementById('removeItemQuantity');
    var shopName = shopNameInput.value;
    var location = locationInput.value;
    var addItemName = addItemNameInput.value;
    var addItemQuantity = parseInt(addItemQuantityInput.value);
    var removeItemName = removeItemNameInput.value;
    var removeItemQuantity = parseInt(removeItemQuantityInput.value);
    var rationShop = new RationShop(shopName, location);
    if (addItemName && addItemQuantity) {
        rationShop.addItem(addItemName, addItemQuantity);
    }
    if (removeItemName && removeItemQuantity) {
        rationShop.removeItem(removeItemName, removeItemQuantity);
    }
    rationShop.displayAvailableItems();
});
