let stringInput=document.querySelector(".stringInput")
let reversedStringText=document.querySelector(".reversedStringText")
let btnInput=document.querySelector(".btnInput")




function ReverseString() {
    let stringInputValue=stringInput.value

    if(stringInputValue) {
        let stringArray=stringInputValue.split('');
        let reverseStringArray=[]

        for(let i=0; i<stringArray.length;i++) {
            reverseStringArray.unshift(stringArray[i])
        }

        let stringReversed=reverseStringArray.join('')

        return reversedStringText.innerText=`${stringReversed}`

    }
    else {
        return reversedStringText.innerText='Preencha os campos para prosseguir'

    }
}


btnInput.addEventListener("click",ReverseString)