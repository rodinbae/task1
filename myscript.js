class Kitap{
constructor(resim,isim,yazar,adet,fiyat,id,tur){
    this.resim = resim;
    this.isim = isim;
    this.yazar = yazar;
    this.adet = adet;
    this.fiyat = fiyat;
    this.id = id;
    this.tur=tur;
}
}

var kitap1 = new Kitap("<img src='images/kitap.jpg' style='width:250px'>","The Witcher: Kirlangic Kulesi", "Andrzej Sapkowski" , 1 , 20 , 1,"fantastik");
var kitap2 = new Kitap("<img src='images/kitap2.jpg' style='width:250px'>","1984","George Orwell",1,15,2,"roman");
var kitap3 = new Kitap("<img src='images/kitap3.jpg' style='width:250px'>","Hayat Icin 12 Kural","Jordan Peterson",1,30,3,"gelisim");
var kitap4 = new Kitap("<img src='images/kitap4.jpg' style='width:250px'>","Atomik Aliskanliklar","James Clear",1,10,4,"gelisim");
var kitap5 = new Kitap("<img src='images/kitap5.jpg' style='width:250px'>","Muhtesem Gatsby","Fitzgerald",1,15,5,"roman");
var kitap6 = new Kitap("<img src='images/kitap6.jpg' style='width:250px'>","Darth Bane: Yikim Yolu","Drew Karpyshyn",1,15,6,"fantastik");
var kitap7 = new Kitap("<img src='images/kitap7.jpg' style='width:250px'>","Zengin Baba Yoksul Baba","Robert T Kiyosaki",1,30,7,"gelisim");
var kitap8 = new Kitap("<img src='images/kitap8.jpg' style='width:250px'>","Don Kisot","Cervantes",1,12,8,"roman");
var kitap9 = new Kitap("<img src='images/kitap9.jpg' style='width:250px'>","Taht Oyunlari","George R.R. Martin",1,30,9,"fantastik");

//sepetMiktar degiskeni navbar'daki sepet ikonunun oradaki sayiyi arttiriyor.
let sepetMiktar = 0;

// offcanvas'ta bulunan toplam adet sayisini arttiriyor.
let toplamAdet = 0; 

// offcanvas'ta bulunan toplam tutari arttiracak kod.
let toplamTutar = 0;

// kitapArttir ve kitapAzalt fonksiyonunda kullanilan kod. Bunu adet olarak dusunebiliriz. Yani miktar artinca carpan 2 olcak fiyat 20 ise toplam 40 olur.
// kitapAzaltta da carpan azalir, toplam tutar 2 den 1 e dustuyse ve fiyat 20 ise toplam 20 olur.
let carpan = 1;

// konum artinca her kitap baska bir span icine yerlesecek.
let konum = 0; 

//her kitabın kendine ait adet miktarı var ve bu değişken sayesinde onu arttırıp azaltıcaz.

let bireyselKitapAdet = 0, ikinciKitapAdet = 0, ucuncuKitapAdet = 0, dorduncuKitapAdet = 0, besinciKitapAdet = 0, altinciKitapAdet = 0, yedinciKitapAdet = 0, sekizinciKitapAdet = 0;
let dokuzuncuKitapAdet = 0;

//Burada ID diye bir değişken oluşturucam, her kontrol fonksiyonunda farklı bir değere atanacak ve bu atanan değer doğrultusunda sepette fiyat artışı ona göre yapılacak.
let ID=0;

function Kontrol(){
    konum++;
    bireyselKitapAdet++;
    sepetMiktar++; //yukarida bahsettigim gibi navbardaki sepet ikonunun yanina gelen sayiyi arttiriyor.
    toplamAdet++; //offcanvas'ta bulunan toplam adet sayisini arttiriyor
    toplamTutar += kitap1.fiyat;
    ID = 1;

    if(konum==1){
        document.getElementById("sepetMiktar").innerText = sepetMiktar;

        document.getElementById("kitapIcerik").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD" + "<br>" + "ID: " + kitap1.id + "<br>";
        
        document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }

   else if(konum==2){
        document.getElementById("kitapIcerik2").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD" + "<br>" + "ID: " + kitap1.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet2").innerHTML = "Adet: " + bireyselKitapAdet;
        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;

    }

    else if(konum==3){
        document.getElementById("kitapIcerik3").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD" + "<br>" + "ID: " + kitap1.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet3").innerHTML = "Adet: " + bireyselKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }

    else if(konum==4){
        document.getElementById("kitapIcerik4").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD" + "<br>" + "ID: " + kitap1.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet4").innerHTML = "Adet: " + bireyselKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }
else if(konum==5){
    document.getElementById("kitapIcerik5").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD" + "<br>" + "ID: " + kitap1.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet5").innerHTML = "Adet: " + bireyselKitapAdet;
        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==6){
    document.getElementById("kitapIcerik6").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD" + "<br>" + "ID: " + kitap1.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet6").innerHTML = "Adet: " + bireyselKitapAdet;
        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==7){
    document.getElementById("kitapIcerik7").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD" + "<br>" + "ID: " + kitap1.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet7").innerHTML = "Adet: " + bireyselKitapAdet;
        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==8){
    document.getElementById("kitapIcerik8").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD" + "<br>" + "ID: " + kitap1.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet8").innerHTML = "Adet: " + bireyselKitapAdet;
        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==9){
    document.getElementById("kitapIcerik9").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD" + "<br>" + "ID: " + kitap1.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet9").innerHTML = "Adet: " + bireyselKitapAdet;
        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
    
}

function Kontrol2(){
    sepetMiktar++;
    toplamAdet++;
    konum++;
    toplamTutar+=kitap2.fiyat;
    ID=2;
    ikinciKitapAdet++;

    if(konum==1){
        document.getElementById("sepetMiktar").innerText = sepetMiktar;

        document.getElementById("kitapIcerik").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD" + "<br>" + "ID: " + kitap2.id + "<br>";
    
        document.getElementById("kitapAdet").innerHTML = "Adet: " + ikinciKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }

    else if(konum==2){
        document.getElementById("kitapIcerik2").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD" + "<br>" + "ID: " + kitap2.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;

    }

    else if(konum==3){
        document.getElementById("kitapIcerik3").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD" + "<br>" + "ID: " + kitap2.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet3").innerHTML = "Adet: " + ikinciKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }

    else if(konum==4){
        document.getElementById("kitapIcerik4").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD" + "<br>" + "ID: " + kitap2.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet4").innerHTML = "Adet: " + ikinciKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }
else if(konum==5){
    document.getElementById("kitapIcerik5").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD" + "<br>" + "ID: " + kitap2.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet5").innerHTML = "Adet: " + ikinciKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==6){
    document.getElementById("kitapIcerik6").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD" + "<br>" + "ID: " + kitap2.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet6").innerHTML = "Adet: " + ikinciKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==7){
    document.getElementById("kitapIcerik7").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD" + "<br>" + "ID: " + kitap2.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet7").innerHTML = "Adet: " + ikinciKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==8){
    document.getElementById("kitapIcerik8").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD" + "<br>" + "ID: " + kitap2.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet8").innerHTML = "Adet: " + ikinciKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==9){
    document.getElementById("kitapIcerik9").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD" + "<br>" + "ID: " + kitap2.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet9").innerHTML = "Adet: " + ikinciKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}




}

