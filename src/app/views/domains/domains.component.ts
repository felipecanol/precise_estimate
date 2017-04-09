import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

declare var swal: any;
declare var jQuery: any;
declare var toastr: any;
declare var Ladda: any;

@Component({
    selector: 'domainsView',
    templateUrl: './domains.template.html',
    providers: []
})
export class DomainsComponent {
    
    public form: FormGroup;
    
    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.form = fb.group({ });
    }

}
