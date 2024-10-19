function submitForm() {
    const photoInput = document.getElementById('productPhoto');
    const textInput = document.getElementById('customText');

    const photoPreview = document.getElementById('photoPreview');
    const textPreview = document.getElementById('textPreview');

    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            photoPreview.src = e.target.result;
            photoPreview.style.display = 'block';
        };
        reader.readAsDataURL(photoInput.files[0]);
    }

    textPreview.textContent = textInput.value;
}
