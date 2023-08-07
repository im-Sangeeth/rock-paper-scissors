let time={'red':1,'blue':2,'green':3,}
let computer=document.getElementById('computer')
let result=document.getElementById('result')
let element=document.querySelectorAll('.col')
let machele=document.getElementById('mach')
let humele=document.getElementById('hum')
let fight=document.getElementById('fight')
let score=""
let me=0
let ai=0
const audio=new Audio();
const audio1=new Audio();
result.innerHTML=""+score+" "+me+"-"+ai
let reset=document.getElementById('reset')
reset.onclick=()=>{
    me=0;
    ai=0;
    result.innerHTML="0-0"
    machele.src=""
    humele.src=""
}

element.forEach(color=>{
    
    color.onclick=function game(){
        audio.src="cartoon-jump-6462.mp3"
        audio.play();
        setTimeout(gaming,500)
        function gaming(){
            let com=Math.ceil(Math.random()*3)
            computer.value=com

            console.log(computer.value+"-"+time[color.value])
            console.log(computer.value)
            
            if(computer.value==1){
                machele.src="gif/stone.png"
                //machele.style="height:300px; margin-top:20px"
                
            }
            else if(computer.value==2){
                machele.src="gif/scissors.png"
            }
            else if(computer.value==3){
                machele.src="gif/paper.png"
            }


            if(time[color.value]==1){
                humele.src="gif/stone.png"
            // humele.style="height:300px; margin-top:20px"
                
            }
            else if(time[color.value]==2){
                humele.src="gif/scissors.png"
            }
            else if(time[color.value]==3){
                humele.src="gif/paper.png"
            }

            if(computer.value==time[color.value]){
                score="draw"
            }
            else if(computer.value==2&&time[color.value]==1){
                score="win"
                me++
            }
            else if(computer.value==1&&time[color.value]==3){
                score="win"
                me++
            }
            else if(computer.value==3&&time[color.value]==2){
                score="win"
                me++
            }
            else if(computer.value==2&&time[color.value]==3){
                score="lost"
                ai++
            }
            else if(computer.value==1&&time[color.value]==2){
                score="lost"
                ai++
            }
            else if(computer.value==3&&time[color.value]==1){
                score="lost"
                ai++
            }
            console.log(score)
            if(me>=3){
                result.innerHTML="You Won this Round"
                audio.src="mixkit-ethereal-fairy-win-sound-2019.wav"
                audio.play()
                me=0;
                ai=0
            }
            else if(ai>=3){
                result.innerHTML="Ai Won this Round"
                audio.src="negative_beeps-6008.mp3"
                audio.play()
                me=0;
                ai=0
            }
            else{
            result.innerHTML=""+score+" "+me+"-"+ai
            }
        }
    }
})