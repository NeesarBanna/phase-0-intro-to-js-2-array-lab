let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
  }
  
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

function destructivelyRemoveLastCat() {
    cats.pop();
  }

function destructivelyRemoveFirstCat () {
   cats.shift () 
}

function appendCat(name) {
    let catsNew = cats.slice();
    catsNew.push(name);
    return catsNew;
  }
  
  function prependCat(name) {
    let catsNew = cats.slice();
    catsNew.unshift(name);
    return catsNew;
  }

  function removeLastCat() {
    let catsNew = cats.slice();
    catsNew.pop();
    return catsNew;
   }

   function removeFirstCat() {
    let catsNew = cats.slice();
    catsNew.shift();
    return catsNew;
  }