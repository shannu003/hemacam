<?php
if(isset($_FILES['image'])) {
    $file_name = $_FILES['image']['name'];
    $file_temp = $_FILES['image']['tmp_name'];
    $file_path = 'uploads/' . $file_name; // Set your desired path here

    if(move_uploaded_file($file_temp, $file_path)) {
        echo json_encode(array('success' => true, 'message' => 'Image uploaded successfully.'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Failed to upload image.'));
    }
} else {
    echo json_encode(array('success' => false, 'message' => 'No image uploaded.'));
}
?>
