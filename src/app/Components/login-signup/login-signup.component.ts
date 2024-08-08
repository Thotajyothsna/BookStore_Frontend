import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.scss'
})
export class LoginSignupComponent implements OnInit{
  loginDataForm!: FormGroup;
  SignUpDataForm!:FormGroup;
  displayLogin = true; 
  constructor(private formBuilder : FormBuilder , private userService : UserService){}

  ngOnInit(): void {
    this.loginDataForm=this.formBuilder.group({
      emailId :['',[Validators.email,Validators.required]],
      password:['',[Validators.required]]
    })
    this.SignUpDataForm=this.formBuilder.group({
      fullName:['',[Validators.required]],
      emailId:['',[Validators.email,Validators.required]],
      password:['',Validators.required],
      mobileNumber:['',Validators.required]
    })
  }

  OnLogin(){
    let reqData={
       emailId:this.loginDataForm.value.emailId,
       password:this.loginDataForm.value.password
    } 
    this.userService.login(reqData).subscribe((response:any)=>{
      console.log("Login Successfull")
    
      localStorage.setItem('token', response.data);
    })
  }

  OnSignUp(){
    let reqData={
      fullName:this.SignUpDataForm.value.fullName,
      emailId:this.SignUpDataForm.value.emailId,
      password:this.SignUpDataForm.value.password,
      mobileNumber:this.SignUpDataForm.value.mobileNumber
    } 
    this.userService.signin(reqData).subscribe((response:any)=>{
      console.log("Sign Up Successfull")
      console.log(response);
    })
  

  }
}
