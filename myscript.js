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

var kitap1 = new Kitap("<img src='images/kitap.jpg' style='width:250px'>","The Witcher: Kirlangic Kulesi", "Andrzej Sapkowski" , 20 , 1,"fantastik");
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

// kitapArttir ve kitapAzalt fonksiyonunda kullanilan kod.
let carpan = 1;

function Kontrol(){

    
    sepetMiktar++; //yukarida bahsettigim gibi navbardaki sepet ikonunun yanina gelen sayiyi arttiriyor.
    toplamAdet++; //offcanvas'ta bulunan toplam adet sayisini arttiriyor
    
    toplamTutar += kitap1.fiyat;

    document.getElementById("sepetMiktar").innerText = sepetMiktar;

    document.getElementById("kitapIcerik").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD" + "<br>" + "ID: " + kitap1.id;

    document.getElementById("toplamAdet").innerHTML = toplamAdet;

    document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
}

function Kontrol2(){
    sepetMiktar++;
    toplamAdet++;



    toplamTutar+=kitap2.fiyat;

    document.getElementById("sepetMiktar").innerText = sepetMiktar;

    document.getElementById("kitapIcerik").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD" + "<br>" + "ID: " + kitap2.id;

    document.getElementById("toplamAdet").innerHTML = toplamAdet;

    document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";

    
    /* if(Kontrol){
        document.getElementById("sepetMiktar").innerText = sepetMiktar;
       
        document.getElementById("kitapIcerik").innerHTML = kitap1.resim + "<br>" + "Kitap Adi: " + kitap1.isim + "<br>" + "Yazar: " + kitap1.yazar + "<br>" + "Fiyat: " + kitap1.fiyat + " USD" + "<br>" + "ID: " + kitap1.id;
        document.getElementById("kitapIcerik2").innerHTML = kitap2.resim + "<br>" + "Kitap Adi: " + kitap2.isim + "<br>" + "Yazar: " + kitap2.yazar + "<br>" + "Fiyat: " + kitap2.fiyat + " USD" + "<br>" + "ID: " + kitap2.id;

    document.getElementById("toplamAdet").innerHTML = toplamAdet;

    document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
    }

    else{
        
    } */

}

