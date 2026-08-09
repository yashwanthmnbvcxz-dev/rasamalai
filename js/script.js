/* ==========================================
   RASAMALAI BIRTHDAY WEBSITE
========================================== */


let currentScreen = 1;

const totalScreens = 15;


/* ==========================================
   ELEMENTS
========================================== */

const music =
    document.getElementById("bgMusic");

const stars =
    document.getElementById("stars");

const shootingStars =
    document.getElementById("shootingStars");

const hearts =
    document.getElementById("hearts");


/* ==========================================
   MUSIC
========================================== */

function startMusic() {

    if (!music) {
        return;
    }

    music.volume = 0.45;

    music.play().catch(() => {

        console.log(
            "Waiting for user interaction for music..."
        );

    });
}


/* ==========================================
   SHOW SCREEN
========================================== */

function showScreen(number) {

    if (
        number < 1 ||
        number > totalScreens
    ) {
        return;
    }


    for (
        let i = 1;
        i <= totalScreens;
        i++
    ) {

        const screen =
            document.getElementById(
                "screen" + i
            );

        if (screen) {

            screen.classList.remove(
                "active"
            );

        }

    }


    const target =
        document.getElementById(
            "screen" + number
        );


    if (!target) {
        return;
    }


    target.classList.add(
        "active"
    );


    currentScreen =
        number;


    startMusic();


    playScreenVideos(
        target
    );


    if (number === 15) {

        createConfetti();

        createManyHearts();

    }

}


/* ==========================================
   PLAY VIDEOS
========================================== */

function playScreenVideos(screen) {

    if (!screen) {
        return;
    }


    const videos =
        screen.querySelectorAll(
            "video"
        );


    videos.forEach(video => {

        video.muted = true;

        video.play().catch(() => {});

    });

}


/* ==========================================
   SCREEN 1 OPENING
========================================== */

const openingText =
    document.getElementById(
        "openingText"
    );

const progressBar =
    document.getElementById(
        "progressBar"
    );


const openingMessages = [

    "Establishing Connection...",

    "Searching for Rasamalai... 🍮",

    "Rasamalai Found ❤️",

    "Distance Detected...",

    "But Distance Can't Stop Us. ❤️",

    "Preparing Your Surprise...",

    "Almost Ready... ✨"

];


let messageIndex = 0;

let progress = 0;


function openingAnimation() {

    if (!openingText) {
        return;
    }


    const messageTimer =
        setInterval(() => {

            messageIndex++;


            if (
                messageIndex <
                openingMessages.length
            ) {

                openingText.textContent =
                    openingMessages[
                        messageIndex
                    ];

            }

        }, 750);


    const progressTimer =
        setInterval(() => {

            progress += 2;


            if (progressBar) {

                progressBar.style.width =
                    progress + "%";

            }


            if (progress >= 100) {

                clearInterval(
                    messageTimer
                );

                clearInterval(
                    progressTimer
                );


                setTimeout(() => {

                    showScreen(2);

                    setTimeout(() => {

                        showScreen(3);

                    }, 3200);

                }, 500);

            }

        }, 45);

}


/* ==========================================
   YES BUTTON
========================================== */

const yesBtn =
    document.getElementById(
        "yesBtn"
    );


if (yesBtn) {

    yesBtn.addEventListener(
        "click",
        () => {

            startMusic();

            showScreen(4);


            setTimeout(() => {

                if (
                    currentScreen === 4
                ) {

                    showScreen(5);

                }

            }, 3500);

        }
    );

}


/* ==========================================
   NO BUTTON
========================================== */

const noBtn =
    document.getElementById(
        "noBtn"
    );

const noTeddy =
    document.getElementById(
        "noTeddy"
    );

const noText =
    document.getElementById(
        "noText"
    );


if (noBtn) {

    noBtn.addEventListener(
        "click",
        () => {

            startMusic();


            if (noTeddy) {

                noTeddy.style.display =
                    "block";


                noTeddy.currentTime =
                    0;


                noTeddy.play()
                    .catch(() => {});


                noTeddy.animate(

                    [
                        {
                            transform:
                                "scale(1) rotate(0deg)"
                        },

                        {
                            transform:
                                "scale(1.2) rotate(-8deg)"
                        },

                        {
                            transform:
                                "scale(0.9) rotate(8deg)"
                        },

                        {
                            transform:
                                "scale(1.15) rotate(-5deg)"
                        },

                        {
                            transform:
                                "scale(1) rotate(0deg)"
                        }
                    ],

                    {
                        duration: 900,
                        easing: "ease-in-out"
                    }

                );

            }


            if (noText) {

                noText.textContent =
                    "Hehe... try YES 😂❤️";

            }

        }
    );

}


/* ==========================================
   NORMAL BUTTON NAVIGATION
========================================== */

const navigation = {

    startBtn: 6,

    next6: 7,

    next7: 8,

    next8: 9,

    next9: 10,

    next10: 11,

    next11: 12,

    next12: 13,

    giftBtn: 14,

    wishBtn: 15

};


