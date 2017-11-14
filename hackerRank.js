function processData(input) {
    //Enter your code here
    input_array = input.split("\n");
    
    for (var i = 1; i < input_array.length; i++) {
        console.log(input_array[i]);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
