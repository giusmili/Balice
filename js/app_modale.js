 document.addEventListener("DOMContentLoaded", ()=>{
            
            console.log("loaded");
            

            let modale_art={
                btn: document.querySelector('.modal-btn'),
                btn_remove: document.querySelector('.modale > button'),
                modal: document.querySelector('.modale'),

                
                modal_open(){
                    this.modal.classList.add('modal_open');
                },
                modal_remove(){
                    this.modal.classList.remove('modal_open');
                }

            }
           
            //event for modale_art
            modale_art.btn.addEventListener('click',(event)=>{
             
                modale_art.modal_open();
                event.stopPropagation();
            })
           
            modale_art.btn_remove.addEventListener('click',(event)=>{

                     modale_art.modal_remove()
                     event.stopPropagation();
             })
            
        })