// var blob = await fetch(`https://randomuser.me/api/`);
// var res = await blob.json();

// console.log(res);  // This doesnot work.?

async function abc() {
    var res = await fetch(`https://randomuser.me/api/`);
    var dta = await res.json()

    console.log(dta.results[0].name);

}

abc();