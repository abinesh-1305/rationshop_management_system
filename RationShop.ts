class RationShop {
    private shopName: string;
    private location: string;
    private availableItems: Map<string, number>;

    constructor(shopName: string, location: string) {
        this.shopName = shopName;
        this.location = location;
        this.availableItems = new Map<string, number>();
    }
    addItem(itemName: string, quantity: number): void {
        if (this.availableItems.has(itemName)) {
            this.availableItems.set(itemName, this.availableItems.get(itemName)! + quantity);
        } else {
            this.availableItems.set(itemName, quantity);
        }
        console.log(`${quantity} ${itemName}(s) added to ${this.shopName}'s inventory.`);
    }
    removeItem(itemName: string, quantity: number): void {
        if (this.availableItems.has(itemName)) {
            const currentQuantity = this.availableItems.get(itemName)!;
            if (currentQuantity >= quantity) {
                this.availableItems.set(itemName, currentQuantity - quantity);
                console.log(`${quantity} ${itemName}(s) removed from ${this.shopName}'s inventory.`);
            } else {
                console.log(`Insufficient quantity of ${itemName} in ${this.shopName}'s inventory.`);
            }
        } else {
            console.log(`${itemName} not found in ${this.shopName}'s inventory.`);
        }
    }
    displayAvailableItems(): void {
        const outputDiv = document.getElementById('output');
        if (outputDiv) {
            outputDiv.innerHTML = `<p>Available items in ${this.shopName}:</p>`;
            const itemList = document.createElement('ul');
            this.availableItems.forEach((quantity, itemName) => {
                const item = document.createElement('li');
                item.textContent = `${itemName}: ${quantity}`;
                itemList.appendChild(item);
            });
            outputDiv.appendChild(itemList);
        }
    }
}

document.getElementById('submitButton')?.addEventListener('click', function() {
    const shopNameInput = document.getElementById('shopName') as HTMLInputElement;
    const locationInput = document.getElementById('location') as HTMLInputElement;
    const addItemNameInput = document.getElementById('addItemName') as HTMLInputElement;
    const addItemQuantityInput = document.getElementById('addItemQuantity') as HTMLInputElement;
    const removeItemNameInput = document.getElementById('removeItemName') as HTMLInputElement;
    const removeItemQuantityInput = document.getElementById('removeItemQuantity') as HTMLInputElement;

    const shopName = shopNameInput.value;
    const location = locationInput.value;
    const addItemName = addItemNameInput.value;
    const addItemQuantity = parseInt(addItemQuantityInput.value);
    const removeItemName = removeItemNameInput.value;
    const removeItemQuantity = parseInt(removeItemQuantityInput.value);

    const rationShop = new RationShop(shopName, location);

    if (addItemName && addItemQuantity) {
        rationShop.addItem(addItemName, addItemQuantity);
    }
    if (removeItemName && removeItemQuantity) {
        rationShop.removeItem(removeItemName, removeItemQuantity);
    }

    rationShop.displayAvailableItems();
});
