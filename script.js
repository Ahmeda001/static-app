const responseBox = document.getElementById("response");

async function sendRequest() {
  const payload = { text: "hate you" };

  try {
    const res = await fetch("https://oldahmed-docker-host.hf.space/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error(`Error: ${res.status}`);
    const data = await res.json();
    responseBox.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    responseBox.textContent = "Request failed: " + err.message;
  }
}

// run immediately
sendRequest();
// then every 24 hours (24 * 60 * 60 * 1000 ms)
setInterval(sendRequest,60 * 60 * 1000);
