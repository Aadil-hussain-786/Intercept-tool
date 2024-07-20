document.getElementById('interceptForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const url = document.getElementById('urlInput').value;
  const response = await fetch('/intercept', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: url })
  });

  const result = await response.json();
  document.getElementById('output').innerText = JSON.stringify(result, null, 2);
});
