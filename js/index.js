// function topla(sayi1, sayi2) {
//     let toplam = sayi1 + sayi2 
    
//     return toplam
// }


// for(let i = 0; i < 15; i++) {
//     console.log(i)
// }


// faktöriyel

// 10! => 10*9*8*7*6 ... * 1

// function faktoriyelAl(sayi) {
//     if(sayi<0) {
//         return "bu sayının faktöriyeli alınamaz"
//     }

//     let sonuc = 1

//     for(let i = 1; i <= sayi; i++) {
//         sonuc = sonuc * i
//     }

//     return sonuc
// }

// console.log(faktoriyelAl(1))


// asal sayı algoritması

function asalSayiMi(sayi) {
    if (sayi < 2 && sayi > 0) {
        return false
    }

    if (sayi <= 0) {
        return "bu sayının asallığı kontrol edeilmez"
    }

    for(let i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            return false
        }
    }

    return true
}

console.log(asalSayiMi(0))