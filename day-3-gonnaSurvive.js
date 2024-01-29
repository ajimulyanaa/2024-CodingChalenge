// seorang pahlawan sedang dalam perjalanan ke kastil untuk menyelesaikan misinya. Namun, dia diberitahu bahwa kastil tersebut dikelilingi oleh beberapa naga yang kuat! setiap naga membutuhkan 2 peluru untuk dikalahkan, pahlawan kita tidak tahu berapa banyak peluru yang harus dia bawa.. Dengan asumsi dia akan mengambil sejumlah peluru tertentu dan bergerak maju untuk melawan naga lain dalam jumlah tertentu, akankah dia bertahan?

// Kembalikan nilai benar jika ya, salah jika sebaliknya :)

// bar bar
function hero1(bullets, dragons) {
  if (bullets / 2 >= dragons) {
    return true;
  } else {
    return false;
  }
}
console.log(hero1(10, 5));

// ternary
function hero2(bullets, dragons) {
  return bullets / 2 >= dragons ? true : false;
}

console.log(hero2(9, 5));

// ternari dan arrow function

const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(100, 50));
