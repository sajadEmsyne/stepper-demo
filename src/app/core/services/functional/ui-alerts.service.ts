/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable@angular-eslint/use-lifecycle-interface */
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { SwalParams } from '../../interfaces/swal-param';

@Injectable({
  providedIn: 'root'
})

export class UiAlertsService {

  constructor(private toastr: ToastrService) { }

  showAlertMessage(message: any, type: any) {
    let alertData = Swal.fire({
      text: message,
      icon: type,
      showCancelButton: false,
      confirmButtonColor: "#4747a1",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
      allowOutsideClick: false,
    });
    return alertData;
  }

  //To show toaster notifications
  //By Sajeev 
  showToastAlert(title: any, icon: string) {
    let toastConfig: any = {
      disableTimeOut: false,
      timeOut: 5000, //Time to live in milliseconds
      extendedTimeOut: 3000, //Time to close after a user hovers over toast
      preventDuplicates: true,
      tapToDismiss: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-top-right',
      easing: 'ease-in',
      easeTime: 400
    };
    if (icon == 'success') {
      this.toastr.success(title, 'Success', toastConfig);
    }
    if (icon == 'error') {
      this.toastr.error(title, 'Error', toastConfig);
    }
    if (icon == 'info') {
      this.toastr.info(title, 'Info', toastConfig);
    }
    if (icon == 'warning') {
      this.toastr.warning(title, 'Warning', toastConfig);
    }
  }

  // toastr and sweet alert functions starts here | aravind
  // sweet alert custom toast init
  sweetAlertToastBox(msg: string, toastColor = '') {
    const swalParams: SwalParams = {
      titleText: msg,
      icon: toastColor ? toastColor : 'info'
    }
    this.swalMixinToast(swalParams);
  }

  // Sweet alert custom toast box
  swalMixinToast(swalParams: SwalParams) {
    // success", "error", "warning", "info" or "question"
    const Toast = Swal.mixin({
      toast: true,
      position: swalParams?.position ? swalParams?.position : 'top-end',
      iconColor: '#fff',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    })
    Toast.fire({
      icon: swalParams?.icon ? swalParams?.icon : 'info',
      title: swalParams?.titleText,
    });
  }
}