function Kontrol3(){
    sepetMiktar++;
    toplamAdet++;

    toplamTutar+=kitap3.fiyat;

    document.getElementById("sepetMiktar").innerText = sepetMiktar;

     document.getElementById("kitapIcerik").innerHTML = kitap3.resim + "<br>" + "Kitap Adi: " + kitap3.isim + "<br>" + "Yazar: " + kitap3.yazar + "<br>" + "Fiyat: " + kitap3.fiyat + " USD" + "<br>" + "ID: " + kitap3.id;
    
     document.getElementById("toplamAdet").innerHTML = toplamAdet;

     document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
    
    }

    function Kontrol4(){

        sepetMiktar++;
        toplamAdet++;

        toplamTutar+=kitap4.fiyat;

        document.getElementById("sepetMiktar").innerText = sepetMiktar;

        document.getElementById("kitapIcerik").innerHTML = kitap4.resim + "<br>" + "Kitap Adi: " + kitap4.isim + "<br>" + "Yazar: " + kitap4.yazar + "<br>" + "Fiyat: " + kitap4.fiyat + " USD" + "<br>" + "ID: " + kitap4.id;
        
        document.getElementById("toplamAdet").innerHTML = toplamAdet;

        document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
        
        }

        function Kontrol5(){

            sepetMiktar++;
            toplamAdet++;

            toplamTutar+=kitap5.fiyat;

            document.getElementById("sepetMiktar").innerText = sepetMiktar;
            
            document.getElementById("kitapIcerik").innerHTML = kitap5.resim + "<br>" + "Kitap Adi: " + kitap5.isim + "<br>" + "Yazar: " + kitap5.yazar + "<br>" + "Fiyat: " + kitap5.fiyat + " USD" + "<br>" + "ID: " + kitap5.id;
            
            document.getElementById("toplamAdet").innerHTML = toplamAdet;

            document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
            
            }

            function Kontrol6(){
                sepetMiktar++;

                toplamAdet++;

                toplamTutar+=kitap6.fiyat;

                document.getElementById("sepetMiktar").innerText = sepetMiktar;

                document.getElementById("kitapIcerik").innerHTML = kitap6.resim + "<br>" + "Kitap Adi: " + kitap6.isim + "<br>" + "Yazar: " + kitap6.yazar + "<br>" + "Fiyat: " + kitap6.fiyat + " USD" + "<br>" + "ID: " + kitap6.id;
                
                document.getElementById("toplamAdet").innerHTML = toplamAdet;

                document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
                
                }

                function Kontrol7(){
                    sepetMiktar++;
                    toplamAdet++;
                    toplamTutar+=kitap7.fiyat;

                    document.getElementById("sepetMiktar").innerText = sepetMiktar;

                    document.getElementById("kitapIcerik").innerHTML = kitap7.resim + "<br>" + "Kitap Adi: " + kitap7.isim + "<br>" + "Yazar: " + kitap7.yazar + "<br>" + "Fiyat: " + kitap7.fiyat + " USD" + "<br>" + "ID: " + kitap7.id;
                    
                    document.getElementById("toplamAdet").innerHTML = toplamAdet;

                    document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
                    
                    }

                    function Kontrol8(){
                        sepetMiktar++;
                        toplamAdet++;
                        toplamTutar+=kitap8.fiyat;

                        document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            
                        document.getElementById("kitapIcerik").innerHTML = kitap8.resim + "<br>" + "Kitap Adi: " + kitap8.isim + "<br>" + "Yazar: " + kitap8.yazar + "<br>" + "Fiyat: " + kitap8.fiyat + " USD" + "<br>" + "ID: " + kitap8.id;
                        
                        document.getElementById("toplamAdet").innerHTML = toplamAdet;

                        document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
                        
                        }

                        function Kontrol9(){
                            sepetMiktar++;
                            toplamAdet++;
                            toplamTutar+=kitap9.fiyat;

                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                                
                            document.getElementById("kitapIcerik").innerHTML = kitap9.resim + "<br>" + "Kitap Adi: " + kitap9.isim + "<br>" + "Yazar: " + kitap9.yazar + "<br>" + "Fiyat: " + kitap9.fiyat + " USD" + "<br>" + "ID: " + kitap9.id;
                            
                            document.getElementById("toplamAdet").innerHTML = toplamAdet;

                            document.getElementById("toplamTutar").innerHTML = toplamTutar + " USD";
                            
                            }


                        function sepetiTemizle(){
                            
                            sepetMiktar=0;
                            toplamAdet=0;
                            carpan=1;
                            toplamTutar=0;

                            document.getElementById("sepetMiktar").innerText = "";
                            document.getElementById("toplamAdet").innerHTML = "";
                            document.getElementById("toplamTutar").innerHTML = toplamTutar*carpan + " USD";
                            document.getElementById("kitapIcerik").innerHTML = "Sepetinizde urun bulunmamaktadir"
                            document.getElementById("kitapIcerik2").innerHTML ="";

                               
                            alert("Sepetiniz temizlenmistir");
                        }

                        function kitapArttir() {
                            
                            toplamAdet++;
                            sepetMiktar++;
                            carpan++;
                            
                        
                             document.getElementById("sepetMiktar").innerText = sepetMiktar;
                             document.getElementById("toplamAdet").innerHTML = toplamAdet; 
                             document.getElementById("toplamTutar").innerHTML = toplamTutar * carpan + " USD";

                        }

                        function kitapAzalt(){

                            sepetMiktar--;
                            toplamAdet--;
                            carpan--;

                        
                            
                            document.getElementById("sepetMiktar").innerText = sepetMiktar;
                            document.getElementById("toplamAdet").innerHTML = toplamAdet;
                            document.getElementById("toplamTutar").innerHTML = toplamTutar*carpan + " USD";


                             if(toplamAdet < 1){

                            sepetMiktar=0;
                            toplamAdet=0;
                            carpan=1;
                            toplamTutar=0;

                            document.getElementById("sepetMiktar").innerText = "";
                            document.getElementById("toplamAdet").innerHTML = "";
                            document.getElementById("toplamTutar").innerHTML = toplamTutar*carpan + " USD";
                            document.getElementById("kitapIcerik").innerHTML = "Sepetinizde urun bulunmamaktadir"
                            } 

                        }


                        function kitapKaldir(){
                            
                            sepetMiktar=0;
                            toplamAdet=0;
                            toplamTutar=0;
                            carpan=1;
                            
                            document.getElementById("kitapIcerik").innerHTML = "";
                            document.getElementById("toplamAdet").innerHTML = "";
                            document.getElementById("toplamTutar").innerHTML = "";
                            document.getElementById("sepetMiktar").innerHTML = "";
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