Object.keys(navigation).forEach(
    id => {

        const button =
            document.getElementById(id);


        if (!button) {
            return;
        }


        button.addEventListener(
            "click",
            () => {

                startMusic();

                showScreen(
                    navigation[id]
                );

            }
        );

    }
);


/* ==========================================
   GIFT BUTTON
========================================== */

const giftBtn =
    document.getElementById(
        "giftBtn"
    );

const giftBox =
    document.getElementById(
        "giftBox"
    );


if (giftBtn) {

    giftBtn.addEventListener(
        "click",
        () => {

            if (giftBox) {

                giftBox.textContent =
                    "💝";

                giftBox.style.transform =
                    "scale(1.2)";

            }


            setTimeout(() => {

                showScreen(14);

            }, 800);

        }
    );

}


/* ==========================================
   RESTART
========================================== */

const restartBtn =
    document.getElementById(
        "restartBtn"
    );


if (restartBtn) {

    restartBtn.addEventListener(
        "click",
        () => {

            location.reload();

        }
    );

}


/* ==========================================
   CREATE STARS
========================================== */

function createStars() {

    if (!stars) {
        return;
    }


    stars.innerHTML = "";


    const count =
        window.innerWidth < 600
            ? 130
            : 240;


    for (
        let i = 0;
        i < count;
        i++
    ) {

        const star =
            document.createElement(
                "div"
            );


        star.className =
            "star";


        if (
            Math.random() < 0.12
        ) {

            star.classList.add(
                "pink"
            );

        }


        const size =
            Math.random() * 2.5 + 1;


        star.style.width =
            size + "px";


        star.style.height =
            size + "px";


        star.style.left =
            Math.random() * 100 +
            "%";


        star.style.top =
            Math.random() * 100 +
            "%";


        star.style.animationDuration =
            (1.5 +
                Math.random() * 4) +
            "s";


        star.style.animationDelay =
            (Math.random() * 5) +
            "s";


        stars.appendChild(
            star
        );

    }

}


/* ==========================================
   SHOOTING STARS
========================================== */

function createShootingStar() {

    if (!shootingStars) {
        return;
    }


    const star =
        document.createElement(
            "div"
        );


    star.className =
        "shooting-star";


    star.style.left =
        (20 +
            Math.random() * 80) +
        "%";


    star.style.top =
        (5 +
            Math.random() * 45) +
        "%";


    shootingStars.appendChild(
        star
    );


    setTimeout(() => {

        star.remove();

    }, 1500);

}


/* First shooting star */

setTimeout(
    createShootingStar,
    2500
);


/* Random shooting stars */

setInterval(() => {

    createShootingStar();

}, 6000);


/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart() {

    if (!hearts) {
        return;
    }


    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "heart";


    const list = [

        "❤️",
        "💗",
        "💕",
        "💖",
        "💘"

    ];


    heart.textContent =
        list[
            Math.floor(
                Math.random() *
                list.length
            )
        ];


    heart.style.left =
        Math.random() * 100 +
        "%";


    heart.style.fontSize =
        (14 +
            Math.random() * 18) +
        "px";


    heart.style.animationDuration =
        (5 +
            Math.random() * 5) +
        "s";


    hearts.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 11000);

}


setInterval(
    createHeart,
    1800
);


function createManyHearts() {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 80
        );

    }

}


/* ==========================================
   CONFETTI
========================================== */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const pieces = [

        "🎉",
        "✨",
        "💗",
        "💕",
        "❤️",
        "🌸",
        "⭐",
        "🎀"

    ];


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.className =
            "confetti-piece";


        piece.textContent =
            pieces[
                Math.floor(
                    Math.random() *
                    pieces.length
                )
            ];


        piece.style.left =
            Math.random() * 100 +
            "%";


        piece.style.fontSize =
            (12 +
                Math.random() * 18) +
            "px";


        piece.style.animationDuration =
            (3 +
                Math.random() * 4) +
            "s";


        piece.style.animationDelay =
            Math.random() * 2 +
            "s";


        container.appendChild(
            piece
        );

    }

}


/* ==========================================
   START
========================================== */

window.addEventListener(
    "load",
    () => {

        console.log(
            "🌌 Rasamalai website loaded"
        );

        console.log(
            "⭐ Stars ready"
        );

        console.log(
            "🌠 Shooting stars ready"
        );

        console.log(
            "🌙 Moon ready"
        );

        console.log(
            "📸 21 photos connected"
        );

        console.log(
            "🧸 7 teddy videos connected"
        );

        console.log(
            "🎵 Music connected"
        );


        createStars();


        showScreen(1);


        setTimeout(
            openingAnimation,
            300
        );

    }
);


/* ==========================================
   RESIZE
========================================== */

window.addEventListener(
    "resize",
    () => {

        createStars();

    }
);


/* ==========================================
   START MUSIC ON USER INTERACTION
========================================== */

document.addEventListener(
    "click",
    () => {

        startMusic();

    },
    {
        once: true
    }
);