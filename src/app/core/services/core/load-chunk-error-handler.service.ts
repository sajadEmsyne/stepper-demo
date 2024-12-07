import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadChunkErrorHandlerService implements ErrorHandler {

  constructor(private readonly injector: Injector) { }

  handleError(error: any): void {
      const chunkFailedMessage = /Loading chunk [\d]+ failed/;
      if (chunkFailedMessage.test(error.message)) {
          //console.error(error);
          this.openNewVersionBanner();
      }
  }

  openNewVersionBanner(): void {
    console.error('NEW_VERSION_AVAILABLE');
    window.location.reload()
      // const initialState = {
      //     modalTitleText: 'NEW_VERSION_AVAILABLE_TITLE',
      //     modalBodyTextKey: 'NEW_VERSION_AVAILABLE_BODY'
      // };
      // const modalService = this.injector.get(BsModalService);
      // const bannerModal = modalService.show(CommonModalComponent, { class: 'modal-dialog-centered modal-medium', initialState, ignoreBackdropClick: true });
      // bannerModal.content.onClose.subscribe(() => window.location.reload());
  }
}
