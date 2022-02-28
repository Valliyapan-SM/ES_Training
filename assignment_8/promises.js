let p = new Promise((res,rej) => {
    let i = 0;
    i += 5;
    console.log("just checking..");
    if(i == 5){
        console.log("just checking res..");
        res("ok");
    }
    else{
        console.log("just checking rej..");
        rej("not ok");
    }
});
p.then((text) => {console.log("success ="+text);}, (text) => {console.log("error = "+text);});