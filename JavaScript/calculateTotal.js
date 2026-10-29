function calculateTotal(price, quantity) {
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    !Number.isFinite(price) ||
    !Number.isFinite(quantity) ||
    price < 0 ||
    quantity < 0
  ) {
    throw new Error("Invalid price or quantity");
  }

  return price * quantity;
}

console.log(calculateTotal(100, 3)); // 300
console.log(calculateTotal(50, 2));  // 100

// ควรเกิด Error
// calculateTotal(-100, 3);
