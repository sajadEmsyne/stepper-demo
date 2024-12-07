import Step from 'shepherd.js/src/types/step';

export const builtInButtons = {
    cancel: {
        classes: 'cancel-button',
        secondary: true,
        text: 'Exit',
        type: 'cancel'
    },
    next: {
        classes: 'btn btn-success',
        text: 'Next',
        type: 'next'
    },
    back: {
        classes: 'back-button',
        secondary: true,
        text: 'Back',
        type: 'back'
    },
    finish: {
        classes: 'btn btn-primary',
        text: 'Exit',
        type: 'cancel'
    },
};

export const defaultStepOptions: Step.StepOptions = {
    classes: 'shepherd-theme-arrows custom-default-class',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: {
        enabled: true
    },
    canClickTarget: false,
};

export const steps: Step.StepOptions[] = [
    {
        attachTo: {
            element: '.step1',
            on: 'bottom'
        },
        // popperOptions: {
        //     modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
        // },
        buttons: [
            builtInButtons.next
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'intro',
        title: 'Welcome Back !',
        text: ` This is Step 1`
    },
    {
        attachTo: {
            element: '.step2',
            on: 'bottom'
        },
        // popperOptions: {
        //     modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
        // },
        buttons: [
            builtInButtons.back,
            builtInButtons.next
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'installation',
        title: 'Register your account',
        text: 'Get your Free Velzon account now.'
    },
    {
        attachTo: {
            element: '.step3',
            on: 'bottom'
        },
        // popperOptions: {
        //     modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
        // },
        buttons: [
            builtInButtons.back,
            builtInButtons.next
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'usage',
        title: 'Login your account',
        text: 'Sign in to continue to Velzon.'
    },
    {
        attachTo: {
            element: '.step4',
            on: 'bottom'
        },
        // popperOptions: {
        //     modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
        // },
        buttons: [
            builtInButtons.back,
            builtInButtons.next
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'usage',
        title: 'Login your account',
        text: 'Sign in to continue to Velzon.'
    },
    {
        attachTo: {
            element: '.ThankYou',
            on: 'bottom'
        },
        // popperOptions: {
        //     modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
        // },
        buttons: [
            builtInButtons.back,
            builtInButtons.finish
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'usage',
        title: 'Thank you !',
        text: 'Sign in to continue to Velzon.'
    }
];

export const dashboardSteps: Step.StepOptions[] = [
    {
        attachTo: {
            element: '.step1',
            on: 'bottom'
        },
        // popperOptions: {
        //     modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
        // },
        buttons: [
            builtInButtons.next
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'intro',
        title: 'Welcome',
        text: ` Welcome to the Dashboard walkthrough. We will take you through the various elements present on this page.`
    },
    {
        attachTo: {
            element: '.metismenu',
            on: 'bottom'
        },
        // popperOptions: {
        //     modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
        // },
        buttons: [
            builtInButtons.back,
            builtInButtons.next
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'intro',
        title: 'Menus ',
        text: ` All the pages available to the user are listed in this area. The user can navigate to the respective pages to which he /she has access by clicking on the corresponding menu item`
    },
    {
        attachTo: {
            element: '.card-shpd',
            on: 'bottom'
        },
        // popperOptions: {chart-shpd
        //     modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
        // },
        buttons: [
            builtInButtons.back,
            builtInButtons.next
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'installation',
        title: 'Business Overview',
        text: 'This area shows the count of various parameters like AUM, Customer, Outstanding Loans, Document change requests'
    },
    {
        attachTo: {
            element: '.chart-shpd',
            on: 'bottom'
        },
        buttons: [
            builtInButtons.back,
            builtInButtons.next
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'installation',
        title: 'Branch Target Chart',
        text: 'The branch will have targets for a designated period. This chart shows the current position of the branch'
    },
    {
        attachTo: {
            element: '.request-shpd',
            on: 'bottom'
        },
        buttons: [
            builtInButtons.back,
            builtInButtons.next
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'installation',
        title: 'Service Requests',
        text: 'This area shows a categorised view of the pending requests on which the branch has to take action.'
    },
    {
        attachTo: {
            element: '.news-shpd',
            on: 'bottom'
        },
        buttons: [
            builtInButtons.back,
            builtInButtons.next
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'installation',
        title: 'News',
        text: 'An area which shows the various news and circulars published by the Corporate Office'
    },
    {
        attachTo: {
            element: '.ThankYou',
            on: 'bottom'
        },
        // popperOptions: {
        //     modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
        // },
        buttons: [
            builtInButtons.back,
            builtInButtons.finish
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'usage',
        title: 'Thank You',
        text: 'Thank You!'
    }
];