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

 useEffect(() => {
        if(videoRef.current) {
            Stream(videoRef.current);
        }
    }, [isStopped, isRecording]);
```
