import { Component, EventEmitter, OnInit, Output , Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private acoountService: AccountService , private toastr: ToastrService) { }
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  ngOnInit(): void {
  }

  register() {
    this.acoountService.register(this.model).subscribe(response =>{
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}

