class Kitap{
constructor(resim,isim,yazar,fiyat,id,tur){
    this.resim = resim;
    this.isim = isim;
    this.yazar = yazar;
    this.fiyat = fiyat;
    this.id = id;
    this.tur=tur;
}
}

var kitap1 = new Kitap("<img src='images/kitap.jpg' style='width:250px'>","The Witcher: Kirlangic Yolu", "Andrzej Sapkowski" , 20 , 1,"fantastik");
var kitap2 = new Kitap("<img src='images/kitap2.jpg' style='width:250px'>","1984","George Orwell",15,2,"roman");
var kitap3 = new Kitap("<img src='images/kitap3.jpg' style='width:250px'>","Hayat Icin 12 Kural","Jordan Peterson",30,3,"gelisim");
var kitap4 = new Kitap("<img src='images/kitap4.jpg' style='width:250px'>","Atomik Aliskanliklar","James Clear",10,4,"gelisim");
var kitap5 = new Kitap("<img src='images/kitap5.jpg' style='width:250px'>","Muhtesem Gatsby","Fitzgerald",15,5,"roman");
var kitap6 = new Kitap("<img src='images/kitap6.jpg' style='width:250px'>","Darth Bane: Yikim Yolu","Drew Karpyshyn",15,6,"fantastik");
var kitap7 = new Kitap("<img src='images/kitap7.jpg' style='width:250px'>","Zengin Baba Yoksul Baba","Robert T Kiyosaki",30,7,"gelisim");
var kitap8 = new Kitap("<img src='images/kitap8.jpg' style='width:250px'>","Don Kisot","Cervantes",12,8,"roman");
var kitap9 = new Kitap("<img src='images/kitap9.jpg' style='width:250px'>","Taht Oyunlari","George R.R. Martin",30,9,"fantastik");

//sepetMiktar degiskeni navbar'daki sepet ikonunun oradaki sayiyi arttiriyor.
let sepetMiktar = 0;

// offcanvas'ta bulunan toplam adet sayisini arttiriyor.
let toplamAdet = 0; 

// offcanvas'ta bulunan toplam tutari arttiracak kod.
let toplamTutar = 0;



function Kontrol(){

    alert("Sepete urun eklenmistir");
    sepetMiktar++; //yukarida bahsettigim gibi navbardaki sepet ikonunun yanina gelen sayiyi arttiriyor.
    toplamAdet++; //offcanvas'ta bulunan toplam adet sayisini arttiriyor

    toplamTutar = toplamTutar + kitap1.fiyat;

    document.getElementById("sepetMiktar").innerText = sepetMiktar;

    document.getElementById("kitapIcerik").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD";

    document.getElementById("toplamAdet").innerHTML = toplamAdet;

    document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
}

function Kontrol2(){
    alert("Sepete urun eklenmistir");
    sepetMiktar++;
    toplamAdet++;

    toplamTutar+=kitap2.fiyat;

    document.getElementById("sepetMiktar").innerText = sepetMiktar;

    document.getElementById("kitapIcerik").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD";

    document.getElementById("toplamAdet").innerHTML = toplamAdet;

    document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";

}

