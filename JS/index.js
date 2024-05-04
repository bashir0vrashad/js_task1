// 1. İstifadəçidən adını soruşun və cavab olaraq ona "Salam, [adı]!" çap edin.
//let name = prompt("Adinizi daxil edin: ");
//alert("Salam, " + name);

//2. İstifadəçidən doğum ilini soruşun, onun yaşını hesablayın və nəticəni çap edin. Cari il
//kodda sabit olaraq qeyd edin.
//const current_year = 2024;
//let birth_year = prompt("Dogum ilinizi daxil edin: ");
//console.log("Yasiniz: ", current_year - birth_year);

//3. İstifadəçidən kvadratın bir tərəfinin uzunluğunu soruşun və bu kvadratın perimetrini çap
//edin.
//let side = prompt("Kvadratin terefini daxil edin: ");
//console.log("Kvadratin perimetri: ",4*side);

//4. İstifadəçidən bir dairənin radiusunu soruşun və bu dairənin sahəsini çap edin.
//const pi = 3.14;
//let radius = prompt("Dairenin radiusunu daxil edin: ");
//console.log("Dairenin sahesi: ", pi * Math.pow(radius, 2));

//5. İstifadəçidən iki şəhər arasındakı məsafəni kilometr cinsində və hansısa saatda çatmaq
//istədiyini soruşun. Vaxtında çatmaq üçün lazım olan sürəti hesablayın.
//let distance = prompt("2 seher arasinda mesafeni daxil edin(km): ");
// time = prompt("Nece saata catmaq lazimdir(saat): ");
//console.log("Lazim olan suret(km/saat): ", distance / time);

//6. Valyuta çevirici tətbiq edin. İstifadəçi dollarları daxil edir, proqram onları avrolara çevirir.
//Valyuta məzənnəsini bir sabitdə saxlayın.
//const price = 0.93;
//let dollars = prompt("Dollar daxil edin: ");
//console.log("Avro: ", dollars * price);

//7. İstifadəçi flash sürücünün həcmi GB olaraq göstərir. Proqram 820 MB ölçüsündəki
//faylların neçəsinin flash sürücünə sığacağını hesablayır.
//let gb = prompt("Gb daxil edin: ");
//let file = 820;
//console.log("Fayl sayi: ", Math.trunc((gb * 1024) / file));

//8. İstifadəçi cüzdanındakı pul miqdarını və bir cokoladka qiymətini daxil edir. Proqram
//istifadəçinin neçə cokoladka ala biləcəyini və onun əlində qalan qalan pul miqdarını çap edir
//let money = prompt("Pulunuzu daxil edin(manat): ");
//let chocolate = prompt("Sokaladin qiymetini daxil edin(manat): ");
//let pieces = Math.trunc(money / chocolate);
//let balance = money - pieces * chocolate;
//console.log("Sokalad sayi: ", pieces);
//console.log("Balans: ", balance);

//9. İstifadəçidən üç rəqəmli bir ədəd soruşun və onu tərsinə çevirin. Həll etmək üçün%
//operatorundan istifadə etməyiniz tələb olunur (bölmənin qalığı).
// let number = prompt("3 reqemli eded daxil edin: ");
// let num1 = number % 10;
// let num2 = Math.trunc(number / 10) % 10;
// let num3 = Math.trunc(number / 100);
// number = num1 * 100 + num2 * 10 + num3;
// console.log("Number: ", number);

//10. İstifadəçidən bir tam ədəd soruşun və cavab olaraq onun cüt ədəd olub olmadığını çap
//edin. Tapşırıqda mantıq operatorlarını istifadə edin. Şərt operatorları if və ya switch istifadə
//etməyiniz tələb olunur.

//let numeral = prompt("Tam eded daxil edin: ");
//if(numeral%2===0) console.log("Eded cutdur");
//else console.log("Eded tekdir");
