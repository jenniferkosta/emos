window.addEventListener("load",function(){
    emosWS.connect();
	alert("Hallo");
}, false);

$(function(){
    //ManuellRunning
    emosWS.advise("Benchmark_PLC1.Boolean.0422", function(msg){
        if(msg.value === "1" || msg.value ==="-1"){
			console.log('hallo')
            $('#Btn_Manuell').removeClass('manuellTurnOn').addClass('manuellRunning');
        } else{
            $('#Btn_Manuell').removeClass('manuellRunning');
        }
    }, "", emosWS.tagType.IO);
    
    //ManuellTurnOn
    emosWS.advise("Benchmark_PLC1.Boolean.0423", function(msg){
        if(msg.value === "1" || msg.value ==="-1"){
            $('#Btn_Manuell').removeClass('manuellRunning').addClass('manuellTurnOn');
        } else{
            $('#Btn_Manuell').removeClass('manuellTurnOn');
        }
    }, "", emosWS.tagType.IO);
    
      //AutomaticRunning
    emosWS.advise("Benchmark_PLC1.Boolean.0424", function(msg){
        if(msg.value === "1" || msg.value ==="-1"){
            $('#Btn_Automatik').removeClass('automaticTurnOn').addClass('automaticRunning');
        } else{
            $('#Btn_Automatik').removeClass('automaticRunning');
        }
    }, "", emosWS.tagType.IO);
    
    //AutomaticTurnOn
    emosWS.advise("Benchmark_PLC1.Boolean.0425", function(msg){
        if(msg.value === "1" || msg.value ==="-1"){
            $('#Btn_Automatik').removeClass('automaticRunning').addClass('automaticTurnOn');
        } else{
            $('#Btn_Automatik').removeClass('automaticTurnOn');
        }
    }, "", emosWS.tagType.IO);

    function onclickbutton(){
        alert("hallo!!!");
    }
})