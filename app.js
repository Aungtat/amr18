

let startButton = document.querySelector(".startBtn");
let stayButton = document.querySelector(".stayBtn");
let hitButton = document.querySelector(".hitBtn");
let dhitButton = document.querySelector(".dHit");
let bustButton = document.querySelector(".bustBtn");
let cardDack = document.querySelector(".cardBack");
let canicard = document.querySelector(".canicard");
let aiTag = document.querySelector(".playerAI");
let humanTag= document.querySelector(".playerHuman");
let aiScore = document.querySelector(".aiScore");
let humanScore= document.querySelector(".humanScore");
let hideCard= document.querySelector(".hideCard");
let showCard= document.querySelector(".showCard");
let currentPlayer = 2;
let turn = 0;

let dOc = 
[
    // A
    {
        id : "As",
        value: 1,
        ilink: "./images/A-S.png"
    },
    {
        id : "Ad",
        value: 1,
        ilink: "./images/A-D.png"
    },
    {
        id : "Ah",
        value: 1,
        ilink: "./images/A-H.png"
    },
    {
        id : "Ac",
        value: 1,
        ilink: "./images/A-C.png"
    },
// 2
    {
        id : "2s",
        value: 2,
        ilink: "./images/2-S.png"
    },
    {
        id : "2d",
        value: 2,
        ilink: "./images/2-D.png"
    },
    {
        id : "2h",
        value: 2,
        ilink: "./images/2-H.png"
    },
    {
        id : "2c",
        value: 2,
        ilink: "./images/2-C.png"
    },

       // 3
       {
        id : "3s",
        value: 3,
        ilink: "./images/3-S.png"
    },
    {
        id : "3d",
        value: 3,
        ilink: "./images/3-D.png"
    },
    {
        id : "3h",
        value: 3,
        ilink: "./images/3-H.png"
    },
    {
        id : "3c",
        value: 3,
        ilink: "./images/3-C.png"
    },
// 4
    {
        id : "4s",
        value: 4,
        ilink: "./images/4-S.png"
    },
    {
        id : "4d",
        value: 4,
        ilink: "./images/4-D.png"
    },
    {
        id : "4h",
        value: 4,
        ilink: "./images/4-H.png"
    },
    {
        id : "4c",
        value: 4,
        ilink: "./images/4-C.png"
    },

      // 5
      {
        id : "5s",
        value: 5,
        ilink: "./images/5-S.png"
    },
    {
        id : "5d",
        value: 5,
        ilink: "./images/5-D.png"
    },
    {
        id : "5h",
        value: 5,
        ilink: "./images/5-H.png"
    },
    {
        id : "5c",
        value: 5,
        ilink: "./images/5-C.png"
    },
// 6
    {
        id : "6s",
        value: 6,
        ilink: "./images/6-S.png"
    },
    {
        id : "6d",
        value: 6,
        ilink: "./images/6-D.png"
    },
    {
        id : "6h",
        value: 6,
        ilink: "./images/6-H.png"
    },
    {
        id : "6c",
        value:6,
        ilink: "./images/6-C.png"
    },

       // 7
       {
        id : "7s",
        value: 7,
        ilink: "./images/7-S.png"
    },
    {
        id : "7d",
        value: 7,
        ilink: "./images/7-D.png"
    },
    {
        id : "7h",
        value: 7,
        ilink: "./images/7-H.png"
    },
    {
        id : "7c",
        value: 7,
        ilink: "./images/7-C.png"
    },
// 8
    {
        id : "8s",
        value: 8,
        ilink: "./images/8-S.png"
    },
    {
        id : "8d",
        value: 8,
        ilink: "./images/8-D.png"
    },
    {
        id : "8h",
        value: 8,
        ilink: "./images/8-H.png"
    },
    {
        id : "8c",
        value: 8,
        ilink: "./images/8-C.png"
    },

      //  9
      {
        id : "9s",
        value: 9,
        ilink: "./images/9-S.png"
    },
    {
        id : "9d",
        value: 9,
        ilink: "./images/9-D.png"
    },
    {
        id : "9h",
        value: 9,
        ilink: "./images/9-H.png"
    },
    {
        id : "9c",
        value: 9,
        ilink: "./images/9-C.png"
    },

//  10
    {
        id : "10s",
        value: 10,
        ilink: "./images/10-S.png"
    },
    {
        id : "10d",
        value: 10,
        ilink: "./images/10-D.png"
    },
    {
        id : "10h",
        value: 10,
        ilink: "./images/10-H.png"
    },
    {
        id : "10c",
        value: 10,
        ilink: "./images/10-C.png"
    },

       // J
       {
        id : "Js",
        value: 10,
        ilink: "./images/J-S.png"
    },
    {
        id : "Jd",
        value: 10,
        ilink: "./images/J-D.png"
    },
    {
        id : "Jh",
        value: 10,
        ilink: "./images/J-H.png"
    },
    {
        id : "Jc",
        value: 10,
        ilink: "./images/J-C.png"
    },
// Q
    {
        id : "Qs",
        value: 10,
        ilink: "./images/Q-S.png"
    },
    {
        id : "Qd",
        value: 10,
        ilink: "./images/Q-D.png"
    },
    {
        id : "Qh",
        value: 10,
        ilink: "./images/Q-H.png"
    },
    {
        id : "Qc",
        value: 10,
        ilink: "./images/Q-C.png"
    },

    //  K
    {
        id : "Ks",
        value: 10,
        ilink: "./images/K-S.png"
    },
    {
        id : "Kd",
        value: 10,
        ilink: "./images/K-D.png"
    },
    {
        id : "Kh",
        value: 10,
        ilink: "./images/K-H.png"
    },
    {
        id : "Kc",
        value: 10,
        ilink: "./images/K-C.png"
    },
]
const shuffle = (array) => {
    const newArray = [...array];
    return newArray.sort(() => 0.5 - Math.random());
};

