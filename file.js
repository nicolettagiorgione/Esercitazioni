/*la funzione validation è stata utilizzata per verificare la condizione sull'email:
    se il campo dell'email è null oppure vuoto, viene mostrato l'errore, altrimenti viene aggiunta automaticamente la classe hidden che nasconde l'errore.
    Ugualmente per il secondo form.
    */

function validation() {
    const email = document.getElementById('email-updates');

    email.value === '' || email.value == null ? $('.error_text').removeClass('_hidden') : $('.error_text').addClass('_hidden');

}
function validationcity() {
    const city = document.getElementById('inserisci');
    city.value === '' || city.value == null ? $('.error').removeClass('_hidden') : $('.error').addClass('_hidden');
}
// La funzione legge tutto il contenuto al suo interno. La prima è stata utilizzata per far apparire al click il contenitore applicando la condizione
// dell'if ed else.
$(document).ready(function () {
    const dropdown = document.querySelector(".openDropdown");
    const search = document.getElementById("search");

    document.querySelector(".search").addEventListener('click', function() {
        var edit_save = document.getElementById("iconsearch");
        if(dropdown.classList.contains("openDropdown")) {
            edit_save.src = "img/off.png";    
            dropdown.classList.remove("openDropdown")
        }else {
            dropdown.classList.add("openDropdown");
            edit_save.src = "img/serarch.png";
        }

        
// l'url rappresenta il percorso del file.
// Si dichiarano le varabili, e viene messe l'await per assicurarsi che la arrivi prima il pezzo di codice, data fa da tramite per inviare i file al server.
    });

    const api_url_menu = "http://localhost:3000/menu"
    async function getRegali() {
        const responseregali = await fetch(api_url_menu)
        const dataregali = await responseregali.json()

        dataregali[0].regaliMenu[0].regali.map((regali,index) => {



            var list = `<a href=""><li class="colorelista">${dataregali[0].regaliMenu[0].regali[index].text}</li></a>`

            document.querySelector(".listaRegali").insertAdjacentHTML('beforeend', list);
            
        });

        dataregali[0].regaliMenu[0].ultimeCollezioni.map((ultimeCollezioni,index) => {



            var list = `<a href=""><li class="colorelista">${dataregali[0].regaliMenu[0].ultimeCollezioni[index].text}</li></a>`

            document.querySelector(".listaUltimecollezioni").insertAdjacentHTML('beforeend', list);
            
        });
     
        dataregali[0].regaliMenu[0].regaliMenudestra.map((regaliMenudestra,index) => {



            var list = `<a href=""><li class="colorelista">${dataregali[0].regaliMenu[0].regaliMenudestra[index].text}</li></a>`

            document.querySelector(".listaTrovaregalo").insertAdjacentHTML('beforeend', list);
            
        });
    }
    getRegali()



const api_url_menuLingue = "http://localhost:3000/menuLingue"
async function getlingue() {
    const responselingue = await fetch(api_url_menuLingue)
    const datalingue = await responselingue.json()
    datalingue[0].lingue.map((lingue, index) => {



        var list = `<a href=""><li class="lingue">${datalingue[0].lingue[index].text}</li></a>`

        document.querySelector(".linguemenu").insertAdjacentHTML('beforeend', list);
    });



}
getlingue() 


const api_url_WhatsNewMenu= "http://localhost:3000/menu"
async function getacquistaleNovita() {
const responseacquistaleNovita = await fetch(api_url_WhatsNewMenu)
 const dataacquistaleNovita = await responseacquistaleNovita.json()
 dataacquistaleNovita[0].WhatsNewMenu[0].acquistaleNovita.map((acquistaleNovita, index) => {
    var list = `<a href=""><li class="colorelista">${ dataacquistaleNovita[0].WhatsNewMenu[0].acquistaleNovita[index].text}</li></a>`
    document.querySelector(".listaNew").insertAdjacentHTML('beforeend', list);
   });
   
  dataacquistaleNovita[0].WhatsNewMenu[0].borseBeloved.map((borseBeloved, index) => {
     var list = `<a href=""><li class="colorelista">${ dataacquistaleNovita[0].WhatsNewMenu[0].borseBeloved[index].text}</li></a>`
     document.querySelector(".listaborseb").insertAdjacentHTML('beforeend', list);
    });
    
    dataacquistaleNovita[0].WhatsNewMenu[0].ourCommitment.map((ourCommitment, index) => {
        var list = `<a href=""><li class="colorelista">${ dataacquistaleNovita[0].WhatsNewMenu[0].ourCommitment[index].text}</li></a>`
        document.querySelector(".listacommit").insertAdjacentHTML('beforeend', list);
       });
    dataacquistaleNovita[0].WhatsNewMenu[0].projectsByTheHouse.map((projectsByTheHouse, index) => {
        var list = `<a href=""><li class="colorelista">${ dataacquistaleNovita[0].WhatsNewMenu[0].projectsByTheHouse[index].text}</li></a>`
        document.querySelector(".listaProject").insertAdjacentHTML('beforeend', list);
       });
}
getacquistaleNovita()


const api_url_borsemenu= "http://localhost:3000/menu"
async function getborseuno() {
const responseborseuno = await fetch(api_url_borsemenu)
 const databorseuno = await responseborseuno.json()
 databorseuno[0].borsemenu[0].borseuno.map((borseuno, index) => {
    var list = `<a href=""><li class="colorelista">${ databorseuno[0].borsemenu[0].borseuno[index].text}</li></a>`
    document.querySelector(".listaBorse").insertAdjacentHTML('beforeend', list);
   });
   databorseuno[0].borsemenu[0].borsemenudestra.map((borsemenudestra, index) => {
    var list = `<a href=""><li class="colorelista">${ databorseuno[0].borsemenu[0].borsemenudestra[index].text}</li></a>`
    document.querySelector(".listaTrovaborsa").insertAdjacentHTML('beforeend', list);
   });


}
getborseuno()

const api_url_donnaMenu ="http://localhost:3000/menu"
async function getnuoviArrivi() {
const responsenuoviArrivi = await fetch(api_url_donnaMenu)
 const datanuoviArrivi = await responsenuoviArrivi.json()
 datanuoviArrivi[0].donnaMenu[0].nuoviArrivi.map((nuoviArrivi, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].donnaMenu[0].nuoviArrivi[index].text}</li></a>`
    document.querySelector(".listaNuoviarrivi").insertAdjacentHTML('beforeend', list);
   });
  
   datanuoviArrivi[0].donnaMenu[0].regali.map((regali, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].donnaMenu[0].regali[index].text}</li></a>`
    document.querySelector(".listaRegaliDonna").insertAdjacentHTML('beforeend', list);
   });
   datanuoviArrivi[0].donnaMenu[0].borse.map((borse, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].donnaMenu[0].borse[index].text}</li></a>`
    document.querySelector(".listaBorsedonna").insertAdjacentHTML('beforeend', list);
   });
   datanuoviArrivi[0].donnaMenu[0].abbigliamento.map((abbigliamento, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].donnaMenu[0].abbigliamento[index].text}</li></a>`
    document.querySelector(".listaAbbigliamento").insertAdjacentHTML('beforeend', list);
   });
   datanuoviArrivi[0].donnaMenu[0].scarpe.map((scarpe, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].donnaMenu[0].scarpe[index].text}</li></a>`
    document.querySelector(".listaScarpe").insertAdjacentHTML('beforeend', list);
   });
   datanuoviArrivi[0].donnaMenu[0].gioielliEorologi.map((gioielliEorologi, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].donnaMenu[0].gioielliEorologi[index].text}</li></a>`
    document.querySelector(".listaGioielliDonna").insertAdjacentHTML('beforeend', list);
   });
   datanuoviArrivi[0].donnaMenu[0].accessori.map((accessori, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].donnaMenu[0].accessori[index].text}</li></a>`
    document.querySelector(".listaAccessoriDonna").insertAdjacentHTML('beforeend', list);
   });
}
getnuoviArrivi()


const api_url_uomomenu ="http://localhost:3000/menu"
async function getnuoviArriviUomo() {
const responsenuoviArrivi = await fetch(api_url_uomomenu)
 const datanuoviArrivi = await responsenuoviArrivi.json()
 datanuoviArrivi[0].uomomenu[0].nuoviArriviUomo.map((nuoviArrivi, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].uomomenu[0].nuoviArriviUomo[index].text}</li></a>`
    document.querySelector(".listaNuoviarriviUomo").insertAdjacentHTML('beforeend', list);
   });
  
   datanuoviArrivi[0].uomomenu[0].regali.map((regali, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].uomomenu[0].regali[index].text}</li></a>`
    document.querySelector(".listaRegaliUomo").insertAdjacentHTML('beforeend', list);
   });
   datanuoviArrivi[0].uomomenu[0].borse.map((borse, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].uomomenu[0].borse[index].text}</li></a>`
    document.querySelector(".listaBorseUomo").insertAdjacentHTML('beforeend', list);
   });
   datanuoviArrivi[0].uomomenu[0].abbigliamento.map((abbigliamento, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].uomomenu[0].abbigliamento[index].text}</li></a>`
    document.querySelector(".listaAbbigliamentoUomo").insertAdjacentHTML('beforeend', list);
   });
   datanuoviArrivi[0].uomomenu[0].scarpe.map((scarpe, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].uomomenu[0].scarpe[index].text}</li></a>`
    document.querySelector(".listaScarpeUomo").insertAdjacentHTML('beforeend', list);
   });
   datanuoviArrivi[0].uomomenu[0].gioielliEorologi.map((gioielliEorologi, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].uomomenu[0].gioielliEorologi[index].text}</li></a>`
    document.querySelector(".listaGioielliUomo").insertAdjacentHTML('beforeend', list);
   });
   datanuoviArrivi[0].uomomenu[0].accessori.map((accessori, index) => {
    var list = `<a href=""><li class="colorelista">${ datanuoviArrivi[0].uomomenu[0].accessori[index].text}</li></a>`
    document.querySelector(".listaAccessoriUomo").insertAdjacentHTML('beforeend', list);
   });
}
getnuoviArriviUomo()


const api_url_mxmenu ="http://localhost:3000/menu"
async function getilProgettoMx() {
const responseilProgettoMx = await fetch(api_url_mxmenu)
 const datailProgettoMx = await responseilProgettoMx.json()
 datailProgettoMx[0].mxmenu[0].ilProgettoMx.map((ilProgettoMx, index) => {
    var list = `<a href=""><li class="colorelista">${ datailProgettoMx[0].mxmenu[0].ilProgettoMx[index].text}</li></a>`
    document.querySelector(".listaProgettomx").insertAdjacentHTML('beforeend', list);
   });
}
getilProgettoMx()

const api_url_bambinomenu ="http://localhost:3000/menu"
async function getneonato() {
const responseneonato = await fetch(api_url_bambinomenu)
 const dataneonato = await responseneonato.json()
 dataneonato[0].bambinomenu[0].neonato.map((neonato, index) => {
    var list = `<a href=""><li class="colorelista">${ dataneonato[0].bambinomenu[0].neonato[index].text}</li></a>`
    document.querySelector(".listaNeonato").insertAdjacentHTML('beforeend', list);
   });
   dataneonato[0].bambinomenu[0].bambina.map((bambina, index) => {
    var list = `<a href=""><li class="colorelista">${ dataneonato[0].bambinomenu[0].bambina[index].text}</li></a>`
    document.querySelector(".listaBambina").insertAdjacentHTML('beforeend', list);
   });
   dataneonato[0].bambinomenu[0].bambina.map((bambino, index) => {
    var list = `<a href=""><li class="colorelista">${ dataneonato[0].bambinomenu[0].bambina[index].text}</li></a>`
    document.querySelector(".listaBambino").insertAdjacentHTML('beforeend', list);
   });
   dataneonato[0].bambinomenu[0].acquistaPerLook.map((acquistaPerLook, index) => {
    var list = `<a href=""><li class="colorelista">${ dataneonato[0].bambinomenu[0].acquistaPerLook[index].text}</li></a>`
    document.querySelector(".listaLook").insertAdjacentHTML('beforeend', list);
   });
  
   
}
getneonato()

const api_url_gioielliOrologimenu ="http://localhost:3000/menu"
async function getgioielliInOro() {
const responsegioielliInOro = await fetch(api_url_gioielliOrologimenu)
 const datagioielliInOro = await responsegioielliInOro.json()
 datagioielliInOro[0].gioielliOrologimenu[0].gioielliInOro.map((gioielliInOro, index) => {
    var list = `<a href=""><li class="colorelista">${ datagioielliInOro[0].gioielliOrologimenu[0].gioielliInOro[index].text}</li></a>`
    document.querySelector(".listaGioiellioro").insertAdjacentHTML('beforeend', list);
   });
   datagioielliInOro[0].gioielliOrologimenu[0].gioielliIArgento.map((gioielliIArgento, index) => {
    var list = `<a href=""><li class="colorelista">${ datagioielliInOro[0].gioielliOrologimenu[0].gioielliIArgento[index].text}</li></a>`
    document.querySelector(".listaGioielliargento").insertAdjacentHTML('beforeend', list);
   });
   datagioielliInOro[0].gioielliOrologimenu[0].gioielliFashion.map((gioielliFashion, index) => {
    var list = `<a href=""><li class="colorelista">${ datagioielliInOro[0].gioielliOrologimenu[0].gioielliFashion[index].text}</li></a>`
    document.querySelector(".listaGioiellifashion").insertAdjacentHTML('beforeend', list);
   });

   datagioielliInOro[0].gioielliOrologimenu[0].orologi.map((orologi, index) => {
    var list = `<a href=""><li class="colorelista">${ datagioielliInOro[0].gioielliOrologimenu[0].orologi[index].text}</li></a>`
    document.querySelector(".listaOrologi").insertAdjacentHTML('beforeend', list);
   });
   datagioielliInOro[0].gioielliOrologimenu[0].scopriDiPiu.map((scopriDiPiu, index) => {
    var list = `<a href=""><li class="colorelista">${ datagioielliInOro[0].gioielliOrologimenu[0].scopriDiPiu[index].text}</li></a>`
    document.querySelector(".listaScopri").insertAdjacentHTML('beforeend', list);
   });
   
   
}
getgioielliInOro()

const api_url_beautymenu ="http://localhost:3000/menu"
async function getlatestArrivals() {
const responselatestArrivals = await fetch(api_url_beautymenu)
 const datalatestArrivals = await responselatestArrivals.json()
 datalatestArrivals[0].beautymenu[0].latestArrivals.map((latestArrivals, index) => {
    var list = `<a href=""><li class="colorelista">${ datalatestArrivals[0].beautymenu[0].latestArrivals[index].text}</li></a>`
    document.querySelector(".listaUltimi").insertAdjacentHTML('beforeend', list);
   });
   datalatestArrivals[0].beautymenu[0].regali.map((regali, index) => {
    var list = `<a href=""><li class="colorelista">${ datalatestArrivals[0].beautymenu[0].regali[index].text}</li></a>`
    document.querySelector(".listaRegaliBeauty").insertAdjacentHTML('beforeend', list);
   });
   datalatestArrivals[0].beautymenu[0].labbra.map((labbra, index) => {
    var list = `<a href=""><li class="colorelista">${ datalatestArrivals[0].beautymenu[0].labbra[index].text}</li></a>`
    document.querySelector(".listaProdottilabbra").insertAdjacentHTML('beforeend', list);
   });
   datalatestArrivals[0].beautymenu[0].occhi.map((occhi, index) => {
    var list = `<a href=""><li class="colorelista">${ datalatestArrivals[0].beautymenu[0].occhi[index].text}</li></a>`
    document.querySelector(".listaProdottiocchi").insertAdjacentHTML('beforeend', list);
   });
   datalatestArrivals[0].beautymenu[0].viso.map((viso, index) => {
    var list = `<a href=""><li class="colorelista">${ datalatestArrivals[0].beautymenu[0].viso[index].text}</li></a>`
    document.querySelector(".listaViso").insertAdjacentHTML('beforeend', list);
   });
   datalatestArrivals[0].beautymenu[0].mani.map((mani, index) => {
    var list = `<a href=""><li class="colorelista">${ datalatestArrivals[0].beautymenu[0].mani[index].text}</li></a>`
    document.querySelector(".listaMani").insertAdjacentHTML('beforeend', list);
   });
   datalatestArrivals[0].beautymenu[0].profumi.map((profumi, index) => {
    var list = `<a href=""><li class="colorelista">${ datalatestArrivals[0].beautymenu[0].profumi[index].text}</li></a>`
    document.querySelector(".listaProfumi").insertAdjacentHTML('beforeend', list);
   });
   datalatestArrivals[0].beautymenu[0].luxuryCollection.map((luxuryCollection, index) => {
    var list = `<a href=""><li class="colorelista">${ datalatestArrivals[0].beautymenu[0].luxuryCollection[index].text}</li></a>`
    document.querySelector(".listaLuxury").insertAdjacentHTML('beforeend', list);
   });
   
   
}
getlatestArrivals()

const api_url_décorLifestylemenu ="http://localhost:3000/menu"
async function getdécor() {
const responsedécor = await fetch(api_url_décorLifestylemenu)
 const datadécor = await responsedécor.json()
 datadécor[0].décorLifestylemenu[0].décor.map((décor, index) => {
    var list = `<a href=""><li class="colorelista">${ datadécor[0].décorLifestylemenu[0].décor[index].text}</li></a>`
    document.querySelector(".listaDecor").insertAdjacentHTML('beforeend', list);
   });
   datadécor[0].décorLifestylemenu[0].lifestyle.map((lifestyle, index) => {
    var list = `<a href=""><li class="colorelista">${ datadécor[0].décorLifestylemenu[0].lifestyle[index].text}</li></a>`
    document.querySelector(".listalife").insertAdjacentHTML('beforeend', list);
   });
}
   getdécor()

//    const api_url_footermenu ="http://localhost:3000/menu"
//    async function getpossiamoAiutarti() {
//    const responsepossiamoAiutarti = await fetch(api_url_footermenu)
//     const datapossiamoAiutarti = await responsepossiamoAiutarti.json()
//     datapossiamoAiutarti[0].footermenu[0].possiamoAiutarti.map((possiamoAiutarti, index) => {
//     var list = `<a href=""><li>< img src="C:\Users\ngiorgione\Desktop\Sito-Gucci\img">${datapossiamoAiutarti[0].footermenu[0].possiamoAiutarti[index].icon}${datapossiamoAiutartifootermenu[0].possiamoAiutarti[index].text}</li></a>`
//         document.querySelector.("listahelp").insertAdjacentHTML('beforeend', list);
//    });
// }
//    getpossiamoAiutarti() 
   
   const api_url_footermenu ="http://localhost:3000/footermenu"
   async function getserviziEsclusivi() {
   const responseserviziEsclusivi = await fetch(api_url_footermenu)
    const dataserviziEsclusivi = await responseserviziEsclusivi.json()
    dataserviziEsclusivi[0].serviziEsclusivi.map((serviziEsclusivi, index) => {
    var list = `<a href=""><li><img src="img/${dataserviziEsclusivi[0].serviziEsclusivi[index].icon}" />${dataserviziEsclusivi[0].serviziEsclusivi[index].text}</li></a>`
        document.querySelector(".listaserviziesclusivi").insertAdjacentHTML('beforeend', list);
   });
   dataserviziEsclusivi[0].possiamoAiutarti.map((possiamoAiutarti, index) => {
    var list = `<a href=""><li>${dataserviziEsclusivi[0].possiamoAiutarti[index].text}</li></a>`
        document.querySelector(".listahelp").insertAdjacentHTML('beforeend', list);
   });
   dataserviziEsclusivi[0].informazioniAziendali.map((informazioniAziendali, index) => {
    var list = `<a href=""><li>${dataserviziEsclusivi[0].informazioniAziendali[index].text}</li></a>`
        document.querySelector(".listainfoazienda").insertAdjacentHTML('beforeend', list);
   });
   dataserviziEsclusivi[0].seguiciSu.map((seguiciSu, index) => {
    var list = `<a href=""><li><img src="img/${dataserviziEsclusivi[0].seguiciSu[index].icon}" />${dataserviziEsclusivi[0].seguiciSu[index].text}</li></a>`
    document.querySelector(".listasocial").insertAdjacentHTML('beforeend', list);
});
}
   getserviziEsclusivi() 


  
 
});