const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    if(str !== ""){
        let num = Number(str);
        let ar = [], i, br = [];
        for(i=1; i<=num; i++){
            if(num%i == 0){
                ar.push(i);
            }
        }

        for(i=0; i<ar.length; i++){
            let c = 0;
            for(let j=1; j<=ar[i]; j++){
                if(ar[i]%j==0){
                    c++;
                }
            }

            if(c==2){
                br.push(ar[i]);
            }
        }

        if(br.length == 1){
            if(br[0] == 2 || br[0] == 3 || br[0] == 5){
                document.getElementById('opText').innerHTML = "Ugly Number";
            }
            else{
                document.getElementById('opText').innerHTML = "Not an Ugly Number";
            }
        }
        else if(br.length == 2){
            let x = br.indexOf(2);
            let y = br.indexOf(3);
            let z = br.indexOf(5);

            if(x == -1 || y == -1 || z == -1){
                document.getElementById('opText').innerHTML = "Not an Ugly Number";
            }
            else{
                document.getElementById('opText').innerHTML = "Ugly Number";
            }

        }
        else if(br.length == 3){
            for(i=0; i<br.length; i++){
                if(br[i] !== 2 || br[i] !== 3 || br[i] !== 5){
                    document.getElementById('opText').innerHTML = "Not an Ugly Number";
                }
                else{
                    document.getElementById('opText').innerHTML = "Ugly Number";
                }
            }
        }
        else{
            document.getElementById('opText').innerHTML = "Not an Ugly Number";
        }

        // document.getElementById('opText').innerHTML = str;
    }
    else{
        document.getElementById('opText').innerHTML = "Please enter a number";
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
