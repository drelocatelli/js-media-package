JS MEDIA Hooks Package

```
const {audioURL, isStopped, isRecording, startRecording, stopRecording} = useAudioRecorder();
startRecording(); stopRecording()
```

```
const { fileUrl, sendFile, fileExtension, resetFile, fileType, fileName } = useFileUpload();
```

```
const {requestLocation, location} = useLocation();
requestLocation();
```

```
const {requestNotifications, sendNotification} = useNotification();
requestNotifications(); sendNotification();
```

```
const {videoURL, isStopped, isRecording, startRecording, stopRecording, Stream} = useVideoRecorder();
startRecording(); stopRecording(); Stream(videoRef.current);


// to stream video
 useEffect(() => {
        if(videoRef.current) {
            Stream(videoRef.current);
        }
    }, [isStopped, isRecording]);
```

# Conversion 
```
decodeBase64(data: string);
encodeBase64(data : string)
blobToBase64(blob: Blob)
```
