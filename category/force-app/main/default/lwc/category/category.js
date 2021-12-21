import { LightningElement,wire,api,track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Category extends LightningElement {
    
    @track part_popup = false;
    @track newcategory = false;

    Hide_part_popup(){
        this.part_popup = false;
    }

    Show_Part_Popup(){
        this.part_popup = true;
    }

    handleSuccess(event) {
        if (event == true) {
        }
    }
    
    category_save() {
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
            element.reportValidity();
        });
        let isError = this.template.querySelector(".slds-has-error");
        if (!isError) {
            this.template.querySelector("lightning-record-edit-form").submit();
            this.handleSuccess(true);
            this.newcategory = false;
            this.dispatchEvent(
                new ShowToastEvent({
                    variant : 'success',
                    message : 'New Category Created'
                }) 
            );     

        } else {
            this.handleSuccess(false);
        }
    }
    Partsave() {
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
            element.reportValidity();
        });
        let isError = this.template.querySelector(".slds-has-error");
        if (!isError) {
            this.template.querySelector("lightning-record-edit-form").submit();
            this.handleSuccess(true);
            this.part_popup = false;
            this.dispatchEvent(
                new ShowToastEvent({
                    variant : 'success',
                    message : 'New Part Created'
                }) 
            );

        } else {
            this.handleSuccess(false);
        }
    }

    categoryHide(){
        this.newcategory = false;
    }
    
    categoryShow(){
        this.newcategory = true;
    }

}