# Angular Architecture Notes

This document explains the key concepts of Angular's architecture.

## 1. Modules

- Angular apps are divided into modules.
- The root module (`AppModule`) is the entry point.
- Feature modules organize the app into smaller, reusable parts.

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## 2. Components

- Components are the building blocks of Angular apps.
- Each component has:
  - **HTML Template**: Defines the UI structure.
  - **CSS/SCSS**: Styles the component.
  - **TypeScript Class**: Contains logic and data.

```typescript
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  title = 'Hello, Angular!';
}
```

## 3. Templates and Data Binding

- Templates use Angular's syntax to bind data between the component and the view.
- Types of Binding:
  - **Interpolation**: `{{ data }}`
  - **Property Binding**: `[property]="value"`
  - **Event Binding**: `(event)="handler()`

```html
<h1>{{ title }}</h1>
<button (click)="onClick()">Click Me</button>
```

## 4. Directives

- Directives modify the DOM.
- **Structural Directives**: Change the structure (e.g., `*ngIf`, `*ngFor`).
- **Attribute Directives**: Change appearance/behavior (e.g., `ngClass`, `ngStyle`).

```html
<div *ngIf="isVisible">Visible Content</div>
<div [ngClass]="{'active': isActive}">Styled Content</div>
```

## 5. Services and Dependency Injection

- Services share logic or data across components.
- Dependency Injection provides services where needed.

```typescript
@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return ['Item1', 'Item2'];
  }
}
```

## 6. Routing

- The Angular Router enables navigation between views.
- Routes are defined in a routing module.

```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

## 7. Pipes

- Pipes transform data in templates (e.g., format dates, numbers).

```html
<p>{{ today | date:'short' }}</p>
```

## 8. CLI (Command Line Interface)

- Angular CLI helps generate files and manage builds.

### Example Commands

- `ng generate component example`
- `ng serve`

## 9. High-Level Angular Project Commands

These commands are used to create and manage Angular projects:

1. **Create a new Angular application**:

   ```bash
   ng new <project-name>
   ```

2. **Serve the application locally**:

   ```bash
   ng serve
   ```

3. **Generate a new component**:

   ```bash
   ng generate component <component-name>
   ```

4. **Generate a new service**:

   ```bash
   ng generate service <service-name>
   ```

5. **Generate a new module**:

   ```bash
   ng generate module <module-name>
   ```

6. **Build the application for production**:

   ```bash
   ng build --prod
   ```

7. **Run unit tests**:

   ```bash
   ng test
   ```

8. **Run end-to-end tests**:

   ```bash
   ng e2e
   ```

9. **Add a new library or feature**:

   ```bash
   ng add <library-name>
   ```

10. **Lint the project**:

   ```bash
   ng lint
   ```

## 10. Files and Directories Created by Angular CLI Commands

Below are examples of files and directories created by common commands:

### 1. Create a new Angular application

Command: `ng new <project-name>`

Example:

```bash
<project-name>/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   └── main.ts
├── angular.json
├── package.json
└── README.md
```

### 2. Generate a new component

Command: `ng generate component <component-name>`

Example:

```bash
src/app/<component-name>/
├── <component-name>.component.ts
├── <component-name>.component.html
├── <component-name>.component.css
└── <component-name>.component.spec.ts
```

### 3. Generate a new service

Command: `ng generate service <service-name>`

Example:

```bash
src/app/<service-name>.service.ts
src/app/<service-name>.service.spec.ts
```

### 4. Generate a new module

Command: `ng generate module <module-name>`

Example:

```bash
src/app/<module-name>/
└── <module-name>.module.ts
```

### 5. Build the application for production

Command: `ng build --prod`

Example:

```bash
dist/<project-name>/
├── index.html
├── main.js
├── polyfills.js
└── styles.css
```
