const captureBtn = document.getElementById('captureBtn');
const selfieInput = document.getElementById('selfie');
const pictureInput = document.getElementById('picture');

captureBtn.addEventListener('click', function () {
  let selectedInput;
  if (selfieInput.checked) {
    selectedInput = selfieInput;
  } else if (pictureInput.checked) {
    selectedInput = pictureInput;
  } else {
    alert('Please select a camera');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const imgData = e.target.result;
    // Here you can choose how to save the image
    // Option 1: Download as a file (requires server-side implementation)
    //   fetch('/saveImage', {
    //     method: 'POST',
    //     body: JSON.stringify({ data: imgData }),
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       if (data.success) {
    //         alert('Image saved successfully!');
    //       } else {
    //         alert('Error saving image');
    //       }
    //     });

    // Option 2: Display the captured image (without saving)
    const capturedImage = document.createElement('img');
    capturedImage.src = imgData;
    document.body.appendChild(capturedImage);
  };
  reader.readAsDataURL(selectedInput.files[0]);
});
