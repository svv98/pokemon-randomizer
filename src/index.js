 const selectTypeEvents = (function(){
    
    const selectTypeModal = document.querySelector('#selectTypeModal');
    return {selectTypeModal}
})();
//selectTypeEvents.selectTypeModal.showModal();
const selectTypeButton = document.querySelector(".selectTypeButton");
 selectTypeButton.addEventListener('click',()=>{
        selectTypeEvents.selectTypeModal.showModal();
});