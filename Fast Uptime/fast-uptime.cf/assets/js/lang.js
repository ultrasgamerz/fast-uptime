$(document).ready(function() {

    var arrLang={
        
        'tr':{

            '0':'Durum',
            '1':'Fiyatlandırma',
            '2':'Sponsor Olun',
            '3':'SSS',
            '4':"Discord'a Katılın!",
            '5':'Dil',	
            '6':'Discord İle Giriş',
            '7':'Dünyanın',
            '8':'en hızlı uptime',
            '9':' servisi!',
            '10':'Fast Uptime olarak projelerinizi 7/24 aktif tutacağımızın sözünü veriyoruz!',
            '11':'Nasıl kullanacağını bilmiyorsan ',
            '12':'tıkla!',	
            '13':'Hızlı Başlangıç',	
            '14':'Özellik',	
            '15':'Ücretsiz Plan',	
            '16':'Uptime Süresi',
            '17':'4 Dakika',
            '18':'1 Dakika',	
            '19':'Monitör Limiti',	
            '20':'5 Adet',	
            '21':'55 Adet',	
            '22':'Discord Özel Rol',	
            '23':'Web Site Üzerinde Onaylı Hesap',	
            '24':'Daha Hızlı Destek Alırsınız',	
            '25':'Bakımlardan Etkilenmezsiniz',	
            '26':'Ücretsiz Giriş Yapın',	
            '27':' Satın Al',	
            '28':'Çalışıyor',	
            '29':'+ Ücretsiz Hesapların monitör limiti ne kadar?',	
            '30':'5 Tane Monitor Ekleyebilirsin',	
            '31':'+ Monitör sayımı ücretsiz olarak artıra bilirmiyim?',	
            '32':'- Evet, Discord Sunucumuza 10 Arkadaşınızı Davet Ettiğinizde, +5 Monitör Eklenecektir.',	
            '33':'+ Arkadaşlarımı Davet Ettim Ama Hala 5 Monitör Hakkım Var?',	
            '34':'- Discord Üzerinden Bana Yazarsanız Yardımcı Olurum',	
            '35':'+ Monitörlerimi Nereden Göre Bilirim?',
            '36':'Dashboard Kısmından Görebilirsiniz',	
            '37':'+ Ücretsiz Hesaplar Para Ödüyormu?',	
            '38':'- Adı Üzerinde Ücüretsiz Hesap :)',	
            '39':'+ Bağış Yapmak İstiyorum?',	
            '40':'- Discord Sunucumuza Katılıp Yetkili Birine Yazmanız Yeterli :)',	
            '41':'+ Başka Kullanıcıların Profillerini Görebilir miyim?',	
            '42':'- Evet Görebilirsiniz, Tıkla!',	
            '43':'+ Monitörlerim Kaç Dakikada Bir Kez Uptime Oluyor?',	
            '44':'- Her 4 Dakikada Bir Kez Uptime Oluyorlar.',	
            '45':'+ Pro Plan Ne Kadar?',	
            '46':'- Yıllık 10$',	
            '47':'+ Pro Planın Özellikleri Neler?',	
            '48':'- Tüm Özellikleri Bu Sayfadan Görebilirsiniz!',	
            '49':'Bir şeyler yanlış gitti...',	
            '50':'Eklemek için şunlara dikkat edin;',	
            '51':'* Aynı link sistemde bulunmamalı,',	
            '52':'* Geçerli bir link belirtmelisiniz,',	
            '53':'* Ekleme limitinizi aşmamalısınız.',	
            '54':'Tekrar Deneyin',	
            '55':'Destek Al',	
            '56':'Profil',	
            '57':'Planı Yükselt',	
            '58':'Monitorlerim',	
            '59':'Monitor Ekle',	
            '60':'Profil Ara',		
            '61':'Çıkış Yap',	
            '62':'Discord Sunucumuz Açıldı!',	
            '63':'Tıkla!',	
            '64':'Nasıl Monitor Eklerim?',	
            '65':'Monitorlerim PRO',	
            '66':'Monitorlerim',	
            '67':'Ara',	
            '68':"Monitor Ekle PRO",	
            '69':'Monitor Ekle',	
            '70':'Sistemde kayıtlı bir monitörünüz yok.',	
            '71':'Eklenen Monitörler',	
            '72':'Hesap doğrulama',	
            '73':'Doğrulandı',	
            '74':'Doğrulanmadı',	
            '75':'Admin Hesabı',	
            '76':'Evet',	
            '77':'Hayır',	
            '78':'Ücretsiz Plan',
            '79':'Monitörünüz Başarılı Bir Şekilde Eklendi!',
            '80':'Projeniz Artık 7/24 Aktif Olacaktır!',
            '81':'Monitör Ekle',
            '82':'Not: ekran kapanmazsa, boş bir alana tıklayın.'
            
        },


        'en':{
            '0':'Status',
            '1':'Pricing',
            '2':'Sponsor',
            '3':'Faqs',
            '4':'Join Discord!',
            '5':'Language',	
            '6':'Login via Discord',
            '7':"World's",
            '8':'fastest uptime',
            '9':' service!',
            '10':'As Fast Uptime, we promise to keep your projects active 24/7!',
            '11':"If you don't know how to use it",
            '12':'click!',	
            '13':'Quick Start',	
            '14':'Feature',	
            '15':'Free Plan',	
            '16':'Uptime',
            '17':'4 minutes',
            '18':'1 minutes',	
            '19':'Monitor Limit',	
            '20':'5',	
            '21':'55',	
            '22':'Discord Special Role',	
            '23':'Approved Account On The Website',	
            '24':'You Get Faster Support',	
            '25':'Not affected by maintenance',	
            '26':'Login For Free',	
            '27':' Buy',	
            '28':'Operational',	
            '29':'+ How much is the monitor limit for free accounts?',	
            '30':'You Can Add 5 Monitors',	
            '31':'+ Can I increase the monitor count for free?',	
            '32':'- Yes, When You Invite 10 Friends To Our Discord Server, +5 Monitors Will Be Added.',	
            '33':'+ I Invited My Friends, But I Still Have The Right To 5 Monitors ?',	
            '34':"- I'll Help If You Write To Me On Discord.",	
            '35':'+ Where Can I See My Monitors?',
            '36':'You Can See It From The Dashboard Section',	
            '37':'+ Do Free Accounts Pay Money?',	
            '38':'No',	
            '39':'+ Can We Donate?',	
            '40':'- Just Join Our Discord Server And Write To Someone Authorized :)',	
            '41':"+ Can I see other users ' profiles?",	
            '42':'- Yes, Click!',	
            '43':'+ How many minutes do links become uptime?',	
            '44':"- They're Uptime Once Every 4 Minutes.",	
            '45':'+ How Much Is The Pro Plan?',	
            '46':'- $10 per year!',	
            '47':'+ What Are The Features Of The Pro Plan?',	
            '48':'- You Can See All The Features From This Page! (Click!)',	
            '49':'Something went wrong...',	
            '50':'To add, pay attention to the following;',	
            '51':'* The same link should not be found in the system,',	
            '52':'* You must specify a valid link,',	
            '53':'* You must not exceed your adding limit.',	
            '54':' Try Again',	
            '55':' Request Support',	
            '56':'Profile',	
            '57':'Upgrade Plan',	
            '58':'Monitors',	
            '59':'Monitor Add',	
            '60':'Profile Search',	
            '61':'Logout',	
            '62':'Our Discord Server Is Open!',	
            '63':'Click!',	
            '64':'How Do I Add Monitor?',	
            '65':'MONITORS PRO',	
            '66':'MONITORS',	
            '67':'Search',	
            '68':'Monıtors Add Pro',	
            '69':'Monıtors Add',	
            '70':'You have no monitor registered in the system.',	
            '71':'Added Monitors',	
            '72':'Account verification',	
            '73':'Verified',	
            '74':'Not Verified',	
            '75':'Admin Account',	
            '76':'Yes',	
            '77':'No',	
            '78':'Free Plan',
            '79':'Your Monitor Has Been Successfully Added!',
            '80':'Your Project Will Now Be Active 24/7!',
            '81':'Add Monitor',
            '82':'Note: if the screen does not close, click on an empty area.'
        },
        
        
    };


    
$('.dropdown-item').click(function() {
    localStorage.setItem('dil', JSON.stringify($(this).attr('id'))); 
    location.reload();
  });

    var lang =JSON.parse(localStorage.getItem('dil'));

    if(lang=="en"){
        $("#drop_yazı").html("Language");
    }
    else if(lang=="tr"){
        $("#drop_yazı").html("Dil");

    }
    else{
        $("#drop_yazı").html("Language");

    }

    $('a,h5,p,h1,h2,span,li,button,h3,label').each(function(index,element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    
  });

});