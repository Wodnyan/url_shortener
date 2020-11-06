const formButton = document.querySelector("#url-button");
const urlInput = document.querySelector("#url-input");
const urlIdInput = document.querySelector("#url-id-input");
const error = document.querySelector(".error");
const successContainer = document.querySelector(".success");
const successResponse = successContainer.querySelector(".success__response");

formButton.addEventListener("click", async (e) => {
  e.preventDefault();
  resetSuccessResponse();
  setErrorResponse("");
  const FetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: urlInput.value, url_id: urlIdInput.value }),
  };
  if (urlInput.value && urlIdInput.value) {
    const resp = await fetch("/api/v1/url", FetchOptions);
    const data = await resp.json();
    if (resp.ok) {
      setSuccessResponse(data.url);
    } else {
      setErrorResponse(data.message);
    }
  }
});

function setSuccessResponse(url) {
  successContainer.classList.add("success--show");
  successResponse.textContent = url;
  successResponse.href = url;
}

function resetSuccessResponse() {
  successContainer.classList.remove("success--show");
}

function setErrorResponse(errorMessage) {
  error.textContent = errorMessage;
}
