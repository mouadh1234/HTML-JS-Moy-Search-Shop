function search(event) {
    const val = event.target.value;
    const elements = document.getElementsByClassName('contact');

    for (let i = 0; i < elements.length; i++) {

        if (    elements.item(i).innerHTML.trim().toLowerCase().indexOf(val.toLowerCase()) != -1   ) {

            elements.item(i).style.display='block'

        }else{
            elements.item(i).style.display='none';

    }}
        
}