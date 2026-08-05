# DOM Events

## 1. What is an Event?

An **Event** in the DOM is an action that occurs in the browser. It can be performed by:
- User (click, type, scroll, etc.)
- Browser (page load, resize, etc.)

Examples:
- Clicking a button
- Pressing a key
- Moving the mouse
- Submitting a form
- Scrolling a page

---

## 2. Event Listener

An **Event Listener** is a function that waits (listens) for a particular event to occur on an element.

### Syntax

```javascript
element.addEventListener("eventName", eventHandler);
```

Example:

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", greet);

function greet() {
    console.log("Button Clicked");
}
```

---

## 3. Event Handler

An **Event Handler** is the function that executes when an event occurs.

Example:

```javascript
function greet() {
    console.log("Hello");
}

button.addEventListener("click", greet);
```

Here,
- `click` → Event
- `greet()` → Event Handler

---

# Common DOM Events

## Mouse Events

| Event       | Description                                  |
+-------------+----------------------------------------------+
| click       | Fires when an element is clicked.            |
| dblclick    | Fires on double click.                       |
| mousedown   | Mouse button is pressed.                     |
| mouseup     | Mouse button is released.                    |
| mouseenter  | Mouse enters an element.                     |
| mouseleave  | Mouse leaves an element.                     |
| mouseover   | Mouse moves over an element or its children. |
| mouseout    | Mouse leaves an element or its children.     |
| mousemove   | Mouse moves inside an element.               |
| contextmenu | Right-click event.                           |


# Code Examples -

---

## 1. click

Occurs when an element is clicked.

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("Button Clicked");
});
```

---

## 2. dblclick

Occurs when an element is double-clicked.

```javascript
btn.addEventListener("dblclick", () => {
    console.log("Double Clicked");
});
```

---

## 3. mousedown

Occurs when a mouse button is pressed.

```javascript
btn.addEventListener("mousedown", () => {
    console.log("Mouse Button Pressed");
});
```

---

## 4. mouseup

Occurs when a pressed mouse button is released.

```javascript
btn.addEventListener("mouseup", () => {
    console.log("Mouse Button Released");
});
```

---

## 5. mouseenter

Occurs when the mouse enters an element.

```javascript
const box = document.getElementById("box");

box.addEventListener("mouseenter", () => {
    console.log("Mouse Entered");
});
```

---

## 6. mouseleave

Occurs when the mouse leaves an element.

```javascript
box.addEventListener("mouseleave", () => {
    console.log("Mouse Left");
});
```

---

## 7. mouseover

Occurs when the mouse moves over an element or one of its children.

```javascript
box.addEventListener("mouseover", () => {
    console.log("Mouse Over");
});
```

---

## 8. mouseout

Occurs when the mouse leaves an element or one of its children.

```javascript
box.addEventListener("mouseout", () => {
    console.log("Mouse Out");
});
```

---

## 9. mousemove

Occurs whenever the mouse moves inside an element.

```javascript
box.addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY);
});
```

---

## 10. contextmenu

Occurs when the user right-clicks.

```javascript
box.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log("Right Click");
});
```

---

## Keyboard Events

| Event   | Description
+---------+------------------
| keydown | Key is pressed.
| keyup   | Key is released.

# Code Example -

## 1. keydown

Occurs when a key is pressed.

```javascript
document.addEventListener("keydown", (e) => {
    console.log(e.key);
});
```

---

## 2. keyup

Occurs when the key is released.

```javascript
document.addEventListener("keyup", (e) => {
    console.log(e.key);
});
```

---

## Form Events

| Event  | Description
+--------+-------------------------------------------------------------
| submit | Form is submitted.
| input  | Fires whenever input value changes.
| change | Fires after value changes and loses focus (for text input).
| focus  | Input gains focus.
| blur   | Input loses focus.
| reset  | Form is reset.

# Code Example -

## 1. input

Occurs whenever the value changes.

```javascript
const input = document.getElementById("name");

input.addEventListener("input", () => {
    console.log(input.value);
});
```

---

## 2. change

Occurs after the value changes and the element loses focus.

```javascript
input.addEventListener("change", () => {
    console.log(input.value);
});
```

---

## 3. focus

Occurs when an input gets focus.

```javascript
input.addEventListener("focus", () => {
    console.log("Focused");
});
```

---

## 4. blur

Occurs when an input loses focus.

```javascript
input.addEventListener("blur", () => {
    console.log("Focus Lost");
});
```

---

## 5. submit

Occurs when a form is submitted.

```javascript
const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form Submitted");
});
```

---

## 6. reset

Occurs when a form is reset.

```javascript
form.addEventListener("reset", () => {
    console.log("Form Reset");
});
```

---

## Window Events

| Event  | Description
+--------+---------------------------
| load   | Page completely loads.
| resize | Browser window is resized.
| scroll | Page is scrolled.
| unload | Page is about to unload.

# Code Example -

## 1. load

Occurs after the entire page has loaded.

```javascript
window.addEventListener("load", () => {
    console.log("Page Loaded");
});
```
---

## 2. DOMContentLoaded

Occurs when the HTML has been loaded (images may still be loading).

```javascript
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Ready");
});
```

---

## 3. resize

Occurs when the browser window is resized.

```javascript
window.addEventListener("resize", () => {
    console.log(window.innerWidth);
});
```

---

## 4. scroll

Occurs when the page is scrolled.

```javascript
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
});
```

---

## Clipboard Events

