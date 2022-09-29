function blobToBase64(blob: Blob) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}

function encodeBase64(data : string) {
    return Buffer.from(data).toString('base64');
}

function decodeBase64(data: string) {
    return Buffer.from(data, 'base64').toString('ascii');
}

export {blobToBase64, encodeBase64, decodeBase64};