function Kontrol3(){
    sepetMiktar++;
    toplamAdet++;
    konum++;
    toplamTutar+=kitap3.fiyat;
    ID=3;
    ucuncuKitapAdet++;

    if(konum==1){
        document.getElementById("sepetMiktar").innerText = sepetMiktar;

        document.getElementById("kitapIcerik").innerHTML = kitap3.resim + "<br>" + "Kitap Adi: " + kitap3.isim + "<br>" + "Yazar: " + kitap3.yazar + "<br>" + "Fiyat: " + kitap3.fiyat + " USD" + "<br>" + "ID: " + kitap3.id + "<br>";
        document.getElementById("kitapAdet").innerHTML = "Adet: " + ucuncuKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }

   else if(konum==2){
        document.getElementById("kitapIcerik2").innerHTML = kitap3.resim + "<br>" + "Kitap Adi: " + kitap3.isim + "<br>" + "Yazar: " + kitap3.yazar + "<br>" + "Fiyat: " + kitap3.fiyat + " USD" + "<br>" + "ID: " + kitap3.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet2").innerHTML = "Adet: " + ucuncuKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;

    }

    else if(konum==3){
        document.getElementById("kitapIcerik3").innerHTML = kitap3.resim + "<br>" + "Kitap Adi: " + kitap3.isim + "<br>" + "Yazar: " + kitap3.yazar + "<br>" + "Fiyat: " + kitap3.fiyat + " USD" + "<br>" + "ID: " + kitap3.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }

    else if(konum==4){
        document.getElementById("kitapIcerik4").innerHTML = kitap3.resim + "<br>" + "Kitap Adi: " + kitap3.isim + "<br>" + "Yazar: " + kitap3.yazar + "<br>" + "Fiyat: " + kitap3.fiyat + " USD" + "<br>" + "ID: " + kitap3.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet4").innerHTML = "Adet: " + ucuncuKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }
else if(konum==5){
    document.getElementById("kitapIcerik5").innerHTML = kitap3.resim + "<br>" + "Kitap Adi: " + kitap3.isim + "<br>" + "Yazar: " + kitap3.yazar + "<br>" + "Fiyat: " + kitap3.fiyat + " USD" + "<br>" + "ID: " + kitap3.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet5").innerHTML = "Adet: " + ucuncuKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==6){
    document.getElementById("kitapIcerik6").innerHTML = kitap3.resim + "<br>" + "Kitap Adi: " + kitap3.isim + "<br>" + "Yazar: " + kitap3.yazar + "<br>" + "Fiyat: " + kitap3.fiyat + " USD" + "<br>" + "ID: " + kitap3.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet6").innerHTML = "Adet: " + ucuncuKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==7){
    document.getElementById("kitapIcerik7").innerHTML = kitap3.resim + "<br>" + "Kitap Adi: " + kitap3.isim + "<br>" + "Yazar: " + kitap3.yazar + "<br>" + "Fiyat: " + kitap3.fiyat + " USD" + "<br>" + "ID: " + kitap3.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet7").innerHTML = "Adet: " + ucuncuKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==8){
    document.getElementById("kitapIcerik8").innerHTML = kitap3.resim + "<br>" + "Kitap Adi: " + kitap3.isim + "<br>" + "Yazar: " + kitap3.yazar + "<br>" + "Fiyat: " + kitap3.fiyat + " USD" + "<br>" + "ID: " + kitap3.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet8").innerHTML = "Adet: " + ucuncuKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}
else if(konum==9){
    document.getElementById("kitapIcerik9").innerHTML = kitap3.resim + "<br>" + "Kitap Adi: " + kitap3.isim + "<br>" + "Yazar: " + kitap3.yazar + "<br>" + "Fiyat: " + kitap3.fiyat + " USD" + "<br>" + "ID: " + kitap3.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
        document.getElementById("kitapAdet9").innerHTML = "Adet: " + ucuncuKitapAdet;

        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
}

    
    
    }

    function Kontrol4(){

        sepetMiktar++;
        toplamAdet++;
        konum++;
        toplamTutar+=kitap4.fiyat;
        ID=4;
        dorduncuKitapAdet++;

        if(konum==1){
            document.getElementById("sepetMiktar").innerText = sepetMiktar;
    
            document.getElementById("kitapIcerik").innerHTML = kitap4.resim + "<br>" + "Kitap Adi: " + kitap4.isim + "<br>" + "Yazar: " + kitap4.yazar + "<br>" + "Fiyat: " + kitap4.fiyat + " USD" + "<br>" + "ID: " + kitap4.id + "<br>";
        
            document.getElementById("kitapAdet").innerHTML = "Adet: " + dorduncuKitapAdet;

            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
        }
    
       else if(konum==2){
            document.getElementById("kitapIcerik2").innerHTML = kitap4.resim + "<br>" + "Kitap Adi: " + kitap4.isim + "<br>" + "Yazar: " + kitap4.yazar + "<br>" + "Fiyat: " + kitap4.fiyat + " USD" + "<br>" + "ID: " + kitap4.id + "<br>";
            document.getElementById("sepetMiktar").innerText = sepetMiktar;
            document.getElementById("kitapAdet2").innerHTML = "Adet: " + dorduncuKitapAdet;

            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    
        }
    
        else if(konum==3){
            document.getElementById("kitapIcerik3").innerHTML = kitap4.resim + "<br>" + "Kitap Adi: " + kitap4.isim + "<br>" + "Yazar: " + kitap4.yazar + "<br>" + "Fiyat: " + kitap4.fiyat + " USD" + "<br>" + "ID: " + kitap4.id + "<br>";
            document.getElementById("sepetMiktar").innerText = sepetMiktar;
            document.getElementById("kitapAdet3").innerHTML = "Adet: " + dorduncuKitapAdet;

            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
        }
    
        else if(konum==4){
            document.getElementById("kitapIcerik4").innerHTML = kitap4.resim + "<br>" + "Kitap Adi: " + kitap4.isim + "<br>" + "Yazar: " + kitap4.yazar + "<br>" + "Fiyat: " + kitap4.fiyat + " USD" + "<br>" + "ID: " + kitap4.id + "<br>";
            document.getElementById("sepetMiktar").innerText = sepetMiktar;
            document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;

            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
        }
    else if(konum==5){
        document.getElementById("kitapIcerik5").innerHTML = kitap4.resim + "<br>" + "Kitap Adi: " + kitap4.isim + "<br>" + "Yazar: " + kitap4.yazar + "<br>" + "Fiyat: " + kitap4.fiyat + " USD" + "<br>" + "ID: " + kitap4.id + "<br>";
            document.getElementById("sepetMiktar").innerText = sepetMiktar;
            document.getElementById("kitapAdet5").innerHTML = "Adet: " + dorduncuKitapAdet;

            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }
    else if(konum==6){
        document.getElementById("kitapIcerik6").innerHTML = kitap4.resim + "<br>" + "Kitap Adi: " + kitap4.isim + "<br>" + "Yazar: " + kitap4.yazar + "<br>" + "Fiyat: " + kitap4.fiyat + " USD" + "<br>" + "ID: " + kitap4.id + "<br>";
            document.getElementById("sepetMiktar").innerText = sepetMiktar;
            document.getElementById("kitapAdet6").innerHTML = "Adet: " + dorduncuKitapAdet;

            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }
    else if(konum==7){
        document.getElementById("kitapIcerik7").innerHTML = kitap4.resim + "<br>" + "Kitap Adi: " + kitap4.isim + "<br>" + "Yazar: " + kitap4.yazar + "<br>" + "Fiyat: " + kitap4.fiyat + " USD" + "<br>" + "ID: " + kitap4.id + "<br>";
        document.getElementById("sepetMiktar").innerText = sepetMiktar;

        document.getElementById("kitapAdet7").innerHTML = "Adet: " + dorduncuKitapAdet;
    
        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }
    else if(konum==8){
        document.getElementById("kitapIcerik8").innerHTML = kitap4.resim + "<br>" + "Kitap Adi: " + kitap4.isim + "<br>" + "Yazar: " + kitap4.yazar + "<br>" + "Fiyat: " + kitap4.fiyat + " USD" + "<br>" + "ID: " + kitap4.id + "<br>";
            document.getElementById("sepetMiktar").innerText = sepetMiktar;
            document.getElementById("kitapAdet8").innerHTML = "Adet: " + dorduncuKitapAdet;

            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }
    else if(konum==9){
        document.getElementById("kitapIcerik9").innerHTML = kitap4.resim + "<br>" + "Kitap Adi: " + kitap4.isim + "<br>" + "Yazar: " + kitap4.yazar + "<br>" + "Fiyat: " + kitap4.fiyat + " USD" + "<br>" + "ID: " + kitap4.id + "<br>";
            document.getElementById("sepetMiktar").innerText = sepetMiktar;
            document.getElementById("kitapAdet9").innerHTML = "Adet: " + dorduncuKitapAdet;

            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
    }
}


        function Kontrol5(){

            sepetMiktar++;
            toplamAdet++;
            konum++;
            toplamTutar+=kitap5.fiyat;
            ID=5;
            besinciKitapAdet++;

            if(konum==1){
                document.getElementById("sepetMiktar").innerText = sepetMiktar;
        
                document.getElementById("kitapIcerik").innerHTML = kitap5.resim + "<br>" + "Kitap Adi: " + kitap5.isim + "<br>" + "Yazar: " + kitap5.yazar + "<br>" + "Fiyat: " + kitap5.fiyat + " USD" + "<br>" + "ID: " + kitap5.id + "<br>";
                
                document.getElementById("kitapAdet").innerHTML = "Adet: " + besinciKitapAdet;

                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
            }
        
           else if(konum==2){
                document.getElementById("kitapIcerik2").innerHTML = kitap5.resim + "<br>" + "Kitap Adi: " + kitap5.isim + "<br>" + "Yazar: " + kitap5.yazar + "<br>" + "Fiyat: " + kitap5.fiyat + " USD" + "<br>" + "ID: " + kitap5.id + "<br>";
                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                document.getElementById("kitapAdet2").innerHTML = "Adet: " + besinciKitapAdet;

                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
        
            }
        
            else if(konum==3){
                document.getElementById("kitapIcerik3").innerHTML = kitap5.resim + "<br>" + "Kitap Adi: " + kitap5.isim + "<br>" + "Yazar: " + kitap5.yazar + "<br>" + "Fiyat: " + kitap5.fiyat + " USD" + "<br>" + "ID: " + kitap5.id + "<br>";
                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                document.getElementById("kitapAdet3").innerHTML = "Adet: " + besinciKitapAdet;

                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
            }
        
            else if(konum==4){
                document.getElementById("kitapIcerik4").innerHTML = kitap5.resim + "<br>" + "Kitap Adi: " + kitap5.isim + "<br>" + "Yazar: " + kitap5.yazar + "<br>" + "Fiyat: " + kitap5.fiyat + " USD" + "<br>" + "ID: " + kitap5.id + "<br>";
                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                document.getElementById("kitapAdet4").innerHTML = "Adet: " + besinciKitapAdet;

                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
            }
        else if(konum==5){
            document.getElementById("kitapIcerik5").innerHTML = kitap5.resim + "<br>" + "Kitap Adi: " + kitap5.isim + "<br>" + "Yazar: " + kitap5.yazar + "<br>" + "Fiyat: " + kitap5.fiyat + " USD" + "<br>" + "ID: " + kitap5.id + "<br>";
                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;

                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
        }
        else if(konum==6){
            document.getElementById("kitapIcerik6").innerHTML = kitap5.resim + "<br>" + "Kitap Adi: " + kitap5.isim + "<br>" + "Yazar: " + kitap5.yazar + "<br>" + "Fiyat: " + kitap5.fiyat + " USD" + "<br>" + "ID: " + kitap5.id + "<br>";
                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                document.getElementById("kitapAdet6").innerHTML = "Adet: " + besinciKitapAdet;

                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
        }
        else if(konum==7){
            document.getElementById("kitapIcerik7").innerHTML = kitap5.resim + "<br>" + "Kitap Adi: " + kitap5.isim + "<br>" + "Yazar: " + kitap5.yazar + "<br>" + "Fiyat: " + kitap5.fiyat + " USD" + "<br>" + "ID: " + kitap5.id + "<br>";
                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                document.getElementById("kitapAdet7").innerHTML = "Adet: " + besinciKitapAdet;

                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
        }
        else if(konum==8){
            document.getElementById("kitapIcerik8").innerHTML = kitap5.resim + "<br>" + "Kitap Adi: " + kitap5.isim + "<br>" + "Yazar: " + kitap5.yazar + "<br>" + "Fiyat: " + kitap5.fiyat + " USD" + "<br>" + "ID: " + kitap5.id + "<br>";
                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                document.getElementById("kitapAdet8").innerHTML = "Adet: " + besinciKitapAdet;

                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
        }
        else if(konum==9){
            document.getElementById("kitapIcerik9").innerHTML = kitap5.resim + "<br>" + "Kitap Adi: " + kitap5.isim + "<br>" + "Yazar: " + kitap5.yazar + "<br>" + "Fiyat: " + kitap5.fiyat + " USD" + "<br>" + "ID: " + kitap5.id + "<br>";
                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                document.getElementById("kitapAdet9").innerHTML = "Adet: " + besinciKitapAdet;

                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
        }
            
            }

            function Kontrol6(){
                sepetMiktar++;
                konum++;
                toplamAdet++;
                toplamTutar+=kitap6.fiyat;
                altinciKitapAdet++;
                ID=6;

                if(konum==1){
                    document.getElementById("sepetMiktar").innerText = sepetMiktar;
            
                    document.getElementById("kitapIcerik").innerHTML = kitap6.resim + "<br>" + "Kitap Adi: " + kitap6.isim + "<br>" + "Yazar: " + kitap6.yazar + "<br>" + "Fiyat: " + kitap6.fiyat + " USD" + "<br>" + "ID: " + kitap6.id + "<br>";
                
                    document.getElementById("kitapAdet").innerHTML = "Adet: " + altinciKitapAdet;

                    document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                    document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                }
            
               else if(konum==2){
                    document.getElementById("kitapIcerik2").innerHTML = kitap6.resim + "<br>" + "Kitap Adi: " + kitap6.isim + "<br>" + "Yazar: " + kitap6.yazar + "<br>" + "Fiyat: " + kitap6.fiyat + " USD" + "<br>" + "ID: " + kitap6.id + "<br>";
                    document.getElementById("sepetMiktar").innerText = sepetMiktar;
                    document.getElementById("kitapAdet2").innerHTML = "Adet: " + altinciKitapAdet;

                    document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                    document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
            
                }
            
                else if(konum==3){
                    document.getElementById("kitapIcerik3").innerHTML = kitap6.resim + "<br>" + "Kitap Adi: " + kitap6.isim + "<br>" + "Yazar: " + kitap6.yazar + "<br>" + "Fiyat: " + kitap6.fiyat + " USD" + "<br>" + "ID: " + kitap6.id + "<br>";
                    document.getElementById("sepetMiktar").innerText = sepetMiktar;
                    document.getElementById("kitapAdet3").innerHTML = "Adet: " + altinciKitapAdet;

                    document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                     document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                }
            
                else if(konum==4){
                    document.getElementById("kitapIcerik4").innerHTML = kitap6.resim + "<br>" + "Kitap Adi: " + kitap6.isim + "<br>" + "Yazar: " + kitap6.yazar + "<br>" + "Fiyat: " + kitap6.fiyat + " USD" + "<br>" + "ID: " + kitap6.id + "<br>";
                    document.getElementById("sepetMiktar").innerText = sepetMiktar;
                    document.getElementById("kitapAdet4").innerHTML = "Adet: " + altinciKitapAdet;

                    document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                }
            else if(konum==5){
                document.getElementById("kitapIcerik5").innerHTML = kitap6.resim + "<br>" + "Kitap Adi: " + kitap6.isim + "<br>" + "Yazar: " + kitap6.yazar + "<br>" + "Fiyat: " + kitap6.fiyat + " USD" + "<br>" + "ID: " + kitap6.id + "<br>";
                    document.getElementById("sepetMiktar").innerText = sepetMiktar;
                    document.getElementById("kitapAdet5").innerHTML = "Adet: " + altinciKitapAdet;

                    document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                     document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
            }
            else if(konum==6){
                document.getElementById("kitapIcerik6").innerHTML = kitap6.resim + "<br>" + "Kitap Adi: " + kitap6.isim + "<br>" + "Yazar: " + kitap6.yazar + "<br>" + "Fiyat: " + kitap6.fiyat + " USD" + "<br>" + "ID: " + kitap6.id + "<br>";
                document.getElementById("sepetMiktar").innerText = sepetMiktar;

                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
            }
            else if(konum==7){
                document.getElementById("kitapIcerik7").innerHTML = kitap6.resim + "<br>" + "Kitap Adi: " + kitap6.isim + "<br>" + "Yazar: " + kitap6.yazar + "<br>" + "Fiyat: " + kitap6.fiyat + " USD" + "<br>" + "ID: " + kitap6.id + "<br>";
                    document.getElementById("sepetMiktar").innerText = sepetMiktar;
                    document.getElementById("kitapAdet7").innerHTML = "Adet: " + altinciKitapAdet;

                    document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
            }
            else if(konum==8){
                document.getElementById("kitapIcerik8").innerHTML = kitap6.resim + "<br>" + "Kitap Adi: " + kitap6.isim + "<br>" + "Yazar: " + kitap6.yazar + "<br>" + "Fiyat: " + kitap6.fiyat + " USD" + "<br>" + "ID: " + kitap6.id + "<br>";
                    document.getElementById("sepetMiktar").innerText = sepetMiktar;
                    document.getElementById("kitapAdet8").innerHTML = "Adet: " + altinciKitapAdet;

                    document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                    document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
            }
            else if(konum==9){
                document.getElementById("kitapIcerik9").innerHTML = kitap6.resim + "<br>" + "Kitap Adi: " + kitap6.isim + "<br>" + "Yazar: " + kitap6.yazar + "<br>" + "Fiyat: " + kitap6.fiyat + " USD" + "<br>" + "ID: " + kitap6.id + "<br>";
                    document.getElementById("sepetMiktar").innerText = sepetMiktar;
                    document.getElementById("kitapAdet9").innerHTML = "Adet: " + altinciKitapAdet;

                    document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                     document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
            }
 
                }

                function Kontrol7(){
                    sepetMiktar++;
                    toplamAdet++;
                    konum++;
                    toplamTutar+=kitap7.fiyat;
                    yedinciKitapAdet++;
                    ID=7;

                    if(konum==1){
                        document.getElementById("sepetMiktar").innerText = sepetMiktar;
                
                        document.getElementById("kitapIcerik").innerHTML = kitap7.resim + "<br>" + "Kitap Adi: " + kitap7.isim + "<br>" + "Yazar: " + kitap7.yazar + "<br>" + "Fiyat: " + kitap7.fiyat + " USD" + "<br>" + "ID: " + kitap7.id + "<br>";
                    
                        document.getElementById("kitapAdet").innerHTML = "Adet: " + yedinciKitapAdet;


                        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                         document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                    }
                
                   else if(konum==2){
                        document.getElementById("kitapIcerik2").innerHTML = kitap7.resim + "<br>" + "Kitap Adi: " + kitap7.isim + "<br>" + "Yazar: " + kitap7.yazar + "<br>" + "Fiyat: " + kitap7.fiyat + " USD" + "<br>" + "ID: " + kitap7.id + "<br>";
                        document.getElementById("sepetMiktar").innerText = sepetMiktar;
                        document.getElementById("kitapAdet2").innerHTML = "Adet: " + yedinciKitapAdet;

                        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                          document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                
                    }
                
                    else if(konum==3){
                        document.getElementById("kitapIcerik3").innerHTML = kitap7.resim + "<br>" + "Kitap Adi: " + kitap7.isim + "<br>" + "Yazar: " + kitap7.yazar + "<br>" + "Fiyat: " + kitap7.fiyat + " USD" + "<br>" + "ID: " + kitap7.id + "<br>";
                        document.getElementById("sepetMiktar").innerText = sepetMiktar;
                        document.getElementById("kitapAdet3").innerHTML = "Adet: " + yedinciKitapAdet;

                        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                    }
                
                    else if(konum==4){
                        document.getElementById("kitapIcerik4").innerHTML = kitap7.resim + "<br>" + "Kitap Adi: " + kitap7.isim + "<br>" + "Yazar: " + kitap7.yazar + "<br>" + "Fiyat: " + kitap7.fiyat + " USD" + "<br>" + "ID: " + kitap7.id + "<br>";
                        document.getElementById("sepetMiktar").innerText = sepetMiktar;
                        document.getElementById("kitapAdet4").innerHTML = "Adet: " + yedinciKitapAdet;

                        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                    }
                else if(konum==5){
                    document.getElementById("kitapIcerik5").innerHTML = kitap7.resim + "<br>" + "Kitap Adi: " + kitap7.isim + "<br>" + "Yazar: " + kitap7.yazar + "<br>" + "Fiyat: " + kitap7.fiyat + " USD" + "<br>" + "ID: " + kitap7.id + "<br>";
                        document.getElementById("sepetMiktar").innerText = sepetMiktar;
                        document.getElementById("kitapAdet5").innerHTML = "Adet: " + yedinciKitapAdet;

                        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                }
                else if(konum==6){
                    document.getElementById("kitapIcerik6").innerHTML = kitap7.resim + "<br>" + "Kitap Adi: " + kitap7.isim + "<br>" + "Yazar: " + kitap7.yazar + "<br>" + "Fiyat: " + kitap7.fiyat + " USD" + "<br>" + "ID: " + kitap7.id + "<br>";
                        document.getElementById("sepetMiktar").innerText = sepetMiktar;
                        document.getElementById("kitapAdet6").innerHTML = "Adet: " + yedinciKitapAdet;

                        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                }
                else if(konum==7){
                    document.getElementById("kitapIcerik7").innerHTML = kitap7.resim + "<br>" + "Kitap Adi: " + kitap7.isim + "<br>" + "Yazar: " + kitap7.yazar + "<br>" + "Fiyat: " + kitap7.fiyat + " USD" + "<br>" + "ID: " + kitap7.id + "<br>";
                        document.getElementById("sepetMiktar").innerText = sepetMiktar;
                        document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;

                        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                }
                else if(konum==8){
                    document.getElementById("kitapIcerik8").innerHTML = kitap7.resim + "<br>" + "Kitap Adi: " + kitap7.isim + "<br>" + "Yazar: " + kitap7.yazar + "<br>" + "Fiyat: " + kitap7.fiyat + " USD" + "<br>" + "ID: " + kitap7.id + "<br>";
                        document.getElementById("sepetMiktar").innerText = sepetMiktar;
                        document.getElementById("kitapAdet8").innerHTML = "Adet: " + yedinciKitapAdet;

                        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                }
                else if(konum==9){
                    document.getElementById("kitapIcerik9").innerHTML = kitap7.resim + "<br>" + "Kitap Adi: " + kitap7.isim + "<br>" + "Yazar: " + kitap7.yazar + "<br>" + "Fiyat: " + kitap7.fiyat + " USD" + "<br>" + "ID: " + kitap7.id + "<br>";
                        document.getElementById("sepetMiktar").innerText = sepetMiktar;
                        document.getElementById("kitapAdet9").innerHTML = "Adet: " + yedinciKitapAdet;

                        document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                }

                    
                    
                    }

                    function Kontrol8(){
                        sepetMiktar++;
                        toplamAdet++;
                        konum++;
                        toplamTutar+=kitap8.fiyat;
                        ID=8;
                        sekizinciKitapAdet++;

                        if(konum==1){
                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                    
                            document.getElementById("kitapIcerik").innerHTML = kitap8.resim + "<br>" + "Kitap Adi: " + kitap8.isim + "<br>" + "Yazar: " + kitap8.yazar + "<br>" + "Fiyat: " + kitap8.fiyat + " USD" + "<br>" + "ID: " + kitap8.id + "<br>";
                        
                            document.getElementById("kitapAdet").innerHTML = "Adet: " + sekizinciKitapAdet;


                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                        }
                    
                       else if(konum==2){
                            document.getElementById("kitapIcerik2").innerHTML = kitap8.resim + "<br>" + "Kitap Adi: " + kitap8.isim + "<br>" + "Yazar: " + kitap8.yazar + "<br>" + "Fiyat: " + kitap8.fiyat + " USD" + "<br>" + "ID: " + kitap8.id + "<br>";
                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("kitapAdet2").innerHTML = "Adet: " + sekizinciKitapAdet;

                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                        }
                    
                        else if(konum==3){
                            document.getElementById("kitapIcerik3").innerHTML = kitap8.resim + "<br>" + "Kitap Adi: " + kitap8.isim + "<br>" + "Yazar: " + kitap8.yazar + "<br>" + "Fiyat: " + kitap8.fiyat + " USD" + "<br>" + "ID: " + kitap8.id + "<br>";
                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("kitapAdet3").innerHTML = "Adet: " + sekizinciKitapAdet;

                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                        }
                    
                        else if(konum==4){
                            document.getElementById("kitapIcerik4").innerHTML = kitap8.resim + "<br>" + "Kitap Adi: " + kitap8.isim + "<br>" + "Yazar: " + kitap8.yazar + "<br>" + "Fiyat: " + kitap8.fiyat + " USD" + "<br>" + "ID: " + kitap8.id + "<br>";
                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("kitapAdet4").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                        }
                    else if(konum==5){
                        document.getElementById("kitapIcerik5").innerHTML = kitap8.resim + "<br>" + "Kitap Adi: " + kitap8.isim + "<br>" + "Yazar: " + kitap8.yazar + "<br>" + "Fiyat: " + kitap8.fiyat + " USD" + "<br>" + "ID: " + kitap8.id + "<br>" ;
                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("kitapAdet5").innerHTML = "Adet: " + sekizinciKitapAdet;

                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                    }
                    else if(konum==6){
                        document.getElementById("kitapIcerik6").innerHTML = kitap8.resim + "<br>" + "Kitap Adi: " + kitap8.isim + "<br>" + "Yazar: " + kitap8.yazar + "<br>" + "Fiyat: " + kitap8.fiyat + " USD" + "<br>" + "ID: " + kitap8.id + "<br>" ;
                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("kitapAdet6").innerHTML = "Adet: " + sekizinciKitapAdet;

                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                    }
                    else if(konum==7){
                        document.getElementById("kitapIcerik7").innerHTML = kitap8.resim + "<br>" + "Kitap Adi: " + kitap8.isim + "<br>" + "Yazar: " + kitap8.yazar + "<br>" + "Fiyat: " + kitap8.fiyat + " USD" + "<br>" + "ID: " + kitap8.id + "<br>" ;
                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("kitapAdet7").innerHTML = "Adet: " + sekizinciKitapAdet;

                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                    }
                    else if(konum==8){
                        document.getElementById("kitapIcerik8").innerHTML = kitap8.resim + "<br>" + "Kitap Adi: " + kitap8.isim + "<br>" + "Yazar: " + kitap8.yazar + "<br>" + "Fiyat: " + kitap8.fiyat + " USD" + "<br>" + "ID: " + kitap8.id + "<br>" ;
                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;

                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                    }
                    else if(konum==9){
                        document.getElementById("kitapIcerik9").innerHTML  = kitap8.resim + "<br>" + "Kitap Adi: " + kitap8.isim + "<br>" + "Yazar: " + kitap8.yazar + "<br>" + "Fiyat: " + kitap8.fiyat + " USD" + "<br>" + "ID: " + kitap8.id + "<br>";
                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("kitapAdet9").innerHTML = "Adet: " + sekizinciKitapAdet;

                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                    }

                        
                        }

                        function Kontrol9(){
                            sepetMiktar++;
                            toplamAdet++;
                            konum++;
                            toplamTutar+=kitap9.fiyat;
                            ID=9;
                            dokuzuncuKitapAdet++;

                            if(konum==1){
                                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                        
                                document.getElementById("kitapIcerik").innerHTML = kitap9.resim + "<br>" + "Kitap Adi: " + kitap9.isim + "<br>" + "Yazar: " + kitap9.yazar + "<br>" + "Fiyat: " + kitap9.fiyat + " USD" + "<br>" + "ID: " + kitap9.id + "<br>";
                            
                                document.getElementById("kitapAdet").innerHTML = "Adet: " + dokuzuncuKitapAdet;


                                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                        
                           else if(konum==2){
                                document.getElementById("kitapIcerik2").innerHTML = kitap9.resim + "<br>" + "Kitap Adi: " + kitap9.isim + "<br>" + "Yazar: " + kitap9.yazar + "<br>" + "Fiyat: " + kitap9.fiyat + " USD" + "<br>" + "ID: " + kitap9.id + "<br>";
                                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                        
                            }
                        
                            else if(konum==3){
                                document.getElementById("kitapIcerik3").innerHTML = kitap9.resim + "<br>" + "Kitap Adi: " + kitap9.isim + "<br>" + "Yazar: " + kitap9.yazar + "<br>" + "Fiyat: " + kitap9.fiyat + " USD" + "<br>" + "ID: " + kitap9.id + "<br>";
                                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                        
                            else if(konum==4){
                                document.getElementById("kitapIcerik4").innerHTML = kitap9.resim + "<br>" + "Kitap Adi: " + kitap9.isim + "<br>" + "Yazar: " + kitap9.yazar + "<br>" + "Fiyat: " + kitap9.fiyat + " USD" + "<br>" + "ID: " + kitap9.id + "<br>";
                                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                        else if(konum==5){
                            document.getElementById("kitapIcerik5").innerHTML = kitap9.resim + "<br>" + "Kitap Adi: " + kitap9.isim + "<br>" + "Yazar: " + kitap9.yazar + "<br>" + "Fiyat: " + kitap9.fiyat + " USD" + "<br>" + "ID: " + kitap9.id + "<br>";
                                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                        }
                        else if(konum==6){
                            document.getElementById("kitapIcerik6").innerHTML = kitap9.resim + "<br>" + "Kitap Adi: " + kitap9.isim + "<br>" + "Yazar: " + kitap9.yazar + "<br>" + "Fiyat: " + kitap9.fiyat + " USD" + "<br>" + "ID: " + kitap9.id + "<br>";
                                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                        }
                        else if(konum==7){
                            document.getElementById("kitapIcerik7").innerHTML = kitap9.resim + "<br>" + "Kitap Adi: " + kitap9.isim + "<br>" + "Yazar: " + kitap9.yazar + "<br>" + "Fiyat: " + kitap9.fiyat + " USD" + "<br>" + "ID: " + kitap9.id + "<br>";
                                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                        }
                        else if(konum==8){
                            document.getElementById("kitapIcerik8").innerHTML = kitap9.resim + "<br>" + "Kitap Adi: " + kitap9.isim + "<br>" + "Yazar: " + kitap9.yazar + "<br>" + "Fiyat: " + kitap9.fiyat + " USD" + "<br>" + "ID: " + kitap9.id + "<br>";
                                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                        }
                        else if(konum==9){
                            document.getElementById("kitapIcerik9").innerHTML  = kitap9.resim + "<br>" + "Kitap Adi: " + kitap9.isim + "<br>" + "Yazar: " + kitap9.yazar + "<br>" + "Fiyat: " + kitap9.fiyat + " USD" + "<br>" + "ID: " + kitap9.id + "<br>";
                                document.getElementById("sepetMiktar").innerText = sepetMiktar;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
        document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                        }

                            
                            }


                        function sepetiTemizle(){
                            
                            sepetMiktar=0;
                            toplamAdet=0;
                            carpan=1;
                            toplamTutar=0;
                            konum = 0;

                            bireyselKitapAdet = 0;
                            ikinciKitapAdet = 0 ;
                            ucuncuKitapAdet = 0;
                            dorduncuKitapAdet=0;
                            besinciKitapAdet=0;
                            altinciKitapAdet=0;
                            yedinciKitapAdet=0;
                            sekizinciKitapAdet=0;
                            dokuzuncuKitapAdet=0;

                            document.getElementById("sepetMiktar").innerText = "";
                            document.getElementById("toplamAdet").innerHTML = "";
                            document.getElementById("toplamTutar").innerHTML = "" //toplamTutar*carpan + " USD";

                            document.getElementById("kitapIcerik").innerHTML = "Sepetinizde urun bulunmamaktadir"
                            document.getElementById("kitapIcerik2").innerHTML ="";
                            document.getElementById("kitapIcerik3").innerHTML ="";
                            document.getElementById("kitapIcerik4").innerHTML ="";
                            document.getElementById("kitapIcerik5").innerHTML ="";
                            document.getElementById("kitapIcerik6").innerHTML ="";
                            document.getElementById("kitapIcerik7").innerHTML ="";
                            document.getElementById("kitapIcerik8").innerHTML ="";
                            document.getElementById("kitapIcerik9").innerHTML ="";

                            document.getElementById("kitapAdet").innerHTML = "";
                            document.getElementById("kitapAdet2").innerHTML = "";
                            document.getElementById("kitapAdet3").innerHTML = "";
                            document.getElementById("kitapAdet4").innerHTML = "";
                            document.getElementById("kitapAdet5").innerHTML = "";
                            document.getElementById("kitapAdet6").innerHTML = "";
                            document.getElementById("kitapAdet7").innerHTML = "";
                            document.getElementById("kitapAdet8").innerHTML = "";
                            document.getElementById("kitapAdet9").innerHTML = "";










                               
                            alert("Sepetiniz temizlenmistir");
                        }

                        /* function kitapArttir() {
                            
                            toplamAdet++;
                            sepetMiktar++;
                            carpan++;
                            bireyselKitapAdet++;
                            
                             document.getElementById("sepetMiktar").innerText = sepetMiktar;
                             document.getElementById("kitapAdet").innerHTML = "Adet: "+ bireyselKitapAdet;
                             document.getElementById("kitapAdet2").innerHTML = "Adet: " + bireyselKitapAdet;
                             document.getElementById("kitapAdet3").innerHTML = "Adet: " + bireyselKitapAdet;
                             document.getElementById("kitapAdet4").innerHTML = "Adet: " + bireyselKitapAdet;
                             document.getElementById("kitapAdet5").innerHTML = "Adet: " + bireyselKitapAdet;
                             document.getElementById("kitapAdet6").innerHTML = "Adet: " + bireyselKitapAdet;
                             document.getElementById("kitapAdet7").innerHTML = "Adet: " + bireyselKitapAdet;
                             document.getElementById("kitapAdet8").innerHTML = "Adet: " + bireyselKitapAdet;
                             document.getElementById("kitapAdet9").innerHTML = "Adet: " + bireyselKitapAdet;

                             document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet; 
                             document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar * carpan + " USD";
                            
                        } */

                        /* function kitapAzalt(){

                            sepetMiktar--;
                            toplamAdet--;
                            carpan--;
                            bireyselKitapAdet--;

                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("kitapAdet").innerHTML = "Adet: "+ bireyselKitapAdet;
                            document.getElementById("kitapAdet2").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("kitapAdet3").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("kitapAdet4").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("kitapAdet5").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("kitapAdet6").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("kitapAdet7").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("kitapAdet8").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("kitapAdet9").innerHTML = "Adet: " + bireyselKitapAdet;

                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar*carpan + " USD";


                             if(toplamAdet < 1){

                            sepetMiktar=0;
                            toplamAdet=0;
                            carpan=1;
                            toplamTutar=0;

                            document.getElementById("sepetMiktar").innerText = "";
                            document.getElementById("toplamAdet").innerHTML = "";
                            document.getElementById("toplamTutar").innerHTML = toplamTutar*carpan + " USD";
                            document.getElementById("kitapIcerik").innerHTML = "Sepetinizde urun bulunmamaktadir";
                            document.getElementById("kitapIcerik2").innerHTML = "";
                            document.getElementById("kitapIcerik3").innerHTML = "";
                            document.getElementById("kitapIcerik4").innerHTML = "";
                            document.getElementById("kitapIcerik5").innerHTML = "";
                            document.getElementById("kitapIcerik6").innerHTML = "";
                            document.getElementById("kitapIcerik7").innerHTML = "";
                            document.getElementById("kitapIcerik8").innerHTML = "";
                            document.getElementById("kitapIcerik9").innerHTML = "";

                            } 

                        } */

                            //HER KITABA AIT OLAN KALDIR BUTONUNUN DA 9 FARKLI KALDIR FONKSIYONU OLACAK

                        /* function kitapKaldir(){
                            
                            sepetMiktar=0;
                            toplamAdet=0;
                            toplamTutar=0;
                            carpan=1;
                            
                            document.getElementById("kitapIcerik").innerHTML = "";
                            document.getElementById("toplamAdet").innerHTML = "";
                            document.getElementById("toplamTutar").innerHTML = "";
                            document.getElementById("sepetMiktar").innerHTML = "";
                        } */

                        function ilkKitapKalksin(){

                            carpan=1; 

                            document.getElementById("kitapIcerik").innerHTML = "";
                            document.getElementById("kitapAdet").innerHTML = "";

                            if(konum == 1 && ID == 1){
                                toplamTutar = toplamTutar - kitap1.fiyat * bireyselKitapAdet;
                                toplamAdet -= bireyselKitapAdet;
                                sepetMiktar -= bireyselKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }
                            else if(konum == 1 && ID == 2){
                                toplamTutar = toplamTutar - kitap2.fiyat * ikinciKitapAdet;
                                toplamAdet -=ikinciKitapAdet;
                                sepetMiktar -= ikinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 1 && ID == 3){
                                toplamTutar = toplamTutar - kitap3.fiyat * ucuncuKitapAdet;
                                toplamAdet -=  ucuncuKitapAdet;
                                sepetMiktar -=  ucuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 1 && ID == 4){
                                toplamTutar = toplamTutar - kitap4.fiyat * dorduncuKitapAdet;
                                toplamAdet -= dorduncuKitapAdet;
                                sepetMiktar -=  dorduncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 1 && ID == 5){
                                toplamTutar = toplamTutar - kitap5.fiyat * besinciKitapAdet;
                                toplamAdet -= besinciKitapAdet;
                                sepetMiktar -= besinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 1 && ID == 6){
                                toplamTutar = toplamTutar - kitap6.fiyat * altinciKitapAdet;
                                toplamAdet -= altinciKitapAdet;
                                sepetMiktar -= altinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 1 && ID == 7){
                                toplamTutar = toplamTutar - kitap7.fiyat * yedinciKitapAdet;
                                toplamAdet -= yedinciKitapAdet;
                                sepetMiktar -= yedinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 1 && ID == 8){
                                toplamTutar = toplamTutar - kitap8.fiyat * sekizinciKitapAdet;
                                toplamAdet -=  sekizinciKitapAdet;
                                sepetMiktar -=  sekizinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 1 && ID == 9){
                                toplamTutar = toplamTutar - kitap9.fiyat * dokuzuncuKitapAdet;
                                toplamAdet -= dokuzuncuKitapAdet;
                                sepetMiktar -=  dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                        }

                        function ikinciKitapKalksin(){

                            carpan=1;
                         
                            document.getElementById("kitapIcerik2").innerHTML = "";
                            document.getElementById("kitapAdet2").innerHTML = "";

                            if(konum == 2 && ID == 1){
                                toplamTutar = toplamTutar - kitap1.fiyat * bireyselKitapAdet;
                                toplamAdet-=bireyselKitapAdet;
                                sepetMiktar-=bireyselKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }
                            else if(konum == 2 && ID == 2){
                                toplamTutar = toplamTutar - kitap2.fiyat * ikinciKitapAdet;
                                toplamAdet -= ikinciKitapAdet;
                                sepetMiktar -=  ikinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 2 && ID == 3){
                                toplamTutar = toplamTutar - kitap3.fiyat * ucuncuKitapAdet;
                                toplamAdet -= ucuncuKitapAdet;
                                sepetMiktar -=  ucuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 2 && ID == 4){
                                toplamTutar = toplamTutar - kitap4.fiyat * dorduncuKitapAdet;
                                toplamAdet -=  dorduncuKitapAdet;
                                sepetMiktar -=  dorduncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 2 && ID == 5){
                                toplamTutar = toplamTutar - kitap5.fiyat * besinciKitapAdet;
                                toplamAdet -= besinciKitapAdet;
                                sepetMiktar -= besinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 2 && ID == 6){
                                toplamTutar = toplamTutar - kitap6.fiyat * altinciKitapAdet;
                                toplamAdet -= altinciKitapAdet;
                                sepetMiktar -= altinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 2 && ID == 7){
                                toplamTutar = toplamTutar - kitap7.fiyat * yedinciKitapAdet;
                                toplamAdet -= yedinciKitapAdet;
                                sepetMiktar -= yedinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 2 && ID == 8){
                                toplamTutar = toplamTutar - kitap8.fiyat * sekizinciKitapAdet;
                                toplamAdet -= sekizinciKitapAdet;
                                sepetMiktar -= sekizinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 2 && ID == 9){
                                toplamTutar = toplamTutar - kitap9.fiyat * dokuzuncuKitapAdet;
                                toplamAdet -= dokuzuncuKitapAdet;
                                sepetMiktar -= dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                        }
                        
                        function ucuncuKitapKalksin(){

                            carpan=1;
                            
                            document.getElementById("kitapIcerik3").innerHTML = "";
                            document.getElementById("kitapAdet3").innerHTML = "";

                            if(konum == 3 && ID == 1){
                                toplamTutar = toplamTutar - kitap1.fiyat * bireyselKitapAdet;
                                toplamAdet -= bireyselKitapAdet;
                                sepetMiktar -= bireyselKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }
                            else if(konum == 3 && ID == 2){
                                toplamTutar = toplamTutar - kitap2.fiyat * ikinciKitapAdet;
                                toplamAdet -= ikinciKitapAdet;
                                sepetMiktar -= ikinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 3 && ID == 3){
                                toplamTutar = toplamTutar - kitap3.fiyat * ucuncuKitapAdet;
                                toplamAdet -= ucuncuKitapAdet;
                                sepetMiktar -= ucuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 3 && ID == 4){
                                toplamTutar = toplamTutar - kitap4.fiyat * dorduncuKitapAdet;
                                toplamAdet -= dorduncuKitapAdet;
                                sepetMiktar -= dorduncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 3 && ID == 5){
                                toplamTutar = toplamTutar - kitap5.fiyat * besinciKitapAdet;
                                toplamAdet -= besinciKitapAdet;
                                sepetMiktar -= besinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 3 && ID == 6){
                                toplamTutar = toplamTutar - kitap6.fiyat * altinciKitapAdet;
                                toplamAdet -=  altinciKitapAdet;
                                sepetMiktar -=  altinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 3 && ID == 7){
                                toplamTutar = toplamTutar - kitap7.fiyat * yedinciKitapAdet;
                                toplamAdet -=  yedinciKitapAdet;
                                sepetMiktar -=  yedinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 3 && ID == 8){
                                toplamTutar = toplamTutar - kitap8.fiyat * sekizinciKitapAdet;
                                toplamAdet -=  sekizinciKitapAdet;
                                sepetMiktar -= sekizinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 3 && ID == 9){
                                toplamTutar = toplamTutar - kitap9.fiyat * dokuzuncuKitapAdet;
                                toplamAdet -= dokuzuncuKitapAdet;
                                sepetMiktar -=  dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                        }

                        function dorduncuKitapKalksin(){

                            carpan=1;
                            
                            
                            document.getElementById("kitapIcerik4").innerHTML = "";
                            
                            document.getElementById("kitapAdet4").innerHTML = "";

                            if(konum == 4 && ID == 1){
                                toplamTutar = toplamTutar - kitap1.fiyat * bireyselKitapAdet;
                                toplamAdet -= bireyselKitapAdet;
                                sepetMiktar -=  bireyselKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }
                            else if(konum == 4 && ID == 2){
                                toplamTutar = toplamTutar - kitap2.fiyat * ikinciKitapAdet;
                                toplamAdet -=  ikinciKitapAdet;
                                sepetMiktar -=  ikinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 4 && ID == 3){
                                toplamTutar = toplamTutar - kitap3.fiyat * ucuncuKitapAdet;
                                toplamAdet -=  ucuncuKitapAdet;
                                sepetMiktar -= ucuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 4 && ID == 4){
                                toplamTutar = toplamTutar - kitap4.fiyat * dorduncuKitapAdet;
                                toplamAdet -=  dorduncuKitapAdet;
                                sepetMiktar -=  dorduncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 4 && ID == 5){
                                toplamTutar = toplamTutar - kitap5.fiyat * besinciKitapAdet;
                                toplamAdet -=  besinciKitapAdet;
                                sepetMiktar -=  besinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 4 && ID == 6){
                                toplamTutar = toplamTutar - kitap6.fiyat * altinciKitapAdet;
                                toplamAdet -= altinciKitapAdet;
                                sepetMiktar -=  altinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 4 && ID == 7){
                                toplamTutar = toplamTutar - kitap7.fiyat * yedinciKitapAdet;
                                toplamAdet -=  yedinciKitapAdet;
                                sepetMiktar -=  yedinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 4 && ID == 8){
                                toplamTutar = toplamTutar - kitap8.fiyat * sekizinciKitapAdet;
                                toplamAdet -=  sekizinciKitapAdet;
                                sepetMiktar -= sekizinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 4 && ID == 9){
                                toplamTutar = toplamTutar - kitap9.fiyat * dokuzuncuKitapAdet;
                                toplamAdet -= dokuzuncuKitapAdet;
                                sepetMiktar -= dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                        }

                        function besinciKitapKalksin(){

                            
                            carpan=1;
                           
                            
                            document.getElementById("kitapIcerik5").innerHTML = "";
                            
                            document.getElementById("kitapAdet5").innerHTML = "";

                            if(konum == 5 && ID == 1){
                                toplamTutar = toplamTutar - kitap1.fiyat * bireyselKitapAdet;
                                toplamAdet -=  bireyselKitapAdet;
                                sepetMiktar -= bireyselKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }
                            else if(konum == 5 && ID == 2){
                                toplamTutar = toplamTutar - kitap2.fiyat * ikinciKitapAdet;
                                toplamAdet -= ikinciKitapAdet;
                                sepetMiktar -=  ikinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 5 && ID == 3){
                                toplamTutar = toplamTutar - kitap3.fiyat * ucuncuKitapAdet;
                                toplamAdet -=  ucuncuKitapAdet;
                                sepetMiktar -=  ucuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 5 && ID == 4){
                                toplamTutar = toplamTutar - kitap4.fiyat * dorduncuKitapAdet;
                                toplamAdet -=  dorduncuKitapAdet;
                                sepetMiktar -=  dorduncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 5 && ID == 5){
                                toplamTutar = toplamTutar - kitap5.fiyat * besinciKitapAdet;
                                toplamAdet -=  besinciKitapAdet;
                                sepetMiktar -=  besinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 5 && ID == 6){
                                toplamTutar = toplamTutar - kitap6.fiyat * altinciKitapAdet;
                                toplamAdet -= altinciKitapAdet;
                                sepetMiktar -= altinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 5 && ID == 7){
                                toplamTutar = toplamTutar - kitap7.fiyat * yedinciKitapAdet;
                                toplamAdet -=  yedinciKitapAdet;
                                sepetMiktar -=  yedinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 5 && ID == 8){
                                toplamTutar = toplamTutar - kitap8.fiyat * sekizinciKitapAdet;
                                toplamAdet -= sekizinciKitapAdet;
                                sepetMiktar -= sekizinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 5 && ID == 9){
                                toplamTutar = toplamTutar - kitap9.fiyat * dokuzuncuKitapAdet;
                                toplamAdet -= dokuzuncuKitapAdet;
                                sepetMiktar -=  dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                        }

                        function altinciKitapKalksin(){

                            carpan=1;
                           
                            
                            document.getElementById("kitapIcerik6").innerHTML = "";
                            
                            document.getElementById("kitapAdet6").innerHTML = "";

                            if(konum == 6 && ID == 1){
                                toplamTutar = toplamTutar - kitap1.fiyat * bireyselKitapAdet;
                                toplamAdet -= bireyselKitapAdet;
                                sepetMiktar -=  bireyselKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }
                            else if(konum == 6 && ID == 2){
                                toplamTutar = toplamTutar - kitap2.fiyat * ikinciKitapAdet;
                                toplamAdet -=  ikinciKitapAdet;
                                sepetMiktar -=  ikinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 6 && ID == 3){
                                toplamTutar = toplamTutar - kitap3.fiyat * ucuncuKitapAdet;
                                toplamAdet -=  ucuncuKitapAdet;
                                sepetMiktar -=  ucuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 6 && ID == 4){
                                toplamTutar = toplamTutar - kitap4.fiyat * dorduncuKitapAdet;
                                toplamAdet -= dorduncuKitapAdet;
                                sepetMiktar -=  dorduncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 6 && ID == 5){
                                toplamTutar = toplamTutar - kitap5.fiyat * besinciKitapAdet;
                                toplamAdet -=  besinciKitapAdet;
                                sepetMiktar -= besinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 6 && ID == 6){
                                toplamTutar = toplamTutar - kitap6.fiyat * altinciKitapAdet;
                                toplamAdet -=  altinciKitapAdet;
                                sepetMiktar -=  altinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 6 && ID == 7){
                                toplamTutar = toplamTutar - kitap7.fiyat * yedinciKitapAdet;
                                toplamAdet -=  yedinciKitapAdet;
                                sepetMiktar -= yedinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 6 && ID == 8){
                                toplamTutar = toplamTutar - kitap8.fiyat * sekizinciKitapAdet;
                                toplamAdet -=  sekizinciKitapAdet;
                                sepetMiktar -=  sekizinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 6 && ID == 9){
                                toplamTutar = toplamTutar - kitap9.fiyat * dokuzuncuKitapAdet;
                                toplamAdet -=  dokuzuncuKitapAdet;
                                sepetMiktar -=  dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                        }

                        function yedinciKitapKalksin(){

                            carpan=1;
                           
                            
                            document.getElementById("kitapIcerik7").innerHTML = "";
                            
                            document.getElementById("kitapAdet7").innerHTML = "";

                            if(konum == 7 && ID == 1){
                                toplamTutar = toplamTutar - kitap1.fiyat * bireyselKitapAdet;
                                toplamAdet -= bireyselKitapAdet;
                                sepetMiktar -= bireyselKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }
                            else if(konum == 7 && ID == 2){
                                toplamTutar = toplamTutar - kitap2.fiyat * ikinciKitapAdet;
                                toplamAdet -=  ikinciKitapAdet;
                                sepetMiktar -=  ikinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 7 && ID == 3){
                                toplamTutar = toplamTutar - kitap3.fiyat * ucuncuKitapAdet;
                                toplamAdet -=  ucuncuKitapAdet;
                                sepetMiktar -=  ucuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 7 && ID == 4){
                                toplamTutar = toplamTutar - kitap4.fiyat * dorduncuKitapAdet;
                                toplamAdet -=  dorduncuKitapAdet;
                                sepetMiktar -=  dorduncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 7 && ID == 5){
                                toplamTutar = toplamTutar - kitap5.fiyat * besinciKitapAdet;
                                toplamAdet -= besinciKitapAdet;
                                sepetMiktar -= besinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 7 && ID == 6){
                                toplamTutar = toplamTutar - kitap6.fiyat * altinciKitapAdet;
                                toplamAdet -= altinciKitapAdet;
                                sepetMiktar -= altinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 7 && ID == 7){
                                toplamTutar = toplamTutar - kitap7.fiyat * yedinciKitapAdet;
                                toplamAdet -=  yedinciKitapAdet;
                                sepetMiktar -=  yedinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 7 && ID == 8){
                                toplamTutar = toplamTutar - kitap8.fiyat * sekizinciKitapAdet;
                                toplamAdet -=  sekizinciKitapAdet;
                                sepetMiktar -= sekizinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 7 && ID == 9){
                                toplamTutar = toplamTutar - kitap9.fiyat * dokuzuncuKitapAdet;
                                toplamAdet -= dokuzuncuKitapAdet;
                                sepetMiktar -= dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                        }

                        function sekizinciKitapKalksin(){

                            carpan=1;
                           
                            
                            document.getElementById("kitapIcerik8").innerHTML = "";
                            
                            document.getElementById("kitapAdet8").innerHTML = "";

                            if(konum == 8 && ID == 1){
                                toplamTutar = toplamTutar - kitap1.fiyat * bireyselKitapAdet;
                                toplamAdet -=  bireyselKitapAdet;
                                sepetMiktar -=bireyselKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }
                            else if(konum == 8 && ID == 2){
                                toplamTutar = toplamTutar - kitap2.fiyat * ikinciKitapAdet;
                                toplamAdet -= ikinciKitapAdet;
                                sepetMiktar -= ikinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 8 && ID == 3){
                                toplamTutar = toplamTutar - kitap3.fiyat * ucuncuKitapAdet;
                                toplamAdet -= ucuncuKitapAdet;
                                sepetMiktar -=  ucuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 8 && ID == 4){
                                toplamTutar = toplamTutar - kitap4.fiyat * dorduncuKitapAdet;
                                toplamAdet -=  dorduncuKitapAdet;
                                sepetMiktar -=  dorduncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 8 && ID == 5){
                                toplamTutar = toplamTutar - kitap5.fiyat * besinciKitapAdet;
                                toplamAdet -=  besinciKitapAdet;
                                sepetMiktar -=  besinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 8 && ID == 6){
                                toplamTutar = toplamTutar - kitap6.fiyat * altinciKitapAdet;
                                toplamAdet -=  altinciKitapAdet;
                                sepetMiktar -=  altinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 8 && ID == 7){
                                toplamTutar = toplamTutar - kitap7.fiyat * yedinciKitapAdet;
                                toplamAdet -=  yedinciKitapAdet;
                                sepetMiktar -=  yedinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 8 && ID == 8){
                                toplamTutar = toplamTutar - kitap8.fiyat * sekizinciKitapAdet;
                                toplamAdet -=  sekizinciKitapAdet;
                                sepetMiktar -=  sekizinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 8 && ID == 9){
                                toplamTutar = toplamTutar - kitap9.fiyat * dokuzuncuKitapAdet;
                                toplamAdet -= dokuzuncuKitapAdet;
                                sepetMiktar -= dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                        }

                        function dokuzuncuKitapKalksin(){

                            carpan=1;
                            
                          
                            
                            document.getElementById("kitapIcerik9").innerHTML = "";
                            
                            document.getElementById("kitapAdet9").innerHTML = "";

                            if(konum == 9 && ID == 1){
                                toplamTutar = toplamTutar - kitap1.fiyat * bireyselKitapAdet;
                                toplamAdet -=  bireyselKitapAdet;
                                sepetMiktar -=  bireyselKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }
                            else if(konum == 9 && ID == 2){
                                toplamTutar = toplamTutar - kitap2.fiyat * ikinciKitapAdet;
                                toplamAdet -=  ikinciKitapAdet;
                                sepetMiktar -= ikinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 9 && ID == 3){
                                toplamTutar = toplamTutar - kitap3.fiyat * ucuncuKitapAdet;
                                toplamAdet -=  ucuncuKitapAdet;
                                sepetMiktar -=  ucuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 9 && ID == 4){
                                toplamTutar = toplamTutar - kitap4.fiyat * dorduncuKitapAdet;
                                toplamAdet -=  dorduncuKitapAdet;
                                sepetMiktar -=  dorduncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 9 && ID == 5){
                                toplamTutar = toplamTutar - kitap5.fiyat * besinciKitapAdet;
                                toplamAdet -=  besinciKitapAdet;
                                sepetMiktar -= besinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 9 && ID == 6){
                                toplamTutar = toplamTutar - kitap6.fiyat * altinciKitapAdet;
                                toplamAdet -=  altinciKitapAdet;
                                sepetMiktar -= altinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 9 && ID == 7){
                                toplamTutar = toplamTutar - kitap7.fiyat * yedinciKitapAdet;
                                toplamAdet -=  yedinciKitapAdet;
                                sepetMiktar -= yedinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 9 && ID == 8){
                                toplamTutar = toplamTutar - kitap8.fiyat * sekizinciKitapAdet;
                                toplamAdet -= sekizinciKitapAdet;
                                sepetMiktar -= sekizinciKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                            else if(konum == 9 && ID == 9){
                                toplamTutar = toplamTutar - kitap9.fiyat * dokuzuncuKitapAdet;
                                toplamAdet -=  dokuzuncuKitapAdet;
                                sepetMiktar -=  dokuzuncuKitapAdet;

                                document.getElementById("toplamAdet").innerHTML = toplamAdet;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar;
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            }

                        }

                        // BURADA HER KITAP ICIN KOYDUGUM AYRI BUTONLARIN HER BIRININ ARTTIRMA VE AZALTMA BUTONU OLACAK


                        function ilkKitapAzalsin(){
                            
                            sepetMiktar--;
                            toplamAdet--;
                                carpan--;
                                    bireyselKitapAdet--;
    
                                if(konum==1 && ID==1){
                                    toplamTutar-=kitap1.fiyat;

                                    document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                                    document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                                }
                                else if(konum==1 && ID==2){
                                    toplamTutar-=kitap2.fiyat;   

                                    document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                                    document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                                }
                                else if(konum == 1 && ID == 3){
                                    toplamTutar-=kitap3.fiyat;

                                    document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                                    document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                                }
                                else if(konum == 1 && ID == 4){
                                    toplamTutar-=kitap4.fiyat;

                                    document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                                    document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                                }
                                else if(konum == 1 && ID == 5){
                                    toplamTutar-=kitap5.fiyat;
                                    
                                    document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                                    document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                                }
                                else if(konum==1&&ID==6){
                                    toplamTutar-=kitap6.fiyat;
                                    document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                                }
                                else if(konum == 1 && ID == 7){
                                    toplamTutar-=kitap7.fiyat;
                                    document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                                }
                                else if(konum == 1 && ID==8){
                                    toplamTutar-=kitap8.fiyat;
                                    document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                                }
                                else {
                                    toplamTutar-=kitap9.fiyat;
                                    document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                                document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                                }
                                
                                document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                                document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;

                            if(toplamAdet < 1){

                                sepetMiktar=0;
                                toplamAdet=0;
                               carpan=1;
                                toplamTutar=0;
                                konum=0;
                                bireyselKitapAdet=0;
    
                                document.getElementById("sepetMiktar").innerText = "";
                                document.getElementById("toplamAdet").innerHTML = "";
                                document.getElementById("toplamTutar").innerHTML = "";
                                document.getElementById("kitapIcerik").innerHTML = "Sepetinizde urun bulunmamaktadir";
                        
                                document.getElementById("kitapAdet").innerHTML = "";
                               
                                } 
                            
                        }

                        function ilkKitapArtsin(){
                            sepetMiktar++;
                            toplamAdet++;
                            carpan++;
                            bireyselKitapAdet++;

                            if(konum==1 && ID==1){
                                toplamTutar+=kitap1.fiyat;
                                document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==1 && ID==2){
                                toplamTutar+=kitap2.fiyat;
                            
                                document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 1 && ID == 3){
                                toplamTutar+=kitap3.fiyat;
                                document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 1 && ID == 4){
                                toplamTutar+=kitap4.fiyat;
                                document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 1 && ID == 5){
                                toplamTutar+=kitap5.fiyat;
                                document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==1&&ID==6){
                                toplamTutar+=kitap6.fiyat;
                                document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 1 && ID == 7){
                                toplamTutar+=kitap7.fiyat;
                                document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 1 && ID==8){
                                toplamTutar+=kitap8.fiyat;
                                document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else {
                                toplamTutar+=kitap9.fiyat;
                                document.getElementById("kitapAdet").innerHTML = "Adet: " + bireyselKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            
                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;

                            
                        }

                        // IKINCI KITABA AIT BUTONLARIN ARTTIRMA VE AZALTMA BUTONLARI

                        function ikinciKitapAzalsin(){
                            sepetMiktar--;
                            toplamAdet--;
                            carpan--;
                            ikinciKitapAdet--;


                            if(konum==2 && ID==1){
                                toplamTutar-=kitap1.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==2 && ID==2){
                                toplamTutar-=kitap2.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID == 3){
                                toplamTutar-=kitap3.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID == 4){
                                toplamTutar-=kitap4.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID == 5){
                                toplamTutar-=kitap5.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==2&&ID==6){
                                toplamTutar-=kitap6.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID == 7){
                                toplamTutar-=kitap7.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID==8){
                                toplamTutar-=kitap8.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID == 9){
                                toplamTutar-=kitap9.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;

                            if(toplamAdet < 1){

                                sepetMiktar=0;
                                toplamAdet=0;
                                carpan=1;
                                toplamTutar=0;
                                konum=0;
                                ikinciKitapAdet=0;
    
                                document.getElementById("sepetMiktar").innerText = "";
                                document.getElementById("toplamAdet").innerHTML = "";
                                document.getElementById("toplamTutar").innerHTML = "";
                                document.getElementById("kitapIcerik2").innerHTML = "";
                                document.getElementById("kitapAdet2").innerHTML = "";
                               
                                } 
                        }

                        function ikinciKitapArtsin(){
                            sepetMiktar++;
                            toplamAdet++;
                            carpan++;
                            ikinciKitapAdet++;


                            if(konum==2 && ID==1){
                                toplamTutar+=kitap1.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==2 && ID==2){
                                toplamTutar+=kitap2.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID == 3){
                                toplamTutar+=kitap3.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID == 4){
                                toplamTutar+=kitap4.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID == 5){
                                toplamTutar+=kitap5.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==2&&ID==6){
                                toplamTutar+=kitap6.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID == 7){
                                toplamTutar+=kitap7.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID==8){
                                toplamTutar+=kitap8.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 2 && ID == 9){
                                toplamTutar+=kitap9.fiyat;
                                document.getElementById("kitapAdet2").innerHTML = "Adet: " + ikinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;

                            
                        }

                        // Ucuncu KITABA AIT BUTONLARIN ARTTIRMA VE AZALTMA BUTONLARI

                        function ucuncuKitapAzalsin(){
                            sepetMiktar--;
                            toplamAdet--;
                            carpan--;
                            ucuncuKitapAdet--;

                            if(konum==3 && ID==1){
                                toplamTutar-=kitap1.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==3 && ID==2){
                                toplamTutar-=kitap2.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID == 3){
                                toplamTutar-=kitap3.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID == 4){
                                toplamTutar-=kitap4.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID == 5){
                                toplamTutar-=kitap5.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==3&&ID==6){
                                toplamTutar-=kitap6.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID == 7){
                                toplamTutar-=kitap7.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID==8){
                                toplamTutar-=kitap8.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID == 9){
                                toplamTutar-=kitap9.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                            

                            if(toplamAdet < 1){

                                sepetMiktar=0;
                                toplamAdet=0;
                                carpan=1;
                                toplamTutar=0;
                                konum=0;
                                ucuncuKitapAdet=0;
    
                                document.getElementById("sepetMiktar").innerText = "";
                                document.getElementById("toplamAdet").innerHTML = "";
                                document.getElementById("toplamTutar").innerHTML = "";
                                document.getElementById("kitapIcerik3").innerHTML = "";
                                document.getElementById("kitapAdet3").innerHTML = "";
                               
                                } 
                        }

                        function ucuncuKitapArtsin(){
                            sepetMiktar++;
                            toplamAdet++;
                            ucuncuKitapAdet++;
                            carpan++;

                            if(konum==3 && ID==1){
                                toplamTutar+=kitap1.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==3 && ID==2){
                                toplamTutar+=kitap2.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID == 3){
                                toplamTutar+=kitap3.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID == 4){
                                toplamTutar+=kitap4.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID == 5){
                                toplamTutar+=kitap5.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==3&&ID==6){
                                toplamTutar+=kitap6.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID == 7){
                                toplamTutar+=kitap7.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID==8){
                                toplamTutar+=kitap8.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 3 && ID == 9){
                                toplamTutar+=kitap9.fiyat;
                                document.getElementById("kitapAdet3").innerHTML = "Adet: " + ucuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                            
                    
                        }

                        // Dorduncu KITABA AIT BUTONLARIN ARTTIRMA VE AZALTMA BUTONLARI
                        
                        function dorduncuKitapAzalsin(){
                            sepetMiktar--;
                            toplamAdet--;
                            carpan--;
                            dorduncuKitapAdet--;

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;

                            if(konum==4 && ID==1){
                                toplamTutar-=kitap1.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==4 && ID==2){
                                toplamTutar-=kitap2.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID == 3){
                                toplamTutar-=kitap3.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID == 4){
                                toplamTutar-=kitap4.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID == 5){
                                toplamTutar-=kitap5.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==4&&ID==6){
                                toplamTutar-=kitap6.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID == 7){
                                toplamTutar-=kitap7.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID==8){
                                toplamTutar-=kitap8.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID == 9){
                                toplamTutar-=kitap9.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;

                            if(toplamAdet < 1){

                                sepetMiktar=0;
                                toplamAdet=0;
                                carpan=1;
                                toplamTutar=0;
                                konum=0;
                                dorduncuKitapAdet=0;
    
                                document.getElementById("sepetMiktar").innerText = "";
                                document.getElementById("toplamAdet").innerHTML = "";
                                document.getElementById("toplamTutar").innerHTML = "";
                                document.getElementById("kitapIcerik4").innerHTML = "";
                                document.getElementById("kitapAdet4").innerHTML = "";
                               
                                } 
                        }

                        function dorduncuKitapArtsin(){
                        
                            sepetMiktar++;
                            toplamAdet++;
                            dorduncuKitapAdet++;
                            carpan++;

                            if(konum==4 && ID==1){
                                toplamTutar+=kitap1.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==4 && ID==2){
                                toplamTutar+=kitap2.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID == 3){
                                toplamTutar+=kitap3.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID == 4){
                                toplamTutar+=kitap4.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID == 5){
                                toplamTutar+=kitap5.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==4&&ID==6){
                                toplamTutar+=kitap6.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID == 7){
                                toplamTutar+=kitap7.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID==8){
                                toplamTutar+=kitap8.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 4 && ID == 9){
                                toplamTutar+=kitap9.fiyat;
                                document.getElementById("kitapAdet4").innerHTML = "Adet: " + dorduncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                            
                        }

                        // BESINCI KITABA AIT BUTONLARIN ARTTIRMA VE AZALTMA BUTONLARI
                        
                        function besinciKitapAzalsin(){
                            sepetMiktar--;
                            toplamAdet--;
                            carpan--;
                            besinciKitapAdet--;

                            if(konum==5 && ID==1){
                                toplamTutar-=kitap1.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==5 && ID==2){
                                toplamTutar-=kitap2.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID == 3){
                                toplamTutar-=kitap3.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID == 4){
                                toplamTutar-=kitap4.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID == 5){
                                toplamTutar-=kitap5.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==5&&ID==6){
                                toplamTutar-=kitap6.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID == 7){
                                toplamTutar-=kitap7.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID==8){
                                toplamTutar-=kitap8.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID == 9){
                                toplamTutar-=kitap9.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;


                            if(toplamAdet < 1){

                                sepetMiktar=0;
                                toplamAdet=0;
                                carpan=1;
                                toplamTutar=0;
                                konum=0;
                                besinciKitapAdet=0;
    
                                document.getElementById("sepetMiktar").innerText = "";
                                document.getElementById("toplamAdet").innerHTML = "";
                                document.getElementById("toplamTutar").innerHTML = "";
                                document.getElementById("kitapIcerik5").innerHTML = "";
                                document.getElementById("kitapAdet5").innerHTML = "";
                               
                                } 
                        }

                        function besinciKitapArtsin(){
                            sepetMiktar++;
                            toplamAdet++;
                            besinciKitapAdet++;
                            carpan++;

                            if(konum==5 && ID==1){
                                toplamTutar+=kitap1.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==5 && ID==2){
                                toplamTutar+=kitap2.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID == 3){
                                toplamTutar+=kitap3.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID == 4){
                                toplamTutar+=kitap4.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID == 5){
                                toplamTutar+=kitap5.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==5&&ID==6){
                                toplamTutar+=kitap6.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID == 7){
                                toplamTutar+=kitap7.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID==8){
                                toplamTutar+=kitap8.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 5 && ID == 9){
                                toplamTutar+=kitap9.fiyat;
                                document.getElementById("kitapAdet5").innerHTML = "Adet: " + besinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                            
                        }


                        // ALTINCI KITABA AIT BUTONLARIN ARTTIRMA VE AZALTMA BUTONLARI

                        function altinciKitapAzalsin(){
                            sepetMiktar--;
                            toplamAdet--;
                            carpan--;
                            altinciKitapAdet--;

                            if(konum==6 && ID==1){
                                toplamTutar-=kitap1.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==6 && ID==2){
                                toplamTutar-=kitap2.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID == 3){
                                toplamTutar-=kitap3.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID == 4){
                                toplamTutar-=kitap4.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID == 5){
                                toplamTutar-=kitap5.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==6&&ID==6){
                                toplamTutar-=kitap6.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID == 7){
                                toplamTutar-=kitap7.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID==8){
                                toplamTutar-=kitap8.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID == 9){
                                toplamTutar-=kitap9.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;

                            if(toplamAdet < 1){

                                sepetMiktar=0;
                                toplamAdet=0;
                                carpan=1;
                                toplamTutar=0;
                                konum=0;
                                altinciKitapAdet=0;
    
                                document.getElementById("sepetMiktar").innerText = "";
                                document.getElementById("toplamAdet").innerHTML = "";
                                document.getElementById("toplamTutar").innerHTML = "";
                                document.getElementById("kitapIcerik6").innerHTML = "";
                                document.getElementById("kitapAdet6").innerHTML = "";
                               
                                } 
                        }

                        function altinciKitapArtsin(){
                            sepetMiktar++;
                            toplamAdet++;
                            altinciKitapAdet++;
                            carpan++;

                            if(konum==6 && ID==1){
                                toplamTutar+=kitap1.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==6 && ID==2){
                                toplamTutar+=kitap2.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID == 3){
                                toplamTutar+=kitap3.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID == 4){
                                toplamTutar+=kitap4.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID == 5){
                                toplamTutar+=kitap5.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==6&&ID==6){
                                toplamTutar+=kitap6.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID == 7){
                                toplamTutar+=kitap7.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID==8){
                                toplamTutar+=kitap8.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 6 && ID == 9){
                                toplamTutar+=kitap9.fiyat;
                                document.getElementById("kitapAdet6").innerHTML = "Adet: " + altinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                        }


                        // YEDINCI KITABA AIT BUTONLARIN ARTTIRMA VE AZALTMA BUTONLARI

                        function yedinciKitapAzalsin(){
                            sepetMiktar--;
                            toplamAdet--;
                            carpan--;
                            yedinciKitapAdet--;

                            if(konum==7 && ID==1){
                                toplamTutar-=kitap1.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==7 && ID==2){
                                toplamTutar-=kitap2.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID == 3){
                                toplamTutar-=kitap3.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID == 4){
                                toplamTutar-=kitap4.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID == 5){
                                toplamTutar-=kitap5.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==7&&ID==6){
                                toplamTutar-=kitap6.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID == 7){
                                toplamTutar-=kitap7.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID==8){
                                toplamTutar-=kitap8.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID == 9){
                                toplamTutar-=kitap9.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;

                            if(toplamAdet < 1){

                                sepetMiktar=0;
                                toplamAdet=0;
                                carpan=1;
                                toplamTutar=0;
                                konum=0;
                                yedinciKitapAdet=0;
    
                                document.getElementById("sepetMiktar").innerText = "";
                                document.getElementById("toplamAdet").innerHTML = "";
                                document.getElementById("toplamTutar").innerHTML = "";
                                document.getElementById("kitapIcerik7").innerHTML = "";
                                document.getElementById("kitapAdet7").innerHTML = "";
                               
                                } 
                        }

                        function yedinciKitapArtsin(){
                            sepetMiktar++;
                            toplamAdet++;
                            yedinciKitapAdet++;
                            carpan++;

                            if(konum==7 && ID==1){
                                toplamTutar+=kitap1.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==7 && ID==2){
                                toplamTutar+=kitap2.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID == 3){
                                toplamTutar+=kitap3.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID == 4){
                                toplamTutar+=kitap4.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID == 5){
                                toplamTutar+=kitap5.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==7&&ID==6){
                                toplamTutar+=kitap6.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID == 7){
                                toplamTutar+=kitap7.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID==8){
                                toplamTutar+=kitap8.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 7 && ID == 9){
                                toplamTutar+=kitap9.fiyat;
                                document.getElementById("kitapAdet7").innerHTML = "Adet: " + yedinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                        }


                        // SEKIZINCI KITABA AIT BUTONLARIN ARTTIRMA VE AZALTMA BUTONLARI

                        function sekizinciKitapAzalsin(){
                            sepetMiktar--;
                            toplamAdet--;
                            carpan--;
                            sekizinciKitapAdet--;

                            if(konum==8 && ID==1){
                                toplamTutar-=kitap1.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==8 && ID==2){
                                toplamTutar-=kitap2.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID == 3){
                                toplamTutar-=kitap3.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID == 4){
                                toplamTutar-=kitap4.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID == 5){
                                toplamTutar-=kitap5.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==8&&ID==6){
                                toplamTutar-=kitap6.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID == 7){
                                toplamTutar-=kitap7.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID==8){
                                toplamTutar-=kitap8.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID == 9){
                                toplamTutar-=kitap9.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;

                            if(toplamAdet < 1){

                                sepetMiktar=0;
                                toplamAdet=0;
                                carpan=1;
                                toplamTutar=0;
                                konum=0;
                                sekizinciKitapAdet=0;

                                document.getElementById("sepetMiktar").innerText = "";
                                document.getElementById("toplamAdet").innerHTML = "";
                                document.getElementById("toplamTutar").innerHTML = "";
                                document.getElementById("kitapIcerik8").innerHTML = "";
                                //muhtemelen buraya kitapicerik8'i de bosaltacak kod eklemem gerek. Ama yukarıdakiyle değiştirdim.
                                document.getElementById("kitapAdet8").innerHTML = "";
                               
                                } 
                        }

                        function sekizinciKitapArtsin(){
                            sepetMiktar++;
                            toplamAdet++;
                            sekizinciKitapAdet++;
                            carpan++;

                            if(konum==8 && ID==1){
                                toplamTutar+=kitap1.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==8 && ID==2){
                                toplamTutar+=kitap2.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID == 3){
                                toplamTutar+=kitap3.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID == 4){
                                toplamTutar+=kitap4.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID == 5){
                                toplamTutar+=kitap5.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==8&&ID==6){
                                toplamTutar+=kitap6.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID == 7){
                                toplamTutar+=kitap7.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID==8){
                                toplamTutar+=kitap8.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 8 && ID == 9){
                                toplamTutar+=kitap9.fiyat;
                                document.getElementById("kitapAdet8").innerHTML = "Adet: " + sekizinciKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                        }


                        // DOKUZUNCU KITABA AIT BUTONLARIN ARTTIRMA VE AZALTMA BUTONLARI

                        function dokuzuncuKitapAzalsin(){
                            sepetMiktar--;
                            toplamAdet--;
                            dokuzuncuKitapAdet--;
                            carpan--;

                            if(konum==9 && ID==1){
                                toplamTutar-=kitap1.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==9 && ID==2){
                                toplamTutar-=kitap2.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID == 3){
                                toplamTutar-=kitap3.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID == 4){
                                toplamTutar-=kitap4.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID == 5){
                                toplamTutar-=kitap5.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==9&&ID==6){
                                toplamTutar-=kitap6.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID == 7){
                                toplamTutar-=kitap7.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID==8){
                                toplamTutar-=kitap8.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID == 9){
                                toplamTutar-=kitap9.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;

                            if(toplamAdet < 1){

                                sepetMiktar=0;
                                toplamAdet=0;
                                carpan=1;
                                toplamTutar=0;
                                konum=0;
                                dokuzuncuKitapAdet=0
    
                                document.getElementById("sepetMiktar").innerText = "";
                                document.getElementById("toplamAdet").innerHTML = "";
                                document.getElementById("toplamTutar").innerHTML = "";
                                document.getElementById("kitapIcerik9").innerHTML = "";
                                document.getElementById("kitapAdet9").innerHTML = "";
                               
                                } 
                        }

                        function dokuzuncuKitapArtsin(){
                            sepetMiktar++;
                            toplamAdet++;
                            dokuzuncuKitapAdet++;
                            carpan++;

                            if(konum==9 && ID==1){
                                toplamTutar+=kitap1.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==9 && ID==2){
                                toplamTutar+=kitap2.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID == 3){
                                toplamTutar+=kitap3.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID == 4){
                                toplamTutar+=kitap4.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID == 5){
                                toplamTutar+=kitap5.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum==9&&ID==6){
                                toplamTutar+=kitap6.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID == 7){
                                toplamTutar+=kitap7.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID==8){
                                toplamTutar+=kitap8.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }
                            else if(konum == 9 && ID == 9){
                                toplamTutar+=kitap9.fiyat;
                                document.getElementById("kitapAdet9").innerHTML = "Adet: " + dokuzuncuKitapAdet;
                            document.getElementById("toplamTutar").innerHTML = "Toplam Tutar: " + toplamTutar;
                            }

                            document.getElementById("sepetMiktar").innerHTML = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = "Toplam Adet: " + toplamAdet;
                        }


                        // BASARIYLA EKLENMSTIR YAZISI CIKMASI ICIN GEREKLI JS KODU

                        const toastTrigger = document.getElementById('myToast')
                        const toastTrigger2 = document.getElementById('myToast2')
                        const toastTrigger3 = document.getElementById('myToast3')
                        const toastTrigger4 = document.getElementById('myToast4')
                        const toastTrigger5 = document.getElementById('myToast5')
                        const toastTrigger6 = document.getElementById('myToast6')
                        const toastTrigger7= document.getElementById('myToast7')
                        const toastTrigger8= document.getElementById('myToast8')
                        const toastTrigger9= document.getElementById('myToast9')

                        const toastLiveExample = document.getElementById('liveToast')

                        if (toastTrigger) {
                            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                            toastTrigger.addEventListener('click', () => {
                             toastBootstrap.show()
                             })
                                            }

                      if (toastTrigger2) {
                           const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                          toastTrigger2.addEventListener('click', () => {
                           toastBootstrap.show()
                          })
                                                                }

                         if (toastTrigger3) {
                             const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                             toastTrigger3.addEventListener('click', () => {
                               toastBootstrap.show()
                              })
                                                                                    }

                             if (toastTrigger4) {
                                 const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                                 toastTrigger4.addEventListener('click', () => {
                                  toastBootstrap.show()
                                  })
                                                 }
                            
                             if (toastTrigger5) {
                                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                                toastTrigger5.addEventListener('click', () => {
                                 toastBootstrap.show()
                                 })
                                                                    }
                                 if (toastTrigger6) {
                                     const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                                     toastTrigger6.addEventListener('click', () => {
                                      toastBootstrap.show()
                                      })
                                                                                        }

                             if (toastTrigger7) {
                                 const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                                 toastTrigger7.addEventListener('click', () => {
                                  toastBootstrap.show()
                                  })
                                                                                                            }

                             if (toastTrigger8) {
                                 const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                                 toastTrigger8.addEventListener('click', () => {
                                  toastBootstrap.show()
                                  })
                                                                                                                                }

                            if (toastTrigger9) {
                                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                                toastTrigger9.addEventListener('click', () => {
                                 toastBootstrap.show()
                                 })
                              }