import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: 'sanitize'
})
export class UrlSanitizer implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) {}

    transform(value: any, ...args: any[]) {
        return this.domSanitizer.bypassSecurityTrustStyle(value);
    }

}