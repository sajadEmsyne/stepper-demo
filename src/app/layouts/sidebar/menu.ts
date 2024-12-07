import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 179,
    label: "MENUITEMS.MULTILEVEL.TEXT",
    icon: "ri ri-settings-2-line",
    subItems: [
      {
        id: 181,
        label: "MENUITEMS.MULTILEVEL.PAGES.TEXT1",
        subItems: [
          {
            id: 182,
            label: "MENUITEMS.MULTILEVEL.PAGES.PRODUCT.LIST",
            parentId: 181,
            link: "/app/product/list",
          },
          {
            id: 183,
            label: "MENUITEMS.MULTILEVEL.PAGES.PRODUCT.CREATE",
            parentId: 181,
            link: "/app/product/create",
          },
          {
            id: 184,
            label: "MENUITEMS.MULTILEVEL.PAGES.PRODUCT.ITEMLIST",
            parentId: 181,
            link: "/app/product/item-nature-list",

          },
          {
            id: 185,
            label: "MENUITEMS.MULTILEVEL.PAGES.PRODUCT.ITEMCREATE",
            parentId: 181,
            link: "/app/product/item-nature-create",
          },
          {
            hideLabel: true,
            link: "/app/product/item-nature-edit",
          },


          {
            id: 186,
            label:
              "MENUITEMS.MULTILEVEL.PAGES.PRODUCT.UNITGROUP.UNITGROUP",
            parentId: 181,
            subItems: [
              {
                id: 203,
                label:
                  "MENUITEMS.MULTILEVEL.PAGES.PRODUCT.UNITGROUP.LIST",
                parentId: 186,
                link: "/app/product/unit-group-list",
              },
              {
                id: 204,
                label:
                  "MENUITEMS.MULTILEVEL.PAGES.PRODUCT.UNITGROUP.CREATE",
                parentId: 186,
                link: "/app/product/unit-group-create"
              },
            ],
          },
        ],
      },
      {
        id: 181,
        label: "MENUITEMS.MULTILEVEL.PAGES.TEXT2",
        subItems: [
          {
            id: 182,
            label: "MENUITEMS.MULTILEVEL.PAGES.ORGANIZATION.LIST",
            parentId: 181,
            link: "/app/organization/list",
          },
          {
            id: 183,
            label: "MENUITEMS.MULTILEVEL.PAGES.ORGANIZATION.CREATE",
            parentId: 181,
            link: "/app/organization/create",
          },
        ],
      },
      {
        id: 181,
        label: "MENUITEMS.MULTILEVEL.PAGES.TEXT3",
        subItems: [
          {
            id: 182,
            label: "MENUITEMS.MULTILEVEL.PAGES.USER.USER-LIST",
            parentId: 181,
            link: "/app/user/list",
          },
          {
            id: 183,
            label: "MENUITEMS.MULTILEVEL.PAGES.USER.USER-CREATE",
            parentId: 181,
            link: "/app/user/create",
          },

          {
            id: 184,
            label: "MENUITEMS.MULTILEVEL.PAGES.USER.ROLE-LIST",
            parentId: 181,
            link: "/app/user/role-list",
          },
          {
            id: 185,
            label: "MENUITEMS.MULTILEVEL.PAGES.USER.ROLE-CREATE",
            parentId: 181,
            link: "/app/user/role-create",
          },
          {
            hideLabel: true,
            link: "/app/user/list/edit",
          },
          {
            hideLabel: true,
            link: "/app/user/role-view",
          },
          {
            hideLabel: true,
            link: "/app/product/item-nature-view",
          },
          {
            hideLabel: true,
            link: "/app/user/user-view",
          },
          {
            hideLabel: true,
            link: "/app/user/role-edit",
          },
          {
            id: 186,
            label: "MENUITEMS.MULTILEVEL.PAGES.USER.ROLE-PERMISSION",
            parentId: 181,
            link: "/app/user/role-permission",
          }
        ],
      },
      {
        id: 181,
        label: "MENUITEMS.MULTILEVEL.PAGES.TEXT4",
        subItems: [
          {
            id: 185,
            label:
              "MENUITEMS.MULTILEVEL.PAGES.MASTERSETTINGS.HOLIDAY.HOLIDAYLBL",
            parentId: 181,
            subItems: [
              {
                id: 201,
                label: "MENUITEMS.MULTILEVEL.PAGES.MASTERSETTINGS.HOLIDAY.LIST",
                parentId: 185,
                link: "/app/mastersettings/holiday-list",
              },
              {
                id: 202,
                label:
                  "MENUITEMS.MULTILEVEL.PAGES.MASTERSETTINGS.HOLIDAY.CREATE",
                parentId: 185,
                link: "/app/mastersettings/holiday-create",
              },
            ],
          },
          {
            id: 186,
            label:
              "MENUITEMS.MULTILEVEL.PAGES.MASTERSETTINGS.ATTACHNATURE.ATTACHNATURELBL",
            parentId: 181,
            subItems: [
              {
                id: 203,
                label:
                  "MENUITEMS.MULTILEVEL.PAGES.MASTERSETTINGS.ATTACHNATURE.LIST",
                parentId: 186,
                link: "/app/mastersettings/product-nature-list",
              },
              {
                id: 204,
                label:
                  "MENUITEMS.MULTILEVEL.PAGES.MASTERSETTINGS.ATTACHNATURE.CREATE",
                parentId: 186,
                link: "/app/mastersettings/product-nature-create",
              },
              {
                hideLabel: true,
                link: "/app/mastersettings/product-nature-edit",
              },
            ],
          },
          {
            id: 187,
            label:
              "MENUITEMS.MULTILEVEL.PAGES.MASTERSETTINGS.SPECIALWORKINGDAY.SPECIALWORKINGDAYLBL",
            parentId: 181,
            subItems: [
              {
                id: 205,
                label:
                  "MENUITEMS.MULTILEVEL.PAGES.MASTERSETTINGS.SPECIALWORKINGDAY.LIST",
                parentId: 187,
                link: "/app/mastersettings/specialworkingday-list",
              },
              {
                id: 206,
                label:
                  "MENUITEMS.MULTILEVEL.PAGES.MASTERSETTINGS.SPECIALWORKINGDAY.CREATE",
                parentId: 187,
                link: "/app/mastersettings/specialworkingday-create",
              },
            ],
          },
          {
            id: 188,
            label:
              "MENUITEMS.MULTILEVEL.PAGES.MASTERSETTINGS.DISTRICT.DISTRICTLBL",
            parentId: 181,
            subItems: [
              {
                id: 207,
                label:
                  "MENUITEMS.MULTILEVEL.PAGES.MASTERSETTINGS.DISTRICT.MANAGEMENT",
                parentId: 188,
                link: "/app/mastersettings/district-management",
              }
            ],
          },
        ],
      },
      {
        id: 199,
        label: "MENUITEMS.MULTILEVEL.PAGES.TEXT6",
        subItems: [
          {
            id: 201,
            label: "MENUITEMS.MULTILEVEL.PAGES.CUSTOMER.LIST",
            parentId: 199,
            link: "/app/customer/list",
          },
          {
            id: 202,
            label: "MENUITEMS.MULTILEVEL.PAGES.CUSTOMER.CREATE",
            parentId: 199,
            link: "/app/customer/create",
          },
        ],
      },
      {
        id: 299,
        label: "MENUITEMS.MULTILEVEL.PAGES.TEXT5",
        subItems: [
          {
            id: 201,
            label: "MENUITEMS.MULTILEVEL.PAGES.LOAN.CREATE",
            parentId: 299,
            link: "/app/loan/create",
          },
        ],
      },
      {
        id: 300,
        label: "MENUITEMS.MULTILEVEL.PAGES.TEXT7",
        subItems: [
          {
            id: 302,
            label: "MENUITEMS.MULTILEVEL.PAGES.OTHERS.SCHEME.LIST",
            parentId: 300,
            link: "/app/others/scheme-list",
          },
          {
            id: 301,
            label: "MENUITEMS.MULTILEVEL.PAGES.OTHERS.SCHEME.CREATE",
            parentId: 300,
            link: "/app/others/scheme-create",
          }
        ],
      }
    ],
  },
];
