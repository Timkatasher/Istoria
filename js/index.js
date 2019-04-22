let kak = document.getElementById('debil');
let knopka = document.getElementById('durak');
let buton = document.getElementById('msg');
let input = document.getElementById('text');
let nazad = document.getElementById("nazad")
knopka.addEventListener('click', function () {
//alert("nbv")
  privet.classList.remove("hidden");
durak.classList.add("hidden");
    debil.classList.remove("hidden");
  nazad.classList.remove("hidden");
   });

kak.addEventListener('click', function () {
//alert("nbv")
  privet.classList.add("hidden");
durak.classList.add("hidden");
    debil.classList.add("hidden");
 Vstuplenie.classList.remove("hidden");
  Uhadi.classList.remove("hidden");
  Poiti.classList.remove("hidden");
   });
buton.addEventListener('click', function () {
  alert( input.value + ', отныне, ты мой юный раб!' );
});

let Vstuplenie = document.getElementById("Vstuplenie");
let ProdolU = document.getElementById("ProdolU");
let Uhadi = document.getElementById("Uhadi")
let Poiti = document.getElementById("Poiti")
let Ushel = document.getElementById("Ushel")
  Uhadi.addEventListener('click', function () {
//alert("nbv")
  Vstuplenie.classList.add("hidden");
ProdolU.classList.remove("hidden");
//allert("nbv")
    Poiti.classList.add("hidden");
    Uhadi.classList.add("hidden");
    nazad.classList.add("hidden");
 });
Poiti.addEventListener('click', function () {
//alert("nbv")
  Vstuplenie.classList.add("hidden");
ProdolU.classList.add("hidden");
Poiti.classList.add("hidden");
   Ushel.classList.remove("hidden");
    Uhadi.classList.add("hidden");
  nazad.classList.add("hidden");
 });
nazad.addEventListener('click', function () {
  privet.classList.add("hidden");
kak.classList.add("hidden");
  knopka.classList.add("hidden");
  Vstuplenie.classList.add("hidden");
  ProdolU.classList.add("hidden");
  Uhadi.classList.add("hidden");
  Poiti.classList.add("hidden");
  Ushel.classList.add("hidden");
   durak.classList.remove("hidden");
  nazad.classList.add("hidden");
   });