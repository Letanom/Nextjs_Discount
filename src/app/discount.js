

export default function handler(req, res) {
    const { price, discount } = req.query;
  
    if (!price || !discount) {
      return res.status(400).json({ message: "Price and discount percentage are required." });
    }
  
    const originalPrice = parseFloat(price);
    const discountPercentage = parseFloat(discount);
  
    // İndirim hesaplama işlemi
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;
  
    res.status(200).json({
      originalPrice: originalPrice.toFixed(2),
      discountPercentage,
      discountAmount: discountAmount.toFixed(2),
      finalPrice: finalPrice.toFixed(2),
    });
  }
  