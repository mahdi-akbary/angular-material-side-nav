import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICustomer, OrdersBillsService} from "../../orders-bills.service";
import {FormValidationService} from "../../../services/form-validation.service";

@Component({
  selector: 'app-new-customer-dialog',
  templateUrl: './new-customer-dialog.component.html',
  styleUrls: ['./new-customer-dialog.component.styl']
})
export class NewCustomerDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewCustomerDialogComponent>,
    public formBuilder: FormBuilder,
    private ordersBillsService: OrdersBillsService,
    public formValidationService: FormValidationService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      customerName: [this.data && this.data.customerName, this.formValidationService.required.validator],
      tableId: this.data && this.data.tableNumber
    } as ICustomer)
  }

  submit(formData: ICustomer) {
    this.ordersBillsService.storeCustomer(formData).subscribe((res) => {
      this.dialogRef.close(true)
    }, (err) => {
    })
  }

  reset() {

  }

}
