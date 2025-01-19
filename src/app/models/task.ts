export class Task {
  constructor(
    private _title: string
  ) {}

  /**
   * The function `title` returns the title with the first letter capitalized.
   * @returns The `get title()` method returns the title with the first letter capitalized.
   */
  get title(): string {
    return this._title.charAt(0).toUpperCase() + this._title.slice(1);
  }

  /**
   * The above function sets the value of the "title" property in a TypeScript class.
   * @param {string} value - The `value` parameter in the `set title(value: string)` function
   * represents the new value that will be assigned to the `_title` property.
   */
  set title(value: string) {
    this._title = value;
  }
}
