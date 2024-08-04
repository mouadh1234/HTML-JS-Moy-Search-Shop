var notes=[];
var c=0;
function AjouterNotes() {
    const note = Number(document.getElementById('moyen').value);
    if (note!='') {
        notes.push(note);
        document.getElementById('moyen').value='';
        c+=1;
        document.getElementById('count').innerText=c;

        
    }
    
}
function calculMoyen() {
    let sum=0;
    notes.map((note)=>{
        sum+=note;
    });
 const moyen = sum / notes.length;
    document.getElementById('show').innerHTML='<div class="alert alert-success">Votre moyen = '+moyen+'</div>'
    
}