function Kontrol3(){
    alert("Sepete urun eklenmistir");
    sepetMiktar++;
    toplamAdet++;

    toplamTutar+=kitap3.fiyat;

    document.getElementById("sepetMiktar").innerText = sepetMiktar;

     document.getElementById("kitapIcerik").innerHTML = kitap3.resim + "<br>" + "Kitap Adi: " + kitap3.isim + "<br>" + "Yazar: " + kitap3.yazar + "<br>" + "Fiyat: " + kitap3.fiyat + " USD";
    
     document.getElementById("toplamAdet").innerHTML = toplamAdet;

     document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
    
    }

    function Kontrol4(){
        alert("Sepete urun eklenmistir");

        sepetMiktar++;
        toplamAdet++;

        toplamTutar+=kitap4.fiyat;

        document.getElementById("sepetMiktar").innerText = sepetMiktar;

        document.getElementById("kitapIcerik").innerHTML = kitap4.resim + "<br>" + "Kitap Adi: " + kitap4.isim + "<br>" + "Yazar: " + kitap4.yazar + "<br>" + "Fiyat: " + kitap4.fiyat + " USD";
        
        document.getElementById("toplamAdet").innerHTML = toplamAdet;

        document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
        
        }

        function Kontrol5(){
            alert("Sepete urun eklenmistir");

            sepetMiktar++;
            toplamAdet++;

            toplamTutar+=kitap5.fiyat;

            document.getElementById("sepetMiktar").innerText = sepetMiktar;
            
            document.getElementById("kitapIcerik").innerHTML = kitap5.resim + "<br>" + "Kitap Adi: " + kitap5.isim + "<br>" + "Yazar: " + kitap5.yazar + "<br>" + "Fiyat: " + kitap5.fiyat + " USD";
            
            document.getElementById("toplamAdet").innerHTML = toplamAdet;

            document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
            
            }

            function Kontrol6(){
                alert("Sepete urun eklenmistir");
                sepetMiktar++;

                toplamAdet++;
                toplamTutar+=kitap6.fiyat;

                document.getElementById("sepetMiktar").innerText = sepetMiktar;

                document.getElementById("kitapIcerik").innerHTML = kitap6.resim + "<br>" + "Kitap Adi: " + kitap6.isim + "<br>" + "Yazar: " + kitap6.yazar + "<br>" + "Fiyat: " + kitap6.fiyat + " USD";
                
                document.getElementById("toplamAdet").innerHTML = toplamAdet;

                document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
                
                }

                function Kontrol7(){
                    alert("Sepete urun eklenmistir");
                    sepetMiktar++;

                    toplamAdet++;
                    toplamTutar+=kitap7.fiyat;

                    document.getElementById("sepetMiktar").innerText = sepetMiktar;

                    document.getElementById("kitapIcerik").innerHTML = kitap7.resim + "<br>" + "Kitap Adi: " + kitap7.isim + "<br>" + "Yazar: " + kitap7.yazar + "<br>" + "Fiyat: " + kitap7.fiyat + " USD";
                    
                    document.getElementById("toplamAdet").innerHTML = toplamAdet;

                    document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
                    
                    }

                    function Kontrol8(){
                        alert("Sepete urun eklenmistir");
                        sepetMiktar++;

                        toplamAdet++;
                        toplamTutar+=kitap8.fiyat;

                        document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            
                        document.getElementById("kitapIcerik").innerHTML = kitap8.resim + "<br>" + "Kitap Adi: " + kitap8.isim + "<br>" + "Yazar: " + kitap8.yazar + "<br>" + "Fiyat: " + kitap8.fiyat + " USD";;
                        
                        document.getElementById("toplamAdet").innerHTML = toplamAdet;

                        document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
                        
                        }

                        function Kontrol9(){
                            alert("Sepete urun eklenmistir");
                            sepetMiktar++;

                            toplamAdet++;
                            toplamTutar+=kitap9.fiyat;

                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                                
                            document.getElementById("kitapIcerik").innerHTML = kitap9.resim + "<br>" + "Kitap Adi: " + kitap9.isim + "<br>" + "Yazar: " + kitap9.yazar + "<br>" + "Fiyat: " + kitap9.fiyat + " USD";
                            
                            document.getElementById("toplamAdet").innerHTML = toplamAdet;

                            document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
                            
                            }


                        function sepetiTemizle(){
                            document.getElementById("kitapIcerik").innerHTML = "";
                            document.getElementById("sepetMiktar").innerHTML = "";
                            document.getElementById("toplamTutar").innerHTML = "0 USD";
                            document.getElementById("toplamAdet").innerHTML = "0 Adet";

                            toplamTutar = 0; //toplam tutar yazan sayi
                            toplamAdet = 0; //toplam adet yazan sayi
                            sepetMiktar = 0; //hem navbardaki hem offcanvastaki sayiyi sifirliyor

                            alert("Sepetiniz temizlenmistir");
                        }

                        function kitapAzalt(){

                            sepetMiktar--;
                            toplamAdet--;

                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = toplamAdet;

                             if(toplamAdet<0){
                                sepetMiktar=0;
                                toplamAdet=0;
                                toplamTutar=0;
                                document.getElementById("toplamAdet").innerHTML = 0;
                                document.getElementById("sepetMiktar").innerHTML = 0;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";

                            }


                            toplamTutar-=kitap1.fiyat;

                            if(toplamTutar<0){
                                toplamTutar = 0;
                                document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";

                            }
                            document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";


                        }

                        function kitapArttir() {

                            sepetMiktar++;
                            toplamAdet++;

                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = toplamAdet;

                            toplamTutar+=kitap1.fiyat;

                            document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";


                        }