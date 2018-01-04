var plotno = document.getElementById("plotno");
var kontekst = plotno.getContext("2d");
var szerokosc = plotno.width;
var wysokosc = plotno.height;

var rozmiarBloku = 10;
var szerokoscWBlokach = szerokosc / rozmiarBloku;
var wysokoscWWBlokach = wysokosc / rozmiarBloku;

var wynik = 0;

var rysujObramowanie = function() {
    kontekst.fillStyle = "Gray";
    kontekst.fillRect(0,0,szerokosc, rozmiarBloku);
    kontekst.fillRect(0,wysokosc - rozmiarBloku, szerokosc, rozmiarBloku);
    kontekst.fillRect(0,0,rozmiarBloku, szerokosc);
    kontekst.fillRect(szerokosc - rozmiarBloku, 0, rozmiarBloku, wysokosc)
};