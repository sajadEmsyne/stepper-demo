import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuMapperService {
  //Array keys replacer object
  keysToUpdate = {
    "menuId": "id",
    "menuName": "label",
    "routePath": "link",
    "parentId": "parentId",
    'subItems': 'subItems'
  };

  iconsToUpdate = ["Dashboard", "Customer", "Loans", "Loan Listing", "Loan Creation", "Reports", "Loan Details Report", "Customer Details Report"];
  activeMenuItems: any = [];
  activeMenu: any = {};

  //Function to initiate menu mapping 
  async initMenuMapping(menu:any) {
    let menusArray: any = JSON.parse(menu);
    const tree =await this.unflattenArray(menusArray);
    const sortedTree =  this.sortNestedArray(tree);
    const menuArrayItems =  this.updateArrayKeys(sortedTree, this.keysToUpdate);
    const updatedMenus =  this.updateMenuIcon(menuArrayItems, this.iconsToUpdate);
    return updatedMenus;
  }

  //Function to map menu items as parent-child
  unflattenArray(arr: string | any[]) {
    const tree = [],
      mappedArr: any = {};
    let arrElem;
    let mappedElem;

    // First map the nodes of the array to an object -> create a hash table.
    for (let i = 0, len = arr.length; i < len; i++) {
      arrElem = arr[i];
      mappedArr[arrElem.menuId] = arrElem;
      mappedArr[arrElem.menuId]['subItems'] = [];
    }

    for (const menuId in mappedArr) {

      if (Object.prototype.hasOwnProperty.call(mappedArr, menuId)) {
        mappedElem = mappedArr[menuId];
        // If the element is not at the root level, add it to its parent array of children.
        if (mappedElem.parentId) {
          mappedArr[mappedElem['parentId']]['subItems'].push(mappedElem);
        }
        // If the element is at the root level, add it to first level elements array.
        else {
          tree.push(mappedElem);
        }
      }
    }
    return tree;
  }

  //Function to sort nested array based on displayOrder value
  sortNestedArray(array: any[]) {
    array.sort((a, b) => a.displayOrder - b.displayOrder);
    array.forEach(a => {
      if (a.subItems && a.subItems.length > 0)
        this.sortNestedArray(a.subItems)
    })
    return array;
  }

  //Function to change keys of nested array
  updateArrayKeys(val: any, keysMap: any): any {
    if (val == null || val == "null") return null;
    if (Array.isArray(val)) {
      return val.map(item => this.updateArrayKeys(item, keysMap));
    } else if (typeof val == "object") {
      return Object.keys(val).reduce((obj: any, key) => {
        const propKey = this.updateArrayKeys(key, keysMap);
        const propVal = this.updateArrayKeys(val[key], keysMap);
        obj[propKey] = propVal;
        return obj;
      }, {});
    } else if (typeof val === "string") {
      return keysMap[val] || val;
    }
    return val;
  }

  updateMenuIcon(menuArray: any[], iconsToUpdate: string | any[]) {
    menuArray
      .forEach(
        function iter(item) {
          if (iconsToUpdate.includes(item.label)) {
            if (item.label === "Dashboard") {
              item.icon = "mdi mdi-developer-board";
            }
            else if (item.label === "Customer") {
              item.icon = "mdi mdi-account-group-outline";
            }
            else if (item.label === "Customers") {
              item.icon = "mdi mdi-account-group-outline";
            }
            else if (item.label === "Loans") {
              item.icon = "mdi mdi-account-tie-outline";
            }
            else if (item.label === "Loan Creation") {
              //item.icon = "mdi mdi-account-star-outline";
              item.icon = "";
            }
            else if (item.label === "Loan Listing") {
              //item.icon = "mdi mdi-account-cash-outline";
              item.icon = "";
            }
            else if (item.label === "Reports") {
              item.icon = "mdi mdi-file-chart";
            }
            else if (item.label === "Loan Details Report") {
              // item.icon = "mdi mdi-file-document";
              item.icon = "";
            }
            else if (item.label === "Customer Details Report") {
              //item.icon = "mdi mdi-file-document";
              item.icon = "";
            }
            else {
              item.icon = "mdi mdi-developer-board";
            }

          }
          Array.isArray(item.subItems) && item.subItems.forEach(iter);
        }
      );
    return menuArray;
  }


}
