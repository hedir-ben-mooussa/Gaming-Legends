import { User } from './../../core/models/user';
import { UserService } from './../../core/services/user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-list-users',
  standalone: false,
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent {
users: User[] = [];

  showModal = false;
  form: FormGroup
  constructor(private UserService: UserService,  private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: [null, [Validators.required, Validators.min(10) , Validators.max(18)]],
      email: [null, [Validators.required, Validators.email]],
      role: [null, [Validators.required, Validators.min(1)]],
      
    });
  }

  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      }
    })
    this.UserService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      }
    })
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.resetForm();
  }

  deleteUser(i: number) {
    this.UserService.deleteUser(i).subscribe(() => {
      this.ngOnInit()
    })
  }

  addUser() {
    this.UserService.createUser(this.form.value as any).subscribe({
      next: () => {
        this.closeModal();
        this.ngOnInit();
      }
    })

  }

  private resetForm() {
    this.form.reset();
  }
}
