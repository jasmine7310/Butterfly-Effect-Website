
async function displayCharacters(){
    
    let characterInfo = await fetch("./character.json");
    let charaInfoArray = await characterInfo.json();
    
    console.log(charaInfoArray);

    console.log(charaInfoArray[0].characterName);

    // Display type controls if character shows left or right
    let displayType = 1;

    // For each character in json, display info left or right
    // assign to body

    for (let i = 0; i < charaInfoArray.length; i++){
        console.log(`${charaInfoArray[i].characterDescription}`);

        if (displayType == 1){
            bodyHTML.set({
                div: {
                    id: "character1",

                    section: {
                        id: "charaText",

                        img: {
                            src: `${charaInfoArray[i].characterTitle}`,
                            alt: "Character Title",
                            id: "theTitle",
                            width: "80%",
                        },

                        p: {
                            html: `${charaInfoArray[i].characterDescription}`,
                            id: "charaDescription",
                            style: {
                               color: "white",
                               position: "relative",
                               fontFamily: "Times New Roman, Times, serif",
                               fontSize: "22px",
                               display: "inline-flex",
                               paddingTop: "20px",
                               marginBlockStart: "0",
                               marginBlockEnd: "0",
                               textAlign: "center",
                            }
                        },

                        h3: {
                            html: `${charaInfoArray[i].characterDialogue}`,
                            id: "charaDialogue",
                        },
                        
                        a: {
                            text: `PRELUDE MEMORY`,   
                            id: "preludeMemoryButton1",
                            href: `${charaInfoArray[i].a_HREF}`,
                            style: {
                                textDecoration: "none",
                                display: "inline-flex",
                                fontFamily: "Boruna",
                                fontSize: "47px",
                                textAlign: "center",
                                paddingTop: "20px",
                                fontStyle: "normal",
                            },
                        },

                    },

                    img: {
                        src: `${charaInfoArray[i].characterImage}`,
                        alt: `${charaInfoArray[i].characterName}`,
                        id: "charaImage",
                        width: "50%",
                    }

                },

                css: {
                    character1: {
                        display: "flex",
                        flexWrap: "nowrap",
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                    },
                    
                    theTitle: {
                        display: "wrap",
                        flexWrap: "wrap",
                    },
                    
                    charaText: {
                        display: "flex",
                        flexWrap: "wrap",
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "7%",
                        
                    },
                    
                    
                    charaDialogue: {
                        display: "inline-flex",
                        position: "relative",
                        fontFamily: 'Didot',
                        fontSize: "24px",
                        textAlign: "center",
                        paddingTop: "20px",
                    },
                    

                    charaImage: {
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        paddingRight: "2%",
                    }
                }, 

            });

            displayType = 2;
            
        } else if (displayType == 2){
            bodyHTML.set({
                div: {
                    id: "character1",

                    img: {
                        src: `${charaInfoArray[i].characterImage}`,
                        alt: `${charaInfoArray[i].characterName}`,
                        id: "charaImage1",
                        width: "50%",
                    },

                    section: {
                        id: "charaText",

                        img: {
                            src: `${charaInfoArray[i].characterTitle}`,
                            alt: "Character Title",
                            id: "theTitle1",
                            width: "80%",
                            onchange: (event) => console.log("Changed!"),
                        },

                        p: {
                            html: `${charaInfoArray[i].characterDescription}`,
                            id: "charaDescription",
                            style: "color: white",
                            style: {
                                color: "white",
                                position: "relative",
                                fontFamily: "Times New Roman, Times, serif",
                                fontSize: "22px",
                                display: "inline-flex",
                                paddingTop: "20px",
                                marginBlockStart: "0",
                                marginBlockEnd: "0",
                                textAlign: "center",
                            }
                        },

                        h3: {
                            html: `${charaInfoArray[i].characterDialogue}`,
                            id: "charaDialogue",
                        },

                        a: {
                            text: `PRELUDE MEMORY`,   
                            id: "preludeMemoryButton",
                            style: "text-decoration: none",
                            href: `${charaInfoArray[i].a_HREF}`,
                            mouseover : (event) => {
                                    charaImage1.src = `${charaInfoArray[i].altCharaImage}`,
                                    theTitle1.src = `${charaInfoArray[i].altCharaTitle}`}, 

                            mouseout : (event) => {
                                charaImage1.src = `${charaInfoArray[i].characterImage}`,
                                theTitle1.src = `${charaInfoArray[i].characterTitle}`}, 

                            style: {
                                textDecoration: "none",
                                display: "inline-flex",
                                fontFamily: "Boruna",
                                fontSize: "47px",
                                textAlign: "center",
                                paddingTop: "20px",
                                fontStyle: "normal",
                            },

                            // addEventListener : {
                            //     type: "mouseout",
                            //     listener: (event) => charaImage1.src = `${charaInfoArray[i].characterImage}`,
                            // }
                        },

                    },

                },

                css: {
                    character1: {
                        display: "flex",
                        flexWrap: "nowrap",
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                    },
                    
                    theTitle: {
                        display: "wrap",
                        flexWrap: "wrap",
                    },
                    
                    charaText: {
                        display: "flex",
                        flexWrap: "wrap",
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "7%",
                        
                    },
                    
                    charaDescription: {
                        position: "relative",
                        fontFamily: "Times New Roman, Times, serif",
                        fontSize: "28px",
                        display: "inline-flex",
                        paddingTop: "20px",
                        marginBlockStart: "0",
                        marginBlockEnd: "0",
                        textAlign: "center",
                    },
                    
                    charaDialogue: {
                        display: "inline-flex",
                        position: "relative",
                        fontFamily: 'Didot',
                        fontSize: "24px",
                        textAlign: "center",
                        paddingTop: "20px",
                    },
                    
                    preludeMemoryButton: {
                        display: "inline-flex",
                        fontFamily: "Boruna",
                        fontSize: "34px",
                        textAlign: "center",
                        paddingTop: "20px",
                    },

                    charaImage: {
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        paddingRight: "2%",
                    }
                }, 

            });

            displayType = 1;
        }
    }
}


displayCharacters();




document.addEventListener('DOMContentLoaded', function(){

    // document.getElementById("preludeMemoryButton").addEventListener('mouseover', function() {
    //     document.getElementsByClassName("spadeTitleImage")[0].src = "/assets/the_ringleader.png";
    //     document.getElementsByClassName("spadeImage")[0].src = "/assets/SpadeType2.png";
    // });

    // document.getElementById("preludeMemoryButton").addEventListener('mouseout', function() {
    //     document.getElementsByClassName("spadeTitleImage")[0].src = "/assets/the_bellboy.png";
    //     document.getElementsByClassName("spadeImage")[0].src = "/assets/Spade.png";
    // });

    window.addEventListener('resize', function(event) {
        const _WINDOWSIZE = (window.innerWidth < 700)? true : false; 
    }, true);


});
