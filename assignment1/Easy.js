var name1 = "josh";
var name2 = "franklin";
var output = Math.abs(name1.length - name2.length);

var longername;
var shortername;
if (name1.length > name2.length) {
    longername = name1;
    shortername = name2;
} else if (name2.length > name1.length) {
    longername = name2;
    shortername = name1;

}

if (output == 0) {
    console.log(`${name1} and ${name2} have the same length`);
} else {
    console.log(`The name ${longername} is longer than ${shortername} by ${output} characters`);
}