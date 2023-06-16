import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'impure',
    pure: false //true makes it pure and false makes it impure
  })
  export class ImpureNoEffectPipe implements PipeTransform {
  
    transform(value: any, args?: any): any {
       return value;
    }
  
  }