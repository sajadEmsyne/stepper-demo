import { CommonModule } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  CSP_NONCE,
  Input,
  OnInit,
} from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { VeryLongProcessService } from "src/app/services/very-long-process.service";

@Component({
  standalone: true,
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
  imports: [CommonModule, RouterModule],
})
export class StepperComponent implements OnInit {
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private service: VeryLongProcessService
  ) {
    this.service.stepIncrement.subscribe((data) => {
      console.log(data, "dataInc");
      const index = this.labels.findIndex((label) => label === data);
      this.stepIndex = index == -1 ? 0 : index;
    });
    this.service.stepDecrement.subscribe((data) => {
      console.log(data, "data");
      const index = this.labels.findIndex((label) => label === data);
      this.stepIndex = index == -1 ? 0 : index;
    });
  }

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log("eeeveeentt", event);
    //   if (event instanceof NavigationStart) {
    //     console.log("Navigation Started:", event);
    //   } else if (event instanceof NavigationEnd) {
    //     console.log("Navigation Ended:", event);
    //   }
    // });
  }

  @Input() labels: string[] = [];
  stepIndex = 0;
  updateStepIndex(data: string) {
    const index = this.labels.findIndex(
      (label) => label.toLowerCase() === data.toLocaleLowerCase()
    );
    this.stepIndex = index == -1 ? 0 : index;
  }
  ngOnDestroy() {
    // console.log("called");
  }

  next() {
    console.log("Called next");
    this.router.navigate(["/app/stepper/address"]).then((succ)=>{

    }).catch((err)=>{
      console.log(err,"Error")
    });
  }

  prev() {}
}
