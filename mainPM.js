// keep video container, change video

let scene = 0; 
let interactive = false;
let ending = "NO_END_SET";
let titleClick = false;
let middleClick = false;
let endChoice = false;
let sceneChoice = false;

// async function loadAllVideos(){
//     let videoURLs = ["lockettePreludeMemory/Title Scene Walk WEB.mp4", 
//                         "lockettePreludeMemory/Scene Walk Cont WEB.mp4"];

//     let loadedVideoURLs = [];

//     let videoLoad = await loadVideo(videoURLs[0]);
//     loadedVideoURLs.push(videoLoad);
    
//     // for(let video in videoURLs){
//     //     console.log(video);
//     //     let videoLoad = await loadVideo(video);
//     //     loadedVideoURLs.push(videoLoad);
//     // }

//     return loadedVideoURLs;
// }

// let loadedVideos = [];

// document.addEventListener('DOMContentLoaded', function(){
//      loadedVideos = loadAllVideos();
// });

// async function loadVideo(url) {
//     try {
//         let response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`Failed to load video (${response.status} ${response.statusText})`);
//         }

//         let videoBlob = await response.blob();
//         let loadedVideoURL = URL.createObjectURL(videoBlob);

//         return loadedVideoURL;
//     } catch (error) {
//         console.error("Error loading video:", error);
//     }
// }

// function playVideo(...videoURLs){
//     let videoElement = doucment.getElementById("myVideo");
//     if(videoURLs.length === 0){
//         return;
//     }
//     let videoURL = videoURLs.shift();
//     console.log(videoURL);
//     videoElement.src = videoURL;
//     videoElement.autoplay = true;
//     videoElement.click = () => {
//         playVideo(...videoURLs);
//     }
// }

// document.addEventListener('DOMContentLoaded', function(){
    
// });



if (titleClick == false){
    document.addEventListener('click', async function sceneIntro() { //first clcik form title
        titleClick = true;
        let clickSound = document.getElementById('clickSound');
        let videoElement = document.getElementById('myVideo');
        // videoElement.src = loadedVideos[0];
        let videoURLs = ["lockettePreludeMemory/Title Scene Walk WEB.mp4", 
                        "lockettePreludeMemory/Scene Walk Cont WEB.mp4"];
                        // add other scenes later 
        let index = 0;
        videoElement.loop = false;
        // videoElement.src = await loadVideo(videoURLs[index])

        videoElement.src = videoURLs[index];
        videoElement.load();

        // let loadNextVideo = await loadVideo(videoURLs[index + 1]);
        
        videoElement.addEventListener('ended', function () {            
            index++;

            if (index < videoURLs.length) {
                // trying to load the next scene here, but it still flickers...???
                // videoElement.src = loadedVideos[1]; 
                videoElement.src = videoURLs[index];
            } else {
                console.log("All scenes played");
                document.removeEventListener('click', removedListener);
                videoElement.removeEventListener('ended', removedListener);
                videoElement.style.display = "none";
                interactive = true;
                document.getElementById('foodImage').style.display = "block";
                document.getElementById('foodDome').style.display = "flex";
                $("#foodDome").draggable();
                document.getElementById('customCursor').style.display = "block";
                document.addEventListener('mousemove', function (e) {
                    var cursor = document.getElementById('customCursor');
                    cursor.style.left = (e.pageX - cursor.clientWidth / 2) + 'px';
                    cursor.style.top = (e.pageY - cursor.clientHeight / 2) + 'px';

                    if (middleClick == false){
                        document.addEventListener('mouseup', function(){
                            middleClick = true;
                            console.log("Playing Next Scene");
                            interactive = false;
                            document.getElementById('foodImage').style.display = "none";
                            document.getElementById('foodDome').style.display = "none";
                            document.getElementById('customCursor').style.display = "none";
                            $("#foodDome").draggable("option", "disabled", true);
                        
                            let videoElement = document.getElementById('myVideo');
                            videoElement.src = "lockettePreludeMemory/PlaceHolderVideo.mp4";
                            videoElement.style.display = "block";

                            // Not working, need to click two times in order for bad end video to play
                            // choice video isn't even playing
                            // if (sceneChoice == false){
                            //     videoElement.addEventListener('ended', function () {
                            //         sceneChoice = true;
                            //         videoElement.removeEventListener('mouseup', removedListener);
                            //         videoElement.src = "lockettePreludeMemory/destroyChoice.mp4";

                            //         if (endChoice == false){
                            //             videoElement.addEventListener('click', function(){
                            //                 endChoice = true;
                            //                 videoElement.src = "lockettePreludeMemory/badEndingWEB.mp4";
                            //             });
                            //         }
                                    


                            //     });
                            // }
                            


                        });
                    }
                    

                });
            }
        });

        // onclick function
        // element.onclick = function here
        // function declare somewhere else

        // Play the sound on user click
        clickSound.play().catch(function (error) {
            console.error("Autoplay was prevented: ", error);
        });

        // Start playing the first video
        videoElement.play();
        document.removeEventListener('click', sceneIntro);
    });

}

function playNextScene(){
    document.getElementById('customCursor').style.display = "none";
    document.removeEventListener('mousemove');
}



function middleScene(){
    console.log("Playing Next Scene");
    interactive = false;
    document.getElementById('foodImage').style.display = "none";
    document.getElementById('foodDome').style.display = "none";
    document.getElementById('customCursor').style.display = "none";
    $("#foodDome").draggable("option", "disabled", true);


    let videoElement = document.getElementById('myVideo');
    videoElement.src = "lockettePreludeMemory/Scene until Angry WEB.mp4";
    videoElement.style.display = "block";
}

function removedListener(){
    console.log("removed event listener");
}