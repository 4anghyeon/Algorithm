function solution(new_id) {
    var answer = '';
    var specialChars = "~!@#$%^&*()=+[{]}:?,<>/";

    // step 1
    new_id = new_id.toLowerCase();

    // step 2
    new_id = new_id.replace(/[!@~#\$%\^&\*\(\)=\+\[\{\}\]:?,<>\/]/g, "")

    // step 3
    new_id = new_id.replace(/[\.]{2,}/g, ".");

    // step 4
    let temp = new_id.split("");
    if (new_id[0] === ".") temp.splice(0, 1);
    if (new_id[new_id.length -1] === ".") temp.pop();
    new_id = temp.join("");

    // step 5
    if (new_id === "") new_id = "a";

    // step 6
    new_id = new_id.substr(0, 15);
    if (new_id[new_id.length - 1] === ".") new_id =  new_id.slice(0, new_id.length - 1);

    while (new_id.length < 3) new_id = new_id + new_id[new_id.length - 1];

    return new_id;
}