let deskOfcard = shuffle(dOc);
let p2Score = deskOfcard[0].value + deskOfcard[2].value;    
let p1Score = deskOfcard[3].value;
let p3Score = 0;
let hitScore = 0;
let totalscore = 0;

    const cardAnimation = ()=> {  
        if (  currentPlayer == 2){
            currentPlayer = 1;
            canicard.classList.add("move2");
            setTimeout(() => {
                canicard.classList.remove("move2");
            }, 500);
           getCard(humanTag)
           
        
           }else if ( currentPlayer == 1){
            currentPlayer = 2;
            canicard.classList.add("move1");
            setTimeout(() => {
                canicard.classList.remove("move1");
            }, 500);
           getCard(aiTag)
           
        
         };
        
    };
    
  

        
       let getCard = (player)=> {
        const cardImg = document.createElement("img");
        cardImg.src = deskOfcard[turn]. ilink;
        cardImg.classList.add("showCard") ;
        cardImg.id = deskOfcard[turn]. value
        player.append(cardImg)
        turn += 1;
        
    }

    
          
         

document.addEventListener("DOMContentLoaded", ()=>{
    let k = 0;
  
    startButton.addEventListener("click", () => {
        const slide = 
        setInterval(() => {
            k+=1
            if (k < 5) {
                cardAnimation();
          }else {
                clearInterval(slide);
          }
      }, 30);
      k =0
      hideCard.style.display = "block";
      aiScore.textContent = p1Score ;
      humanScore.textContent = p2Score;

     
      
    })
       
  
   
  
    
    
  

    hitButton.addEventListener("click", ()=> {
        cardAnimation();
        currentPlayer= 2;
        hitScore =  deskOfcard[turn-1].value;
        p2Score += hitScore
        startButton.style.pointerEvents = "none" ;
        console.log(p2Score)
        humanScore.textContent = p2Score;
      
    })

    const cardPosition = () => {
        let p1Img = aiTag.querySelectorAll("img");
        for (m = 1; m < p1Img.length; m++) {
            p1Img[m].style.position = "relative";
        }
        hitButton.style.pointerEvents = "none" ;
        startButton.style.pointerEvents = "none" ;
        hideCard.style.display = "none";
    
    }

    stayButton.addEventListener("click", () => {
        
        p1Score = deskOfcard[1].value + deskOfcard[3].value ;
        let aiHit = deskOfcard[turn].value ;
        console.log(p1Score)
      
        for (let u=deskOfcard[1].value + deskOfcard[3].value; u <17; u = p1Score ) {
            
            if (p1Score < 17 ) {
                console.log(p1Score,turn)
                getCard(aiTag);
                cardPosition()
                p1Score += aiHit;
              
                aiScore.textContent = p1Score;
            } else if(p1Score > 17){
        
       
            cardPosition()
            console.log(p1Score)
            aiScore.textContent = p1Score;
        }
    }
         })
        
      
    
})

            
            
       
        
           
  
      

    
    
    
