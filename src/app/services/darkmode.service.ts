import { Injectable } from "@angular/core";

@Injectable()
export class DarkModeService {
    private darkMode: boolean = true

    constructor() {}

    swichDarkMode() { this.darkMode = !this.darkMode }
    getDarkMode() { return this.darkMode}
}