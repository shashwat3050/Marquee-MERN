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

---

## Keyboard Events

| Event   | Description
|---------+------------------
| keydown | Key is pressed.
| keyup   | Key is released.

---

## Form Events

| Event | Description |
|--------|-------------|
| submit | Form is submitted. |
| input | Fires whenever input value changes. |
| change | Fires after value changes and loses focus (for text input). |
| focus | Input gains focus. |
| blur | Input loses focus. |
| reset | Form is reset. |

---

## Window Events

| Event | Description |
|--------|-------------|
| load | Page completely loads. |
| resize | Browser window is resized. |
| scroll | Page is scrolled. |
| unload | Page is about to unload. |

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

| Property | Meaning |
|----------|---------|
| type | Type of event |
| target | Actual element that triggered the event |
| currentTarget | Element on which listener is attached |
| clientX | Mouse X position |
| clientY | Mouse Y position |
| key | Key pressed |
| code | Physical keyboard key |

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

- Event → Action performed by user or browser.
- Event Listener → Waits for an event.
- Event Handler → Function executed after the event occurs.
- Event Object → Information about the event.
- preventDefault() → Stops default browser behavior.
- stopPropagation() → Stops event bubbling/capturing.
- Event Bubbling → Child → Parent.
- Event Capturing → Parent → Child.
- Event Delegation → Parent handles child events.
- addEventListener() → Best way to attach events.
- removeEventListener() → Removes an attached listener.