const path = require('path');

const UploadSingleFile = async (FileObject) => {
    uploadPath = path.resolve(__dirname, "../public/images") + "/" + Date.now() + "-" + FileObject.name;

    // Use the mv() method to place the file somewhere on your server
    await FileObject.mv(uploadPath);
    return uploadPath;
}

const UploadMultipleFiles = async (FileObject, res) => {
    if (Array.isArray(FileObject)) {
        for (let i = 0; i < FileObject.length; i++) {
            uploadPath = path.resolve(__dirname, "../public/images") + "/" + Date.now() + "-" + FileObject[i].name;
            FileObject[i].mv(uploadPath, function (err) {
                if (err) {
                    res.send(err);
                }
            })
        }
        res.send('files uploaded');
    }
}

module.exports = {
    UploadSingleFile,
    UploadMultipleFiles
}