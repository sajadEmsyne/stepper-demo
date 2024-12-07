export interface SwalParams {
    title?: string;
    titleText?: string;
    icon?: any;
    text?: string
    html?: string;
    showCloseButton?: boolean;
    showCancelButton?: boolean; 
    focusConfirm?: boolean; 
    confirmButtonText?: string;
    confirmButtonAriaLabel?: string;
    cancelButtonText?: string;
    cancelButtonAriaLabel?: string;
    heightAuto?: boolean;
    animation?: boolean;
    backdrop?: boolean;
    allowOutsideClick?: boolean;
    allowEscapeKey?: boolean;
    allowEnterKey?: boolean;
    footer?: string;
    imageUrl?: string;
    imageAlt?: string;
    position?: any;
    showConfirmButton?: boolean;
    showLoaderOnConfirm?: boolean;
    preConfirm?: () => void;
}