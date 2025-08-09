function calculateCuboid() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(length) || isNaN(width) || isNaN(height)) {
    document.getElementById("results").innerText =
      "Please enter valid numbers.";
    return;
  }

  const volume = length * width * height;
  const surfaceArea = 2 * (length * width + width * height + height * length);

  document.getElementById("results").innerHTML = `
      📦 Volume: ${volume.toFixed(2)} cubic units<br>
      🧱 Surface Area: ${surfaceArea.toFixed(2)} square units
    `;
}
