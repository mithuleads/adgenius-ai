function generateAd() {
  const product = document.getElementById("product").value;
  const details = document.getElementById("details").value;

  const result = `
🔥 ${product}

${details}

✅ High Quality
✅ Fast Delivery
✅ Order Now!
`;

  document.getElementById("result").innerText = result;
}
