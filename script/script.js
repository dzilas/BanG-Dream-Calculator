 // Initialize default values
    window.onload = setToMaxValues;

    function getMaxValues() {
      const option = document.getElementById('option').value;
      if (option === "18") {
        return { maxX: 10, maxY: 180 };
      } else {
        return { maxX: 10, maxY: 230 };
      }
    }

    function setToMaxValues() {
      const { maxX, maxY } = getMaxValues();
      document.getElementById('x').value = maxX;
      document.getElementById('y').value = maxY;
      clearMessages();
    }

    function resetValues() {
      setToMaxValues();
      document.getElementById('result').textContent = "";
      document.getElementById('error').textContent = "";
    }

    function changeX(amount) {
      clearMessages();
      const xField = document.getElementById('x');
      let x = parseFloat(xField.value);
      if (isNaN(x)) {
        showError("Please enter a valid number for x before adjusting.");
        return;
      }
      x += amount;
      const { maxX } = getMaxValues();
      if (x > maxX) {
        showError(`Maximum x value is ${maxX} for this option.`);
        x = maxX;
      }
      if (x < 0) x = 0; // prevent negative
      xField.value = x;
    }

    function changeY(amount) {
      clearMessages();
      const yField = document.getElementById('y');
      let y = parseFloat(yField.value);
      if (isNaN(y)) {
        showError("Please enter a valid number for y before adjusting.");
        return;
      }
      y += amount;
      const { maxY } = getMaxValues();
      if (y > maxY) {
        showError(`Maximum y value is ${maxY} for this option.`);
        y = maxY;
      }
      if (y < 0) y = 0; // prevent negative
      yField.value = y;
    }

    function calculate() {
      clearMessages();

      const x = parseFloat(document.getElementById('x').value);
      const y = parseFloat(document.getElementById('y').value);
      const multiplier = parseFloat(document.getElementById('option').value);
      const { maxX, maxY } = getMaxValues();

      if (isNaN(x) || isNaN(y)) {
        showError("Please enter valid numbers for both x and y.");
        return;
      }

      if (x > maxX) {
        showError(`Maximum x value is ${maxX} for this option.`);
        return;
      }
      if (y > maxY) {
        showError(`Maximum y value is ${maxY} for this option.`);
        return;
      }

      const compareValue = multiplier * x;
      let message = (y < compareValue) ? "Continue rolling" : "Skip to the next box";
      document.getElementById('result').textContent = `Result: ${message}`;
    }

    function showError(msg) {
      document.getElementById('error').textContent = msg;
    }

    function clearMessages() {
      document.getElementById('error').textContent = "";
      document.getElementById('result').textContent = "";
    }