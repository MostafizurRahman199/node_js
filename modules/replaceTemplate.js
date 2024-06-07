

module.exports = (template, product) => {
    let output = template.replace(/{%NAME%}/g, product.name);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(
      /{%STOCK%}/g,
      product.stock ? "In Stock" : "Out of Stock"
    );
    output = output.replace(/{%CATEGORY%}/g, product.category);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
  
    return output;
  };