| Event | Description
+-------+---------------------------------------------
| copy  | Fires when the user copies selected content.
| cut   | Fires when the user cuts selected content.
| paste | Fires when the user pastes content.

# Code Example -

## 1. copy

```javascript
document.addEventListener("copy", () => {
    console.log("Copied");
});
```

---

## 2. cut

```javascript
document.addEventListener("cut", () => {
    console.log("Cut");
});
```

---

## 3. paste

```javascript
document.addEventListener("paste", () => {
    console.log("Pasted");
});
```

---

## Drag & Drop Events

| Event     | Description
|-----------+--------------------------------------------------------------------
| drag      | Fires continuously while an element is being dragged.
| dragstart | Fires when dragging starts.
| dragend   | Fires when dragging ends.
| dragenter | Fires when a draggable element enters a valid drop target.
| dragover  | Fires continuously while a draggable element is over a drop target.
| dragleave | Fires when a draggable element leaves a drop target.
| drop      | Fires when the dragged element is dropped onto a valid drop target.

# Code Example -

## 1. dragstart

```javascript
item.addEventListener("dragstart", () => {
    console.log("Dragging Started");
});
```

---

## 2. dragend

```javascript
item.addEventListener("dragend", () => {
    console.log("Dragging Ended");
});
```

---

## 3. dragover

```javascript
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
});
```

---

## 4. drop

```javascript
dropZone.addEventListener("drop", () => {
    console.log("Item Dropped");
});
```
---


# Ways to Attach Events

## 1. Inline Event (Not Recommended)

```html
<button onclick="greet()">Click</button>
```

---

## 2. Using Property

```javascript
button.onclick = greet;
```

Limitation:
- Only one handler can be attached.

---

## 3. Using addEventListener() (Recommended)

```javascript
button.addEventListener("click", greet);
```

Advantages:
- Multiple handlers can be attached.
- Easy to remove.
- More flexible.

---

# Event Object

Whenever an event occurs, JavaScript automatically creates an **Event Object**.
It is a object that is passed in a event handler function.

```javascript
button.addEventListener("click", function(event){
    console.log(event);
});
```

or

```javascript
button.addEventListener("click", (e)=>{
    console.log(e);
});
```

The variable name can be anything:
- event
- e
- evt

---

# Common Properties of Event Object

```javascript
button.addEventListener("click", (e)=>{
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);
});
```

| Property      | Meaning
+---------------+----------------------------------------
| type          | Type of event
| target        | Actual element that triggered the event
| currentTarget | Element on which listener is attached
| clientX       | Mouse X position
| clientY       | Mouse Y position
| key           | Key pressed
| code          | Physical keyboard key

---

# this inside Event Listener

```javascript
button.addEventListener("click", function(){
    console.log(this);
});
```

Output:

```javascript
<button>Click</button>
```

Arrow Function:

```javascript
button.addEventListener("click", ()=>{
    console.log(this);
});
```

Arrow functions don't have their own `this`.

---

# preventDefault()

Stops the browser's default behavior.

Example:

```javascript
form.addEventListener("submit", (e)=>{
    e.preventDefault();
});
```

Without it:
- Form reloads the page.

With it:
- Page doesn't reload.

---

# stopPropagation()

Stops the event from moving to parent elements.

```javascript
child.addEventListener("click",(e)=>{
    e.stopPropagation();
});
```

---

# Event Bubbling

Default behavior.

Event travels:

```
Child
   ↑
Parent
   ↑
Grandparent
```

Example:

```javascript
child.addEventListener("click", ()=>{
    console.log("Child");
});

parent.addEventListener("click", ()=>{
    console.log("Parent");
});
```

Output:

```
Child
Parent
```

---

# Event Capturing

Opposite of bubbling.

```
Grandparent
      ↓
Parent
      ↓
Child
```

Enable it by passing `true` or `{capture: true}`.

```javascript
parent.addEventListener("click", handler, true);

// OR

parent.addEventListener("click", handler, {
    capture: true
});
```

---

# removeEventListener()

Removes an event listener.

```javascript
function greet(){
    console.log("Hello");
}

button.addEventListener("click", greet);

button.removeEventListener("click", greet);
```

Note:
The same function reference must be passed.

---

# Event Delegation

Instead of adding listeners to every child, attach one listener to the parent.

```javascript
ul.addEventListener("click",(e)=>{

    if(e.target.tagName === "LI"){
        console.log(e.target.innerText);
    }

});
```

Advantages:
- Better performance
- Handles dynamically added elements
- Less code

---

# DOMContentLoaded

Runs when the HTML is fully loaded.

```javascript
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM Loaded");
});
```

Difference:

```
DOMContentLoaded
↓
HTML loaded

load
↓
HTML + CSS + Images + Videos loaded
```

---

# Useful Keyboard Example

```javascript
document.addEventListener("keydown",(e)=>{
    console.log(e.key);
    console.log(e.code);
});
```

---

# Useful Mouse Example

```javascript
document.addEventListener("mousemove",(e)=>{
    console.log(e.clientX, e.clientY);
});
```

---

# Summary

- Event                 → Action performed by user or browser.
- Event Listener        → Waits for an event.
- Event Handler         → Function executed after the event occurs.
- Event Object          → Information about the event.
- preventDefault()      → Stops default browser behavior.
- stopPropagation()     → Stops event bubbling/capturing.
- Event Bubbling        → Child → Parent.
- Event Capturing       → Parent → Child.
- Event Delegation      → Parent handles child events.
- addEventListener()    → Best way to attach events.
- removeEventListener() → Removes an attached listener.