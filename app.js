function get_calc(btn) {
    if(btn.value == "=") {
        document.dentaku.display.value = eval(document.dentaku.display.value);
    } else if (btn.value == "C") {
        document.dentaku.display.value = "";
    } else if(btn.value == "1") {
        document.dentaku.display.value = eval(document.dentaku.display.value+1);
    } else if(btn.value == "2") {
        document.dentaku.display.value = eval(document.dentaku.display.value+2);
    } else if(btn.value == "3") {
        document.dentaku.display.value = eval(document.dentaku.display.value+3);
    } else if(btn.value == "4") {
        document.dentaku.display.value = eval(document.dentaku.display.value+4);
    } else if(btn.value == "5") {
        document.dentaku.display.value = eval(document.dentaku.display.value+5);
    } else if(btn.value == "6") {
        document.dentaku.display.value = eval(document.dentaku.display.value+6);
    } else if(btn.value == "7") {
        document.dentaku.display.value = eval(document.dentaku.display.value+7);
    } else if(btn.value == "8") {
        document.dentaku.display.value = eval(document.dentaku.display.value+8);
    } else if(btn.value == "9") {
        document.dentaku.display.value = eval(document.dentaku.display.value+9);
    } else {/*
        if (btn.value == "×") {
        btn.value = "*";
        }*/
        document.dentaku.display.value += btn.value;/*
        document.dentaku.add_btn.value = "×";*/
    }
}
